"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhoneCall, FiArrowUpRight, FiCpu, FiGlobe } from "react-icons/fi";

const Banner2 = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-12 lg:px-16 lg:py-32">
      {/* Geospatial Map Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-lighten">
        <Image
          src="/images/bg/geospatial-globe.jpg"
          alt="Geospatial Map Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Tech Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-1">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Cyberpunk/Futuristic Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-red-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-rose-500/10 blur-[130px] pointer-events-none" />

      {/* Futuristic scanning line animation */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />

      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-8">
        
        {/* Animated Tech Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-red-500/30 bg-red-950/40 px-4.5 py-1.5 text-xs font-semibold tracking-widest text-red-400 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span>CONNECTING DATA, AI & CLOUD SYSTEMS</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-montserrat text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight"
        >
          Building the Future,{" "}
          <span className="block mt-2 bg-gradient-to-r from-red-500 via-red-400 to-rose-400 bg-clip-text text-transparent drop-shadow-md">
            One Innovation at a Time
          </span>
        </motion.h2>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-300 leading-relaxed font-medium"
        >
          We empower businesses through cutting-edge technology, human-centered
          design, and a relentless focus on solving real-world problems.
        </motion.p>

        {/* Floating tech icons grid overlaying the background subtly */}
        <div className="flex justify-center gap-12 text-gray-600/40 py-4">
          <FiCpu className="h-8 w-8 animate-pulse" />
          <FiGlobe className="h-8 w-8 animate-pulse [animation-delay:0.5s]" />
        </div>

        {/* Futuristic CTA Button with micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center pt-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-red-600 px-8 py-4 font-bold text-white shadow-xl shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-red-600/30 hover:scale-[1.02]"
          >
            {/* Glossy sheen effect on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <FiPhoneCall className="h-4.5 w-4.5 animate-bounce" />
            <span>Call Us Now</span>
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner2;
