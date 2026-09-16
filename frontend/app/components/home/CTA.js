"use client";

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Banner Card with Soft Ambient Glow */}
        <div className="relative overflow-hidden bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-16">
          
          {/* Ambient Warm Gradient Glow on the right side */}
          <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#FBBF24]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            
            {/* Tagline */}
            <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase">
              <span>Ready When You Are</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Ready for the LUX treatment?
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Call the studio or send an enquiry — we reply within one business day with an honest quote.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              
              {/* Telephone Button (Solid Yellow) */}
              <a
                href="tel:0468317131"
                className="inline-flex items-center justify-center space-x-2 bg-[#FBBF24] text-zinc-950 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#f5b316] shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>0468 317 131</span>
              </a>

              {/* Send an Enquiry Button (Outline pointing to /contact) */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 text-white font-semibold transition-all duration-300 hover:border-[#FBBF24] hover:text-[#FBBF24] backdrop-blur-md"
              >
                <span>Send an Enquiry</span>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}