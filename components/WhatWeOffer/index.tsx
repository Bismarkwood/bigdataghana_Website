"use client";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const WhatWeOffer = () => {
  return (
    <section className="bg-background py-20 dark:bg-black">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <div className="mb-5 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600 dark:text-white">
              Our Services
            </span>
            <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
              What We Offer
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
          </div>
          <p>
            Discover the comprehensive services we provide to help you succeed.
          </p>
        </div>
      </div>

      <div className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((review) => (
            <SingleTestimonial key={review?.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
