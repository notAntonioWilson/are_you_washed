import Link from "next/link";
import { services, Service } from "@/lib/site";
import { Icons } from "./Icons";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Ic = Icons[service.icon];
  return (
    <Link href={`/services#${service.slug}`} className={`svc-card reveal d${(index % 4) + 1}`}>
      <div className="svc-ic"><Ic className="svc-ic-svg" /></div>
      <h3 className="svc-name">{service.name}</h3>
      <p className="svc-short">{service.short}</p>
      <span className="svc-link">Learn more <Icons.arrow className="svc-arrow" /></span>
      <style>{`
        .svc-card {
          display: flex; flex-direction: column;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 30px 28px;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          position: relative;
          overflow: hidden;
        }
        .svc-card::before {
          content: "";
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--maize-deep), var(--maize));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s cubic-bezier(.16,1,.3,1);
        }
        .svc-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: transparent; }
        .svc-card:hover::before { transform: scaleX(1); }
        .svc-ic {
          width: 58px; height: 58px;
          display: grid; place-items: center;
          background: linear-gradient(135deg, var(--aqua-soft), var(--aqua-mist));
          color: var(--aqua-deep);
          border-radius: var(--r-md);
          margin-bottom: 18px;
          transition: background 0.3s, color 0.3s;
        }
        .svc-card:hover .svc-ic {
          background: linear-gradient(135deg, var(--maize), var(--maize-deep));
          color: #2a1c00;
        }
        .svc-ic-svg { width: 28px; height: 28px; }
        .svc-name { font-size: 1.22rem; margin-bottom: 8px; }
        .svc-short { color: var(--ink-muted); font-size: 0.96rem; line-height: 1.55; margin-bottom: 18px; flex: 1; }
        .svc-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-display);
          font-weight: 600; font-size: 14px;
          color: var(--maize-deep);
        }
        .svc-arrow { width: 16px; height: 16px; transition: transform 0.25s; }
        .svc-card:hover .svc-arrow { transform: translateX(4px); }
      `}</style>
    </Link>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="svc-grid">
      {list.map((s, i) => (<ServiceCard key={s.slug} service={s} index={i} />))}
      <style>{`
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 820px) { .svc-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .svc-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
