import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import BreadCrumb from "@/components/BreadCrumb";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Support page for Solid Pro",
};

const ContactPage = () => {
  return (
    <>
      <BreadCrumb
        crumbTitle={{
          title: "Contact Us",
          description: ``,
        }}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
