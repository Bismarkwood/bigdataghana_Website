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
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:shadow-none dark:hover:shadow-none"
    >
      <div className="to-secondary mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary p-1">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-black">
          <Image
            width={40}
            height={40}
            className="object-contain transition-all duration-300 group-hover:scale-110"
            src={image}
            alt={name}
          />
        </div>
      </div>

      <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
        {header}
      </h3>

      <p className="text-gray-600 dark:text-gray-300">{content}</p>

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary opacity-10 transition-all duration-500 group-hover:scale-150"></div>
    </motion.div>
  );
};

export default SingleTestimonial;
