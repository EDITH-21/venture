import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsAPI } from '../services/api';
import { getSessionId, getDeviceType, getBrowser, getOS } from '../utils/session';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Avoid logging admin routes to keep visitor statistics accurate
    if (location.pathname.startsWith('/admin')) {
      return;
    }

    const timer = setTimeout(() => {
      const sessionId = getSessionId();
      const payload = {
        sessionId,
        page: location.pathname + location.search,
        referrer: document.referrer || 'direct',
        device: getDeviceType(),
        browser: getBrowser(),
        os: getOS(),
        eventType: 'pageview',
      };

      analyticsAPI.record(payload).catch((err) => {
        // Silent error logging for telemetry failures
        console.debug('Analytics telemetry ping info:', err?.message);
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
};
