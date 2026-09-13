"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquareText, CalendarCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import processData from '../data/process.json';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

// Map string names from JSON to actual Lucide React components
const iconMap = {
  MessageSquareText,
  CalendarCheck,
  CheckCircle2,
};

export default function Process() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Animated Badge */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The Process</span>
          </motion.div>

          {/* Main Headline with Blue Gradient Effect */}
          <motion.h2 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Our Streamlined 3-Step Process for <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Vehicle Tinting & Protection</span>
          </motion.h2>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-zinc-400 text-base sm:text-lg"
          >
            We make it easy for you to get your vehicle looking its best. From initial contact to service completion, our 3-step process ensures a smooth and efficient experience, keeping you informed and confident every step of the way.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {processData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;
            return (
              <motion.div 
                key={item.stepNumber}
                variants={fadeInFromBottom}
                custom={index * 0.2}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-8 pt-14 backdrop-blur-sm flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Floating Step Badge & Animated Icon Header */}
                <div className="absolute -top-6 left-8 flex items-center justify-between w-[calc(100%-4rem)]">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                  >
                    <IconComponent className="w-7 h-7" />
                  </motion.div>
                  <span className="text-4xl font-black text-zinc-800 group-hover:text-blue-500/20 transition-colors select-none">
                    {item.stepNumber}
                  </span>
                </div>

                {/* Card Text Content */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Button CTA */}
                <div className="pt-8 mt-6 border-t border-zinc-800/80">
                  <Link 
                    href={item.link}
                    className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}