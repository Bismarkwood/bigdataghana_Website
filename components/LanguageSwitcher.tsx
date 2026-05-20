"use client";

import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

const GOOGLE_COOKIE = "/auto/";

function setTranslationCookie(targetLanguage: "en" | "fr") {
  const cookieValue = `${GOOGLE_COOKIE}${targetLanguage}`;
  const expires = "expires=Fri, 31 Dec 9999 23:59:59 GMT";
  document.cookie = `googtrans=${cookieValue};${expires};path=/`;
  document.cookie = `googtrans=${cookieValue};${expires};domain=${window.location.hostname};path=/`;
}

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<"en" | "fr">("en");

  const languageOptions = useMemo(
    () => [
      { code: "en" as const, label: "English", short: "EN", flag: "🇬🇧" },
      { code: "fr" as const, label: "Francais", short: "FR", flag: "🇫🇷" },
    ],
    [],
  );

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };

    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    const cookieValue = match?.[1];
    if (cookieValue?.endsWith("/fr")) {
      setActiveLanguage("fr");
    } else {
      setActiveLanguage("en");
    }
  }, []);

  const switchLanguage = (target: "en" | "fr") => {
    setActiveLanguage(target);
    setTranslationCookie(target);
    window.location.reload();
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-700/80 bg-black/40 p-1 backdrop-blur-sm">
      {languageOptions.map((option) => {
        const isActive = activeLanguage === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => switchLanguage(option.code)}
            aria-label={`Switch language to ${option.label}`}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
              isActive
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="text-sm leading-none">{option.flag}</span>
            <span className="hidden sm:inline">{option.label}</span>
            <span className="sm:hidden">{option.short}</span>
          </button>
        );
      })}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
