"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServiceItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: false }}
        whileHover={{
          scale: 1.07,
          transition: { duration: 0.1 },
        }}
        className="animate_top w-full rounded-lg bg-white pb-9 shadow-solid-8 dark:bg-blacksection sm:w-auto" // Added responsive width
      >
        <Link
          href={`/services`}
          className="relative block aspect-[368/239] w-full" // Ensured full width on mobile
        >
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover" // Added for better image display
          />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-black dark:text-white dark:hover:text-black xl:text-itemtitle2">
            <Link href={`/services`}>{`${title}`}</Link>
          </h3>
          <p className="text-sm sm:text-base">{metadata}</p>{" "}
          {/* Responsive text size */}
        </div>
      </motion.div>
    </>
  );
};

export default ServiceItem;
