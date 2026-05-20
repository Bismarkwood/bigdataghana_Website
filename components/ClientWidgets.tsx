"use client";

import dynamic from "next/dynamic";

const ToasterContext = dynamic(() => import("@/app/context/ToastContext"), { ssr: false });
const WhatsAppWidget  = dynamic(() => import("@/components/Whatsapp"),   { ssr: false });
const FloatEmail      = dynamic(() => import("@/components/FloatEmail"),  { ssr: false });
const FloatCall       = dynamic(() => import("@/components/FloatCall"),   { ssr: false });
const ScrollToTop     = dynamic(() => import("@/components/ScrollToTop"), { ssr: false });
const ChatbotWidget   = dynamic(() => import("@/components/Chatbot"),     { ssr: false });
const GoogleAnalytics = dynamic(() => import("@/components/Google/GoogleAnalytics"), { ssr: false });

export default function ClientWidgets() {
  return (
    <>
      <ToasterContext />
      <FloatCall />
      <FloatEmail />
      <WhatsAppWidget />
      <ScrollToTop />
      <ChatbotWidget />
      <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </>
  );
}
