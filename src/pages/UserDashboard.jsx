import { Book, Upload, Search, FileUp, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = ({ user, onLogout }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Welcome, <span className="glow-text" style={{ color: 'var(--color-accent)' }}>{user?.name}!</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>What would you like to do today?</p>
      </div>

      <div style={{
        display: 'flex',
        gap: '2.5rem',
        maxWidth: '1200px',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {/* Browse Card */}
        <div className="glass dashboard-card" style={{
          flex: 1, minWidth: '350px', padding: '3rem', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ 
            width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(62, 247, 166, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
            color: 'var(--color-accent)', border: '1px solid rgba(62, 247, 166, 0.2)'
          }}>
            <Book size={28} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Browse Resources</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            Find lecture notes, past exams, and reference materials for your courses. Filter by department, year, and type.
          </p>
          <Link to="/browse" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', 
            fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' 
          }}>
            Start Browsing <Search size={20} />
          </Link>
        </div>

        {/* Upload Card */}
        <div className="glass dashboard-card" style={{
          flex: 1, minWidth: '350px', padding: '3rem', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ 
            width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(62, 247, 166, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
            color: 'var(--color-accent)', border: '1px solid rgba(62, 247, 166, 0.2)'
          }}>
            <Upload size={28} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Upload Resource</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            Contribute to the community by sharing your own notes and materials. Help your peers succeed.
          </p>
          <Link to="/upload" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', 
            fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' 
          }}>
            Upload Now <FileUp size={20} />
          </Link>
        </div>
      </div>

      <button onClick={onLogout} style={{
        marginTop: '4rem', background: 'transparent', border: '1px solid var(--glass-border)',
        padding: '0.75rem 1.5rem', borderRadius: '12px', color: 'var(--text-secondary)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s'
      }} className="logout-btn">
        <LogOut size={18} /> Logout
      </button>

      <style>{`
        .dashboard-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-accent);
          box-shadow: 0 10px 40px rgba(62, 247, 166, 0.1);
        }
        .logout-btn:hover {
          background: rgba(255, 0, 0, 0.05);
          color: #ff4d4d;
          border-color: #ff4d4d;
        }
      `}</style>
    </div>
  );
};

export default UserDashboard;
