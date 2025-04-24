"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <>
      <section className="bg-background py-20 dark:bg-black">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `Client’s Testimonials`,
                description: `Don’t just take our word for it, hear from those who’ve found their dream properties with us.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

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
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 ">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
