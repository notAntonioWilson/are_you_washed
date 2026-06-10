import Image from "next/image";

type Shot = { image: string; alt: string };

// Action, branding, and work-in-progress shots. Real crew, real jobs around
// Metro Detroit. These are credibility shots, not before/after results.
const shots: Shot[] = [
  { image: "/images/proof/action-driveway-truck-01.jpg", alt: "Are You Washed truck and rig set up for a driveway wash in Macomb, MI" },
  { image: "/images/proof/action-commercial-lift-01.jpg", alt: "Boom lift staged for a commercial wash near the lake in Metro Detroit" },
  { image: "/images/proof/action-commercial-balcony-01.jpg", alt: "Crew soft washing a commercial balcony in Metro Detroit" },
  { image: "/images/proof/action-fence-wash-01.jpg", alt: "Wood fence being washed clean board by board in Macomb County" },
  { image: "/images/proof/action-roof-team-01.jpg", alt: "Crew working a roofline on a wash job in Metro Detroit" },
  { image: "/images/proof/action-roof-team-02.jpg", alt: "Are You Washed crew member up top on a roof job" },
  { image: "/images/proof/action-gutter-team-01.jpg", alt: "Clearing gutters from the roofline at a Metro Detroit home" },
  { image: "/images/proof/action-gutter-team-02.jpg", alt: "Blowing leaves and debris out of the gutters on a wash day" },
  { image: "/images/proof/action-gutter-team-03.jpg", alt: "Crew finishing a gutter cleanout in Macomb County" },
  { image: "/images/proof/action-window-wipe-01.jpg", alt: "Wiping down glass during an interior window cleaning in Metro Detroit" },
  { image: "/images/proof/action-window-squeegee-05.jpg", alt: "Squeegee pass on a window cleaning job in Macomb, MI" },
  { image: "/images/proof/action-window-squeegee-06.jpg", alt: "Pulling water off the glass on a window cleaning job" },
  { image: "/images/proof/action-window-pole-driveway-01.jpg", alt: "Reaching a second story window from the driveway with a pole in Metro Detroit" },
  { image: "/images/proof/action-window-pole-driveway-02.jpg", alt: "Pole work on upper windows during a wash in Macomb County" },
  { image: "/images/proof/action-roof-mansion-01.jpg", alt: "Working the roofline on a large home in Metro Detroit" },
  { image: "/images/proof/house-brick-bay-wide-01.jpg", alt: "Clean brick home with a bay window after a wash in Metro Detroit" },
  { image: "/images/proof/house-brick-bay-front-01.jpg", alt: "Brick home exterior and copper bay roof cleaned in Macomb County" },
  { image: "/images/proof/house-brick-mansion-01.jpg", alt: "Large brick home exterior cleaned in Metro Detroit" },
  { image: "/images/proof/house-brick-side-01.jpg", alt: "Brick home side elevation washed clean in Macomb County" },
];

export default function OnTheJob() {
  return (
    <section className="section otj">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">On the Job</span>
          <h2 className="section-title">
            Out Working<br />
            <span className="accent">Across Metro Detroit</span>
          </h2>
          <p className="section-sub">
            Real days, real jobs. This is what it looks like when we show up: our own truck, our own crew, on roofs, ladders, and driveways from Macomb out across the metro.
          </p>
        </div>
      </div>
      <div className="otj-marquee" aria-label="Photos of the crew on the job">
        <div className="otj-track">
          {[...shots, ...shots].map((s, i) => (
            <figure className="otj-item" key={`${s.image}-${i}`} aria-hidden={i >= shots.length}>
              <Image src={s.image} alt={s.alt} width={600} height={800} sizes="(max-width: 700px) 70vw, 320px" className="otj-img" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .otj { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(40px, 5vw, 64px); }
        .otj .section-head { margin-bottom: clamp(24px, 3.5vw, 36px); }
        .otj-marquee { overflow: hidden; padding: 4px 0 16px; -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); }
        .otj-track { display: flex; gap: 14px; width: max-content; animation: otj-scroll 90s linear infinite; }
        .otj-marquee:hover .otj-track { animation-play-state: paused; }
        .otj-item { margin: 0; flex: 0 0 auto; width: clamp(220px, 70vw, 300px); border-radius: 14px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.12); background: var(--surface, #f3f4f2); }
        .otj-img { width: 100%; height: 380px; object-fit: cover; display: block; }
        @keyframes otj-scroll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 7px)); } }
        @media (prefers-reduced-motion: reduce) {
          .otj-marquee { overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .otj-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
