import { motion } from "framer-motion";
import { FadeIn } from "./Motion.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { useData } from "../context/DataContext.jsx";

const highlights = [
  {
    title: "Intuitive",
    text: "Complexity made simple so your team can execute with confidence and speed.",
  },
  {
    title: "Scalable",
    text: "Launch now, expand later. Our systems grow with your ambition.",
  },
  {
    title: "Precise",
    text: "Performance data, creative insights, and operational clarity in one view.",
  },
];

export default function About() {
  const { media } = useData();
  return (
    <section id="about" className="section">
      <div className="section-inner grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <SectionHeader
            eyebrow="About Skyfill"
            title="The clarity that makes premium brands unforgettable."
            subtitle="Skyfill pairs luxury-grade creative with performance intelligence, guiding your teams from positioning to pipeline with absolute control."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="card p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="relative">
          <div className="card overflow-hidden p-6">
            <div className="relative h-[360px] overflow-hidden rounded-[24px] border border-white/10">
              <motion.img
                src={media?.aboutImage}
                alt="Skyfill team collaborating"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                Strategy Session
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
              <span>Company intro</span>
              <span className="text-brand">Est. 2025</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
