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
    name: 'Shaik Rahul',
    role: 'Local Guide - 10 reviews - 10 photos',
    text:
      'Ready2Go Consultancy is a great place for student visa support. The management shows strong leadership and is always supportive. Naresh is an excellent leader who creates a positive and motivating environment. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'regulagadda mani',
    role: '5 reviews',
    text:
      'My achievement to be in uk was started by naresh sir ... my process went very smoothly n now i am gonna be graduated my may of 2026 .. soo happy n Thank you soo much for a smooth process sir .',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'ramakrishna',
    role: '1 review',
    text:
      'Excellent service! Naresh ensured all work was done properly and provided continuous support throughout the entire visa application process for me and my wife. I highly recommend Naresh and his consultancy to anyone looking for a smooth and stress-free experience.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Muni Prasad',
    role: 'Local Guide - 21 reviews - 8 photos',
    text:
      'Out standing service ....Naresh was incredibly helpful fast service and customer service is higher satisfaction and good communication.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Divya M',
    role: '4 reviews',
    text:
      'I had a fantastic experience with Naresh! The entire visa process was handled smoothly from start to finish, with no stress or complications. Everything was well-organized, transparent, and efficient, which made the whole journey completely ...More',
    image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Moghal Rahamath',
    role: '1 review',
    text:
      'I have visited nareshbro he is a good and genuine person and he responds any time about the visa process and from 2024 to till date means 2024 to 2026 from since 2 years he was personally known so I recommend to visa process.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Sairam Yeduvaka',
    role: '1 review',
    text:
      'Good support for UK student visa process. Happy with the service. I always recommend this consultancy. Naresh guided me through the process.',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=200',
    rating: 5,
  },
  {
    name: 'Preethi goud',
    role: '2 reviews',
    text:
      'I am super happy to share my experience with Ready2Go Overseas consultancy as I already faced two visit visa rejections for my mother with different consultancy. I contacted Mr. Naresh and everything went smooth with him and my mother ...More',
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all"
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
