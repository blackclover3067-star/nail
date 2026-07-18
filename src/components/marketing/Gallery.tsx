"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const categories = ["All", "Gel", "Acrylic", "Chrome", "Bridal"];

const galleryItems = [
  {
    id: 1,
    category: "Gel",
    title: "Blush Ombre Gel",
    src: "/images/gallery-1.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    category: "Bridal",
    title: "Lace Bridal Elegance",
    src: "/images/gallery-2.png",
    aspect: "aspect-[4/5]",
  },
  {
    id: 3,
    category: "Chrome",
    title: "Rose Gold Mirror",
    src: "/images/hero-nails.png",
    aspect: "aspect-square",
  },
  {
    id: 4,
    category: "Acrylic",
    title: "Sculpted Nude Matte",
    src: "/images/nail-services.png",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    category: "Gel",
    title: "High Gloss Rose Ombre",
    src: "/images/gallery-1.png",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    category: "Bridal",
    title: "Pearl Embedded Chic",
    src: "/images/gallery-2.png",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section className="section-padding overflow-hidden bg-rose-mist/30 dark:bg-rose-mist/5" id="gallery">
      <div className="container-luxury">
        {/* Section Title */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
              <span className="w-12 h-[1px] bg-rose-gold" />
              Inspiration Board
              <span className="w-12 h-[1px] bg-rose-gold" />
            </span>
          </FadeIn>
          <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-7xl font-heading mb-6">
            Curated Creations
          </TextReveal>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-6 py-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <span className={activeCategory === cat ? "text-rose-gold font-medium" : "text-muted-foreground hover:text-foreground"}>
                {cat}
              </span>
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCategoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-rose-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Pinterest-style Masonry Columns */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer shadow-luxury"
                onClick={() => setSelectedImage(item.src)}
              >
                {/* Image Wrap */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-muted`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-rose-gold-light mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-heading text-white">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Fullscreen Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            {/* Close trigger */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            />
            {/* Enlarged image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full aspect-[4/5]"
            >
              <Image
                src={selectedImage}
                alt="Luxury Nail Art Creation"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
