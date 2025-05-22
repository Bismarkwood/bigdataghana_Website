import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import BreadCrumb from "@/components/BreadCrumb";

export const metadata: Metadata = {
  title: "Contact Us - Big Data Ghana",

  // other metadata
  description: "",
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
