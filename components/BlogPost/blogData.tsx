export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn the basics of Next.js and how to build modern web applications",
    content: "Full article content goes here...",
    author: "Jane Doe",
    date: "2023-05-15",
    imageUrl: "/images/logo/priscilla.jpg",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs",
  },
  {
    id: "2",
    title: "Advanced Tailwind CSS Techniques",
    excerpt: "Master advanced Tailwind patterns for professional designs",
    content: "Full article content goes here...",
    author: "John Smith",
    date: "2023-06-20",
    imageUrl: "/images/logo/splash3.jpg",
    tags: ["Tailwind CSS", "Frontend", "Design"],
    slug: "advanced-tailwind-techniques",
  },
  // Add more blog posts...
];

// Default export
export default blogPosts;
