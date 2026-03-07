import React from 'react';
import { motion } from 'motion/react';
import australiaImage from '../assets/images/austrelia.png';
import irelandImage from '../assets/images/ireland.png';
import singaporeImage from '../assets/images/sinagpore.png';

const countries = [
  { name: "United States", code: "US", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800" },
  { name: "Canada", code: "CA", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800" },
  { name: "United Kingdom", code: "UK", image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&q=80&w=800" },
  { name: "Australia", code: "AU", image: australiaImage },
  { name: "New Zealand", code: "NZ", image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&q=80&w=800" },
  { name: "Germany", code: "DE", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800" },
  { name: "Ireland", code: "IE", image: irelandImage },
  { name: "UAE", code: "AE", image: "https://images.unsplash.com/photo-1498496294664-d9372eb521f3?auto=format&fit=crop&q=80&w=800" },
  { name: "Singapore", code: "SG", image: singaporeImage }
];

export const Countries = () => {
  const fallbackImage =
    "data:image/svg+xml;utf8," +
    "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'>" +
    "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
    "<stop offset='0' stop-color='%23e2e8f0'/>" +
    "<stop offset='1' stop-color='%2394a3b8'/>" +
    "</linearGradient></defs>" +
    "<rect width='800' height='400' fill='url(%23g)'/>" +
    "<circle cx='660' cy='80' r='50' fill='%23f59e0b' opacity='0.35'/>" +
    "<circle cx='120' cy='300' r='80' fill='%231f6b3b' opacity='0.25'/>" +
    "</svg>";

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Global Destinations</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase">Countries We Serve</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Expert visa assistance for the world's most popular study, work, and visit destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={country.image} 
                  alt={country.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                <div className="absolute left-6 bottom-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 text-brand-blue font-bold flex items-center justify-center shadow-md">
                    {country.code}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{country.name}</h4>
                    <p className="text-xs text-white/80 uppercase tracking-widest">Visa Assistance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
