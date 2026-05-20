"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiLayers, FiMap, FiDatabase, FiSmartphone } from "react-icons/fi";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Projects", icon: FiLayers },
  { id: "gis", label: "GIS & Mapping", icon: FiMap },
  { id: "digital", label: "Digital Solutions", icon: FiSmartphone },
  { id: "data", label: "Data & AI", icon: FiDatabase },
];

const projects = [
  {
    id: "p6",
    type: "product",
    category: "digital",
    title: "SendlineSMS",
    subtitle: "Messaging Solution",
    description: "A robust and reliable SMS gateway providing businesses with seamless messaging solutions for customer engagement and notifications.",
    tags: ["SMS Gateway", "Messaging", "API"],
    image: "/images/brand/sendlinesms.png",
    links: [{ type: "demo", url: "https://sendlinesms.com/" }],
    accentColor: "from-sky-600 to-sky-800",
  },
  {
    id: "c4",
    type: "client",
    category: "digital",
    title: "NTMEL",
    subtitle: "National Traffic Management",
    description: "Development of VEHICLE TRAFFIC ENFORCEMENT Application for Ghana Police Service MTTD.",
    tags: ["Traffic", "Enforcement", "App"],
    image: "/images/logo/ntmel.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-blue-600 to-blue-800",
  },
  {
    id: "c5",
    type: "client",
    category: "digital",
    title: "Nationwide ERP",
    subtitle: "Enterprise Solutions",
    description: "A comprehensive custom ERP system for Nationwide Group featuring facial recognition, fuel marking, and quality control modules.",
    tags: ["ERP", "Enterprise", "AI"],
    image: "/images/logo/ntl.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-blue-700 to-blue-900",
  },
  {
    id: "c6",
    type: "client",
    category: "gis",
    title: "Forest Monitoring System",
    subtitle: "Forestry Commission",
    description: "Co-development and deployment of Ghana's National Forest Monitoring System (NFMS) in partnership with the Forestry Commission.",
    tags: ["Forestry", "GIS", "Climate"],
    image: "/images/logo/NFMS.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-emerald-600 to-emerald-800",
  },
  {
    id: "p7",
    type: "product",
    category: "data",
    title: "BigConnect AI",
    subtitle: "Enterprise AI Platform",
    description: "An advanced AI-driven integration platform that connects disparate data sources to provide unified, actionable intelligence for large organizations.",
    tags: ["AI", "Data Integration", "Enterprise"],
    image: "/images/brand/bigconnect.png",
    links: [{ type: "demo", url: "https://bigconnectai.bigdataghana.com/" }],
    accentColor: "from-blue-500 to-blue-700",
  },
  {
    id: "p8",
    type: "product",
    category: "gis",
    title: "MaizeYield",
    subtitle: "Agricultural Forecasting",
    description: "An advanced geospatial intelligence platform designed to predict maize yields and optimize agricultural productivity through Earth Observation and AI.",
    tags: ["GIS", "Agriculture", "AI"],
    image: "/images/brand/maizeyield.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-emerald-500 to-emerald-700",
  },
  {
    id: "p1",
    type: "product",
    category: "gis",
    title: "GAIMS Platform",
    subtitle: "GIS & Remote Sensing",
    description: "Built following Open Up Guidelines for Agriculture, providing spatially explicit data for stakeholders using ODbL licensing.",
    tags: ["Flutter", "MongoDB", "GIS"],
    image: "/images/logo/GAIMS2.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-red-600 to-red-800",
  },

  {
    id: "p3",
    type: "product",
    category: "gis",
    title: "Green Ghana Tracker",
    subtitle: "Environmental Monitoring",
    description: "A powerful platform combining social networking and tree monitoring to inspire positive change in Ghana's ecosystem.",
    tags: ["React", "Nest", "Environmental"],
    image: "/images/logo/GreenGhanaTrackerGrid.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-green-600 to-green-800",
  },
  {
    id: "p4",
    type: "product",
    category: "digital",
    title: "VirtualSoft ID",
    subtitle: "Digital Identity",
    description: "Modern data technology solutions designed to speed up business processes through digital identification.",
    tags: ["React", "Nest", "Security"],
    image: "/images/logo/virtualsoftid.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-purple-600 to-purple-800",
  },

  {
    id: "c1",
    type: "client",
    category: "data",
    title: "EC App",
    subtitle: "Electoral Commission",
    description: "Addressing data accessibility and consistency during elections with secure, real-time polling station information.",
    tags: ["Security", "Real-time", "Governance"],
    image: "/images/logo/ECapp.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-red-700 to-red-900",
  },
  {
    id: "c7",
    type: "client",
    category: "data",
    title: "Data Analysis for Indomie",
    subtitle: "Promotion Analytics",
    description: "This project analyzed data from an Indomie scratch card promotion to gain insights into the demand for Indomie across different regions of Ghana.",
    tags: ["Data Analysis", "Insights", "GIS"],
    image: "/images/brand/indomie.jpg",
    links: [{ type: "demo", url: "#" }],
    accentColor: "from-red-600 to-yellow-500",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white transition-all duration-500 hover:shadow-lg dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
    >
      {/* Image Area - Compact */}
      <div className={`relative h-44 w-full overflow-hidden p-6 transition-colors duration-500 bg-gray-50/50 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800`}>
        <div className={`absolute inset-0 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] bg-gradient-to-tr ${project.accentColor}`} />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-gray-900 shadow-sm backdrop-blur-md dark:bg-gray-900/90 dark:text-white border border-gray-100 dark:border-gray-800">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Area - Minimalist */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-red-600">
            {project.subtitle}
          </p>
          <h3 className="mt-0.5 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        
        <p className="mb-4 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4 dark:border-gray-800/50">
          <div className="flex gap-2">
            {project.tags.slice(0, 1).map((tag) => (
              <span key={tag} className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
          
          <motion.a
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white shadow-md transition-colors hover:bg-red-600 dark:bg-white dark:text-gray-900 dark:hover:bg-red-600 dark:hover:text-white"
          >
            <FiExternalLink className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { coreProducts, otherProjects } = useMemo(() => {
    const coreIds = ["p6", "p7", "p4"]; // SendlineSMS, BigConnect AI, VirtualSoft ID
    return {
      coreProducts: projects.filter((p) => coreIds.includes(p.id)),
      otherProjects: projects.filter((p) => !coreIds.includes(p.id)),
    };
  }, []);

  const filteredOtherProjects = useMemo(() => {
    if (activeCategory === "all") return otherProjects;
    return otherProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, otherProjects]);

  return (
    <section className="bg-white px-4 py-24 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-red-600"
          >
            Innovation & Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl"
          >
            Our <span className="text-red-600">Core</span> Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            Scalable, high-performance platforms built in-house to solve complex data and communication challenges.
          </motion.p>
        </div>

        {/* Core Products Grid */}
        <div className="mb-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreProducts.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Section Divider */}
        <div className="mb-20 flex flex-col items-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />
          <h2 className="mt-20 text-4xl font-bold text-gray-900 dark:text-white">
            Client <span className="text-red-600">Projects</span> & Solutions
          </h2>
          <p className="mt-4 text-gray-500">A collection of specialized solutions we've delivered for our global partners.</p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 border border-gray-100 dark:border-gray-800"
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredOtherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 rounded-3xl bg-btndark p-12 text-center text-white dark:bg-gray-900 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
          
          <h3 className="text-3xl font-bold md:text-4xl">Have a specialized data need?</h3>
          <p className="mt-4 text-lg text-white/70">Our team can build custom solutions tailored to your unique challenges.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-full bg-red-600 px-10 py-4 font-bold transition-colors hover:bg-red-700"
          >
            Start a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
