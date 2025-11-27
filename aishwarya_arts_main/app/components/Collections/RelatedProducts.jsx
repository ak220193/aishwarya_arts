"use client";

import React from "react";
import Link from "next/link";
import { allProducts } from "../../data/products";

export default function RelatedProducts() {
  const related = allProducts.slice(0, 3);

  return (
    <div className="my-20 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Related Products</h1>

      <div className="flex flex-col gap-8">
        {related.map((product) => (
          <Link
            href={`/collections/${product.slug}`}
            key={product.slug}
            className="group flex flex-col sm:flex-row gap-8 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition"
          >
            {/* LEFT IMAGE */}
            <div className="w-full sm:w-60 h-60 flex items-center justify-center overflow-hidden rounded-xl bg-white">
              <img
                src={product.img}
                alt={product.name}
                className="object-contain w-full h-full group-hover:scale-105 transition"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-md mt-1">{product.category}</p>

                {/* RATING */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-yellow-500 text-lg">★★★★☆</span>
                  <span className="text-sm text-gray-500">(5 reviews)</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-md mt-4 leading-relaxed line-clamp-3">
                  {product.desc}
                </p>

                {/* PRICE */}
                <div className="mt-4 text-xl font-bold text-emerald-700">
                  Price on Request
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-6 flex flex-row justify-between gap-4">
                <button className="w-1/2 bg-gradient-to-r from-yellow-700 to-yellow-500 shadow-md text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                  Buy Now
                </button>

                <button className="w-1/2 border border-emerald-600 text-emerald-700 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
