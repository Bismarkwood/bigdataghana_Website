import { Metadata } from "next";

import ProjectsCard from "@/components/Projects";
import BreadCrumb from "@/components/BreadCrumb";
import DataAIServices from "@/components/DataAIServices";

export const metadata: Metadata = {
  title: "BIG DATA GHANA",

  // other metadata
  description: "",
};

export default function DataAIServicesPage() {
  return (
    <>
      <BreadCrumb
        crumbTitle={{
          title: "Data Analytics and AI Services",
          description: ``,
        }}
      />
      <DataAIServices />
    </>
  );
}
