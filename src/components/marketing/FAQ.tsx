"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const faqItems = [
  {
    question: "How long do gel nails typically last?",
    answer: "Our premium gel overlays are designed to last between 3 to 4 weeks with proper care. We recommend cuticle oil usage to keep the nail bed hydrated.",
  },
  {
    question: "Do you offer extensions for damaged nails?",
    answer: "Yes, we specialize in damage restoration. Our senior artists assess your nail health and apply lightweight gel overlays to help your natural nails grow safely underneath.",
  },
  {
    question: "Can I customize the 3D art design?",
    answer: "Absolutely. All couture and editorial sets include a design consultation where you can share inspiration. We hand-sculpt bespoke 3D motifs to suit your theme.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours notice for cancellation or rescheduling. Cancelations made less than 24 hours prior will incur a charge equal to 50% of the service fee.",
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-padding overflow-hidden bg-rose-mist/10" id="faq">
      <div className="container-luxury max-w-3xl">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
              <span className="w-12 h-[1px] bg-rose-gold" />
              Information
              <span className="w-12 h-[1px] bg-rose-gold" />
            </span>
          </FadeIn>
          <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8">
            Frequently Asked
          </TextReveal>

          {/* Search bar */}
          <FadeIn delay={0.2} className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-6 py-6 bg-background rounded-full border-border focus-visible:ring-rose-gold text-sm tracking-wide"
            />
          </FadeIn>
        </div>

        {/* Custom Animated Accordions */}
        <FadeIn delay={0.3}>
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-border rounded-2xl bg-background overflow-hidden transition-all duration-300 shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-heading text-lg font-medium text-foreground p-6 focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-rose-gold" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-sm tracking-wide text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-sm py-8">
              No matching questions found. Try search keywords like "gel" or "cancel".
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
