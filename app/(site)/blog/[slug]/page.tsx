import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogPosts from "@/components/BlogPost/blogData";
import { FiClock, FiArrowRight, FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import RelatedPost from "@/components/BlogPost/RelatedPost";
import SharePost from "@/components/BlogPost/SharePost";
import BlogSidebar from "@/components/BlogPost/BlogSidebar";
import BlogUX from "@/components/BlogPost/BlogUX";
import ArticleContent from "@/components/BlogPost/ArticleContent";
import EventGallery from "@/components/BlogPost/EventGallery";

/** Calculate reading time (words / 200 WPM, rounded up) */
function calcReadingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    metadataBase: new URL("https://bigdataghana.com"),
    title: `${post.title} | BIG DATA GHANA`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imageUrl }],
    },
  };
}

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  if (postIndex === -1) notFound();

  const post = blogPosts[postIndex];
  const prevPost = blogPosts[postIndex - 1] ?? null;
  const nextPost = blogPosts[postIndex + 1] ?? null;

  /* Build article body paragraphs from post content or fallback */
  const articleBody = post.content
    ? post.content
    : `${post.excerpt}

Across the continent, the intersection of technology and agriculture is creating unprecedented opportunities for sustainable development. BigData Ghana is at the forefront of this revolution, providing the digital infrastructure necessary to empower smallholder farmers and large-scale agricultural enterprises alike.

The integration of AI-driven insights with satellite imagery allows for real-time monitoring of crop health, soil conditions, and weather patterns. By translating complex data into actionable recommendations, we are helping farmers optimise their resource usage and maximise yields.

As we continue to expand our reach, our focus remains on scalability and accessibility. The goal is to ensure that even the most remote farming communities can benefit from the power of geospatial intelligence and cloud-native data architectures. Partners like Digital Earth Africa and AWS have been instrumental in providing the infrastructure backbone needed for this mission.`;

  const readingTime = calcReadingTime(articleBody);

  return (
    <main className="bg-white dark:bg-black min-h-screen" id="article-top">
      {/* ── Client-side UX shell: progress bar, share bar, back-to-top ── */}
      <BlogUX title={post.title} readingTime={readingTime} />

      {/* ── Breadcrumb ── */}
      <div className="border-b border-gray-100 dark:border-gray-800 pt-32 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span className="opacity-30">/</span>
            <Link href="/blog" className="hover:text-red-600 transition-colors">News/Events</Link>
            <span className="opacity-30">/</span>
            <span className="text-red-600 truncate max-w-[220px]">{post.tags[0]}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

            {/* ── Main Article Column ── */}
            <article className="lg:w-[65%] xl:w-[68%]" id="article-body">

              {/* Header */}
              <header className="mb-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded bg-red-50 dark:bg-red-900/20 text-red-600 text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="font-montserrat text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-[2.6rem] mb-6">
                  {post.title}
                </h1>

                {/* Meta strip */}
                <div className="flex flex-wrap items-center gap-5 py-4 border-y border-gray-100 dark:border-gray-800 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white text-[9px] font-bold shrink-0">
                      BDG
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">{post.author}</span>
                  </div>
                  <span className="h-3 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
                  <time dateTime={post.date} className="font-medium">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span className="h-3 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
                  <span className="flex items-center gap-1 text-red-600 font-semibold">
                    <FiClock size={13} /> {readingTime} min read
                  </span>
                </div>
              </header>

              {/* Hero Image */}
              <figure className="mb-10">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="mt-3 text-[11px] text-gray-400 italic text-center">
                  BigData Ghana Media Archives — {post.title}
                </figcaption>
              </figure>

              {/* Article Body */}
              {post.content ? (
                <ArticleContent content={post.content} excerpt={post.excerpt} />
              ) : (
              <div className="article-content">
                {/* Lead paragraph */}
                <p className="text-lg font-semibold leading-relaxed text-gray-900 dark:text-gray-100 mb-8 border-l-4 border-red-600 pl-5">
                  {post.excerpt}
                </p>

                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-7 text-[17px]">
                  <p>
                    Across the continent, the intersection of technology and
                    agriculture is creating unprecedented opportunities for
                    sustainable development. BigData Ghana is at the forefront
                    of this revolution, providing the digital infrastructure
                    necessary to empower smallholder farmers and large-scale
                    agricultural enterprises alike.
                  </p>

                  <h2 className="font-montserrat text-2xl font-bold text-gray-900 dark:text-white pt-6 pb-2">
                    Transforming Traditional Practices
                  </h2>

                  <p>
                    The integration of AI-driven insights with satellite imagery
                    allows for real-time monitoring of crop health, soil
                    conditions, and weather patterns. By translating complex data
                    into actionable recommendations, we are helping farmers
                    optimise their resource usage and maximise yields.
                  </p>

                  {/* Pull quote */}
                  <blockquote className="my-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border-l-4 border-red-600">
                    <p className="text-lg italic font-medium text-gray-900 dark:text-white leading-relaxed">
                      "Digital agriculture is not just about the technology; it's
                      about the people and the future of food security across
                      Africa."
                    </p>
                    <cite className="block mt-3 text-xs font-bold uppercase tracking-widest text-red-600 not-italic">
                      — BigData Ghana Leadership
                    </cite>
                  </blockquote>

                  <h2 className="font-montserrat text-2xl font-bold text-gray-900 dark:text-white pt-4 pb-2">
                    Scalability &amp; Accessibility
                  </h2>

                  <p>
                    As we continue to expand our reach, our focus remains on
                    scalability and accessibility. The goal is to ensure that
                    even the most remote farming communities can benefit from the
                    power of geospatial intelligence and cloud-native data
                    architectures. Partners like Digital Earth Africa and AWS
                    have been instrumental in providing the infrastructure
                    backbone needed for this mission.
                  </p>

                  {/* Key takeaways box */}
                  <div className="my-10 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
                    <h3 className="font-montserrat text-sm font-bold uppercase tracking-widest text-red-600 mb-4">
                      Key Takeaways
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Real-time crop monitoring via satellite & AI",
                        "Cloud-native data infrastructure for scale",
                        "Partnerships with AWS & Digital Earth Africa",
                        "Empowering over 1,000 farmers across Ghana",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              )}

              {/* Event Gallery */}
              {post.galleryImages && (
                <EventGallery images={post.galleryImages} eventTitle={post.title} />
              )}

              {/* Tags & Share bar */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 py-6 border-y border-gray-100 dark:border-gray-800">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-[10px] font-bold text-gray-600 dark:text-gray-400 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase text-gray-400">Share</span>
                  <SharePost />
                </div>
              </div>

              {/* ── Prev / Next Navigation ── */}
              {(prevPost || nextPost) && (
                <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all"
                    >
                      <FiArrowLeft className="mt-1 text-gray-400 group-hover:text-red-600 shrink-0 transition-colors" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                          Previous
                        </span>
                        <p className="font-montserrat text-sm font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                          {prevPost.title}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-red-600 transition-all text-right justify-end"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                          Next
                        </span>
                        <p className="font-montserrat text-sm font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                          {nextPost.title}
                        </p>
                      </div>
                      <FiArrowRight className="mt-1 text-gray-400 group-hover:text-red-600 shrink-0 transition-colors" />
                    </Link>
                  )}
                </nav>
              )}

              {/* ── More on this story ── */}
              <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800">
                <h3 className="font-montserrat text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  More on this story <FiArrowUpRight className="text-red-600" />
                </h3>
                <RelatedPost />
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="lg:w-[35%] xl:w-[32%]">
              <div className="sticky top-32 space-y-10">
                <BlogSidebar />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleBlogPage;
