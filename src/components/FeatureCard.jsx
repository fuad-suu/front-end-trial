const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass feature-card" style={{ 
      padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: '1 1 300px', minWidth: '300px'
    }}>
      <div style={{ 
        width: '56px', height: '56px', borderRadius: '12px', 
        background: 'rgba(62, 247, 166, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--color-accent)'
      }}>
        <Icon size={28} />
      </div>
      <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0 }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '1.05rem' }}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
