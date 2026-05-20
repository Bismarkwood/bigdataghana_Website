"use client";

import { useEffect, useState, useCallback } from "react";
import { FiArrowUp } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLink } from "react-icons/fa";

interface BlogUXProps {
  title: string;
  readingTime: number;
}

export default function BlogUX({ title, readingTime }: BlogUXProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingShare, setShowFloatingShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [readingComplete, setReadingComplete] = useState(false);

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    setScrollProgress(Math.min(100, progress));
    setShowBackToTop(scrollTop > 400);
    setShowFloatingShare(scrollTop > 300);
    setReadingComplete(progress > 90);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareUrl = encodeURIComponent(
    typeof window !== "undefined" ? window.location.href : ""
  );
  const shareTitle = encodeURIComponent(title);

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[3px] bg-red-600 transition-all duration-75 ease-linear shadow-sm shadow-red-600/50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Completion Toast */}
      {readingComplete && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-xs font-bold shadow-xl flex items-center gap-3 animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          You've finished reading · {readingTime} min read
        </div>
      )}

      {/* Floating Share Toolbar (Left side) */}
      <div
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden gap-3 transition-all duration-500 xl:flex xl:flex-col ${
          showFloatingShare ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
        }`}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300 dark:text-gray-600 rotate-180 writing-mode-vertical text-center mb-2">
          Share
        </span>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
        >
          <FaFacebookF size={11} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm"
        >
          <FaTwitter size={11} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all shadow-sm"
        >
          <FaLinkedinIn size={11} />
        </a>
        <a
          href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all shadow-sm"
        >
          <FaWhatsapp size={11} />
        </a>
        <button
          onClick={copyLink}
          className={`h-9 w-9 rounded-full border flex items-center justify-center transition-all shadow-sm ${
            copied
              ? "bg-green-500 text-white border-green-500"
              : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-400 hover:bg-gray-900 hover:text-white hover:border-gray-900"
          }`}
          title="Copy link"
        >
          <FaLink size={10} />
        </button>
      </div>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 h-11 w-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-110 hover:bg-red-700 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FiArrowUp size={18} />
      </button>
    </>
  );
}
