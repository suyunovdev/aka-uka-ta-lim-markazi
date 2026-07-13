"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Biz haqimizda", href: "#about" },
  { label: "Fanlar", href: "#subjects" },
  { label: "Ustozlar", href: "#teachers" },
  { label: "Natijalar", href: "#results" },
  { label: "Kontaktlar", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // OS dark mode preferenceni tekshirish
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/images/logo/Aka-uka_Logo_horizontal.png"
            alt="Aka-Uka Ta'lim Markazi"
            width={160}
            height={45}
            className="h-10 w-auto dark:hidden"
            priority
          />
          <Image
            src="/images/logo/Aka-uka_Logo_horizontal_white.png"
            alt="Aka-Uka Ta'lim Markazi"
            width={160}
            height={45}
            className="h-10 w-auto hidden dark:block"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-800 dark:text-slate-300 hover:text-primary-500 dark:hover:text-secondary-400 font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 dark:bg-secondary-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-primary-50 dark:bg-primary-900/40 hover:bg-primary-100 dark:hover:bg-primary-800/40 transition-colors cursor-pointer"
            aria-label="Rejimni o'zgartirish"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-accent-400" />
            ) : (
              <Moon className="w-5 h-5 text-primary-500" />
            )}
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl gradient-bg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5"
          >
            Murojaat qilish
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-primary-50 dark:bg-primary-900/40 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-primary-700 dark:text-white" /> : <Menu className="w-6 h-6 text-primary-700 dark:text-white" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden glass-card mx-4 mt-2 p-4 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-primary-800 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-5 h-5 text-accent-400" /> : <Moon className="w-5 h-5 text-primary-500" />}
              <span className="text-primary-800 dark:text-slate-200">{darkMode ? "Yorug' rejim" : "Tungi rejim"}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl gradient-bg text-white font-semibold text-center"
            >
              Murojaat qilish
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
