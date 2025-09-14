# PowerShell build script for Docker with environment variables
# Usage: .\docker-build.ps1 [environment]
# Environment: development, staging, production

param(
    [string]$Environment = "development"
)

$ImageName = "kunmhing/rembg-frontend"
$Tag = "latest"
# $Tag = $Environment

Write-Host "🐳 Building Docker image for environment: $Environment" -ForegroundColor Green

# Load environment variables from file
$EnvFile = ".env.$Environment"
if (Test-Path $EnvFile) {
    Write-Host "📄 Loading environment variables from $EnvFile" -ForegroundColor Yellow
    
    # Read environment file and set variables
    Get-Content $EnvFile | ForEach-Object {
        if ($_ -match '^([^#][^=]+)=(.*)$') {
            $name = $matches[1]
            $value = $matches[2]
            [Environment]::SetEnvironmentVariable($name, $value, "Process")
        }
    }
} else {
    Write-Host "⚠️  Environment file $EnvFile not found, using defaults" -ForegroundColor Yellow
}

# Get environment variables
$NEXT_PUBLIC_ADSENSE_PUBLISHER_ID = $env:NEXT_PUBLIC_ADSENSE_PUBLISHER_ID
$NEXT_PUBLIC_ADSENSE_HEADER_SLOT = $env:NEXT_PUBLIC_ADSENSE_HEADER_SLOT
$NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT = $env:NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT
$NEXT_PUBLIC_ADSENSE_CONTENT_SLOT = $env:NEXT_PUBLIC_ADSENSE_CONTENT_SLOT
$NEXT_PUBLIC_ADSENSE_FOOTER_SLOT = $env:NEXT_PUBLIC_ADSENSE_FOOTER_SLOT
$NEXT_PUBLIC_ADSENSE_MOBILE_SLOT = $env:NEXT_PUBLIC_ADSENSE_MOBILE_SLOT
$NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = $env:NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
$NEXT_PUBLIC_APP_URL = $env:NEXT_PUBLIC_APP_URL

# Build Docker image
Write-Host "🔨 Building Docker image..." -ForegroundColor Blue

$buildArgs = @(
    "--build-arg", "NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=$NEXT_PUBLIC_ADSENSE_PUBLISHER_ID",
    "--build-arg", "NEXT_PUBLIC_ADSENSE_HEADER_SLOT=$NEXT_PUBLIC_ADSENSE_HEADER_SLOT",
    "--build-arg", "NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=$NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT",
    "--build-arg", "NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=$NEXT_PUBLIC_ADSENSE_CONTENT_SLOT",
    "--build-arg", "NEXT_PUBLIC_ADSENSE_FOOTER_SLOT=$NEXT_PUBLIC_ADSENSE_FOOTER_SLOT",
    "--build-arg", "NEXT_PUBLIC_ADSENSE_MOBILE_SLOT=$NEXT_PUBLIC_ADSENSE_MOBILE_SLOT",
    "--build-arg", "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=$NEXT_PUBLIC_GOOGLE_ANALYTICS_ID",
    "--build-arg", "NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL",
    "-t", "$ImageName`:$Tag",
    "-t", "$ImageName`:latest",
    "."
)

& docker build @buildArgs

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker image built successfully: $ImageName`:$Tag" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 To run the container:" -ForegroundColor Cyan
    Write-Host "docker run -d --name rembg-app-$Environment -p 3000:3000 \\" -ForegroundColor White
    Write-Host "  -e `"BACKEND_URL=`$env:BACKEND_URL`" \\" -ForegroundColor White
    Write-Host "  $ImageName`:$Tag" -ForegroundColor White
    Write-Host ""
    Write-Host "🐙 Or use Docker Compose:" -ForegroundColor Cyan
    Write-Host "docker-compose --env-file .env.$Environment up -d" -ForegroundColor White
} else {
    Write-Host "❌ Docker build failed" -ForegroundColor Red
    exit 1
}
