"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, ArrowRight, Sparkles, Droplets, Sun, Layers, Divide } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function PaintProtectionFilmPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen relative overflow-hidden">

      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInFromBottom} custom={0} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20">
              <Shield className="w-3.5 h-3.5 animate-pulse" />
              <span>Ultimate Paint Defense</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Paint Protection <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Film (PPF)</span>
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
              Shield your vehicle’s factory paint from stone chips, road debris, bug splatters, and daily wear with virtually invisible, self-healing protection applied by Melbourne’s specialists.
            </p>
          </motion.div>

          <motion.div variants={fadeInFromBottom} custom={0.2} className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <Image
                src="/Requirements/ppf-car.jpg"
                alt="PPF Installation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900/95 backdrop-blur-md border border-zinc-700/80 p-4 rounded-xl shadow-xl hidden sm:flex items-center space-x-3 group-hover:-translate-y-2 transition-transform duration-500">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-xs text-zinc-400 font-medium">Technology</p>
                <p className="text-sm font-bold text-white">Self-Healing Surface</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Divider />
      {/* Why PPF Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Invest in <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">PPF?</span>
          </motion.h2>
          <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
            Keep your vehicle looking showroom-fresh while safeguarding its future resale value against unavoidable road hazards.
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
              icon: Layers,
              title: "Stone Chip & Scratch Defense",
              desc: "Absorbs the impact of flying rocks, gravel, and road debris so your actual paint remains untouched and pristine."
            },
            {
              icon: Droplets,
              title: "Self-Healing Top Coat",
              desc: "Swirl marks, light wash scratches, and scuffs disappear automatically when exposed to ambient heat or warm water."
            },
            {
              icon: Sun,
              title: "Optically Clear & UV Stable",
              desc: "Completely transparent finish that preserves your paint's true color and gloss without yellowing over time."
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInFromBottom}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm space-y-4 hover:border-blue-500/50 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      <Divider />
      {/* Coverage Packages */}
      <section className="bg-zinc-900/30 border-y border-zinc-900 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Protection <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Packages</span>
            </motion.h2>
            <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
              Tailored coverage options designed for every driving habit and budget.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Full Front-End Package",
                tag: "Most Popular",
                desc: "Covers the most vulnerable impact areas facing the road.",
                features: ["Full Front Bumper", "Full Hood & Fenders", "Side Mirrors", "Headlights Protection"]
              },
              {
                name: "Track Pack / Extended",
                tag: "Maximum Exposure",
                desc: "Ideal for high-performance cars and highway commuters.",
                features: ["Everything in Full Front", "Rocker Panels", "Rear Wheel Impact Areas", "Lower Doors"]
              },
              {
                name: "Full Body Custom Wrap",
                tag: "Ultimate Defense",
                desc: "Total peace of mind coverage for every single exterior painted panel.",
                features: ["Complete Vehicle Coverage", "Seamless Installation", "Preserves Factory Paint 100%", "Enhanced Gloss or Satin Finish"]
              }
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={fadeInFromBottom}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`relative bg-zinc-950 border ${idx === 0 ? 'border-blue-500/60 shadow-xl shadow-blue-500/10' : 'border-zinc-800 hover:border-zinc-700'
                  } rounded-2xl p-8 flex flex-col justify-between space-y-6 transition-colors`}
              >
                {/* Main Card Header & Tag Row */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    {pkg.tag && (
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm ${idx === 0 ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                        }`}>
                        {pkg.tag}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed min-h-[40px]">{pkg.desc}</p>

                  <ul className="space-y-3 pt-4 border-t border-zinc-800/80">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-zinc-300 space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full text-xs font-bold uppercase tracking-wider py-4 rounded-xl text-center transition-colors block mt-4 ${idx === 0 ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                >
                  Inquire For Pricing
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Divider />
      {/* Call to Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 mt-12">
        <div className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Protect Your Investment?</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Visit our studio in Melbourne or contact us today for a free consultation and custom PPF quote tailored to your vehicle.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}