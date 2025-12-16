import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the business phone number for WhatsApp (Remove leading 0, add 265 for Malawi)
    const businessPhone = CONTACT_INFO.phone1.replace(/\D/g, '').replace(/^0/, '265');
    
    // Construct the message
    const text = `*Hello Fulo's Blend!* 👋%0A%0AI am interested in your smoothies.%0A%0A*My Details:*%0A👤 Name: ${formData.name}%0A📱 Phone: ${formData.phone}%0A📍 Location: ${formData.location}%0A%0A*Message:*%0A${formData.message}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${text}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-brand-brown mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Craving a smoothie? Send us a message on WhatsApp or visit us in Bunda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Card */}
          <div className="bg-brand-brown rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone size={24} className="text-brand-yellow" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Call / WhatsApp Us</p>
                  <a href={`https://wa.me/265${CONTACT_INFO.phone1.substring(1)}`} className="block text-xl font-bold hover:text-brand-yellow transition-colors">{CONTACT_INFO.phone1}</a>
                  <a href={`tel:${CONTACT_INFO.phone2}`} className="block text-xl font-bold hover:text-brand-yellow transition-colors">{CONTACT_INFO.phone2}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail size={24} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Email Us</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-brand-red transition-colors break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin size={24} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Location</p>
                  <p className="text-lg font-medium">Bunda, Lilongwe<br/>Malawi</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4 relative z-10">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Visual Form */}
          <div className="bg-brand-cream rounded-3xl p-8 shadow-inner border border-brand-yellow/20">
            <h3 className="text-2xl font-bold text-brand-brown mb-6">Send via WhatsApp</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white" 
                    placeholder="0888..." 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location / Address</label>
                <input 
                  type="text" 
                  id="location" 
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white" 
                  placeholder="e.g. Area 49, Lilongwe" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 outline-none transition-all bg-white" 
                  placeholder="I'd like to place an order for..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#128C7E] hover:shadow-green-200/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <Send size={20} /> Send Message to WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;