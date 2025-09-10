import { useEffect } from 'react';

interface AdUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  adLayout?: string;
  style?: React.CSSProperties;
  className?: string;
  responsive?: boolean;
  fullWidthResponsive?: boolean;
  enabled?: boolean;
}

const AdUnit: React.FC<AdUnitProps> = ({
  adSlot,
  adFormat = 'auto',
  adLayout,
  style = { display: 'block' },
  className = '',
  responsive = true,
  fullWidthResponsive = true,
  enabled = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_ADS === 'true'
}) => {
  useEffect(() => {
    if (!enabled || !adSlot) return;

    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading ad:', error);
    }
  }, [enabled, adSlot]);

  if (!enabled || !adSlot || !process.env.NEXT_PUBLIC_ADSENSE_ID) {
    return null;
  }

  const adProps = {
    'data-ad-client': process.env.NEXT_PUBLIC_ADSENSE_ID,
    'data-ad-slot': adSlot,
    'data-ad-format': adFormat,
    ...(adLayout && { 'data-ad-layout': adLayout }),
    ...(responsive && { 'data-ad-responsive': 'true' }),
    ...(fullWidthResponsive && { 'data-full-width-responsive': 'true' })
  };

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        {...adProps}
      />
    </div>
  );
};

export default AdUnit;
