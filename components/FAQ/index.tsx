"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes your geospatial solutions unique?",
    answer:
      "Our GBI platform combines real-time satellite data with AI-powered analytics, offering insights unavailable through conventional market intelligence tools.",
  },
  {
    question: "How secure is your API infrastructure?",
    answer:
      "We implement military-grade encryption, regular penetration testing, and comply with ISO 27001 standards to ensure data integrity and security.",
  },
  {
    question: "Can you customize solutions for our industry?",
    answer:
      "Absolutely. We've delivered tailored solutions for finance, agriculture, and urban planning sectors, adapting our technology to specific vertical needs.",
  },
  {
    question: "What support comes with your services?",
    answer:
      "All clients receive 24/7 technical support, quarterly strategy reviews, and dedicated account management for enterprise contracts.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-24 dark:bg-black sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-light tracking-tight text-gray-900 dark:text-white">
            <span className="font-normal ">Frequently Asked Questions</span>
          </h2>
          <div className="flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"
            />
          </div>
        </motion.div>

        {/* Animated FAQ Items */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="mb-6 tracking-wider text-gray-500">
            READY TO ELEVATE YOUR BUSINESS?
          </p>
          <motion.button
            whileHover={{
              backgroundColor: "#b91c1c",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden bg-primary px-12 py-4 font-medium tracking-wider text-white"
          >
            <span className="relative z-10">Schedule Consultation</span>
            <motion.span
              className="absolute inset-0 z-0 bg-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-gray-100 ${
        isOpen ? "bg-gray-50" : "bg-white"
      } transition-colors duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between px-8 py-6 text-left"
      >
        <div className="flex items-start">
          <motion.span
            className="font-mono mr-6 mt-1 text-sm text-red-600"
            animate={{ color: isOpen ? "#b91c1c" : "#9ca3af" }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <h3 className="text-xl font-light tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-red-600">
            {question}
          </h3>
        </div>
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            color: isOpen ? "#b91c1c" : "#6b7280",
          }}
          transition={{ duration: 0.4 }}
          className="ml-4 h-6 w-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="overflow-hidden"
          >
            <div className="ml-14 px-8 pb-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="leading-relaxed text-gray-600"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
