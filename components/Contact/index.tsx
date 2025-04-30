"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";

const Contact = () => {
  // const [hasMounted, setHasMounted] = React.useState(false);
  // React.useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    // Basic client-side validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!recaptchaToken) newErrors.recaptcha = "Please complete the reCAPTCHA";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || { general: "Failed to submit form" });
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
      setRecaptchaToken("");
    } catch (error) {
      setErrors({ general: "Network error. Please try again." });
      setStatus("error");
    }
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-8">
        <div className="relative mx-auto mt-10 max-w-c-1390 p-4 sm:p-6 lg:p-8">
          {/* Contact Details Section - Now on Top */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12"
          >
            {/* Contact Card 1 - Location */}
            <div className="rounded-xl border-l-4 border-primary bg-white p-8 shadow-lg dark:bg-black dark:shadow-none">
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h3 className="ml-3 text-xl font-semibold text-black dark:text-white">
                  Our Location
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                No. 3 Blewusi Rd, Airport Residential, Accra Ghana. <br />
                GA-117-2050,
              </p>
            </div>

            {/* Contact Card 2 - Email */}
            <div className="rounded-xl border-l-4 border-primary bg-white p-8 shadow-lg dark:bg-black dark:shadow-none">
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <h3 className="ml-3 text-xl font-semibold text-black dark:text-white">
                  Email Us
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="mailto:info@royalkingdomestate.com"
                  className="transition-colors hover:text-primary"
                >
                  info@bigdataghana.com
                </a>
                <br />
              </p>
            </div>

            {/* Contact Card 3 - Phone */}
            <div className="rounded-xl border-l-4 border-primary bg-white p-8 shadow-lg dark:bg-black dark:shadow-none">
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h3 className="ml-3 text-xl font-semibold text-black dark:text-white">
                  Call Us
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="tel:+233557555909"
                  className="transition-colors hover:text-primary"
                >
                  +233 54 388 4816
                </a>
                <br />
              </p>
            </div>
          </motion.div>

          {/* Map and Form Section */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Contact Form - Now on the Left */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full rounded-xl bg-white p-8 shadow-lg dark:border dark:border-strokedark dark:bg-black lg:w-1/2"
            >
              <h2 className="mb-8 text-3xl font-semibold text-primary dark:text-white">
                Send us a <span className="text-primary">message</span>
              </h2>

              {status === "success" && (
                <div className="mb-4 rounded bg-green-100 p-4 text-green-700">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 rounded bg-red-100 p-4 text-red-700">
                  {errors.general || "Please fix the errors below"}
                  {Object.entries(errors).map(
                    ([field, message]) =>
                      field !== "general" && <p key={field}>{message}</p>,
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-strokedark"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-strokedark"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-strokedark"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+233 XX XXX XXXX"
                      className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-strokedark"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-strokedark"
                    required
                  ></textarea>
                </div>

                {/* <div className="mb-6">
                  <ReCAPTCHA
                    sitekey={"6Lc-HCcrAAAAABT54ryPAiPOGwqAGh5485UjriIL"}
                    onChange={(token) => setRecaptchaToken(token || "")}
                    onExpired={() => setRecaptchaToken("")}
                  />
                  {errors.recaptcha && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.recaptcha}
                    </p>
                  )}
                </div> */}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                  <svg
                    className="ml-2 inline h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </form>
            </motion.div>

            {/* Map Section - Now on the Right */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="h-full overflow-hidden rounded-xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6850455589297!2d-0.1833372!3d5.6134445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b0617c0c3bf%3A0xa1563bc3d0afa474!2s3%20Blewusi%20Rd%2C%20Accra!5e0!3m2!1sen!2sgh!4v1746017821465!5m2!1sen!2sgh"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps location of Royal Kingdom Estate"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute left-0 top-0 -z-10 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-10 h-full w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
