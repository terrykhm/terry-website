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

type NavItem = { name: Exclude<Route, 'home'>; label: string; hidden?: boolean };

// Projects and Writing are under construction, so they are hidden from the nav until they have content.
const ALL_NAV_ITEMS: NavItem[] = [
  { name: 'experience', label: 'Experience' },
  { name: 'projects', label: 'Projects', hidden: true },
  { name: 'writing', label: 'Writing', hidden: true },
  { name: 'contact', label: 'Contact' },
];

const NAV_ITEMS = ALL_NAV_ITEMS.filter((item) => !item.hidden);

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

  // The nav shrinks on scroll, so it is fixed and a constant-height spacer reserves its full-size
  // space in the flow. A sticky nav that changes height moves the page under the scroll position
  // and can flip `scrolled` back and forth near the threshold (visible as shaking).
  const navStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
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
    <>
      <div aria-hidden style={{ height: 72 }} />
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
    </>
  );
}
