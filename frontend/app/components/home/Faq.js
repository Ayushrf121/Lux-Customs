"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import faqData from '../data/faq.json';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function FAQ() {
  const [openId, setOpenId] = useState(1); // Default first question open

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Glow Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-left mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Bouncing Glowing Section Logo/Badge */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          {/* Main Headline with Blue Gradient Effect */}
          <motion.h2 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Got Questions? <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">We’ve Got Answers</span>
          </motion.h2>
        </motion.div>

        {/* Main Grid: Accordion Left, Image/Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Accordion */}
          <motion.div 
            className="lg:col-span-7 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <motion.div 
                  key={item.id}
                  variants={fadeInFromBottom}
                  custom={index * 0.1}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'bg-zinc-900/90 border-blue-500/50 shadow-lg shadow-blue-500/10' 
                      : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-bold text-white flex items-center space-x-3">
                      <HelpCircle className={`w-5 h-5 transition-colors ${isOpen ? 'text-blue-400' : 'text-zinc-500'}`} />
                      <span>{item.question}</span>
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-blue-600/20 text-blue-400 rotate-180' : 'bg-zinc-800 text-zinc-400'}`}>
                      <ChevronUp className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-zinc-800/60">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column: Visual Showcase Image */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-20" />

              {/* Image Container */}
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl group">
                <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden">
                  <Image 
                    src="/Faq/faqCar.jpeg" 
                    alt="Lux Customs Workshop Vehicle" 
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
                  <div>
                    <p className="text-white text-sm font-bold">Expert Assistance</p>
                    <p className="text-zinc-400 text-xs">Got custom requirements? Ask us.</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}