import Layout from '@/components/Layout';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Index = () => {
  const mouseFollowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = mouseFollowRef.current.getBoundingClientRect();
        const x = clientX - width / 2;
        const y = clientY - height / 2;
        mouseFollowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div 
          ref={mouseFollowRef}
          className="fixed pointer-events-none w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl -z-10 transition-transform duration-300 ease-out"
        />
        
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center lg:pr-8">
                <div className="mb-4 inline-flex items-center px-4 py-2 bg-accent/10 backdrop-blur-sm text-accent-foreground text-sm font-mono rounded-full animate-fade-in border border-accent/20 shadow-lg shadow-accent/5">
                  <span className="text-accent">B/0525</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  Bilal Ashraf
                </h1>
                <div className="mb-8">
                  <p className="text-xl md:text-2xl mb-2 font-mono text-muted-foreground">
                    Java Developer → Entrepreneur → DevOps
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-highlight to-highlight/50 rounded-full"></div>
                </div>
                <p className="text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                  A dynamic professional with 2 years of technical expertise in Java development and a 
                  proven entrepreneurial track record, combining problem-solving methodologies, 
                  cross-cultural adaptability, and digital marketing acumen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/experience" 
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    View Experience 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/projects" 
                    className="group btn-neo animate-boop inline-flex items-center px-4 py-2 border border-primary/30 bg-transparent text-foreground rounded-sharp hover:bg-secondary/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
                  >
                    Explore Projects 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a 
                    href="mailto:beingbilalashraf@gmail.com" 
                    aria-label="Email"
                    className="p-2 border border-muted/30 rounded-sharp text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm animate-jiggle"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="https://github.com/ashrafxbilal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 border border-muted/30 rounded-sharp text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm animate-jiggle"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/ashrafxbilal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 border border-muted/30 rounded-sharp text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm animate-jiggle"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end lg:pl-8">
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-sharp transform translate-x-3 translate-y-3 animate-pulse"></div>
                  <div className="relative z-10 bg-card/50 backdrop-blur-md shadow-xl rounded-sharp p-6 border border-foreground/50 hover:shadow-highlight/20 transition-all duration-300">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 border border-muted/30 rounded-sharp glass shadow-lg hover:border-highlight/50 transition-all duration-300 card-hover backdrop-blur-sm">
                        <h3 className="text-sm font-mono mb-2 text-muted-foreground">TECHNICAL SKILLS</h3>
                        <div className="flex flex-wrap gap-2">
                          {['DevOps', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'AWS', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'Helm', 'Java', 'Spring', 'PostgreSQL', 'MongoDB', 'Jira', 'Git', 'Micronaut'].map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1.5 bg-secondary/40 backdrop-blur-sm text-xs rounded-sharp hover:bg-accent/40 hover:text-accent-foreground transition-colors duration-300 border border-secondary/30 dark:border-secondary/50 dark:hover:border-accent/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border border-muted/30 rounded-sharp glass shadow-lg hover:border-highlight/50 transition-all duration-300 card-hover backdrop-blur-sm">
                        <h3 className="text-sm font-mono mb-2 text-muted-foreground">PROJECTS</h3>
                        <div className="space-y-2">
                          {[
                            { name: 'Azure AKS with Terraform', year: '2025' },
                            { name: 'Moodify Firefox Extension', year: '2025' },
                            { name: 'Rowzah Platform', year: '2024' }
                          ].map((project) => (
                            <div key={project.name} className="flex items-center justify-between group">
                              <span className="text-xs group-hover:text-foreground transition-colors">{project.name}</span>
                              <span className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">{project.year}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border border-muted/30 rounded-sharp glass shadow-lg hover:border-highlight/50 transition-all duration-300 card-hover backdrop-blur-sm">
                        <h3 className="text-sm font-mono mb-2 text-muted-foreground">EXPERIENCE</h3>
                        <div className="space-y-2">
                          {[
                            { company: 'Magic EdTech', period: '2022-2024' },
                            { company: 'Rowzah', period: '2024-2025' }
                          ].map((exp) => (
                            <div key={exp.company} className="flex items-center justify-between group">
                              <span className="text-xs group-hover:text-foreground transition-colors">{exp.company}</span>
                              <span className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">{exp.period}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-mono font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">Core Competencies</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-highlight to-highlight/50 rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Leadership', emoji: '👨‍💼', description: 'Experienced in leading technical teams and guiding cross-functional units.' },
                { title: 'Collaboration', emoji: '🤝', description: 'Strong ability to work with diverse teams and stakeholders to achieve common goals.' },
                { title: 'Innovation', emoji: '💡', description: 'Identifying market gaps and creating solutions using technical knowledge.' },
                { title: 'Creativity', emoji: '🎨', description: 'Applying creative thinking to solve complex technical and business challenges.' }
              ].map((competency) => (
                <div 
                  key={competency.title}
                  className="group glass p-6 rounded-sharp shadow-lg border border-border/30 hover:border-highlight/50 transition-all duration-300 hover:shadow-highlight/20 card-hover backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {competency.emoji}
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-2 group-hover:text-highlight transition-colors">
                    {competency.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {competency.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;