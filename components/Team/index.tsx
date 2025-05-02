"use client";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

const team = [
  {
    name: "Henry Kwamena Baffoe",
    role: "Managing Director",
    bio: "",
    img: "/images/logo/MrBaffoeGrid.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Philip Okoampah Kwaning",
    role: "Deputy Managing Director, Business Intelligence Analyst",
    bio: "",
    img: "/images/logo/MrOkoampahGrid.png",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Nana Yaa Fordwour",
    role: "Administrative Assistant",
    bio: "",
    img: "/images/logo/NanaYaaGrid.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Daniel Kumah",
    role: "Cloud Infrastructure Administrator",
    bio: "",
    img: "/images/logo/DannyGrid.png",
    social: { linkedin: "#", dribbble: "#" },
  },
];

const TeamCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-900"
  >
    <div className="relative h-80 overflow-hidden">
      <motion.img
        src={member.img}
        alt={member.name}
        className="h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>

    <div className="p-6">
      <motion.h3
        className="mb-1 text-2xl font-bold text-gray-900 dark:text-white"
        whileHover={{ color: "#b91c1c" }}
        transition={{ duration: 0.3 }}
      >
        {member.name}
      </motion.h3>
      <p className="mb-3 text-red-600">{member.role}</p>
      <p className="mb-4 text-gray-600">{member.bio}</p>

      <div className="flex space-x-4">
        {member.social.linkedin && (
          <motion.a
            href={member.social.linkedin}
            whileHover={{ y: -3 }}
            className="text-gray-500 hover:text-red-600"
          >
            <FiLinkedin size={20} />
          </motion.a>
        )}
        {member.social.twitter && (
          <motion.a
            href={member.social.twitter}
            whileHover={{ y: -3 }}
            className="text-gray-500 hover:text-red-600"
          >
            <FiTwitter size={20} />
          </motion.a>
        )}
        {member.social.github && (
          <motion.a
            href={member.social.github}
            whileHover={{ y: -3 }}
            className="text-gray-500 hover:text-red-600"
          >
            <FiGithub size={20} />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function TeamPage() {
  return (
    <div className="bg-gray-50 dark:bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden px-4 py-10 text-gray-900 dark:text-white sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-3xl font-bold md:text-6xl"
          >
            Meet The BDG Team
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-l max-w-xl opacity-90"
          >
            The brilliant minds transforming geospatial intelligence through
            innovation and expertise.
          </motion.p>
        </div>
      </motion.section>

      {/* Team Grid */}
      <section className="mx-auto max-w-7xl px-4 py-10  sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 "
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
