"use client";

import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useAnimations";

export default function CTA() {
  const contentRef = useScrollReveal<HTMLDivElement>({ y: 40 });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Hoziroq ro&apos;yxatdan o&apos;ting va{" "}
            <span className="text-accent-300">bepul diagnostik test</span>{" "}
            topshiring
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Barcha fanlar — oyiga atigi <span className="font-extrabold text-accent-300">400 000 so&apos;m</span>. Cheklangan o&apos;rinlar mavjud!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-5 rounded-2xl bg-white text-primary-600 font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Murojaat qilish
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-10 py-5 rounded-2xl bg-white/15 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 hover:bg-white/25 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
