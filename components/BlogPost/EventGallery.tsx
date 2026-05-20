"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";

interface EventGalleryProps {
  images?: string[];
  eventTitle: string;
}

export default function EventGallery({ images, eventTitle }: EventGalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!images) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight" && activeIdx !== null) {
        setActiveIdx((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1));
      }
      if (e.key === "ArrowLeft" && activeIdx !== null) {
        setActiveIdx((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, images]);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800">
      <h3 className="font-montserrat text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Event Gallery
      </h3>
      <p className="text-sm text-gray-500 mb-8">
        Visual highlights and key moments from the forum. Click any image to expand.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((imgSrc, idx) => {
          // Highlight first image by spanning 2 cols on tablet/desktop if it fits
          const isFeatured = idx === 0 && images.length > 1;
          return (
            <div
              key={imgSrc}
              onClick={() => setActiveIdx(idx)}
              className={`group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ${
                isFeatured ? "sm:col-span-2 aspect-[16/10]" : "aspect-square"
              }`}
            >
              {/* Image */}
              <Image
                src={imgSrc}
                alt={`${eventTitle} gallery image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FiMaximize2 size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-10 select-none"
          >
            {/* Close trigger background */}
            <div className="absolute inset-0" onClick={() => setActiveIdx(null)} />

            {/* Top Bar (Counter & Close) */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Image {activeIdx + 1} of {images.length}
              </span>
              <button
                onClick={() => setActiveIdx(null)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
              {/* Prev Button */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous Image"
                >
                  <FiChevronLeft size={24} />
                </button>
              )}

              {/* Image Frame */}
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full max-w-[90%] max-h-[90%] aspect-[16/9]"
              >
                <Image
                  src={images[activeIdx]}
                  alt={`${eventTitle} gallery image enlarged ${activeIdx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next Image"
                >
                  <FiChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Caption / Title */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/80 text-sm max-w-md px-4 truncate">
              {eventTitle}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
