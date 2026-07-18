"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Share2, Bookmark, Check } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const trendingItems = [
  {
    id: 1,
    title: "Glazed Chrome French",
    src: "/images/gallery-1.png",
    likes: 1240,
  },
  {
    id: 2,
    title: "Pearl Embedded Blush",
    src: "/images/gallery-2.png",
    likes: 856,
  },
  {
    id: 3,
    title: "Editorial Rose Gold Abstract",
    src: "/images/hero-nails.png",
    likes: 2190,
  },
  {
    id: 4,
    title: "Minimalist Fine Line Art",
    src: "/images/nail-services.png",
    likes: 932,
  },
];

export default function TrendingDesigns() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [sharedId, setSharedId] = useState<number | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const triggerShare = (id: number) => {
    setSharedId(id);
    setTimeout(() => setSharedId(null), 2000);
  };

  return (
    <section className="section-padding overflow-hidden bg-rose-mist/10" id="trending">
      <div className="container-luxury">
        {/* Section title & description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
                <span className="w-12 h-[1px] bg-rose-gold" />
                This Week's Favorites
              </span>
            </FadeIn>
            <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading">
              Trending Lookbook
            </TextReveal>
          </div>
          <FadeIn delay={0.2} className="max-w-md">
            <p className="text-muted-foreground text-sm tracking-wide">
              Discover the most requested bespoke nail couture styles of the season. Save your favorite designs directly to your virtual nail lookbook.
            </p>
          </FadeIn>
        </div>

        {/* Carousel grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1} direction="up">
              <div className="group relative rounded-2xl overflow-hidden glass-card p-3 flex flex-col h-full">
                {/* 3D image holder */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-10">
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          favorites.includes(item.id) ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => triggerShare(item.id)}
                        className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors relative"
                      >
                        {sharedId === item.id ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => toggleSave(item.id)}
                        className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            saved.includes(item.id) ? "fill-rose-gold-light text-rose-gold-light" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer text of card */}
                <div className="px-2 pb-2">
                  <h3 className="text-sm font-medium tracking-wide mb-1 text-foreground">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                      Couture Series
                    </span>
                    <span className="text-xs text-rose-gold font-medium">
                      {item.likes + (favorites.includes(item.id) ? 1 : 0)} saves
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
