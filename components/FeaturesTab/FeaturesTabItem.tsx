import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, sub_title, desc1, desc2, image, imageDark } = featureTab;

  const images = [image, imageDark]; // Extendable

  return (
    <div className="flex flex-col-reverse items-center gap-6 px-4 sm:gap-8 md:flex-row md:px-0 lg:gap-16">
      {/* Text Content (Bottom on mobile, Left/Right on desktop) */}
      <div className="w-full md:w-1/2">
        <motion.h2
          className="mb-4 text-3xl font-bold text-btndark dark:text-white sm:text-4xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="mb-5 text-justify text-sm text-gray-700 dark:text-gray-300 sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
        >
          {desc1}
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
        >
          <h3 className="text-xl font-semibold text-btndark/80 dark:text-white sm:text-2xl md:text-3xl">
            {sub_title}
          </h3>

          <button className="w-full rounded-full bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho sm:w-auto sm:px-7.5 sm:py-2.5">
            {desc2}
          </button>
        </motion.div>
      </div>

      {/* Image Slider (Top on mobile, Left/Right on desktop) */}
      <div className="w-full md:w-1/2">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Navigation, Pagination]}
          className="overflow-hidden rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[562/366]"
              >
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </motion.div>
            </SwiperSlide>
          ))}
          {/* Mobile-friendly navigation dots */}
          <div className="swiper-pagination !bottom-1 sm:!bottom-2" />
          <div className="swiper-button-prev !hidden sm:!flex" />
          <div className="swiper-button-next !hidden sm:!flex" />
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesTabItem;
