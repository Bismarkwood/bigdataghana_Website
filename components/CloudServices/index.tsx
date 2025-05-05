"use client";
import { motion } from "framer-motion";

export default function CloudServices() {
  const features = [
    "Infrastructure as Code",
    "Serverless Architectures",
    "Multi-Cloud Deployment",
    "Disaster Recovery",
    "Continuous Monitoring",
  ];

  return (
    <section className="bg-slate-50 px-4 py-20 text-gray-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <span className="font-medium text-red-400">CLOUD SOLUTIONS</span>
            <h2 className="mb-6 mt-3 text-4xl font-bold ">
              Scalable Cloud Infrastructure
            </h2>
            <p className="mb-8 text-gray-600 dark:text-white">
              Enterprise-grade cloud environments optimized for performance,
              security, and cost-efficiency across all major platforms.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start rounded-lg border border-gray-100 bg-white p-4 shadow-lg dark:border-gray-500 dark:bg-gray-900 dark:text-white"
                >
                  <div className="mr-3 mt-0.5 rounded-full bg-red-600 p-1 text-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M5 12l5 5L20 7" strokeWidth="2" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative md:w-1/2"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-red-900 to-transparent opacity-20" />
            <div className="relative rounded-xl border border-gray-100 bg-white p-4 shadow-lg dark:border-gray-500 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-6 text-2xl font-bold">Our Cloud Stack</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-red-400">Platforms</h4>
                  <div className="flex flex-wrap gap-3">
                    {["AWS", "Azure", "GCP", "Oracle"].map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full bg-gray-300  px-3 py-1 text-sm dark:bg-gray-700"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-red-400">Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Kubernetes", "Terraform", "Docker", "Ansible"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-300 px-3 py-1 text-sm dark:bg-gray-700"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
