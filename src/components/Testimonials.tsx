import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Aarav Mehta',
    role: 'Student Visa, Canada',
    text: 'The team helped me shortlist universities and build a strong visa file. I felt confident at every step.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Riya Sharma',
    role: 'Skilled Migration, Australia',
    text: 'Clear timelines, clean documentation, and fast responses. Their advisors were always two steps ahead.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Daniel Cruz',
    role: 'Visitor Visa, UK',
    text: 'They reviewed every detail of my documents and explained the process in plain language. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Preethi goud',
    role: '2 reviews',
    text: 'After two previous rejections for my mother, I contacted Mr. Naresh and everything went smoothly. Very happy with the result.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Hear from our successful clients who have achieved their dreams of moving abroad with our expert guidance.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-brand-orange/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
