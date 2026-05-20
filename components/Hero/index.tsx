"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides with backgrounds, text content and highlight keywords
  const slides = [
    {
      subtitle: "Leading GIS & Software Engineering Partner",
      title: "Transforming data into strategic, actionable insights.",
      highlight: "data",
      description: "We offer specialized GIS and remote sensing solutions, cross-platform mobile and web applications, leveraging modern frameworks and AI technologies.",
      type: "video",
      src: "/images/hero/earth_loop.mp4",
      fallback: "/images/hero/amws.jpg",
    },
    {
      subtitle: "Custom Generative AI & Machine Learning",
      title: "Automating decisions with intelligent predictive models.",
      highlight: "predictive",
      description: "Build and deploy custom predictive forecasting, natural language processing pipelines, and secure enterprise GenAI systems that unlock your data's potential.",
      type: "video",
      src: "/images/hero/server_room.mp4",
      fallback: "/images/hero/amws.jpg",
    },
    {
      subtitle: "Next-Gen Cloud & Mobile Engineering",
      title: "Resilient cloud architectures for digital growth.",
      highlight: "cloud",
      description: "Design and build cross-platform mobile applications and custom web solutions hosted on resilient cloud infrastructures with state-of-the-art security.",
      type: "video",
      src: "/images/hero/cloud_data.mp4",
      fallback: "/images/hero/amws.jpg",
    },
    {
      subtitle: "Location Intelligence & Remote Sensing",
      title: "Unlock insights from high-resolution satellite imagery.",
      highlight: "satellite",
      description: "Harness geospatial data, drone survey processing, and remote sensing to monitor resources, manage land, and make informed geographic decisions.",
      type: "video",
      src: "/images/hero/bg-video.mp4",
      fallback: "/images/hero/amws.jpg",
    },
    {
      subtitle: "Enterprise Data Warehousing & ETL",
      title: "Architecting reliable, production-grade data pipelines.",
      highlight: "pipelines",
      description: "Automate raw data extraction, cleaning, and storage with scalable pipelines that power dashboards, business intelligence, and real-time operations.",
      type: "video",
      src: "/images/hero/cloud_comp.mp4",
      fallback: "/images/hero/amws.jpg",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8500); // Change slide every 8.5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Helper to render title with colored highlighted keyword
  const renderTitle = (title: string, highlight: string) => {
    if (!highlight) return title;
    const parts = title.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, idx) => 
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={idx} className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 md:px-10 pb-10 pt-28 md:pt-36 xl:pt-40 flex flex-col justify-between">
      {/* Background slider */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
                {/* Fallback image if video doesn't load */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.fallback})` }}
                />
              </video>
            ) : (
              <Image
                src={slide.src}
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/45">
              {/* Optional: Add subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10 dark:opacity-5">
                <Image
                  src="/images/shape/shape-dotted-light.svg"
                  alt="Background pattern"
                  fill
                  className="dark:hidden"
                />
                <Image
                  src="/images/shape/shape-dotted-dark.svg"
                  alt="Background pattern"
                  fill
                  className="hidden dark:block"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-c-1390 w-full flex flex-col justify-between h-full flex-grow mt-6 sm:mt-10">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Title & Subtitle */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Subtitle badge in Mercket Style */}
            <motion.div 
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
              {slides[currentSlide].subtitle}
            </motion.div>

            {/* H1 Headline - Increased font sizes */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8.5xl font-bold text-white leading-[1.1] tracking-tight font-montserrat"
            >
              {renderTitle(slides[currentSlide].title, slides[currentSlide].highlight)}
            </motion.h1>

            {/* Technology partner logos - Increased size and brought closer together */}
            <motion.div
              key={`logos-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="flex items-center gap-1 sm:gap-2 pt-6 flex-wrap"
            >
              <div className="relative w-40 sm:w-48 h-20 sm:h-24 opacity-85 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/hero/aws_partner.png"
                  alt="AWS Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-40 sm:w-48 h-20 sm:h-24 opacity-85 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/hero/ai_logo.png"
                  alt="AI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-40 sm:w-48 h-20 sm:h-24 opacity-85 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/hero/gis_logo.svg"
                  alt="GIS Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Avatar stack, description, CTA button */}
          <motion.div 
            key={`card-${currentSlide}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.15 }}
            className="lg:col-span-5 space-y-6 bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10"
          >
            {/* Avatar Stack */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3 overflow-hidden">
                <div className="relative h-9 w-9 rounded-full border-2 border-white/80 overflow-hidden bg-gray-800">
                  <Image src="/images/team/akwasi-darkwa-anto.png" alt="Akwasi Darkwa Anto" fill className="object-cover" />
                </div>
                <div className="relative h-9 w-9 rounded-full border-2 border-white/80 overflow-hidden bg-gray-800">
                  <Image src="/images/team/getrude-chichi.png" alt="Getrude Chichi" fill className="object-cover" />
                </div>
                <div className="relative h-9 w-9 rounded-full border-2 border-white/80 overflow-hidden bg-gray-800">
                  <Image src="/images/team/yaa-oparebea-acquah.png" alt="Yaa Oparebea Acquah" fill className="object-cover" />
                </div>
                <div className="relative h-9 w-9 rounded-full border-2 border-white/80 overflow-hidden bg-gray-800">
                  <Image src="/images/team/nancy-wayua.png" alt="Nancy Wayua" fill className="object-cover" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/80 bg-red-600 text-[10px] font-bold text-white">
                  +25
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white/90">
                Staffing Solutions You Can Count On
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              {slides[currentSlide].description}
            </p>

            {/* CTA button in Mercket Style */}
            <div className="pt-2">
              <Link href="/contact" className="group relative inline-flex items-center justify-between gap-8 rounded-full bg-white px-6 py-3.5 text-gray-900 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto">
                {/* Hover overlay sliding in from left */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-red-600 to-orange-500 transition-transform duration-350 ease-out group-hover:translate-x-0" />
                
                {/* Button Text */}
                <span className="relative z-10 font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors duration-300 group-hover:text-white">
                  Get in touch
                </span>

                {/* Button Arrow container */}
                <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gray-950 text-white transition-all duration-300 group-hover:bg-white group-hover:text-red-600 overflow-hidden">
                  <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-8" />
                  <FiArrowRight size={14} className="absolute -translate-x-8 transition-transform duration-300 group-hover:translate-x-0" />
                </div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
