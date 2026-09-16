"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ManifestoTeaserSection() {
  return (
    <section className="relative bg-zinc-950 py-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden border-t border-zinc-900 selection:bg-[#FBBF24] selection:text-zinc-950">
      
      {/* Background Subtle Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FBBF24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Top Section Tag */}
        <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase">
          <span className="w-8 h-[1px] bg-[#FBBF24]" />
          <span>The Manifesto</span>
        </div>

        {/* Core Statement Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2]">
          We started with a simple frustration — watching cars come back from 'premium' shops with crooked edges and buffer trails. We built a studio where the work is <span className="text-[#FBBF24]">slow on purpose</span>, measured twice, and inspected three times.
        </h2>

        {/* Read Our Story Link Pointing to /about */}
        <div className="pt-4">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-[#FBBF24] font-bold text-sm sm:text-base tracking-wider uppercase hover:underline group"
          >
            <span>Read our story</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}