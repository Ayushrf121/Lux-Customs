"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, Droplets, Sun, AlertTriangle, ShieldCheck, Divide } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function CeramicCoatingService() {
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
            <span>Ultimate Paint Protection</span>
          </motion.div>

          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Premium Automotive <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Ceramic Coating</span>
          </motion.h1>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto"
          >
            Lock in a flawless, mirror-like finish and protect your vehicle's clear coat against environmental contaminants, UV rays, and minor scratches with our advanced nano-ceramic technology.
          </motion.p>
        </motion.div>
      </section>
      <Divider/>
      {/* Environmental Hazards Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Protect Your Paint From <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">The Elements</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Everyday driving exposes your vehicle's factory clear coat to permanent damage. Our coatings provide a sacrificial barrier against it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Sun,
              title: "UV Oxidation & Fading",
              desc: "Prevents the sun's harsh rays from oxidizing your paint and causing premature color fading."
            },
            {
              icon: Droplets,
              title: "Water Spotting",
              desc: "Extreme hydrophobicity repels mineral-heavy water, severely reducing stubborn water spots."
            },
            {
              icon: AlertTriangle,
              title: "Bird Droppings & Sap",
              desc: "Chemical resistance prevents acidic bird droppings and tree sap from etching into the clear coat."
            },
            {
              icon: Sparkles,
              title: "Road Grime & Dirt",
              desc: "Creates a slick surface that stops dirt and brake dust from bonding, making maintenance washes a breeze."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
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
      {/* Our Application Process */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Perfectionist <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Application Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0" />

            {[
              {
                step: "01",
                title: "Decontamination",
                desc: "We perform a thorough hand wash, clay bar treatment, and iron removal to strip all impurities embedded in the clear coat."
              },
              {
                step: "02",
                title: "Paint Correction",
                desc: "Multi-stage machine polishing is executed to remove swirl marks, light scratches, and holograms, restoring a flawless mirror finish."
              },
              {
                step: "03",
                title: "Nano-Coating",
                desc: "The liquid ceramic is carefully hand-applied, bonding at a molecular level to cure into a hardened, glass-like shield over your paint."
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
            Why Upgrade to <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Ceramic Coating</span>?
          </h2>
          <p className="text-zinc-400 text-base">
            Say goodbye to traditional waxing. Ceramic coatings offer years of durable protection and an unmatched deep gloss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Extreme Hydrophobicity",
              desc: "Water beads up and rolls aggressively off the surface, carrying loose dirt with it. This self-cleaning effect keeps your car cleaner for longer."
            },
            {
              title: "9H+ Scratch Resistance",
              desc: "The coating cures into a hard, crystalline layer over your factory clear coat, providing significant resistance against wash-induced swirl marks and micro-marring."
            },
            {
              title: "Deep Candy Gloss",
              desc: "Enhances the natural depth and richness of your paintwork, providing a permanent 'wet look' that standard carnauba waxes and sealants simply cannot match."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-colors shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                <ShieldCheck className="w-6 h-6" />
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
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to lock in that showroom shine?</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Give your vehicle the ultimate armor. Book your ceramic coating package today for years of effortless gloss, easier maintenance, and premium protection.
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