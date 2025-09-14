#!/bin/bash

# Build script for Docker with environment variables
# Usage: ./docker-build.sh [environment]
# Environment: development, staging, production

ENVIRONMENT=${1:-development}
IMAGE_NAME="rembg-frontend"
TAG="${ENVIRONMENT}"

echo "🐳 Building Docker image for environment: ${ENVIRONMENT}"

# Load environment variables from file
if [ -f ".env.${ENVIRONMENT}" ]; then
    echo "📄 Loading environment variables from .env.${ENVIRONMENT}"
    source .env.${ENVIRONMENT}
else
    echo "⚠️  Environment file .env.${ENVIRONMENT} not found, using defaults"
fi

# Build with build args for NEXT_PUBLIC_* variables
docker build \
    --build-arg NEXT_PUBLIC_ADSENSE_PUBLISHER_ID="${NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}" \
    --build-arg NEXT_PUBLIC_ADSENSE_HEADER_SLOT="${NEXT_PUBLIC_ADSENSE_HEADER_SLOT}" \
    --build-arg NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT="${NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT}" \
    --build-arg NEXT_PUBLIC_ADSENSE_CONTENT_SLOT="${NEXT_PUBLIC_ADSENSE_CONTENT_SLOT}" \
    --build-arg NEXT_PUBLIC_ADSENSE_FOOTER_SLOT="${NEXT_PUBLIC_ADSENSE_FOOTER_SLOT}" \
    --build-arg NEXT_PUBLIC_ADSENSE_MOBILE_SLOT="${NEXT_PUBLIC_ADSENSE_MOBILE_SLOT}" \
    --build-arg NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}" \
    --build-arg NEXT_PUBLIC_APP_URL="${NEXT_PUBLIC_APP_URL}" \
    -t "${IMAGE_NAME}:${TAG}" \
    -t "${IMAGE_NAME}:latest" \
    .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully: ${IMAGE_NAME}:${TAG}"
    echo ""
    echo "🚀 To run the container:"
    echo "docker run -d --name rembg-app-${ENVIRONMENT} -p 3000:3000 \\"
    echo "  -e BACKEND_URL=\"\${BACKEND_URL}\" \\"
    echo "  ${IMAGE_NAME}:${TAG}"
    echo ""
    echo "🐙 Or use Docker Compose:"
    echo "docker-compose --env-file .env.${ENVIRONMENT} up -d"
else
    echo "❌ Docker build failed"
    exit 1
fi
