"use client";

import { Recipe } from "@/types/recipe";
import RecipeCard from "./RecipeCard";

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

export default function FeaturedRecipes({ recipes }: FeaturedRecipesProps) {
  // Get the first 3 recipes as featured
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-semibold mb-4">
            ⭐ Featured This Week
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chef&apos;s Special Picks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and trending recipes, carefully selected
            for their exceptional taste and cooking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isFeatured={true} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Featured Recipes
          </button>
        </div>
      </div>
    </section>
  );
}
