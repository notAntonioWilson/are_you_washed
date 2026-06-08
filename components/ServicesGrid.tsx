import Link from "next/link";
import Image from "next/image";
import { services, Service } from "@/lib/site";
import { Icons } from "./Icons";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Ic = Icons[service.icon];
  const img = service.image || "/images/house-after.jpg";
  return (
    <Link href={`/services#${service.slug}`} className={`svc-card reveal d${(index % 4) + 1}`}>
      <div className="svc-banner">
        <Image
          src={img}
          alt={service.alt || service.name}
          fill
          sizes="(max-width: 520px) 100vw, (max-width: 1100px) 33vw, 25vw"
          style={{ objectFit: "cover" }}
        />
        <div className="svc-ic"><Ic className="svc-ic-svg" /></div>
      </div>
      <div className="svc-body">
        <h3 className="svc-name">{service.name}</h3>
        <p className="svc-short">{service.short}</p>
        <span className="svc-link">Learn more <Icons.arrow className="svc-arrow" /></span>
      </div>
      <style>{`
        .svc-card {
          display: flex; flex-direction: column;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          position: relative;
          overflow: hidden;
        }
        .svc-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: var(--maize-light); }
        .svc-banner {
          position: relative;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          background: var(--aqua-soft);
        }
        .svc-banner :global(img) { transition: transform 0.5s cubic-bezier(.16,1,.3,1); }
        .svc-card:hover .svc-banner :global(img) { transform: scale(1.06); }
        .svc-ic {
          position: absolute;
          left: 14px; bottom: 14px;
          width: 44px; height: 44px;
          display: grid; place-items: center;
          background: linear-gradient(135deg, var(--maize), var(--maize-deep));
          color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(22,39,58,0.22);
        }
        .svc-ic-svg { width: 22px; height: 22px; }
        .svc-body { display: flex; flex-direction: column; flex: 1; padding: 18px 20px 20px; }
        .svc-name { font-size: 1.12rem; margin-bottom: 6px; }
        .svc-short { color: var(--ink-muted); font-size: 0.92rem; line-height: 1.5; margin-bottom: 14px; flex: 1; }
        .svc-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-display);
          font-weight: 600; font-size: 13.5px;
          color: var(--maize-deep);
        }
        .svc-arrow { width: 15px; height: 15px; transition: transform 0.25s; }
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
          gap: 20px;
        }
        @media (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 820px) { .svc-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .svc-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
