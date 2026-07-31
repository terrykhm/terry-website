import { useState, type CSSProperties, type MouseEvent } from 'react';
import type { Colors } from '../theme';
import type { Route } from '../routes';
import { usePerfMetrics } from '../hooks';
import PerfCard from './PerfCard';

interface HomeProps {
  c: Colors;
  dark: boolean;
  isMobile: boolean;
}

const HOME_LINKS: { name: Extract<Route, 'experience' | 'contact'>; label: string }[] = [
  { name: 'experience', label: 'Experience' },
  { name: 'contact', label: 'Contact' },
];

export default function Home({ c, dark, isMobile }: HomeProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<string | null>(null);
  const [perfOpen, setPerfOpen] = useState(false);
  const perf = usePerfMetrics();
  const togglePerf = () => setPerfOpen((open) => !open);

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
    backgroundColor: c.bg,
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
    animation: dark ? 'hero-name-glow 4s cubic-bezier(.37,0,.63,1) infinite alternate' : undefined,
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

  const perfLinkStyle: CSSProperties = {
    color: hovered === 'perf' ? c.text : c.textMuted,
    cursor: 'pointer',
    textDecoration: 'none',
    paddingBottom: 2,
    backgroundImage: `linear-gradient(to right,${c.text} 50%,${c.textFaint} 50%)`,
    backgroundSize: '200% 2px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: hovered === 'perf' ? '0% 100%' : '100% 100%',
    transition: 'background-position .3s ease,color .2s ease',
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

  const dropInStyle = (order: number): CSSProperties => ({
    animation: `home-link-drop .55s cubic-bezier(.16,1,.3,1) ${order * 0.09}s both`,
  });

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

  const crossedOutTextStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: isMobile ? 17 : 19,
    fontWeight: 600,
    color: c.textMuted,
  };

  const constructionWrapStyle: CSSProperties = { position: 'relative', display: 'inline-flex', alignItems: 'center' };

  const constructionScribbleStyle: CSSProperties = {
    position: 'absolute',
    left: -10,
    width: 'calc(100% + 20px)',
    top: 'calc(50% - 4px)',
    height: 12,
    pointerEvents: 'none',
  };

  const constructionLabelStyle = (rotate: number): CSSProperties => ({
    fontFamily: "'Permanent Marker',cursive",
    color: '#e5484d',
    fontSize: isMobile ? 13 : 15,
    marginLeft: isMobile ? 18 : 22,
    transform: `rotate(${rotate}deg)`,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  });

  const scribble = (id: string, d: string) => (
    <svg style={constructionScribbleStyle} viewBox="0 0 100 12" preserveAspectRatio="none">
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#e5484d" stopOpacity={0} />
          <stop offset="14%" stopColor="#e5484d" stopOpacity={1} />
          <stop offset="86%" stopColor="#e5484d" stopOpacity={1} />
          <stop offset="100%" stopColor="#e5484d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={d} stroke={`url(#${id})`} strokeWidth={3} fill="none" strokeLinecap="round" />
    </svg>
  );

  return (
    <div style={heroSectionStyle}>
      <div style={heroInnerStyle} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <h1 style={heroNameStyle}>Terry Kim</h1>
        <p style={heroTaglineStyle}>
          Software Engineer — Mobile App Architecture &amp;{' '}
          <span
            role="button"
            tabIndex={0}
            aria-expanded={perfOpen}
            onClick={togglePerf}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePerf()}
            onMouseEnter={() => setHovered('perf')}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered('perf')}
            onBlur={() => setHovered(null)}
            style={perfLinkStyle}
          >
            Performance
          </span>
        </p>
        <PerfCard c={c} dark={dark} isMobile={isMobile} perf={perf} open={perfOpen} />
        <p style={heroIntroStyle}>
          I'm a software engineer based in New York, currently at Instagram working on mobile app architecture and
          performance. Full-stack web and Android/iOS developer at heart.
        </p>
        <div style={homeLinksRowStyle}>
          <a
            href={`#/${HOME_LINKS[0].name}`}
            onMouseEnter={() => setHovered(HOME_LINKS[0].name)}
            onMouseLeave={() => setHovered(null)}
            style={{ ...homeLinkCardStyle(HOME_LINKS[0].name), ...dropInStyle(0) }}
          >
            <span style={homeLinkArrowStyle(HOME_LINKS[0].name)}>→</span>
            {HOME_LINKS[0].label}
          </a>

          <div style={{ ...constructionWrapStyle, ...dropInStyle(1) }}>
            <span style={constructionWrapStyle}>
              <span style={crossedOutTextStyle}>Projects</span>
              {scribble('inkProjects', 'M3,9 Q50,1 97,7')}
            </span>
            <span style={constructionLabelStyle(-4)}>Under Construction</span>
          </div>

          <div style={{ ...constructionWrapStyle, ...dropInStyle(2) }}>
            <span style={constructionWrapStyle}>
              <span style={crossedOutTextStyle}>Writing</span>
              {scribble('inkWriting', 'M3,10 Q50,1 97,3')}
            </span>
            <span style={constructionLabelStyle(3)}>Under Construction</span>
          </div>

          <a
            href={`#/${HOME_LINKS[1].name}`}
            onMouseEnter={() => setHovered(HOME_LINKS[1].name)}
            onMouseLeave={() => setHovered(null)}
            style={{ ...homeLinkCardStyle(HOME_LINKS[1].name), ...dropInStyle(3) }}
          >
            <span style={homeLinkArrowStyle(HOME_LINKS[1].name)}>→</span>
            {HOME_LINKS[1].label}
          </a>
        </div>
      </div>
    </div>
  );
}
