"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  async function loadItems() {
    if (user?.uid) {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user?.uid) {
      try {
        const id = await addItem(user.uid, {
          name: newItem.name,
          quantity: newItem.quantity,
          category: newItem.category
        });
        
        const itemWithId = { ...newItem, id };
        setItems([...items, itemWithId]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  const handleItemSelect = (item) => {
    let name = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim();

    setSelectedItemName(name);
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl">Please sign in to access your shopping list.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-300 to-indigo-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Shopping List Section */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Shopping List
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Meal Ideas Section */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}