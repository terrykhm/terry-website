import { useState, type CSSProperties } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Contact from './components/Contact';
import { getColors, type Theme } from './theme';
import { useIsMobile, useRoute, useScrolled } from './hooks';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();
  const scrolled = useScrolled();
  const route = useRoute();

  const dark = theme === 'dark';
  const c = getColors(theme);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const pageStyle: CSSProperties = {
    fontFamily: 'Manrope,system-ui,sans-serif',
    background: c.bg,
    color: c.text,
    minHeight: '100vh',
    transition: 'background .35s ease,color .35s ease',
  };

  return (
    <div style={pageStyle}>
      <Nav
        c={c}
        dark={dark}
        isMobile={isMobile}
        scrolled={scrolled}
        route={route}
        mobileMenuOpen={mobileMenuOpen}
        onToggleTheme={toggleTheme}
        onToggleMobileMenu={toggleMobileMenu}
        onCloseMobileMenu={closeMobileMenu}
      />

      {route === 'home' && <Home c={c} isMobile={isMobile} />}
      {route === 'experience' && <Experience c={c} isMobile={isMobile} />}
      {route === 'projects' && <Projects c={c} isMobile={isMobile} />}
      {route === 'writing' && <Writing c={c} isMobile={isMobile} />}
      {route === 'contact' && <Contact c={c} isMobile={isMobile} />}
    </div>
  );
}

export default App;
