"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Facebook } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 relative overflow-hidden border-t border-zinc-900">
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          
          {/* Column 1: Logo & Company Bio (Span 4) */}
          <motion.div variants={fadeInFromBottom} custom={0} className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16 overflow-hidden">
                <Image 
                  src="/Requirements/logo.webp" 
                  alt="Auto TintGard Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-white font-black text-xl tracking-wider">AUTO TINTGARD</span>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold">Window Tint At Its Finest</p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed pr-4">
              Premium car tinting with 19+ years of trusted vehicle protection experience in Melbourne. Quality films, flawless finish, and guaranteed satisfaction.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.facebook.com/autotintgard1973" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm"
                aria-label="Facebook"
              >
                {/* Facebook Brand SVG */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://maps.app.goo.gl/ii1NzTkH8sw1PxcCA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm"
                aria-label="Google Business"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Business Info & Contact (Span 4) */}
          <motion.div variants={fadeInFromBottom} custom={0.2} className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-blue-600 pl-3">
              Business & Contact
            </h3>

            <div className="space-y-3 text-sm pt-2">
              <div className="space-y-1">
                <p className="font-semibold text-white">Auto TintGard</p>
                <div className="flex flex-col space-y-1 text-xs text-zinc-400 pt-1">
                  <a href="tel:1300922204" className="hover:text-blue-400 transition-colors">1300 922 204</a>
                  <a href="tel:0383609723" className="hover:text-blue-400 transition-colors">03 8360 9723</a>
                  <a href="tel:0483955426" className="text-blue-400 font-semibold hover:underline">0483 955 426</a>
                </div>
              </div>

              <div className="pt-2">
                <a href="mailto:sales@autotintgard.com.au" className="hover:text-blue-400 transition-colors text-xs block">
                  sales@autotintgard.com.au
                </a>
                <p className="text-xs text-zinc-400 mt-1">
                  Unit 4/7 Industrial Avenue, Hoppers Crossing, Victoria 3029
                </p>
              </div>

              {/* Hours of Operation */}
              <div className="pt-3 border-t border-zinc-900">
                <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Hours of Operation</p>
                <p className="text-xs text-zinc-400">Monday–Friday: 8:30 am–4:00 pm</p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Services Links (Span 2) */}
          <motion.div variants={fadeInFromBottom} custom={0.4} className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-blue-600 pl-3">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm pt-2">
              {[
                { name: "Car Tinting", href: "/services/car-tinting" },
                { name: "Ceramic Paint Protection", href: "/services/ceramic-paint-protection" },
                { name: "Graphene Coating", href: "/services/graphene-coating" },
                { name: "Dash Cam", href: "/services/dash-cam" },
                { name: "Old Tint Removal", href: "/services/old-tint-removal" }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-zinc-400 hover:text-white transition-colors text-xs flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Service Areas (Span 2) */}
          <motion.div variants={fadeInFromBottom} custom={0.6} className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-blue-600 pl-3">
              Service Areas
            </h3>
            <ul className="space-y-2.5 text-xs pt-2 text-zinc-400">
              <li className="hover:text-white transition-colors">Werribee</li>
              <li className="hover:text-white transition-colors">Wyndham Vale</li>
              <li className="hover:text-white transition-colors">Tarneit</li>
              <li className="hover:text-white transition-colors">Truganina</li>
              <li className="hover:text-white transition-colors">Point Cook</li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {currentYear} Auto TintGard. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}