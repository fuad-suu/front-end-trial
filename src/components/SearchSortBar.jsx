import { Search, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

const SearchSortBar = () => {
  return (
    <div className="glass" style={{ 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 1.5rem', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem',
      borderRadius: '12px'
    }}>
      <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
        <Search size={22} color="var(--text-secondary)" style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }} />
        <input 
          type="text" 
          placeholder="Search resources by title, course code..." 
          style={{
            width: '100%', padding: '0.9rem 1rem 0.9rem 3.5rem',
            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--glass-border)',
            borderRadius: '8px', color: 'var(--text-primary)', fontSize: '1rem',
            outline: 'none', transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
          <SlidersHorizontal size={20} />
          <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Sort by:</span>
          <select style={{
            padding: '0.6rem 1rem', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--glass-border)',
            borderRadius: '6px', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none', cursor: 'pointer',
            WebkitAppearance: 'none', appearance: 'none'
          }}>
            <option>Latest</option>
            <option>Oldest</option>
            <option>Most Viewed</option>
          </select>
        </div>

        <div style={{ display: 'flex', border: '1px solid var(--glass-border)', borderRadius: '6px', overflow: 'hidden' }}>
           <button style={{ padding: '0.5rem', background: 'rgba(62, 247, 166, 0.1)', border: 'none', cursor: 'pointer', color: 'var(--color-accent)' }}>
             <LayoutGrid size={20} />
           </button>
           <button style={{ padding: '0.5rem', background: 'transparent', border: 'none', borderLeft: '1px solid var(--glass-border)', cursor: 'pointer', color: 'var(--text-secondary)' }}>
             <List size={20} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSortBar;
