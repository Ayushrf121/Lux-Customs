"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import servicesData from '../data/services.json';

export default function ServicesSection() {
  const services = servicesData;

  return (
    <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto space-y-28">
        {services.map((service, index) => {
          // Alternating layout: even items have image on left, odd on right
          const isEven = index % 2 === 0;

          return (
            <div 
              key={service.id} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image Block */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 aspect-[16/11] shadow-2xl">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  )}
                  {/* Subtle Image Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />

                </div>
              </div>

              {/* Content Block */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                
                {/* Number & Badge */}
                <div className="space-y-2">
                  <span className="text-5xl sm:text-6xl font-black text-[#FBBF24] tracking-tight block">
                    {service.id}
                  </span>
                  <span className="text-[#FBBF24] text-xs font-extrabold tracking-[0.25em] uppercase block pt-1">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {service.features && service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3 text-sm text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FBBF24] flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button matching the site's primary style */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full border border-[#FBBF24] text-[#FBBF24] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#FBBF24] hover:text-zinc-950 shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] group"
                  >
                    <span>Get a Quote</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}