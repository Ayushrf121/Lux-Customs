"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function Hero({ 
  title = "Professional Vehicle tinting and customization services", 
  subtitle = "Enhance your vehicle's aesthetics, privacy, and protection with our expert tinting solutions. Our team of skilled professionals ensures precision and quality in every application, delivering a flawless finish that elevates your driving experience." 
}) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center bg-zinc-950 overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/60">
      
      {/* Background Image with Dark Vignette & Gradient Overlay (Optimized for Mobile) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/80 to-zinc-950/40 sm:from-zinc-800 sm:via-zinc-900/80 sm:to-zinc-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-900/40 z-10" />
        <img 
          src="/Requirements/Hero-bg (2).jpg" 
          alt="Luxury Car Window Tinting" 
          className="w-full h-full object-cover object-[80%_center] sm:object-center"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          className="lg:col-span-8 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge with Glowing & Pulsing Effect */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-2 rounded-full text-blue-400 text-sm font-medium backdrop-blur-md shadow-lg shadow-blue-500/10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-75 animate-pulse" />
            <ShieldCheck className="w-4 h-4 text-blue-400 animate-bounce relative z-10" />
            <span className="relative z-10">Over Years of Master Craftsmanship</span>
          </motion.div>

          {/* Main Headline with Blue Gradient Effect */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Professional Vehicle <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Tinting & Customization</span> Services
          </motion.h1>

          {/* Subtitle description */}
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Interactive Call-to-Action Buttons */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0.6}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href="tel:0468317131" 
              className="inline-flex items-center justify-center space-x-3 bg-zinc-900/90 hover:bg-zinc-800 text-white font-semibold px-8 py-4 rounded-xl border border-zinc-700 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                <Phone className="w-4 h-4" />
              </div>
              <span>0468 317 131</span>
            </a>
          </motion.div>

          {/* Feature Highlights Row */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0.8}
            className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-zinc-800/80 max-w-xl text-zinc-400 text-xs sm:text-sm"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>UV Ray Blocking</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>Flawless Finish</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}