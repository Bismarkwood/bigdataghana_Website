"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiPrinter,
  FiLink,
  FiCheck,
  FiFileText,
  FiBookOpen,
  FiHelpCircle,
  FiChevronRight,
  FiMapPin,
  FiMail,
} from "react-icons/fi";

interface TermSection {
  id: string;
  title: string;
  plainEnglish: string;
  legalText: string;
}

const termsData: TermSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    plainEnglish: "By using BigData Ghana's services, you agree to these rules. If you do not agree, please do not use our platform or APIs.",
    legalText: "Welcome to BigData Ghana Limited. By accessing or using our websites, software, databases, application programming interfaces (APIs), mobile applications, and other services, you agree to be bound by these Terms of Service, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our systems.",
  },
  {
    id: "services",
    title: "2. Description of Services",
    plainEnglish: "We build advanced geospatial maps, cloud infrastructure, and AI analytics tools. We might modify, pause, or update these services at any time.",
    legalText: "BigData Ghana provides cutting-edge geospatial intelligence, customized cloud infrastructure, and data analytics platforms. We continuously innovate to provide the best possible experience. You acknowledge and agree that the form and nature of the services may change from time to time without prior notice.",
  },
  {
    id: "accounts",
    title: "3. User Registration & Security",
    plainEnglish: "If you create an account, keep your password safe. You are responsible for everything that happens under your profile.",
    legalText: "To access certain features of our platforms, you may be required to register an account. You agree to provide accurate, truthful, and current information. You are solely responsible for maintaining the confidentiality of your credentials and password, and you accept responsibility for all activities that occur under your account.",
  },
  {
    id: "license",
    title: "4. Usage License & Restrictions",
    plainEnglish: "We grant you a temporary license to use our tools, but you cannot copy, modify, resell, or scrape our datasets without written permission.",
    legalText: "Permission is granted to temporarily access and use the software and datasets hosted by BigData Ghana for authorized business or personal purposes. Under this license, you may not: modify or copy the materials; use the materials for any commercial purpose without explicit licensing; attempt to decompile or reverse engineer any software; scrape or extract databases; or transfer the materials to another person or 'mirror' the materials on any other server.",
  },
  {
    id: "accuracy",
    title: "5. Geospatial & Data Accuracy",
    plainEnglish: "We provide high-quality data, but mapping and AI datasets are provided 'as-is'. We aren't responsible for decisions made solely based on this information.",
    legalText: "While BigData Ghana utilizes state-of-the-art remote sensing and data validation methodologies, all geographic information systems (GIS) data, satellite imagery, and analytics are provided on an 'as-is' and 'as-available' basis. We make no warranties, expressed or implied, regarding the absolute precision, completeness, or reliability of datasets for specific user applications.",
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    plainEnglish: "All designs, software, trademarks, and code belong to us. Please do not use them without our consent.",
    legalText: "The websites, service platforms, proprietary software, data visualization models, and all original content (excluding user-provided data) are and will remain the exclusive property of BigData Ghana Limited and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.",
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    plainEnglish: "We do our best, but we are not liable for direct or indirect losses, profits, or data corruption that might occur.",
    legalText: "In no event shall BigData Ghana Limited, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) our services.",
  },
  {
    id: "termination",
    title: "8. Termination of Service",
    plainEnglish: "We can suspend or close your account if you violate these terms or compromise security.",
    legalText: "We reserve the right to terminate or suspend your account and bar access to the services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of these Terms of Service.",
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    plainEnglish: "Any legal disputes will be handled under the laws of the Republic of Ghana.",
    legalText: "These Terms of Service, and any claim, dispute, or controversy arising out of or in connection with them, shall be governed by and construed in accordance with the laws of the Republic of Ghana, without giving effect to any choice of law or conflict of law provisions.",
  },
];

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const filteredTerms = termsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.plainEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.legalText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "/legal/terms");
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
            <FiBookOpen className="h-3.5 w-3.5" />
            Legal Agreement
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Terms of Service
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
          placeholder="Search legal clauses (e.g. liability, license, data)..."
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
      {filteredTerms.length > 0 && !searchQuery && (
        <section className="rounded-xl border border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800/50 dark:bg-gray-900/30">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            Table of Contents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {termsData.map((term) => (
              <a
                key={term.id}
                href={`#${term.id}`}
                className="group flex items-center justify-between rounded-lg bg-white px-4 py-3 text-xs font-semibold text-gray-700 shadow-sm transition-all hover:bg-red-50 hover:text-red-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-red-500"
              >
                <span className="truncate">{term.title}</span>
                <FiChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Terms list */}
      <div className="space-y-10">
        <AnimatePresence mode="popLayout">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((term, index) => (
              <motion.section
                key={term.id}
                id={term.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="scroll-mt-24 space-y-4 border-b border-gray-50 pb-10 last:border-0 dark:border-gray-950"
              >
                <h2 className="text-2xl font-bold text-gray-950 dark:text-white group flex items-center gap-2">
                  <a href={`#${term.id}`} className="hover:text-red-600 transition-colors">
                    {term.title}
                  </a>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Legal prose */}
                  <div className="lg:col-span-7">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {term.legalText}
                    </p>
                  </div>

                  {/* Plain English Summary Box */}
                  <div className="lg:col-span-5 rounded-xl border border-dashed border-red-200/60 bg-red-50/20 p-5 dark:border-red-900/30 dark:bg-red-950/5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                      <FiFileText className="h-3.5 w-3.5" />
                      In Plain English
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                      {term.plainEnglish}
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
                No matching legal clauses found
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

      {/* Footer / Questions Contact Info block */}
      <section className="space-y-4 border-t border-gray-100 pt-10 dark:border-gray-850">
        <div className="flex items-center gap-2">
          <FiHelpCircle className="h-5 w-5 text-red-600" />
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white">
            Have Questions About Our Terms?
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          If you are integrating our APIs, licensing datasets, or have general legal questions regarding our data policies, please reach out to our legal department.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mt-4">
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 dark:border-gray-800/50 dark:bg-gray-900/30 flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-500">
              <FiMail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Email Address
              </h4>
              <a
                href="mailto:info@bigdataghana.com"
                className="text-sm font-bold text-red-600 hover:underline"
              >
                info@bigdataghana.com
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 dark:border-gray-800/50 dark:bg-gray-900/30 flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-500">
              <FiMapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Office Location
              </h4>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                No. 4 Blewusi Rd, Airport Residential,<br />Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
