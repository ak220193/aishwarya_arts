import React from "react";

const sizes = ["15x12", "18x14", "20x16", "24x18", "30x24"];

const FrameSizeFilter = ({ selected = "", onChange }) => {
  return (
    <div>
      <h3 className="font-medium mb-2">Frame Size</h3>
      <div className="flex flex-col gap-2">
        <select value={selected} onChange={(e) => onChange(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="">All sizes</option>
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FrameSizeFilter;
