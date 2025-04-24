import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Docs page for Solid Pro",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Feature />
      <Testimonial />
    </>
  );
}
