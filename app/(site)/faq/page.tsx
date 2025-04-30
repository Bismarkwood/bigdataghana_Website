import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import BreadCrumb from "@/components/BreadCrumb";
import OurClients from "@/components/OurClients";
import OurMission from "@/components/Missions";
import Banner2 from "@/components/Banner/index_2";
import Banner from "@/components/Banner/index";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "BIG DATA GHANA",

  // other metadata
  description: "",
};

export default function FaqPage() {
  return (
    <>
      <BreadCrumb
        crumbTitle={{
          title: "Our FAQs",
          description: ``,
        }}
      />

      <FAQ />
    </>
  );
}
