import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className=" rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <Image
            width={60}
            height={50}
            className="float-left rounded-full"
            src={image}
            alt={name}
          />{" "}
          <br />
          <h3 className="mb-1.5 text-metatitle2 text-red-600 dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <span className="text-9xl font-extrabold text-background">,,</span>
      </div>

      <p className="text-justify text-sm">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
