"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function About() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-b border-zinc-900">
      
      {/* Subtle Background Glow Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Animated Text & Content */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Animated Jumping/Floating Section Tag */}
            <motion.div 
              variants={fadeInFromBottom} 
              custom={0}
              animate={{ 
                y: [0, -5, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/10"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>About Us</span>
            </motion.div>

            {/* Main Headline with Blue Gradient Effect */}
            <motion.h2 
              variants={fadeInFromBottom} 
              custom={0.2}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Advanced Automotive <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Tinting & Shielding Solutions</span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div 
              variants={fadeInFromBottom} 
              custom={0.4}
              className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed"
            >
              <p>
                Driven by precision and trusted craftsmanship, <span className="text-blue-400 font-bold underline">Lux Customs</span> brings elite automotive window tinting to Melbourne's west in Hoppers Crossing, setting a higher benchmark for vehicle styling and protection.
              </p>
              <p>
                We upgrade your drive with premium window films, advanced protective coatings, dash cam integrations, and expert old-tint extraction—safeguarding your vehicle from harsh UV rays while maximizing comfort and privacy.
              </p>
            </motion.div>

            {/* Key Features Bullet List */}
            <motion.div 
              variants={fadeInFromBottom} 
              custom={0.6}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              <div className="flex items-center space-x-2 text-zinc-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>6+ Years Expertise</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Certified Film Installers</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Lifetime Warranty Options</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>100% Satisfaction Rate</span>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div 
              variants={fadeInFromBottom} 
              custom={0.8}
              className="pt-4"
            >
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Column: Animated Image Showcase */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Background Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-1000" />

              {/* Image Container with Hover Scale */}
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl group">
                <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden">
                  <Image 
                    src="/AboutUs/aboutCar.jpeg" 
                    alt="Luxury Car Detailing & Tinting" 
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold text-lg">
                    6+
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Years of Trust</p>
                    <p className="text-zinc-400 text-xs">Melbourne Specialist</p>
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