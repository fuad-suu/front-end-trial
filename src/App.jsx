import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';

function AppContent() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/dashboard', '/admin/dashboard'];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  const handleLogin = (role, email) => {
    const userData = { role, email, name: email.split('@')[0] };
    setUser(userData);
    return role === 'admin' ? '/admin/dashboard' : '/dashboard';
  };

  const handleLogout = () => {
    setUser(null);
    window.location.href = '/';
  };

  return (
    <>
      {showNavbar && <Navbar theme={theme} toggleTheme={toggleTheme} user={user} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user?.role === 'user' ? <UserDashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/admin/dashboard" element={user?.role === 'admin' ? <AdminDashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
