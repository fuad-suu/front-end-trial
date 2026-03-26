import { useState } from 'react';
import { FileText, Download, User, CalendarDays } from 'lucide-react';

const ResourceCard = ({ title, courseCode, department, year, type, author, date, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        background: 'var(--color-secondary)',
        border: `1px solid ${isHovered ? 'rgba(62, 247, 166, 0.4)' : 'var(--glass-border)'}`,
        borderRadius: '16px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '260px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        boxShadow: isHovered ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-4px)' : 'none'
      }}
      className="resource-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Top Header: Icon & Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ 
            padding: '0.75rem', background: 'var(--color-primary)', 
            borderRadius: '12px', border: '1px solid var(--glass-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <FileText size={22} color="rgba(156, 163, 175, 1)" />
          </div>
          <span style={{ 
            background: 'transparent', border: '1px solid var(--glass-border)',
            padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600,
            color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px'
          }}>
            {type}
          </span>
        </div>

        {/* Core content */}
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ 
            fontSize: '1.15rem', fontWeight: 700, margin: '0 0 0.4rem 0', 
            color: isHovered ? 'var(--color-accent)' : 'var(--text-primary)', 
            lineHeight: 1.4, transition: 'color 0.2s' 
          }}>
            {title}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 0.8rem 0', fontWeight: 500, letterSpacing: '0.5px' }}>
            {courseCode}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ 
              border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', 
              borderRadius: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.02)'
            }}>{department}</span>
            <span style={{ 
              border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', 
              borderRadius: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.02)'
            }}>{year}</span>
          </div>
        </div>
      </div>

      {/* Footer Info & Button */}
      <div style={{ 
        paddingTop: '1.25rem', borderTop: '1px solid var(--glass-border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={14} /> <span style={{ fontSize: '0.85rem' }}>{author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CalendarDays size={14} /> <span style={{ fontSize: '0.85rem' }}>{date}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button style={{ 
            background: 'transparent',
            border: 'none', padding: '0',
            color: isHovered ? 'var(--color-accent)' : '#60a5fa', /* Matching the blue hue in reference or our accent */
            fontSize: '0.95rem', fontWeight: 700,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem',
            transition: 'color 0.2s'
          }}>
             <Download size={18} /> Download
          </button>
          <div style={{ width: '1px', height: '14px', background: 'var(--glass-border)' }}></div>
          <span style={{ fontSize: '0.8rem' }}>
            {size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
