"use client";
import React from "react";
import AnimatedTooltip from "./ui/animated-tooltip";
import { people } from "./index.js";
import Button from "./Button";

const TooltipWithCTA = () => {
  return (
    <section
      className="max-w-4xl mx-auto py-20 px-4 flex flex-col items-center gap-12 text-center"
      aria-label="Showcase of Tanjore art enthusiasts"
    >
      {/* Headline */}
      <h1
        className="text-4xl md:text-5xl font-bold text-gray-900 leading-relaxed tracking-wider font-cinzel animate-pulse"
        data-sb-field-path="heading"
      >
        Explore Our Traditional Tanjore Arts
      </h1>

      {/* Tooltip + CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Animated Tooltip */}
        <div
          className="flex justify-center"
          aria-label="Art enthusiasts avatars"
        >
          <AnimatedTooltip items={people} />
        </div>

        {/* CTA Button */}
        
          <Button href="/collections" color="emerald" className="">
            Explore Collections
          </Button>
        
      </div>
    </section>
  );
};

export default TooltipWithCTA;
