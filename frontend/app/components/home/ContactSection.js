"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Sparkles, CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { fadeInFromBottom, staggerContainer } from '../utils/animation';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const response = await axios.post('/api/contact', data);
      if (response.data.success) {
        setStatusMessage({
          type: 'success',
          text: response.data.message || 'Message sent successfully! We will be in touch shortly.',
        });
        reset(); // Clear form fields
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Network error. Please check your connection or call us directly.';
      setStatusMessage({ type: 'error', text: errorMsg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2 
            variants={fadeInFromBottom} 
            custom={0.2}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Request A Free Quote
          </motion.h2>
        </motion.div>

        {/* Main Split Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl">
          
          {/* Left Column: Contact Details & Google Map */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Auto TintGard Details</h3>
              
              <div className="space-y-4">
                <a href="tel:0483955426" className="flex items-center space-x-4 text-zinc-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Call Us</p>
                    <p className="font-semibold text-white">0483 955 426</p>
                  </div>
                </a>

                <a href="mailto:sales@autotintgard.com.au" className="flex items-center space-x-4 text-zinc-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Email Us</p>
                    <p className="font-semibold text-white">sales@autotintgard.com.au</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-white">Unit 4/7 Industrial Avenue, Hoppers Crossing, Victoria 3029</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embedded Widget */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-lg h-72 w-full relative">
              <iframe
                title="Auto TintGard Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.7255!3d-37.8423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6876c2b1d3d0f%3A0x5045ef752ea0!2s7%20Industrial%20Ave%2C%20Hoppers%20Crossing%20VIC%203029!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: React Hook Form */}
          <motion.div 
            className="lg:col-span-7 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-8 sm:p-10 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            {/* Success Banner Notice */}
            {statusMessage.type === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start space-x-3 text-sm"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{statusMessage.text}</span>
              </motion.div>
            )}

            {/* Error Banner Notice */}
            {statusMessage.type === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-start space-x-3 text-sm"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{statusMessage.text}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text"
                  placeholder="John Smith"
                  {...register("fullName", { required: "Full name is required" })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {errors.fullName && <p className="text-rose-500 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Phone *
                </label>
                <input 
                  type="tel"
                  placeholder="04xx xxx xxx"
                  {...register("phone", { required: "Phone number is required" })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Short message about your needs *
                </label>
                <textarea 
                  rows={4}
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* Terms Checkbox */}
              <div>
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox"
                    id="terms"
                    {...register("terms", { required: "You must agree to the terms and conditions" })}
                    className="mt-1 w-4 h-4 rounded bg-zinc-900 border-zinc-700 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs text-zinc-400 leading-relaxed cursor-pointer">
                    I agree to <span className="text-blue-400 underline">terms & conditions</span> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                  </label>
                </div>
                {errors.terms && <p className="text-rose-500 text-xs mt-1">{errors.terms.message}</p>}
              </div>

              {/* Submit Button with Loading Spinner */}
              <button 
                type="submit"
                disabled={submitting}
                className="w-full group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 disabled:opacity-75 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.01] cursor-pointer disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="inline-flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>SENDING MESSAGE...</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-2">
                    <span>SEND</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}