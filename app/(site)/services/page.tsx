import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import ServiceData from "@/components/Service/ServiceData";
import ServiceItem from "@/components/Service/ServiceItem";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Docs page for Solid Pro",
};

export default function servicesPage() {
  return (
    <>
      {/* <!-- ===== Service Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Services`,
                subtitle: `What We Offer`,
                description: `With expert guidance, transparent deals, and personalized service, we help you find the perfect place to call home or grow your portfolio.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 px-3 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {ServiceData.map((post, key) => (
              <ServiceItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
}
