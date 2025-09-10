// Google Ads Management Utilities

export interface AdConfiguration {
  enabled: boolean;
  adsenseId?: string;
  gtagId?: string;
  conversionId?: string;
  slots: {
    header?: string;
    sidebar?: string;
    content?: string;
    footer?: string;
    mobile?: string;
  };
}

class GoogleAdsManager {
  private static config: AdConfiguration = {
    enabled: process.env.NODE_ENV === 'production' && 
             process.env.NEXT_PUBLIC_ENABLE_ADS === 'true',
    adsenseId: process.env.NEXT_PUBLIC_ADSENSE_ID,
    gtagId: process.env.NEXT_PUBLIC_GTAG_ID,
    conversionId: process.env.NEXT_PUBLIC_CONVERSION_ID,
    slots: {
      header: process.env.NEXT_PUBLIC_ADSENSE_HEADER_SLOT,
      sidebar: process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT,
      content: process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT,
      footer: process.env.NEXT_PUBLIC_ADSENSE_FOOTER_SLOT,
      mobile: process.env.NEXT_PUBLIC_ADSENSE_MOBILE_SLOT
    }
  };

  /**
   * Get current ad configuration
   */
  static getConfig(): AdConfiguration {
    return this.config;
  }

  /**
   * Check if ads are enabled
   */
  static isEnabled(): boolean {
    return this.config.enabled && !!this.config.adsenseId;
  }

  /**
   * Get ad slot by position
   */
  static getSlot(position: keyof AdConfiguration['slots']): string | undefined {
    return this.config.slots[position];
  }

  /**
   * Initialize Google AdSense
   */
  static initializeAdSense(): void {
    if (!this.isEnabled() || typeof window === 'undefined') return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: this.config.adsenseId,
        enable_page_level_ads: true
      });
    } catch (error) {
      console.error('Failed to initialize AdSense:', error);
    }
  }

  /**
   * Refresh ads on the page
   */
  static refreshAds(): void {
    if (!this.isEnabled() || typeof window === 'undefined') return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Failed to refresh ads:', error);
    }
  }

  /**
   * Get ad performance data (if available)
   */
  static getAdPerformance(): any {
    // This would integrate with Google Ad Manager or Analytics
    // For now, return placeholder data
    return {
      impressions: 0,
      clicks: 0,
      revenue: 0,
      ctr: 0
    };
  }

  /**
   * Set up ad blocker detection
   */
  static detectAdBlocker(): Promise<boolean> {
    return new Promise((resolve) => {
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      testAd.style.position = 'absolute';
      testAd.style.left = '-10000px';
      testAd.style.width = '1px';
      testAd.style.height = '1px';
      
      document.body.appendChild(testAd);
      
      setTimeout(() => {
        const isBlocked = testAd.offsetHeight === 0;
        document.body.removeChild(testAd);
        resolve(isBlocked);
      }, 100);
    });
  }

  /**
   * Handle ad block detection
   */
  static async handleAdBlockDetection(): Promise<void> {
    const isBlocked = await this.detectAdBlocker();
    
    if (isBlocked) {
      console.log('Ad blocker detected');
      
      // Optionally show a message to users
      // You could display a polite message asking users to support the site
      // or offer alternative ways to support the platform
    }
  }
}

// Ad position constants
export const AD_POSITIONS = {
  HEADER: 'header',
  SIDEBAR: 'sidebar', 
  CONTENT: 'content',
  FOOTER: 'footer',
  MOBILE: 'mobile'
} as const;

// Ad format constants
export const AD_FORMATS = {
  AUTO: 'auto',
  FLUID: 'fluid',
  RECTANGLE: 'rectangle',
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
} as const;

// Standard ad sizes (width x height)
export const AD_SIZES = {
  BANNER: { width: 728, height: 90 },
  LEADERBOARD: { width: 728, height: 90 },
  MEDIUM_RECTANGLE: { width: 300, height: 250 },
  LARGE_RECTANGLE: { width: 336, height: 280 },
  SKYSCRAPER: { width: 160, height: 600 },
  WIDE_SKYSCRAPER: { width: 160, height: 600 },
  MOBILE_BANNER: { width: 320, height: 50 },
  MOBILE_LARGE_BANNER: { width: 320, height: 100 }
} as const;

// Revenue optimization tips
export const REVENUE_OPTIMIZATION = {
  BEST_POSITIONS: [
    'Above the fold content',
    'Within content body',
    'Sidebar (desktop)',
    'End of articles'
  ],
  BEST_FORMATS: [
    'Responsive display ads',
    'Medium rectangle (300x250)',
    'Leaderboard (728x90)',
    'Large rectangle (336x280)'
  ],
  PERFORMANCE_TIPS: [
    'Place ads where users naturally look',
    'Avoid too many ads above the fold',
    'Use responsive ad units',
    'Test different ad positions',
    'Monitor Core Web Vitals impact',
    'Optimize for mobile experience'
  ]
};

export default GoogleAdsManager;
