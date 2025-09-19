"use client";

import {
  ClockIcon,
  UserGroupIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

interface RecipeMetadataProps {
  prepTime: string;
  cookTime: string;
  servings: number;
  category: string;
}

export default function RecipeMetadata({
  prepTime,
  cookTime,
  servings,
  category,
}: RecipeMetadataProps) {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Prep Time */}
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <ClockIcon className="h-6 w-6 text-orange-600" />
          </div>
          <div className="text-sm font-medium text-gray-600">Prep Time</div>
          <div className="text-lg font-bold text-gray-900">{prepTime}</div>
        </div>

        {/* Cook Time */}
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <FireIcon className="h-6 w-6 text-red-600" />
          </div>
          <div className="text-sm font-medium text-gray-600">Cook Time</div>
          <div className="text-lg font-bold text-gray-900">{cookTime}</div>
        </div>

        {/* Servings */}
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <UserGroupIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-sm font-medium text-gray-600">Servings</div>
          <div className="text-lg font-bold text-gray-900">{servings}</div>
        </div>

        {/* Category */}
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-green-600 font-bold text-lg">🍽️</span>
          </div>
          <div className="text-sm font-medium text-gray-600">Category</div>
          <div className="text-lg font-bold text-gray-900">{category}</div>
        </div>
      </div>
    </div>
  );
}
