"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Award, CheckCircle2, ArrowRight, Layers, Sun, Zap } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function DetailingPage() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden">
      
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
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
            <span>Master Craftsmanship</span>
          </motion.div>

          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Elite Vehicle <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.4)]">Detailing & Protection</span>
          </motion.h1>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto"
          >
            Elevate your vehicle's aesthetic and protect its finish with advanced nano-ceramic coatings, professional window tinting, and precise tint removal in South East Melbourne.
          </motion.p>
        </motion.div>
      </section>
        <Divider/>
      {/* Core Protection Pillars Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Vehicle Solutions</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Engineered standards using top-tier industry materials for uncompromised longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Sun,
              title: "Window Tinting",
              desc: "High-performance carbon and nano-ceramic films offering superior heat rejection, glare reduction, and cabin privacy."
            },
            {
              icon: Layers,
              title: "Ceramic Coating",
              desc: "9H hard multi-layer nano coating providing extreme hydrophobic properties, UV protection, and a deep, mirror-like gloss."
            },
            {
              icon: Shield,
              title: "Tint Removal",
              desc: "Safe and clean removal of bubbling, old, or purple window films without damaging your vehicle's glass or defroster lines."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm space-y-4 shadow-xl hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
          <Divider/>
      {/* Additional Styling Features */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-3.5 py-1 rounded-full text-blue-400 text-xs font-semibold uppercase">
                <Zap className="w-3.5 h-3.5" />
                <span>Custom Aesthetics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Transform Your Ride With <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Precision Styling</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Beyond physical protection, we specialize in high-clarity tint applications, flawless ceramic paint sealing, and safe adhesive removal.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Premium Nano-Ceramic Window Films",
                  "9H Hydrophobic Ceramic Paint Protection",
                  "Safe Old Tint & Adhesive Residue Extraction",
                  "UV Shielding & Interior Heat Rejection"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-zinc-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-white">Why Vehicle Owners Trust Us</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Every car is treated with obsessive attention to detail in our controlled Melbourne studio environment. We combine cutting-edge materials with expert hand-finishing techniques.
              </p>
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black text-white">100%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Satisfaction Focus</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">VIC 3802</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Studio Location</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
            <Divider/>
      {/* Call to Action Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to give your car the finish it deserves?</h3>
            <p className="text-zinc-400 text-sm">Speak with our studio experts or request a fast quote online today.</p>
          </div>
          <Link 
            href="/contact" 
            className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105 flex-shrink-0"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}