"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { certificates } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gradeOrder: Record<string, number> = { "A+": 0, A: 1, "B+": 2, B: 3 };

const sorted = [...certificates].sort(
  (a, b) => (gradeOrder[a.grade] ?? 9) - (gradeOrder[b.grade] ?? 9) || b.score - a.score
);

const gradeColors: Record<string, string> = {
  "A+": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/40 dark:text-yellow-300",
  A: "bg-accent-100 text-accent-700 dark:bg-accent-800/40 dark:text-accent-300",
  "B+": "bg-primary-100 text-primary-700 dark:bg-primary-800/40 dark:text-primary-300",
};

const ITEMS_PER_PAGE = 4;

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = sorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const scrollToSection = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    setSelectedCert(null);
    scrollToSection();
  }, [scrollToSection]);

  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (heading) {
      gsap.fromTo(heading, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: heading, start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.children;
    gsap.fromTo(cards,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
    );
  }, [currentPage]);

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section id="results" className="section-padding section-alt" ref={sectionRef}>
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-800/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4 border border-accent-200 dark:border-accent-700/50">
            Natijalar va Sertifikatlar
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            O&apos;quvchilarimiz natijalari
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            1000+ o&apos;quvchi sertifikat oldi! Milliy va xalqaro sertifikat natijalari.
          </p>
        </div>

        {/* Results Grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((cert, index) => (
            <div
              key={`${currentPage}-${index}`}
              className="glass-card p-5 hover-lift group cursor-pointer"
              onClick={() => setSelectedCert(index)}
            >
              <div className="relative mb-4 rounded-xl overflow-hidden aspect-[3/4] bg-primary-50 dark:bg-primary-900/30">
                <Image
                  src={cert.image}
                  alt={`${cert.name} sertifikati`}
                  fill
                  loading="lazy"
                  className="object-contain p-2 group-hover:scale-105 transition-transform"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold ${gradeColors[cert.grade] || gradeColors["B+"]}`}>
                  {cert.grade}
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-primary-900 dark:text-white text-sm mb-1">
                  {cert.name}
                </h4>
                <p className="text-secondary-600 dark:text-secondary-400 font-bold text-lg">
                  {cert.percentage !== null ? `${cert.percentage}%` : `${cert.score} ball`}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {cert.percentage !== null ? `Ball: ${cert.score} | ` : ""}{cert.subject}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl bg-white dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-800/40 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, i) =>
                page === "..." ? (
                  <span key={`dots-${i}`} className="px-2 text-slate-400 dark:text-slate-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`min-w-[40px] h-10 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                      currentPage === page
                        ? "gradient-bg text-white shadow-lg shadow-primary-500/20"
                        : "bg-white dark:bg-primary-900/40 text-primary-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-800/40 border border-primary-200 dark:border-primary-700/50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl bg-white dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700/50 text-primary-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-800/40 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <span className="ml-3 text-sm text-slate-500 dark:text-slate-400 hidden sm:inline">
              {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, sorted.length)} / {sorted.length}
            </span>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedCert !== null && visible[selectedCert] && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-2xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white">
                <Image
                  src={visible[selectedCert].image}
                  alt={`${visible[selectedCert].name} sertifikati`}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold">{visible[selectedCert].name}</h3>
                <p className="text-white/70">
                  {visible[selectedCert].grade} daraja |{" "}
                  {visible[selectedCert].percentage !== null
                    ? `${visible[selectedCert].percentage}%`
                    : `${visible[selectedCert].score} ball`}{" "}
                  | {visible[selectedCert].subject}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
