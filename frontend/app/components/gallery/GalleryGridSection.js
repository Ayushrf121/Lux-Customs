"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import galleryItems from '../data/galleryGrid.json';

export default function GalleryGridSection() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ['ALL', 'TINTING', 'TINT REMOVAL', 'DETAILING', 'PAINT CORRECTION', 'PROTECTION'];

  // Filter logic matching tag strings
  const filteredItems = activeTab === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag === activeTab);

  // Lightbox handlers
  const openLightbox = (item) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setSelectedIndex(index);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section className="bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center lg:justify-start">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                  isActive 
                    ? 'bg-[#FBBF24] text-zinc-950 shadow-[0_0_20px_rgba(251,191,36,0.4)]' 
                    : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:border-[#FBBF24] hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Bento Grid with Framer Motion Spring Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isTall = item.size === 'tall';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className={`group relative bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col justify-between p-5 hover:border-[#FBBF24] hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-colors duration-300 cursor-pointer ${
                    isTall ? 'md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  {/* Image Container */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  </div>

                  {/* Top Right Expand Icon / Badge */}
                  <div className="relative z-10 flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-zinc-950/60 backdrop-blur-md border border-zinc-700/50 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Content Tag & Title */}
                  <div className="relative z-10 space-y-1.5 pt-20">
                    <span className="text-[#FBBF24] text-[10px] font-extrabold tracking-[0.2em] uppercase block">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#FBBF24] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Preview Overlay */}
        <AnimatePresence>
          {selectedIndex !== null && activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-[#FBBF24] hover:text-zinc-950 transition-colors z-50"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-white hover:bg-[#FBBF24] hover:text-zinc-950 transition-colors z-50"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-white hover:bg-[#FBBF24] hover:text-zinc-950 transition-colors z-50"
                aria-label="Next item"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Main Preview Image */}
                <div className="relative aspect-[16/10] w-full bg-zinc-900">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Bottom Details Footer */}
                <div className="p-6 bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-900">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    {activeItem.title}
                  </h3>
                  <span className="text-xs font-extrabold tracking-[0.2em] text-[#FBBF24] uppercase">
                    {activeItem.tag}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}