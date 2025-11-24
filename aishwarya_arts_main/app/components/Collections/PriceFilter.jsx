import React, { useState, useEffect } from "react";

const PriceFilter = ({ selected = [0, 100000], onChange, compact = false }) => {
  const [min, setMin] = useState(selected[0]);
  const [max, setMax] = useState(selected[1]);

  // keep local state synced with external selection changes
  useEffect(() => {
    setMin(selected[0]);
    setMax(selected[1]);
  }, [selected]);

  useEffect(() => {
    // send change upward (debounce optional)
    const t = setTimeout(() => onChange([Number(min), Number(max)]), 200);
    return () => clearTimeout(t);
  }, [min, max, onChange]);

  if (compact) {
    return (
      <div className="flex gap-2">
        <input value={min} onChange={(e) => setMin(e.target.value)} className="px-2 py-1 border rounded w-24" />
        <span className="self-center">—</span>
        <input value={max} onChange={(e) => setMax(e.target.value)} className="px-2 py-1 border rounded w-24" />
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-medium mb-2">Price (₹)</h3>
      <div className="flex gap-2 items-center">
        <input type="number" value={min} onChange={(e) => setMin(e.target.value)} className="px-2 py-1 border rounded w-28" />
        <span>-</span>
        <input type="number" value={max} onChange={(e) => setMax(e.target.value)} className="px-2 py-1 border rounded w-28" />
      </div>
      <div className="text-xs text-gray-500 mt-2">Tip: press Enter or wait briefly to apply</div>
    </div>
  );
};

export default PriceFilter;
