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
    id: 4,
    name: "Nanayaa Fordwour Agyakoma",
    role: "Finance/ Admin",
    bio: "",
    img: "/images/team/nanayaa.jpeg",
    social: {
      linkedin:
        "https://www.linkedin.com/in/yaa-fordwour-4a052b194?trk=contact-info",
    },
  },



  {
    id: 6,
    name: "Bismark Gyebi Duah",
    role: "Product Designer",
    bio: "",
    img: "/images/team/bismark-new.jpeg",
    social: {
      linkedin:
        "https://www.linkedin.com/in/bismark-gyebi-duah-393ba7250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },

  {
    id: 8,
    name: "Nana Akua Afra Owusu-Addo",
    role: "Technical Writer (Earth Observation Desk)",
    bio: "",
    img: "/images/team/nana.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/nana-akua-afra-owusu-addo",
    },
  },

  {
    id: 10,
    name: "Steffel Amram Afriyie",
    role: "Earth Observation Desk Coordinator / International Business Developer",
    bio: "",
    img: "/images/team/amram-afriyie.png",
    social: {},
  },

  {
    id: 11,
    name: "Nancy Wayua",
    role: "Remote Sensing Analyst",
    bio: "",
    img: "/images/team/nancy-wayua.png",
    social: {
      linkedin: "https://www.linkedin.com/in/nancy-wayua-317905261",
    },
  },
  {
    id: 12,
    name: "Yaa Oparebea Acquah",
    role: "Financial Assistant",
    bio: "",
    img: "/images/team/yaa-oparebea-acquah.png",
    social: {
      linkedin: "https://www.linkedin.com/in/yaa-oparebea-acquah-368170331/",
    },
  },
  {
    id: 13,
    name: "Akwasi Darkwa Anto",
    role: "Data & AI Engineer",
    bio: "",
    img: "/images/team/akwasi-darkwa-anto.png",
    social: {
      linkedin: "https://www.linkedin.com/in/akwasi-anto",
    },
  },
  {
    id: 14,
    name: "Getrude ChiChi",
    role: "Cloud Support Engineer",
    bio: "",
    img: "/images/team/getrude-chichi.png",
    social: {},
  },
];

const TeamCard = ({ member }: { member: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative transition-all duration-500 hover:-translate-y-2"
  >
    {/* Image Container - Slightly shorter aspect ratio */}
    <div className="relative mb-5 overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg shadow-sm group-hover:shadow-xl group-hover:shadow-red-600/5 transition-all duration-500">
      <motion.img
        src={member.img}
        alt={member.name}
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        initial={{ scale: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>

    {/* Info Area - More compact */}
    <div className="space-y-2 px-2">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
        {member.role}
      </p>
      <h3 className="font-montserrat text-xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-red-600">
        {member.name}
      </h3>
      
      {/* LinkedIn Link - Minimalist */}
      {member.social?.linkedin && member.social.linkedin !== "#" && (
        <div className="pt-1">
          <motion.a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors"
          >
            Connect
            <FiLinkedin size={11} />
          </motion.a>
        </div>
      )}
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
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
