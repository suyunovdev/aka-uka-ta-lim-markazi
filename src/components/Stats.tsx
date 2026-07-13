"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, TrendingUp, Users, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1000, suffix: "+", label: "Sertifikat oldi", icon: <GraduationCap className="w-8 h-8" /> },
  { value: 100, suffix: "%", label: "Muvaffaqiyat", icon: <TrendingUp className="w-8 h-8" /> },
  { value: 30, suffix: "+", label: "Ustozlar", icon: <Users className="w-8 h-8" /> },
  { value: 12, suffix: "+", label: "Fan", icon: <BookOpen className="w-8 h-8" /> },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll("[data-stat]");
    const nums = el.querySelectorAll("[data-stat-num]");

    gsap.set(cards, { y: 30, opacity: 0, scale: 0.9 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" },
    });

    tl.to(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.4)",
    });

    nums.forEach((num) => {
      const target = Number(num.getAttribute("data-target"));
      const suffix = num.getAttribute("data-suffix") || "";
      const obj = { val: 0 };

      tl.to(
        obj,
        {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            num.textContent = Math.round(obj.val) + suffix;
          },
        },
        "<"
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} data-stat className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-white">
                {stat.icon}
              </div>
              <div
                data-stat-num
                data-target={stat.value}
                data-suffix={stat.suffix}
                className="text-4xl sm:text-5xl font-extrabold text-white mb-2"
              >
                0{stat.suffix}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
