"use client";

import {
  ClockIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface InstructionsListProps {
  steps: string[];
  prepTime: string;
  cookTime: string;
}

export default function InstructionsList({
  steps,
  prepTime,
  cookTime,
}: InstructionsListProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [currentStep, setCurrentStep] = useState(0);

  const toggleStep = (index: number) => {
    const newCompletedSteps = new Set(completedSteps);
    if (completedSteps.has(index)) {
      newCompletedSteps.delete(index);
    } else {
      newCompletedSteps.add(index);
    }
    setCompletedSteps(newCompletedSteps);
  };

  const getStepIcon = (index: number) => {
    if (completedSteps.has(index)) return "✅";
    if (index === currentStep) return "👨‍🍳";
    return "👆";
  };

  const getStepTips = (step: string, index: number) => {
    const lower = step.toLowerCase();
    const tips = [];

    if (lower.includes("preheat") || lower.includes("oven")) {
      tips.push({
        icon: "🔥",
        text: "Preheat your oven 15-20 minutes before cooking for best results",
      });
    }

    if (lower.includes("simmer") || lower.includes("boil")) {
      tips.push({
        icon: "🌡️",
        text: "Keep the heat medium-low for a gentle simmer",
      });
    }

    if (lower.includes("season") || lower.includes("salt")) {
      tips.push({
        icon: "🧂",
        text: "Taste and adjust seasoning as you cook",
      });
    }

    if (lower.includes("golden") || lower.includes("brown")) {
      tips.push({
        icon: "👀",
        text: "Watch carefully to avoid burning",
      });
    }

    if (lower.includes("rest") || lower.includes("cool")) {
      tips.push({
        icon: "⏰",
        text: "Resting time is crucial for optimal texture",
      });
    }

    return tips;
  };

  const getStepDuration = (step: string, index: number) => {
    const lower = step.toLowerCase();
    if (lower.includes("preheat")) return "5-10 min";
    if (lower.includes("simmer")) return "10-15 min";
    if (lower.includes("bake") || lower.includes("roast")) return "20-45 min";
    if (lower.includes("fry") || lower.includes("sauté")) return "3-5 min";
    if (lower.includes("boil")) return "8-12 min";
    if (lower.includes("grill")) return "6-10 min";
    if (lower.includes("rest")) return "5-10 min";
    return "2-3 min";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <span className="mr-2">👨‍🍳</span>
          Cooking Instructions
        </h2>
        <div className="text-sm text-gray-500">{steps.length} steps</div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {steps.map((step, index) => {
          const tips = getStepTips(step, index);
          const duration = getStepDuration(step, index);
          const isCompleted = completedSteps.has(index);
          const isCurrent = index === currentStep;

          return (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                isCurrent
                  ? "border-orange-300 bg-orange-50 shadow-lg"
                  : isCompleted
                  ? "border-green-200 bg-green-50"
                  : "border-gray-200 bg-gray-50 hover:border-orange-200 hover:bg-orange-50"
              }`}
            >
              {/* Step Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isCurrent
                        ? "bg-orange-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Step {index + 1}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{duration}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleStep(index)}
                  className={`p-2 rounded-full transition-colors ${
                    isCompleted
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400 hover:bg-orange-100 hover:text-orange-600"
                  }`}
                >
                  {getStepIcon(index)}
                </button>
              </div>

              {/* Step Content */}
              <p
                className={`text-gray-700 leading-relaxed mb-4 ${
                  isCompleted ? "line-through text-gray-500" : ""
                }`}
              >
                {step}
              </p>

              {/* Tips */}
              {tips.length > 0 && (
                <div className="space-y-2">
                  {tips.map((tip, tipIndex) => (
                    <div
                      key={tipIndex}
                      className="flex items-start p-3 bg-blue-50 rounded-xl border border-blue-200"
                    >
                      <span className="text-lg mr-3">{tip.icon}</span>
                      <span className="text-sm text-blue-700 font-medium">
                        {tip.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Progress Indicator */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  {steps.map((_, stepIndex) => (
                    <div
                      key={stepIndex}
                      className={`w-2 h-2 rounded-full ${
                        stepIndex < index
                          ? "bg-green-500"
                          : stepIndex === index
                          ? "bg-orange-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentStep(index)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    isCurrent
                      ? "bg-orange-100 text-orange-700"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-700"
                  }`}
                >
                  {isCurrent ? "Current" : "Jump to"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Summary */}
      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-700">
            <span className="text-lg mr-2">📊</span>
            <span className="font-medium">
              Progress: {completedSteps.size} of {steps.length} steps completed
            </span>
          </div>
          <div className="text-sm text-gray-600">
            {Math.round((completedSteps.size / steps.length) * 100)}% Complete
          </div>
        </div>
      </div>
    </div>
  );
}
