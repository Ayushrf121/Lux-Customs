"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Sparkles, Phone, ArrowRight, CheckCircle2, Clock, Award, Divide } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function EndeavourHillsAreaPage() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden">

      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

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
            <MapPin className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>South East Melbourne Flagship Studio</span>
          </motion.div>

          <motion.h1
            variants={fadeInFromBottom}
            custom={0.2}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Elite Vehicle Styling in <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.4)]">Endeavour Hills</span>
          </motion.h1>

          <motion.p
            variants={fadeInFromBottom}
            custom={0.4}
            className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto"
          >
            Conveniently located right at <strong className="text-white">85 Kennington Park Dr</strong>, Lux Customs is South East Melbourne’s trusted destination for precision window tinting, paint protection films, and full aesthetic wraps.
          </motion.p>

          <motion.div
            variants={fadeInFromBottom}
            custom={0.6}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              <span>Book Your Vehicle Today</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:0468317131"
              className="inline-flex items-center justify-center space-x-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-8 py-4 rounded-xl border border-zinc-700 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>0468 317 131</span>
            </a>
          </motion.div>
        </motion.div>
      </section>
      <Divider />
      {/* Studio Location Highlights Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why South East Car Owners <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Engineered standards, controlled studio environment, and uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Local Studio Hub",
              desc: "Based locally in Endeavour Hills VIC 3802, offering easy drop-offs and personalized consultations for all Melbourne car enthusiasts."
            },
            {
              icon: Award,
              title: "Certified Master Installers",
              desc: "Years of specialized hands-on experience handling luxury, performance, and everyday consumer vehicles with extreme care."
            },
            {
              icon: Clock,
              title: "Rapid Turnaround",
              desc: "Efficient project scheduling and meticulous workflow management to get you back on the road looking pristine without delays."
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
      <Divider />
      {/* Services Available in this Area */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-zinc-400 text-base">
              Everything your vehicle needs under one secure roof in Endeavour Hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Window Tinting", link: "/services/window-tinting", desc: "Nano-ceramic & carbon films for maximum heat and UV rejection." },
              { name: "Paint Protection Film (PPF)", link: "/services/paint-protection-film", desc: "Self-healing invisible armour against stone chips and road debris." },
              { name: "Vinyl Wrapping", link: "/services/vinyl-wrapping", desc: "Full body color changes, satin finishes, and roof blackouts." },
              { name: "Ceramic Coating", link: "/services/ceramic-coating", desc: "9H hard hydrophobic layers for mirror-like gloss and easy cleaning." },
              { name: "Tint Removal", link: "/services/tint-removal", desc: "Clean bubble or purple tint extraction without glass damage." },
              { name: "Custom Logos & Decals", link: "/services/custom-logos-decals", desc: "Fleet branding, track numbers, and precision die-cut graphics." }
            ].map((srv, idx) => (
              <Link
                key={idx}
                href={srv.link}
                className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition-all group block shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{srv.name}</h3>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{srv.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Divider />
      {/* Call to Action Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to elevate your car's look in South East Melbourne?</h3>
            <p className="text-zinc-400 text-sm">Visit our Endeavour Hills studio or request a fast online quote today.</p>
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