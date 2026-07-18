"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const testimonials = [
  {
    quote: "The attention to detail here is unmatched. My rose gold chrome extension looks completely flawless and lasts for weeks.",
    author: "Aditi Sharma",
    role: "Editorial Stylist",
  },
  {
    quote: "An absolute luxury experience. Elena's custom hand-painted lace bridal design was the talk of my wedding ceremony.",
    author: "Priya Patel",
    role: "Creative Director",
  },
  {
    quote: "I love the minimal dark aesthetic of the studio. Fast booking, premium organic products, and stunning execution.",
    author: "Meera Sen",
    role: "Art Director",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding overflow-hidden bg-rose-mist/10" id="testimonials">
      <div className="container-luxury max-w-4xl">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
              <span className="w-12 h-[1px] bg-rose-gold" />
              Client Love
              <span className="w-12 h-[1px] bg-rose-gold" />
            </span>
          </FadeIn>
          <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Testimonials
          </TextReveal>
        </div>

        {/* Carousel Testimonial Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 md:p-12 text-center relative w-full"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-rose-gold/10" />

              {/* Star Rating */}
              <div className="flex justify-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Star className="w-5 h-5 text-rose-gold fill-rose-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-lg md:text-xl font-heading italic leading-relaxed text-foreground mb-6">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author & Role */}
              <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-rose-gold">
                {testimonials[activeIndex].author}
              </h4>
              <span className="text-xs text-muted-foreground tracking-wide mt-1 block">
                {testimonials[activeIndex].role}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullet Navigation Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "bg-rose-gold w-8" : "bg-rose-gold/30 hover:bg-rose-gold/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
