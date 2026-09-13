"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import servicesData from '../data/services.json';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function Services() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Animated Jumping/Floating "Our Services" Badge */}
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            animate={{ 
              y: [0, -6, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin duration-1000" />
            <span>Our Services</span>
          </motion.div>

          {/* Main Headline with Blue Gradient Effect */}
          <motion.h2 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Automotive Enhancements</span>
          </motion.h2>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-zinc-400 text-base sm:text-lg"
          >
            Explore our high-performance range of window tinting, paint protection, and vehicle care solutions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {servicesData.map((service, index) => {
            const isExpanded = expandedCardId === service.id;

            return (
              <motion.div 
                key={service.id}
                variants={fadeInFromBottom}
                custom={index * 0.15}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-zinc-900/80 border border-zinc-800/80 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col justify-between hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/15"
              >
                {/* Card Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-80" />
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Service Badge Button with Pulse Effect */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-flex items-center bg-blue-600/90 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-md backdrop-blur-md border border-blue-400/30 group-hover:bg-blue-500 transition-colors">
                      {service.buttonText}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description with Expand/Collapse Animation */}
                    <div className="text-zinc-400 text-sm leading-relaxed">
                      {isExpanded ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.description}
                        </motion.div>
                      ) : (
                        <p className="line-clamp-3">{service.description}</p>
                      )}

                      {/* Read More / Read Less Toggle Button */}
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-blue-400 hover:text-blue-300 mt-2 focus:outline-none transition-colors"
                      >
                        <span>{isExpanded ? "Show Less" : "Read Entire Description"}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`} />
                      </button>
                    </div>
                  </div>

                  {/* Learn More Action Link */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                    >
                      <span>View Service Details</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}