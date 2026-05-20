"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiCpu } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-8 lg:py-24 xl:py-28 2xl:px-0 bg-white dark:bg-black">
      {/* Background Tech Details */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-red-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-red-500/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-c-1390 rounded-3xl border border-gray-800 bg-slate-950 py-16 md:py-24 lg:py-32 px-8 md:px-12 lg:px-16 shadow-2xl relative overflow-hidden text-white">
        
        {/* Background Image with Vintage Black Overlay */}
        <div className="absolute inset-0 z-0 opacity-75">
          <Image
            src="/images/about/team-group.jpg"
            alt="BigData Ghana Team"
            fill
            className="object-cover object-center filter grayscale contrast-110 brightness-75"
            priority
          />
        </div>
        
        {/* Vintage Black Overlay Gradient - Reduced opacity to let image be seen */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30 z-0" />
        
        {/* Border accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-red-600 to-rose-700 z-10" />

        <div className="flex flex-col items-center text-center justify-center relative z-10 max-w-3xl mx-auto space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-red-950/60 px-3.5 py-1 text-xs font-bold text-red-400 border border-red-900/30 backdrop-blur-sm"
          >
            <FiCpu className="h-3.5 w-3.5" />
            <span>INNOVATION & TECHNOLOGY FOR DEVELOPMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight"
          >
            Partner with Africa's <span className="text-red-500">Data & AI</span> Pioneers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl drop-shadow-sm font-medium"
          >
            Whether you need high-precision geospatial modeling, cloud systems integration, or custom web and mobile development, our team of dedicated engineers will co-design and scale your solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-red-600/30"
            >
              Schedule Technical Consult
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-slate-900/60 px-6 py-3.5 text-sm font-bold text-gray-300 shadow-sm transition-all hover:bg-slate-800 hover:text-white backdrop-blur-sm"
            >
              Explore Projects
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
