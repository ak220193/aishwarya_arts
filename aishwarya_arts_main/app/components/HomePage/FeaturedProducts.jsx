"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Ganesha",
      img: "/assets/bestsellers/image1.jpg",
      desc: "Beautifully handcrafted Tanjore painting of Lord Ganesha.",
      price: "₹12,000",
      size: "12x16 inch",
    },
    {
      name: "Krishna",
      img: "/assets/bestsellers/image1.jpg",
      desc: "Vibrant Krishna artwork in gold foil painting finish with beads.",
      price: "₹15,000",
      size: "14x18 inch",
    },
    {
      name: "Shiva",
      img: "/assets/bestsellers/image1.jpg",
      desc: "Hand-painted Shiva portrait with traditional detailing.",
      price: "₹10,500",
      size: "10x14 inch",
    },
    {
      name: "Ganesha",
      img: "/assets/bestsellers/image1.jpg",
      desc: "Beautifully handcrafted Tanjore painting of Lord Ganesha.",
      price: "₹12,000",
      size: "12x16 inch",
    },
    {
      name: "Krishna",
      img: "/assets/bestsellers/image1.jpg",
      desc: "Vibrant Krishna artwork in gold foil painting finish with beads.",
      price: "₹15,000",
      size: "14x18 inch",
    },
    {
      name: "Shiva",
      img: "/assets/bestsellers/image1.jpg",
      desc: "Hand-painted Shiva portrait with traditional detailing.",
      price: "₹10,500",
      size: "10x14 inch",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8  text-center cursor-pointer inline-block group">
          Featured Selling Products
          <span className="block h-1 w-0 bg-emerald-500 transition-all group-hover:w-full mt-1"></span>
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            className="bg-white backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
             <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-200/30 via-amber-100/20 to-transparent opacity-60 blur-3xl animate-pulse pointer-events-none"></div>
            {/* Image */}
            <div className="relative w-full h-100">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/assets/bestsellers/image1.jpg"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1 tracking-wide leading-snug">
                  {product.name}
                </h3>
                <p className="text-black text-lg mb-2">{product.desc}</p>
                <p className="text-black text-lg">Frame Size: {product.size}</p>
                <p className="text-black font-medium text-xl">{product.price}</p>
                
              </div>

              <Link
                href="/tanjore"
                className="py-2 mt-5 bg-emerald-500 text-center hover:bg-emerald-600 text-white font-semibold rounded-md  shadow-emerald-400/50 transition-transform transform hover:scale-105 hover:shadow-emerald-500/70 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                role="button"
                aria-label="Explore Tanjore art collections"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
