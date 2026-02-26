"use client"; // Required for Swiper (client-side component)

import { Autoplay } from "swiper/modules"; // Updated import for Swiper v9+
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import Image from "next/image";

// Mock data (replace with your actual client logos)
const clients = [
  { id: 1, logo: "/images/brand/fc_logo.png", alt: "Company 1" },
  { id: 2, logo: "/images/brand/usaid.png", alt: "Company 2" },
  { id: 3, logo: "/images/brand/africa_centre.png", alt: "Company 3" },
  { id: 4, logo: "/images/brand/german_cooperation.png", alt: "Company 4" },
  { id: 5, logo: "/images/brand/ecom.png", alt: "Company 5" },
  { id: 6, logo: "/images/brand/uglogo.png", alt: "Company 6" },
  { id: 7, logo: "/images/brand/pharmacy_council.png", alt: "Company 7" },
  { id: 8, logo: "/images/brand/africa_centre.png", alt: "Company 8" },
  // { id: 9, logo: "/images/brand/snv.png", alt: "Company 9" },
];

export default function OurClients() {
  return (
    <section className="bg-white px-4 py-7 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Our Clientele
        </h2>

        <Swiper
          modules={[Autoplay]} // Autoplay module is imported correctly
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          rewind={true}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="py-6"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="group flex h-50 items-center justify-center px-4 transition-all duration-300 hover:grayscale-0">
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    fill
                    className="object-contain p-4"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
