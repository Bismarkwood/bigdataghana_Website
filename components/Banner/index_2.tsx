"use client";
import Image from "next/image";
import Link from "next/link";

const Banner2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Logo/Brand (Optional) */}
        <div className="mb-6 flex justify-center">
          <svg
            className="h-12 w-12 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
          Building the Future,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            One Innovation at a Time
          </span>
        </h1>

        {/* Mission Statement */}
        <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300 sm:text-2xl">
          We empower businesses through cutting-edge technology, human-centered
          design, and relentless focus on solving real-world problems.
        </p>

        {/* CTAs */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/30"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-gray-600 px-8 py-3 font-medium text-white transition duration-300 hover:border-blue-400 hover:text-blue-400"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
