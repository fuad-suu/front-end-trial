import { useState } from 'react';
import { Mail, Lock, User, ShieldCheck, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}:`, formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      background: 'var(--color-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dynamic Background Glow representing the role */}
      <div style={{
        position: 'absolute', top: '50%', left: '20%', width: '400px', height: '400px',
        background: 'var(--color-accent)', filter: 'blur(160px)', opacity: 0.1, zIndex: 0,
        borderRadius: '50%', transform: 'translate(-50%, -50%)',
        transition: 'all 0.5s ease'
      }}></div>

      <div className="glass login-container" style={{
        width: '100%',
        maxWidth: '1000px',
        minHeight: '650px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        zIndex: 1
      }}>

        {/* Left Side: Branding & Role Visual */}
        <div style={{
          flex: 1,
          background: 'var(--color-secondary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          position: 'relative',
          borderRight: '1px solid var(--glass-border)'
        }} className="login-branding">

          <Link to="/" style={{
            position: 'absolute', top: '2rem', left: '2.5rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500
          }}>
            <ChevronLeft size={18} /> Back to Home
          </Link>

          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '160px', height: '160px', borderRadius: '40px',
              background: 'rgba(62, 247, 166, 0.05)',
              border: '1px solid rgba(62, 247, 166, 0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(62, 247, 166, 0.1)',
              marginBottom: '1rem'
            }}>
              {role === 'user' ? (
                <User size={80} color="var(--color-accent)" className="glow-text" style={{ transition: 'all 0.3s ease' }} />
              ) : (
                <ShieldCheck size={80} color="var(--color-accent)" className="glow-text" style={{ transition: 'all 0.3s ease' }} />
              )}
            </div>

            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-1px' }}>WELCOME</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '280px', lineHeight: 1.5 }}>
                Log in to your {role} account to access university resources.
              </p>
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: '3rem', color: 'var(--text-primary)', opacity: 0.1, fontSize: '5rem', fontWeight: 900, userSelect: 'none', pointerEvents: 'none' }}>
            {role.toUpperCase()}
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div style={{
          flex: 1.2,
          padding: '4rem 3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2.5rem',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)'
        }} className="login-form-side">

          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem' }}>Login</h1>
          </div>

          {/* Role Toggle Tabs */}
          <div style={{
            background: 'var(--color-primary)',
            padding: '5px',
            borderRadius: '12px',
            display: 'flex',
            gap: '5px',
            border: '1px solid var(--glass-border)'
          }}>
            <button
              onClick={() => setRole('user')}
              style={{
                flex: 1, padding: '0.85rem', borderRadius: '8px', border: 'none',
                background: role === 'user' ? 'rgba(62, 247, 166, 0.15)' : 'transparent',
                color: role === 'user' ? 'var(--color-accent)' : 'var(--text-secondary)',
                cursor: 'pointer', fontWeight: 600, transition: 'all 0.3s'
              }}
            >
              User Login
            </button>
            <button
              onClick={() => setRole('admin')}
              style={{
                flex: 1, padding: '0.85rem', borderRadius: '8px', border: 'none',
                background: role === 'admin' ? 'rgba(62, 247, 166, 0.15)' : 'transparent',
                color: role === 'admin' ? 'var(--color-accent)' : 'var(--text-secondary)',
                cursor: 'pointer', fontWeight: 600, transition: 'all 0.3s'
              }}
            >
              Admin Login
            </button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>EMAIL</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input
                  type="email"
                  placeholder="Institutional email"
                  required
                  style={{
                    width: '100%', padding: '1rem 1.25rem 1rem 3.5rem',
                    background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                    borderRadius: '12px', color: 'var(--text-main)', outline: 'none', fontSize: '1rem'
                  }}
                  className="login-input"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>PASSWORD</label>
                <Link to="/forgot" style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600 }}>Forgot password?</Link>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  style={{
                    width: '100%', padding: '1rem 1.25rem 1rem 3.5rem',
                    background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                    borderRadius: '12px', color: 'var(--text-main)', outline: 'none', fontSize: '1rem'
                  }}
                  className="login-input"
                />
              </div>
            </div>

            <button type="submit" className="glow-btn" style={{
              width: '100%', padding: '1.1rem', justifyContent: 'center', fontSize: '1.1rem', marginTop: '1rem'
            }}>
              Login <ArrowRight size={20} />
            </button>
          </form>

          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Don't have an account? <Link to="/register" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>Sign up</Link>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .login-container { flex-direction: column; max-width: 500px; height: auto; }
          .login-branding { border-right: none; border-bottom: 1px solid var(--glass-border); padding: 4rem 2rem; }
          .login-form-side { padding: 3rem 2rem; }
        }
        .login-input:focus {
          border-color: var(--color-accent) !important;
          background: rgba(62, 247, 166, 0.05) !important;
        }
      `}</style>
    </div>
  );
};

export default Login;
