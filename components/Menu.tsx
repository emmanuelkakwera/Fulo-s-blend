import React from 'react';
import { motion } from 'framer-motion';
import { SMOOTHIES, CONTACT_INFO } from '../constants';
import { Plus, Truck } from 'lucide-react';

const Menu: React.FC = () => {
  const handleOrder = (smoothieName: string) => {
     const businessPhone = CONTACT_INFO.phone1.replace(/\D/g, '').replace(/^0/, '265');
     const text = `*Hello Fulo's Blend!* 🥤%0A%0AI would like to order: *${smoothieName}*`;
     const whatsappUrl = `https://wa.me/${businessPhone}?text=${text}`;
     window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-cream to-white"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-brand-brown mb-4">Our Fresh <span className="text-brand-red">Menu</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Packed with pure fruit. Choose from our delicious local blends.
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full font-bold">
            <Truck size={18} />
            <span>Free Delivery around Lilongwe!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SMOOTHIES.map((smoothie, index) => (
            <motion.div
              key={smoothie.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-brand-cream">
                <img 
                  src={smoothie.image} 
                  alt={smoothie.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {smoothie.badges?.map(badge => (
                    <span key={badge} className="bg-white/95 backdrop-blur-sm text-brand-red text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-brand-brown">{smoothie.name}</h3>
                  <span className="bg-brand-yellow/20 text-brand-brown px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap">
                    {smoothie.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {smoothie.description}
                </p>
                <button 
                  onClick={() => handleOrder(smoothie.name)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-brown text-white py-3 rounded-xl font-semibold hover:bg-[#25D366] transition-colors group-hover:shadow-lg"
                >
                  <Plus size={18} /> Order via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <div className="bg-brand-yellow/10 p-6 rounded-2xl max-w-2xl text-center">
                <p className="text-brand-brown font-medium italic text-lg mb-2">
                  "Try us, you won't regret!"
                </p>
                <p className="text-gray-500 text-sm">
                    We only use the freshest seasonal fruits from Bunda markets. Tastes may vary slightly with nature's sweetness!
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;