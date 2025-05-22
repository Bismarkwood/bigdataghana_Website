// components/ContactWidget.js
"use client";
import { useState } from "react";

export default function FloatCall() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("whatsapp");
  const [message, setMessage] = useState("");

  // Contact information
  const phoneNumber = "+233543884816";

  const initiateCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-50 right-0 z-50">
      {isOpen ? (
        <div className="w-80 overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-btndark p-4 text-white">
            <h3 className="font-bold">Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close contact widget"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-btndark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-lg font-medium">{phoneNumber}</span>
              </div>
              <button
                onClick={initiateCall}
                className="flex w-full items-center justify-center gap-2 rounded bg-btndark py-2 text-white hover:bg-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center bg-black  shadow-lg transition-all hover:bg-btndark"
          aria-label="Open contact widget"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M14.031 11.852c-.428-.539-1.123-1.32-1.718-1.394c-.362-.045-.778.255-1.188.538c-.08.04-.698.408-.773.43c-.396.113-1.241.146-1.752-.32c-.492-.45-1.27-1.283-1.898-2.046c-.6-.786-1.229-1.731-1.551-2.311c-.336-.601-.094-1.396.114-1.746c.038-.063.498-.536.601-.646l.015.018c.381-.32.78-.645.825-.997c.074-.586-.525-1.439-.953-1.979C5.325.858 4.662-.089 3.759.045c-.34.05-.633.169-.922.34L2.829.376l-.048.037l-.025.013l.003.004c-.166.128-.64.482-.694.53c-.586.521-1.468 1.748-.786 3.955c.506 1.64 1.585 3.566 3.055 5.514l-.008.007c.072.094.146.179.221.27q.104.14.211.277l.01-.007c1.56 1.879 3.196 3.381 4.689 4.267c2.01 1.192 3.439.655 4.099.228c.062-.041.534-.408.694-.529l.004.004l.018-.02l.043-.033l-.006-.008c.242-.234.436-.484.57-.799c.351-.829-.42-1.693-.848-2.234"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
