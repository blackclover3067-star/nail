"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";

const plans = [
  {
    name: "Gold Member",
    price: "₹3,999",
    billing: "quarterly",
    benefits: [
      "1 Complimentary gel manicure monthly",
      "10% discount on all add-ons and art set extensions",
      "Priority online booking window access",
      "Gold level custom member keytag",
    ],
    bgClass: "from-amber-500/10 via-background to-background border-amber-500/20",
  },
  {
    name: "Diamond Member",
    price: "₹9,999",
    billing: "half-yearly",
    benefits: [
      "2 Custom couture designs monthly",
      "Unlimited classic polish touch-ups",
      "15% discount on 3D sculpted items",
      "Complimentary cuticle oil gift set on signup",
      "Invitation to exclusive seasonal lookbook launches",
    ],
    bgClass: "from-cyan-500/10 via-background to-background border-cyan-500/20",
  },
  {
    name: "VIP Salon Club",
    price: "₹18,999",
    billing: "yearly",
    benefits: [
      "Unlimited custom couture design sessions",
      "Dedicated senior designer assignment",
      "Complimentary luxury champagne during service",
      "24-hour priority support & emergency check-in",
      "Full access to administrative dashboard rewards",
    ],
    bgClass: "from-rose-gold/25 via-background to-background border-rose-gold/30 shadow-luxury",
  },
];

export default function Membership() {
  return (
    <section className="section-padding overflow-hidden" id="membership">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
              <span className="w-12 h-[1px] bg-rose-gold" />
              The Atelier Club
              <span className="w-12 h-[1px] bg-rose-gold" />
            </span>
          </FadeIn>
          <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-7xl font-heading mb-6">
            Membership Plans
          </TextReveal>
          <FadeIn delay={0.2} className="max-w-xl mx-auto">
            <p className="text-muted-foreground text-sm tracking-wide">
              Unlock a new level of nail care. Enjoy monthly couture sessions, exclusive privileges, and priority artist access.
            </p>
          </FadeIn>
        </div>

        {/* Membership tiers */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <FadeIn key={plan.name} delay={idx * 0.1} direction="up" className="flex">
              <div
                className={`relative w-full rounded-3xl p-8 border flex flex-col justify-between transition-all duration-500 h-full bg-gradient-to-b ${plan.bgClass}`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-rose-gold" />
                    <span className="text-xs tracking-[0.25em] uppercase font-semibold text-rose-gold">
                      Exclusive Privilege
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mt-4 mb-2">
                    <span className="text-4xl font-heading font-medium">{plan.price}</span>
                    <span className="text-xs ml-2 text-muted-foreground">/ {plan.billing}</span>
                  </div>

                  <div className="h-[1px] w-full bg-border my-6" />

                  {/* Benefits */}
                  <ul className="space-y-4 mb-10">
                    {plan.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <ShieldCheck className="w-4.5 h-4.5 mt-0.5 text-rose-gold shrink-0" />
                        <span className="text-sm tracking-wide leading-relaxed text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <MagneticButton>
                  <a
                    href="#booking"
                    className="w-full py-4 rounded-full text-center text-xs tracking-[0.2em] uppercase inline-block font-medium border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-300"
                  >
                    Join The Club
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
