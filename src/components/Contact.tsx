
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, SendIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      if (formRef.current) {
        formRef.current.reset();
      }
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-neon-blue" size={24} />,
      label: "Email",
      value: "kapilashobit5@gmail.com",
      href: "mailto:kapilashobit5@gmail.com"
    },
    {
      icon: <Phone className="text-neon-blue" size={24} />,
      label: "Phone",
      value: "+91 9985506841",
      href: "tel:+919985506841"
    },
    {
      icon: <Linkedin className="text-neon-blue" size={24} />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/"
    },
    {
      icon: <Github className="text-neon-blue" size={24} />,
      label: "GitHub",
      value: "Check my code",
      href: "https://github.com/"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-dark to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-white/70 text-lg max-w-2xl">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-in-right">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/70 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-blue text-dark font-medium py-3 rounded-lg hover:bg-neon-blue/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <SendIcon size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="fade-in-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="p-3 bg-white/5 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">{item.label}</p>
                      <p className="text-white/90 font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-neon-blue">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-neon-blue">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-neon-blue">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Contact;
