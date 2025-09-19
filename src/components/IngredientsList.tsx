"use client";

import { CheckIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface IngredientsListProps {
  ingredients: string[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleChecked = (index: number) => {
    const newCheckedItems = new Set(checkedItems);
    if (checkedItems.has(index)) {
      newCheckedItems.delete(index);
    } else {
      newCheckedItems.add(index);
    }
    setCheckedItems(newCheckedItems);
  };

  const getIngredientEmoji = (ingredient: string) => {
    const lower = ingredient.toLowerCase();
    if (lower.includes("chicken")) return "🍗";
    if (lower.includes("beef")) return "🥩";
    if (lower.includes("fish") || lower.includes("salmon")) return "🐟";
    if (lower.includes("cheese")) return "🧀";
    if (lower.includes("tomato")) return "🍅";
    if (lower.includes("onion")) return "🧅";
    if (lower.includes("garlic")) return "🧄";
    if (lower.includes("carrot")) return "🥕";
    if (lower.includes("potato")) return "🥔";
    if (lower.includes("bread")) return "🍞";
    if (lower.includes("egg")) return "🥚";
    if (lower.includes("milk")) return "🥛";
    if (lower.includes("butter")) return "🧈";
    if (lower.includes("oil")) return "🫒";
    if (lower.includes("salt")) return "🧂";
    if (lower.includes("sugar")) return "🍯";
    if (lower.includes("flour")) return "🌾";
    if (lower.includes("pasta")) return "🍝";
    if (lower.includes("rice")) return "🍚";
    if (lower.includes("lemon")) return "🍋";
    if (lower.includes("herb") || lower.includes("basil")) return "🌿";
    return "🥄";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <ShoppingCartIcon className="h-6 w-6 mr-2 text-orange-500" />
          Ingredients
        </h2>
        <div className="text-sm text-gray-500">{ingredients.length} items</div>
      </div>

      <div className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              checkedItems.has(index)
                ? "bg-green-50 border-green-200"
                : "bg-gray-50 border-gray-200 hover:border-orange-200 hover:bg-orange-50"
            }`}
            onClick={() => toggleChecked(index)}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white mr-4 border-2 border-gray-200">
              {checkedItems.has(index) ? (
                <CheckIcon className="h-5 w-5 text-green-600" />
              ) : (
                <span className="text-lg">
                  {getIngredientEmoji(ingredient)}
                </span>
              )}
            </div>
            <span
              className={`flex-1 text-gray-700 font-medium ${
                checkedItems.has(index) ? "line-through text-gray-500" : ""
              }`}
            >
              {ingredient}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-center text-blue-700">
          <CheckIcon className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">
            Tip: Click on ingredients to check them off as you prepare them!
          </span>
        </div>
      </div>
    </div>
  );
}
