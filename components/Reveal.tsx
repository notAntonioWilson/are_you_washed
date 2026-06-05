"use client";
import { useEffect } from "react";

/**
 * Scroll reveal (motion only).
 * - Above-the-fold blocks paint instantly (never hidden), so no blank flash.
 * - Below-the-fold blocks fade up once (~12% before entering view), then stay.
 * - Applies to every <section> on the page, plus any element tagged .reveal.
 * - IntersectionObserver only (no scroll listeners). Respects reduced motion.
 */
export default function Reveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const vh = window.innerHeight;
    const pending: HTMLElement[] = [];

    // Inner blocks explicitly tagged with .reveal
    document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
      if (el.getBoundingClientRect().top >= vh) {
        el.classList.add("reveal-pending");
        pending.push(el);
      }
    });

    // Every section on the page
    document.querySelectorAll<HTMLElement>("section:not(.in)").forEach((el) => {
      if (el.getBoundingClientRect().top >= vh) {
        el.classList.add("reveal-section");
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
