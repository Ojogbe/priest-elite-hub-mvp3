
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/a3aaa974-98d0-405e-98e8-e6f695b9f6bc.png" alt="Priest Elite Hub" className="h-12" />
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-black hover:text-priest-orange transition-colors">Home</Link>
          <Link to="/mentorship" className="text-black hover:text-priest-orange transition-colors">Mentorship</Link>
          <Link to="/blog" className="text-black hover:text-priest-orange transition-colors">Blog</Link>
          <Link to="/contact" className="text-black hover:text-priest-orange transition-colors">Contact</Link>
          <Link to="/login">
            <Button variant="outline" className="border-priest-orange text-priest-orange hover:bg-priest-orange hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-priest-orange text-white hover:bg-priest-orange-dark">
              Register
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute left-0 py-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-3 px-4">
            <Link 
              to="/" 
              className="text-black hover:text-priest-orange px-3 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/mentorship" 
              className="text-black hover:text-priest-orange px-3 py-2"
              onClick={toggleMenu}
            >
              Mentorship
            </Link>
            <Link 
              to="/blog" 
              className="text-black hover:text-priest-orange px-3 py-2"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-black hover:text-priest-orange px-3 py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-priest-orange text-priest-orange hover:bg-priest-orange hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-priest-orange text-white hover:bg-priest-orange-dark">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
