import { Metadata } from "next";
import dynamic from "next/dynamic";
import BreadCrumb from "@/components/BreadCrumb";
import About from "@/components/About";
import OurMission from "@/components/Missions";
import Banner2 from "@/components/Banner/index_2";
import OurClients from "@/components/OurClients";
import Certifications from "@/components/Certifications";
import Banner from "@/components/Banner/index";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "About Us | BigData Ghana — Geospatial IT, Data & AI Solutions",
  description:
    "Empowering businesses and organizations across Africa with cutting-edge data solutions tailored to drive growth, efficiency, and innovation.",
};

export default function AboutPage() {
  return (
    <>
      <BreadCrumb
        crumbTitle={{
          title: "About Us",
          description: `Empowering African enterprises with spatial data systems, AI processing, and resilient cloud infrastructure.`,
        }}
        bgImage="/images/about/about-hero-group.jpg"
      />
      <About />
      <OurMission />
      <Banner2 />
      <OurClients />
      <Certifications />
      <Banner />
      <Testimonial />
    </>
  );
}
