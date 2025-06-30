"use client";
import React from "react";
import Image from "next/image";
import { motion, Transition } from "framer-motion";

const FunFact = () => {
  const bounceTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <motion.div
          className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#1c26a1] to-[#3f68d8] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...bounceTransition, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            whileHover={{ rotate: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          >
            <Image
              width={335}
              height={384}
              src="/images/shape/shape-04.png"
              alt="Man"
            />
          </motion.div>

          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },

              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-orange-500 dark:text-white xl:text-sectiontitle3">
              Trusted by Our Clients.
            </h2>
            <p className="mx-auto text-white lg:w-11/12">
              Our Clients' satisfaction is our greatest achievement, and their
              words tell our story better than we ever could.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },

                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-orange-500 dark:text-white xl:text-sectiontitle3">
                200+
              </h3>
              <p className="text-lg text-white lg:text-para2">Projects</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },

                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-orange-500 dark:text-white xl:text-sectiontitle3">
                380+
              </h3>
              <p className="text-lg text-white lg:text-para2">Happy Clients</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },

                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-orange-500 dark:text-white xl:text-sectiontitle3">
                1,520+
              </h3>
              <p className="text-lg text-white lg:text-para2">Lands</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
