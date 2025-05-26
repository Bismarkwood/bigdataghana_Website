"use client";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

const team = [
  {
    id: 0,
    name: "Henry Kwamena Baffoe",
    role: "Managing Director",
    bio: "",
    img: "/images/team/baffour.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/henry-kwamena-baffoe-b35324100/",
    },
  },
  {
    id: 1,
    name: "Michael Patrick",
    role: "Data and AI Engineer",
    bio: "",
    img: "/images/team/michael.jpeg",
    social: { linkedin: "#" },
  },
  {
    id: 2,
    name: "Priscilla Fianu",
    role: "Cloud Infrastructure Administrator/ Data Protection Supervisor",
    bio: "",
    img: "/images/team/priscilla.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/priscilla-fianu-849b90227/",
    },
  },
  {
    id: 3,
    name: "Jaden Kodjo Miles",
    role: "Software Engineer",
    bio: "",
    img: "/images/team/jaden.jpeg",
    social: { linkedin: "www.linkedin.com/in/jaden-kodjo-miles" },
  },
  {
    id: 4,
    name: "Nanayaa Fordwour Agyakoma",
    role: "Finance/ Admin",
    bio: "",
    img: "/images/team/team.jpg",
    social: {
      linkedin:
        "https://www.linkedin.com/in/yaa-fordwour-4a052b194?trk=contact-info",
    },
  },

  {
    id: 5,
    name: "Andrews Azotwin Atibila",
    role: "AWS Cloud Infrastructure Assistant",
    bio: "",
    img: "/images/team/team.jpg",
    social: {
      linkedin:
        " https://www.linkedin.com/in/andrewsatibila?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },

  {
    id: 6,
    name: "Bismark Gyebi Duah",
    role: "Product Designer",
    bio: "",
    img: "/images/team/bismark.jpeg",
    social: {
      linkedin:
        "https://www.linkedin.com/in/bismark-gyebi-duah-393ba7250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },

  {
    id: 7,
    name: "Justin Nyantakyi",
    role: "GIS and Remote Sensing Lead",
    bio: "",
    img: "/images/team/justin.jpeg",
    social: { linkedin: "#" },
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
      <section className="mx-auto px-4 py-10  sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 "
        >
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
