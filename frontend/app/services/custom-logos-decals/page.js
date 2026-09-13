"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Tag, Shield, Award, ArrowRight, Layers, Flame, Star, CheckCircle, ChevronRight, Zap, Divide } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function CustomLogosDecalsService() {
  const [activeTab, setActiveTab] = useState(0);

  const treeTabs = [
    {
      title: "01. Commercial Fleet & Branding",
      subtitle: "Mobile Billboard Advertising",
      description: "Turn your work vans, utes, and commercial fleets into active marketing assets with precision-cut logo placements, company details, and durable regulatory markings.",
      points: [
        "Full & Partial Die-Cut Door Logos",
        "Perforated One-Way Vision Rear Window Graphics",
        "Reflective Safety, Hazard, & Compliance Striping"
      ]
    },
    {
      title: "02. Custom Lifestyle & Racing",
      subtitle: "Track & Aesthetic Styling",
      description: "Express your personal taste or track pedigree with striking aerodynamic styling accents, custom sponsor bundles, and high-visibility decals.",
      points: [
        "Die-Cut Windshield & Sunstrip Banners",
        "Track Day Number Boxes & Sponsor Pack Overlays",
        "Custom Matte & Gloss Body Line Accents"
      ]
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden">
      
      {/* Background Accent Glow & Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Aesthetic Decorative Badges */}
      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 left-8 xl:left-24 hidden lg:flex items-center space-x-2.5 bg-zinc-900/90 border border-blue-500/30 px-4 py-2 rounded-2xl backdrop-blur-md shadow-2xl text-xs font-semibold text-white z-10"
      >
        <Flame className="w-4 h-4 text-blue-400" />
        <span>Cast Polymeric Vinyl</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-8 xl:right-24 hidden lg:flex items-center space-x-2.5 bg-zinc-900/90 border border-blue-500/30 px-4 py-2 rounded-2xl backdrop-blur-md shadow-2xl text-xs font-semibold text-white z-10"
      >
        <Star className="w-4 h-4 text-blue-400" />
        <span>Vector Sharp Contours</span>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
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
            <span>Custom Branding & Graphics</span>
          </motion.div>

          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Custom <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.4)]">Logos & Decals</span>
          </motion.h1>

          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.4}
            className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto"
          >
            Bring corporate identities to life or give your private vehicle a distinct track-inspired personality using high-performance cast vinyl films built to outlast harsh weather conditions.
          </motion.p>
        </motion.div>
      </section>
      <Divider/>
      {/* Unique Interactive Tree/Branch Structure Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Customization <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Hierarchy</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Select a pathway below to view our specific application branches.
          </p>
        </div>

        {/* Tree Selector Layout: Tabs on left, Dynamic content display on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Branch Navigation Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-4 justify-center">
            {treeTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  activeTab === idx 
                    ? 'bg-blue-600/10 border-blue-500 text-white shadow-xl shadow-blue-500/10' 
                    : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${activeTab === idx ? 'text-blue-400' : 'text-zinc-500'}`}>
                    Branch 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold">{tab.title.substring(4)}</h3>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${activeTab === idx ? 'bg-blue-600 text-white rotate-90' : 'bg-zinc-800 text-zinc-500 group-hover:translate-x-1'}`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Branch Content Box */}
          <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 relative z-10"
              >
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                    {treeTabs[activeTab].subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {treeTabs[activeTab].title}
                  </h3>
                  <p className="text-zinc-300 text-base leading-relaxed">
                    {treeTabs[activeTab].description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-zinc-800">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Sub-Branch Leaf Nodes:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {treeTabs[activeTab].points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center space-x-3 bg-zinc-950/60 border border-zinc-800/80 p-3.5 rounded-xl text-sm text-zinc-200">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    <Divider/>
      {/* Asymmetric Visual Process Timeline */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Workflow</span>
            </h2>
            <p className="text-zinc-400 text-base">
              From vector file verification to pristine surface application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Vector Proofing",
                desc: "We test and scale vector formats to guarantee crisp curves and exact proportional matching for your vehicle panels."
              },
              {
                step: "02",
                title: "Precision Plotting",
                desc: "Computerized flatbed cutters slice graphics out of premium, high-adhesion cast vinyl films without damaging release liners."
              },
              {
                step: "03",
                title: "Squeegee Execution",
                desc: "Using professional wet/dry application techniques, decals are laid flat with zero air bubbles or corner lifting."
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-8 space-y-4 shadow-xl relative group"
              >
                <div className="absolute top-6 right-6 text-2xl font-black text-zinc-800 group-hover:text-blue-500/30 transition-colors">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        <Divider/>
      {/* Advantage Highlights Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Advantage <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-zinc-400 text-base">
                Our custom logos and decals are crafted with precision and durability in mind, ensuring your brand or personal style stands out on the road.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "UV Fade Protection",
              desc: "Specialized exterior laminates block solar bleaching, ensuring rich colors stay true for years."
            },
            {
              icon: Layers,
              title: "Paint-Safe Adhesives",
              desc: "Engineered to peel clean down the road without leaving behind gummy glue or harming your clear coat."
            },
            {
              icon: Award,
              title: "Custom Sizing",
              desc: "Tailored directly to panel dimensions so logos never cross awkwardly over door handles or seams."
            }
          ].map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{adv.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
        <Divider/>
      {/* Call to Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to brand your ride or business fleet?</h3>
            <p className="text-zinc-400 text-sm">Send us your artwork files or dimensions today for an instant quote.</p>
          </div>
          <Link 
            href="/contact" 
            className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105 flex-shrink-0"
          >
            <span>Get Free Quote Now</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}