import type { CSSProperties, ReactNode } from 'react';
import type { Colors } from '../theme';
import { experiences, skills, type Bullet } from '../data';

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
  const eduCardStyle: CSSProperties = {
    background: c.card,
    border: `1px solid ${c.border}`,
    borderRadius: 12,
    padding: '24px 26px',
    marginTop: 8,
  };

  const subsectionStyle = (first: boolean): CSSProperties => ({
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11.5,
    textTransform: 'uppercase',
    letterSpacing: '.08em',
    fontWeight: 600,
    color: c.textMuted,
    margin: `${first ? 14 : 22}px 0 8px`,
  });

  const renderBullet = (text: string, size: number, dot: number, key: number) => (
    <div key={key} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <div style={{ width: dot, height: dot, borderRadius: '50%', background: c.textFaint, marginTop: 8, flex: 'none' }} />
      <div style={{ fontSize: size, lineHeight: 1.55, color: c.textMuted }}>{renderBulletText(text, c)}</div>
    </div>
  );

  const renderBullets = (bullets: Bullet[]) =>
    bullets.map((b, bi) =>
      typeof b === 'string' ? (
        renderBullet(b, 14, 4, bi)
      ) : (
        <div key={bi} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {renderBullet(b.text, 14, 4, 0)}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginLeft: 24 }}>
            {b.sub.map((sb, si) => renderBullet(sb, 13.5, 3, si))}
          </div>
        </div>
      ),
    );

  const bulletListStyle: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 };

  const skillsKickerStyle: CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    color: c.textFaint,
    margin: `${isMobile ? 44 : 56}px 0 20px`,
  };

  const skillGroupLabelStyle: CSSProperties = {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11.5,
    textTransform: 'uppercase',
    letterSpacing: '.08em',
    fontWeight: 600,
    color: c.textFaint,
    marginBottom: 8,
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
                {job.summary && (
                  <div style={{ fontSize: 14, lineHeight: 1.55, color: c.textFaint, marginTop: 8 }}>{job.summary}</div>
                )}
                {job.sections?.map((section, si) => (
                  <div key={section.title}>
                    <div style={subsectionStyle(si === 0)}>{section.title}</div>
                    <div style={bulletListStyle}>{renderBullets(section.bullets)}</div>
                  </div>
                ))}
                {job.bullets.length > 0 && (
                  <div style={{ ...bulletListStyle, marginTop: job.sections ? 22 : 12 }}>{renderBullets(job.bullets)}</div>
                )}
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {skills.map((group) => (
            <div key={group.label}>
              <div style={skillGroupLabelStyle}>{group.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {group.items.map((item) => (
                  <div key={item} style={tagStyle}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
