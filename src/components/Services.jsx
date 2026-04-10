import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { Stagger, fadeItem } from "./Motion.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-inner flex flex-col gap-10">
        <SectionHeader
          eyebrow="Services"
          title="One partner. Every premium growth lever."
          subtitle="Skyfill brings brand strategy, creative production, and performance marketing together in one unified platform."
        />
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
          <span>Platform services</span>
          <span className="md:hidden">Swipe</span>
        </div>
        <Stagger className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative min-w-[260px] flex-1 snap-start rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 md:min-w-0"
              variants={fadeItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="absolute left-6 top-0 h-[2px] w-12 bg-brand" />
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-brand/70">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                {service.description}
              </p>
              <p className="mt-6 text-xs text-slate-400">{service.focus}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
