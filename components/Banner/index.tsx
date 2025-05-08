"use client";
import Image from "next/image";

const Banner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };

  return (
    <section className="w-full">
      {/* Container for full-width image */}
      <div className="relative h-auto w-full">
        <Image
          src="/images/logo/app_banner.png"
          alt="Ad Banner"
          width={1920} // Set your image's actual width
          height={500} // Set your image's actual height
          className="h-auto w-full object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default Banner;
