import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import { Stagger, fadeItem } from "../components/Motion.jsx";
import { portfolioProjects } from "../data/portfolio.js";

export default function WorkGalleryPage() {
  return (
    <section className="section">
      <div className="section-inner flex flex-col gap-10">
        <SectionHeader
          eyebrow="Work Gallery"
          title="A visual archive of Skyfill’s premium work."
          subtitle="Explore our signature visual language across branding, photography, podcasts, and performance-led campaigns."
        />
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
