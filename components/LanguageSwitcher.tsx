"use client";

import { useEffect } from "react";

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
  }, []);

  const switchLanguage = (target: "en" | "fr") => {
    setTranslationCookie(target);
    window.location.reload();
  };

  return (
    <div className="mt-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
        Language
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => switchLanguage("en")}
          className="rounded border border-gray-600 px-3 py-1 text-xs font-semibold text-gray-300 transition-colors hover:border-red-600 hover:text-red-600"
        >
          English
        </button>
        <button
          type="button"
          onClick={() => switchLanguage("fr")}
          className="rounded border border-gray-600 px-3 py-1 text-xs font-semibold text-gray-300 transition-colors hover:border-red-600 hover:text-red-600"
        >
          Francais
        </button>
      </div>
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
