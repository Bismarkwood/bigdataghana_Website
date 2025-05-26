"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "GIS, Remote Sensing",
    description:
      "The GAIMS Platform was built following the Open Up Guideline for Agriculture developed by GODAN and Open Data Charter, with Data licensed under the Open Data Commons Open Database License (ODbL).",
    tags: ["2020", "Flutter", "MongoDB"],
    image: "/images/logo/GAIMS2.png",
    links: [{ type: "demo", url: "" }],
    accentColor: "bg-red-700",
  },
  {
    title: "SME Digital",
    description:
      "SME Digital is a software solution that provides an opportunity for Small and Medium-sized Enterprises to leverage on modern data technology solutions to manage and grow their businesses.",
    tags: ["2020", "Flutter", "MongoDB"],
    image: "/images/logo/SMEDIGITAL.png",
    links: [{ type: "demo", url: "https://smedigitalgh.com/" }],
    accentColor: "bg-red-700",
  },

  {
    title: "Green Ghana Tracker App",
    description:
      "By combining social networking, tree monitoring, and educational elements, the app provides a powerful platform for users to contribute, learn, and inspire positive change in Ghana's ecosystem.",
    tags: ["2021", "React", "Nest"],
    image: "/images/logo/GreenGhanaTrackerGrid.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "bg-red-700",
  },
  {
    title: "VirtualSoft ID",
    description:
      "VirtualSoft ID provides an opportunity for businesses to leverage on modern data technology solutions to speed up their processes.",
    tags: ["2020", "React", "Nest"],
    image: "/images/logo/virtualsoftid.png",
    links: [{ type: "demo", url: "https://vsid.bigdataghana.com" }],
    accentColor: "bg-red-700",
  },

  {
    title: "BigData Ghana Catalog",
    description:
      "The BDG catalog is an initiative in line with BigData Ghana Limited's vision to provide a credible data backbone for accelerated development in Africa.",
    tags: ["2020", "React", "Nest"],
    image: "/images/logo/BDGCatalog.png",
    links: [{ type: "demo", url: "https://catalog.bigdataghana.com" }],
    accentColor: "bg-red-700",
  },
];

const clientProjects = [
  {
    title: "Electoral Commission App",
    description:
      "The EC app was designed to help address Limited Data Accessibility, Old and Inconsistent Information on Results, Inconsistent Information on Polling Stations, Data security, and Complexity during elections",
    tags: ["2020", "React", "Nest"],
    image: "/images/logo/ECapp.png",
    links: [{ type: "demo", url: "https://ecdata.bigdataghana.com/" }],
    accentColor: "bg-red-700",
  },
  {
    title: "Green Ghana Tracker App",
    description:
      "By combining social networking, tree monitoring, and educational elements, the app provides a powerful platform for users to contribute, learn, and inspire positive change in Ghana's ecosystem.",
    tags: ["2021", "React", "Nest"],
    image: "/images/logo/GreenGhanaTrackerGrid.png",
    links: [{ type: "demo", url: "#" }],
    accentColor: "bg-red-700",
  },

  {
    title: "NFMS",
    description:
      "A platform developed to provide spatially explicit data, translating low-level spatial data into high-level, easy-to-understand-and-manipulate data for stakeholders.",
    tags: ["2020", "React", "Nest"],
    image: "/images/logo/NFMS.png",
    links: [{ type: "demo", url: "https://nfmsgh.bigdataghana.com" }],
    accentColor: "bg-red-700",
  },

  {
    title: "Visualise My Parliament",
    description:
      "The Visualise My Parliament project was conceived out of the need to further strengthen and extend data utilization among Members of parliament, Parliamentary staff, and the general public and other stakeholders.",
    tags: ["2021", "React", "Nest"],
    image: "/images/logo/virtualsoftid.png",
    links: [{ type: "demo", url: "https://parliament.bigdataghana.com/" }],
    accentColor: "bg-red-700",
  },
];

export default function ProjectsCard() {
  return (
    <section className="bg-slate-200 px-4 py-24 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-4xl font-light text-gray-900 dark:text-white">
            Our <span className="font-medium text-red-600">Products</span>
          </h2>
          <div className="mx-auto h-0.5 w-24 bg-red-600" />
        </motion.div>

        {/* Projects Grid */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-4xl font-light text-gray-900 dark:text-white">
            Client <span className="font-medium text-red-600">Solutions</span>
          </h2>
          <div className="mx-auto h-0.5 w-24 bg-red-600" />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clientProjects.map((clientProject, index) => (
            <ClientProjectCard
              key={index}
              clientProject={clientProject}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image with overlay */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div
          className={`absolute right-4 top-4 ${project.accentColor} rounded-full px-3 py-1 text-xs font-medium text-white shadow-md`}
        >
          Featured
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="bg-white p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
          {project.title}
        </h3>
        <p className="mb-6 text-gray-600">{project.description}</p>

        <div className="flex space-x-4">
          {project.links.map((link) => (
            <motion.a
              key={link.type}
              href={link.url}
              whileHover={{ y: -2 }}
              className="flex items-center text-sm font-medium text-red-600 hover:text-red-800"
            >
              {link.type === "demo" && <FiExternalLink className="mr-1" />}
              {link.type === "code" && <FiGithub className="mr-1" />}
              {link.type === "case-study" && "Case Study"}
              {link.type === "whitepaper" && "Whitepaper"}
              {link.type === "demo" && "View Website"}
              {link.type === "code" && "View Code"}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Accent bar */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full ${project.accentColor}`}
      />
    </motion.div>
  );
}

function ClientProjectCard({ clientProject, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image with overlay */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={clientProject.image}
          alt={clientProject.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div
          className={`absolute right-4 top-4 ${clientProject.accentColor} rounded-full px-3 py-1 text-xs font-medium text-white shadow-md`}
        >
          Featured
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="bg-white p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {clientProject.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
          {clientProject.title}
        </h3>
        <p className="mb-6 text-gray-600">{clientProject.description}</p>

        <div className="flex space-x-4">
          {clientProject.links.map((link) => (
            <motion.a
              key={link.type}
              href={link.url}
              whileHover={{ y: -2 }}
              className="flex items-center text-sm font-medium text-red-600 hover:text-red-800"
            >
              {link.type === "demo" && <FiExternalLink className="mr-1" />}
              {link.type === "code" && <FiGithub className="mr-1" />}
              {link.type === "case-study" && "Case Study"}
              {link.type === "whitepaper" && "Whitepaper"}
              {link.type === "demo" && "View Website"}
              {link.type === "code" && "View Code"}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Accent bar */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full ${clientProject.accentColor}`}
      />
    </motion.div>
  );
}
