import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '4rem 2rem', minHeight: '65vh', position: 'relative', zIndex: 1
    }}>
      {/* Decorative Glow Orb */}
      <div style={{
        position: 'absolute', width: '300px', height: '300px', 
        background: 'var(--color-accent)', filter: 'blur(120px)', opacity: 0.15, zIndex: -1,
        borderRadius: '50%'
      }}></div>

      <h1 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
        Elevate Your <span className="glow-text" style={{ color: 'var(--color-accent)' }}>Learning</span> Experience
      </h1>
      
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}>
        The ultimate resource platform for AASTU students. Access materials, share knowledge, and collaborate with peers seamlessly.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/browse">
           <button className="glow-btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
             Browse Resources <ArrowRight size={20} />
           </button>
        </Link>
        <Link to="/register">
           <button className="outline-btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
             <Users size={20} /> Register Now 
           </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
