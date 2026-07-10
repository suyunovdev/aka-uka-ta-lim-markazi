"use client";

import Image from "next/image";
import { useState } from "react";
import { books } from "@/lib/data";

export default function Books() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="books" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4 border border-primary-200 dark:border-primary-700/50">
            Kitoblar
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Bizning kitoblarimiz
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Rahmiddin Vafoxonov tomonidan yozilgan o&apos;quv qo&apos;llanmalar — Registon nashriyoti.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden hover-lift group cursor-pointer"
              onClick={() => setSelected(index)}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-[family-name:var(--font-display)] text-sm sm:text-base font-bold text-primary-900 dark:text-white mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm font-medium">
                  {book.grade}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-lg w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl font-bold z-10"
            >
              &times;
            </button>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={books[selected].image}
                alt={books[selected].title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-lg font-bold">{books[selected].title}</h3>
              <p className="text-gray-300">{books[selected].grade}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
