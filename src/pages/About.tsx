import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-brand-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Ready2Go Overseas Consultancy</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Guiding global journeys with clarity, care, and compliant documentation.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Information Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Who We Are</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Ready2Go Overseas Consultancy</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded to simplify the complex world of international immigration, Ready2Go Overseas Consultancy has grown into a trusted partner for students, professionals, and families planning their global move.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team of certified consultants brings years of experience across major global destinations including the USA, UK, Canada, Australia, and Europe.
            </p>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Professional Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To provide transparent, ethical, and efficient immigration solutions that help our clients transition seamlessly to their new lives abroad, whether for education, career, or settlement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the world's most client-centric overseas consultancy, recognized for our integrity, innovation, and the life-changing impact we create for individuals and families globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Decades of Combined Experience</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Legal Compliance", desc: "Deep understanding of international immigration laws and policies.", icon: Award },
              { title: "Profile Evaluation", desc: "Rigorous assessment to ensure the highest probability of visa success.", icon: CheckCircle },
              { title: "Global Network", desc: "Strong partnerships with universities and employers worldwide.", icon: Award }
            ].map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
