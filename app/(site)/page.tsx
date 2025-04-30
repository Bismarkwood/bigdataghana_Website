import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Banner from "@/components/Banner";
import AboutSummary from "@/components/AboutSummary";
import WhatWeOffer from "@/components/WhatWeOffer";
import OurClient from "@/components/OurClients";
import ServicesSlider from "@/components/ServicesSlider";
export const metadata: Metadata = {
  title: "Big Data Ghana",

  // other metadata
  description: "",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSummary />
      <ServicesSlider />
      <WhatWeOffer />
      <OurClient />
      <Banner />

      {/* <FeaturesTab /> */}

      <Testimonial />
    </main>
  );
}
