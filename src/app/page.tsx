"use client";

import { useState, useEffect } from "react";
import {
  getAllRecipes,
  searchRecipes,
  getCategories,
} from "@/utils/recipeUtils";
import { Recipe } from "@/types/recipe";
import HeroSection from "@/components/HeroSection";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeGrid from "@/components/RecipeGrid";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const allRecipes = getAllRecipes();
        const allCategories = getCategories();
        setRecipes(allRecipes);
        setFilteredRecipes(allRecipes);
        setCategories(allCategories);
      } catch (error) {
        console.error("Error loading recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const searchResults = searchRecipes(query, selectedCategory);
    setFilteredRecipes(searchResults);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filteredResults = searchRecipes(searchQuery, category);
    setFilteredRecipes(filteredResults);
  };

  const showFeatured = searchQuery === "" && selectedCategory === "All";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Featured Recipes Section */}
      {showFeatured && <FeaturedRecipes recipes={recipes} />}

      {/* All Recipes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {showFeatured ? "Browse All Recipes" : "Search Results"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {showFeatured
                ? "Explore our complete collection of delicious recipes organized by category."
                : `Found ${filteredRecipes.length} recipe${
                    filteredRecipes.length !== 1 ? "s" : ""
                  } matching your search.`}
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Recipe Grid */}
          <RecipeGrid recipes={filteredRecipes} isLoading={isLoading} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of home cooks who have discovered amazing recipes
            with us.
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
