import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { FadeIn, Stagger, fadeItem } from "./Motion.jsx";
import { useData } from "../context/DataContext.jsx";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M6.5 3.75h3.2c.45 0 .84.32.93.76l.72 3.58c.08.4-.12.81-.48.98l-1.92.92a15.7 15.7 0 0 0 5.57 5.57l.92-1.92c.17-.36.58-.56.98-.48l3.58.72c.44.09.76.48.76.93v3.2c0 .69-.51 1.27-1.2 1.34-.62.06-1.21.09-1.78.09-7.73 0-14-6.27-14-14 0-.57.03-1.16.09-1.78.07-.69.65-1.2 1.34-1.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4.5 6.75h15a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m5.5 8.25 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export default function Portfolio() {
  const { founder: founderProfile } = useData();
  const {
    name,
    role,
    about,
    profileImage,
    profileImageFit,
    qualities,
    workImages,
    contact,
  } = founderProfile;

  const imageFitClass =
    profileImageFit === "contain"
      ? "object-contain object-center"
      : "object-contain object-center";

  return (
    <section id="portfolio" className="section">
      <div className="section-inner flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="Founder Profile"
            title="About the Founder"
            subtitle="Explore the vision behind Skyfill Creations-featuring the founder's journey, creative approach, signature work, and direct ways to collaborate."
          />
        </div>

        <motion.article
          className="grid gap-0 overflow-hidden rounded-[28px] bg-white/5 lg:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="p-8 md:p-10">
            <div>
              <span className="chip">Founder</span>
              <h3 className="mt-5 text-2xl font-semibold md:text-3xl">{name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                {role}
              </p>
              <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-slate-300">
                {about}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button as={Link} to="/contact">
                Talk to Founder
              </Button>
              <Button as={Link} to="/services" variant="ghost">
                View Services
              </Button>
            </div>
          </div>

          <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-black md:h-[420px]">
            <motion.img
              src={profileImage}
              alt={name}
              className={`h-full w-full ${imageFitClass}`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
              Founder Image
            </div>
          </div>
        </motion.article>

        <FadeIn>
          <section className="card p-8 md:p-10">
            <h3 className="text-xl font-semibold">Qualities of {name}</h3>
            <Stagger className="mt-6 flex flex-wrap gap-3">
              {qualities.map((quality) => (
                <motion.span
                  key={quality}
                  variants={fadeItem}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  {quality}
                </motion.span>
              ))}
            </Stagger>
          </section>
        </FadeIn>

        <section className="card p-8 md:p-10">
          <h3 className="text-xl font-semibold">Work Images</h3>
          <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                variants={fadeItem}
                className="group relative flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-black md:h-48"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <motion.img
                  src={image}
                  alt={`Work sample ${index + 1}`}
                  className="h-full w-full object-contain object-center"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-amber-300/20 via-transparent to-cyan-300/20" />
                <div className="pointer-events-none absolute inset-y-0 left-[-30%] w-20 -translate-x-full rotate-12 bg-white/20 blur-xl transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 transition-all duration-300 group-hover:ring-white/20" />
              </motion.div>
            ))}
          </Stagger>
        </section>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Mobile", value: contact.phone, href: `tel:${contact.phone}`, icon: PhoneIcon },
            { label: "Mail", value: contact.email, href: `mailto:${contact.email}`, icon: MailIcon },
            {
              label: "Instagram",
              value: contact.instagramId,
              href: "https://www.instagram.com/gireesh__pg?igsh=bnp1c25qbnhma2U4",
              icon: InstagramIcon,
            },
          ].map((item) => (
            <motion.article
              key={item.label}
              variants={fadeItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3 text-slate-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-brand ring-1 ring-white/10">
                  <item.icon />
                </span>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
              </div>
              <a
                href={item.href}
                target={item.label === "Instagram" ? "_blank" : undefined}
                rel={item.label === "Instagram" ? "noreferrer" : undefined}
                className="mt-4 inline-flex text-base text-white transition hover:text-brand"
              >
                {item.value}
              </a>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
