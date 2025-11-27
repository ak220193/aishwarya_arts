import React from "react";

export const gods = [
  "Amman",
  "Annapoorni",
  "Annamalai",
  "Baba",
  "Balaji Lakshmi",
  "Balaji Thayaar",
  "Datchnamoorthy",
  "Durga Devi",
  "Ganesha",
  "Gayathri Devi",
  "Guruvayurappan",
  "Hanuman",
  "Kamadenu",
  "Krishna",
  "Lakshmi",
  "Lalitha Devi",
  "Lakshmi Narayana",
  "Meenakshi",
  "Murugan",
  "Pooja Set Painting",
  "Raja Raja Rajeshwari",
  "Ramar",
  "Renuga Devi",
  "Sathya Narayana",
  "Shiva Family",
  "Shanvanthri",
  "Vishwa Brahma"
];


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
