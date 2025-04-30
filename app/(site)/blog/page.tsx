import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import BreadCrumb from "@/components/BreadCrumb";
import BlogIndex from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "BIG DATA GHANA",

  // other metadata
  description: "",
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <BreadCrumb
        crumbTitle={{
          title: "Our News",
          description: ``,
        }}
      />
      <BlogIndex />
    </>
  );
};

export default BlogPage;
