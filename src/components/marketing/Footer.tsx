"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background py-20 px-6 md:px-12 lg:px-20 border-t border-background/10 overflow-hidden relative">
      <div className="absolute inset-0 noise opacity-10 pointer-events-none" />

      <div className="container-luxury max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Brand column */}
        <div className="lg:col-span-5 space-y-6">
          <Link href="/" className="group flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-rose-gold" />
            <span className="font-heading text-2xl tracking-[0.15em] uppercase text-white">
              Nail Atelier
            </span>
          </Link>
          <p className="text-muted-foreground text-sm tracking-wide leading-relaxed max-w-sm">
            Curating high-fashion nail artistry in an elegant, minimal sanctuary. Transforming nails into wearable editorial masterpieces.
          </p>
          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/5 text-muted-foreground hover:text-white hover:bg-background/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/5 text-muted-foreground hover:text-white hover:bg-background/10 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/5 text-muted-foreground hover:text-white hover:bg-background/10 transition-all duration-300"
              aria-label="Pinterest"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-white mb-2">Explore</h4>
            <ul className="space-y-2.5">
              {["Services", "Gallery", "Pricing", "Bookings"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-xs tracking-wider text-muted-foreground hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-white mb-2">Legal</h4>
            <ul className="space-y-2.5">
              {["Terms of Service", "Privacy Policy", "Sitemap"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-xs tracking-wider text-muted-foreground hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter column */}
        <div className="lg:col-span-4 space-y-6">
          <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-white">Join The Lookbook</h4>
          <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
            Subscribe to receive seasonal design lookbooks, exclusive VIP priority invitations, and style secrets.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-rose-gold font-medium tracking-wide"
            >
              Thank you for subscribing! Lookbook details are on their way.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background/5 border border-white/10 px-4 py-3 rounded-full text-xs text-white placeholder-muted-foreground focus:outline-none focus:border-rose-gold tracking-wide"
              />
              <button
                type="submit"
                className="p-3 bg-rose-gold text-white rounded-full hover:bg-rose-gold-light transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="container-luxury max-w-[1440px] mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] text-muted-foreground gap-4">
        <span>© {new Date().getFullYear()} NAIL ATELIER. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED BY WORLD-CLASS ARTISANS.</span>
      </div>
    </footer>
  );
}
