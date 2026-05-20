"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const links = [
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
  ];

  return (
    <>
      <BreadCrumb crumbTitle={{ title: "Legal & Compliance", description: "Our policies, terms of service, and privacy standards" }} />
      <div className="bg-white dark:bg-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <nav className="sticky top-24 space-y-2">
                <h3 className="mb-6 text-xs font-black uppercase tracking-widest text-red-600 px-4">
                  Legal Documents
                </h3>
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-4 py-3 text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-500 shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </aside>

            {/* Content Area */}
            <main className="lg:col-span-9">
              <article className="prose prose-red max-w-none dark:prose-invert">
                {children}
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
