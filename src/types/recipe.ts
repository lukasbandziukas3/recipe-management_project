export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  category: string;
}

export interface RecipeSearchFilters {
  query: string;
  ingredient?: string;
}
