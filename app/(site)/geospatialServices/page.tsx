import { Metadata } from "next";

import ProjectsCard from "@/components/Projects";
import BreadCrumb from "@/components/BreadCrumb";
import GeospatialServices from "@/components/GeospatialServices";

export const metadata: Metadata = {
  title: "BIG DATA GHANA",

  // other metadata
  description: "",
};

export default function ProjectsPage() {
  return (
    <>
      <BreadCrumb
        crumbTitle={{
          title: "Geospatial Services",
          description: ``,
        }}
      />
      <GeospatialServices />
    </>
  );
}
