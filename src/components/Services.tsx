
import { Code, Wand, Database, Settings } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function Services() {
  const services = [
    {
      title: "ML Solutions",
      icon: <Database size={32} className="text-neon-blue" />,
      description: "Custom machine learning models and solutions tailored to your business needs, from data preprocessing to model deployment."
    },
    {
      title: "UI/UX Design",
      icon: <Wand size={32} className="text-neon-blue" />,
      description: "User-centered design approach focusing on creating intuitive, engaging, and accessible digital experiences."
    },
    {
      title: "Full Stack Development",
      icon: <Code size={32} className="text-neon-blue" />,
      description: "End-to-end development services from frontend interfaces to robust backend systems and database architecture."
    },
    {
      title: "Process Automation",
      icon: <Settings size={32} className="text-neon-blue" />,
      description: "Industrial and business process automation solutions that increase efficiency and reduce operational costs."
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark bg-grid relative clip-diagonal-reverse">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-dark to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Services I Offer</h2>
            <p className="text-white/70 text-lg max-w-2xl">
              Leverage my expertise to bring your technical projects and innovative ideas to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in" 
              delay={index * 200}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 h-full hover:border-neon-blue/50 hover:translate-y-[-5px] transition-all duration-300">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Call to action */}
        <AnimatedSection delay={400} className="mt-16">
          <div className="bg-gradient-to-r from-neon-blue/20 to-neon-teal/20 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions tailored to your specific needs and objectives.
            </p>
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-neon-blue text-dark font-medium rounded-lg hover:bg-neon-blue/90 transition-all duration-300 inline-flex items-center justify-center glow"
            >
              Get in Touch
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Services;
