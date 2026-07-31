import { useState, type CSSProperties, type MouseEvent } from 'react';
import type { Colors } from '../theme';
import type { Route } from '../routes';

interface HomeProps {
  c: Colors;
  isMobile: boolean;
}

const HOME_LINKS: { name: Exclude<Route, 'home'>; label: string }[] = [
  { name: 'experience', label: 'Experience' },
  { name: 'projects', label: 'Projects' },
  { name: 'writing', label: 'Writing' },
  { name: 'contact', label: 'Contact' },
];

export default function Home({ c, isMobile }: HomeProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<string | null>(null);

  const pad = isMobile ? '0 20px' : '0 44px';

  const onHeroMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * -6, y: py * 6 });
  };
  const onHeroLeave = () => setTilt({ x: 0, y: 0 });

  const heroSectionStyle: CSSProperties = {
    position: 'relative',
    background: c.bg,
    backgroundImage: `linear-gradient(${c.gridLine} 1px,transparent 1px),linear-gradient(90deg,${c.gridLine} 1px,transparent 1px)`,
    backgroundSize: '34px 34px',
    padding: isMobile ? '72px 0 76px' : '140px 0 148px',
    minHeight: isMobile ? 'auto' : 'calc(100vh - 72px)',
    display: 'flex',
    alignItems: 'center',
  };

  const heroInnerStyle: CSSProperties = { maxWidth: 1080, margin: '0 auto', padding: pad, width: '100%' };

  const heroNameStyle: CSSProperties = {
    fontSize: isMobile ? 48 : 84,
    fontWeight: 800,
    letterSpacing: '-.03em',
    lineHeight: 1.02,
    margin: 0,
    textAlign: 'left',
    transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
    transition: 'transform .15s ease-out',
    transformStyle: 'preserve-3d',
    display: 'inline-block',
  };

  const heroTaglineStyle: CSSProperties = {
    fontSize: isMobile ? 17 : 20,
    color: c.textMuted,
    fontWeight: 600,
    margin: '20px 0 0',
    maxWidth: 640,
    textAlign: 'left',
  };

  const heroIntroStyle: CSSProperties = {
    fontSize: isMobile ? 15 : 16,
    color: c.textFaint,
    fontWeight: 500,
    margin: '16px 0 0',
    maxWidth: 560,
    lineHeight: 1.6,
    textAlign: 'left',
  };

  const homeLinksRowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? 14 : 16,
    marginTop: isMobile ? 36 : 48,
    alignItems: 'flex-start',
  };

  const homeLinkCardStyle = (name: string): CSSProperties => {
    const isHovered = hovered === name;
    return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: isHovered ? 10 : 0,
      fontSize: isMobile ? 17 : 19,
      fontWeight: 600,
      color: isHovered ? c.text : c.textMuted,
      padding: 0,
      transition: 'color .2s ease,gap .2s cubic-bezier(.16,1,.3,1)',
    };
  };

  const homeLinkArrowStyle = (name: string): CSSProperties => {
    const isHovered = hovered === name;
    return {
      display: 'inline-block',
      opacity: isHovered ? 1 : 0,
      transform: `translateX(${isHovered ? '0' : '-6px'})`,
      transition: 'opacity .2s ease,transform .2s cubic-bezier(.16,1,.3,1)',
      color: c.textFaint,
      width: isHovered ? 'auto' : 0,
      overflow: 'hidden',
    };
  };

  return (
    <div style={heroSectionStyle}>
      <div style={heroInnerStyle} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <h1 style={heroNameStyle}>Terry Kim</h1>
        <p style={heroTaglineStyle}>Software Engineer — Mobile App Architecture &amp; Performance</p>
        <p style={heroIntroStyle}>
          I'm a software engineer based in New York, currently at Instagram working on mobile app architecture and
          performance. Full-stack web and Android/iOS developer at heart.
        </p>
        <div style={homeLinksRowStyle}>
          {HOME_LINKS.map((link) => (
            <a
              key={link.name}
              href={`#/${link.name}`}
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
              style={homeLinkCardStyle(link.name)}
            >
              <span style={homeLinkArrowStyle(link.name)}>→</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
