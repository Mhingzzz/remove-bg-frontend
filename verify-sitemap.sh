#!/bin/bash

# Sitemap Verification Script
# This script helps verify your sitemap is working correctly

DOMAIN="https://removebg-ai.usefulapps.app"
SITEMAP_URL="${DOMAIN}/sitemap.xml"
ROBOTS_URL="${DOMAIN}/robots.txt"

echo "🗺️  Sitemap Verification for RemoveBG AI"
echo "=========================================="
echo ""

echo "📍 Domain: $DOMAIN"
echo "🗺️  Sitemap: $SITEMAP_URL"
echo "🤖 Robots: $ROBOTS_URL"
echo ""

# Test if sitemap is accessible
echo "🔍 Testing Sitemap Accessibility..."
if curl -s --head "$SITEMAP_URL" | head -n 1 | grep -q "200 OK"; then
    echo "✅ Sitemap is accessible"
else
    echo "❌ Sitemap is not accessible"
fi

# Test if robots.txt is accessible
echo "🔍 Testing Robots.txt Accessibility..."
if curl -s --head "$ROBOTS_URL" | head -n 1 | grep -q "200 OK"; then
    echo "✅ Robots.txt is accessible"
else
    echo "❌ Robots.txt is not accessible"
fi

echo ""
echo "📝 Next Steps:"
echo "1. Submit sitemap to Google Search Console:"
echo "   https://search.google.com/search-console"
echo ""
echo "2. Submit sitemap to Bing Webmaster Tools:"
echo "   https://www.bing.com/webmasters"
echo ""
echo "3. Verify sitemap structure:"
echo "   https://www.xml-sitemaps.com/validate-xml-sitemap.html"
echo ""
echo "4. Test robots.txt:"
echo "   https://www.google.com/webmasters/tools/robots-testing-tool"
