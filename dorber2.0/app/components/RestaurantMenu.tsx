"use client";

import React, { useState } from "react";
import { FOOD_CATEGORIES, MOCK_MENU_ITEMS, MenuItem } from "../data/siteData";
import {
  SearchIcon,
  ShoppingBagIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon,
  FlameIcon,
  ClockIcon,
  PlusIcon,
} from "./Icons";

interface RestaurantMenuProps {
  onAddToCart: (item: MenuItem) => void;
  favorites: string[];
  onToggleFavorite: (itemId: string) => void;
}

export function RestaurantMenu({
  onAddToCart,
  favorites,
  onToggleFavorite,
}: RestaurantMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const filteredItems = MOCK_MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="restaurant-menu" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <SparklesIcon size={14} />
            <span>Gourmet Culinary Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Our <span className="text-gradient-red">Delicacies</span> Menu
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From regal Old Dhaka Kacchi Biryani to fire-grilled Angus burgers and wood-fired pizzas—prepared fresh with authentic spices.
          </p>
        </div>

        {/* Filter and Search controls */}
        <div className="glass-panel p-4 rounded-2xl mb-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-gradient-red text-white shadow-md shadow-red-950/50"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              All Items
            </button>
            {FOOD_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-red text-white shadow-md shadow-red-950/50"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search biryani, burgers, pizza..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/15 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isFav = favorites.includes(item.id);
            return (
              <div
                key={item.id}
                className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Favorite Toggle Button */}
                  <button
                    onClick={() => onToggleFavorite(item.id)}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:scale-110 transition-transform backdrop-blur-md"
                    title={isFav ? "Remove from Favorites" : "Save to Favorites"}
                  >
                    <HeartIcon
                      size={18}
                      className={isFav ? "text-red-500 fill-red-500" : "text-white"}
                      fill={isFav ? "#ef4444" : "none"}
                    />
                  </button>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {item.isChefSpecial && (
                      <span className="bg-amber-500 text-black font-black text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                        Chef's Special
                      </span>
                    )}
                    {item.isTodayOffer && (
                      <span className="bg-red-600 text-white font-black text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                        Today's Offer
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-black/70 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1">
                      <StarIcon size={13} fill="#f59e0b" />
                      <span>{item.rating}</span>
                      <span className="text-zinc-400 text-[10px]">({item.reviewsCount})</span>
                    </span>
                    <span className="text-xs text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                      <ClockIcon size={13} />
                      <span>{item.prepTime}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className="font-semibold">{item.category}</span>
                      {item.spiceLevel && (
                        <span className="text-red-400 font-bold flex items-center gap-1">
                          <FlameIcon size={12} />
                          {item.spiceLevel}
                        </span>
                      )}
                    </div>
                    <h3
                      onClick={() => setActiveItemModal(item)}
                      className="text-white font-black text-lg line-clamp-1 group-hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-400 block">Price</span>
                      <span className="text-2xl font-black text-white">৳{item.price}</span>
                    </div>

                    <button
                      onClick={() => onAddToCart(item)}
                      className="bg-gradient-red bg-gradient-red-hover text-white text-xs font-bold px-4 py-3 rounded-xl shadow-lg shadow-red-950/50 flex items-center gap-1.5 transition-all transform hover:scale-105"
                    >
                      <PlusIcon size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Item Detail Modal */}
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="glass-panel-glow max-w-xl w-full rounded-3xl p-6 md:p-8 space-y-6 relative border border-red-500/40">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {activeItemModal.category}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">{activeItemModal.name}</h3>
                </div>
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
                >
                  ✕
                </button>
              </div>

              <img
                src={activeItemModal.image}
                alt={activeItemModal.name}
                className="w-full h-56 object-cover rounded-2xl border border-white/10"
              />

              <p className="text-zinc-300 text-sm leading-relaxed">{activeItemModal.description}</p>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-black/60 p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] text-zinc-400 uppercase block">Preparation</span>
                  <span className="text-sm font-bold text-white">{activeItemModal.prepTime}</span>
                </div>
                <div className="bg-black/60 p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] text-zinc-400 uppercase block">Calories</span>
                  <span className="text-sm font-bold text-white">{activeItemModal.calories}</span>
                </div>
                <div className="bg-black/60 p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] text-zinc-400 uppercase block">Rating</span>
                  <span className="text-sm font-bold text-amber-400 flex items-center justify-center gap-1">
                    <StarIcon size={12} fill="#f59e0b" />
                    {activeItemModal.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-3xl font-black text-gradient-gold">৳{activeItemModal.price}</span>
                <button
                  onClick={() => {
                    onAddToCart(activeItemModal);
                    setActiveItemModal(null);
                  }}
                  className="bg-gradient-red text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
                >
                  <ShoppingBagIcon size={18} />
                  <span>Add to Order Cart</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
