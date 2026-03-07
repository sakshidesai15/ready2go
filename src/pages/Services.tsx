import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Plane, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const detailedServices = [
  {
    title: "Study Abroad",
    description: "Plan every step of your education journey with university shortlisting, SOP support, and timely visa filing.",
    icon: GraduationCap,
    color: "bg-blue-50 text-brand-blue",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000",
    features: ["University Shortlisting", "SOP & LOR Support", "Visa Interview Prep", "Scholarship Guidance"]
  },
  {
    title: "Skilled Migration",
    description: "Advance your career with point-based assessments, sponsorship guidance, and compliant documentation.",
    icon: Briefcase,
    color: "bg-orange-50 text-brand-orange",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    features: ["Point-Based Assessment", "Employer Sponsorship", "Job Market Guidance", "Document Verification"]
  },
  {
    title: "Visitor & Family",
    description: "Stress-free visitor visas with a clear checklist, itinerary guidance, and embassy-ready submissions.",
    icon: Plane,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1000",
    features: ["Itinerary Support", "Document Checklist", "Fast-Track Processing", "Multi-Country Visits"]
  },
  {
    title: "PR & Settlement",
    description: "Strategic support for long-term residency, citizenship pathways, and family sponsorship.",
    icon: MapPin,
    color: "bg-purple-50 text-purple-600",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1000",
    features: ["PR Application Support", "Citizenship Pathways", "Family Sponsorship", "Compliance Checks"]
  }
];

export const Services = () => {
  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive visa and immigration solutions tailored to your unique journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange transition-all flex items-center gap-2 group">
                  Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
