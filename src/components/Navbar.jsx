import { useState, useEffect } from 'react';
import { Sun, Moon, Library } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar glass" style={{
      position: 'sticky', top: '1rem', zIndex: 50, maxWidth: '1440px', margin: '1.5rem auto', padding: '1rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Library className="glow-text" size={32} color="var(--color-accent)" />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AASTU Hub</span>
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 500, color: location.pathname === '/' ? 'var(--color-accent)' : 'var(--text-secondary)', transition: 'color 0.2s' }}>Home</Link>
        <Link to="/browse" style={{ fontWeight: 500, color: location.pathname === '/browse' ? 'var(--color-accent)' : 'var(--text-secondary)', transition: 'color 0.2s' }}>Browse</Link>
        <Link to="/about" style={{ fontWeight: 500, color: location.pathname === '/about' ? 'var(--color-accent)' : 'var(--text-secondary)', transition: 'color 0.2s' }}>About</Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', padding: '0.5rem', display: 'flex' }}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Link to="/login">
          <button className="outline-btn" style={{ padding: '0.5rem 1rem' }}>Log In</button>
        </Link>
        <Link to="/register">
          <button className="glow-btn" style={{ padding: '0.5rem 1rem' }}>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
