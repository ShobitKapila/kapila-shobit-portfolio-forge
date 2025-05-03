
import { GitHub, Link } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function Projects() {
  const projects = [
    {
      title: "Pest Detection Drone",
      description: "A drone-based system using YOLOv8 to detect agricultural pests with 97.65% accuracy, helping farmers identify and address infestations early.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "YOLOv8", "Computer Vision", "IoT"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Traveling Partner App",
      description: "A full-stack web application built with Python, Flask, and MySQL that connects travelers with similar itineraries for shared experiences.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "Flask", "MySQL", "Bootstrap"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Industrial Automation System",
      description: "Developed a PLC-based automation system for manufacturing processes that increased production efficiency by 32% and reduced errors.",
      image: "https://images.unsplash.com/photo-1585269806222-8e8a23f55b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tags: ["PLC", "SCADA", "Industrial IoT", "C"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Natural Language Processing Tool",
      description: "Created a multilingual NLP tool that analyzes sentiment and extracts key information from user feedback in multiple languages.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "NLP", "Machine Learning", "API"],
      githubLink: "#",
      liveLink: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-dark relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-dark to-transparent z-10"></div>
      
      {/* Background accents */}
      <div className="absolute bottom-40 left-20 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-[300px] h-[300px] bg-neon-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-white/70 text-lg max-w-2xl">
              Explore some of my recent work showcasing my technical abilities and problem-solving approach.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.title} 
              animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
              delay={index * 100}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:border-neon-blue/50 transition-all duration-300"
            >
              {/* Project image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 text-white/70 hover:text-neon-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink}
                    className="flex items-center gap-2 text-white/70 hover:text-neon-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* View more projects button */}
        <AnimatedSection delay={400} className="flex justify-center mt-12">
          <a 
            href="#" 
            className="px-6 py-3 border border-white/20 hover:border-neon-blue hover:text-neon-blue rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            View All Projects
            <GitHub size={18} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Projects;
