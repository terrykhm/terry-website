import type { CSSProperties } from 'react';
import type { Colors } from '../theme';
import type { PerfMetrics } from '../perf';

interface PerfCardProps {
  c: Colors;
  dark: boolean;
  isMobile: boolean;
  perf: PerfMetrics | null;
  open: boolean;
}

const PLACEHOLDER = { ttfb: '—', dcl: '—', load: '—', totalKb: '—', count: '—', resources: [] as PerfMetrics['resources'] };

export default function PerfCard({ dark, isMobile, perf, open }: PerfCardProps) {
  const p = perf ?? PLACEHOLDER;

  const perfSlideWrapStyle: CSSProperties = {
    maxHeight: open ? 640 : 0,
    opacity: open ? 1 : 0,
    overflow: 'hidden',
    transition: 'max-height .5s cubic-bezier(.16,1,.3,1),opacity .35s ease',
  };

  const perfCardStyle: CSSProperties = {
    margin: isMobile ? '20px 0' : '24px 0',
    maxWidth: 420,
    background: dark ? '#0a0a0a' : '#111',
    borderRadius: 10,
    padding: '24px 24px 20px',
    position: 'relative',
  };

  const perfHeaderStyle: CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10.5,
    color: '#6a6a6a',
    marginBottom: 14,
  };

  const perfRowsStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 9,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
  };

  const perfRowStyle: CSSProperties = { display: 'flex', justifyContent: 'space-between' };
  const perfLabelStyle: CSSProperties = { color: '#8a8a8a' };
  const perfValStyle: CSSProperties = { color: '#fff', whiteSpace: 'nowrap', flexShrink: 0 };
  const perfLabelStrongStyle: CSSProperties = { color: '#fff', fontWeight: 600 };
  const perfPageLoadValStyle: CSSProperties = { color: '#8fbf8f', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 };
  const perfPageLoadRowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #262626',
    paddingTop: 9,
    marginTop: 2,
    cursor: 'default',
  };

  const waterfallPanelStyle: CSSProperties = { marginTop: 12, paddingTop: 16, borderTop: '1px solid #1f1f1f' };
  const waterfallHeadStyle: CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10.5,
    color: '#6a6a6a',
    marginBottom: 14,
  };
  const waterfallListStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11,
  };
  const waterfallRowStyle: CSSProperties = { display: 'flex', justifyContent: 'space-between', color: '#e5e5e5' };
  const waterfallNameStyle: CSSProperties = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 };
  const waterfallMetaStyle: CSSProperties = { color: '#9a9a9a', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 12 };
  const waterfallTrackStyle: CSSProperties = { height: 4, background: '#262626', borderRadius: 3, marginTop: 4 };
  const waterfallBarStyle = (widthPercent: number): CSSProperties => ({
    height: 4,
    background: '#8fbf8f',
    borderRadius: 3,
    width: `${widthPercent}%`,
  });

  return (
    <div style={perfSlideWrapStyle}>
      <div style={perfCardStyle}>
        <div style={perfHeaderStyle}>$ curl -w "@timing.fmt" terrykim.io</div>
        <div style={perfRowsStyle}>
          <div style={perfRowStyle}>
            <span style={perfLabelStyle}>ttfb</span>
            <span style={perfValStyle}>{p.ttfb} ms</span>
          </div>
          <div style={perfRowStyle}>
            <span style={perfLabelStyle}>dom_content_loaded</span>
            <span style={perfValStyle}>{p.dcl} ms</span>
          </div>
          <div style={perfPageLoadRowStyle}>
            <span style={perfLabelStrongStyle}>page_load</span>
            <span style={perfPageLoadValStyle}>{p.load} ms</span>
          </div>
          <div style={perfRowStyle}>
            <span style={perfLabelStyle}>resources_transferred</span>
            <span style={perfValStyle}>
              {p.totalKb} KB / {p.count} requests
            </span>
          </div>
        </div>

        {p.resources.length > 0 && (
          <div style={waterfallPanelStyle}>
            <div style={waterfallHeadStyle}>
              {p.count} resources · {p.totalKb} kb total
            </div>
            <div style={waterfallListStyle}>
              {p.resources.map((r) => (
                <div key={r.name}>
                  <div style={waterfallRowStyle}>
                    <span style={waterfallNameStyle}>{r.name}</span>
                    <span style={waterfallMetaStyle}>
                      {r.duration} ms · {r.kb} kb
                    </span>
                  </div>
                  <div style={waterfallTrackStyle}>
                    <div style={waterfallBarStyle(r.widthPercent)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
