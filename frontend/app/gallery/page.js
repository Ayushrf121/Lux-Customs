"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Filter } from 'lucide-react';
import galleryData from '../components/data/galleryData.json';
import { fadeInFromBottom, staggerContainer } from '../components/utils/animation';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  // Extract unique categories for filter buttons
  const categories = ["All", "Vinyl Wrap", "PPF & Ceramic", "Window Tinting"];

  // Filter cars based on selected category
  const filteredCars = selectedCategory === "All" 
    ? galleryData 
    : galleryData.filter(car => car.category === selectedCategory);

  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden pb-24">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Our Masterpiece Showcase</span>
          </motion.div>

          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Explore Our <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.4)]">Custom Gallery</span>
          </motion.h1>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Take a closer look at some of the high-end modifications, protective wraps, and precision window tinting jobs crafted at our studio.
          </motion.p>
        </motion.div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={car.id}
                onClick={() => setActiveImage(car)}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image 
                    src={car.image} 
                    alt={car.title} 
                    fill 
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Dark Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Expand Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-950/70 border border-zinc-700/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-blue-400" />
                  </div>

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {car.category}
                  </span>
                </div>

                {/* Card Content Details */}
                <div className="p-6 space-y-2 bg-zinc-950/90 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {car.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                    {car.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Full-Screen Lightbox Modal Preview */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-[350px] sm:h-[480px] w-full bg-zinc-950">
                <Image 
                  src={activeImage.image} 
                  alt={activeImage.title} 
                  fill 
                  className="object-contain object-center"
                />
              </div>

              {/* Modal Text Info */}
              <div className="p-6 sm:p-8 bg-zinc-950 border-t border-zinc-800 space-y-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                  {activeImage.category}
                </span>
                <h3 className="text-2xl font-bold text-white pt-2">{activeImage.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{activeImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}