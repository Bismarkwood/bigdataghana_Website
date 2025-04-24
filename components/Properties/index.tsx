"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Properties = () => {
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
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <h2 className="mx-auto mb-4 mt-10 text-3xl font-bold text-black dark:text-white ">
          LANDS AND PROPERTIES
        </h2>
        <p className="mx-auto text-black dark:text-white md:w-[46%] lg:w-[46%] xl:w-[80%]">
          With expert guidance, transparent deals, and personalized service, we
          help you find the perfect place to call home or grow your portfolio.
        </p>
      </motion.div>

      {/* ===== Land One Start ===== */}
      <section className="py overflow-hidden py-20">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 px-10 lg:flex-row lg:gap-32.5">
            {/* Image Left */}

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
              className="animate_left  w-full lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[562/500]">
                <Swiper
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  modules={[Navigation, Pagination]}
                  className="overflow-hidden rounded-2xl"
                >
                  <SwiperSlide>
                    <motion.div className="relative aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/GC-8.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/GC-8.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div className="relative aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/GC 1.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/GC 1.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>

                  <div className="h-10! bg-orange-500">
                    {" "}
                    <div className="swiper-button-prev !text-white" />
                  </div>

                  <div className="swiper-button-next !text-white"></div>
                  <div className="swiper-pagination !bottom-2 "></div>
                </Swiper>
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false }}
              className="animate_right w-full md:w-1/2"
            >
              <motion.span
                className="text-xl font-semibold uppercase text-orange-500 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                GHC 100,000.
              </motion.span>
              <motion.h2
                className="relative mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                GRACE CITY
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                <span className="text-md font-medium italic text-gray-500">
                  "Grace City is an incredible site with a stunning layout and
                  serene, beautiful views.",
                </span>
                <br />
                <span className="text-3xl font-bold  text-orange-500">
                  _____
                </span>
                <br />
                <span className=" text-justify text-sm text-gray-700">
                  We provide a reliable real estate services by translating your
                  dreams into reality. Construction is considered stressful by
                  many, but to us at Royal Kingdom Estate, it is a labour of
                  love — Your challenges bring out the best in us. <br />
                  We combine excellence and expertise in making land aquisition
                  litigation free while ensuring property construction and
                  management is seamless and gratifying{" "}
                </span>
              </motion.p>
              <button className="text- ml-auto block rounded-full bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-black">
                BUY LAND
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Land Two Start ===== */}
      <section className="overflow-hidden bg-slate-100 px-5 py-20 dark:bg-black">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 px-10 lg:flex-row lg:gap-32.5">
            {/* Text left */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false }}
              className="animate_left w-full md:w-1/2"
            >
              <motion.span
                className="text-xl font-semibold uppercase text-orange-500 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                GHC 200,000.
              </motion.span>
              <motion.h2
                className="relative mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                THE VIEW
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                <span className="text-md font-medium italic text-gray-500">
                  "As the name suggests, “The View”is a remarkable site with
                  breathtaking views that will leave you in awe."
                </span>
                <br />
                <span className="text-3xl font-bold  text-orange-500">
                  _____
                </span>
                <br />
                <span className=" text-justify text-sm text-gray-700">
                  Imagine waking up to stunning vistas every morning and
                  enjoying the tranquility of nature right at your doorstep.{" "}
                  <br />
                  Purchasing a plot at “The View” offers you the opportunity to
                  create your dream home in a picturesque setting. Whether
                  you’re looking for a peaceful retreat or a place to build your
                  forever home, “The View” has it all. Don’t miss out on this
                  chance to own a piece of paradise!
                </span>
              </motion.p>
              <button className="text- mr-auto mt-2 block rounded-full bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-black">
                BUY LAND
              </button>
            </motion.div>

            {/* Image right */}

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
              className="animate_right  w-full lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[562/500]">
                <Swiper
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  modules={[Navigation, Pagination]}
                  className="overflow-hidden rounded-2xl"
                >
                  <SwiperSlide>
                    <motion.div className="relative aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/GC-8.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/GC-8.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div className="relative aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/GC 1.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/GC 1.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>

                  <div className="h-10! bg-orange-500">
                    {" "}
                    <div className="swiper-button-prev !text-white" />
                  </div>

                  <div className="swiper-button-next !text-white"></div>
                  <div className="swiper-pagination !bottom-2 "></div>
                </Swiper>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Land Three Start ===== */}
      <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 px-10 lg:flex-row lg:gap-32.5">
            {/* Image Left */}
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
              className="animate_left  w-full lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[562/500]">
                <Swiper
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  modules={[Navigation, Pagination]}
                  className="overflow-hidden rounded-2xl"
                >
                  <SwiperSlide>
                    <motion.div className="relative aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/BV 4.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/BV 4.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div className="relative  aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/v6.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/v6.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>

                  <div className="swiper-button-prev !text-white"></div>
                  <div className="swiper-button-next !text-white"></div>
                  <div className="swiper-pagination !bottom-2 "></div>
                </Swiper>
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false }}
              className="animate_right md:w-1/2"
            >
              <motion.span
                className="text-xl font-semibold uppercase text-orange-500 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                GHC 160,000.
              </motion.span>
              <motion.h2
                className="relative mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                BLACKSTAR VILLAGE
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                <span className="text-md font-medium italic text-gray-500">
                  "Blackstar Village not only boasts of a stunning landscape and
                  a serene green environment, but the name itself holds a
                  significant meaning.",
                </span>
                <br />
                <span className="text-3xl font-bold  text-orange-500">
                  _____
                </span>
                <br />
                <span className=" text-sm text-gray-700">
                  “Blackstar” is a powerful term that reminds us of the
                  prestigious heroes of Africa and the incredible achievements
                  they’ve made for the continent
                  <br />
                  By purchasing a plot at Blackstar Village, clients not only
                  get to enjoy the beauty of the surroundings, but also become
                  part of a community that seeks to connect Africa and
                  contribute to its growth. It’s an opportunity to be a part of
                  something bigger and make a positive impact.
                </span>
              </motion.p>
              <button className="ml-auto mt-2 block rounded-full bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-black">
                BUY LAND
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Apartment  Start ===== */}

      <section className="overflow-hidden bg-slate-100 px-5 py-20 dark:bg-black">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 px-10 lg:flex-row lg:gap-32.5">
            {/* Text left */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false }}
              className="animate_left w-full md:w-1/2"
            >
              <motion.span
                className="text-xl font-semibold uppercase text-orange-500 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                $80.00.
              </motion.span>
              <motion.h2
                className="relative mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                THE DECADE
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                <span className="text-md font-medium italic text-gray-500">
                  "Looking for the perfect accommodation? Our luxury shortlet
                  apartment is the ultimate choice!"
                </span>
                <br />
                <span className="text-3xl font-bold  text-orange-500">
                  _____
                </span>
                <br />
                <span className=" text-justify text-sm text-gray-700">
                  With its elegant design, top-notch amenities, and prime
                  location, it offers the utmost comfort and convenience.
                  Whether you’re traveling for business or pleasure, our
                  apartment ensures a luxurious and memorable stay <br />
                  Book now and experience the best of hospitality! Features
                  include: 2 bedroom all en-suite | Visitor’s washroom | Back-up
                  generator | Washing machine | Fitted Air-conditioners | Open
                  Kitchen | Fitted bedroom wardrobes | Swimming pool
                </span>
              </motion.p>
              <button className="text- mr-auto mt-2 block rounded-full bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-black">
                BOOK NOW
              </button>
            </motion.div>

            {/* Image right */}

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
              className="animate_right  w-full lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[562/500]">
                <Swiper
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  modules={[Navigation, Pagination]}
                  className="overflow-hidden rounded-2xl"
                >
                  <SwiperSlide>
                    <motion.div className="relative aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/room12-1.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/room12-1.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <motion.div className="relative aspect-[562/500] w-full max-w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/room12-1.jpg"
                        alt="Land"
                        className="object-cover dark:hidden"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Image
                        src="/images/room12-1.jpg"
                        alt="Land"
                        className="hidden object-cover dark:block"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </SwiperSlide>

                  <div className="h-10! bg-orange-500">
                    {" "}
                    <div className="swiper-button-prev !text-white" />
                  </div>

                  <div className="swiper-button-next !text-white"></div>
                  <div className="swiper-pagination !bottom-2 "></div>
                </Swiper>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
