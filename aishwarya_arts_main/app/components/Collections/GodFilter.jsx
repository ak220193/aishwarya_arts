import React from "react";

const gods = ["Shiva", "Murugan", "Ganesha", "Lakshmi", "Krishna", "Devi", "Other"];

const GodFilter = ({ selected = "", onChange }) => {
  return (
    <div>
      <h3 className="font-medium mb-2">By God</h3>
      <ul className="space-y-1">
        <li>
          <label className="flex items-center gap-2">
            <input type="radio" name="god" checked={selected === ""} onChange={() => onChange("")} />
            <span>All</span>
          </label>
        </li>
        {gods.map((g) => (
          <li key={g}>
            <label className="flex items-center gap-2">
              <input type="radio" name="god" checked={selected === g} onChange={() => onChange(g)} />
              <span>{g}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GodFilter;
