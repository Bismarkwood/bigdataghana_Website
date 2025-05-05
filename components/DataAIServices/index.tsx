"use client";
import { motion } from "framer-motion";
import { FiBarChart2, FiCpu, FiDatabase } from "react-icons/fi";

export default function DataAIServices() {
  const services = [
    {
      icon: <FiBarChart2 className="h-5 w-5" />,
      title: "Data Analytics",
      subtitle: "Business Intelligence",
      description:
        "Transform raw data into actionable insights with real-time dashboards and strategic reporting.",
      features: [
        "ETL pipelines with SQL/Python",
        "Power BI/Tableau dashboards",
        "Data warehouse design",
        "KPI monitoring systems",
      ],
      color: "bg-red-500",
    },
    {
      icon: <FiCpu className="h-5 w-5" />,
      title: "Machine Learning",
      subtitle: "Model Development",
      description:
        "Build and deploy predictive models that automate decisions and uncover hidden patterns.",
      features: [
        "scikit-learn/TensorFlow",
        "Demand forecasting",
        "NLP text intelligence",
        "AWS SageMaker hosting",
      ],
      color: "bg-blue-500",
    },
    {
      icon: <FiDatabase className="h-5 w-5" />,
      title: "Generative AI",
      subtitle: "Custom Solutions",
      description:
        "Implement secure LLMs for document processing, chatbots, and automated content generation.",
      features: [
        "Private model deployment",
        "Document summarization",
        "AI-generated reports",
        "Domain-specific fine-tuning",
      ],
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        {/* Header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-red-600 dark:text-red-400">
            Data & AI Services
          </span>
          <h2 className="mx-auto max-w-3xl text-4xl font-light leading-tight text-gray-900 dark:text-white md:text-5xl">
            <span className="relative inline-block">
              Intelligent Data Solutions
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-red-600 dark:bg-red-500"
              />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Cutting-edge analytics and AI implementations tailored to your
            business requirements.
          </p>
        </motion.div>

        {/* Services grid - Minimal cards with hover elevation */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: false, margin: "0px 0px -50px 0px" }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                className={`absolute right-6 top-6 h-12 w-12 rounded-full ${service.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                    service.color
                  } bg-opacity-10 text-${
                    service.color.split("-")[1]
                  }-600 dark:text-${service.color.split("-")[1]}-400`}
                >
                  {service.icon}
                </div>

                <div className="mb-1 flex items-baseline gap-2">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <span className="text-sm font-light text-gray-500">/</span>
                  <span className="text-sm font-light text-gray-500">
                    {service.subtitle}
                  </span>
                </div>

                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className={`mr-3 mt-1 flex h-4 w-4 items-center justify-center rounded-full ${service.color} text-xs text-white`}
                      >
                        ✓
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video + Features section */}
        <div className="mt-25 grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Video with subtle border animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="relative pt-15"
          >
            <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-gray-100 to-white opacity-60 dark:from-gray-800 dark:to-gray-900"></div>
            <div className="overflow-hidden rounded-xl shadow-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                poster="/images/logo/priscilla-poster.jpg"
              >
                <source src="/images/hero/cloud_comp.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Features with animated bars */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h3 className="mb-8 text-3xl font-light text-gray-900 dark:text-white">
                Why Choose <span className="font-medium">Our Solutions</span>
              </h3>

              <div className="space-y-8">
                {[
                  {
                    title: "Enterprise-Grade Security",
                    description:
                      "All implementations include robust data protection and compliance measures.",
                  },
                  {
                    title: "Custom-Tailored Approach",
                    description:
                      "Solutions designed specifically for your business context and needs.",
                  },
                  {
                    title: "End-to-End Ownership",
                    description:
                      "We handle everything from initial design to ongoing optimization.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: false }}
                    className="relative pl-8"
                  >
                    <div
                      className={`absolute left-0 top-1 h-6 w-0.5 ${services[index].color}`}
                    ></div>
                    <h4 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
