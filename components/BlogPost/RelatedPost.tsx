import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {BlogData.slice(0, 3).map((post) => (
        <Link 
          key={post.id} 
          href={`/blog/${post.slug}`}
          className="group block"
        >
          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
            <Image 
              fill 
              src={post.imageUrl} 
              alt={post.title}
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <h4 className="font-montserrat text-sm font-bold leading-snug text-gray-900 dark:text-white transition-colors group-hover:text-red-600">
            {post.title}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default RelatedPost;
