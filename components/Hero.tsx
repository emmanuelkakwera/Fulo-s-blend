import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Truck } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-cream">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-brand-yellow/30 to-transparent -z-10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-red/20 to-transparent -z-10 rounded-full blur-3xl opacity-60"></div>
      
      {/* Small floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 w-12 h-12 bg-brand-green/20 rounded-full blur-sm"
      ></motion.div>
       <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-10 w-20 h-20 bg-brand-yellow/30 rounded-full blur-sm"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left order-2 md:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green text-white font-bold text-sm tracking-wide shadow-lg shadow-green-200">
                <Truck size={16} /> FREE DELIVERY AROUND LILONGWE
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-brand-brown leading-tight mb-4">
              Malawi's Best <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Local Fruits</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-red italic mb-6">
              "Try us, you won't regret!"
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              We blend our local fruits and anything you want. Fresh Mangoes, Strawberries, Bananas, and Pineapples into pure happiness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#menu" 
                onClick={(e) => scrollToSection(e, '#menu')}
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-red-200 hover:bg-red-700 hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                See Our Menu <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-brown border-2 border-brand-yellow/30 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-yellow hover:bg-brand-yellow/10 transition-all"
              >
                Find Location <MapPin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Image - Simulating the User's Image (Yellow Smoothies) */}
        <div className="order-1 md:order-2 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Main Hero Image Frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img 
                src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80" 
                alt="Tray of fresh yellow smoothies" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
            </div>
            
            {/* Floating Badge 1 - Mango */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce-slow"
            >
              <span className="text-2xl">🥭</span>
              <span className="font-bold text-brand-brown text-sm">Sweet Mango</span>
            </motion.div>

            {/* Floating Badge 2 - Strawberry */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce-slow"
            >
              <span className="text-2xl">🍓</span>
              <span className="font-bold text-brand-brown text-sm">Fresh Berries</span>
            </motion.div>
          </motion.div>

          {/* Abstract blob behind image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;