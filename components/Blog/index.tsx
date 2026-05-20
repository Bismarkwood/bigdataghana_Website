import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import blogPosts from "../BlogPost/blogData";
import BlogItem from "../BlogPost/BlogItem";

const Blog = () => {
  // Get the 3 latest blog posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-slate-50/50 dark:bg-black px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="mb-3 inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-500">
              Insights & Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-montserrat leading-tight">
              Latest News & Events
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Stay updated with the latest breakthroughs in geospatial intelligence, generative AI, and our journey in transforming data into climate action across Africa.
            </p>
          </div>

          <div className="shrink-0">
            <Link 
              href="/blog" 
              className="group relative inline-flex items-center justify-between gap-6 rounded-full bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 px-6 py-3.5 text-gray-900 dark:text-white transition-all duration-300 overflow-hidden shadow-sm hover:shadow"
            >
              <span className="relative z-10 font-bold uppercase tracking-wider text-xs transition-colors duration-300">
                Explore All News
              </span>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 overflow-hidden">
                <FiArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-6" />
                <FiArrowRight size={12} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
              </div>
            </Link>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {latestPosts.map((post) => (
            <BlogItem post={post} key={post.id} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
