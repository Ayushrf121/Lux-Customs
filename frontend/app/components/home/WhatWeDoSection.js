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

        {/* Bento Grid Layout (Bigger top 2 cards, 3 smaller cards on the bottom row) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {servicesData.map((service, index) => {
            const isTopRow = index < 2;
            const colSpanClass = isTopRow ? "lg:col-span-6" : "lg:col-span-4";

            return (
              <Link
                key={service.id}
                href="/contact"
                className={`group relative bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FBBF24] hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] ${colSpanClass} aspect-[4/3] sm:aspect-[16/10]`}
              >
                {/* Background Image with Zoom & Brightened Opacity */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
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

                {/* Bottom Content: Title, Description & Price (Completely borderless text/tag) */}
                <div className="relative z-10 space-y-3 pt-12">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#FBBF24] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block text-[#FBBF24] text-xs font-bold tracking-wider">
                      {service.price}
                    </span>
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