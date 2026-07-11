"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import { certificates, certSubjectFilters, subjectFilterMap, type CertSubjectFilter } from "@/lib/data";

const gradeColors: Record<string, string> = {
  "A+": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/40 dark:text-yellow-300",
  A: "bg-accent-100 text-accent-700 dark:bg-accent-800/40 dark:text-accent-300",
  "B+": "bg-primary-100 text-primary-700 dark:bg-primary-800/40 dark:text-primary-300",
  B: "bg-secondary-100 text-secondary-700 dark:bg-secondary-800/40 dark:text-secondary-300",
  "C+": "bg-blue-100 text-blue-700 dark:bg-blue-800/40 dark:text-blue-300",
  C: "bg-slate-100 text-slate-700 dark:bg-slate-800/40 dark:text-slate-300",
  C1: "bg-purple-100 text-purple-700 dark:bg-purple-800/40 dark:text-purple-300",
  B2: "bg-indigo-100 text-indigo-700 dark:bg-indigo-800/40 dark:text-indigo-300",
  B1: "bg-teal-100 text-teal-700 dark:bg-teal-800/40 dark:text-teal-300",
};

const ITEMS_PER_PAGE = 12;

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState<CertSubjectFilter>("all");
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => subjectFilterMap[activeFilter].includes(c.subject));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const counts: Record<CertSubjectFilter, number> = {
    all: certificates.length,
    uzbek: certificates.filter((c) => c.subject === "O'zbek tili va adabiyot").length,
    math: certificates.filter((c) => c.subject === "Matematika (O'zbek)").length,
    chemistry: certificates.filter((c) => c.subject === "Kimyo (O'zbek)").length,
    english: certificates.filter((c) => c.subject === "Ingliz tili").length,
    turkish: certificates.filter((c) => c.subject === "Turk tili").length,
    russian: certificates.filter((c) => c.subject === "Rus tili va adabiyot").length,
  };

  const scrollToSection = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    setSelectedCert(null);
    scrollToSection();
  }, [scrollToSection]);

  const handleFilterChange = (key: CertSubjectFilter) => {
    setActiveFilter(key);
    setCurrentPage(1);
    setSelectedCert(null);
  };

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
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-800/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4 border border-accent-200 dark:border-accent-700/50">
            Natijalar va Sertifikatlar
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            O&apos;quvchilarimiz natijalari
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            1000+ o&apos;quvchi sertifikat oldi! 6 ta fan bo&apos;yicha milliy va xalqaro sertifikat natijalari.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-10 max-w-3xl mx-auto">
          {[
            { label: "Matematika", count: counts.math, color: "bg-primary-100 dark:bg-primary-800/30 text-primary-600 dark:text-primary-400" },
            { label: "Kimyo", count: counts.chemistry, color: "bg-secondary-100 dark:bg-secondary-800/30 text-secondary-600 dark:text-secondary-400" },
            { label: "Ingliz tili", count: counts.english, color: "bg-indigo-100 dark:bg-indigo-800/30 text-indigo-600 dark:text-indigo-400" },
            { label: "Turk tili", count: counts.turkish, color: "bg-teal-100 dark:bg-teal-800/30 text-teal-600 dark:text-teal-400" },
            { label: "O'zbek tili", count: counts.uzbek, color: "bg-accent-100 dark:bg-accent-800/30 text-accent-600 dark:text-accent-400" },
            { label: "Rus tili", count: counts.russian, color: "bg-purple-100 dark:bg-purple-800/30 text-purple-600 dark:text-purple-400" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-3 text-center">
              <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-1`}>
                <Award className="w-4 h-4" />
              </div>
              <p className="text-xl font-bold text-primary-900 dark:text-white">{stat.count}</p>
              <p className="text-[10px] leading-tight text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {certSubjectFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeFilter === filter.key
                  ? "gradient-bg text-white shadow-lg shadow-primary-500/20"
                  : "bg-white dark:bg-primary-900/40 text-primary-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-800/40 border border-primary-200 dark:border-primary-700/50"
              }`}
            >
              {filter.label}
              <span
                className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.key ? "bg-white/20" : "bg-primary-100 dark:bg-primary-800/40"
                }`}
              >
                {counts[filter.key]}
              </span>
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold ${gradeColors[cert.grade] || gradeColors.B}`}>
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
              {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)} / {filtered.length}
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
