"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"], // Specify the weights you need
});

import ToasterContext from "../context/ToastContext";
import WhatsAppWidget from "@/components/Whatsapp";
import FloatEmail from "@/components/FloatEmail";
import FloatCall from "@/components/FloatCall";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${montserrat.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          {/* <Lines /> */}
          <Header />
          <ToasterContext />
          {children}
          {/* <FloatCall />
          <WhatsAppWidget />
          <FloatEmail /> */}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
