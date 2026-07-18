"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { ScrollTextReveal } from "@/components/animations/TextReveal";

export default function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
      id="story"
    >
      <div className="container-luxury">
        {/* Section label */}
        <FadeIn>
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-12">
            <span className="w-12 h-[1px] bg-rose-gold" />
            Our Story
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Editorial images */}
          <div className="relative">
            <FadeIn direction="left" delay={0.2}>
              <motion.div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury"
                style={{ y: imageY }}
              >
                <Image
                  src="/images/hero-nails.png"
                  alt="Luxury nail artistry showcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </FadeIn>

            {/* Overlapping smaller image */}
            <FadeIn direction="up" delay={0.5}>
              <motion.div
                className="absolute -bottom-8 -right-4 md:-right-12 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden shadow-luxury border-4 border-background z-10"
                style={{ rotate: imageRotate }}
              >
                <Image
                  src="/images/gallery-1.png"
                  alt="Close-up of elegant gel nail design"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </motion.div>
            </FadeIn>

            {/* Decorative circle */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-rose-gold/20" />
          </div>

          {/* Right — Story text */}
          <div className="lg:pl-8">
            <FadeIn delay={0.3}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8 leading-[1.1]">
                Where Artistry
                <br />
                <span className="text-gradient">Meets Elegance</span>
              </h2>
            </FadeIn>

            <ScrollTextReveal className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Founded with a passion for perfection, Nail Atelier is more than a salon — it is a sanctuary where beauty becomes art. Every design tells a story, every detail is intentional, and every visit is an experience crafted to make you feel extraordinary.
            </ScrollTextReveal>

            <ScrollTextReveal className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Our artisans blend traditional craftsmanship with contemporary design, using only the finest materials to create nail art that is as unique as you are. From minimalist elegance to bold editorial statements, we transform nails into wearable masterpieces.
            </ScrollTextReveal>

            {/* Stats */}
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "8+", label: "Years Experience" },
                  { number: "2K+", label: "Happy Clients" },
                  { number: "50+", label: "Design Styles" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-heading text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
