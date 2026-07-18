"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-mist via-background to-champagne dark:from-background dark:via-background dark:to-rose-mist/10" />

        {/* Mouse-follow glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(183,110,121,0.4) 0%, rgba(248,216,232,0.2) 50%, transparent 70%)",
          }}
          animate={{
            x: mousePos.x * 200 - 100,
            y: mousePos.y * 200 - 100,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        />

        {/* Floating decorative elements */}
        <FloatingElement
          className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-rose-gold/30"
          delay={0}
          duration={8}
        >
          <div className="w-full h-full rounded-full bg-rose-gold/30" />
        </FloatingElement>
        <FloatingElement
          className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-rose-gold-light/40"
          delay={1}
          duration={7}
        >
          <div className="w-full h-full rounded-full bg-rose-gold-light/40" />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-full bg-rose-blush/30"
          delay={2}
          duration={9}
        >
          <div className="w-full h-full rounded-full bg-rose-blush/30" />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-[20%] right-[25%] w-2.5 h-2.5 rounded-full bg-champagne/40"
          delay={0.5}
          duration={6}
        >
          <div className="w-full h-full rounded-full bg-champagne/40" />
        </FloatingElement>

        {/* Grain overlay */}
        <div className="absolute inset-0 noise opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24">
        {/* Left — Text */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-rose-gold">
              <span className="w-8 h-[1px] bg-rose-gold" />
              Luxury Nail Studio
              <span className="w-8 h-[1px] bg-rose-gold" />
            </span>
          </motion.div>

          {/* Headline */}
          <TextReveal
            as="h1"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading leading-[0.95] mb-8"
            delay={0.4}
          >
            Nails That Define Elegance
          </TextReveal>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Luxury nail artistry crafted with perfection. Where every detail
            is a masterpiece and every visit is an experience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <MagneticButton>
              <Link
                href="#booking"
                className="group relative overflow-hidden rounded-full bg-foreground text-background px-10 py-4 text-sm tracking-[0.15em] uppercase inline-flex items-center gap-3 transition-shadow duration-300 hover:shadow-luxury"
              >
                <span className="relative z-10">Book Appointment</span>
                <motion.span
                  className="relative z-10 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
                <span className="absolute inset-0 bg-rose-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="#gallery"
                className="group rounded-full border border-foreground/20 px-10 py-4 text-sm tracking-[0.15em] uppercase inline-flex items-center gap-3 transition-all duration-300 hover:border-rose-gold hover:text-rose-gold"
              >
                Explore Gallery
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right — Hero Image */}
        <motion.div
          className="flex-1 relative w-full max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxury">
            <Image
              src="/images/hero-nails.png"
              alt="Luxury nail art showcasing elegant rose gold designs"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer" />
          </div>

          {/* Floating badge */}
          <FloatingElement
            className="absolute -bottom-6 -left-6 md:-left-12 z-20"
            delay={1}
            duration={5}
            yOffset={10}
          >
            <div className="glass-card rounded-2xl p-4 md:p-5">
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                Trusted by
              </div>
              <div className="text-2xl font-heading">2,000+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
          </FloatingElement>

          {/* Floating star */}
          <FloatingElement
            className="absolute -top-4 -right-4 md:-right-8 z-20"
            delay={0.5}
            duration={7}
            yOffset={8}
          >
            <div className="glass-card rounded-2xl p-4">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-rose-gold fill-rose-gold"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-lg font-heading">4.9</div>
              <div className="text-[10px] text-muted-foreground">Google Reviews</div>
            </div>
          </FloatingElement>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-rose-gold to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
