"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const hours = [
  { days: "Monday - Friday", time: "10:00 AM - 08:00 PM" },
  { days: "Saturday", time: "10:00 AM - 09:00 PM" },
  { days: "Sunday", time: "11:00 AM - 06:00 PM" },
];

export default function Location() {
  return (
    <section className="section-padding overflow-hidden bg-background" id="contact">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Location details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <FadeIn>
                <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
                  <span className="w-12 h-[1px] bg-rose-gold" />
                  Find Us
                </span>
              </FadeIn>
              <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
                Our Atelier
              </TextReveal>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
                  Located in the heart of Mumbai's luxury fashion district. Step into a sanctuary of editorial aesthetics, calming neutrals, and rose gold details.
                </p>
              </FadeIn>
            </div>

            {/* Address & contact details */}
            <div className="space-y-6">
              <FadeIn delay={0.3} direction="up" className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs tracking-widest uppercase font-semibold text-foreground mb-1">
                    Atelier Location
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    102, Premium Fashion Lane, Colaba, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="up" className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs tracking-widest uppercase font-semibold text-foreground mb-1">
                    Atelier Hours
                  </h4>
                  <div className="space-y-2 mt-2">
                    {hours.map((h, i) => (
                      <div key={i} className="flex justify-between text-sm gap-8">
                        <span className="text-muted-foreground">{h.days}:</span>
                        <span className="font-medium text-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* WhatsApp Concierge */}
            <FadeIn delay={0.5} direction="up" className="pt-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white hover:bg-[#20ba5a] px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-colors shadow-luxury font-medium"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                WhatsApp Concierge
              </a>
            </FadeIn>
          </div>

          {/* Map display */}
          <div className="lg:col-span-7">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-border shadow-luxury bg-muted">
                {/* Styled elegant map embed overlay / placeholder style */}
                <iframe
                  title="Nail Atelier Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.219808383832!2d72.825838!3d18.90694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e891396b27%3A0xffa545b745ef92a6!2sColaba%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721300000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.05) brightness(0.95)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
