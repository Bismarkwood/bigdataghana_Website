import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import BreadCrumb from "@/components/BreadCrumb";

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
      <section className="mb-10">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
