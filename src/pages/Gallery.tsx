import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import photo18 from '../assets/PHOTOS/Untitled design (18).png';
import photo21 from '../assets/PHOTOS/Untitled design (21).png';
import photo22 from '../assets/PHOTOS/Untitled design (22).png';
import photo23 from '../assets/PHOTOS/Untitled design (23).png';
import photo24 from '../assets/PHOTOS/Untitled design (24).png';
import photo25 from '../assets/PHOTOS/Untitled design (25).png';
import photo26 from '../assets/PHOTOS/Untitled design (26).png';
import photo27 from '../assets/PHOTOS/Untitled design (27).png';
import photo28 from '../assets/PHOTOS/Untitled design (28).png';
import photo29 from '../assets/PHOTOS/Untitled design (29).png';
import photo30 from '../assets/PHOTOS/Untitled design (30).png';
import photo31 from '../assets/PHOTOS/Untitled design (31).png';
import photo32 from '../assets/PHOTOS/Untitled design (32).png';

const visaSuccessPhotos = [
  photo18,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32
];

export const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePhoto(null);
        setZoom(1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const openPhoto = (photo: string) => {
    setActivePhoto(photo);
    setZoom(1);
  };

  const closePhoto = () => {
    setActivePhoto(null);
    setZoom(1);
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2.4));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 1));
  const resetZoom = () => setZoom(1);

  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Gallery</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real success stories and on-ground moments from Ready2Go Overseas Consultancy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-2">Visa Success Photos</h2>
              <p className="text-slate-500">Every image reflects a real milestone from our applicants.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visaSuccessPhotos.map((photo, index) => (
              <motion.div
                key={`${photo}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-white cursor-zoom-in"
                onClick={() => openPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Visa success ${index + 1}`}
                  className="w-full h-44 md:h-52 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activePhoto && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-6">
          <button
            onClick={closePhoto}
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close photo viewer"
          />
          <div className="relative z-10 max-w-5xl w-full">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                <div className="text-sm font-semibold text-slate-700">Photo Viewer</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    className="px-3 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold hover:bg-brand-blue transition-all"
                  >
                    -
                  </button>
                  <button
                    onClick={resetZoom}
                    className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-all"
                  >
                    Reset
                  </button>
                  <button
                    onClick={zoomIn}
                    className="px-3 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold hover:bg-brand-blue transition-all"
                  >
                    +
                  </button>
                  <button
                    onClick={closePhoto}
                    className="ml-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-brand-blue transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="bg-slate-900/90 p-4 md:p-6">
                <div className="w-full overflow-auto">
                  <img
                    src={activePhoto}
                    alt="Visa success zoom"
                    className="mx-auto max-h-[70vh] w-auto rounded-2xl bg-white"
                    style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
