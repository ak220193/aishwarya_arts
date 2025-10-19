"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  const images = [
    { src: "/assets/about/Rectangle 55.svg", alt: "Tanjore Art" },
    { src: "/assets/about/Rectangle 52.svg", alt: "Gold Foil Work" },
    { src: "/assets/about/Rectangle 54.svg", alt: "Handcrafted Painting" },
    { src: "/assets/about/Rectangle 53.svg", alt: "Art Detail" },
  ];

  const infoBoxes = [
    { title: "100+ Years", desc: "of artistic tradition and precision" },
    { title: "500+ Designs", desc: "completed with intricate creativity" },
    { title: "Art Enthusiasts", desc: "Cherishing handmade excellence" },
  ];

  return (
    <section className="bg-black/90 w-full h-auto">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left - Animated Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-2xl overflow-hidden aspect-square shadow-lg hover:shadow-2xl bg-gradient-to-t from-yellow-200/20 via-transparent to-transparent"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/assets/about/placeholder.png"
                />
              </motion.div>
            ))}
          </div>

          {/* Right - Content */}
          <motion.div
            className="flex flex-col justify-center text-center text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              The Legacy of Tanjore Art
            </h1>
            
            <p className="text-white mb-10  tracking-tight text-xl">
              Rooted in centuries of precision and devotion, Tanjore art blends
              gold, color, and intricate design to reflect timeless tradition.
              Each piece is a reflection of meticulous craftsmanship passed down
              through generations.
            </p>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {infoBoxes.map((box, idx) => (
                <motion.div
                  key={idx}
                  className="relative p-4 rounded-xl text-center bg-white backdrop-blur-md overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl  blur-xl animate-pulse"></div>
                  <h3 className="relative text-xl font-semibold mb-2 z-10 text-black">
                    {box.title}
                  </h3>
                  <p className="relative text-black text-sm z-10">{box.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="relative z-10 text-white py-4  bg-emerald-500 hover:bg-emerald-400 rounded-lg font-medium text-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
