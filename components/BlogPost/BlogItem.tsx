"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "./blogData";

export default function BlogItem({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden border border-gray-100 bg-white dark:bg-black"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        {/* Image with subtle zoom */}
        <div className="overflow-hidden">
          <motion.img
            src={post.imageUrl}
            alt={post.title}
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags - Minimalist style */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium uppercase tracking-wider text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title with elegant underline animation */}
          <h3 className="mb-3 text-xl font-light leading-tight text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 group-hover:bg-[length:100%_1px]">
              {post.title}
            </span>
          </h3>

          {/* Excerpt - subtle fade */}
          <motion.p
            className="mb-4 text-gray-500"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          >
            {post.excerpt}
          </motion.p>

          {/* Author/Date - minimalist */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{post.author}</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Hidden read more (appears on hover) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute bottom-6 right-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
