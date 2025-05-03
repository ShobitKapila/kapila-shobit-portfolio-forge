
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import ParticleBackground from "../components/ParticleBackground";

const Index = () => {
  // Set dark mode as default and set page title
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.title = "Kapila Shobit | Portfolio";
  }, []);

  return (
    <div className="bg-dark min-h-screen w-full overflow-x-hidden">
      {/* Particle animation background */}
      <ParticleBackground />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Services Section */}
        <Services />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-dark py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Kapila Shobit. All rights reserved.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Designed and developed with passion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
