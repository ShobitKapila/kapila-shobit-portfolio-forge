
import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function Experience() {
  const experiences = [
    {
      company: "Flipkart",
      position: "Project Intern",
      period: "Jun 2022 - Aug 2022",
      description: "Worked on data analytics and churn modeling, developing predictive models to identify at-risk customers and implementing retention strategies.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flipkart_logo.svg/2560px-Flipkart_logo.svg.png"
    },
    {
      company: "Samsung R&D",
      position: "Research Intern",
      period: "Jan 2022 - Apr 2022",
      description: "Developed multilingual ML datasets and contributed to natural language processing models to enhance language understanding capabilities.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
    },
    {
      company: "DRDO",
      position: "Engineering Intern",
      period: "May 2021 - Jul 2021",
      description: "Assisted in developing defense technology solutions and implementing technical improvements to existing systems.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/DRDO_Logo.svg/1200px-DRDO_Logo.svg.png"
    },
    {
      company: "Jindal Steel",
      position: "Technical Intern",
      period: "Dec 2020 - Feb 2021",
      description: "Worked on process automation systems and industrial control implementation to enhance production efficiency.",
      logo: "https://www.jindalsteelpower.com/img/logo.png"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark bg-grid relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-dark to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <Briefcase size={28} className="text-neon-blue" />
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          </div>
        </AnimatedSection>

        <div className="relative ml-4 md:ml-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-neon-blue/30">
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={exp.company}
              animation="fade-in-right"
              delay={index * 200}
              className="mb-16 last:mb-0 ml-8 md:ml-12 relative before:absolute before:top-3 before:-left-[41px] md:before:-left-[49px] before:w-6 before:h-6 before:bg-dark before:border-4 before:border-neon-blue before:rounded-full before:z-10"
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 relative">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  {/* Company logo */}
                  <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-lg p-2 flex items-center justify-center">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Experience details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-4">
                      <span className="text-neon-blue font-medium">{exp.company}</span>
                      <span className="hidden md:inline text-white/50">•</span>
                      <span className="text-white/60 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-white/80">{exp.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
