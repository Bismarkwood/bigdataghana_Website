import { blogPosts } from "@/components/BlogPost/blogData";
import BlogItem from "@/components/BlogPost/BlogItem";

export default function BlogIndex() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
