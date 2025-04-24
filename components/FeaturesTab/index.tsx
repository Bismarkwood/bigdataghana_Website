"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  const tabs = [
    { id: "tabOne", label: "Grace City" },
    { id: "tabTwo", label: "The View" },
    { id: "tabThree", label: "Black Star Village" },
    { id: "tabFour", label: "The Decade" },
  ];

  return (
    <motion.section
      variants={{
        hidden: {
          opacity: 0,
          x: -20,
          scale: 0.9, // Start slightly zoomed in
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
      className="relative pb-20 pt-18.5 lg:pb-22.5"
    >
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto mb-5 text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `LANDS AND PROPERTIES`,
              description: `With Royal Kingdom Estate as your partner, you can be assured of a successful acquisition process.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        {/* Tab Menus */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === tab.id
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-orange-500"
                  : ""
              }`}
            >
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-primary dark:text-white xl:text-regular">
                  {tab.label}
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto max-w-c-1154"
        >
          {featuresTabData.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.id === currentTab ? "block" : "hidden"}`}
            >
              <FeaturesTabItem featureTab={feature} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesTab;
