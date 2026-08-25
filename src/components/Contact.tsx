import { useState, type CSSProperties } from 'react';
import type { Colors } from '../theme';

interface ContactProps {
  c: Colors;
  isMobile: boolean;
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

export default function Contact({ c, isMobile }: ContactProps) {
  const [hoveredBtn, setHoveredBtn] = useState<'email' | 'linkedin' | null>(null);

  const pad = isMobile ? '0 20px' : '0 44px';

  const contactSectionStyle: CSSProperties = {
    background: c.bgAlt,
    padding: isMobile ? '64px 0 40px' : '110px 0 48px',
    minHeight: isMobile ? 'auto' : 'calc(100vh - 72px)',
  };
  const sectionInnerStyle: CSSProperties = { maxWidth: 1080, margin: '0 auto', padding: pad };
  const pageTitleStyle: CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    color: c.textFaint,
    marginBottom: isMobile ? 20 : 28,
  };

  const contactHeadingStyle: CSSProperties = {
    fontSize: isMobile ? 30 : 42,
    fontWeight: 800,
    letterSpacing: '-.02em',
    margin: '0 0 16px',
    maxWidth: 600,
  };

  const contactBodyStyle: CSSProperties = { fontSize: 15, color: c.textMuted, maxWidth: 520, lineHeight: 1.6, margin: 0 };

  const waveEmojiStyle: CSSProperties = {
    display: 'inline-block',
    transformOrigin: '70% 70%',
    animation: 'wave-hand 2.4s ease-in-out 1',
  };

  const btnBaseStyle: CSSProperties = {
    fontSize: 14,
    fontWeight: 700,
    padding: '13px 22px',
    borderRadius: 8,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 118,
    height: 44,
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform .2s ease',
  };

  const primaryBtnStyle: CSSProperties = {
    ...btnBaseStyle,
    background: c.invertBg,
    color: c.invertText,
  };

  const secondaryBtnStyle: CSSProperties = {
    ...btnBaseStyle,
    background: 'transparent',
    color: c.text,
    border: `1px solid ${c.border}`,
  };

  const btnLayerStyle = (visible: boolean): CSSProperties => ({
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    opacity: visible ? 1 : 0,
    transform: visible ? 'scale(1)' : 'scale(0.85)',
    transition: 'opacity .18s ease, transform .18s ease',
  });

  const footerStyle: CSSProperties = {
    textAlign: 'center',
    fontSize: 12.5,
    color: c.textFaint,
    paddingTop: isMobile ? 48 : 72,
    fontFamily: "'JetBrains Mono',monospace",
  };

  return (
    <div style={contactSectionStyle}>
      <div style={sectionInnerStyle}>
        <div style={pageTitleStyle}>Contact</div>
        <h2 style={contactHeadingStyle}>
          Say hello <span style={waveEmojiStyle}>👋</span>
        </h2>
        <p style={contactBodyStyle}>Open to conversations about engineering and interesting problems. Let's build something together!</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 34, flexWrap: 'wrap' }}>
          <a
            href="mailto:hello@example.com"
            aria-label="Email me"
            style={primaryBtnStyle}
            onMouseEnter={() => setHoveredBtn('email')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <span style={btnLayerStyle(hoveredBtn !== 'email')}>
              <MailIcon />
            </span>
            <span style={btnLayerStyle(hoveredBtn === 'email')}>Email me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/terry-kim/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            style={secondaryBtnStyle}
            onMouseEnter={() => setHoveredBtn('linkedin')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <span style={btnLayerStyle(hoveredBtn !== 'linkedin')}>
              <LinkedInIcon />
            </span>
            <span style={btnLayerStyle(hoveredBtn === 'linkedin')}>LinkedIn</span>
          </a>
        </div>
      </div>
      <div style={footerStyle}>© 2026 Terry Kim</div>
    </div>
  );
}
