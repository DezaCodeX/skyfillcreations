import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { Stagger, fadeItem } from "./Motion.jsx";
import { testimonials } from "../data/testimonials.js";
import { media } from "../data/media.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="section-inner flex flex-col gap-10">
        <SectionHeader
          eyebrow="Client Feedback"
          title="Built on trust, measured in outcomes."
          subtitle="We partner with leadership teams who expect elegance, precision, and performance."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="card flex flex-col gap-6 overflow-hidden p-8"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Featured feedback</span>
              <span className="text-brand">Skyfill partners</span>
            </div>
            <p className="text-lg font-medium leading-relaxed text-white md:text-xl">
              “Skyfill elevated our positioning overnight. The creative quality
              felt cinematic, and the performance results were immediate.”
            </p>
            <div className="mt-auto flex items-center gap-4">
              <motion.img
                src={media.testimonialImage}
                alt="Client portrait"
                className="h-12 w-12 rounded-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold">David N.</p>
                <p className="text-xs text-slate-400">CEO, Lumen Finance</p>
              </div>
            </div>
          </motion.div>
          <div className="card overflow-hidden p-6">
            <motion.img
              src={media.contactImage}
              alt="Skyfill client teams"
              className="h-full w-full rounded-[20px] object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              loading="lazy"
            />
          </div>
        </div>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeItem}
              className="glass flex h-full flex-col gap-6 rounded-[28px] p-6"
            >
              <p className="text-sm text-slate-200">“{testimonial.quote}”</p>
              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-slate-400">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
