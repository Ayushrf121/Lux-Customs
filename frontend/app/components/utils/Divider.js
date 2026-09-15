"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <div className="w-full flex items-center justify-center py-12 bg-zinc-950 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md h-[2px]"
      >
        {/* Glowing Golden Gradient Line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BCAA8B] to-transparent shadow-[0_0_15px_rgba(188,170,139,0.6)]" />
        
        {/* Core Bright Golden Point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#d4c5a9] shadow-[0_0_10px_#BCAA8B] animate-pulse" />
      </motion.div>
    </div>
  );
}