import Link from "next/link";
import { featuredReviews, trust } from "@/lib/site";
import { Icons } from "./Icons";
import ReviewMarquee from "./ReviewMarquee";

export default function Reviews() {
  return (
    <section className="section reviews">
      <div className="reviews-blob blob blob-maize" />
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">⭐ {trust.angiReviewCount}+ Five-Star Reviews</span>
          <h2 className="section-title">What Our <span className="accent">Neighbors Say</span></h2>
          <p className="section-sub">
            A perfect 5.0 rating on both Google and Angi, earned one happy home at a time.
          </p>
        </div>
      </div>

      {/* Live, draggable review row */}
      <div className="reviews-marquee-wrap">
        <ReviewMarquee reviews={featuredReviews} direction="left" speed={45} />
      </div>

      <div className="container reviews-cta">
        <Link href="/reviews" className="btn btn-primary">
          See All Reviews <Icons.arrow />
        </Link>
      </div>

      <style>{`
        .reviews { position: relative; overflow: hidden; }
        .reviews-blob { width: 460px; height: 460px; top: 6%; right: -180px; }
        .reviews-marquee-wrap { position: relative; z-index: 1; }
        .reviews-cta { display: flex; justify-content: center; margin-top: 36px; }
      `}</style>
    </section>
  );
}
