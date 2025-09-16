# Sitemap Verification Script for Windows PowerShell
# This script helps verify your sitemap is working correctly

$Domain = "https://removebg-ai.usefulapps.app"
$SitemapUrl = "$Domain/sitemap.xml"
$RobotsUrl = "$Domain/robots.txt"

Write-Host "🗺️  Sitemap Verification for RemoveBG AI" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""

Write-Host "📍 Domain: $Domain" -ForegroundColor Cyan
Write-Host "🗺️  Sitemap: $SitemapUrl" -ForegroundColor Cyan
Write-Host "🤖 Robots: $RobotsUrl" -ForegroundColor Cyan
Write-Host ""

# Test if sitemap is accessible
Write-Host "🔍 Testing Sitemap Accessibility..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $SitemapUrl -Method Head -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Sitemap is accessible" -ForegroundColor Green
    } else {
        Write-Host "❌ Sitemap returned status: $($response.StatusCode)" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Sitemap is not accessible: $($_.Exception.Message)" -ForegroundColor Red
}

# Test if robots.txt is accessible
Write-Host "🔍 Testing Robots.txt Accessibility..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $RobotsUrl -Method Head -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Robots.txt is accessible" -ForegroundColor Green
    } else {
        Write-Host "❌ Robots.txt returned status: $($response.StatusCode)" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Robots.txt is not accessible: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Magenta
Write-Host "1. Submit sitemap to Google Search Console:" -ForegroundColor White
Write-Host "   https://search.google.com/search-console" -ForegroundColor Blue
Write-Host ""
Write-Host "2. Submit sitemap to Bing Webmaster Tools:" -ForegroundColor White
Write-Host "   https://www.bing.com/webmasters" -ForegroundColor Blue
Write-Host ""
Write-Host "3. Verify sitemap structure:" -ForegroundColor White
Write-Host "   https://www.xml-sitemaps.com/validate-xml-sitemap.html" -ForegroundColor Blue
Write-Host ""
Write-Host "4. Test robots.txt:" -ForegroundColor White
Write-Host "   https://www.google.com/webmasters/tools/robots-testing-tool" -ForegroundColor Blue
Write-Host ""

# Display sitemap content
Write-Host "📄 Generated Sitemap Content:" -ForegroundColor Magenta
Write-Host "=============================" -ForegroundColor Magenta
try {
    $sitemapContent = Invoke-WebRequest -Uri $SitemapUrl -UseBasicParsing
    Write-Host $sitemapContent.Content -ForegroundColor Gray
} catch {
    Write-Host "Could not fetch sitemap content: $($_.Exception.Message)" -ForegroundColor Red
}
