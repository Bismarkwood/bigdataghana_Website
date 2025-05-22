import { Metadata } from "next";

import ProjectsCard from "@/components/Projects";
import BreadCrumb from "@/components/BreadCrumb";
import CloudServices from "@/components/CloudServices";
import AWS from "@/components/Banner/aws";

export const metadata: Metadata = {
  title: "BIG DATA GHANA",

  // other metadata
  description: "",
};

export default function CloudServicesPage() {
  return (
    <>
      <BreadCrumb
        crumbTitle={{
          title: "Cloud Services",
          description: ``,
        }}
      />
      <CloudServices />
    </>
  );
}
