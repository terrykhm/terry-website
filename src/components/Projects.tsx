import type { CSSProperties } from 'react';
import type { Colors } from '../theme';
import { projectPlaceholders } from '../data';

interface ProjectsProps {
  c: Colors;
  isMobile: boolean;
}

export default function Projects({ c, isMobile }: ProjectsProps) {
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

  const projectGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${isMobile ? 1 : 3},1fr)`,
    gap: 20,
  };

  const projectCardStyle: CSSProperties = {
    background: c.card,
    border: `1px solid ${c.border}`,
    borderRadius: 12,
    overflow: 'hidden',
    transition: 'transform .25s ease,box-shadow .25s ease',
  };

  const projectImgStyle: CSSProperties = {
    aspectRatio: '16/10',
    background: `repeating-linear-gradient(45deg,${c.bgAlt},${c.bgAlt} 10px,${c.bg} 10px,${c.bg} 20px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const pillLinkStyle: CSSProperties = {
    fontSize: 13.5,
    fontWeight: 600,
    color: c.text,
    border: `1px solid ${c.border}`,
    padding: '10px 18px',
    borderRadius: 99,
    transition: 'background .2s ease',
  };

  return (
    <div style={pageWrapStyle}>
      <div style={sectionInnerStyle}>
        <div style={pageTitleStyle}>Projects</div>
        <p style={{ fontSize: 14, color: c.textFaint, margin: '0 0 28px', fontStyle: 'italic' }}>
          Drop your project write-ups and case studies here — these are placeholders.
        </p>
        <div style={projectGridStyle}>
          {projectPlaceholders.map((p, i) => (
            <div key={i} style={projectCardStyle}>
              <div style={projectImgStyle}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: c.textFaint }}>
                  {p.imageLabel}
                </div>
              </div>
              <div style={{ padding: '20px 22px 22px' }}>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: c.text }}>{p.title}</div>
                <div style={{ fontSize: 13.5, color: c.textMuted, marginTop: 6, lineHeight: 1.5 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <a href="#" style={pillLinkStyle}>
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/terry-kim/" target="_blank" rel="noopener" style={pillLinkStyle}>
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  );
}
