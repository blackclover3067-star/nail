"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";

const pricingTiers = [
  {
    name: "Classic Atelier",
    price: "₹1,200",
    description: "Essential care for everyday elegance.",
    features: [
      "Custom cuticle grooming",
      "Single color premium gel finish",
      "Hydrating botanical hand massage",
      "Valid for up to 3 weeks wear",
    ],
    popular: false,
  },
  {
    name: "Couture Design",
    price: "₹2,400",
    description: "Bespoke hand-painted nail designs.",
    features: [
      "Advanced shape prep & extensions",
      "Multi-tonal ombre or custom French tip",
      "Up to 4 accent nails with custom art",
      "Caviar oil hand mask treatment",
      "Priority design consultation",
    ],
    popular: true,
  },
  {
    name: "Editorial Couture",
    price: "₹4,500",
    description: "Limitless 3D & chrome masterpiece designs.",
    features: [
      "Full 3D sculptural extension set",
      "Imported premium mirror chrome finishes",
      "Encapsulated floral or rhinestone detailing",
      "24k gold leaf infusion detailing",
      "Complimentary design polish check-in",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="section-padding overflow-hidden bg-rose-mist/10" id="pricing">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
              <span className="w-12 h-[1px] bg-rose-gold" />
              Pricing Menu
              <span className="w-12 h-[1px] bg-rose-gold" />
            </span>
          </FadeIn>
          <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-7xl font-heading mb-6">
            Services & Pricing
          </TextReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <FadeIn key={tier.name} delay={idx * 0.1} direction="up" className="flex">
              <div
                className={`relative w-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 h-full ${
                  tier.popular
                    ? "bg-foreground text-background shadow-luxury"
                    : "glass-card hover:border-rose-gold/30"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-5 right-5 bg-rose-gold text-white text-[10px] tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full font-medium">
                    Most Requested
                  </div>
                )}

                <div>
                  <span className={`text-xs tracking-[0.25em] uppercase font-semibold ${
                    tier.popular ? "text-rose-gold-light" : "text-rose-gold"
                  }`}>
                    {tier.name}
                  </span>
                  <div className="flex items-baseline mt-4 mb-2">
                    <span className="text-4xl md:text-5xl font-heading font-medium">
                      {tier.price}
                    </span>
                    <span className={`text-xs ml-2 tracking-wide ${
                      tier.popular ? "text-muted-foreground/80" : "text-muted-foreground"
                    }`}>
                      / session
                    </span>
                  </div>
                  <p className={`text-sm mb-8 leading-relaxed ${
                    tier.popular ? "text-muted-foreground" : "text-muted-foreground"
                  }`}>
                    {tier.description}
                  </p>

                  <div className={`h-[1px] w-full mb-8 ${
                    tier.popular ? "bg-background/10" : "bg-border"
                  }`} />

                  {/* Features list */}
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.popular ? "text-rose-gold" : "text-rose-gold"
                        }`} />
                        <span className="text-sm tracking-wide leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <MagneticButton>
                  <a
                    href="#booking"
                    className={`w-full py-4 rounded-full text-center text-xs tracking-[0.2em] uppercase inline-block font-medium border transition-colors ${
                      tier.popular
                        ? "bg-white text-black border-white hover:bg-rose-gold hover:text-white hover:border-rose-gold"
                        : "bg-transparent border-foreground/20 hover:border-rose-gold hover:text-rose-gold"
                    }`}
                  >
                    Select Plan
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
