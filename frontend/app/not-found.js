"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileQuestion, Home, ArrowLeft, Sparkles } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from './components/utils/animation';

export default function NotFound() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden flex items-center justify-center py-24">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div 
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20 mx-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>404 Error</span>
          </motion.div>

          {/* Large Heading */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-6xl sm:text-8xl font-black text-white tracking-tight"
          >
            Page <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.4)]">Not Found</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-zinc-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
          >
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0.6}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              href="/"
              className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Back To Home</span>
            </Link>

            <Link 
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-8 py-4 rounded-xl border border-zinc-700 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 text-blue-400" />
              <span>Contact Support</span>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}