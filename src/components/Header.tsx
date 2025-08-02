import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            S.L.V Cake Palace
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-pink-100">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;