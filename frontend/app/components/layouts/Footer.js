"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
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
              <div className="relative w-28 h-28 overflow-hidden">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/Requirements/logo (3).png"
                    alt="Lux Customs Logo"
                    width={180}
                    height={170}
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
              <div>
                <span className="text-white font-black text-xl tracking-wider">LUX CUSTOMS</span>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold">Vehicle Styling At Its Finest</p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed pr-4">
              Premium vehicle customization with trusted protection experience in Melbourne. Window tinting, wrapping, protection films, and flawless finishes with guaranteed satisfaction.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61593129088390&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm"
                aria-label="Facebook"
              >
                {/* Facebook Brand SVG */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/luxcustoms.au/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-sm"
                aria-label="Instagram"
              >
                {/* Instagram Brand SVG */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/YV5eyrEK1ZpF8dNM7"
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
                <p className="font-semibold text-white">Lux Customs</p>
                <div className="flex flex-col space-y-1 text-xs text-zinc-400 pt-1">
                  <a href="tel:0468317131" className="text-blue-400 font-semibold hover:underline">0468 317 131</a>
                </div>
              </div>

              <div className="pt-2">
                <a href="mailto:sales@luxcustoms.com.au" className="hover:text-blue-400 transition-colors text-xs block">
                  sales@luxcustoms.com.au
                </a>
                <p className="text-xs text-zinc-400 mt-1">
                  85 Kennington Park Dr, Endeavour Hills VIC 3802, Australia
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
                { name: "Window Tinting", href: "/services/window-tinting" },
                { name: "Tint Removal", href: "/services/tint-removal" },
                { name: "Ceramic Coating", href: "/services/ceramic-coating" },
                { name: "Paint Protection Film (PPF)", href: "/services/paint-protection-film" },
                { name: "Vinyl Wrapping", href: "/services/vinyl-wrapping" },
                { name: "Custom Logos & Decals", href: "/services/custom-logos-decals" }
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
            <ul className="space-y-2.5 text-xs pt-2">
              {[
                { name: "Werribee", href: "/areas/werribee" },
                { name: "Wyndham Vale", href: "/areas/wyndham-vale" },
                { name: "Tarneit", href: "/areas/tarneit" },
                { name: "Truganina", href: "/areas/truganina" },
                { name: "Point Cook", href: "/areas/point-cook" }
              ].map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {currentYear} Lux Customs. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="/privacy" className="hover:text-zinc-400 cursor-pointer">Privacy Policy</a>
            <a href="/terms" className="hover:text-zinc-400 cursor-pointer">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}