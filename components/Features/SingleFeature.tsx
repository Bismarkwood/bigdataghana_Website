import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{
        scale: 1.07,
        transition: { duration: 0.1 },
      }}
      className="group z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all duration-300 ease-in-out hover:scale-[1.07] hover:border-orange-500 hover:bg-blue-900 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-gray-300 xl:p-12.5"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-orange-600 transition-colors duration-300">
        <Image src={icon} width={36} height={36} alt={title} />
      </div>
      <motion.h3
        className="mb-5 mt-7.5 text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-primary"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-justify text-gray-700 transition-colors duration-300 group-hover:text-white dark:text-white/80 dark:group-hover:text-black"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SingleFeature;
