import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button.jsx";
import { FadeIn } from "./Motion.jsx";
import SectionHeader from "./SectionHeader.jsx";
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
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState("");
  const { company } = useData();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const companyName = (formData.get("company") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const subject = `New inquiry from ${name || "Website visitor"}`;
    const body = [
      `Name: ${name || "N/A"}`,
      `Email: ${email || "N/A"}`,
      `Company: ${companyName || "N/A"}`,
      "",
      "Project Summary:",
      message || "N/A",
    ].join("\n");

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitMessage(
      `Your email app has been opened. Send the draft to complete your inquiry to ${company.email}.`
    );
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner grid gap-10 lg:grid-cols-[1fr_1fr]">
        <FadeIn>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build your next luxury launch."
            subtitle="Share your goals and we will respond with a premium growth roadmap within 48 hours."
          />
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-brand ring-1 ring-white/10">
                <MailIcon />
              </span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-brand ring-1 ring-white/10">
                <PhoneIcon />
              </span>
              <div className="flex flex-col gap-1">
                <a href={`tel:${company.phone}`}>{company.phone}</a>
                <a href={`tel:${company.phone2}`}>{company.phone2}</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-brand ring-1 ring-white/10">
                <InstagramIcon />
              </span>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {company.instagramId}
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/portfolio">
              Explore Work
            </Button>
            <Button as={Link} to="/services" variant="ghost">
              View Services
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form
            className="glass grid gap-4 rounded-[28px] p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Full Name
                <input
                  type="text"
                  name="name"
                  className="input mt-2"
                  placeholder="Avery Johnson"
                  required
                />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email
                <input
                  type="email"
                  name="email"
                  className="input mt-2"
                  placeholder="hello@brand.com"
                  required
                />
              </label>
            </div>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Company
              <input
                type="text"
                name="company"
                className="input mt-2"
                placeholder="Brand or venture"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Project Summary
              <textarea
                name="message"
                rows="4"
                className="input mt-2 resize-none"
                placeholder="Share goals, timelines, and any key challenges."
                required
              />
            </label>
            {submitMessage ? (
              <p className="text-sm text-slate-300">{submitMessage}</p>
            ) : null}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span>Typical engagement begins at $8K/month.</span>
              <Button type="submit">Send Inquiry</Button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
