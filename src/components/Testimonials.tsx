"use client";

import { Star, Quote } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";

const testimonials = [
  {
    name: "Dilnoza Karimova",
    role: "O'quvchi onasi",
    text: "Bolam matematikadan juda qiynalardi. Aka-Uka markaziga kelganimizdan keyin 3 oyda A natija oldi. Ustozlarga katta rahmat!",
    rating: 5,
  },
  {
    name: "Bahodir Toshmatov",
    role: "O'quvchi otasi",
    text: "Ikki farzandim ham shu markazda o'qiydi. Kimyodan va o'zbek tilidan ikkalasi ham sertifikat oldi. Juda professional yondashuv.",
    rating: 5,
  },
  {
    name: "Malika Rahimova",
    role: "O'quvchi onasi",
    text: "Qizim ingliz tilidan CEFR B2 darajasini oldi. Boshqa joylarda 1 yil o'qib natija yo'q edi, bu yerda 6 oyda natijaga erishdik.",
    rating: 5,
  },
  {
    name: "Sardor Umarov",
    role: "O'quvchi otasi",
    text: "O'g'lim matematikadan A+ oldi! Ustoz juda yaxshi tushuntiradi, bolalar darsga xursand borishadi. Tavsiya qilaman!",
    rating: 5,
  },
  {
    name: "Nodira Xasanova",
    role: "O'quvchi onasi",
    text: "Markazdagi muhit juda yaxshi — bolalar o'zlarini erkin his qilishadi. O'zbek tilidan B+ natija oldik, endi A ga tayyorlanmoqdamiz.",
    rating: 5,
  },
  {
    name: "Jamshid Aliyev",
    role: "O'quvchi otasi",
    text: "Oldin repetitorga yuborardik, natija yo'q edi. Aka-Uka markazida guruhda o'qib, ikki fandan sertifikat oldi. Narxi ham maqul.",
    rating: 5,
  },
];

export default function Testimonials() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.12, y: 40 });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800/40 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-4 border border-secondary-200 dark:border-secondary-700/50">
            Fikrlar
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Ota-onalar nima deydi?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Farzandlari bizda o&apos;qigan ota-onalarning samimiy fikrlari.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="glass-card p-6 hover-lift relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200 dark:text-primary-800/40" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-primary-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
