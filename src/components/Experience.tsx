import type { CSSProperties, ReactNode } from 'react';
import type { Colors } from '../theme';
import { experiences, skills } from '../data';

interface ExperienceProps {
  c: Colors;
  isMobile: boolean;
}

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderBulletText(text: string, c: Colors): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const [, label, url] = match;
    nodes.push(
      <a
        key={key++}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: c.textMuted, textDecoration: 'underline', textUnderlineOffset: 2 }}
      >
        {label}
      </a>,
    );
    lastIndex = LINK_PATTERN.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export default function Experience({ c, isMobile }: ExperienceProps) {
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
  const aboutTextStyle: CSSProperties = {
    fontSize: isMobile ? 16 : 18,
    lineHeight: 1.6,
    color: c.textMuted,
    maxWidth: 720,
    fontWeight: 500,
    margin: `0 0 ${isMobile ? 36 : 48}px`,
  };

  const eduCardStyle: CSSProperties = {
    background: c.card,
    border: `1px solid ${c.border}`,
    borderRadius: 12,
    padding: '24px 26px',
    marginTop: 8,
  };

  const skillsKickerStyle: CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    color: c.textFaint,
    margin: `${isMobile ? 44 : 56}px 0 20px`,
  };

  const tagStyle: CSSProperties = {
    fontSize: 13.5,
    fontWeight: 600,
    color: c.textMuted,
    background: c.bgAlt,
    border: `1px solid ${c.border}`,
    padding: '9px 16px',
    borderRadius: 8,
  };

  return (
    <div style={pageWrapStyle}>
      <div style={sectionInnerStyle}>
        <div style={pageTitleStyle}>Experience</div>
        <p style={aboutTextStyle}>
          I'm a software engineer based in New York, focused on mobile app architecture and performance. Over the
          past several years I've worked across Instagram and Facebook's mobile surfaces — from Live Videos to Music
          to core app performance — and before that shipped full-stack tools and services at AWS and Leidos. I care
          about fast, dependable software and the systems that keep it that way.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((job, i) => (
            <div key={i} style={{ display: 'flex', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none', width: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: c.text, marginTop: 6, flex: 'none' }} />
                <div style={{ width: 1, flex: 1, background: c.border, margin: '6px 0' }} />
              </div>
              <div style={{ padding: '0 0 40px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: c.text }}>{job.role}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: c.textFaint, whiteSpace: 'nowrap' }}>
                    {job.dates}
                  </div>
                </div>
                <div style={{ fontSize: 14, color: c.textMuted, fontWeight: 600, marginTop: 2 }}>
                  {job.company} · {job.location}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                  {job.bullets.map((b, bi) => (
                    <div key={bi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: c.textFaint, marginTop: 8, flex: 'none' }} />
                      <div style={{ fontSize: 14, lineHeight: 1.55, color: c.textMuted }}>{renderBulletText(b, c)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={eduCardStyle}>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono',monospace", color: c.textFaint, textTransform: 'uppercase', letterSpacing: '.08em' }}>
            Education
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: c.text, marginTop: 8 }}>University of Maryland</div>
          <div style={{ fontSize: 14, color: c.textMuted, marginTop: 2 }}>B.S. Computer Science and Philosophy</div>
        </div>

        <div style={skillsKickerStyle}>Skills</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {skills.map((s) => (
            <div key={s} style={tagStyle}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
