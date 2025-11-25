"use client";

import React, { useState, useEffect } from "react";
import GodFilter from "../components/Collections/GodFilter";
import FrameSizeFilter from "../components/Collections/FrameSizeFilter";
import PriceFilter from "../components/Collections/PriceFilter";
import ProductGrid from "../components/Collections/ProductGrid";
import AvailabilityFilter from "../components/Collections/AvailablityFilter";
import { allProducts } from "../data/products";
import ModernTanjore from "../components/Collections/ModernTanjore";

const CollectionsPage = () => {
  const [filtered, setFiltered] = useState(allProducts);

  const [filters, setFilters] = useState({
    god: "",
    frameSize: "",
    min: 0,
    max: 100000,
    availability: "",
  });

  useEffect(() => {
    let temp = [...allProducts];

    // ---- GOD FILTER ----
    if (filters.god) {
      temp = temp.filter((p) => p.category === filters.god);
    }

    // ---- FRAME SIZE FILTER ----
    if (filters.frameSize) {
      temp = temp.filter((p) =>
        p.variations?.sizes?.includes(filters.frameSize)
      );
    }

    // ---- PRICE RANGE FILTER ----
    temp = temp.filter((p) => {
      const priceValues = Object.values(p.variations?.prices || {});

      // If no prices exist → always include product
      if (priceValues.length === 0) return true;

      const minPrice = Math.min(...priceValues);
      const maxPrice = Math.max(...priceValues);

      return maxPrice >= filters.min && minPrice <= filters.max;
    });

    // ---- AVAILABILITY FILTER ----
    if (filters.availability === "in-stock") {
      temp = temp.filter((p) => p.inStock === true);
    }
    if (filters.availability === "out-of-stock") {
      temp = temp.filter((p) => p.inStock === false);
    }

    setFiltered(temp);
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-semibold">Aishwarya Arts — Collections</h1>
        <p className="mt-2 text-lg">Explore our exquisite collections</p>
      </div>

      <div className="flex gap-10">
        {/* LEFT FILTERS */}
        <aside className="w-72 hidden md:block p-5 h-fit">
          <h2 className="text-lg font-semibold mb-4">Filter</h2>

          <div className="space-y-6 border-t pt-4">
            <GodFilter
              selected={filters.god}
              onChange={(v) => setFilters({ ...filters, god: v })}
            />

            <FrameSizeFilter
              selected={filters.frameSize}
              onChange={(v) => setFilters({ ...filters, frameSize: v })}
            />

            <PriceFilter
              selected={[filters.min, filters.max]}
              onChange={([min, max]) => setFilters({ ...filters, min, max })}
            />
          </div>

          <AvailabilityFilter
            selected={filters.availability}
            onChange={(v) => setFilters({ ...filters, availability: v })}
          />
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          

          {/* IMPORTANT FIX */}
          <ProductGrid products={filtered} />
          <ModernTanjore/>
        </main>
      </div>
    </div>
  );
};

export default CollectionsPage;
