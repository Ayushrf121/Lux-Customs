"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import servicesData from '../data/services.json';

export default function ServicesSection() {
  const services = servicesData;

  return (
    <section className="bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto space-y-24">
        {services.map((service, index) => {
          // Alternating layout: even items have image on left, odd on right
          const isEven = index % 2 === 0;

          return (
            <div 
              key={service.id} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image Block */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 aspect-[16/10]">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  )}
                  {/* Price Tag Overlay */}
                  {service.price && (
                    <div className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-[#FBBF24] px-3.5 py-1.5 rounded-md text-xs font-bold tracking-wider">
                      {service.price}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Block */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                
                {/* Number & Badge */}
                <div className="space-y-1">
                  <span className="text-4xl sm:text-5xl font-black text-zinc-700/60 tracking-tight block">
                    {service.id}
                  </span>
                  <span className="text-[#FBBF24] text-xs font-bold tracking-[0.2em] uppercase">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features && service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2.5 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-[#FBBF24] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button with solid yellow fill on hover */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between px-6 py-3 rounded-full border border-[#FBBF24] text-[#FBBF24] font-bold text-sm transition-all duration-300 hover:bg-[#FBBF24] hover:text-zinc-950 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] group"
                  >
                    <span>Get a Quote</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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