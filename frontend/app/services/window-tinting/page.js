"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Sun, Eye, Layers } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function WindowTintingService() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Hero Section (No Image, No Buttons) */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            <span>Premium Automotive Service</span>
          </motion.div>

          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Professional <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Window Tinting</span> Solutions
          </motion.h1>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto"
          >
            Enhance your driving comfort, interior privacy, and ultimate protection against harsh UV rays with our top-tier nano-ceramic and carbon window film installations.
          </motion.p>
        </motion.div>
      </section>
      <Divider/>

      {/* Film Types Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Advanced Film <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Technology</span>
          </motion.h2>
          <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
            We stock industry-leading window films designed to block maximum solar energy without interfering with mobile, GPS, or radio signals.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              title: "Nano-Ceramic Window Film",
              desc: "The absolute pinnacle of tint technology. Incorporates advanced non-conductive ceramic nanoparticles to block infrared heat rejection while maintaining crystal-clear night and day visibility.",
              badge: "Ultimate Performance"
            },
            {
              title: "High-Performance Carbon Film",
              desc: "Engineered with micro-carbon particles that never fade to purple over time. Offers incredible glare reduction, deep matte black aesthetic appeal, and robust UV stability.",
              badge: "Classic Choice"
            }
          ].map((film, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInFromBottom}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 space-y-4 relative shadow-xl hover:border-blue-500/50 transition-colors group"
            >
              <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                {film.badge}
              </span>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{film.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{film.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Divider/>
      {/* Features & Benefits Section */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Our <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Tinting Services</span>?
            </motion.h2>
            <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
              Engineered for longevity, clarity, and total temperature control under the Australian sun.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Sun,
                title: "99% UV Ray Rejection",
                desc: "Protect your skin from harmful UV radiation and prevent your car's interior dashboard and seats from fading or cracking."
              },
              {
                icon: ShieldCheck,
                title: "Superior Heat Rejection",
                desc: "Drastically reduce cabin temperatures during hot summers, making your drives much cooler while easing AC load."
              },
              {
                icon: Eye,
                title: "Enhanced Privacy & Style",
                desc: "Get a sleek, sophisticated custom appearance while keeping valuables secure and hidden from prying eyes."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={fadeInFromBottom}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-colors shadow-xl group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
            <Divider/>
      {/* Installation Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Precision <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Installation Workflow</span>
          </motion.h2>
          <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
            Meticulous attention to detail guarantees bubbles, lifting, or gaps are entirely non-existent.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              step: "01",
              title: "Computer Precision Cut",
              desc: "We use digital plotters to cut templates specifically tailored to your exact car make, model, and year, ensuring an edge-to-edge factory fit."
            },
            {
              step: "02",
              title: "Deep Glass Decontamination",
              desc: "Windows are scrubbed, razor-cleaned, and chemically prepped to eliminate microscopic dust particles that ruin tint clarity."
            },
            {
              step: "03",
              title: "Clean Room Application",
              desc: "Films are heat-shrunk onto exterior glass curvatures before being seamlessly mounted on the inside under optimal climate conditions."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInFromBottom}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 space-y-4 hover:border-blue-500/50 transition-colors shadow-lg group"
            >
              <span className="text-blue-500 font-black text-3xl group-hover:scale-110 inline-block transition-transform">{item.step}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
          <Divider/>
      {/* Call to Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to upgrade your vehicle's look?</h3>
            <p className="text-zinc-400 text-sm">Contact our expert installation team today for a custom quote.</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105 flex-shrink-0"
          >
            Get Free Quote Now
          </Link>
        </motion.div>
      </section>

    </div>
  );
}