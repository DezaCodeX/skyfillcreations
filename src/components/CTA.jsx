import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { FadeIn } from "./Motion.jsx";

export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="section-inner">
        <FadeIn className="card relative overflow-hidden px-8 py-16 text-center bg-black">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
            <span className="eyebrow">Premium Growth System</span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              We don’t just build brands. We craft digital experiences.
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Ready for a luxury-grade launch? Let’s align your brand story,
              creative direction, and performance roadmap in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button as={Link} to="/contact">
                Request a Strategy Call
              </Button>
              <Button as={Link} to="/portfolio" variant="ghost">
                View Portfolio
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
