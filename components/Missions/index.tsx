import {
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function OurMission() {
  const missions = [
    {
      icon: <FaMobileAlt className="text-3xl text-red-600 dark:text-white" />,
      title: "Geospatial Business Intelligence",
      description: "Offering GBI mobile and web apps for business advantage",
      bg: "border-l-4 border-red-600 bg-gray-100 dark:bg-gray-900",
    },
    {
      icon: <FaDatabase className="text-3xl text-red-600 dark:text-white" />,
      title: "Premium Data Access",
      description: "Providing API access to high quality in-country datasets",
      bg: "border-l-4 border-red-600 bg-gray-100 dark:bg-gray-900",
    },
    {
      icon: <FaCloud className="text-3xl text-red-600 dark:text-white" />,
      title: "Cloud-IT & AI Solutions",
      description: "Supporting business growth with cutting-edge technology",
      bg: "border-l-4 border-red-600 bg-gray-100 dark:bg-gray-900",
    },
    {
      icon: (
        <FaChalkboardTeacher className="text-3xl text-red-600 dark:text-white" />
      ),
      title: "Knowledge Transfer",
      description: "Sharing expertise through tailor-made training programs",
      bg: "border-l-4 border-red-600 bg-gray-100 dark:bg-gray-900",
    },
  ];

  return (
    <section className="bg-white px-4 py-20 dark:bg-black ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-red-600 dark:text-white">
            What Drives Us
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
            The BDG Mission
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`${mission.bg} rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
            >
              <div className="mb-5 flex justify-center">{mission.icon}</div>
              <h3 className="mb-3 text-center text-xl font-bold text-gray-800 dark:text-white">
                {mission.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-white">
                {mission.description}
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-10 bg-red-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <button className="rounded-lg bg-red-600 px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-200">
            Learn About Our Approach
          </button>
        </div> */}
      </div>
    </section>
  );
}
