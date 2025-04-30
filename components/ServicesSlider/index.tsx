"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites with modern frameworks like Next.js and React.",
    icon: "💻",
    decoration: "bg-red-50",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful interfaces focused on user experience.",
    icon: "🎨",
    decoration: "bg-gradient-to-br from-red-50 to-white",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform applications for iOS and Android.",
    icon: "📱",
    decoration: "border-l-4 border-red-500",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable infrastructure and serverless architectures.",
    icon: "☁️",
    decoration: "hover:shadow-lg hover:shadow-red-100",
  },
  {
    title: "GIS Solutions",
    description: "Geospatial mapping and location intelligence services.",
    icon: "🗺️",
    decoration: "bg-red-50/50",
  },
];

export default function ServicesSlider() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-red-600">
          Our Services
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          Comprehensive solutions tailored to your business needs
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 ${service.decoration} mx-2 border border-gray-100 hover:border-red-200`}
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600">
                  {service.description}
                </p>
                <button className="group mt-auto flex items-center font-medium text-red-600">
                  Learn more
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
