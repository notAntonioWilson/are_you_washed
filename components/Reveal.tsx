"use client";
import { useEffect } from "react";

/**
 * Scroll reveal (motion only).
 * - Above-the-fold blocks paint instantly (never hidden), so no blank flash.
 * - Below-the-fold blocks fade up once (~12% before entering view), then stay.
 * - IntersectionObserver only (no scroll listeners). Respects reduced motion.
 */
export default function Reveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (!els.length) return;

    // Reduced motion or no observer support: leave everything visible, no motion.
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const vh = window.innerHeight;
    const pending: HTMLElement[] = [];
    els.forEach((el) => {
      // Only hide blocks that start fully below the fold; anything visible stays as-is.
      if (el.getBoundingClientRect().top >= vh) {
        el.classList.add("reveal-pending");
        pending.push(el);
      }
    });
    if (!pending.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target); // animate once, never re-trigger
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 12% 0px" } // fire slightly before entering
    );
    pending.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
