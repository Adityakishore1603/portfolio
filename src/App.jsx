import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
