"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMessageSquare,
  FiX,
  FiSend,
  FiCpu,
  FiThumbsUp,
  FiThumbsDown,
  FiRotateCcw,
  FiInfo,
} from "react-icons/fi";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  rating?: "up" | "down";
}

const quickPrompts = [
  { label: "What services do you offer?", text: "What services do you offer?" },
  { label: "Tell me about MaizeYield", text: "Tell me about your MaizeYield platform." },
  { label: "Where is your office?", text: "Where is your office located?" },
  { label: "How can I contact sales?", text: "How can I contact sales?" },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I'm BigBot, the AI Assistant for BigData Ghana. How can I help you today? You can ask me about our services, core products like MaizeYield or SendlineSMS, or how to contact our team.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Show welcome tooltip after a brief delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  const getBotResponse = (userText: string): string => {
    const text = userText.toLowerCase();
    
    if (text.includes("service") || text.includes("offer") || text.includes("do you do")) {
      return "We offer high-performance solutions across three main pillars:\n1. **Geospatial Services**: Remote sensing, custom GIS maps, and environmental monitoring.\n2. **Cloud Computing**: Resilient infrastructure architecture, migration, and optimization.\n3. **Data Analytics & AI**: Custom database integrations, forecasting models, and LLM implementations.";
    }
    
    if (text.includes("maizeyield") || text.includes("agriculture") || text.includes("crop")) {
      return "MaizeYield is our advanced geospatial agricultural forecasting platform. It combines Earth Observation data (satellite imagery) and AI to predict maize crop yields, helping farmers and stakeholders optimize agricultural productivity and plan supply chains.";
    }
    
    if (text.includes("sendline") || text.includes("sms") || text.includes("message") || text.includes("messaging")) {
      return "SendlineSMS is our enterprise bulk SMS messaging solution. It provides businesses with a reliable, API-driven SMS gateway to reach customers with instant notifications, alerts, and marketing campaigns.";
    }
    
    if (text.includes("bigconnect") || text.includes("integration") || text.includes("platform")) {
      return "BigConnect AI is our enterprise-grade data integration platform. It connects disparate internal data sources, APIs, and databases to deliver unified, real-time business intelligence and data pipelines.";
    }

    if (text.includes("virtualsoft") || text.includes("identity") || text.includes("id")) {
      return "VirtualSoft ID is our digital identity solution designed to accelerate business onboarding processes and verification using secure digital identification systems.";
    }
    
    if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("call") || text.includes("reach")) {
      return "You can get in touch with our team via:\n• **Email**: info@bigdataghana.com\n• **Phone**: +233 54 388 4816\n• **Location**: No. 4 Blewusi Rd, Airport Residential, Accra, Ghana.";
    }
    
    if (text.includes("location") || text.includes("office") || text.includes("address") || text.includes("where")) {
      return "Our office is located at **No. 4 Blewusi Rd, Airport Residential, Accra, Ghana**. Stop by or request a consultation via our contact page!";
    }

    if (text.includes("team") || text.includes("bismark") || text.includes("people")) {
      return "BigData Ghana is led by Bismark and a team of seasoned software engineers, GIS analysts, and data scientists committed to driving innovative technology solutions across West Africa.";
    }
    
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
      return "Hello! How can I help you today? Ask me about our client solutions, custom software, or mapping applications.";
    }

    return "I'm here to help you learn about BigData Ghana! Feel free to ask about our core platforms (MaizeYield, SendlineSMS, BigConnect AI), services (Geospatial, Cloud, Data & AI), or how to contact our team.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking delay, then streaming typing effect
    setTimeout(() => {
      const responseText = getBotResponse(text);
      setIsTyping(false);
      
      const botMessage: Message = {
        id: Math.random().toString(36).substring(7),
        sender: "bot",
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1200);
  };

  const handleRating = (messageId: string, rating: "up" | "down") => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, rating } : msg))
    );
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Chat history cleared. How can I help you now?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[999] font-sans">
      {/* Welcome Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 left-0 mb-2 w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <FiX className="h-3 w-3" />
              </button>
              <div className="flex gap-3 pr-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-500">
                  <FiCpu className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-950 dark:text-white">
                    Need assistance?
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                    Hi! Ask me anything about our GIS, cloud, and data solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Tooltip triangle */}
            <div className="absolute -bottom-2 left-4 h-4 w-4 rotate-45 border-b border-r border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Bubble Button */}
      <motion.button
        onClick={handleOpenToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 relative"
        aria-label="Toggle chat assistant"
      >
        {isOpen ? (
          <FiX className="h-6 w-6" />
        ) : (
          <>
            <FiMessageSquare className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-black" />
          </>
        )}
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 left-0 w-[350px] sm:w-[380px] h-[520px] rounded-2xl border border-gray-100 bg-white shadow-2xl flex flex-col overflow-hidden dark:border-gray-800 dark:bg-gray-950"
          >
            {/* Header */}
            <div className="bg-red-600 px-5 py-4 text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                  <FiCpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">BigBot AI Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/80 font-medium">Online • Active</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="rounded-lg p-1.5 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  <FiRotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  <FiX className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50 dark:bg-gray-900/10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  } space-y-1 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto" : "mr-auto"
                  }`}
                >
                  {/* Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-red-600 text-white rounded-tr-none"
                        : "bg-white border border-gray-100 text-gray-800 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200 rounded-tl-none shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Message Actions & Timestamp */}
                  <div className="flex items-center gap-2 px-1 text-[9px] text-gray-400 dark:text-gray-500">
                    <span>
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {msg.sender === "bot" && msg.id !== "welcome" && (
                      <div className="flex items-center gap-1.5 ml-2 border-l border-gray-200 dark:border-gray-800 pl-2">
                        <button
                          onClick={() => handleRating(msg.id, "up")}
                          className={`hover:text-red-500 transition-colors ${
                            msg.rating === "up" ? "text-red-600 font-bold" : ""
                          }`}
                        >
                          <FiThumbsUp className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleRating(msg.id, "down")}
                          className={`hover:text-red-500 transition-colors ${
                            msg.rating === "down" ? "text-red-600 font-bold" : ""
                          }`}
                        >
                          <FiThumbsDown className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex flex-col items-start space-y-1 mr-auto max-w-[85%]">
                  <div className="rounded-2xl rounded-tl-none bg-white border border-gray-100 px-4 py-3 dark:bg-gray-900 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="px-5 py-3 bg-white dark:bg-gray-950 border-t border-gray-50 dark:border-gray-900/60">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1">
                  <FiInfo className="h-3.5 w-3.5 text-red-500" /> Suggested Questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt.label}
                      onClick={() => handleSend(prompt.text)}
                      className="rounded-lg bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 px-3 py-1.5 text-[10px] font-semibold text-gray-700 hover:text-red-600 transition-all dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-800 dark:text-gray-300 dark:hover:text-red-500"
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-4 bg-white border-t border-gray-100 dark:bg-gray-950 dark:border-gray-900 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask me a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
                className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-red-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-md transition-all hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
