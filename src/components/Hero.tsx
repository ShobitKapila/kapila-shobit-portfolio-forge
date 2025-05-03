
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-dark bg-grid"
    >
      {/* Background gradient effect */}
      <div className="absolute top-1/3 -translate-y-1/2 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-neon-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 -translate-y-1/2 right-1/4 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-neon-teal/20 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left side content */}
          <div className="flex-1 text-left max-w-2xl">
            <AnimatedSection animation="fade-in" delay={200}>
              <h2 className="text-neon-blue text-xl md:text-2xl font-medium mb-4">
                Hello there, I&apos;m
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Kapila Shobit
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={600}>
              <h3 className="text-2xl md:text-3xl text-white/90 font-medium mb-6 glow-text">
                Engineer. Developer. ML Enthusiast.
              </h3>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={800}>
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
                An engineering graduate and versatile tech professional skilled in Machine Learning, 
                Full Stack Development, UI/UX, and industrial automation.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projects" 
                  className="px-8 py-3.5 bg-neon-blue text-dark font-medium rounded-lg hover:bg-neon-blue/90 transition-all duration-300 inline-flex items-center justify-center gap-2 glow"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3.5 bg-transparent text-white border border-white/20 hover:border-neon-blue hover:text-neon-blue font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right side profile image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-neon-blue/30 relative overflow-hidden animate-float">
                  <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                      src="/lovable-uploads/d99b8db5-5a53-4793-a577-85a7f4401551.png" 
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
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-neon-blue rounded-full"></div>
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
        
        {/* Scroll indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 flex flex-col items-center animate-pulse">
          <span className="text-white/50 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-2">
            <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
