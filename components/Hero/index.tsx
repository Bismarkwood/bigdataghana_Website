"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CountUp } from "use-count-up";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background media (can mix videos and images)
  const backgrounds = [
    {
      type: "video",
      src: "/images/hero/earth_loop.mp4",
      fallback: "/images/hero/amws.jpg", // Fixed path format
    },
    {
      type: "video",
      src: "/images/hero/server_room.mp4",
      fallback: "/images/hero/amws.jpg", // Fixed path format
    },
    {
      type: "video",
      src: "/images/hero/cloud_data.mp4",
      fallback: "/images/hero/amws.jpg", // Fixed path format
    },
    // Add more backgrounds as needed
  ];

  const partnerImages = [
    "/images/hero/earth_loop.mp4",
    "/images/hero/earth_loop.mp4",
    "/images/hero/earth_loop.mp4",
    "/images/hero/earth_loop.mp4",
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const MyProject = () => <CountUp isCounting end={200} duration={3.2} />;
  const MyClient = () => <CountUp isCounting end={380} duration={3.4} />;
  const MyLand = () => <CountUp isCounting end={1520} duration={3.6} />;

  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-10 pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      {/* Background slider */}
      <div className="absolute inset-0 -z-10">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {bg.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={bg.src} type="video/mp4" />
                {/* Fallback image if video doesn't load */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bg.fallback})` }}
                />
              </video>
            ) : (
              <Image
                src={bg.src}
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50">
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
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Rest of your content remains the same */}
      <div className="mx-auto max-w-c-1390 sm:px-10 md:px-24 xl:px-24 2xl:px-24">
        <div className="md:w-2/3">
          <motion.h1
            className=" pr-16 font-bold text-white "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...bounceTransition, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className=" text-4xl font-bold md:text-6xl xl:text-6xl">
              {" "}
              Transforming
              <br />
              data into strategic, <br />
              actionable insights.
            </span>
          </motion.h1>
          <br />
          <motion.p
            className="text-lg font-medium text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...bounceTransition, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            We offer specialized GIS and remote sensing solutions,
            cross-platform mobile and web applications, leveraging modern
            frameworks and AI technologies.
          </motion.p>
          {/* Button Section */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...bounceTransition, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex flex-wrap gap-5">
              <Link href={"/contact"}>
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-primary/90 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-orange-500 dark:bg-btndark dark:hover:bg-blackho"
                >
                  Get in touch
                </button>
              </Link>
            </div>
          </motion.div>
          <div className="mt-20">
            <motion.div
              className="inline-flex gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...bounceTransition, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                width={100}
                height={100}
                className=""
                src="/images/hero/aws_partner.png"
                alt=""
              />
              <Image
                width={100}
                height={100}
                className=""
                src="/images/hero/ai_logo.png"
                alt=""
              />
              <Image
                width={100}
                height={100}
                className=""
                src="/images/hero/gis_logo.svg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
