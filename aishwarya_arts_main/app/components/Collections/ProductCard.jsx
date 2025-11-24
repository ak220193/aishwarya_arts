import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/collections/${product.id}`}
      className="
        block bg-white rounded-xl overflow-hidden 
        shadow-[0_2px_10px_rgba(0,0,0,0.06)] 
        hover:shadow-[0_4px_18px_rgba(0,0,0,0.12)] 
        transition-all duration-300 hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="flex items-center justify-center p-5 bg-gray-50">
        <img
          src={product.img}
          alt={product.name}
          className="object-contain h-56 w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg tracking-tight">{product.name}</h3>

        <p className="text-sm text-gray-500 mt-1">
          {product.size} • {product.frameType}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-black">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <button className="px-4 py-1.5 bg-black text-white rounded-md text-sm hover:bg-gray-900 transition">
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
