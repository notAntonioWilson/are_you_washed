"use client";
import { useState } from "react";
import { quoteServices, site } from "@/lib/site";
import { Icons } from "./Icons";

type Variant = "hero" | "page";

export default function QuoteForm({ variant = "page" }: { variant?: Variant }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [service, setService] = useState("");

  const showWindows = service === "Window Cleaning" || service === "Multiple Services";
  const showStories = service === "Gutter Cleaning" || service === "Roof Washing" || service === "Multiple Services";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
      setService("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className={`qf qf-${variant} qf-success`}>
        <div className="qf-success-icon"><Icons.check /></div>
        <h3>Request received!</h3>
        <p>Thanks — we&apos;ll reach out shortly with your free quote. Need us fast? Call or text {site.phone}.</p>
        <button className="btn btn-ghost" onClick={() => setStatus("idle")}>Send another</button>
        <style jsx>{successStyles}</style>
      </div>
    );
  }

  return (
    <form className={`qf qf-${variant}`} onSubmit={onSubmit}>
      {variant === "hero" && (
        <div className="qf-head">
          <h3>Get Your Free Quote</h3>
          <p>No obligation · Fast response</p>
        </div>
      )}

      <div className="qf-row">
        <div className="qf-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="qf-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required placeholder="(586) 000-0000" />
        </div>
      </div>

      <div className="qf-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email.com" />
      </div>

      <div className="qf-field">
        <label htmlFor="service">Service Needed</label>
        <select id="service" name="service" required value={service} onChange={(e) => setService(e.target.value)}>
          <option value="" disabled>Select a service…</option>
          {quoteServices.map((s) => (<option key={s} value={s}>{s}</option>))}
        </select>
      </div>

      <div className="qf-field">
        <label htmlFor="address">Property Address</label>
        <input id="address" name="address" type="text" required placeholder="Street, City, ZIP" />
      </div>

      {showWindows && (
        <div className="qf-field qf-conditional">
          <label htmlFor="windows">Approx. number of windows</label>
          <input id="windows" name="windows" type="number" min="1" placeholder="e.g. 12" />
        </div>
      )}

      {showStories && (
        <div className="qf-field qf-conditional">
          <label htmlFor="stories">How many stories is your home?</label>
          <select id="stories" name="stories" defaultValue="">
            <option value="" disabled>Select…</option>
            <option value="1 story">1 story</option>
            <option value="2 story">2 story</option>
            <option value="3+ story">3+ story</option>
          </select>
        </div>
      )}

      <div className="qf-field">
        <label htmlFor="details">Anything else? <span className="qf-opt">(optional)</span></label>
        <textarea id="details" name="details" rows={variant === "hero" ? 2 : 3} placeholder="Tell us about the job…" />
      </div>

      <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request Free Quote"}
        {status !== "sending" && <Icons.arrow className="qf-arrow" />}
      </button>

      {status === "error" && (
        <p className="qf-error">Something went wrong. Please call or text {site.phone}.</p>
      )}
      {variant === "hero" && (
        <p className="qf-trust">🔒 We respond within hours · 5.0★ rated</p>
      )}

      <style jsx>{formStyles}</style>
    </form>
  );
}

const formStyles = `
  .qf { display: flex; flex-direction: column; gap: 14px; }
  .qf-hero {
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.7);
    border-radius: var(--r-lg);
    padding: clamp(22px, 3vw, 32px);
    box-shadow: var(--shadow-lg);
  }
  .qf-page {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    padding: clamp(24px, 4vw, 40px);
    box-shadow: var(--shadow-md);
  }
  .qf-head { margin-bottom: 4px; }
  .qf-head h3 { font-size: 1.55rem; margin-bottom: 4px; }
  .qf-head p { color: var(--ink-muted); font-size: 0.92rem; font-weight: 500; }
  .qf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .qf-field { display: flex; flex-direction: column; gap: 6px; }
  .qf-field label {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 13px;
    color: var(--ink-soft);
  }
  .qf-opt { color: var(--ink-muted); font-weight: 400; }
  .qf input, .qf select, .qf textarea {
    font-family: var(--font-body);
    font-size: 15px;
    color: var(--ink);
    background: var(--bg-tint);
    border: 1.5px solid var(--line);
    border-radius: var(--r-sm);
    padding: 12px 14px;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    width: 100%;
  }
  .qf textarea { resize: vertical; }
  .qf input:focus, .qf select:focus, .qf textarea:focus {
    outline: none;
    border-color: var(--maize);
    background: var(--white);
    box-shadow: 0 0 0 3px var(--maize-glow);
  }
  .qf input::placeholder, .qf textarea::placeholder { color: #aab6c1; }
  .qf-conditional { animation: slideDown 0.3s ease; }
  @keyframes slideDown { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
  .qf-arrow { width: 18px; height: 18px; }
  .qf-error { color: #c0392b; font-size: 14px; text-align: center; font-weight: 500; }
  .qf-trust { text-align: center; font-size: 12.5px; color: var(--ink-muted); margin-top: 2px; }
  @media (max-width: 460px) { .qf-row { grid-template-columns: 1fr; } }
`;

const successStyles = `
  .qf-success {
    text-align: center;
    align-items: center;
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: var(--r-lg);
    padding: clamp(32px,5vw,48px);
    box-shadow: var(--shadow-md);
    gap: 12px;
  }
  .qf-success-icon {
    width: 64px; height: 64px;
    display: grid; place-items: center;
    background: linear-gradient(120deg, var(--maize-deep), var(--maize));
    color: #2a1c00;
    border-radius: var(--r-pill);
    margin-bottom: 6px;
  }
  .qf-success-icon :global(svg) { width: 32px; height: 32px; }
  .qf-success h3 { font-size: 1.6rem; }
  .qf-success p { color: var(--ink-muted); max-width: 380px; }
`;
