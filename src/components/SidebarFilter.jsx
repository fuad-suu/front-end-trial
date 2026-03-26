import { useState } from 'react';
import { ChevronDown, ChevronRight, Check, Folder, FolderOpen } from 'lucide-react';

const departments = ['Electrical', 'Mechanical', 'Electromechanical', 'Civil', 'Environmental', 'Software', 'Architectural', 'Biotech', 'Food Science and Nutrition'];
const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
const resourceTypes = ['Final Exam', 'Lab Report', 'Quiz', 'Test', 'Assignments', 'Projects'];

// Recursive Tree Node Component
const TreeNode = ({ label, childrenData, level, isLeaf, selectedLeaves, toggleLeaf, nodePath }) => {
  const [isOpen, setIsOpen] = useState(level === 0 || level === 1); // Open Root and Depts initially if preferred, but let's just open Root
  
  // Actually, keeping level 1 (Depts) closed by default is better to save vertical space.
  // We'll override the initial state for just the root (level 0).

  const isSelected = isLeaf && selectedLeaves.includes(nodePath);

  const handleToggle = () => {
    if (isLeaf) {
      toggleLeaf(nodePath);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={{ marginLeft: level > 0 ? '1rem' : '0' }}>
      <div 
        onClick={handleToggle}
        style={{ 
          display: 'flex', alignItems: 'center', gap: '0.5rem', 
          padding: '0.4rem 0', cursor: 'pointer', userSelect: 'none',
          color: isSelected ? 'var(--color-accent)' : 'var(--text-secondary)',
          transition: 'color 0.2s', marginTop: '0.2rem'
        }}
      >
        {!isLeaf ? (
           <span style={{ display: 'flex', alignItems: 'center', color: isOpen ? 'var(--text-primary)' : 'inherit' }}>
             {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
             {isOpen ? <FolderOpen size={16} style={{ marginLeft: '4px', color: 'var(--color-accent)' }} /> : <Folder size={16} style={{ marginLeft: '4px' }} />}
           </span>
        ) : (
           <div style={{
             width: '16px', height: '16px', borderRadius: '4px',
             border: `2px solid ${isSelected ? 'var(--color-accent)' : 'var(--glass-border)'}`,
             background: isSelected ? 'rgba(62, 247, 166, 0.1)' : 'transparent',
             display: 'flex', alignItems: 'center', justifyContent: 'center',
             transition: 'all 0.2s', marginLeft: '1rem' // Push leaf nodes in slightly to align
           }}>
             {isSelected && <Check size={12} strokeWidth={3} color="var(--color-accent)" />}
           </div>
        )}
        <span style={{ 
          fontWeight: level === 0 ? 700 : (isLeaf ? 400 : 500), 
          fontSize: level === 0 ? '1.1rem' : '0.95rem',
          color: level === 0 ? 'var(--color-accent)' : (isOpen && !isLeaf ? 'var(--text-primary)' : 'inherit')
        }}>
          {label}
        </span>
      </div>

      {!isLeaf && isOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.1rem', borderLeft: level > 0 ? '1px solid var(--glass-border)' : 'none', marginLeft: level > 0 ? '0.5rem' : '0' }}>
          {childrenData.map(child => (
             <TreeNode 
               key={child.label} 
               label={child.label} 
               childrenData={child.children}
               level={level + 1}
               isLeaf={child.isLeaf}
               selectedLeaves={selectedLeaves}
               toggleLeaf={toggleLeaf}
               nodePath={`${nodePath}/${child.label}`}
             />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarFilter = () => {
  const [selectedLeaves, setSelectedLeaves] = useState([]);

  const toggleLeaf = (path) => {
    setSelectedLeaves(prev => 
      prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
    );
  };

  // Build the hierarchical tree data structure dynamically 
  const treeData = {
    label: 'AASTU University',
    isLeaf: false,
    children: departments.map(dept => ({
      label: dept,
      isLeaf: false,
      children: years.map(year => ({
        label: year,
        isLeaf: false,
        children: resourceTypes.map(type => ({
          label: type,
          isLeaf: true,
          children: null
        }))
      }))
    }))
  };

  return (
    <aside className="glass" style={{
      width: '320px', padding: '1.5rem', height: 'fit-content', maxHeight: 'calc(100vh - 8rem)',
      position: 'sticky', top: '6rem', flexShrink: 0, overflowY: 'auto',
      /* Custom internal scrollbar styling trick for inline */
      scrollbarWidth: 'thin', scrollbarColor: 'var(--glass-border) transparent'
    }}>
      <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '0.5px' }}>Filter Resources</h2>
      
      {/* Root Node rendering the whole tree */}
      <TreeNode 
        label={treeData.label}
        childrenData={treeData.children}
        level={0}
        isLeaf={treeData.isLeaf}
        selectedLeaves={selectedLeaves}
        toggleLeaf={toggleLeaf}
        nodePath={treeData.label}
      />
    </aside>
  );
};

export default SidebarFilter;
