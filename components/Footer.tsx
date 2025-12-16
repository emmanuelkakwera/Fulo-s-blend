import React from 'react';
import { GlassWater, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-brand-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
             <div className="flex items-center space-x-2 mb-2">
               <div className="bg-brand-yellow p-1.5 rounded-full text-brand-brown">
                 <GlassWater size={20} strokeWidth={2.5} />
               </div>
               <span className="font-display font-bold text-xl tracking-wide">
                 Fulo's<span className="text-brand-yellow">Blend</span>
               </span>
             </div>
             <p className="text-brand-yellow/80 text-sm font-medium">Try us, you won't regret!</p>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-brand-yellow transition-colors">Home</a>
            <a href="#menu" onClick={(e) => scrollToSection(e, '#menu')} className="hover:text-brand-yellow transition-colors">Menu</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-brand-yellow transition-colors">About</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-brand-yellow transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-brand-yellow/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fulo's Blend. Free delivery in Lilongwe.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-brand-red fill-current" /> in Bunda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;