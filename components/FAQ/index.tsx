"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import faqData from "./faqData";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-slate-50/60 dark:bg-black px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-500">
            Quick Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-montserrat">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find clear answers to common questions about our services, processes, and geospatial AI implementations.
          </p>
        </motion.div>

        {/* Split Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left Column: Booking Callout Card (5 columns) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl dark:shadow-2xl overflow-hidden sticky top-28"
          >
            {/* Representative Image Container */}
            <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800">
              <Image 
                src="/images/team/priscilla.jpeg" 
                alt="Priscilla - Customer Success Representative" 
                fill 
                className="object-cover object-top" 
              />
              {/* Status active badge */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                Active Online
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 space-y-5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-montserrat">
                Need a quick walkthrough?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Book a call with Priscilla, our dedicated Customer Success Representative, and discover how our location intelligence and cloud solutions can accelerate your business growth. Priscilla will walk you through the process and answer your queries.
              </p>
              
              <div className="pt-2">
                <Link href="/contact" className="group relative inline-flex items-center justify-between gap-6 rounded-full bg-red-600 px-6 py-3.5 text-white transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg w-full text-center">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-red-700 to-orange-600 transition-transform duration-350 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10 font-bold uppercase tracking-wider text-xs transition-colors duration-300">
                    Book a call
                  </span>
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-600 transition-all duration-300 overflow-hidden">
                    <FiArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-6" />
                    <FiArrowRight size={12} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
                  </div>
                </Link>
              </div>

              {/* Email Footer Link */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
                or email us your queries at{" "}
                <a href="mailto:info@bigdataghana.com" className="font-semibold text-red-600 dark:text-red-400 hover:underline">
                  info@bigdataghana.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accordion Lists (7 columns) */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = activeFaq === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  variants={itemVariants}
                  className={`rounded-2xl border transition-all duration-350 overflow-hidden ${
                    isOpen 
                      ? "bg-white dark:bg-gray-900 border-red-500/25 dark:border-red-500/20 shadow-md" 
                      : "bg-white dark:bg-gray-900/60 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between p-6 sm:p-8 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Leading Count Number */}
                      <span className={`font-mono text-sm font-semibold transition-colors duration-300 ${
                        isOpen ? "text-red-600 dark:text-red-500" : "text-gray-400 dark:text-gray-500"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold font-montserrat transition-colors duration-300 ${
                        isOpen 
                          ? "text-red-600 dark:text-red-500" 
                          : "text-gray-800 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-500"
                      }`}>
                        {faq.quest}
                      </h3>
                    </div>

                    {/* Rotating Indicator Icon */}
                    <div className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-red-50 dark:group-hover:bg-red-950/40 transition-colors duration-350">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="h-4 w-4"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-full w-full"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pl-14 pr-6 sm:pr-8 pb-6 sm:pb-8">
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            {faq.ans}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
