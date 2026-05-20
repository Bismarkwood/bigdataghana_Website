import { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// ── Lazy-load all below-fold sections ────────────────────────────────────────
// Only Hero is above the fold and needs to be in the initial bundle.
// Everything else loads after the page is interactive.
const AboutSummary  = dynamic(() => import("@/components/AboutSummary"));
const Banner        = dynamic(() => import("@/components/Banner"));
const WhatWeOffer   = dynamic(() => import("@/components/WhatWeOffer"));
const OurClient     = dynamic(() => import("@/components/OurClients"));
const Testimonial   = dynamic(() => import("@/components/Testimonial"));
const Blog          = dynamic(() => import("@/components/Blog"));
const CTA           = dynamic(() => import("@/components/CTA"));

export const metadata: Metadata = {
  metadataBase: new URL("https://bigdataghana.com"),
  title: "Big Data Ghana — Data, AI & Geospatial Solutions",
  description:
    "BigData Ghana provides cutting-edge data analytics, AI, cloud, and geospatial intelligence solutions for businesses across Africa.",
  openGraph: {
    title: "Big Data Ghana",
    description:
      "Data, AI & Geospatial Solutions for Africa",
    images: [{ url: "/images/logo/splash.jpg" }],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSummary />
      <Banner />
      <WhatWeOffer />
      <OurClient />
      <Testimonial />
      <Blog />
      <CTA />
    </main>
  );
}
