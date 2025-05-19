"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiMap, FiGlobe, FiDatabase, FiChevronDown, FiX } from "react-icons/fi";
import { useState } from "react";

export default function GeospatialServices() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      icon: <FiMap className="h-6 w-6" />,
      title: "GIS & Remote Sensing",
      summary:
        " BigData Ghana provides comprehensive GIS and Remote Sensing services designed to support diverse sectors through tailored geospatial solutions. ",
      sections: [
        {
          title: "Service Offering",
          content: [
            "Cartographic Mapping",
            "Field Data Collection",
            "GIS Integration into Existing Applications",
            "GIS Infrastructure Setup",
            "Custom Mobile/Web Applications",
            "Training Programs",
            "Workflow Review and GIS Integration",
          ],
        },
        {
          title: "Targeted Industries",
          content: [
            "•	Urban and Regional Planning",
            "Environmental Management",
            "Agriculture and Forestry",
            "Public Health",
            "Utilities and Infrastructure",
            "Logistics and Transportation",
            "Government and Public Sector",
          ],
        },
        {
          title: "Why Choose Us",
          content: [
            "Proven expertise in geospatial technologies",
            "Tailored, sector-specific GIS solutions",
            "Comprehensive training and support",
            "Strong focus on client needs and objectives",
            "World-class technical infrastructure and skilled team",
          ],
        },
      ],
      features: [
        "Cartographic Mapping",
        "Field Data Collection",
        "GIS Integration into Existing Applications",
      ],
      color: "red",
    },
    {
      icon: <FiDatabase className="h-6 w-6" />,
      title: "Geospatial BPO Services",
      summary:
        "BigData Ghana offers specialized Geospatial Application Development and Geospatial BPO services tailored for clients across Africa, Europe and America.",
      sections: [
        {
          title: "Key Specializations",
          content: [
            "Geospatial Data Cleaning & Processing",
            "Geospatial Data Annotation & Labeling",
            "Geospatial Data Pipeline Development",
            "Geospatial Infrastructure Design & Development",
            "Cloud Migration Services",
            "Spatial Data Digitization & Conversion",
            "Remote Sensing Data Processing",
            "GIS Database Management",
          ],
        },

        {
          title: "Industry Applications",
          content: [
            "Construction & Mining",
            "Urban Area Management",
            "Field & Forest Analysis",
            "	Disaster Management",
            "Logistics & Transportation",
          ],
        },
        {
          title: "Our Infrastructure",
          content: [
            "Advanced GIS & Remote Sensing Tools",
            "Robust Cloud Infrastructure",
            "Expert Team",
            "Compliance & Security",
          ],
        },

        {
          title: "Partnership Benefits",
          content: [
            "Streamlined geospatial workflows",
            "Enhanced data accuracy and integrity",
            "Significant operational cost savings",
            "Improved turnaround times and scalability",
            "Access to advanced geospatial technologies and cloud services",
          ],
        },
      ],
      features: [
        "Geospatial Data Cleaning & Processing",
        "Geospatial Data Annotation & Labeling",
        "Geospatial Data Pipeline Development",
      ],
      color: "blue",
    },
    {
      icon: <FiGlobe className="h-6 w-6" />,
      title: "GeoAI Services",
      summary:
        "BigData Ghana is pioneering GeoAI solutions by integrating advanced GIS and Remote Sensing with Artificial Intelligence.",
      sections: [
        {
          title: "What We Offer",
          content: [
            "Spatial Analytics",
            "AI-Enhanced Mapping",
            "Predictive Modelling",
            "Automated Data Integration",
            "GIS Mobile & Web Applications",
            "Interactive Dashboards",
            "Real-time Tracking",
            "Route Optimization",
          ],
        },
        {
          title: "Target Markets",
          content: [
            "Government & Public Sector",
            "Agriculture",
            "Healthcare",
            "Logistics & Transportation",
            "Finance & Insurance",
          ],
        },
        {
          title: "Use Cases",
          content: [
            "Parking space detection via satellite",
            "Crop disease early warning",
            "Illegal construction monitoring",
            "Traffic pattern analysis",
            "Coastal erosion prediction",
          ],
        },
        {
          title: "Benefits",
          content: [
            "Improved decision-making capabilities",
            "Increased operational efficiency",
            "Proactive risk management",
            "Significant cost savings",
            "Scalable and customizable solutions",
          ],
        },
      ],
      features: [
        "Spatial Analytics",
        "AI-Enhanced Mapping",
        "Predictive Modelling",
      ],
      color: "emerald",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-red-600 dark:text-red-400">
            Geospatial Intelligence
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Earth Observation <span className="text-red-600">Redefined</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-red-600" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Comprehensive geospatial solutions powered by cutting-edge
            technology and domain expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${
                expandedCard === index ? "md:col-span-3" : ""
              }`}
            >
              {/* Card Header */}
              <div
                className={`cursor-pointer p-8 ${
                  expandedCard === index
                    ? "border-b border-gray-200 dark:border-gray-700"
                    : ""
                }`}
                onClick={() =>
                  setExpandedCard(expandedCard === index ? null : index)
                }
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-${service.color}-100 text-${service.color}-600 dark:bg-${service.color}-900/20 dark:text-${service.color}-400`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {service.summary}
                    </p>
                  </div>
                  <button
                    className={`ml-4 rounded-full p-2 transition-all ${
                      expandedCard === index
                        ? "rotate-180 bg-gray-100 dark:bg-gray-700"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <FiChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-6">
                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {service.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-4">
                            <h4
                              className={`border-b pb-2 text-lg font-semibold border-${service.color}-500`}
                            >
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.content.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start"
                                >
                                  <span
                                    className={`mr-3 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-${service.color}-500 text-xs text-white`}
                                  >
                                    ✓
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
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Features Footer (visible when collapsed) */}
              {expandedCard !== index && (
                <div className="p-8 pt-0">
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className={`mr-2 mt-1 text-${service.color}-600 dark:text-${service.color}-400`}
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
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
