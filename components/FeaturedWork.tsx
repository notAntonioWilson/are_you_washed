import Image from "next/image";

type Shot = { image: string; alt: string };

// Owner-selected highlight shots. No service labels, just the work. Single row.
const featured: Shot[] = [
  { image: "/images/proof/house-tudor-front-01.jpg", alt: "Brick Tudor home front cleaned in Macomb County" },
  { image: "/images/proof/window-redbrick-arch-01.jpg", alt: "Arched windows cleaned clear on a red brick home in Macomb, MI" },
  { image: "/images/proof/paver-driveway-02.jpg", alt: "Brick paver driveway pressure washed in Metro Detroit" },
  { image: "/images/proof/roof-washing-01.jpg", alt: "Metal roof and exterior washed clean in Metro Detroit" },
  { image: "/images/proof/house-modern-lakeside-02.jpg", alt: "Lakeside home exterior washed clean in Metro Detroit" },
];

export default function FeaturedWork() {
  return (
    <section className="section featured">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Sneak Peek</span>
          <h2 className="section-title">
            A Sneak Peek to<br />
            <span className="accent">Our Beautiful Work</span>
          </h2>
        </div>
        <div className="featured-row">
          {featured.map((s) => (
            <figure className="featured-item" key={s.image}>
              <Image src={s.image} alt={s.alt} width={700} height={525} sizes="(max-width: 700px) 60vw, 20vw" className="featured-img" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .featured { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(40px, 5vw, 64px); }
        .featured .section-head { margin-bottom: clamp(24px, 3.5vw, 36px); }
        .featured-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .featured-item {
          margin: 0;
          border-radius: var(--r-md);
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: var(--surface, #f3f4f2);
          box-shadow: 0 0 0 1px rgba(104,164,68,0.35), 0 8px 28px rgba(104,164,68,0.45);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .featured-item:hover {
          box-shadow: 0 0 0 1px rgba(104,164,68,0.55), 0 12px 38px rgba(104,164,68,0.65);
          transform: translateY(-3px);
        }
        .featured-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 900px) {
          .featured-row {
            grid-template-columns: none;
            grid-auto-flow: column;
            grid-auto-columns: 60%;
            gap: 12px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px;
          }
          .featured-item { scroll-snap-align: start; }
        }
      `}</style>
    </section>
  );
}
