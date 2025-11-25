"use client";

import React, { useMemo, useState } from "react";
import { allProducts } from "../../data/products";
import Link from "next/link";
import RelatedProducts from "../../components/Collections/RelatedProducts";

export default function ProductPage({ params }) {
  const { slug } = params;

  // find the product dynamically
  const product = allProducts.find((p) => p.slug === slug);

  // if not found, show a friendly message
  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
          <p className="text-gray-600">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/collections"
            className="inline-block mt-4 text-emerald-700"
          >
            Back to collections
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images?.length ? product.images : [product.img];
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState(
    product.variations?.sizes?.[0] ?? ""
  );
  const [selectedFrame, setSelectedFrame] = useState(
    product.variations?.frameTypes?.[0] ?? ""
  );
  const [qty, setQty] = useState(1);

  // compute simple price display logic (min/max) if prices object exists
  const priceInfo = useMemo(() => {
    const priceValues = Object.values(product.variations?.prices || {});
    if (priceValues.length === 0) return { hasPrice: false };
    const min = Math.min(...priceValues);
    const max = Math.max(...priceValues);
    return { hasPrice: true, min, max };
  }, [product]);

  // related products (simple: same category, exclude current; fallback: first 3 others)
  const related = useMemo(() => {
    const sameCat = allProducts.filter(
      (p) => p.category === product.category && p.slug !== product.slug
    );
    if (sameCat.length >= 3) return sameCat.slice(0, 3);
    return allProducts.filter((p) => p.slug !== product.slug).slice(0, 3);
  }, [product]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
      {/* top two-column area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* IMAGES - left */}
        <div className="lg:col-span-6 flex gap-6 items-center justify-center">
          {/* thumbnails column */}
          <div className="hidden md:flex flex-col gap-4 w-24">
            {images.map((src, i) => (
              <button
                key={src + i}
                onClick={() => setMainImage(src)}
                className={`h-24 w-24 rounded-lg overflow-hidden border ${
                  mainImage === src ? "border-emerald-700" : "border-gray-200"
                } p-1 bg-white shadow-sm hover:shadow-md transition`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          {/* main image */}
          <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative w-full max-w-[720px] group">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-[550px] md:h-[650px] object-contain transition-transform duration-300 hover:scale-105"
              />
              {/* small badges (in top-left/right of image) */}
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-700 text-white text-xs px-3 py-1 rounded-md shadow">
                  New
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <button className="bg-white p-2 rounded-full border shadow hover:bg-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4 8 4 9.5 5 10.5 6.21 11.5 5 13 4 14.5 4 17.01 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS - right */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            {product.name}
          </h1>

          {/* short info */}
          <p className="text-gray-500 mt-2">{product.category}</p>

          {/* rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < 4 ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">(5 reviews)</span>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-baseline gap-4">
            {priceInfo.hasPrice ? (
              <>
                <div className="text-3xl font-bold text-gray-900">
                  ₹{priceInfo.min.toLocaleString("en-IN")}
                </div>
                {priceInfo.max !== priceInfo.min && (
                  <div className="text-sm text-gray-500 line-through">
                    ₹{priceInfo.max.toLocaleString("en-IN")}
                  </div>
                )}
              </>
            ) : (
              <div className="text-2xl font-semibold text-gray-900">
                Price on request
              </div>
            )}
          </div>

          {/* description */}
          <p className="text-gray-700 mt-4 leading-relaxed whitespace-pre-line">
            {product.desc}
          </p>

          {/* selectors */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* size */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Frame Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2"
              >
                {product.variations?.sizes?.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* painting type / frame */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Painting Type
              </label>
              <select
                value={selectedFrame}
                onChange={(e) => setSelectedFrame(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-2"
              >
                {product.variations?.frameTypes?.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* quantity and CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                aria-label="decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                −
              </button>
              <div className="px-4 text-center min-w-[46px]">{qty}</div>
              <button
                aria-label="increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="w-full bg-emerald-700 text-white py-3 rounded-md font-medium hover:bg-emerald-800 transition">
                Buy Now
              </button>

              <button className="w-full border border-emerald-700 text-emerald-700 py-3 rounded-md font-medium hover:bg-emerald-50 transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* small metadata / stock */}
          <div className="mt-4 text-sm text-gray-500">
            {product.inStock ? (
              <span className="text-emerald-700 font-medium">In stock</span>
            ) : (
              <span className="text-red-500 font-medium">Out of stock</span>
            )}
            <span className="block mt-2">Tags: {product.tags?.join(", ")}</span>
          </div>
        </div>
      </div>

      {/* description / details full width */}
      <div className="mt-12 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold mb-3">Product Details</h3>
        <div className="text-gray-700 leading-relaxed">
          <p>{product.desc}</p>
          <ul className="list-disc pl-5 mt-3 text-sm text-gray-600">
            <li>Authentic handcrafted Tanjore painting</li>
            <li>Gold foil and pearls (where applicable)</li>
            <li>Comes with a protective wooden frame</li>
          </ul>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProducts />
    </div>
  );
}
