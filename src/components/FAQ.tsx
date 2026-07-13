"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useScrollReveal<HTMLDivElement>();
  const listRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, y: 30 });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-800/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4 border border-accent-200 dark:border-accent-700/50">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Tez-tez so&apos;raladigan savollar
          </h2>
        </div>

        <div ref={listRef} className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-colors cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-primary-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-800/40 flex items-center justify-center transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
