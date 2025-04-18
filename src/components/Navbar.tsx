import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">BA/2025</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all">+ HOME</Link>
          <Link to="/experience" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all">+ EXPERIENCE</Link>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all">+ PROJECTS</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all">+ CONTACT</Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-muted">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all" onClick={toggleMenu}>+ HOME</Link>
              <Link to="/experience" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all" onClick={toggleMenu}>+ EXPERIENCE</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all" onClick={toggleMenu}>+ PROJECTS</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all" onClick={toggleMenu}>+ CONTACT</Link>
              <div className="py-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
