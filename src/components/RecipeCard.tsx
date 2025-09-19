"use client";

import Image from "next/image";
import Link from "next/link";
import { Recipe } from "@/types/recipe";
import {
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

interface RecipeCardProps {
  recipe: Recipe;
  isFeatured?: boolean;
}

export default function RecipeCard({
  recipe,
  isFeatured = false,
}: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="group">
      <div
        className={`bg-white rounded-2xl shadow-lg overflow-hidden 
                       hover:shadow-2xl transition-all duration-500 
                       transform hover:-translate-y-2 hover:rotate-1
                       ${isFeatured ? "ring-2 ring-orange-200" : ""}`}
      >
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full shadow-sm">
              {recipe.category}
            </span>
          </div>

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                Featured
              </span>
            </div>
          )}

          {/* Heart Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-50 transition-colors">
              <HeartIcon className="h-5 w-5 text-gray-600 hover:text-red-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {recipe.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                <ClockIcon className="h-4 w-4 mr-1 text-orange-500" />
                <span className="font-medium">{recipe.prepTime}</span>
              </div>
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                <UserGroupIcon className="h-4 w-4 mr-1 text-blue-500" />
                <span className="font-medium">{recipe.servings} servings</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
              >
                {ingredient.split(",")[0].trim()}
              </span>
            ))}
            {recipe.ingredients.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{recipe.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
