import { useState } from 'react';
import { Book, Upload, Search, FileUp, Shield, LayoutDashboard, Users, FileText, Settings, LogOut, ChevronLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = ({ user, onLogout }) => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'panel'
  const [activeModule, setActiveModule] = useState('dashboard'); // 'dashboard', 'resources', 'users', 'settings'

  if (currentView === 'panel') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--color-primary)',
        display: 'flex',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Admin Sidebar */}
        <aside className="glass" style={{
          width: '280px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1.5rem',
          borderRadius: 0,
          borderLeft: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          position: 'sticky',
          top: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Shield size={32} color="var(--color-accent)" className="glow-text" />
            <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>Admin Hub</span>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'resources', label: 'Resources', icon: FileText },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem',
                  borderRadius: '12px', border: 'none', cursor: 'pointer',
                  background: activeModule === item.id ? 'rgba(62, 247, 166, 0.1)' : 'transparent',
                  color: activeModule === item.id ? 'var(--color-accent)' : 'var(--text-secondary)',
                  transition: 'all 0.3s ease', textAlign: 'left', fontWeight: 600, fontSize: '1rem'
                }}
                className={activeModule === item.id ? '' : 'sidebar-btn-hover'}
              >
                <item.icon size={20} /> {item.label}
              </button>
            ))}
          </nav>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
            <button 
              onClick={() => setCurrentView('landing')}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem', color: 'var(--text-secondary)', background: 'transparent',
                border: 'none', cursor: 'pointer', transition: 'color 0.2s', fontWeight: 500
              }}
            >
              <ChevronLeft size={18} /> Back to Dashboard
            </button>
            <button 
              onClick={onLogout}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem', color: '#ff4d4d', background: 'transparent',
                border: 'none', cursor: 'pointer', transition: 'opacity 0.2s', fontWeight: 600,
                marginTop: '0.5rem'
              }}
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '3rem 4rem', height: '100vh', overflowY: 'auto' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {activeModule.toUpperCase()}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  Manage and monitor university {activeModule}.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ padding: '0.5rem 1rem', background: 'var(--color-secondary)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid var(--glass-border)' }}>
                  {user?.name || 'Administrator'}
                </span>
              </div>
            </header>

            {activeModule === 'dashboard' ? (
              <>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1.5rem',
                  marginBottom: '4rem'
                }} className="stats-grid">
                  <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent)' }}>
                      <FileUp size={20} /> <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>TOTAL UPLOADS</span>
                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>8,492</p>
                  </div>

                  <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent)' }}>
                      <Download size={20} /> <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>TOTAL DOWNLOADS</span>
                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>24,512</p>
                  </div>

                  <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent)' }}>
                      <Users size={20} /> <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>TOTAL USERS</span>
                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>1,284</p>
                  </div>

                  <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fbbf24' }}>
                      <FileText size={20} /> <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>PENDING APPROVAL</span>
                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>42</p>
                  </div>
                </div>

                {/* Distribution Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '2rem',
                  marginBottom: '4rem'
                }} className="charts-grid">
                  
                  {/* Downloads Chart */}
                  <div className="glass" style={{ padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', borderLeft: '4px solid var(--color-accent)', paddingLeft: '1rem' }}>
                      Downloads <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>by Type</span>
                    </h3>
                    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="chart-flex">
                      <div className="pie-chart" style={{
                        width: '180px', height: '180px', borderRadius: '50%',
                        background: 'conic-gradient(var(--color-accent) 0% 35%, #3b82f6 35% 60%, #a855f7 60% 85%, #f59e0b 85% 95%, #ef4444 95% 100%)',
                        boxShadow: '0 0 30px rgba(62, 247, 166, 0.1)',
                        position: 'relative'
                      }}>
                        <div style={{ position: 'absolute', inset: '15%', background: 'var(--color-secondary)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}></div>
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                          { label: 'Lecture Notes', color: 'var(--color-accent)', val: '35%' },
                          { label: 'Mid Exams', color: '#3b82f6', val: '25%' },
                          { label: 'Final Exams', color: '#a855f7', val: '25%' },
                          { label: 'Quizzes', color: '#f59e0b', val: '10%' },
                          { label: 'Assignments', color: '#ef4444', val: '5%' },
                        ].map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: item.color }}></div>
                              <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                            </div>
                            <span style={{ fontWeight: 700 }}>{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Uploads Chart */}
                  <div className="glass" style={{ padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', borderLeft: '4px solid var(--color-accent)', paddingLeft: '1rem' }}>
                      Uploads <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>by Type</span>
                    </h3>
                    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="chart-flex">
                      <div className="pie-chart" style={{
                        width: '180px', height: '180px', borderRadius: '50%',
                        background: 'conic-gradient(var(--color-accent) 0% 45%, #3b82f6 45% 65%, #a855f7 65% 80%, #f59e0b 80% 90%, #ef4444 90% 100%)',
                        boxShadow: '0 0 30px rgba(62, 247, 166, 0.1)',
                        position: 'relative'
                      }}>
                        <div style={{ position: 'absolute', inset: '15%', background: 'var(--color-secondary)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}></div>
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                          { label: 'Lecture Notes', color: 'var(--color-accent)', val: '45%' },
                          { label: 'Mid Exams', color: '#3b82f6', val: '20%' },
                          { label: 'Final Exams', color: '#a855f7', val: '15%' },
                          { label: 'Quizzes', color: '#f59e0b', val: '10%' },
                          { label: 'Assignments', color: '#ef4444', val: '10%' },
                        ].map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: item.color }}></div>
                              <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                            </div>
                            <span style={{ fontWeight: 700 }}>{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="glass" style={{ padding: '5rem', textAlign: 'center', borderStyle: 'dashed' }}>
                 <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                   The <strong>{activeModule}</strong> management interface is under development.
                 </p>
              </div>
            )}
          </div>
        </main>

        <style>{`
          @media (max-width: 1200px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .charts-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 800px) {
            .chart-flex { flex-direction: column; gap: 2rem !important; }
            .pie-chart { width: 140px !important; height: 140px !important; }
          }
          @media (max-width: 600px) {
            .stats-grid { grid-template-columns: 1fr !important; }
          }
          .sidebar-btn-hover:hover {
            color: var(--text-primary) !important;
            background: rgba(255, 255, 255, 0.05) !important;
          }
        `}</style>
      </div>
    );
  }

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
          Welcome, <span className="glow-text" style={{ color: 'var(--color-accent)' }}>Admin!</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Administrator Dashboard</p>
      </div>

      <div style={{
        display: 'flex',
        gap: '2.5rem',
        maxWidth: '1400px',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {/* Browse Card */}
        <div className="glass dashboard-card" style={{
          flex: 1, minWidth: '320px', padding: '2.5rem', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ 
            width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(62, 247, 166, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
            color: 'var(--color-accent)', border: '1px solid rgba(62, 247, 166, 0.2)'
          }}>
            <Book size={28} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>Browse Resources</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Access and review all university materials across departments.
          </p>
          <Link to="/browse" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', 
            fontWeight: 700, textDecoration: 'none' 
          }}>
            View Resources <Search size={18} />
          </Link>
        </div>

        {/* Upload Card */}
        <div className="glass dashboard-card" style={{
          flex: 1, minWidth: '320px', padding: '2.5rem', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ 
            width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(62, 247, 166, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
            color: 'var(--color-accent)', border: '1px solid rgba(62, 247, 166, 0.2)'
          }}>
            <Upload size={28} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>Direct Upload</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Upload administrative materials or official resource updates.
          </p>
          <Link to="/upload" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', 
            fontWeight: 700, textDecoration: 'none' 
          }}>
            Upload Now <FileUp size={18} />
          </Link>
        </div>

        {/* Admin Panel Card */}
        <div className="glass dashboard-card" onClick={() => setCurrentView('panel')} style={{
          flex: 1, minWidth: '320px', padding: '2.5rem', position: 'relative', overflow: 'hidden', cursor: 'pointer'
        }}>
          <div style={{ 
            width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(62, 247, 166, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
            color: 'var(--color-accent)', border: '1px solid rgba(62, 247, 166, 0.2)'
          }}>
            <Shield size={28} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>Admin Panel</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Manage users, approve resources, and monitor university analytics.
          </p>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', 
            fontWeight: 700
          }}>
            Open Panel <LayoutDashboard size={18} />
          </div>
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

export default AdminDashboard;
