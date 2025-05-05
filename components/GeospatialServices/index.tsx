"use client";
import { motion } from "framer-motion";
import { FiMap, FiGlobe, FiDatabase } from "react-icons/fi";

export default function GeospatialServices() {
  const services = [
    {
      icon: <FiMap className="text-red-600" size={28} />,
      title: "GIS & Remote Sensing",
      description:
        "Advanced mapping solutions with satellite imagery analysis and spatial data visualization.",
      features: [
        "Land cover classification",
        "Change detection",
        "3D terrain modeling",
      ],
    },
    {
      icon: <FiGlobe className="text-red-600" size={28} />,
      title: "GeoAI",
      description:
        "AI-powered geospatial analytics for predictive modeling and pattern recognition.",
      features: [
        "Object detection",
        "Anomaly prediction",
        "Automated feature extraction",
      ],
    },
    {
      icon: <FiDatabase className="text-red-600" size={28} />,
      title: "Geospatial BPO",
      description:
        "Outsourced geospatial data processing with guaranteed accuracy SLAs.",
      features: [
        "Data digitization",
        "Quality assurance",
        "Workflow automation",
      ],
    },
  ];

  return (
    <section className="bg-slate-100 px-4 py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="font-medium text-red-600 ">
            GEOSPATIAL INTELLIGENCE
          </span>
          <h2 className="mt-3 text-4xl font-bold dark:text-white">
            Earth Observation <br />
            Redefined
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-red-600" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white  shadow-lg transition-all hover:border-red-100 dark:bg-gray-900"
            >
              <div className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red-50">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="mr-2 mt-1 text-red-600"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button className="group flex items-center font-medium text-red-600">
                  Explore capability
                  <svg
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
