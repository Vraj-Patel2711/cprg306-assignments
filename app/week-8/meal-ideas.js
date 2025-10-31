"use client";

import { useEffect, useState } from "react";

// Fetch meal ideas from TheMealDB API
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 w-full md:w-1/2">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {meals.length > 0 ? (
        <ul className="w-full max-w-md space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-3 border border-gray-200 text-black rounded-md bg-gray-50 hover:bg-gray-100"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 italic">No meal ideas found.</p>
      )}
    </div>
  );
}
