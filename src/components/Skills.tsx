
import { Database, Layers, Code, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      icon: <Code size={24} className="text-neon-blue" />,
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "C++", proficiency: 85 },
        { name: "C", proficiency: 80 },
        { name: "Java", proficiency: 75 },
        { name: "GoLang", proficiency: 65 },
        { name: "R", proficiency: 70 },
        { name: "Verilog", proficiency: 60 },
        { name: "PLC", proficiency: 55 }
      ]
    },
    {
      name: "Web & Dev",
      icon: <Layers size={24} className="text-neon-blue" />,
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 85 },
        { name: "Flask", proficiency: 80 },
        { name: "Django", proficiency: 75 },
        { name: "MERN Stack", proficiency: 80 }
      ]
    },
    {
      name: "Databases & Tools",
      icon: <Database size={24} className="text-neon-blue" />,
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "Postgres", proficiency: 80 },
        { name: "MySQL", proficiency: 85 },
        { name: "PhpMyAdmin", proficiency: 75 },
        { name: "GitHub", proficiency: 90 },
        { name: "BitBucket", proficiency: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-dark to-transparent z-10"></div>
      
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[400px] w-[500px] bg-neon-teal/10 rounded-l-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Proficiency</h2>
            <p className="text-white/70 text-lg max-w-2xl">
              My diverse skill set allows me to approach problems from multiple angles and implement comprehensive solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={category.name} 
              animation="fade-in" 
              delay={categoryIndex * 200}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-neon-blue font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-teal rounded-full animate-pulse-glow"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="flex items-center gap-2 text-neon-blue hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
