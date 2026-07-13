"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const { y = 60, x = 0, opacity = 0, duration = 0.8, delay = 0, start = "top 85%" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { y, x, opacity });
    const tween = gsap.to(el, {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, x, opacity, duration, delay, start]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
  options: {
    childSelector?: string;
    y?: number;
    stagger?: number;
    duration?: number;
    start?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const { childSelector = ":scope > *", y = 50, stagger = 0.1, duration = 0.7, start = "top 85%" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(childSelector);
    if (!children.length) return;

    gsap.set(children, { y, opacity: 0 });
    const tween = gsap.to(children, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [childSelector, y, stagger, duration, start]);

  return ref;
}

export function useCountUp(
  target: number,
  options: { duration?: number; suffix?: string; start?: string } = {}
) {
  const ref = useRef<HTMLElement>(null);
  const { duration = 2, suffix = "", start = "top 85%" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, duration, suffix, start]);

  return ref;
}

export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return ref;
}

export function useHeroAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(el.querySelectorAll("[data-hero-badge]"), {
      y: -30,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        el.querySelectorAll("[data-hero-title]"),
        { y: 40, opacity: 0, duration: 0.8 },
        "-=0.3"
      )
      .from(
        el.querySelectorAll("[data-hero-desc]"),
        { y: 30, opacity: 0, duration: 0.6 },
        "-=0.4"
      )
      .from(
        el.querySelectorAll("[data-hero-buttons] > *"),
        { y: 20, opacity: 0, duration: 0.5, stagger: 0.15 },
        "-=0.3"
      )
      .from(
        el.querySelectorAll("[data-hero-stats] > *"),
        { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      )
      .from(
        el.querySelectorAll("[data-hero-float]"),
        { scale: 0, opacity: 0, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return ref;
}

export function useProcessAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const line = el.querySelector("[data-process-line]");
    const steps = el.querySelectorAll("[data-process-step]");

    const tweens: gsap.core.Tween[] = [];

    if (line) {
      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
      tweens.push(
        gsap.to(line, {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" },
        })
      );
    }

    if (steps.length) {
      gsap.set(steps, { y: 40, opacity: 0, scale: 0.8 });
      tweens.push(
        gsap.to(steps, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none none" },
        })
      );
    }

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return ref;
}
