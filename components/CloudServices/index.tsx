"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiServer, FiGlobe, FiCode, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

export default function CloudServices() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <FiServer className="h-5 w-5" />,
      title: "Cloud Migration & Optimization",
      summary:
        "BigData Ghana supports businesses and institutions in moving legacy GIS, database, and business applications to the AWS Cloud.",

      color: "red",
      sections: [
        {
          title: "What We Offer",
          items: [
            "End-to-End Cloud Migration",
            "Cloud Cost Optimization",
            "Secure & Compliant Architecture",
            "Managed Cloud Support (Add-on)",
          ],
        },
        {
          title: "Ideal For",
          items: [
            "Public Sector and Government IT Departments",
            "Development organizations and NGOs with legacy systems",
            "Enterprises in health, finance, education, and logistics",
            "GIS firms migrating spatial infrastructure",
            "Institutions undergoing digital transformation",
          ],
        },
      ],
    },
    {
      icon: <FiGlobe className="h-5 w-5" />,
      title: "Geospatial Cloud Solutions",
      summary:
        "BigData Ghana provides dedicated cloud solutions that power the storage, processing, and analysis of large-scale geospatial data.",
      color: "red",
      sections: [
        {
          title: "What We Offer",
          items: [
            "Scalable Spatial Data Storage",
            "High-Performance Compute",
            "Toolchain Integration",
            "Geospatial AI Enablement (Add-on)",
          ],
        },
        {
          title: "Ideal For",
          items: [
            "Mapping and survey firms handling large spatial datasets",
            "Government departments involved in planning, environment, or security",
            "Disaster management agencies",
            "Agricultural monitoring and forestry institutions",
            "NGOs and development projects requiring cloud-based GIS access",
          ],
        },
      ],
    },
    {
      icon: <FiCode className="h-5 w-5" />,
      title: "Cloud-Native Development",
      summary:
        "At BigData Ghana, we design and develop cloud-native applications that drive digital transformation across industries. ",
      color: "red",
      sections: [
        {
          title: "What We Offer",
          items: [
            "Custom Application Development",
            "Serverless & Containerized Architecture",
            "Integrated DevOps Pipelines",
            "Cloud Training & Handover (Add-on)",
          ],
        },
        {
          title: "Ideal For",
          items: [
            "Enterprises seeking scalable digital platforms",
            "Organizations building spatial and non-spatial data apps",
            "Logistics, agriculture, or health tech startups",
            "Government agencies digitizing service delivery",
            "NGOs developing mobile-first tools for field operations",
          ],
        },
      ],
    },
  ];

  const platforms = ["AWS", "Azure", "GCP", "Oracle Cloud"];
  const technologies = [
    "Kubernetes",
    "Terraform",
    "Docker",
    "Ansible",
    "Prometheus",
  ];

  return (
    <section className="bg-white px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-red-600 dark:text-red-400">
            Cloud Computing Services
          </span>
          <h2 className="font-serif mt-3 text-4xl font-light text-gray-900 dark:text-white md:text-5xl">
            Enterprise{" "}
            <span className="font-medium text-red-600">Cloud Solutions</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-red-600" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Transformative cloud services tailored to your business requirements
            and technical objectives.
          </p>
        </motion.div>

        {/* Sophisticated Tab Layout */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Vertical Tabs */}
          <motion.div
            className="flex-none lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-1 border-l border-gray-200 dark:border-gray-700">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex w-full items-center justify-between px-6 py-4 text-left transition-all ${
                    activeTab === index
                      ? "border-l-2 border-red-600 bg-red-50/50 dark:bg-gray-800"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`mr-4 rounded-lg p-2 ${
                        activeTab === index
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <FiChevronRight
                    className={`h-5 w-5 transition-transform ${
                      activeTab === index
                        ? "rotate-90 text-red-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Panel */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-8 md:grid-cols-2">
                    {services[activeTab].sections.map((section, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          <span className="border-b-2 border-red-600 pb-2">
                            {section.title}
                          </span>
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full  text-2xl ">
                                -
                              </span>
                              <span className="text-gray-700 dark:text-gray-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-6 text-center text-2xl font-light text-gray-900 dark:text-white">
              Our <span className="font-medium text-red-600">Technology</span>{" "}
              Partners
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Supported Platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
