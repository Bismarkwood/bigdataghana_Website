"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type CrumbTitle = {
  title: string;
  description: string;
};

const BreadCrumb = ({ crumbTitle }: { crumbTitle: CrumbTitle }) => {
  const { title, description } = crumbTitle;

  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Image Container */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/logo/splash.jpg"
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50">
          {/* Dotted Pattern Background */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted pattern"
              fill
              className="object-cover dark:hidden"
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted pattern"
              fill
              className="hidden object-cover dark:block"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex h-full items-center">
            <motion.div
              className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...bounceTransition, delay: 0.3 }}
                className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...bounceTransition, delay: 0.5 }}
                className="mt-4 h-1 w-20 bg-primary"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
