import React from "react";
import ProductCard from "../Collections/ProductCard";
import { allProducts } from "../../data/products";

const ModernTanjore = () => {
  const topThree = allProducts.slice(0, 3); 

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Modern Tanjore Arts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topThree.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ModernTanjore;
