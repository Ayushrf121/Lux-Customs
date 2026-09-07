"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [areasOpen, setAreasOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* 1. Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/Requirements/logo.webp"
                                alt="Auto TintGard Logo"
                                width={70}
                                height={60}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* 2. Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-zinc-300 hover:text-blue-500 font-medium transition-colors"
                        >
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button className="flex items-center text-zinc-300 hover:text-blue-500 font-medium transition-colors py-2">
                                Services
                                <ChevronDown
                                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-blue-500' : 'rotate-0'
                                        }`}
                                />
                            </button>

                            {servicesOpen && (
                                <div className="absolute top-full left-0 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <Link href="/services/car-tinting" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Car Tinting</Link>
                                    <Link href="/services/ceramic-paint-protection" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Ceramic Paint Protection</Link>
                                    <Link href="/services/graphene-coating" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Graphene Coating</Link>
                                    <Link href="/services/dash-cam" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Dash Cam</Link>
                                    <Link href="/services/old-tint-removal" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Old Tint Removal</Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/gallery"
                            className="text-zinc-300 hover:text-blue-500 font-medium transition-colors"
                        >
                            Gallery
                        </Link>

                        {/* Service Areas Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setAreasOpen(true)}
                            onMouseLeave={() => setAreasOpen(false)}
                        >
                            <button className="flex items-center text-zinc-300 hover:text-blue-500 font-medium transition-colors py-2">
                                Service Areas
                                <ChevronDown
                                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${areasOpen ? 'rotate-180 text-blue-500' : 'rotate-0'
                                        }`}
                                />
                            </button>

                            {areasOpen && (
                                <div className="absolute top-full left-0 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <Link href="/areas/werribee" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Werribee</Link>
                                    <Link href="/areas/wyndham-vale" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Wyndham Vale</Link>
                                    <Link href="/areas/tarneit" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Tarneit</Link>
                                    <Link href="/areas/truganina" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Truganina</Link>
                                    <Link href="/areas/point-cook" className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors">Point Cook</Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/contact"
                            className="text-zinc-300 hover:text-blue-500 font-medium transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* 3. Right Side Buttons (Phone & Quote) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Phone Number CTA Button */}
                        <a
                            href="tel:0483955426"
                            className="flex items-center space-x-2 bg-white text-zinc-950 px-4 py-2.5 rounded-md font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                            <Phone className="w-4 h-4 text-blue-600" />
                            <span>0483 955 426</span>
                        </a>

                        {/* Get Free Quote Button */}
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                        >
                            Get Free Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-zinc-300 hover:text-white p-2"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Slide-down Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-3">
                    <Link href="/" className="block py-2 text-zinc-300 hover:text-blue-500 font-medium">Home</Link>
                    <div className="py-2 text-zinc-300 font-medium border-t border-zinc-800 pt-3">
                        <p className="text-blue-500 mb-1 text-sm uppercase tracking-wider">Services</p>
                        <Link href="/services/car-tinting" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Car Tinting</Link>
                        <Link href="/services/ceramic-paint-protection" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Ceramic Paint Protection</Link>
                        <Link href="/services/graphene-coating" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Graphene Coating</Link>
                        <Link href="/services/dash-cam" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Dash Cam</Link>
                        <Link href="/services/old-tint-removal" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Old Tint Removal</Link>
                    </div>
                    <Link href="/gallery" className="block py-2 text-zinc-300 hover:text-blue-500 font-medium border-t border-zinc-800 pt-3">Gallery</Link>
                    <div className="py-2 text-zinc-300 font-medium border-t border-zinc-800 pt-3">
                        <p className="text-blue-500 mb-1 text-sm uppercase tracking-wider">Service Areas</p>
                        <Link href="/areas/werribee" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Werribee</Link>
                        <Link href="/areas/wyndham-vale" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Wyndham Vale</Link>
                        <Link href="/areas/tarneit" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Tarneit</Link>
                        <Link href="/areas/truganina" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Truganina</Link>
                        <Link href="/areas/point-cook" className="block py-1.5 pl-3 text-sm text-zinc-400 hover:text-white">Point Cook</Link>
                    </div>
                    <Link href="/contact" className="block py-2 text-zinc-300 hover:text-blue-500 font-medium border-t border-zinc-800 pt-3">Contact</Link>

                    <div className="pt-4 flex flex-col space-y-3 border-t border-zinc-800">
                        <a href="tel:0483955426" className="flex items-center justify-center space-x-2 bg-zinc-800 text-white py-2.5 rounded-md font-semibold">
                            <Phone className="w-4 h-4 text-blue-500" />
                            <span>0483 955 426</span>
                        </a>
                        <Link href="/contact" className="text-center bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700">
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}