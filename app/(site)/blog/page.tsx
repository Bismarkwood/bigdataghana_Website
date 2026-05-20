import { Metadata } from "next";
import BreadCrumb from "@/components/BreadCrumb";
import BlogIndex from "@/components/BlogPost";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Insights | BIG DATA GHANA",
  description:
    "Stay updated with the latest news, partnerships, and data-driven insights from BigData Ghana.",
};

const categories = [
  { label: "All", href: "/blog", active: true },
  { label: "Digital Farms", href: "#" },
  { label: "AI & Data", href: "#" },
  { label: "Partnerships", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Cloud Tech", href: "#" },
];

const BlogPage = async () => {
  return (
    <>
      {/* Hero Banner */}
      <BreadCrumb crumbTitle={{ title: "Our News", description: "" }} />

      {/* BBC-style Category Navigation Bar */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`shrink-0 px-5 py-4 text-[11px] font-black uppercase tracking-widest border-b-2 transition-colors ${
                  cat.active
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <BlogIndex />
    </>
  );
};

export default BlogPage;
