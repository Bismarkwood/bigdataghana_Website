"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiPrinter,
  FiLink,
  FiCheck,
  FiFileText,
  FiLock,
  FiHelpCircle,
  FiChevronRight,
  FiShield,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

interface PrivacySection {
  id: string;
  title: string;
  plainEnglish: string;
  legalText: string;
}

const privacyData: PrivacySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    plainEnglish: "We care about protecting your privacy. This policy explains how we collect, use, and secure your personal information when you interact with BigData Ghana.",
    legalText: "At BigData Ghana Limited (\"BigData Ghana\", \"we\", \"us\", or \"our\"), we respect your privacy and are committed to protecting the personal data we process. This Privacy Policy details our practices concerning the collection, usage, storage, and protection of information obtained through our website, software, APIs, mobile applications, and client platforms.",
  },
  {
    id: "data-collection",
    title: "2. Data We Collect",
    plainEnglish: "We collect information you give us directly (like your name, email, and organization) plus technical data like your IP address, browser type, and system logs when you use our tools.",
    legalText: "We collect information that you directly provide (e.g. account registration, newsletter signups, billing details, and support inquiries) including your name, email address, phone number, and organization. Additionally, we automatically collect telemetry and diagnostic data, including Internet Protocol (IP) addresses, browser characteristics, device operating systems, and usage statistics.",
  },
  {
    id: "use-of-data",
    title: "3. Use of Information",
    plainEnglish: "We use your data to run our services, process billing, improve our data models, and send you security alerts and updates.",
    legalText: "Your personal data is used to deliver, maintain, and optimize our services; handle transactional billing and account management; improve our data models, mapping accuracy, and AI platforms; respond to customer support requests; and communicate product releases, security updates, or promotional materials in accordance with your preferences.",
  },
  {
    id: "security-retention",
    title: "4. Data Protection & Security",
    plainEnglish: "We encrypt your data and store it securely. We only keep it for as long as necessary to run our service or comply with Ghanaian regulations.",
    legalText: "BigData Ghana implements industry-standard administrative, physical, and technical safeguards (such as SSL/TLS encryption, secure database partitioning, and role-based access control policies) to prevent unauthorized access or disclosure of your information. We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or to comply with statutory legal requirements under the Data Protection Act of Ghana.",
  },
  {
    id: "third-party-sharing",
    title: "5. Third-Party Sharing",
    plainEnglish: "We never sell your data. We only share it with trusted vendors who help us run our service (like hosting or email providers) or if required by law.",
    legalText: "We do not sell, rent, or lease your personal information to third parties. We may share data with trusted service providers who operate on our behalf (e.g., cloud hosts, payment processors, email gateways) under strict non-disclosure terms. We may also disclose data if legally required by subpoena, court order, or national regulatory authorities.",
  },
  {
    id: "user-rights",
    title: "6. Your Rights & Choices",
    plainEnglish: "You own your data. You can ask to view, correct, update, limit, or completely delete your personal information at any time.",
    legalText: "Under the Data Protection Act of Ghana and other applicable global regulations, you have the right to request access to the personal data we hold about you, request corrections to inaccurate records, object to certain processing activities, or demand the deletion of your account and associated personal data. Contact us to exercise these rights.",
  },
];

export default function PrivacyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const filteredPrivacy = privacyData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.plainEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.legalText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "/legal/privacy");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12">
      {/* Header Area */}
      <header className="border-b border-gray-100 pb-8 dark:border-gray-800 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 dark:bg-red-950/20 dark:text-red-500 mb-3">
            <FiShield className="h-3.5 w-3.5" />
            Security & Privacy
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: May 19, 2026 • Version 2.0
          </p>
        </div>

        {/* Share & Print Utility buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:text-red-600 dark:border-gray-850 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            {copied ? (
              <>
                <FiCheck className="h-3.5 w-3.5 text-green-600 dark:text-green-500" />
                Copied Link
              </>
            ) : (
              <>
                <FiLink className="h-3.5 w-3.5" />
                Copy Link
              </>
            )}
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:text-red-600 dark:border-gray-200/10 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <FiPrinter className="h-3.5 w-3.5" />
            Print Page
          </button>
        </div>
      </header>

      {/* Search Input */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center pr-3">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search privacy clauses (e.g. sharing, collection, security)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-red-600 focus:ring-1 focus:ring-red-600 dark:border-gray-800 dark:bg-gray-950 dark:text-white"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-red-600 transition-colors"
          >
            Reset Search
          </button>
        )}
      </div>

      {/* Overview & ToC Quick Links */}
      {filteredPrivacy.length > 0 && !searchQuery && (
        <section className="rounded-xl border border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800/50 dark:bg-gray-900/30">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            Table of Contents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {privacyData.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center justify-between rounded-lg bg-white px-4 py-3 text-xs font-semibold text-gray-700 shadow-sm transition-all hover:bg-red-50 hover:text-red-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-red-500"
              >
                <span className="truncate">{section.title}</span>
                <FiChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Privacy Clauses List */}
      <div className="space-y-10">
        <AnimatePresence mode="popLayout">
          {filteredPrivacy.length > 0 ? (
            filteredPrivacy.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="scroll-mt-24 space-y-4 border-b border-gray-50 pb-10 last:border-0 dark:border-gray-950"
              >
                <h2 className="text-2xl font-bold text-gray-950 dark:text-white group flex items-center gap-2">
                  <a href={`#${section.id}`} className="hover:text-red-600 transition-colors">
                    {section.title}
                  </a>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Legal prose */}
                  <div className="lg:col-span-7">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {section.legalText}
                    </p>
                  </div>

                  {/* Plain English Summary Box */}
                  <div className="lg:col-span-5 rounded-xl border border-dashed border-red-200/60 bg-red-50/20 p-5 dark:border-red-900/30 dark:bg-red-950/5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <FiLock className="h-3.5 w-3.5" />
                      In Plain English
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                      {section.plainEnglish}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl"
            >
              <FiHelpCircle className="h-10 w-10 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                No matching privacy clauses found
              </h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
                We couldn't find any section matching "{searchQuery}". Try searching for other terms or reset the search.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="rounded-full bg-red-600 px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-red-700"
              >
                Reset Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer / Contact Block */}
      <section className="space-y-4 border-t border-gray-100 pt-10 dark:border-gray-850">
        <div className="flex items-center gap-2">
          <FiHelpCircle className="h-5 w-5 text-red-600" />
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white">
            Privacy Operations Contact
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          For any data protection inquiries, access requests, or privacy compliance questions, please contact our designated Data Protection Officer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mt-4">
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 dark:border-gray-800/50 dark:bg-gray-900/30 flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-500">
              <FiMail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Privacy Email
              </h4>
              <a
                href="mailto:privacy@bigdataghana.com"
                className="text-sm font-bold text-red-600 hover:underline"
              >
                privacy@bigdataghana.com
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 dark:border-gray-800/50 dark:bg-gray-900/30 flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-500">
              <FiMapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Data Controller
              </h4>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                BigData Ghana Limited<br />No. 4 Blewusi Rd, Airport Residential,<br />Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
