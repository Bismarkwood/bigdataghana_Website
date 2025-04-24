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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/services`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-primary duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/services`}>{`${title}`}</Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceItem;
