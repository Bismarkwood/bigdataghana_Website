"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiAward, FiCpu, FiShield } from "react-icons/fi";

const certificationsData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    level: "Associate",
    issuer: "Amazon Web Services (AWS)",
    badgeImg: "/images/certifications/aws-solutions-architect.png",
    description: "Validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
    skills: ["Cloud Architecture", "Disaster Recovery", "High Availability", "Security & Compliance"],
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    level: "Foundational",
    issuer: "Amazon Web Services (AWS)",
    badgeImg: "/images/certifications/aws-cloud-practitioner.png",
    description: "Validates overall understanding of the AWS Cloud platform, covering core cloud concepts, security, technology, and billing.",
    skills: ["Cloud Concepts", "AWS Core Services", "Security & Encryption", "Pricing Models"],
  },
];

const Certifications = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30 dark:from-blue-950/15 dark:via-black dark:to-orange-950/10 px-4 py-20 border-t border-gray-100 dark:border-neutral-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-red-50 dark:bg-red-950/20 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-500"
          >
            <FiShield className="h-3.5 w-3.5" />
            <span>VERIFIED CAPABILITIES</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
          >
            Technical Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400"
          >
            Our engineering team holds active credentials validating architectural precision and operations in cloud computing.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-2xl border border-gray-100 bg-white dark:border-neutral-900 dark:bg-neutral-950 p-6 transition-all duration-300 hover:border-red-600/30"
            >
              {/* Badge Image */}
              <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-gray-50 dark:bg-neutral-900 rounded-xl p-2 flex items-center justify-center border border-gray-100 dark:border-neutral-800">
                <Image
                  src={cert.badgeImg}
                  alt={cert.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>

              {/* Info Column */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600 dark:text-red-500">
                    {cert.issuer} • {cert.level}
                  </span>
                  <h3 className="mt-1 font-montserrat text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-655 dark:text-gray-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded bg-gray-50 dark:bg-neutral-900 px-2 py-0.5 text-[10px] font-semibold text-gray-500 dark:text-gray-400 border border-gray-100/50 dark:border-neutral-850"
                    >
                      <FiAward className="h-2.5 w-2.5 text-red-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
