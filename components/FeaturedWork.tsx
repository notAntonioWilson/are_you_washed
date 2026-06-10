import Image from "next/image";

type Shot = { image: string; alt: string };

// Owner-selected highlight shots for the homepage. No service labels, just the work.
const featured: Shot[] = [
  { image: "/images/proof/house-tudor-front-01.jpg", alt: "Brick Tudor home front cleaned in Macomb County" },
  { image: "/images/proof/window-redbrick-arch-01.jpg", alt: "Arched windows cleaned clear on a red brick home in Macomb, MI" },
  { image: "/images/proof/paver-driveway-02.jpg", alt: "Brick paver driveway pressure washed in Metro Detroit" },
  { image: "/images/proof/window-tudor-gable-01.jpg", alt: "Patio and surrounds cleaned on a brick Tudor home in Macomb County" },
  { image: "/images/proof/roof-washing-01.jpg", alt: "Metal roof and exterior washed clean in Metro Detroit" },
  { image: "/images/proof/house-modern-lakeside-02.jpg", alt: "Lakeside home exterior washed clean in Metro Detroit" },
];

export default function FeaturedWork() {
  return (
    <section className="section featured">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Recent Work</span>
          <h2 className="section-title">
            A Few of Our<br />
            <span className="accent">Favorite Results</span>
          </h2>
        </div>
        <div className="featured-grid">
          {featured.map((s) => (
            <figure className="featured-item" key={s.image}>
              <Image src={s.image} alt={s.alt} width={800} height={600} sizes="(max-width: 700px) 50vw, 25vw" className="featured-img" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .featured { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(40px, 5vw, 64px); }
        .featured .section-head { margin-bottom: clamp(24px, 3.5vw, 36px); }
        .featured-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
        .featured-item { margin: 0; border-radius: var(--r-md); overflow: hidden; box-shadow: var(--shadow-sm); background: var(--surface, #f3f4f2); aspect-ratio: 4 / 3; }
        .featured-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 700px) {
          .featured-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
      `}</style>
    </section>
  );
}
