import type { CSSProperties } from 'react';
import type { Colors } from '../theme';

interface ContactProps {
  c: Colors;
  isMobile: boolean;
}

export default function Contact({ c, isMobile }: ContactProps) {
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

  const primaryBtnStyle: CSSProperties = {
    background: c.invertBg,
    color: c.invertText,
    fontSize: 14,
    fontWeight: 700,
    padding: '13px 22px',
    borderRadius: 8,
    display: 'inline-block',
    transition: 'transform .2s ease',
  };

  const secondaryBtnStyle: CSSProperties = {
    background: 'transparent',
    color: c.text,
    fontSize: 14,
    fontWeight: 700,
    padding: '13px 22px',
    borderRadius: 8,
    border: `1px solid ${c.border}`,
    display: 'inline-block',
    transition: 'transform .2s ease',
  };

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
          <a href="mailto:hello@example.com" style={primaryBtnStyle}>
            Email me
          </a>
          <a href="https://www.linkedin.com/in/terry-kim/" target="_blank" rel="noopener" style={secondaryBtnStyle}>
            LinkedIn
          </a>
        </div>
      </div>
      <div style={footerStyle}>© 2026 Terry Kim</div>
    </div>
  );
}
