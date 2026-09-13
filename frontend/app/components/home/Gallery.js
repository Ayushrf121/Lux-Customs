"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';
import galleryData from '../data/gallery.json';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Animated Glowing Header Logo/Tag */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Glimpse of Our Work</span>
          </motion.div>

          {/* Main Headline with Blue Gradient Effect */}
          <motion.h2 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Showcase of Our Expertise in <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Vehicle Tinting & Protection</span>
          </motion.h2>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-zinc-400 text-base sm:text-lg"
          >
            Explore our gallery to see the quality and precision of our work.
          </motion.p>
        </motion.div>

        {/* Gallery Grid with Staggered & Floating Card Animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {galleryData.map((item, index) => (
            <motion.div 
              key={item.id}
              variants={fadeInFromBottom}
              custom={index * 0.1}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 cursor-pointer shadow-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Image */}
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Content Details on Hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-blue-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md mb-2 shadow-sm">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-950/80 text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[60vh] sm:h-[70vh] w-full bg-black">
                <Image 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  fill
                  className="object-contain object-center"
                />
              </div>

              <div className="p-6 bg-zinc-900 flex items-center justify-between">
                <div>
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}