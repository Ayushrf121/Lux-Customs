"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import privacyData from '../components/data/privacyData.json';
import { fadeInFromBottom, staggerContainer } from '../components/utils/animation';

export default function PrivacyPolicy() {
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
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            <span>Data Protection</span>
          </motion.div>

          {/* Main Headline with Blue Gradient Effect */}
          <motion.h1 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Privacy <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Policy</span>
          </motion.h1>
          <motion.p 
            variants={fadeInFromBottom} 
            custom={0.3}
            className="text-zinc-400 text-sm sm:text-base"
          >
            Learn how {privacyData.businessName} collects, uses, and safeguards your personal information[cite: 1].
          </motion.p>
        </motion.div>

        {/* Full-Width Content Container */}
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl space-y-12">
          
          <p className="text-sm text-zinc-300 leading-relaxed">
            Welcome to <strong className="text-white">{privacyData.businessName}</strong>[cite: 1]. We are committed to protecting your personal information and your right to privacy[cite: 1]. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us[cite: 1].
          </p>

          {/* Dynamically Render All Sections */}
          {privacyData.sections.map((section) => (
            <div key={section.id} id={section.id} className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-3">
                {section.title}[cite: 1]
              </h2>
              
              {/* Special styling injection for the Contact Us section */}
              {section.id === 'contact-us' ? (
                <>
                  <p className="text-sm leading-relaxed">{section.content}[cite: 1]</p>
                  <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 text-sm space-y-1 mt-4">
                    <p className="text-white font-semibold">{privacyData.businessName}[cite: 1]</p>
                    <p>{privacyData.location.unit}, {privacyData.location.suburb}[cite: 1]</p>
                    <p>{privacyData.location.state} {privacyData.location.postcode}[cite: 1]</p>
                    <p>Website: <a href={`https://${privacyData.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{privacyData.contact.website}[cite: 1]</a></p>
                    <p>Phone: <a href={`tel:${privacyData.contact.phone.replace(/\s+/g, '')}`} className="text-blue-400 underline">{privacyData.contact.phone}[cite: 1]</a></p>
                    <p>Email: <a href={`mailto:${privacyData.contact.email}`} className="text-blue-400 underline">{privacyData.contact.email}[cite: 1]</a></p>
                  </div>
                </>
              ) : (
                <p className="text-sm leading-relaxed">{section.content}[cite: 1]</p>
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}