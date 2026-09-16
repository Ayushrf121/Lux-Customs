"use client";

import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Consult & Inspect",
      description: "We walk around the car with you, measure paint depth and film condition, and quote honestly — no surprises."
    },
    {
      number: "02",
      title: "Prep & Protect",
      description: "Wash, decontaminate and mask. Interiors, trims and electronics are protected before a single tool touches the car."
    },
    {
      number: "03",
      title: "The Craft",
      description: "Tint cut and shrunk, paint corrected, coating laid down — by hand, under studio lighting, without rushing the clock."
    },
    {
      number: "04",
      title: "Inspect & Handover",
      description: "A final LED-lit inspection with you present, aftercare notes included, and warranty registered on the spot."
    }
  ];

  return (
    <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-white selection:bg-[#FBBF24] selection:text-zinc-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          {/* Tagline */}
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FBBF24] uppercase">
            <span className="w-8 h-[1px] bg-[#FBBF24]" />
            <span>How It Works</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Four steps. <span className="text-[#FBBF24]">Zero shortcuts.</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-[#FBBF24] hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Step Number with Yellow Accent */}
                <span className="text-3xl font-black text-[#FBBF24] tracking-tight block">
                  {step.number}
                </span>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}