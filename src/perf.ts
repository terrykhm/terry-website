export interface ResourceMetric {
  name: string;
  duration: number;
  kb: string;
  widthPercent: number;
}

export interface PerfMetrics {
  ttfb: number;
  dcl: number;
  load: number;
  totalKb: string;
  count: number;
  resources: ResourceMetric[];
}

function round(n: number): number {
  return Math.max(0, Math.round(n));
}

function median(values: number[]): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Vite/build tooling emits content-hashed filenames like "index-CUIoFGBo.js" —
// group those under "Other" so the breakdown highlights human-named resources.
function isHashed(name: string): boolean {
  const base = name.split('.')[0];
  return base.length >= 24 && /^[a-z0-9_-]+$/i.test(base) && /[0-9]/.test(base) && /[a-zA-Z]/.test(base);
}

export function computePerf(): PerfMetrics {
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

    const ttfb = nav ? round(nav.responseStart - nav.requestStart) : 0;
    const dcl = nav ? round(nav.domContentLoadedEventEnd) : 0;
    const load = nav ? round(nav.loadEventEnd || performance.now()) : round(performance.now());

    const rawResources = resources.map((r) => ({
      name: r.name.split('/').pop()?.split('?')[0] || r.name,
      duration: round(r.duration),
      bytes: r.transferSize || 0,
    }));
    const namedResources = rawResources.filter((r) => !isHashed(r.name));
    const hashedResources = rawResources.filter((r) => isHashed(r.name));

    const withSize = namedResources.map((r) => ({ name: r.name, duration: r.duration, bytes: r.bytes }));
    if (hashedResources.length) {
      withSize.push({
        name: 'Other',
        duration: round(median(hashedResources.map((r) => r.duration))),
        bytes: median(hashedResources.map((r) => r.bytes)),
      });
    }

    const totalBytes = rawResources.reduce((sum, r) => sum + r.bytes, 0);
    const maxBytes = Math.max(1, ...withSize.map((r) => r.bytes));
    const top = withSize
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 5)
      .map((r) => ({
        name: r.name,
        duration: r.duration,
        kb: (r.bytes / 1024).toFixed(0),
        widthPercent: Math.max(6, (r.bytes / maxBytes) * 100),
      }));

    return { ttfb, dcl, load, totalKb: (totalBytes / 1024).toFixed(0), count: resources.length, resources: top };
  } catch {
    return { ttfb: 0, dcl: 0, load: 0, totalKb: '0', count: 0, resources: [] };
  }
}
