import type { CSSProperties } from 'react';
import type { Colors } from '../theme';
import type { Route } from '../routes';

interface NavProps {
  c: Colors;
  dark: boolean;
  isMobile: boolean;
  scrolled: boolean;
  route: Route;
  mobileMenuOpen: boolean;
  onToggleTheme: () => void;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
}

const NAV_ITEMS: { name: Exclude<Route, 'home'>; label: string }[] = [
  { name: 'experience', label: 'Experience' },
  { name: 'projects', label: 'Projects' },
  { name: 'writing', label: 'Writing' },
  { name: 'contact', label: 'Contact' },
];

export default function Nav({
  c,
  dark,
  isMobile,
  scrolled,
  route,
  mobileMenuOpen,
  onToggleTheme,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: NavProps) {
  const pad = isMobile ? '0 20px' : '0 44px';

  const navStyle: CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: c.navBg,
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${c.border}`,
    transition: 'background .35s ease',
  };

  const navInnerStyle: CSSProperties = {
    maxWidth: 1080,
    margin: '0 auto',
    padding: pad,
    height: scrolled ? 56 : 72,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'height .25s ease',
  };

  const navLinkStyle = (name: Route): CSSProperties => ({
    fontSize: 13.5,
    fontWeight: route === name ? 700 : 500,
    color: route === name ? c.text : c.textMuted,
  });

  return (
    <div style={navStyle}>
      <div style={navInnerStyle}>
        <a
          href="#/"
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: '-.02em',
            color: c.text,
          }}
        >
          terrykim<span style={{ color: c.textFaint }}>.io</span>
        </a>

        {route !== 'home' && (
          <div style={{ display: isMobile ? 'none' : 'flex', gap: 28, alignItems: 'center' }}>
            {NAV_ITEMS.map((item) => (
              <a key={item.name} href={`#/${item.name}`} style={navLinkStyle(item.name)}>
                {item.label}
              </a>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 42,
              height: 24,
              borderRadius: 99,
              background: c.bgAlt,
              border: `1px solid ${c.border}`,
              position: 'relative',
              cursor: 'pointer',
              padding: 0,
              flex: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 2,
                left: dark ? 20 : 2,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: c.text,
                transition: 'left .25s cubic-bezier(.4,0,.2,1)',
                overflow: 'hidden',
              }}
            >
              {dark && (
                <div
                  style={{
                    position: 'absolute',
                    top: -3,
                    left: 5,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: c.bgAlt,
                  }}
                />
              )}
            </div>
          </button>

          {isMobile && (
            <button
              onClick={onToggleMobileMenu}
              aria-label="Menu"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: `1px solid ${c.border}`,
                background: c.bgAlt,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                cursor: 'pointer',
              }}
            >
              <div style={{ width: 18, height: 1.6, background: c.text, borderRadius: 2 }} />
              <div style={{ width: 18, height: 1.6, background: c.text, borderRadius: 2 }} />
              <div style={{ width: 18, height: 1.6, background: c.text, borderRadius: 2 }} />
            </button>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            padding: `20px ${isMobile ? 20 : 44}px 26px`,
            borderBottom: `1px solid ${c.border}`,
            background: c.bg,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={`#/${item.name}`}
              onClick={onCloseMobileMenu}
              style={{ fontSize: 15, color: c.text, fontWeight: 600 }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
