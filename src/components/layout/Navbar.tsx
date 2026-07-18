"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import MagneticButton from "../animations/MagneticButton";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#artist", label: "Artist" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass py-3 shadow-luxury"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="container-luxury flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="h-5 w-5 text-rose-gold" />
            </motion.div>
            <span className="font-heading text-xl md:text-2xl tracking-[0.15em] uppercase">
              Nail Atelier
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <MagneticButton key={link.href} as="a" href={link.href}>
                <span className="relative text-sm tracking-[0.1em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300 group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-gold transition-all duration-300 group-hover:w-full" />
                </span>
              </MagneticButton>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton>
              <Link
                href="#booking"
                className="relative overflow-hidden rounded-full bg-foreground text-background px-7 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-luxury group inline-block"
              >
                <span className="relative z-10">Book Now</span>
                <span className="absolute inset-0 bg-rose-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden relative z-50 p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="font-heading text-4xl tracking-wide hover:text-gradient transition-all duration-300"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#booking"
                  className="mt-4 rounded-full bg-rose-gold px-10 py-4 text-white text-sm tracking-[0.15em] uppercase"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
