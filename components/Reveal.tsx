"use client";
import { useEffect } from "react";

/**
 * Directional scroll reveal (motion only).
 * - Above-the-fold blocks paint instantly (never hidden), so no blank flash.
 * - Below-the-fold .reveal blocks slide in from the side they sit on (or rise if
 *   full-width), and every section fades, so all content reveals once on enter.
 * - Sections use opacity only (no transform) so nested slides are never compounded.
 * - On mobile, collapsed full-width blocks rise instead of sliding sideways, so the
 *   directional motion never pushes the page sideways (root overflow-x is also clipped).
 * - IntersectionObserver only (no scroll listeners). Respects reduced motion.
 * - Catch-all: when anything enters view, any pending block already in/above view is
 *   revealed too, so a fast fling or anchor jump can never leave a block stuck hidden.
 */
export default function Reveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pending = new Set<HTMLElement>();
    const belowFold = (el: HTMLElement) => el.getBoundingClientRect().top >= vh;

    // Granular blocks: slide in from the side they sit on; full-width/centered rise.
    document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
      if (!belowFold(el)) return;
      const r = el.getBoundingClientRect();
      let cls = "reveal-up";
      if (r.width < vw - 64) {
        const center = r.left + r.width / 2;
        if (center < vw / 2 - 40) cls = "reveal-left";
        else if (center > vw / 2 + 40) cls = "reveal-right";
      }
      el.classList.add(cls);
      pending.add(el);
    });

    // Every section fades (opacity only) so any block not tagged .reveal still reveals.
    document.querySelectorAll<HTMLElement>("section:not(.in)").forEach((sec) => {
      if (!belowFold(sec)) return;
      sec.classList.add("reveal-fade");
      pending.add(sec);
    });

    if (!pending.size) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("in");
            obs.unobserve(el);
            pending.delete(el);
          }
        }
        // On any boundary change, reveal anything now in/above view that a fast scroll
        // or jump may have skipped, so a block can never stay stuck hidden.
        for (const el of Array.from(pending)) {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("in");
            obs.unobserve(el);
            pending.delete(el);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 12% 0px" } // fire slightly before entering
    );
    pending.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
