"use client";

import React from 'react';
import manifestoData from '../data/manifesto.json';

export default function ManifestoSection() {
  return (
    <section className="bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto divide-y divide-zinc-900">
        {manifestoData.map((item) => (
          <div 
            key={item.id} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 lg:py-16 items-center first:pt-0 last:pb-0"
          >
            {/* Left Column: Big Number */}
            <div className="lg:col-span-4">
              <span className="text-5xl sm:text-6xl font-black text-[#FBBF24] tracking-tight block">
                {item.id}
              </span>
            </div>

            {/* Right Column: Description Text */}
            <div className="lg:col-span-8">
              <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}