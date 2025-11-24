import React from "react";
import { Check } from "lucide-react";

const AvailabilityFilter = ({ selected, onChange }) => {
  const options = [
    { label: "In Stock", value: "in-stock" },
    { label: "Out of Stock", value: "out-of-stock" },
  ];

  return (
    <div className="mt-6">
      {/* Title + Divider */}
      <h3 className="text-md font-semibold tracking-wide pb-2 border-b ">
        Availability
      </h3>

      <div className="flex flex-col gap-1 mt-3">
        {options.map((opt) => {
          const active = selected === opt.value;

          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`
                flex items-center justify-between w-full py-2 px-1 rounded-md
                text-sm transition-all
                ${active ? "text-black font-semibold" : "text-gray-600"}
              
              `}
            >
              <span>{opt.label}</span>

              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center transition-all 
                ${active ? "bg-black" : "bg-gray-300"}`}
              >
                {active && <Check size={14} color="white" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AvailabilityFilter;
