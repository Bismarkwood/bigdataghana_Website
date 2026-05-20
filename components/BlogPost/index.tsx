"use client";
import { useState, useMemo } from "react";
import blogPosts, { BlogPost } from "@/components/BlogPost/blogData";
import BlogSidebar from "@/components/BlogPost/BlogSidebar";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiArrowRight, FiSearch, FiX } from "react-icons/fi";

function filterPosts(posts: BlogPost[], query: string): BlogPost[] {
  const q = query.toLowerCase().trim();
  if (!q) return posts;
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

/** Calculate reading time (words / 200 WPM, rounded up) */
function calcReadingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/* ── Shared micro-components ─────────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-6">
      <div className="inline-block border-t-4 border-red-600 pt-2">
        <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white">
          {text}
        </span>
      </div>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
      {label}
    </span>
  );
}

function DateLine({ date }: { date: string }) {
  return (
    <time className="text-[11px] text-gray-400">
      {new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </time>
  );
}

/* ── Feature (hero) card ─────────────────────────────────────────────────── */
function FeatureCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border-b border-gray-100 dark:border-gray-800 pb-10">
        <div className="lg:col-span-3 relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute top-4 left-4 bg-red-600 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white">
            Top Story
          </span>
        </div>
        <div className="lg:col-span-2 flex flex-col justify-between pt-6 lg:pt-0 lg:pl-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Tag label={post.tags[0]} />
              <span className="text-gray-200 dark:text-gray-700">|</span>
              <DateLine date={post.date} />
            </div>
            <h2 className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white group-hover:text-red-600 transition-colors duration-300 mb-5">
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-4">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-widest text-red-600">
            <span>Read full story</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Horizontal list card ────────────────────────────────────────────────── */
function ListCard({ post, rank }: { post: BlogPost; rank: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex items-start gap-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <span className="font-montserrat text-3xl font-black text-gray-100 dark:text-gray-800 leading-none shrink-0 w-8">
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <Tag label={post.tags[0]} />
        <h4 className="font-montserrat text-sm font-bold leading-snug text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mt-1">
          {post.title}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <FiClock size={10} className="text-gray-400" />
          <span className="text-[10px] text-gray-400">{calcReadingTime(post.content || post.excerpt)} min read</span>
          <span className="text-gray-200 dark:text-gray-700">·</span>
          <DateLine date={post.date} />
        </div>
      </div>
    </Link>
  );
}

/* ── Standard story card ─────────────────────────────────────────────────── */
function StoryCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden mb-4">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <Tag label={post.tags[0]} />
      <h3 className="font-montserrat text-[15px] font-bold leading-snug text-gray-900 dark:text-white group-hover:text-red-600 transition-colors duration-200 mt-2 mb-2">
        {post.title}
      </h3>
      <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-2 mt-3">
        <FiClock size={10} className="text-gray-400" />
        <span className="text-[10px] text-gray-400">{calcReadingTime(post.content || post.excerpt)} min read</span>
        <span className="text-gray-200 dark:text-gray-700">·</span>
        <DateLine date={post.date} />
      </div>
    </Link>
  );
}

/* ── Main Page ───────────────────────────────────────────────────────────── */
export default function BlogIndex() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => filterPosts(blogPosts, query), [query]);

  const [featured, ...rest] = filtered;
  const topStories = rest.slice(0, 3);
  const moreStories = rest.slice(3);
  const isSearching = query.trim().length > 0;

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* ── TOP STORY: Full Width ── */}
        {featured && (
          <div className="mb-16">
            <SectionLabel text={isSearching ? "Search Results" : "Top Story"} />
            <FeatureCard post={featured} />
          </div>
        )}

        {/* ── Two-column wrapper: content + sidebar ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 xl:gap-16">

          {/* ── LEFT: Secondary content ── */}
          <div className="lg:col-span-8 space-y-16">

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="h-16 w-16 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-6">
                  <FiSearch size={24} className="text-gray-300" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-gray-900 dark:text-white mb-2">
                  No stories found
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 max-w-xs">
                  Try a different keyword or browse all our latest news below.
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 border border-red-600 px-6 py-2.5 hover:bg-red-600 hover:text-white transition-all"
                >
                  <FiX size={11} /> Clear search
                </button>
              </div>
            )}

            {/* MORE TOP STORIES — 3-column grid */}
            {topStories.length > 0 && (
              <div>
                {!isSearching && <SectionLabel text="More Top Stories" />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-100 dark:border-gray-800 pt-6">
                  {topStories.map((post) => (
                    <StoryCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* ALSO IN THE NEWS — ranked list */}
            {moreStories.length > 0 && (
              <div>
                {!isSearching && <SectionLabel text="Also in the News" />}
                <div className="border-t border-gray-100 dark:border-gray-800">
                  {moreStories.map((post, i) => (
                    <ListCard key={post.id} post={post} rank={i + 1} />
                  ))}
                </div>
              </div>
            )}

            {/* Load more — only when not searching */}
            {!isSearching && (
              <div className="pt-4">
                <button className="text-xs font-bold uppercase tracking-widest text-red-600 border border-red-600 px-8 py-3 hover:bg-red-600 hover:text-white transition-all duration-200">
                  Load More Stories
                </button>
              </div>
            )}
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <BlogSidebar query={query} setQuery={setQuery} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
