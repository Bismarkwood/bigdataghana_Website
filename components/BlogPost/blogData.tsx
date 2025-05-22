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
    title: "BigData Ghana and other Tech Companies meet Farmers",
    excerpt:
      "Increasingly, farmers need technology to meet the demands of importers. To bridge that gap, 13 Ghanaian tech companies....",
    content:
      "Increasingly, farmers need technology to meet the demands of importers. To bridge that gap, 13 Ghanaian tech companies...",
    author: "International Trade Center",
    date: "2023-05-03",
    imageUrl: "/images/features/ITC.png",
    tags: ["Digital Farms"],
    slug: "",
  },
  {
    id: "2",
    title: "BigData Ghana and Amazon Web Services (AWS)",
    excerpt:
      "We hosted a delegation from Amazon Web Services, marking a milestone in our journey as a Local Specialist Partner of AWS..",
    content: "",
    author: "BigData Ghana",
    date: "2022-09-05",
    imageUrl: "/images/features/NTB1.png",
    tags: ["Strengthening Partnerships"],
    slug: "",
  },

  {
    id: "3",
    title:
      "BigData Ghana works towards more sustainable agriculture with DE Africa",
    excerpt:
      "Big Data Ghana’s GAIMS platform is driven by satellite, AI and machine learning technologies to provide crucial insights...",
    content: "",
    author: "Digital Earth Africa",
    date: "2022-03-28",
    imageUrl: "/images/features/DEA.png",
    tags: ["Agricultural Sustainability"],
    slug: "",
  },
  // Add more blog posts...
];

// Default export
export default blogPosts;
