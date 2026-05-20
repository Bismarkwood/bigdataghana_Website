"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Trust by design",
    desc: "We embed privacy, security, and AI compliance into every layer of the platform so trust is not an afterthought, but the foundation.",
  },
  {
    title: "Unified not Fragmented",
    desc: "Privacy, security, and AI governance are interconnected. We bring them together in one system to eliminate silos and create a single source of truth.",
  },
  {
    title: "Clarity over complexity",
    desc: "Compliance should not be confusing. We translate regulatory and technical complexity into clear, actionable workflows that teams can execute.",
  },
  {
    title: "Audit Ready Always",
    desc: "Organizations should never scramble for audits. We ensure documentation, controls, and evidence are continuously maintained and accessible.",
  },
  {
    title: "Responsible AI at the Core",
    desc: "We empower organizations to build and deploy AI systems that are transparent, accountable, and aligned with global standards.",
  },
  {
    title: "Scalable by Design",
    desc: "From startups to global enterprises, our platform grows with you—adapting to increasing complexity without adding operational burden.",
  },
];

const Principles = () => {
  return (
    <section className="bg-gray-50 py-24 dark:bg-[#050505] lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs font-black uppercase tracking-widest text-red-600">
              Our Principles
            </span>
            <h2 className="font-montserrat text-4xl font-bold text-black dark:text-white md:text-6xl">
              The rules we live by.
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Scaling trust across industries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-gray-200 dark:bg-gray-800 lg:grid-cols-3">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-12 transition-colors hover:bg-gray-50 dark:bg-black dark:hover:bg-[#0a0a0a]"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-xs font-black text-gray-400 transition-colors group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-600 dark:border-gray-800 dark:bg-[#111] dark:group-hover:border-red-900/30 dark:group-hover:bg-red-900/10">
                0{idx + 1}
              </div>
              <h3 className="mb-4 font-montserrat text-xl font-bold text-black dark:text-white">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Tagline Summary */}
        <div className="mt-32 border-t border-gray-200 pt-24 dark:border-gray-800">
          <div className="mx-auto max-w-3xl text-center">
            <h4 className="mb-8 text-sm font-black uppercase tracking-[0.4em] text-red-600">Mission</h4>
            <p className="mb-12 font-montserrat text-3xl font-medium italic leading-snug text-black dark:text-white md:text-5xl">
              "To power the next generation of digital trust by scaling privacy, security and compliance across global enterprises."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
