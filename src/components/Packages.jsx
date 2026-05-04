import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { Stagger, fadeItem } from "./Motion.jsx";
import { useData } from "../context/DataContext.jsx";

export default function Packages() {
  const { packages } = useData();

  if (!Array.isArray(packages) || packages.length === 0) {
    return null;
  }

  return (
    <section id="packages" className="section border-t border-white/10">
      <div className="section-inner flex flex-col gap-10">
        <SectionHeader
          eyebrow="Packages"
          title="Four ways to work with Skyfill."
          subtitle="Choose the package that matches your current stage. Each one combines the right services without showing public pricing."
        />

        <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item, index) => (
            <motion.article
              key={item.id || item.name}
              variants={fadeItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex min-h-[320px] flex-col rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <span className="absolute left-6 top-0 h-[2px] w-12 bg-brand" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-tight">
                  {item.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-brand/70">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Services offered
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.servicesOffered.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
