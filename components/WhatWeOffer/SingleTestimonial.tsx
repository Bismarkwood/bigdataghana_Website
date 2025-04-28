import { whatWeOffer } from "@/types/whatWeOffer";
import { motion } from "framer-motion";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: whatWeOffer }) => {
  const { name, header, image, content } = review;
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -20,
          scale: 1.1,
        },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1, // Normal scale when visible
        },
      }}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        scale: 1.1, // Zoom out effect on hover
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      transition={{
        duration: 1,
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      className="h-72 rounded-lg bg-white p-4 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
    >
      <div className="mb-2 flex justify-center">
        <div className="flex justify-center">
          <Image width={100} height={150} className="" src={image} alt={name} />
        </div>
      </div>
      <h2 className="mb-3 text-center text-xl font-semibold text-black">
        {header}
      </h2>
      <p className=" text-sm">{content}</p>
    </motion.div>
  );
};

export default SingleTestimonial;
