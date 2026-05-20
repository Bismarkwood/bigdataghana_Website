"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
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
    if (recaptchaSiteKey && !recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA";
    }

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

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
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

        {recaptchaSiteKey && (
          <div className="mb-6">
            <ReCAPTCHA
              sitekey={recaptchaSiteKey}
              onChange={(token) => setRecaptchaToken(token || "")}
              onExpired={() => setRecaptchaToken("")}
            />
            {errors.recaptcha && (
              <p className="mt-1 text-sm text-red-500">{errors.recaptcha}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-btndark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
    </>
  );
}
