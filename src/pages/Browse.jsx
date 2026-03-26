import SidebarFilter from '../components/SidebarFilter';
import SearchSortBar from '../components/SearchSortBar';
import ResourceCard from '../components/ResourceCard';

const dummyData = [
  {
    title: 'Data Structures Final Project',
    courseCode: 'SWE 201',
    department: 'Software',
    year: 'Year 2',
    type: 'Senior Projects',
    author: 'Betelhem',
    date: 'Jan 22, 2025',
    size: '2.5 MB'
  },
  {
    title: 'Signals and Systems Final Exam 2024',
    courseCode: 'ECE 301',
    department: 'Electrical & Computer',
    year: 'Year 3',
    type: 'Final Exams',
    author: 'Abebe Kebede',
    date: 'Jan 20, 2025',
    size: '2.5 MB'
  },
  {
    title: 'Calculus II Lecture Notes - Chapter 1-5',
    courseCode: 'MATH 201',
    department: 'Common',
    year: 'Year 1',
    type: 'Lecture Notes',
    author: 'Sarah Jones',
    date: 'Jan 18, 2025',
    size: '2.5 MB'
  },
  {
    title: 'Thermodynamics Lab Manual',
    courseCode: 'MECH 302',
    department: 'Mechanical',
    year: 'Year 3',
    type: 'Lab Manuals',
    author: 'Dawit Tadesse',
    date: 'Jan 15, 2025',
    size: '2.5 MB'
  },
  {
    title: 'Linear Algebra Assignment 3',
    courseCode: 'MATH 202',
    department: 'Software',
    year: 'Year 2',
    type: 'Assignments',
    author: 'Kebede Alemu',
    date: 'Jan 12, 2025',
    size: '2.5 MB'
  },
  {
    title: 'Engineering Mechanics Midterm',
    courseCode: 'CVE 201',
    department: 'Civil',
    year: 'Year 2',
    type: 'Mid Exams',
    author: 'Yonas',
    date: 'Jan 10, 2025',
    size: '2.5 MB'
  }
];

const Browse = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        maxWidth: '1440px', margin: '0 auto', padding: '2rem',
        display: 'flex', gap: '2rem', width: '100%', flex: 1,
        alignItems: 'flex-start'
      }}>
        <SidebarFilter />

        <main style={{ flex: 1, minWidth: 0 }}>
          <SearchSortBar />
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem', alignItems: 'stretch'
          }}>
            {dummyData.map((data, index) => (
              <ResourceCard key={index} {...data} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Browse;
