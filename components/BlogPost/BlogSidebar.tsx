"use client";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiArrowRight, FiX } from "react-icons/fi";
import blogPosts from "./blogData";

interface BlogSidebarProps {
  query?: string;
  setQuery?: (q: string) => void;
}

function SidebarLabel({ text }: { text: string }) {
  return (
    <div className="mb-5 border-t-4 border-red-600 pt-2">
      <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white">
        {text}
      </span>
    </div>
  );
}

const categories = [
  "Digital Farms",
  "AI & Data",
  "Partnerships",
  "Sustainability",
  "Cloud Tech",
  "GIS & Mapping",
];

const BlogSidebar = ({ query, setQuery }: BlogSidebarProps) => {
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <aside className="space-y-10">

      {/* Search */}
      {/* Search */}
      {query !== undefined && setQuery && (
        <div>
          <SidebarLabel text="Search" />
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news..."
              className="w-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 text-sm focus:border-red-600 focus:outline-none transition-colors pr-10"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Clear search"
              >
                <FiX size={14} />
              </button>
            ) : (
              <FiSearch size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
          </div>
          {query && (
            <p className="mt-2 text-[10px] text-gray-400">
              Filtering by: <strong className="text-red-600">"{query}"</strong>
            </p>
          )}
        </div>
      )}

      {/* Most Read */}
      <div>
        <SidebarLabel text="Most Read" />
        <div className="space-y-0">
          {recentPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              <span className="font-montserrat text-2xl font-black text-gray-100 dark:text-gray-800 leading-none w-6 shrink-0">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-1">
                  {post.tags[0]}
                </p>
                <h4 className="font-montserrat text-[13px] font-bold leading-snug text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                  {post.title}
                </h4>
              </div>
              {post.imageUrl && (
                <div className="relative h-14 w-20 shrink-0 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div>
        <SidebarLabel text="Topics" />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              href="#"
              className="px-3 py-1.5 text-[11px] font-bold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-red-600 hover:text-red-600 transition-all"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-red-600 p-6 text-white">
        <p className="font-montserrat text-[11px] font-black uppercase tracking-widest mb-3 opacity-80">
          Newsletter
        </p>
        <h3 className="font-montserrat text-xl font-bold leading-snug mb-3">
          Stay Ahead of the Curve.
        </h3>
        <p className="text-xs opacity-80 leading-relaxed mb-5">
          Get the latest data insights and tech news from BigData Ghana delivered straight to your inbox.
        </p>
        <button className="flex w-full items-center justify-center gap-2 bg-white py-3 text-xs font-bold text-red-600 hover:bg-gray-100 transition-colors">
          Subscribe <FiArrowRight size={12} />
        </button>
      </div>

    </aside>
  );
};

export default BlogSidebar;
