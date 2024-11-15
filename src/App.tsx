import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Details from './components/Details';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme.styles.secondary}`}>
      <Navigation />
      <Hero />
      <Features />
      <Details />
      <HowItWorks />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;