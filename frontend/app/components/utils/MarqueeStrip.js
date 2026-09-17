"use client";

import React from 'react';

export default function MarqueeStrip() {
  const items = [
    "PAINT CORRECTION",
    "ENDEAVOUR HILLS",
    "TINT REMOVAL",
    "WINDOW TINTING",
    "CERAMIC COATING"
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes smoothMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-smooth-marquee {
          display: flex;
          width: max-content;
          animation: smoothMarquee 25s linear infinite;
        }
        .animate-smooth-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative w-full bg-zinc-950 border-y border-zinc-800/80 overflow-hidden py-6 select-none">
        {/* Outer scrolling container */}
        <div className="flex overflow-hidden">
          
          <div className="animate-smooth-marquee flex items-center">
            {/* First track */}
            <div className="flex items-center shrink-0">
              {items.map((item, index) => (
                <div key={`item-1-${index}`} className="flex items-center">
                  <span className="text-zinc-300 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase whitespace-nowrap">
                    {item}
                  </span>
                  <span className="w-2 h-2 rotate-45 bg-[#FBBF24] inline-block shrink-0 mx-6 sm:mx-8" />
                </div>
              ))}
            </div>

            {/* Exact Duplicate track for seamless infinite looping */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {items.map((item, index) => (
                <div key={`item-2-${index}`} className="flex items-center">
                  <span className="text-zinc-300 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase whitespace-nowrap">
                    {item}
                  </span>
                  <span className="w-2 h-2 rotate-45 bg-[#FBBF24] inline-block shrink-0 mx-6 sm:mx-8" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}