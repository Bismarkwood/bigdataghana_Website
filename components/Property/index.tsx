"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Property = () => {
  return (
    <>
      {/* ===== About Start ===== */}
      <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* Image Left */}
            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative h-full w-full"
            >
              <div className="relative aspect-[800/700] w-full">
                <Image
                  src="/images/hero/heroImageOne.jpg"
                  alt="About"
                  className="rounded object-cover dark:hidden"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
                <Image
                  src="/images/hero/heroImageOne.jpg"
                  alt="About"
                  className="hidden rounded object-cover dark:block"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
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
              className="animate_right md:w-1/2"
            >
              <motion.span
                className="font-medium uppercase text-orange-500 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                Get to know us,
              </motion.span>
              <motion.h2
                className="relative mb-6 text-3xl font-bold text-primary dark:text-white xl:text-hero"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false }}
              >
                Royal Kingdom Estate
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
              >
                is committed to delivering a high level of expertise, customer
                service, and attention to detail to the real estate market
                across Ghana and beyond. Let us facilitate your vision of owning
                land or building a home on the African continent. <br />
                <br />
                We provide a reliable real estate services by translating your
                dreams into reality. Construction is considered stressful by
                many, but to us at Royal Kingdom Estate, it is a labour of love
                — Your challenges bring out the best in us. <br />
                <br />
                We combine excellence and expertise in making land aquisition
                litigation free while ensuring property construction and
                management is seamless and gratifying
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== About Two Start ===== */}
      <section className="bg-slate-100 py-20 dark:bg-black lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 overflow-hidden  px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* Text Left */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
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
              className="animate_right md:w-1/2"
            >
              <motion.h2
                className="relative mb-6 text-3xl font-bold text-primary dark:text-white xl:text-hero"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: false }}
              >
                A Trusted <span className="text-orange-500">Brand</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                <p>
                  You can depend on our non-compromising and unwaivering desire
                  for diligence
                </p>

                <div className="mt-7.5 flex items-center gap-5">
                  <motion.div
                    className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    viewport={{ once: false }}
                  >
                    <p className="text-metatitle2 font-semibold text-primary dark:text-white">
                      01
                    </p>
                  </motion.div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 font-semibold text-primary dark:text-white">
                      Mission
                    </h3>
                    <p>
                      To provide a one-stop shop real estate solution. To
                      combine excellence and expertise in making land
                      acquisition litigation-free, property construction and
                      management, seamless and gratifying.
                    </p>
                  </div>
                </div>

                <div className="mt-7.5 flex items-center gap-5">
                  <motion.div
                    className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    viewport={{ once: false }}
                  >
                    <p className="text-metatitle2 font-semibold text-primary dark:text-white">
                      02
                    </p>
                  </motion.div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 font-semibold text-primary dark:text-white">
                      Vision
                    </h3>
                    <p>
                      To be a renowned real estate brand in Ghana, the benchmark
                      in the African real estate industry and a prestigious
                      global brand.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] overflow-hidden rounded-lg md:block md:w-1/2"
            >
              <Image
                src="/images/L2.jpg"
                alt="About"
                className="object-cover dark:hidden"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                src="/images/L2.jpg"
                alt="About"
                className="hidden object-cover dark:block"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;
