"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };
  const serviceArray = [
    "Land Acquisition",
    "General Construction",
    "Facilities Management",
    "Project Management",
    "Architectural Engineering",
  ];
  return (
    <>
      <section className="overflow-hidden bg-gray-200 py-20 dark:bg-black lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32.5">
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
              className="animate_left w-full lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[588/526.5]">
                <Image
                  src="/images/logo/priscilla.jpg"
                  alt="About"
                  className="object-cover dark:hidden"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Image
                  src="/images/logo/priscilla.jpg"
                  alt="About"
                  className="hidden object-cover dark:block"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
                className="font-semibold uppercase text-red-600 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                Get to know us,
              </motion.span>
              <motion.h2
                className="relative mb-6 text-2xl font-semibold text-btndark dark:text-white xl:text-hero"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                We provide location based IT solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
                className="text-justify text-sm"
              >
                At BigData Ghana Limited, we empower businesses and
                organizations across Africa with cutting-edge data solutions
                tailored to drive growth, efficiency, and innovation. With years
                of expertise in the data landscape, we understand the unique
                challenges and opportunities in Ghana and beyond. <br />
                <br />
                We specialize in deploying geolocation data solutions using
                modern AI technologies. We deliver insights on cross-platform
                mobile apps and web applications and have the capacity to
                migrate any-sized organisation's data format into secured,
                reliable, cloud infrastructure. <br />
              </motion.p>
              <br />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
                className="text-justify text-sm"
              >
                <p>
                  We’ve helped businesses, governments, and NGOs make
                  data-driven decisions with:
                </p>

                <div className="mt-2 flex items-center gap-5">
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-[50%] border border-red-600 dark:border-red-600 dark:bg-blacksection"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    viewport={{ once: false }}
                  >
                    <p className="text-metatitle font-semibold text-red-600 dark:text-white">
                      01
                    </p>
                  </motion.div>
                  <div className="w-3/4">
                    <p className="text-justify">
                      Precision-mapped geolocation analytics for logistics,
                      retail, and urban planning.
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-5">
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-[50%] border border-red-600 dark:border-red-600 dark:bg-blacksection"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    viewport={{ once: false }}
                  >
                    <p className="text-metatitle font-semibold text-red-600 dark:text-white">
                      02
                    </p>
                  </motion.div>
                  <div className="w-3/4">
                    <p className="text-justify">
                      AI-enhanced data processing to uncover trends, risks, and
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-5">
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-[50%] border border-red-600 dark:border-red-600 dark:bg-blacksection"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    viewport={{ once: false }}
                  >
                    <p className="text-metatitle font-semibold text-red-600 dark:text-white">
                      03
                    </p>
                  </motion.div>
                  <div className="w-3/4">
                    <p className="text-justify">
                      Secure cloud adoption with minimal downtime and maximum
                      ROI.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...bounceTransition, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="bg-background py-20 dark:bg-black lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.2,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false }}
              className="animate_right w-full lg:w-1/2"
            >
              <motion.span
                className="font-medium uppercase text-red-600 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                3 Easy Working Steps
              </motion.span>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
                className="mb-8 flex"
              >
                <div className="bg-red-600 p-0 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-0 h-10 w-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <p className="text-justify text-lg">
                  We offer seamless property solutions—from buying and selling
                  to rentals and investment opportunities. With expert guidance,
                  transparent deals, and personalized service, we help you find
                  the perfect place to call home or grow your portfolio.
                </p>
              </motion.div>

              <div className="mt-8">
                <ul className="space-y-4">
                  {serviceArray.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      viewport={{ once: false }}
                    >
                      <span className="relative mt-1 flex h-3 w-3 shrink-0">
                        <span className="relative mt-1 inline-flex h-3 w-3 rounded-full  bg-btndark opacity-75 dark:bg-white"></span>
                      </span>
                      <span className="text-lg font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                  scale: 1.05,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                },
              }}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 0.95,
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
              viewport={{ once: false }}
              className="w-full lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[588/526.5]">
                <Image
                  src="/images/DSC08054.jpg"
                  alt="Our Services"
                  className="object-cover dark:hidden"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <Image
                  src="/images/DSC08054.jpg"
                  alt="Our Services"
                  className="hidden object-cover dark:block"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
