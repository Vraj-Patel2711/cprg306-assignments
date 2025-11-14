"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect && onSelect(name)}
      className="p-3 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md hover:bg-gray-100 transition cursor-pointer"
    >
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-gray-700">
        Shopping List {quantity} in {category}
      </div>
    </li>
  );
}
