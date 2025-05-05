"use client";
import { motion } from "framer-motion";
import { FiBarChart2, FiCpu, FiDatabase } from "react-icons/fi";

export default function DataAIServices() {
  const services = [
    {
      icon: <FiBarChart2 size={24} className="text-red-600" />,
      title: "Predictive Analytics",
      description:
        "Forecast trends and behaviors using statistical models and machine learning.",
    },
    {
      icon: <FiCpu size={24} className="text-red-600" />,
      title: "Machine Learning",
      description:
        "Build, train and deploy models for classification, regression and clustering.",
    },
    {
      icon: <FiDatabase size={24} className="text-red-600" />,
      title: "Data Engineering",
      description: "Design robust data pipelines and warehousing solutions.",
    },
  ];

  return (
    <section className="bg-white px-4 py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold">
            <span className="text-gray-900 dark:text-white">Data & AI</span>{" "}
            <span className="text-red-600">Solutions</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Transform raw data into actionable intelligence with our
            cutting-edge analytics platforms
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-full rounded-full bg-red-100 opacity-30 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg dark:border-gray-500 dark:bg-gray-900 dark:text-white"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <div className="flex items-center justify-between">
                  <button className="font-medium text-red-600">
                    Learn more →
                  </button>
                  <div className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-gray-600 dark:text-gray-100">
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="rounded-lg bg-red-600 px-8 py-4 font-medium text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl">
            Request Data Assessment
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
