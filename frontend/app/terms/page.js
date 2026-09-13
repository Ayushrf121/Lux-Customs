"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import termsData from '../components/data/termsData.json';
import { fadeInFromBottom, staggerContainer } from '../components/utils/animation';

export default function TermsAndConditions() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen py-24 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInFromBottom} 
            custom={0}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Legal Agreement</span>
          </motion.div>

          {/* Main Headline with Blue Gradient Effect */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Terms & <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Conditions</span>
          </motion.h1>
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.3}
            className="text-zinc-400 text-sm sm:text-base"
          >
            Please read these terms and conditions carefully before using our website or booking our services with {termsData.businessName}[cite: 2].
          </motion.p>
        </motion.div>

        {/* Full-Width Content Container */}
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl space-y-12">
          
          <p className="text-sm text-zinc-300 leading-relaxed">
            Welcome to <strong className="text-white">{termsData.businessName}</strong>[cite: 2]. These Terms and Conditions govern your use of our website, enquiries, bookings, quotations, services, and any related dealings with us[cite: 2]. By using our website, requesting a quote, booking a service, or engaging {termsData.businessName}, you agree to these Terms and Conditions[cite: 2]. If you do not agree, please do not use our website or services[cite: 2].
          </p>

          {/* Dynamically Render All Sections */}
          {termsData.sections.map((section) => (
            <div key={section.id} id={section.id} className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-3">
                {section.title}[cite: 2]
              </h2>
              
              {/* Special styling injection for Section 1 (Business Info box) */}
              {section.id === 'business-info' ? (
                <>
                  <p className="text-sm leading-relaxed">{section.content}[cite: 2]</p>
                  <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 text-sm space-y-1">
                    <p className="text-white font-semibold">{termsData.businessName}[cite: 2]</p>
                    <p>{termsData.location.unit}, {termsData.location.suburb}[cite: 2]</p>
                    <p>{termsData.location.state} {termsData.location.postcode}[cite: 2]</p>
                    <p>Website: <a href={`https://${termsData.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{termsData.contact.website}[cite: 2]</a></p>
                    <p>Phone: <a href={`tel:${termsData.contact.phone.replace(/\s+/g, '')}`} className="text-blue-400 underline">{termsData.contact.phone}[cite: 2]</a></p>
                    <p>Email: <a href={`mailto:${termsData.contact.email}`} className="text-blue-400 underline">{termsData.contact.email}[cite: 2]</a></p>
                  </div>
                </>
              ) : (
                <p className="text-sm leading-relaxed">{section.content}[cite: 2]</p>
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}