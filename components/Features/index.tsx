"use client";
import React, { useRef } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="px-10 py-20 lg:py-25 xl:py-30">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
              scale: 1.1, // Start slightly zoomed in
            },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1, // Normal scale when visible
            },
          }}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 0.95, // Zoom out effect on hover
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0"
        >
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "At RKE",
              subtitle: "Our Core Values",
              description: `We are a one-stop shop real estate solution. We combine excellence and expertise in making land acquisition litigation-free, property construction and management, seamless and gratifying.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </motion.div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
