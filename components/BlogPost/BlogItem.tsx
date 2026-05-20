"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { BlogPost } from "./blogData";

export default function BlogItem({ post }: { post: BlogPost }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden bg-white dark:bg-black"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        {/* Editorial Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Floating Read More Button */}
          <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-600/30">
              <FiArrowUpRight size={24} />
            </div>
          </div>
        </div>

        {/* Editorial Content Section */}
        <div className="py-8 px-2">
          <div className="mb-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="text-red-600">{post.tags[0]}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1 text-gray-400">
              <FiClock className="inline" /> 5 MIN READ
            </span>
          </div>

          <h3 
            className="font-montserrat mb-4 text-2xl font-bold leading-[1.2] text-gray-900 transition-colors duration-300 group-hover:text-red-600 dark:text-white md:text-3xl"
          >
            {post.title}
          </h3>

          <p className="mb-6 line-clamp-2 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-6 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                <Image
                  src="/images/logo/logo1.png"
                  alt="BDG Author"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain opacity-50"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                {post.author}
              </span>
            </div>
            <span className="text-xs font-medium text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
