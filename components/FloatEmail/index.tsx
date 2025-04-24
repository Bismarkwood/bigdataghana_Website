"use client";
import { useState } from "react";

export default function FloatEmail() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const email = "info@royalkingdomestate.com";

  const sendEmail = () => {
    window.open(`mailto:${email}?body=${encodeURIComponent(message)}`, "_self");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <div className="fixed bottom-40 right-0 z-50">
      {isOpen ? (
        <div className="w-80 overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-600 p-4 text-white">
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
            <>
              <textarea
                className="mb-3 w-full rounded border p-3"
                rows={4}
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={sendEmail}
                className="flex w-full items-center justify-center gap-2 rounded bg-blue-700  py-2 text-white hover:bg-primary"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Email
              </button>
            </>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center bg-orange-500 shadow-lg transition-all hover:bg-orange-700"
          aria-label="Open contact widget"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 432 384"
          >
            <path
              fill="#ffffff"
              d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 86V64L213 171L43 64v43l170 106z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
