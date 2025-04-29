import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import BreadCrumb from "@/components/BreadCrumb";

export const metadata: Metadata = {
  title: "BIG DATA GHANA",

  // other metadata
  description: "",
};

export default function AboutPage() {
  return (
    <>
      <BreadCrumb
        crumbTitle={{
          title: "About Us",
          description: ``,
        }}
      />
      <About />
      <Feature />
      <Testimonial />
    </>
  );
}
