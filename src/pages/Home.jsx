import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { BookOpen, Share2, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Vast Library',
      description: 'Access thousands of verified study materials, past papers, and lecture notes curated for your specific department.'
    },
    {
      icon: Share2,
      title: 'Peer Sharing',
      description: 'Easily upload and share your own resources with classmates to rapidly contribute and build the community.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Find what you really need in seconds with our optimized search functionality and intuitive filtering system.'
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient accents */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', 
        background: 'var(--color-accent)', filter: 'blur(150px)', opacity: 0.05, zIndex: -2,
        borderRadius: '50%'
      }}></div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Hero />
        
        <section style={{ padding: '0 0 8rem 0', marginTop: '-0.5rem', zIndex: 10, position: 'relative' }}>
          <div style={{ 
            display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyItems: 'center', justifyContent: 'center'
          }}>
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
