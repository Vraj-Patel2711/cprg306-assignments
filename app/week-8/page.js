"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    let name = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim();

    setSelectedItemName(name);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-300 to-indigo-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        { }
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Shopping List
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        { }
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
