# Google Ads Integration Guide

This guide will help you set up Google Ads (AdSense and Ads conversion tracking) for your RemoveBG AI application.

## 📋 Overview

The Google Ads integration includes:
- **Google AdSense**: Display ads for revenue generation
- **Google Ads Conversion Tracking**: Track user actions for advertising campaigns
- **Google Analytics Integration**: Enhanced tracking and remarketing
- **Performance Monitoring**: Track ad performance and user engagement

## 🚀 Quick Setup

### 1. Environment Configuration

Add these variables to your `.env.production.local` file:

```bash
# Enable ads globally
NEXT_PUBLIC_ENABLE_ADS=true

# Google AdSense
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX

# Google Ads Global Site Tag
NEXT_PUBLIC_GTAG_ID=AW-XXXXXXXXXX

# Google Ads Conversion Tracking
NEXT_PUBLIC_CONVERSION_ID=AW-XXXXXXXXXX

# AdSense Ad Slots
NEXT_PUBLIC_ADSENSE_HEADER_SLOT=1234567890
NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=1234567891
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=1234567892
NEXT_PUBLIC_ADSENSE_FOOTER_SLOT=1234567893
NEXT_PUBLIC_ADSENSE_MOBILE_SLOT=1234567894
```

### 2. Google AdSense Setup

#### A. Create AdSense Account
1. Go to [Google AdSense](https://adsense.google.com/)
2. Sign up and verify your website
3. Wait for approval (can take 1-14 days)

#### B. Get Your Publisher ID
1. In AdSense dashboard, go to **Account > Account Information**
2. Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)
3. Add to `NEXT_PUBLIC_ADSENSE_ID` environment variable

#### C. Create Ad Units
1. Go to **Ads > By ad unit**
2. Create ad units for each position:
   - **Header Banner**: Responsive display ad
   - **Sidebar**: Large rectangle (300x250) or Skyscraper
   - **Content**: Medium rectangle (300x250)
   - **Footer**: Responsive display ad
   - **Mobile Banner**: Mobile banner (320x50)

3. Copy each ad unit ID and add to respective environment variables

### 3. Google Ads Conversion Tracking Setup

#### A. Create Google Ads Account
1. Go to [Google Ads](https://ads.google.com/)
2. Create an account and set up your first campaign

#### B. Set Up Conversion Tracking
1. In Google Ads, go to **Tools & Settings > Conversions**
2. Click **+ New Conversion Action**
3. Choose **Website** as the source
4. Configure conversion actions:

**Recommended Conversion Actions:**
```javascript
// File Upload (Engagement)
Name: "File Upload"
Category: "Other"
Value: Don't use a value
Count: One

// Background Removal Complete (Key Action)
Name: "Background Removal Complete"  
Category: "Other"
Value: 1 (or custom value)
Count: One

// Image Download (Conversion)
Name: "Image Download"
Category: "Purchase"
Value: 1
Count: Every
```

#### C. Get Tracking IDs
1. Copy the **Conversion ID** (format: `AW-XXXXXXXXXX`)
2. Copy individual **Conversion Labels** for each action
3. Add Conversion ID to `NEXT_PUBLIC_CONVERSION_ID`

### 4. Google Tag Manager (Optional)

For advanced tracking, you can use Google Tag Manager:

1. Create a GTM account at [tagmanager.google.com](https://tagmanager.google.com/)
2. Add GTM container code to your site
3. Configure tags for AdSense and conversion tracking
4. Use GTM for advanced remarketing and custom events

## 📊 Ad Placement Strategy

### Optimal Ad Positions

**1. Header Ad (728x90 Leaderboard)**
- **Location**: Below navigation, above main content
- **Performance**: High visibility, good CTR
- **Implementation**: `<HeaderAd />` component

**2. Sidebar Ad (300x250 Medium Rectangle)**
- **Location**: Right sidebar on desktop
- **Performance**: Consistent revenue, good for long content
- **Implementation**: `<SidebarAd />` component

**3. Content Ad (300x250 Medium Rectangle)**
- **Location**: After upload section, before results
- **Performance**: High engagement, contextual placement
- **Implementation**: `<ContentAd />` component

**4. Footer Ad (728x90 Leaderboard)**
- **Location**: Above footer content
- **Performance**: Good for engaged users
- **Implementation**: `<FooterAd />` component

**5. Mobile Banner (320x50)**
- **Location**: Fixed bottom banner on mobile
- **Performance**: High mobile visibility
- **Implementation**: `<MobileBannerAd />` component

### Revenue Optimization Tips

1. **Above the Fold**: Place at least one ad above the fold
2. **Content Integration**: Blend ads naturally with content
3. **Mobile First**: Prioritize mobile ad experience
4. **A/B Testing**: Test different positions and formats
5. **Page Speed**: Monitor impact on Core Web Vitals
6. **User Experience**: Don't overwhelm users with ads

## 🎯 Conversion Tracking Events

### Automatically Tracked Events

The application automatically tracks these conversion events:

```typescript
// File Upload Started
trackFileUpload(fileSize: number, fileType: string)

// Background Removal Completed  
trackProcessingComplete(processingTime: number)

// Image Downloaded
trackImageDownload(format: string, fileSize: number)

// Language Changed
trackLanguageChange(fromLanguage: string, toLanguage: string)

// Errors Occurred
trackError(errorType: string, errorMessage: string)

// Feature Interactions
trackFeatureInteraction(featureName: string, interactionType: string)
```

### Custom Event Tracking

You can track additional events:

```typescript
import { useGoogleAds } from './hooks/useGoogleAds';

const { trackFeatureInteraction } = useGoogleAds();

// Track button clicks
trackFeatureInteraction('upload_button', 'click');

// Track feature usage
trackFeatureInteraction('comparison_slider', 'drag');
```

## 📈 Performance Monitoring

### Key Metrics to Track

**AdSense Metrics:**
- **Page RPM**: Revenue per 1000 pageviews
- **CTR**: Click-through rate
- **CPC**: Cost per click
- **Impressions**: Ad views

**Google Ads Metrics:**
- **Conversion Rate**: Percentage of users who complete actions
- **Cost Per Conversion**: How much you spend per conversion
- **ROAS**: Return on ad spend
- **Quality Score**: Ad relevance and landing page experience

### Monitoring Tools

1. **Google AdSense Dashboard**: Revenue and performance data
2. **Google Ads Dashboard**: Conversion tracking and campaign performance
3. **Google Analytics**: User behavior and conversion funnels
4. **Search Console**: SEO performance impact

## 🔧 Advanced Configuration

### Custom Ad Formats

Create custom ad components for specific use cases:

```typescript
import AdUnit from './components/AdUnit';

// Custom banner ad
const CustomBannerAd = () => (
  <AdUnit
    adSlot="your-custom-slot-id"
    adFormat="horizontal"
    style={{ width: '100%', height: '120px' }}
    className="my-custom-ad-class"
  />
);

// In-content native ad
const NativeContentAd = () => (
  <AdUnit
    adSlot="your-native-slot-id"
    adFormat="fluid"
    adLayout="in-article"
    responsive={true}
  />
);
```

### Remarketing Lists

Set up remarketing lists for better targeting:

```typescript
// Track users by engagement level
GoogleAdsTracking.setUserProperties({
  engagement_level: 'high', // based on time spent
  feature_usage: 'advanced', // based on features used
  conversion_likelihood: 'medium' // based on behavior
});
```

### A/B Testing Ad Positions

Test different ad configurations:

```typescript
// Example A/B test for ad positions
const adVariant = Math.random() > 0.5 ? 'variant-a' : 'variant-b';

if (adVariant === 'variant-a') {
  // Show ads in position set A
} else {
  // Show ads in position set B
}

// Track which variant performs better
GoogleAdsTracking.trackCustomEvent({
  eventName: 'ad_variant_exposure',
  category: 'ab_test',
  parameters: { variant: adVariant }
});
```

## 🚨 Common Issues & Solutions

### 1. Ads Not Showing

**Possible Causes:**
- AdSense account not approved
- Wrong ad unit IDs
- Ad blockers enabled
- Policy violations

**Solutions:**
```typescript
// Check if ads are blocked
GoogleAdsManager.detectAdBlocker().then(isBlocked => {
  if (isBlocked) {
    console.log('Ad blocker detected');
    // Show alternative content or message
  }
});
```

### 2. Low Ad Revenue

**Optimization Steps:**
1. **Improve Content Quality**: Better content = higher ad rates
2. **Optimize Ad Placement**: Test different positions
3. **Increase Traffic**: More visitors = more revenue
4. **Target High-Value Countries**: Focus on US, UK, Canada traffic
5. **Improve Page Speed**: Faster sites = better user experience

### 3. Policy Violations

**Common Violations:**
- Invalid click activity
- Content policy violations
- Placement policy violations
- Traffic quality issues

**Prevention:**
- Follow AdSense policies strictly
- Don't click your own ads
- Ensure content is original and valuable
- Monitor traffic sources

## 📱 Mobile Optimization

### Mobile-First Ad Strategy

```typescript
// Responsive ad sizing
const MobileOptimizedAd = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);
  
  return (
    <AdUnit
      adSlot={isMobile ? "mobile-slot-id" : "desktop-slot-id"}
      adFormat="auto"
      responsive={true}
      fullWidthResponsive={true}
    />
  );
};
```

### Mobile Performance Tips

1. **Limit Ad Density**: Don't overwhelm mobile users
2. **Fast Loading**: Optimize for mobile connection speeds
3. **Touch-Friendly**: Ensure ads don't interfere with navigation
4. **Above-Fold**: Place at least one ad above the fold on mobile

## 🔒 Privacy & Compliance

### GDPR Compliance

```typescript
// GDPR consent management
const handleGDPRConsent = (hasConsent: boolean) => {
  if (hasConsent) {
    // Initialize ads with full tracking
    GoogleAdsManager.initializeAdSense();
  } else {
    // Initialize ads with limited tracking
    // Or don't show personalized ads
  }
};
```

### Privacy Policy Updates

Ensure your privacy policy includes:
- Use of Google AdSense and advertising cookies
- Data collection for advertising purposes
- User rights regarding advertising data
- How to opt out of personalized ads

## 📞 Support & Resources

### Google Support
- **AdSense Help**: [support.google.com/adsense](https://support.google.com/adsense)
- **Google Ads Help**: [support.google.com/google-ads](https://support.google.com/google-ads)
- **Policy Center**: [support.google.com/adsense/topic/1250104](https://support.google.com/adsense/topic/1250104)

### Community Resources
- **AdSense Community**: [support.google.com/adsense/community](https://support.google.com/adsense/community)
- **Google Ads Community**: [support.google.com/google-ads/community](https://support.google.com/google-ads/community)
- **YouTube Creator Academy**: Free courses on monetization

---

**💡 Pro Tip**: Start with a conservative ad strategy and gradually optimize based on performance data. Focus on user experience first, revenue second.
