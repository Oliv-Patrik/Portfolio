import React from 'react';
import { BackgroundGrimoireMesh } from './components/SigilRune';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationTimeline } from './components/EducationTimeline';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8FD] text-[#1D142E] relative selection:bg-[#E3D3F9] selection:text-[#371D6E]">
      {/* Subtle Grimoire Geometry & Ambient Lighting */}
      <BackgroundGrimoireMesh />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Long-Scroll Landing Flow */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <EducationTimeline />
        <ProjectsGrid />
        <ExperienceSection />
      </main>

      {/* Minimalist Footer with Integrated Contact Form */}
      <Footer />
    </div>
  );
}
