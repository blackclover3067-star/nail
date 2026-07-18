"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const services = [
  {
    title: "Gel Nails",
    description: "Long-lasting, glossy finish with chip-resistant formula",
    price: "From ₹1,200",
    image: "/images/gallery-1.png",
    color: "from-rose-blush/40 to-rose-mist/40",
  },
  {
    title: "Acrylic Nails",
    description: "Sculpted perfection with custom shapes and lengths",
    price: "From ₹1,500",
    image: "/images/gallery-2.png",
    color: "from-champagne/40 to-rose-mist/40",
  },
  {
    title: "Bridal Nails",
    description: "Bespoke designs for your most special day",
    price: "From ₹2,500",
    image: "/images/gallery-2.png",
    color: "from-rose-mist/40 to-champagne/40",
  },
  {
    title: "French Tips",
    description: "Timeless elegance with a modern twist",
    price: "From ₹800",
    image: "/images/gallery-1.png",
    color: "from-cream/80 to-rose-mist/40",
  },
  {
    title: "Chrome Nails",
    description: "Mirror-like metallic finish in stunning shades",
    price: "From ₹1,800",
    image: "/images/gallery-1.png",
    color: "from-rose-gold-light/20 to-rose-mist/40",
  },
  {
    title: "3D Nail Art",
    description: "Dimensional designs that make a statement",
    price: "From ₹2,000",
    image: "/images/nail-services.png",
    color: "from-rose-blush/40 to-champagne/40",
  },
  {
    title: "Nail Extensions",
    description: "Custom length and shape to perfect your look",
    price: "From ₹1,400",
    image: "/images/gallery-1.png",
    color: "from-champagne/40 to-cream/80",
  },
  {
    title: "Luxury Pedicure",
    description: "Complete foot care with premium products",
    price: "From ₹1,000",
    image: "/images/gallery-2.png",
    color: "from-rose-mist/40 to-rose-blush/40",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding overflow-hidden" id="services">
      <div className="container-luxury">
        {/* Section header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
              <span className="w-12 h-[1px] bg-rose-gold" />
              What We Offer
              <span className="w-12 h-[1px] bg-rose-gold" />
            </span>
          </FadeIn>

          <TextReveal
            as="h2"
            className="text-4xl md:text-5xl lg:text-7xl font-heading mb-6"
          >
            Our Services
          </TextReveal>

          <FadeIn delay={0.3}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each service is a curated experience, designed to elevate your
              beauty with precision and artistry.
            </p>
          </FadeIn>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1} direction="up">
              <motion.div
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-[380px]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} transition-opacity duration-500`}
                />

                {/* Glass border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 dark:border-white/5" />

                {/* Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  {/* Price badge */}
                  <motion.div
                    className="absolute top-5 right-5 glass-card rounded-full px-4 py-1.5 text-xs tracking-wider"
                    animate={{
                      scale: hoveredIndex === i ? 1.05 : 1,
                    }}
                  >
                    {service.price}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-rose-gold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      x: hoveredIndex === i ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Book Now</span>
                    <span>→</span>
                  </motion.div>
                </div>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow:
                      hoveredIndex === i
                        ? "inset 0 0 60px rgba(183,110,121,0.1)"
                        : "inset 0 0 0px rgba(183,110,121,0)",
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
