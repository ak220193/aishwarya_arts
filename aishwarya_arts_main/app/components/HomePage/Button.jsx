"use client";

import React from "react";
import Link from "next/link";

export default function Button({ children, href, onClick, className = "", color = "emerald" }) {
  const baseClasses = `
    px-8 py-4 font-bold rounded-full shadow-lg transition-transform transform
    focus:outline-none focus:ring-4 focus:ring-emerald-300
    hover:scale-105
  `;

  // Handle color variants
  let colorClasses = "";
  switch (color) {
    case "emerald":
      colorClasses = `
        bg-emerald-500 text-white
        hover:bg-emerald-600
        shadow-emerald-400/50 hover:shadow-emerald-500/70
      `;
      break;
    case "black":
      colorClasses = `
        bg-black text-white
        hover:bg-gray-800
        shadow-gray-700/50 hover:shadow-gray-800/70
      `;
      break;
    case "white":
      colorClasses = `
        bg-white text-black
        hover:bg-gray-100
        shadow-gray-200/50 hover:shadow-gray-300/70
      `;
      break;
    default:
      colorClasses = "";
  }

  // Render Link if href is provided
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${colorClasses} ${className}`}
        role="button"
      >
        {children}
      </Link>
    );
  }

  // Otherwise render a button
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
