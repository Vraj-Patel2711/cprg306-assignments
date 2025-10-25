"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-medium border ${
            sortBy === "name"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-gray-100 text-black border-gray-300"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-medium border ${
            sortBy === "category"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-gray-100 text-gray-800 border-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>
      <ul className="w-full max-w-md flex text-black flex-col gap-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}