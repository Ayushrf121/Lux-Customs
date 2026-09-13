"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trash2, ArrowRight, Sparkles, Phone, AlertTriangle, EyeOff, ThermometerSun, Scissors, Droplets, CheckCircle2 } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function TintRemovalService() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Hero Section (No Image) */}
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
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Specialist Glass Care</span>
          </motion.div>

          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Professional Old <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Tint Removal</span> Services
          </motion.h1>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto"
          >
            Safely strip away bubbling, purple, or faded old window film without risking damage to your vehicle's delicate rear defroster lines, antennas, or glass surfaces.
          </motion.p>
        </motion.div>
      </section>
      <Divider/>
      {/* Warning Signs Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            4 Signs It's Time to <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Remove Your Tint</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Failing window film doesn't just look bad—it can severely impact your driving visibility and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "Bubbling & Blistering",
              desc: "Adhesive failure creates trapped air pockets that distort your view."
            },
            {
              icon: ThermometerSun,
              title: "Purple Fading",
              desc: "Cheap dyes break down under UV rays, turning the film an unsightly purple."
            },
            {
              icon: Scissors,
              title: "Peeling Edges",
              desc: "Film lifting at the edges can catch on window seals and cause damage."
            },
            {
              icon: EyeOff,
              title: "Poor Night Vision",
              desc: "Degraded film becomes hazy, dangerously reducing visibility at night."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
          <Divider/>
      {/* Our Safe Removal Process */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 3-Step <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Safe Removal Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0" />

            {[
              {
                step: "01",
                title: "Steam & Heat Application",
                desc: "We apply controlled steam and heat to soften the old film and adhesive, preventing harsh stress on the glass and defroster lines."
              },
              {
                step: "02",
                title: "Precision Peeling",
                desc: "The film is slowly and meticulously peeled back at specific angles to pull off as much original adhesive as possible."
              },
              {
                step: "03",
                title: "Chemical Extraction",
                desc: "Safe, ammonia-free chemical dissolvers are used to scrub away microscopic glue residue, leaving the glass crystal clear."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-zinc-950 border-4 border-zinc-900 flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-black text-blue-500">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Divider/>
      {/* Features & Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why DIY Removal is <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">A Bad Idea</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Removing tint yourself often leaves behind stubborn adhesive glue and can permanently ruin heating grids. Leave it to the experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Defroster Line Protection",
              desc: "Specialized removal techniques ensure your rear windshield defroster grid and antenna lines remain completely functional and intact."
            },
            {
              title: "No Sticky Residue Left Behind",
              desc: "We completely dissolve and extract layers of old adhesive glue, leaving crystal-clear glass ready for a brand new tint application."
            },
            {
              title: "Safe Chemical Methods",
              desc: "We use professional-grade steamers and safe formulated solutions that protect interior panels, trim pieces, and rubber seals from damage."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-colors shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
          <Divider/>
      {/* Final Call to Action Banner with Buttons */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Got bubbling or peeling old window tint?</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Let our technicians carefully strip and clean your glass back to absolute perfection. Book your removal today and restore your vehicle's clarity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-shrink-0 w-full lg:w-auto">
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              <span>Get Free Quote Now</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href="tel:0468317131" 
              className="inline-flex items-center justify-center space-x-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-xl border border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                <Phone className="w-4 h-4" />
              </div>
              <span>0468 317 131</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}