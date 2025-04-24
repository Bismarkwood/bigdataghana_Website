import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Properties from "@/components/Properties";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Docs page for Solid Pro",
};

export default function LandsAndPropertiesPage() {
  return (
    <>
      <section className=" pt-24  md:pt-28  lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <Properties />
          </div>
        </div>
      </section>
    </>
  );
}
