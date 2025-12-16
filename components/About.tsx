import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Locally sourced Mangoes, Bananas & Pineapples",
    "Fresh Strawberries & Avocados",
    "No artificial sugar added",
    "Supporting Bunda farmers"
  ];

  return (
    <section id="about" className="py-20 bg-brand-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="mt-12 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80" 
                  alt="Fresh Mango Smoothie" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover group-hover:rotate-2 transition-transform duration-300" 
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-brand-yellow/20">
                    <span className="text-brand-orange font-bold text-xs flex items-center gap-1">
                      🥭 Ripe Mangoes
                    </span>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=600&q=80" 
                  alt="Strawberry Ingredients" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover group-hover:-rotate-2 transition-transform duration-300" 
                />
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-brand-red/20">
                    <span className="text-brand-red font-bold text-xs flex items-center gap-1">
                      🍓 Fresh Strawberries
                    </span>
                </div>
              </div>
            </div>
            {/* Decorative box */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-4 border-brand-red/10 rounded-3xl -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-wider mb-2">Our Passion</h2>
            <h3 className="text-4xl font-display font-bold text-brand-brown mb-6">Fulo's Blend: The Taste of <span className="text-brand-yellow">Home</span></h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in Bunda, we believe the best flavors come from our own backyard. We specialize in blending 
              <span className="font-bold text-brand-red"> succulent strawberries</span>, 
              <span className="font-bold text-brand-yellow"> rich mangoes</span>, and 
              <span className="font-bold text-brand-green"> creamy avocados</span> into drinkable joy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Every cup you buy supports our local fruit vendors and guarantees you a drink packed with natural vitamins and authentic taste.
            </p>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-green flex-shrink-0" size={24} />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;