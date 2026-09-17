"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import servicesData from '../data/servicesGrid.json';

export default function WhatWeDoSection() {
  return (
    <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase">
            <span className="w-8 h-[1px] bg-[#FBBF24]" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Five crafts. One standard: <span className="text-[#FBBF24]">flawless.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const isTopRow = index < 2;
            
            // Top row takes 6/12 (half) width, Bottom row takes 4/12 (third) width on desktop
            const colSpanClass = isTopRow ? "lg:col-span-6" : "lg:col-span-4";
            
            // Top row is wider (16:10), Bottom row is squarer (4:3) on desktop. Mobile remains identical.
            const aspectClass = isTopRow 
              ? "aspect-[4/3] sm:aspect-[16/10]" 
              : "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/4] xl:aspect-[4/3]";

            return (
              <Link
                key={service.id}
                href="/contact"
                className={`group relative bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col transition-all duration-300 hover:border-[#FBBF24] hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] ${colSpanClass} ${aspectClass}`}
              >
                {/* Background Image with Zoom & Brightened Opacity */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
                </div>

                {/* Top Row: Number ID & Arrow Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#FBBF24] tracking-widest">
                    {service.id}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700/50 flex items-center justify-center text-zinc-300 group-hover:bg-[#FBBF24] group-hover:text-zinc-950 group-hover:border-[#FBBF24] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content: Title, Description & Logo */}
                {/* mt-auto forces this block to perfectly anchor to the bottom */}
                <div className="relative z-10 space-y-3 mt-auto pt-8">
                  <h3 className={`font-extrabold text-white tracking-tight group-hover:text-[#FBBF24] transition-colors ${isTopRow ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Replaced Price with Static Logo */}
                  <div className="pt-2">
                    <Image
                      src="/Requirements/navLogo.png"
                      alt="Lux Customs Logo"
                      width={isTopRow ? 90 : 75} 
                      height={isTopRow ? 36 : 30}
                      className="object-contain opacity-90"
                    />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}