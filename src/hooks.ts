import { useEffect, useState } from 'react';
import { routeFromHash, type Route } from './routes';
import { computePerf, type PerfMetrics } from './perf';

export function useIsMobile(breakpoint = 760): boolean {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return isMobile;
}

export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

export function usePerfMetrics(): PerfMetrics | null {
  const [perf, setPerf] = useState<PerfMetrics | null>(null);

  useEffect(() => {
    const measure = () => setTimeout(() => setPerf(computePerf()), 50);

    if (document.readyState === 'complete') {
      measure();
      return;
    }
    window.addEventListener('load', measure, { once: true });
    return () => window.removeEventListener('load', measure);
  }, []);

  return perf;
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => routeFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(routeFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
