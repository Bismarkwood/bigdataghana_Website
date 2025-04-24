import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/Contact/ContactForm";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Support page for Solid Pro",
};

const ContactPage = () => {
  return (
    <div className="pb-20 pt-40">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
