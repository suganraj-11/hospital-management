import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16"> {/* padding to compensate for fixed header */}
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;