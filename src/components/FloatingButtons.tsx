"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { siteConfig } from "@/lib/data";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-primary-500/90 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Yuqoriga qaytish"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Telegram */}
      <a
        href={siteConfig.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#2AABEE] hover:bg-[#229ED9] text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group relative"
        aria-label="Telegram orqali yozish"
      >
        <FaTelegram className="w-7 h-7" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#2AABEE]/40 animate-ping" />
      </a>
    </div>
  );
}
