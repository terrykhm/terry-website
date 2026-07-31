export interface PerfMetrics {
  ttfb: number;
  dcl: number;
  load: number;
  totalKb: string;
  count: number;
}

function round(n: number): number {
  return Math.max(0, Math.round(n));
}

export function computePerf(): PerfMetrics {
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

    const ttfb = nav ? round(nav.responseStart - nav.requestStart) : 0;
    const dcl = nav ? round(nav.domContentLoadedEventEnd) : 0;
    const load = nav ? round(nav.loadEventEnd || performance.now()) : round(performance.now());
    const totalBytes = resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);

    return { ttfb, dcl, load, totalKb: (totalBytes / 1024).toFixed(0), count: resources.length };
  } catch {
    return { ttfb: 0, dcl: 0, load: 0, totalKb: '0', count: 0 };
  }
}
