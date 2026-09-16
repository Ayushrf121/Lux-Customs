"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position to toggle translucent background after scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock background scroll when the full-screen mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    return (
        <header 
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50 shadow-lg' 
                    : 'bg-zinc-950 border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* 1. Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                src="/Requirements/navLogo.png"
                                alt="Lux Customs Logo"
                                width={130}
                                height={120}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* 2. Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-zinc-300 hover:text-[#FBBF24] font-medium transition-colors">
                            Home
                        </Link>

                        <Link href="/services" className="text-zinc-300 hover:text-[#FBBF24] font-medium transition-colors">
                            Services
                        </Link>

                        <Link href="/about" className="text-zinc-300 hover:text-[#FBBF24] font-medium transition-colors">
                            About Us
                        </Link>

                        <Link href="/gallery" className="text-zinc-300 hover:text-[#FBBF24] font-medium transition-colors">
                            Gallery
                        </Link>
                    </nav>

                    {/* 3. Right Side Buttons (Phone & Book Now) */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <a
                            href="tel:0468317131"
                            className="flex items-center space-x-2 text-zinc-300 hover:text-[#FBBF24] font-semibold transition-colors"
                        >
                            <Phone className="w-4 h-4 text-[#FBBF24]" />
                            <span>0468 317 131</span>
                        </a>

                        <Link
                            href="/contact"
                            className="bg-[#FBBF24] text-zinc-950 px-6 py-2.5 rounded-full font-bold hover:bg-[#f5b316] transition-all shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:shadow-[0_0_25px_rgba(251,191,36,0.7)]"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-zinc-300 hover:text-white p-2 relative z-[60]"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Full-Screen Menu */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-x-0 top-[4rem] bottom-0 h-[calc(100vh-5rem)] h-[calc(100dvh-5rem)] bg-zinc-900/95 backdrop-blur-xl z-40 overflow-y-auto px-4 pt-4 pb-6 space-y-4"
                >
                    <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-zinc-300 hover:text-[#FBBF24] font-medium"
                    >
                        Home
                    </Link>

                    <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-zinc-300 hover:text-[#FBBF24] font-medium border-t border-zinc-800 pt-3"
                    >
                        Services
                    </Link>

                    <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-zinc-300 hover:text-[#FBBF24] font-medium border-t border-zinc-800 pt-3"
                    >
                        About Us
                    </Link>

                    <Link
                        href="/gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-zinc-300 hover:text-[#FBBF24] font-medium border-t border-zinc-800 pt-3"
                    >
                        Gallery
                    </Link>

                    <div className="pt-4 flex flex-col space-y-3 border-t border-zinc-800">
                        <a
                            href="tel:0468317131"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center space-x-2 bg-zinc-800/80 text-white py-2.5 rounded-md font-semibold"
                        >
                            <Phone className="w-4 h-4 text-[#FBBF24]" />
                            <span>0468 317 131</span>
                        </a>
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-center bg-[#FBBF24] text-zinc-950 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}