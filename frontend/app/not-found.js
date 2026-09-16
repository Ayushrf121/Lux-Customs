"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Sparkles } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from './components/utils/animation';

export default function NotFound() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden flex items-center justify-center py-24 selection:bg-[#FBBF24] selection:text-zinc-950">
      
      {/* Background Subtle Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBBF24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Top Tag Badge */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            className="inline-flex items-center space-x-2 bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full text-[#FBBF24] text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md mx-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>404 Error</span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase"
          >
            Page Not <span className="text-[#FBBF24]">Found.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-normal"
          >
            The road you're looking for doesn't exist in our bay. Let's steer you back to familiar ground.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0.6}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FBBF24] text-zinc-950 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#f5b316] shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]"
            >
              <Home className="w-4 h-4" />
              <span>Back To Home</span>
            </Link>

            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold px-8 py-4 rounded-full border border-zinc-800 hover:border-[#FBBF24] transition-all duration-300"
            >
              <span>Contact Studio</span>
              <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}