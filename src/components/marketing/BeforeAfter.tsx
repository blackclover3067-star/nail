"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <section className="section-padding overflow-hidden" id="before-after">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Description */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
                <span className="w-12 h-[1px] bg-rose-gold" />
                The Transformation
              </span>
            </FadeIn>
            <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Flawless Artistry
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Witness the power of precision. We take great pride in restoring, extending, and beautifying natural nails. Slide the bar to reveal the delicate restoration work and premium gel overlays executed by our master technicians.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-4">
                {[
                  "Premium organic cuticle restoration",
                  "Perfect shape framing & extension overlay",
                  "Hand-painted custom nail couture art",
                ].map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
                    <span className="text-sm tracking-wide text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="lg:col-span-7 flex justify-center">
            <FadeIn direction="right" delay={0.2} className="w-full max-w-xl">
              <div
                ref={containerRef}
                className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-luxury cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              >
                {/* Before Image (Left/Lower Layer) */}
                <div className="absolute inset-0 grayscale contrast-125 brightness-90">
                  <Image
                    src="/images/hero-nails.png"
                    alt="Before Treatment"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md">
                    Before Restoration
                  </div>
                </div>

                {/* After Image (Right/Upper Layer with Clip Path) */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <Image
                    src="/images/hero-nails.png"
                    alt="After Treatment"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute top-4 right-4 bg-rose-gold/80 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md">
                    After Couture
                  </div>
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider handle knob */}
                  <div className="w-10 h-10 rounded-full bg-white shadow-luxury flex items-center justify-center -ml-5 border border-rose-gold">
                    <span className="text-[10px] text-rose-gold select-none">↔</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
