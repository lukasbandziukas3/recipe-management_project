"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  HeartIcon,
  ShareIcon,
  PrinterIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { getRecipeById } from "@/utils/recipeUtils";
import { Recipe } from "@/types/recipe";
import RecipeMetadata from "@/components/RecipeMetadata";
import IngredientsList from "@/components/IngredientsList";
import InstructionsList from "@/components/InstructionsList";

export default function RecipeDetail() {
  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const loadRecipe = async () => {
      setIsLoading(true);
      try {
        if (params.id && typeof params.id === "string") {
          const foundRecipe = getRecipeById(params.id);
          setRecipe(foundRecipe || null);
        }
      } catch (error) {
        console.error("Error loading recipe:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipe();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-[80%] mx-auto px-2 sm:px-4 lg:px-6 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-6 w-32"></div>
            <div className="h-48 md:h-64 lg:h-80 bg-gray-300 rounded-2xl mb-8"></div>
            <div className="h-8 bg-gray-300 rounded mb-4 w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-6 w-2/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-6 bg-gray-300 rounded w-24"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-300 rounded w-20"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">😕</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Recipe Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The recipe you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-[80%] mx-auto px-2 sm:px-4 lg:px-6 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors font-medium"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Recipes
        </Link>

        {/* Recipe Header */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border border-gray-100">
          <div className="relative h-64 md:h-96 lg:h-[500px]">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex space-x-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
              >
                <HeartIcon
                  className={`h-6 w-6 ${
                    isFavorite ? "text-red-500 fill-current" : "text-gray-600"
                  }`}
                />
              </button>
              <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110">
                <ShareIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110">
                <PrinterIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Recipe Title and Description */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  {recipe.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {recipe.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                {recipe.description}
              </p>
            </div>
          </div>
        </div>

        {/* Recipe Metadata */}
        <div className="mb-8">
          <RecipeMetadata
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
            category={recipe.category}
          />
        </div>

        {/* Rating Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Rate this Recipe
              </h3>
              <p className="text-gray-600">How would you rate this recipe?</p>
            </div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-colors duration-200"
                >
                  {star <= rating ? (
                    <StarSolid className="h-8 w-8 text-yellow-400 hover:text-yellow-500" />
                  ) : (
                    <StarIcon className="h-8 w-8 text-gray-300 hover:text-yellow-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ingredients */}
          <IngredientsList ingredients={recipe.ingredients} />

          {/* Instructions */}
          <InstructionsList
            steps={recipe.steps}
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
          />
        </div>

        {/* Additional Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💡 Pro Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                <div className="text-3xl mb-3">🍳</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Preparation
                </h3>
                <p className="text-gray-600 text-sm">
                  Mise en place - prepare all ingredients before you start
                  cooking for a smoother experience.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                <div className="text-3xl mb-3">🌡️</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Temperature
                </h3>
                <p className="text-gray-600 text-sm">
                  Use a meat thermometer for perfect doneness and avoid
                  overcooking your proteins.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                <div className="text-3xl mb-3">👨‍🍳</div>
                <h3 className="font-semibold text-gray-900 mb-2">Timing</h3>
                <p className="text-gray-600 text-sm">
                  Read through the entire recipe first and plan your timing for
                  the best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
