"use client";

import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import reviewsData from '../data/reviews.json';

export default function GoogleReviewsSection() {
  return (
    <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Grid: Title and Overall Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
          
          {/* Left: Titles */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase">
              <span className="w-8 h-[1px] bg-[#FBBF24]" />
              <span>Google Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Trusted by drivers across <span className="text-[#FBBF24]">the south-east.</span>
            </h2>
          </div>

          {/* Right: Overall Rating Score Box */}
          <div className="flex items-center space-x-4 bg-zinc-900/60 border border-zinc-800 px-6 py-4 rounded-2xl">
            {/* Proper Google SVG Icon Badge */}
            <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.76-2.11-6.7-4.96H1.24v3.14C3.21 21.28 7.28 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.3 14.24c-.24-.72-.37-1.49-.37-2.24s.13-1.52.37-2.24V6.62H1.24C.45 8.21 0 10.02 0 12s.45 3.79 1.24 5.38l4.06-3.14z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.28 0 3.21 2.72 1.24 6.62l4.06 3.14c.94-2.85 3.58-4.96 6.7-4.96z"
                />
              </svg>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-black text-white tracking-tight">5.0</span>
                <div className="flex items-center space-x-1 text-[#FBBF24]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-400">Based on Google Business reviews</p>
            </div>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FBBF24] hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] space-y-6"
            >
              <div className="space-y-4">
                {/* Top Row: Stars & Google Icon Watermark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#FBBF24]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  
                  {/* Google Mini Icon Watermark */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-70" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.76-2.11-6.7-4.96H1.24v3.14C3.21 21.28 7.28 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.3 14.24c-.24-.72-.37-1.49-.37-2.24s.13-1.52.37-2.24V6.62H1.24C.45 8.21 0 10.02 0 12s.45 3.79 1.24 5.38l4.06-3.14z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.28 0 3.21 2.72 1.24 6.62l4.06 3.14c.94-2.85 3.58-4.96 6.7-4.96z"
                    />
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
                  "{item.review}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-3 pt-4 border-t border-zinc-800/80">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-inner`}>
                  {item.initial}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center space-x-1">
                    <h4 className="text-white font-bold text-sm truncate">{item.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  </div>
                  <p className="text-zinc-500 text-xs">{item.time}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}