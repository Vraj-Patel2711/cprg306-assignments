"use client";

import { useState } from "react";

export default function NewItem() {
  const [Count, setCount] = useState(1);

  const increment = () => {
    if (Count < 20) {
      setCount(Count + 1);
    }
  };

  const decrement = () => {
    if (Count > 1) {
      setCount(Count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-2xl p-6 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-md">
      <h2 className="text-indigo-700 font-extrabold text-xl mb-4 tracking-wide">
        Select Quantity
      </h2>

      <div className="flex items-center space-x-6">
        <button
          onClick={decrement}
          disabled={Count === 1}
          className="w-12 h-12 flex items-center justify-center text-2xl rounded-full font-bold bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300 disabled:text-gray-500 transition-all duration-200"
          aria-label="decrease count"
        >
          -
        </button>

        <span className="text-2xl font-bold text-gray-800 min-w-[40px] text-center">
          {Count}
        </span>

        <button
          onClick={increment}
          disabled={Count === 20}
          className="w-12 h-12 flex items-center justify-center text-2xl rounded-full font-bold bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-300 disabled:text-gray-500 transition-all duration-200"
          aria-label="increase count"
        >
          +
        </button>
      </div>
    </div>
  );
}
