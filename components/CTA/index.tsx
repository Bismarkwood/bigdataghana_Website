"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiTerminal, FiDatabase, FiCpu, FiCheck } from "react-icons/fi";

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

      <div className="mx-auto max-w-c-1390 rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 dark:border-gray-850 dark:from-gray-950 dark:via-gray-900/90 dark:to-gray-950 md:p-12 lg:p-16 shadow-xl relative overflow-hidden">
        
        {/* Border accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-red-600 to-rose-700" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1 text-xs font-bold text-red-600 dark:bg-red-950/20 dark:text-red-500"
            >
              <FiCpu className="h-3.5 w-3.5" />
              <span>GEOSPATIAL & CLOUD SOLUTIONS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white sm:text-4xl md:text-5xl leading-tight"
            >
              Scale Your Operations with High-Precision GIS & AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Harness Africa's most advanced remote sensing technologies, optimized database architectures, and instant API-driven SMS communications. Let's engineer custom intelligence for your goals.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
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
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-red-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Explore Projects
              </Link>
            </motion.div>

            {/* Micro Badge Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-y-3 gap-x-4 pt-6 border-t border-gray-100 dark:border-gray-850/60 max-w-md"
            >
              {[
                "Sentinel-2 & Landsat-8 GIS Validation",
                "99.9% SMS & Gateway Uptime",
                "Cloud Migration & Resiliency",
                "Deep AI Agronomy Modeling",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-500">
                    <FiCheck className="h-3 w-3" />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive API Terminal Code Panel Column */}
          <div className="lg:col-span-5 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-slate-950 p-5 shadow-2xl dark:border-gray-800 relative w-full overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                  <FiTerminal className="h-3 w-3" />
                  <span>query_maizeyield_api.py</span>
                </div>
              </div>

              {/* Code Blocks */}
              <div className="font-mono text-xs space-y-3 leading-relaxed text-slate-300 overflow-x-auto">
                <div>
                  <span className="text-red-400">import</span> bigdataghana_sdk as bdg
                </div>
                <div>
                  client = bdg.Client(api_key=<span className="text-emerald-400">"**_bdg_live"</span>)
                </div>
                <div>
                  analytics = client.maizeyield.predict(
                  <div className="pl-4">
                    coordinates=[<span className="text-amber-400">5.6037, -0.1870</span>],<br />
                    resolution=<span className="text-emerald-400">"10m"</span>,<br />
                    season=<span className="text-emerald-400">"2026_major"</span>
                  </div>
                  )
                </div>
                <div className="border-t border-slate-800 pt-3">
                  <span className="text-slate-500 font-bold"># Response Payload</span>
                  <pre className="text-[10px] leading-tight text-emerald-400 bg-slate-900/50 p-3 rounded-lg mt-1 border border-slate-850">
{`{
  "status": "success",
  "resolution": "10m",
  "predicted_yield_tons_ha": 4.18,
  "confidence_score": 0.967,
  "soil_moisture_index": "optimal",
  "anomalies_detected": false
}`}
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Glowing Accent Orb underneath the terminal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/5 dark:bg-red-500/5 blur-[80px] pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
