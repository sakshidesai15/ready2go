import React from 'react';
import { motion } from 'motion/react';

const trustPhotos = [
  {
    title: "Visa Success Photos",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1200",
    note: "Happy student visa approvals"
  },
  {
    title: "Student Visa Stamping",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    note: "Stamped and ready to fly"
  },
  {
    title: "Office Photos",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    note: "Consultation space and advisors"
  }
];

const universityLogos = [
  "North Valley University",
  "Horizon Institute",
  "Summit Global College",
  "Pacific Crest University",
  "Maplewood University",
  "Lakeside International"
];

export const TrustElements = () => {
  return (
    <section className="py-14 md:py-18 px-6 md:px-12 lg:px-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-title mb-4">Trust Elements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Proof of Success, Partnerships, and Presence
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Real outcomes and global partnerships that showcase the Ready2Go Overseas Consultancy difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPhotos.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg bg-slate-50 h-full flex flex-col">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 md:h-52 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-white/80">{item.note}</p>
                  </div>
                </div>
                <div className="px-4 py-4 flex items-center gap-3 text-xs text-slate-500 mt-auto">
                  <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                  Verified moments from our journey
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">Partner University Logos</h3>
              <p className="text-slate-500">
                Collaboration across leading institutions to support your applications.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {universityLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-center text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:border-brand-blue hover:text-brand-blue hover:bg-white transition-all h-full flex items-center justify-center"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
