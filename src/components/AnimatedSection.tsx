
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-in",
  delay = 0
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const delayStyle = { animationDelay: `${delay}ms` };

  return (
    <div
      ref={sectionRef}
      className={`${className} ${animationClass}`}
      style={isVisible ? delayStyle : undefined}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
