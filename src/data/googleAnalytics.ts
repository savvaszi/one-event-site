export const measurementId = 'G-V231BZHDX5';

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [flag: `ga-disable-${string}`]: boolean | undefined;
};

let initialized = false;
let analyticsAllowed = false;

export function setGoogleAnalyticsConsent(granted: boolean) {
  if (!measurementId || location.hostname !== 'one-event.gr') return;

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow[`ga-disable-${measurementId}`] = !granted;
  if (granted === analyticsAllowed) return;
  analyticsAllowed = granted;

  if (!granted) {
    analyticsWindow.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    for (const name of ['_ga', `_ga_${measurementId.slice(2)}`]) {
      document.cookie = `${name}=; Max-Age=0; Path=/`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=one-event.gr`;
    }
    return;
  }

  if (initialized) {
    analyticsWindow.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    return;
  }

  const dataLayer = analyticsWindow.dataLayer ??= [];
  const gtag = analyticsWindow.gtag ??= function () {
    dataLayer.push(arguments);
  };
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  gtag('consent', 'update', { analytics_storage: 'granted' });
  gtag('js', new Date());

  const referrer = document.referrer ? new URL(document.referrer) : null;
  gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: location.origin + location.pathname,
    page_referrer: referrer?.origin === location.origin
      ? referrer.origin + referrer.pathname
      : referrer?.origin ?? '',
  });

  initialized = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(script);
}
