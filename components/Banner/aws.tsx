"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AWS = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };

  return (
    <section
      className="overlay- relative bg-cover bg-center px-4 py-10 text-white sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/images/logo/dataCenter.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50"></div>
      <div className="relative mx-auto max-w-4xl text-center">
        {/* <div className="mb-3 flex justify-center">
          <svg
            className="h-30 w-50 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 12l2.121-2.121a3 3 0 014.242 0l1.415 1.414a2 2 0 010 2.828l-3.536 3.536a2 2 0 01-2.828 0l-.586-.586M12 12l-2.121-2.121a3 3 0 00-4.242 0L4.222 11.293a2 2 0 000 2.828l3.536 3.536a2 2 0 002.828 0l.586-.586M12 12l1.414 1.414a2 2 0 010 2.828l-1.414 1.414M12 12l-1.414 1.414a2 2 0 000 2.828L12 18"
            />
          </svg>
        </div> */}
        <div className="my-10">
          <motion.div
            className="inline-flex gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...bounceTransition, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              width={100}
              height={100}
              className=""
              src="/images/logo/logo1.png"
              alt=""
            />
            <Image
              width={100}
              height={100}
              className=""
              src="/images/hero/aws_partner.png"
              alt=""
            />
          </motion.div>
        </div>

        {/* Mission Statement */}
        <h3 className="mx-auto mb-5 max-w-3xl text-2xl text-white">
          {" "}
          Kick-Start your transition to cloud with pace, precision and
          predictability.
        </h3>
        <p className="text-md mx-auto mb-10 text-white">
          Technical experts, customer champions and certified AWS partners With
          a team of trained and accredited technical individuals, BigData Ghana
          is recognized by Amazon as a trusted partner for implementing AWS for
          customers around the globe.
        </p>

        {/* CTAs */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-8 py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-red-700 hover:shadow-red-500/30"
          >
            Call Us Now
          </Link>
          {/* <Link
            href="/about"
            className="rounded-lg border border-gray-600 px-8 py-3 font-medium text-white transition duration-300 hover:border-blue-400 hover:text-blue-400"
          >
            Our Services
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default AWS;
