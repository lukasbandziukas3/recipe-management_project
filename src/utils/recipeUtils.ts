import { Recipe } from "@/types/recipe";
import recipesData from "@/data/recipes.json";

export function getAllRecipes(): Recipe[] {
  return recipesData as Recipe[];
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipesData.find((recipe: Recipe) => recipe.id === id);
}

export function searchRecipes(query: string, category?: string): Recipe[] {
  let filteredRecipes = recipesData as Recipe[];

  // Filter by category first
  if (category && category !== "All") {
    filteredRecipes = filteredRecipes.filter(
      (recipe: Recipe) => recipe.category === category
    );
  }

  // Then filter by search query
  if (!query.trim()) return filteredRecipes;

  const lowercaseQuery = query.toLowerCase();
  return filteredRecipes.filter(
    (recipe: Recipe) =>
      recipe.title.toLowerCase().includes(lowercaseQuery) ||
      recipe.description.toLowerCase().includes(lowercaseQuery) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowercaseQuery)
      )
  );
}

export function getCategories(): string[] {
  const categories = recipesData.map((recipe: Recipe) => recipe.category);
  return Array.from(new Set(categories)).sort();
}
