import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { FadeIn } from "./Motion.jsx";
import { useData } from "../context/DataContext.jsx";

export default function Hero() {
  const { media, company } = useData();
  return (
    <section id="hero" className="section pt-24 md:pt-32">
      <div className="section-inner grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-8">
          <FadeIn>
            <span className="eyebrow">{company.name}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              <span className="block">Launch with</span>
              <span className="block">
                <span className="luxury-heading">luxury</span> precision.
              </span>
              <span className="block text-brand">Lead your category.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-base text-slate-300 md:text-lg">
              Skyfill is a premium digital marketing agency designing
              conversion-ready brand systems for leaders who demand clarity and
              control.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-wrap gap-4">
            <Button as={Link} to="/contact">
              Request a Strategy Call
            </Button>
            <Button as={Link} to="/portfolio" variant="ghost">
              View Portfolio
            </Button>
          </FadeIn>
          <FadeIn delay={0.35} className="flex flex-wrap items-center gap-6">
            <span className="chip">Brand Systems</span>
            <span className="chip">Conversion Design</span>
            <span className="chip">Growth Analytics</span>
          </FadeIn>
          <FadeIn
            delay={0.4}
            className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-slate-500"
          >
            Trusted by
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-200">
              <span>Atelier North</span>
              <span>Sommet Group</span>
              <span>Vanta Labs</span>
            </div>
          </FadeIn>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="card overflow-hidden p-6">
            <div className="relative h-72 overflow-hidden rounded-[24px] border border-white/10 bg-black/50 md:h-96 flex items-center justify-center">
              <motion.img
                className="h-full w-full object-contain"
                src="/logo.png"
                alt="Skyfill Logo"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                Skyfill
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Brand Logo
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Avg. ROAS", value: "4.6x" },
                { label: "Lead Lift", value: "+182%" },
                { label: "Launches", value: "40+" },
                { label: "Retention", value: "92%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-8 right-6 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200 shadow-soft md:flex">
            Next onboarding: 2 slots this month
          </div>
        </motion.div>
      </div>
    </section>
  );
}
