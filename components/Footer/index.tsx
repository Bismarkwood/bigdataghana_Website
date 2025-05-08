"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-[url('/images/logo/footer.jpg')] dark:border-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10 lg:py-10">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-full lg:w-1/4" // Changed from w-1/2 to w-full on mobile
              >
                <Link href="/" className="relative block h-[80px] w-[110px]">
                  <Image
                    src="/images/logo/logo1.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>

                <p className="mb-10 mt-5 text-justify text-gray-400">
                  Inspired Innovation for development
                </p>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <ul className="flex items-center gap-5">
                    <li>
                      <Link
                        href="https://www.facebook.com/Royalkingdomestate"
                        aria-label="Facebook"
                        target="blank"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-red-600"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1499)">
                            <path
                              d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1499">
                              <rect width="24" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/RoyalKingdomEst"
                        aria-label="Twitter"
                        target="blank"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-red-600"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            clipPath="url(#clip0_48_1502)"
                            stroke="#D1D8E0 "
                            strokeWidth="1.5"
                          >
                            <path d="M16.82 20.768L3.753 3.968A.6.6 0 0 1 4.227 3h2.48a.6.6 0 0 1 .473.232l13.067 16.8a.6.6 0 0 1-.474.968h-2.48a.6.6 0 0 1-.473-.232Z" />
                            <path strokeLinecap="round" d="M20 3L4 21" />
                          </g>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/royalkingdomestate/"
                        aria-label="linkedIn"
                        target="blank"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-red-600"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1505)">
                            <path
                              d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1505">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/royalkingdomestate/?hl=en"
                        aria-label="Instagram"
                        target="blank"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-red-600"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.9 4.9 0 011.777 1.153 4.9 4.9 0 011.153 1.777c.163.458.349 1.258.403 2.428.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.9 4.9 0 01-1.153 1.777 4.9 4.9 0 01-1.777 1.153c-.458.163-1.258.349-2.428.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.9 4.9 0 01-1.777-1.153 4.9 4.9 0 01-1.153-1.777c-.163-.458-.349-1.258-.403-2.428C2.212 15.784 2.2 15.4 2.2 12.2s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428A4.9 4.9 0 013.826 3.145a4.9 4.9 0 011.777-1.153c.458-.163 1.258-.349 2.428-.403C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.012 7.053.07 5.773.128 4.775.332 4.004.602a7.06 7.06 0 00-2.59 1.654A7.06 7.06 0 00.602 4.004C.332 4.775.128 5.773.07 7.053.012 8.332 0 8.735 0 12s.012 3.668.07 4.947c.058 1.28.262 2.278.532 3.049a7.06 7.06 0 001.654 2.59 7.06 7.06 0 002.59 1.654c.771.27 1.77.474 3.049.532C8.332 23.988 8.735 24 12 24s3.668-.012 4.947-.07c1.28-.058 2.278-.262 3.049-.532a7.06 7.06 0 002.59-1.654 7.06 7.06 0 001.654-2.59c.27-.771.474-1.77.532-3.049.058-1.28.07-1.683.07-4.947s-.012-3.668-.07-4.947c-.058-1.28-.262-2.278-.532-3.049a7.06 7.06 0 00-1.654-2.59A7.06 7.06 0 0019.996.602C19.225.332 18.227.128 16.947.07 15.668.012 15.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.918a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/@RoyalKingdomEstate"
                        aria-label="Youtube"
                        target="blank"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-red-600"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.498 6.186c-.279-1.04-1.095-1.857-2.134-2.136C19.354 3.5 12 3.5 12 3.5s-7.354 0-9.364.55c-1.04.28-1.856 1.096-2.135 2.136C0.95 8.197 0.95 12 0.95 12s0 3.803.55 5.814c.28 1.04 1.096 1.856 2.135 2.135 2.01.551 9.364.551 9.364.551s7.354 0 9.364-.55c1.04-.28 1.856-1.096 2.135-2.135.55-2.011.55-5.814.55-5.814s0-3.803-.55-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-full md:w-auto" // Added w-full for mobile
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-white dark:text-white">
                    Explore
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/about"
                        className="hover:ttext-red-600 mb-3 inline-block text-gray-400 hover:text-red-600"
                      >
                        Who We Are
                      </a>
                    </li>
                    <li>
                      <a
                        href="/team"
                        className="mb-3 inline-block text-gray-400 hover:text-red-600"
                      >
                        Our Team
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects"
                        className="mb-3 inline-block text-gray-400 hover:text-red-600"
                      >
                        Projects
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-full md:w-auto" // Added w-full for mobile
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-white dark:text-white">
                    Services
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/geospatialServices"
                        className="mb-3 inline-block text-gray-400 hover:text-red-600"
                      >
                        Geospatial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cloudServices"
                        className="mb-3 inline-block text-gray-400 hover:text-red-600"
                      >
                        Cloud Computing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dataAIServices"
                        className="mb-3 inline-block text-gray-400 hover:text-red-600"
                      >
                        Data Analytics and AI
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-full md:w-auto" // Added w-full for mobile
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-white dark:text-white">
                    Contact
                  </h4>
                  <p className="mb-4 w-full text-gray-400 md:w-[90%]">
                    {" "}
                    {/* Adjusted width for mobile */}
                    No. 3 Blewusi Rd, <br /> Airport Residential, Accra Ghana.{" "}
                    <br />
                    GA-117-2050 <br />
                    <br />
                    info@bigdataghana.com <br /> +233 54 388 4816
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className=" items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top px-4 text-center text-gray-400" // Added text-center and padding for mobile
            >
              <p>&copy; Copyright by bigdataghana.com </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
