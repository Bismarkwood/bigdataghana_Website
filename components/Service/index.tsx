import React from "react";
import SectionHeader from "../Common/SectionHeader";
import ServiceItem from "./ServiceItem";
import ServiceData from "./ServiceData";

const Service = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Services`,
              subtitle: `What We Offer`,
              description: `We offer seamless property solutions—from buying and selling to rentals and investment opportunities. With expert guidance, transparent deals, and personalized service, we help you find the perfect place to call home or grow your portfolio.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {ServiceData.slice(0, 3).map((blog, key) => (
            <ServiceItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
