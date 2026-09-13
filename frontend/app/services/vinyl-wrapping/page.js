"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Shield, Car, CheckCircle2, ArrowRight, Layers, Award, Clock } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../../components/utils/animation';
import Divider from '@/app/components/utils/Divider';

export default function VinylWrappingService() {
    return (
        <div className="bg-zinc-950 text-zinc-300 min-h-screen relative overflow-hidden">

            {/* Background Accent Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Centered Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
                <motion.div
                    className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div
                        variants={fadeInFromBottom}
                        custom={0}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-blue-500/20"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                        <span>Complete Aesthetic Transformation</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInFromBottom}
                        custom={0.2}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
                    >
                        Professional <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Vinyl Wrapping</span> Services
                    </motion.h1>

                    <motion.p
                        variants={fadeInFromBottom}
                        custom={0.4}
                        className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto"
                    >
                        Redefine your vehicle’s road presence with premium cast vinyl films. From striking color changes and satin textures to custom commercial accents, our master installers deliver flawless, paint-like finishes.
                    </motion.p>
                </motion.div>
            </section>
            <Divider />
            {/* Tree Structure / Service Options Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Explore Our <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Wrapping Hierarchy</span>
                    </motion.h2>
                    <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
                        Navigate through our specialized customization pathways tailored to your aesthetic goals.
                    </motion.p>
                </motion.div>

                {/* Tree Structure Container */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {[
                        {
                            category: "01. Full Body Color Change Wraps",
                            desc: "Complete vehicle makeovers utilizing premier cast colored films. Encapsulates every visible inch of paint for an authentic factory-sprayed look.",
                            items: [
                                "Gloss, Satin & Matte Solid Color Series",
                                "Color-Shifting Metallic & Iridescent Finishes",
                                "Textured Carbon Fiber & Brushed Metal Series"
                            ]
                        },
                        {
                            category: "02. Partial Styling & Accent Wraps",
                            desc: "Targeted customization branches designed to highlight dynamic body lines and aggressive styling notes without a full wrap.",
                            items: [
                                "Roof & Bonnet Gloss Blackouts",
                                "Chrome Delete (Window Trims, Grilles & Badges)",
                                "Custom Racing Stripes & Lower Decal Overlays"
                            ]
                        }
                    ].map((branch, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInFromBottom}
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 space-y-6 relative shadow-xl hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold group-hover:scale-110 transition-transform">
                                    <Palette className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{branch.category}</h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">{branch.desc}</p>

                            {/* Tree Child Nodes */}
                            <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                                {branch.items.map((subItem, sIdx) => (
                                    <div key={sIdx} className="flex items-center space-x-3 text-sm text-zinc-300">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 animate-pulse" />
                                        <span>{subItem}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
            <Divider />
            {/* Professional Standards Section (Added for length & depth) */}
            <section className="py-24 bg-zinc-900/30 border-y border-zinc-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Our Certified <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Application Standards</span>
                        </motion.h2>
                        <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
                            A rigorous multi-phase workflow ensuring absolute structural longevity and clean paint safety.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            {
                                step: "01",
                                title: "Deep Decontamination Wash",
                                desc: "We perform a chemical strip wash, clay bar treatment, and specialized solvent wipe-down to eradicate oils, wax, and road tar."
                            },
                            {
                                step: "02",
                                title: "Component Disassembly",
                                desc: "Door handles, mirrors, bumpers, and tail lights are safely removed to allow deep wrapping past panel edges, avoiding unsightly cut lines."
                            },
                            {
                                step: "03",
                                title: "Post-Heating & Curing",
                                desc: "Every inch of installed film is thermally post-heated to memory-set the vinyl, preventing edge lifting under severe weather stress."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInFromBottom}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 space-y-4 hover:border-blue-500/50 transition-colors shadow-lg group"
                            >
                                <span className="text-blue-500 font-black text-3xl group-hover:scale-110 inline-block transition-transform">{item.step}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Divider />
            {/* Why Choose Our Wraps */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInFromBottom} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        The <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Lux Customs</span> Advantage
                    </motion.h2>
                    <motion.p variants={fadeInFromBottom} className="text-zinc-400 text-base">
                        Immaculate tucking, hidden edges, and flawless post-heating standards.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {[
                        {
                            icon: Shield,
                            title: "Paint Preservation",
                            desc: "Acts as a protective barrier against minor road debris, bug acids, and sun fading, keeping your original factory paint immaculate underneath."
                        },
                        {
                            icon: Car,
                            title: "Seamless Edge Tucking",
                            desc: "Panels are wrapped deep inside structural gaps so that original paint remains completely hidden even when doors or boots are open."
                        },
                        {
                            icon: Award,
                            title: "Reversible Style",
                            desc: "Want to sell your car or change colors again? The film can be cleanly peeled off anytime without altering or damaging underlying clear coats."
                        }
                    ].map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={fadeInFromBottom}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-colors shadow-xl group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>
            <Divider />
            {/* Call to Action Banner */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8"
                >
                    <div className="space-y-2 text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to completely transform your vehicle?</h3>
                        <p className="text-zinc-400 text-sm">Contact our wrapper specialists today to discuss color swatches and pricing.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105 flex-shrink-0"
                    >
                        <span>Get Free Quote Now</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </section>

        </div>
    );
}