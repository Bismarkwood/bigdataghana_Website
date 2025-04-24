"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Slide data with different backgrounds and content
  const slides = [
    {
      background: "/images/logo/dataCenter.jpeg",
      type: "image",
      title: "Welcome to Your Real Estate One-Stop Shop",
      description:
        "We combine excellence and expertise in making land acquisition litigation-free, property construction and management, seamless and gratifying.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
    {
      background: "/images/logo/bg-video.mp4",
      type: "video",
      title: "Innovative Property Solutions",
      description:
        "Discover cutting-edge approaches to real estate development and management that set us apart from the competition.",
      buttonText: "Learn More",
      buttonLink: "/services",
    },
    {
      background: "/images/logo/amws.jpg",
      type: "image",
      title: "Trusted by Thousands",
      description:
        "Join our growing community of satisfied clients who have found their dream properties through our services.",
      buttonText: "View Properties",
      buttonLink: "/properties",
    },
  ];

  // Reset timer when user interacts or hovers
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Auto slide every 10 seconds when not hovering
  useEffect(() => {
    resetTimeout();

    if (!isHovering) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }

    return () => resetTimeout();
  }, [currentSlide, isHovering, slides.length]);

  const goToSlide = (index: number) => {
    resetTimeout();
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    resetTimeout();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    resetTimeout();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slides container */}
      <div className="relative h-screen w-full">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              currentSlide === index && (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Background media */}
                  {slide.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    >
                      <source src={slide.background} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={slide.background}
                      alt=""
                      fill
                      className="object-cover"
                      priority
                    />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50">
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

                  {/* Slide content - animates with background */}
                  <div className="mx-auto flex h-full max-w-c-1390 items-center px-10 sm:px-10 md:px-24 xl:px-24 2xl:px-24">
                    <motion.div
                      className="md:w-2/3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ ...bounceTransition, delay: 0.2 }}
                    >
                      <h1 className="mb-5 pr-16 font-bold text-white">
                        <span className="text-4xl font-bold md:text-6xl xl:text-6xl">
                          {slide.title.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </span>
                      </h1>
                      <br />
                      <motion.p
                        className="text-lg font-medium text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {slide.description.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </motion.p>
                      <motion.div
                        className="mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex flex-wrap gap-5">
                          <Link href={slide.buttonLink}>
                            <button
                              aria-label={slide.buttonText}
                              className="flex rounded-full bg-primary/90 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-orange-500 dark:bg-btndark dark:hover:bg-blackho"
                            >
                              {slide.buttonText}
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white hover:bg-black/50"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white hover:bg-black/50"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
