import React, { useState, useEffect } from 'react';
import { Menu, X, GlassWater } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-brand-yellow p-2 rounded-full text-brand-brown shadow-sm">
              <GlassWater size={24} strokeWidth={2.5} />
            </div>
            <span className={`font-display font-bold text-2xl tracking-wide ${
              scrolled ? 'text-brand-brown' : 'text-gray-900'
            }`}>
              Fulo's<span className="text-brand-red">Blend</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-semibold text-lg transition-colors duration-200 hover:text-brand-red ${
                  scrolled ? 'text-brand-brown' : 'text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone1}`} 
              className="bg-brand-red text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown focus:outline-none bg-white/50 p-2 rounded-lg"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-8 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block w-full text-center px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-brand-red hover:bg-brand-cream"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone1}`} 
              className="mt-4 w-full text-center bg-brand-red text-white px-6 py-3 rounded-full font-bold shadow-md"
            >
              Call {CONTACT_INFO.phone1}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;