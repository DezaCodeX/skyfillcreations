import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { Stagger, fadeItem } from "./Motion.jsx";

const reasons = [
  {
    title: "Attention is automated",
    text: "AI-made content has flooded every channel. Premium brands need a human, high‑taste layer to stay credible and memorable.",
  },
  {
    title: "Trust converts faster",
    text: "2026 buyers demand proof, transparency, and polish. Skyfill designs brand systems that turn attention into qualified demand.",
  },
  {
    title: "Performance is non‑negotiable",
    text: "Creative without analytics is a cost. We connect story, design, and data so every launch is measurable.",
  },
  {
    title: "Speed wins categories",
    text: "Markets move faster than ever. Our modular production lets you launch in weeks, not quarters.",
  },
];

export default function Why2026() {
  return (
    <section className="section">
      <div className="section-inner flex flex-col gap-10">
        <SectionHeader
          eyebrow="Why 2026"
          title="Why Skyfill is needed now."
          subtitle="The market has changed. Brands that win in 2026 will move faster, look sharper, and measure everything. Skyfill exists to make that happen."
        />
        <Stagger className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{reason.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
