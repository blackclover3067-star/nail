"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const timelineEvents = [
  {
    year: "2018",
    title: "Vogue Beauty Nominee",
    desc: "Recognized as top emerging nail designer in high fashion editorial print.",
  },
  {
    year: "2020",
    title: "Salon Excellence Gold Award",
    desc: "Won premium hygiene and couture luxury styling honors.",
  },
  {
    year: "2023",
    title: "Nail Atelier Launch",
    desc: "Established a sanctuary in Mumbai dedicated to premium nail artistry.",
  },
];

export default function MeetTheArtist() {
  return (
    <section className="section-padding overflow-hidden bg-background" id="artist">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-luxury">
                <Image
                  src="/images/artist-portrait.png"
                  alt="Elena Rostova - Master Nail Artist"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-heading">Elena Rostova</h3>
                  <p className="text-xs tracking-widest uppercase text-rose-gold-light">
                    Founder & Creative Director
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
                <span className="w-12 h-[1px] bg-rose-gold" />
                The Artisan
              </span>
            </FadeIn>
            <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8">
              Crafting Masterpieces
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                With nearly a decade of experience styling for editorial runways, brand shoots, and VIP clientele, Elena brings a meticulous design eye to the Nail Atelier experience.
              </p>
            </FadeIn>

            {/* Vertical timeline */}
            <div className="relative border-l border-rose-gold/20 pl-8 space-y-10">
              {timelineEvents.map((event, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} direction="up" className="relative">
                  {/* Circle dot on line */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border border-rose-gold flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-gold" />
                  </div>
                  <div>
                    <span className="font-heading text-lg text-rose-gold">{event.year}</span>
                    <h4 className="text-lg font-medium tracking-wide text-foreground mt-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {event.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
