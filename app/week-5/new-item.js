"use client";

import { useState } from "react";

export default function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log("Item submitted:", item);

    alert(
      `Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col items-center border border-black rounded-2xl p-6 bg-gradient-to-r from-white-100 to-gray-100 p-6"
      >
        <h2 className="text-indigo-700 font-extrabold text-2xl mb-6 tracking-wide">
          Add New Item
        </h2>

        <div className="w-full mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-black mb-2"
          >
            Item Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., milk, 4 L 🥛"
            className="w-full px-3 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center mb-6">
          <h3 className="text-indigo-700 font-bold text-lg mb-3">
            Select Quantity
          </h3>
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="w-12 h-12 flex items-center justify-center text-2xl rounded-full font-bold bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300 disabled:text-black-500 transition-all duration-200"
              aria-label="decrease count"
            >
              -
            </button>

            <span className="text-2xl font-bold text-black min-w-[40px] text-center">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="w-12 h-12 flex items-center justify-center text-2xl rounded-full font-bold bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-300 disabled:text-gray-500 transition-all duration-200"
              aria-label="increase count"
            >
              +
            </button>
          </div>
        </div>

        <div className="w-full mb-6">
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-black mb-2"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 text-black rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
