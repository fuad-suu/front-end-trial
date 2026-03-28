import { useState } from 'react';
import { Mail, Lock, User, UserPlus, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user:', formData);
    // Add registration logic here
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
      {/* Background ambient accents */}
      <div style={{
        position: 'absolute', top: '50%', right: '20%', width: '400px', height: '400px', 
        background: 'var(--color-accent)', filter: 'blur(160px)', opacity: 0.1, zIndex: 0,
        borderRadius: '50%', transform: 'translate(50%, -50%)',
        transition: 'all 0.5s ease'
      }}></div>

      <div className="glass signup-container" style={{ 
        width: '100%', 
        maxWidth: '1000px', 
        minHeight: '650px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        zIndex: 1
      }}>
        
        {/* Left Side: Branding & Visual */}
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
        }} className="signup-branding">
          
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
              <UserPlus size={80} color="var(--color-accent)" className="glow-text" />
            </div>
            
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 0.5rem 0', letterSpacing: '-1px' }}>JOIN US</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '300px', lineHeight: 1.5 }}>
                Create your account to start sharing and discovering resources.
              </p>
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: '3rem', color: 'var(--text-primary)', opacity: 0.05, fontSize: '4.5rem', fontWeight: 900, userSelect: 'none', pointerEvents: 'none' }}>
             REGISTER
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div style={{
          flex: 1.2,
          padding: '3.5rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2rem',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)'
        }} className="signup-form-side">
          
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Create Account</h1>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="form-stack">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>FULL NAME</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="text" 
                    placeholder="username"
                    required
                    style={{
                      width: '100%', padding: '0.85rem 1.25rem 0.85rem 3.5rem',
                      background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                      borderRadius: '12px', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem'
                    }}
                    className="login-input"
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>EMAIL</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="email" 
                    placeholder="Institutional email"
                    required
                    style={{
                      width: '100%', padding: '0.85rem 1.25rem 0.85rem 3.5rem',
                      background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                      borderRadius: '12px', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem'
                    }}
                    className="login-input"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>PASSWORD</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    style={{
                      width: '100%', padding: '0.85rem 1.25rem 0.85rem 3.5rem',
                      background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                      borderRadius: '12px', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem'
                    }}
                    className="login-input"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>CONFIRM PASSWORD</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    style={{
                      width: '100%', padding: '0.85rem 1.25rem 0.85rem 3.5rem',
                      background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                      borderRadius: '12px', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem'
                    }}
                    className="login-input"
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="glow-btn" style={{ 
              width: '100%', padding: '1rem', justifyContent: 'center', fontSize: '1.1rem', marginTop: '1rem'
            }}>
              Create Account <ArrowRight size={20} />
            </button>
          </form>

          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>Log in</Link>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .signup-container { flex-direction: column; max-width: 500px; height: auto; }
          .signup-branding { border-right: none; border-bottom: 1px solid var(--glass-border); padding: 5rem 2rem; }
          .signup-form-side { padding: 3rem 2rem; }
        }
        .login-input:focus {
          border-color: var(--color-accent) !important;
          background: rgba(62, 247, 166, 0.05) !important;
        }
      `}</style>
    </div>
  );
};

export default Register;
