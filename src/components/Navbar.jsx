import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { useData } from "../context/DataContext.jsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Work Gallery", href: "/work-gallery" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { company } = useData();
  const MotionLink = motion(Link);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-6 z-50"
    >
      <div className="section-inner">
        <nav className="glass flex items-center justify-between rounded-full px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={company.logo}
              alt={`${company.shortName} logo`}
              className="h-9 w-9 rounded-full object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="leading-none text-white">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-300">
                {company.brand?.line1 || "Studio"}
              </span>
              <span className="block text-lg font-semibold tracking-tight">
                {company.brand?.line2 || company.shortName}
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-slate-300 md:flex">
            {navLinks.map((link) => (
              <MotionLink
                key={link.href}
                to={link.href}
                className="transition hover:text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {link.label}
              </MotionLink>
            ))}
          </div>
          <div className="hidden md:block">
            <Button as={Link} to="/contact">
              Book a Call
            </Button>
          </div>
          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="mt-1 block h-0.5 w-6 bg-white/70" />
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="section-inner mt-4 md:hidden"
          >
            <div className="glass flex flex-col gap-4 rounded-3xl px-6 py-6 text-sm">
              {navLinks.map((link) => (
                <MotionLink
                  key={link.href}
                  to={link.href}
                  className="text-slate-200 transition hover:text-white"
                  onClick={() => setOpen(false)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {link.label}
                </MotionLink>
              ))}
              <Button as={Link} to="/contact" className="w-full">
                Book a Call
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
