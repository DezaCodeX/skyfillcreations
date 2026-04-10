import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { faqItems } from "../data/faq.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Quick answers. Real clarity."
            subtitle="Transparency is a premium experience. Here is everything leadership teams ask before they partner with us."
          />
          <div className="card hidden h-[260px] items-center justify-center border-white/10 bg-black text-center text-sm text-slate-300 lg:flex">
            Precision. Confidence. Momentum.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                className="card overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="text-brand">{isOpen ? "–" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-5 text-sm text-slate-300">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
