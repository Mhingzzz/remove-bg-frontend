@echo off
setlocal enabledelayedexpansion

echo 🚀 Starting RemoveBG AI Frontend deployment...

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not running. Please start Docker Desktop first.
    pause
    exit /b 1
)

echo 📦 Building Docker image...
docker build -t rembg-frontend:latest .

if %errorlevel% neq 0 (
    echo ❌ Docker build failed!
    pause
    exit /b 1
)

echo ✅ Docker image built successfully!

REM Create SSL directory if it doesn't exist
if not exist "ssl" mkdir ssl

REM Generate self-signed certificates if they don't exist
if not exist "ssl\cert.pem" (
    echo 🔐 Generating self-signed SSL certificates...
    openssl req -x509 -newkey rsa:4096 -keyout ssl\key.pem -out ssl\cert.pem -days 365 -nodes -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=localhost"
    echo ⚠️  Note: Using self-signed certificates. For production, use proper SSL certificates.
)

echo 🛑 Stopping existing containers...
docker-compose down

echo 🏃 Starting the application...
docker-compose up -d

echo ⏳ Waiting for the application to start...
timeout /t 10 /nobreak >nul

echo 🩺 Checking application health...
curl -f http://localhost:3000/api/health >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Application is healthy!
    echo.
    echo 🎉 Deployment successful!
    echo.
    echo 📍 Your application is running at:
    echo    • HTTP:  http://localhost
    echo    • HTTPS: https://localhost
    echo    • Direct: http://localhost:3000
    echo.
    echo 📊 To view logs:
    echo    docker-compose logs -f
    echo.
    echo 🛑 To stop the application:
    echo    docker-compose down
) else (
    echo ❌ Application health check failed!
    echo 📋 Check logs with: docker-compose logs
)

pause
