"use client";

import React, { useState } from "react";
import { MOCK_MENU_ITEMS, MenuItem } from "../data/siteData";
import {
  SparklesIcon,
  FlameIcon,
  ShoppingBagIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from "./Icons";

interface AIFoodRecommenderProps {
  onAddToCart: (item: MenuItem) => void;
}

export function AIFoodRecommender({ onAddToCart }: AIFoodRecommenderProps) {
  const [hungerLevel, setHungerLevel] = useState<"heavy" | "standard" | "snack">("heavy");
  const [flavorPref, setFlavorPref] = useState<"spicy" | "cheesy" | "sweet">("spicy");
  const [spicePref, setSpicePref] = useState<"Medium" | "Hot" | "Mild">("Medium");

  const [recommendations, setRecommendations] = useState<MenuItem[]>([]);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleGenerateRecommendations = () => {
    setIsCalculating(true);
    setTimeout(() => {
      let filtered = [...MOCK_MENU_ITEMS];

      if (hungerLevel === "heavy") {
        filtered = filtered.filter(
          (m) => m.category === "Biryani" || m.category === "Combo Meals" || m.category === "Pizza" || m.category === "BBQ"
        );
      } else if (hungerLevel === "snack") {
        filtered = filtered.filter(
          (m) => m.category === "Sandwiches" || m.category === "Drinks" || m.category === "Desserts"
        );
      }

      if (flavorPref === "spicy") {
        filtered = filtered.filter((m) => m.spiceLevel === "Hot" || m.spiceLevel === "Medium");
      }

      if (filtered.length < 2) {
        filtered = MOCK_MENU_ITEMS.slice(0, 3);
      }

      setRecommendations(filtered.slice(0, 3));
      setIsCalculating(false);
      setIsAnalyzed(true);
    }, 600);
  };

  return (
    <section id="ai-recommender" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="glass-panel-glow rounded-3xl p-8 md:p-12 relative overflow-hidden border border-amber-500/30">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Form Left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
                <SparklesIcon size={14} />
                <span>AI Taste Concierge</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Not sure what to eat tonight? Let our <span className="text-gradient-gold">AI Recommend</span>.
              </h2>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Tell us your craving, hunger level, and spice tolerance. Our intelligent flavor algorithm will match you with the exact gourmet dish.
              </p>

              {/* Quiz Selection Controls */}
              <div className="space-y-4 pt-2">
                {/* Hunger Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300">1. How hungry are you right now?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "heavy", label: "Heavy Feast" },
                      { id: "standard", label: "Standard Meal" },
                      { id: "snack", label: "Light Snack" },
                    ].map((h) => (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => setHungerLevel(h.id as any)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                          hungerLevel === h.id
                            ? "bg-amber-500 text-black border-amber-400 font-extrabold"
                            : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {h.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flavor Profile */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300">2. Primary Flavor Mood</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "spicy", label: "Rich & Spicy" },
                      { id: "cheesy", label: "Cheesy & Creamy" },
                      { id: "sweet", label: "Sweet & Chilled" },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFlavorPref(f.id as any)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                          flavorPref === f.id
                            ? "bg-gradient-red text-white border-red-500 font-extrabold"
                            : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerateRecommendations}
                  disabled={isCalculating}
                  className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-black font-extrabold py-3.5 rounded-xl shadow-xl shadow-amber-950/40 flex items-center justify-center gap-2 transition-all mt-4"
                >
                  {isCalculating ? (
                    <span>Analyzing Flavor Profiles...</span>
                  ) : (
                    <>
                      <SparklesIcon size={18} />
                      <span>Generate AI Recommended Dishes</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Recommendation Output Right */}
            <div className="lg:col-span-6 space-y-4">
              {!isAnalyzed ? (
                <div className="bg-black/60 rounded-2xl p-8 border border-white/10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 animate-float">
                    <SparklesIcon size={32} />
                  </div>
                  <h4 className="text-white font-bold text-base">Select your taste preferences</h4>
                  <p className="text-zinc-400 text-xs max-w-sm mx-auto">
                    Click 'Generate AI Recommended Dishes' to reveal your tailor-made culinary recommendations.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1">
                      <CheckCircleIcon size={14} />
                      AI Flavor Matches
                    </span>
                    <button
                      onClick={handleGenerateRecommendations}
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      <RefreshCwIcon size={12} />
                      Re-calculate
                    </button>
                  </div>

                  <div className="space-y-3">
                    {recommendations.map((item) => (
                      <div
                        key={item.id}
                        className="bg-black/80 p-4 rounded-2xl border border-amber-500/30 flex items-center gap-4 hover:border-amber-500/60 transition-all"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover border border-white/10"
                        />
                        <div className="flex-1 space-y-1">
                          <span className="text-[10px] text-amber-400 font-bold uppercase">{item.category}</span>
                          <h4 className="text-white font-bold text-sm line-clamp-1">{item.name}</h4>
                          <p className="text-zinc-400 text-xs">৳{item.price} &bull; Prep: {item.prepTime}</p>
                        </div>
                        <button
                          onClick={() => onAddToCart(item)}
                          className="bg-gradient-red text-white p-2.5 rounded-xl shadow-md font-bold text-xs shrink-0 flex items-center gap-1"
                        >
                          <ShoppingBagIcon size={15} />
                          <span>Add</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
