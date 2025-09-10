#!/bin/bash

# Production deployment script for RemoveBG AI Frontend

set -e

echo "🚀 Starting RemoveBG AI Frontend deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t rembg-frontend:latest .

# Check if the build was successful
if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
else
    echo "❌ Docker build failed!"
    exit 1
fi

# Create SSL directory if it doesn't exist
mkdir -p ssl

# Generate self-signed certificates if they don't exist
if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
    echo "🔐 Generating self-signed SSL certificates..."
    openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes \
        -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=localhost"
    echo "⚠️  Note: Using self-signed certificates. For production, use proper SSL certificates."
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Start the application
echo "🏃 Starting the application..."
docker-compose up -d

# Wait for the application to start
echo "⏳ Waiting for the application to start..."
sleep 10

# Check if the application is healthy
echo "🩺 Checking application health..."
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Application is healthy!"
    echo ""
    echo "🎉 Deployment successful!"
    echo ""
    echo "📍 Your application is running at:"
    echo "   • HTTP:  http://localhost"
    echo "   • HTTPS: https://localhost"
    echo "   • Direct: http://localhost:3000"
    echo ""
    echo "📊 To view logs:"
    echo "   docker-compose logs -f"
    echo ""
    echo "🛑 To stop the application:"
    echo "   docker-compose down"
else
    echo "❌ Application health check failed!"
    echo "📋 Check logs with: docker-compose logs"
    exit 1
fi
