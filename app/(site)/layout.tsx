import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import { Montserrat } from "next/font/google";
import ClientWidgets from "@/components/ClientWidgets";
import "../globals.css";

// ── Fonts ─────────────────────────────────────────────────────────────────
// Only load Montserrat (Inter was declared but never applied)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

// ClientWidgets handles all the below-fold client-only components

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className="font-montserrat dark:bg-black">
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          {children}
          <ClientWidgets />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
