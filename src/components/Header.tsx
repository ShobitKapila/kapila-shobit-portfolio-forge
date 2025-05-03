
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Handle scroll for header transparency and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track which section is currently in view
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  // Smooth scroll to section function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-dark/80 backdrop-blur-md border-b border-white/10 py-2" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with animated gradient */}
        <Link
          to="/"
          className="relative group"
        >
          <div className="text-2xl font-bold font-heading hover:text-neon-blue transition-colors duration-300 flex items-center">
            <span className="relative inline-block">
              {/* Animated gradient background */}
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-neon-blue/30 via-neon-teal/20 to-neon-blue/30 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:duration-200 animate-gradient-x"></span>
              
              {/* Text */}
              <span className="relative">
                <span className="text-neon-blue">K</span>apila
                <span className="text-neon-blue">.</span>
              </span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation with improved active state and animations */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`
                text-white/80 transition-all duration-300 relative text-sm uppercase tracking-wide 
                ${activeSection === link.href.substring(1) ? 'text-neon-blue' : 'hover:text-neon-blue'}
              `}
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Animated underline effect */}
              <span 
                className={`
                  absolute left-0 bottom-[-4px] w-full h-0.5 bg-neon-blue transform origin-left
                  transition-all duration-300 ease-out rounded-full
                  ${activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              ></span>
              
              {/* Subtle glow effect for active link */}
              {activeSection === link.href.substring(1) && (
                <span className="absolute inset-0 bg-neon-blue/5 rounded-lg -z-10 blur-sm"></span>
              )}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button - Enhanced with animation */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 relative group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {/* Button highlight effect */}
          <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          
          {/* Animated hamburger icon */}
          {!mobileMenuOpen ? (
            <Menu className="w-5 h-5 text-white transition-transform duration-300" />
          ) : (
            <X className="w-5 h-5 text-white transition-transform duration-300" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation with animation */}
      <div 
        className={`
          md:hidden fixed inset-0 z-40 bg-dark/95 backdrop-blur-md pt-20
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <nav className="container mx-auto py-6 px-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`
                text-2xl font-medium transform transition-all duration-300
                ${activeSection === link.href.substring(1) 
                  ? 'text-neon-blue translate-x-2' 
                  : 'text-white/80 hover:text-neon-blue hover:translate-x-2'}
              `}
            >
              {link.name}
              
              {/* Decorative dot for active menu item */}
              {activeSection === link.href.substring(1) && (
                <span className="inline-block w-2 h-2 bg-neon-blue rounded-full ml-2 animate-pulse"></span>
              )}
            </a>
          ))}
          
          {/* Social media links could go here */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
