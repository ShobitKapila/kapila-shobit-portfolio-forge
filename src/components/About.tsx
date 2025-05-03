
import { 
  Code, 
  User, 
  GraduationCap, 
  LayoutDashboard, 
  Languages 
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function About() {
  const education = [
    {
      degree: "B.Tech in ECE",
      institution: "VIT",
      year: "2019-2023",
      gpa: "8.60"
    },
    {
      degree: "Intermediate",
      institution: "FiitJee Junior College",
      year: "2017-2019",
      gpa: "89.99%"
    },
    {
      degree: "Secondary",
      institution: "Pragathi Central School",
      year: "2017",
      gpa: "85.64%"
    }
  ];
  
  const languages = ["English", "Hindi", "Telugu", "Spanish"];
  const awards = ["Hackathons", "MUNs", "Sports (Gold Medals)"];
  
  return (
    <section id="about" className="py-24 bg-dark bg-grid relative">
      <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-dark to-transparent top-0 z-10"></div>
      
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[400px] w-[600px] bg-neon-blue/10 rounded-r-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <User size={28} className="text-neon-blue" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <AnimatedSection animation="fade-in-right">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-neon-blue">Get to Know Me</h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                I am an engineering graduate with a passion for technology and innovation. My journey 
                in the tech world has equipped me with versatile skills across Machine Learning,
                Full Stack Development, UI/UX, and industrial automation.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Throughout my academic and professional career, I have worked on diverse projects
                that have honed my problem-solving abilities and technical expertise. I thrive in 
                collaborative environments and am constantly seeking new challenges to expand my knowledge.
              </p>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection animation="fade-in-left">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={24} className="text-neon-blue" />
                <h3 className="text-xl font-semibold text-neon-blue">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="border-l-2 border-neon-blue/30 pl-4 py-1"
                  >
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <p className="text-white/70">{edu.institution} • {edu.year}</p>
                    <p className="text-neon-blue font-medium">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Languages & Awards */}
          <AnimatedSection animation="fade-in-right" delay={200}>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Languages size={24} className="text-neon-blue" />
                <h3 className="text-xl font-semibold text-neon-blue">Languages</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-lg text-white/80"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <LayoutDashboard size={24} className="text-neon-blue" />
                <h3 className="text-xl font-semibold text-neon-blue">Awards & Achievements</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {awards.map((award, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-lg text-white/80"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Tech Journey */}
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Code size={24} className="text-neon-blue" />
                <h3 className="text-xl font-semibold text-neon-blue">My Tech Journey</h3>
              </div>
              
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                My fascination with technology began early, leading me to explore various domains 
                from electronics to software development. I've consistently embraced new technologies 
                and methodologies to stay at the forefront of innovation.
              </p>
              
              <p className="text-white/80 text-lg leading-relaxed">
                Whether it's developing machine learning models, designing user interfaces, or 
                implementing full-stack solutions, I approach each project with enthusiasm and a 
                commitment to excellence.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;
