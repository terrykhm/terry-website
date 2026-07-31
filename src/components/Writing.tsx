import type { CSSProperties } from 'react';
import type { Colors } from '../theme';
import { writingPlaceholders } from '../data';

interface WritingProps {
  c: Colors;
  isMobile: boolean;
}

export default function Writing({ c, isMobile }: WritingProps) {
  const pad = isMobile ? '0 20px' : '0 44px';

  const pageWrapStyle: CSSProperties = { padding: isMobile ? '56px 0 80px' : '90px 0 110px', background: c.bg };
  const sectionInnerStyle: CSSProperties = { maxWidth: 1080, margin: '0 auto', padding: pad };
  const pageTitleStyle: CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    color: c.textFaint,
    marginBottom: isMobile ? 20 : 28,
  };

  const writingRowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 20,
    padding: '24px 0',
    borderBottom: `1px solid ${c.border}`,
  };

  return (
    <div style={pageWrapStyle}>
      <div style={sectionInnerStyle}>
        <div style={pageTitleStyle}>Writing</div>
        <p style={{ fontSize: 14, color: c.textFaint, margin: '0 0 28px', fontStyle: 'italic' }}>
          Drop your posts, essays, or talks here — these are placeholders.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {writingPlaceholders.map((w, i) => (
            <a key={i} href="#" style={writingRowStyle}>
              <div>
                <div style={{ fontSize: 16.5, fontWeight: 700, color: c.text }}>{w.title}</div>
                <div style={{ fontSize: 13.5, color: c.textMuted, marginTop: 6, lineHeight: 1.5 }}>{w.desc}</div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: c.textFaint, whiteSpace: 'nowrap' }}>
                {w.date}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
