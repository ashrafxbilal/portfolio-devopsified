import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-muted py-8 mt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bilal Ashraf. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:beingbilalashraf@gmail.com"
              aria-label="Email"
              className="p-2 text-muted-foreground hover:text-foreground transition"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/ashrafxbilal" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-muted-foreground hover:text-foreground transition"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/bilalashraf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-muted-foreground hover:text-foreground transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
