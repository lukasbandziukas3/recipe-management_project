"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const allCategories = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-orange-200 hover:text-orange-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
