
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function Hero() {
  // Reference for the circular text animation
  const rotatingTextRef = useRef<HTMLDivElement>(null);

  // Handle the rotating text animation
  useEffect(() => {
    const textElement = rotatingTextRef.current;
    if (!textElement) return;

    let rotation = 0;
    let animationId: number;

    const animate = () => {
      rotation += 0.3;
      textElement.style.transform = `rotate(${rotation}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-dark"
    >
      {/* Enhanced background with gradient mesh and animated dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,229,255,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(0,188,212,0.15),transparent_40%)] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid z-0"></div>
      <div className="absolute top-1/3 -translate-y-1/2 left-1/4 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-2/3 -translate-y-1/2 right-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-neon-teal/20 blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left side content */}
          <div className="flex-1 text-left max-w-2xl">
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <h2 className="text-neon-blue text-sm md:text-base font-medium">
                  Hello there, I&apos;m Kapila Shobit
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Engineer.
                </span>
                <br />
                <span className="bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-transparent">
                  Developer.
                </span>
                <br />
                <span className="bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent">
                  ML Enthusiast.
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={700}>
              <p className="text-white/70 text-lg md:text-xl my-8 max-w-xl border-l-2 border-neon-blue/50 pl-4">
                An engineering graduate and versatile tech professional skilled in Machine Learning, 
                Full Stack Development, UI/UX, and industrial automation.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={900}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a 
                  href="#projects" 
                  className="group px-8 py-4 bg-neon-blue text-dark font-medium rounded-lg hover:bg-neon-blue/90 transition-all duration-300 inline-flex items-center justify-center gap-2 glow relative overflow-hidden"
                >
                  <span className="z-10 relative">View Projects</span>
                  <ArrowRight size={18} className="z-10 relative group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 w-0 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a 
                  href="#contact" 
                  className="group px-8 py-4 bg-transparent backdrop-blur-sm text-white border border-white/20 hover:border-neon-blue hover:text-neon-blue font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Get in Touch
                  <div className="ml-2 w-1.5 h-1.5 rounded-full bg-neon-blue group-hover:w-6 transition-all duration-300"></div>
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right side profile image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-neon-blue/30 rounded-full animate-pulse-glow"></div>
                <div className="absolute -bottom-8 -right-4 w-16 h-16 border border-neon-teal/40 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
                
                {/* Main profile image container */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-neon-blue/30 relative overflow-hidden animate-float group">
                  {/* Glowing overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 via-transparent to-neon-teal/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Profile image with inner border */}
                  <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                      src="https://i.postimg.cc/4NNCmvKd/my.jpg" 
                      alt="Kapila Shobit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Rotating circular text */}
                  <div 
                    ref={rotatingTextRef}
                    className="absolute inset-0 w-full h-full rounded-full"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-neon-blue rounded-full shadow-[0_0_15px_5px_rgba(0,229,255,0.3)] z-20"></div>
                    <svg className="absolute inset-0" width="100%" height="100%">
                      <text 
                        x="50%" 
                        y="12%" 
                        fontSize="11" 
                        fill="#00E5FF" 
                        fontWeight="600"
                        textAnchor="middle"
                        letterSpacing="1.5"
                      >
                        <textPath href="#textCircle">
                          ENGINEER • DEVELOPER • ML ENTHUSIAST • CREATOR
                        </textPath>
                      </text>
                      <path 
                        id="textCircle" 
                        d="M35,165 A130,130 0 1,1 295,165 A130,130 0 1,1 35,165"
                        fill="none"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center items-start p-2">
            <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
