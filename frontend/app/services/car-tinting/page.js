"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import carTintingData from '../../components/data/carTinting.json';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function CarTintingPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative h-[0vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/TintPage/Tint-bg.webp" 
            alt="Car Tinting Experts Melbourne" 
            fill
            priority
            className="object-cover object-center filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <motion.div 
            className="max-w-3xl space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInFromBottom} 
              custom={0}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Car Tinting Experts
            </motion.h1>

            <motion.p 
              variants={fadeInFromBottom} 
              custom={0.2}
              className="text-lg sm:text-xl text-zinc-300 font-medium"
            >
              Premium vehicle window tinting backed by 19+ years of experience.
            </motion.p>

            <motion.div 
              variants={fadeInFromBottom} 
              custom={0.4}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center space-x-2"
              >
                <span>Get Free Quote</span>
              </Link>

              <a 
                href="tel:0483955426"
                className="bg-white text-zinc-900 hover:bg-zinc-100 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>0483 955 426</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Divider/>
      {/* 2. Sub-Sections Rendered from JSON */}
      <section className="py-24 space-y-28 relative overflow-hidden">
        {/* Background Glow Accents */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
          {carTintingData.map((item, index) => {
            const isImageLeft = item.imagePosition === 'left';

            return (
              <motion.div 
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isImageLeft ? 'lg:grid-flow-dense' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {/* Text Content Column */}
                <motion.div 
                  variants={fadeInFromBottom} 
                  custom={0.1}
                  className={`lg:col-span-7 space-y-6 ${isImageLeft ? 'lg:col-start-6' : ''}`}
                >
                  {/* Glowing Tag */}
                  <div className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-3.5 py-1 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.tag}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h2>

                  <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                    <p>{item.description1}</p>
                    <p>{item.description2}</p>
                  </div>

                  <div className="pt-4">
                    <Link 
                      href={item.ctaLink}
                      className="group inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div 
                  variants={fadeInFromBottom} 
                  custom={0.3}
                  className={`lg:col-span-5 ${isImageLeft ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl group h-80 sm:h-96">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}