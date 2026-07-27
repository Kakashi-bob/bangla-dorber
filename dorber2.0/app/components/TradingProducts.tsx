"use client";

import React, { useState } from "react";
import {
  MOCK_TRADING_PRODUCTS,
  TRADING_PRODUCT_CATEGORIES,
  ProductItem,
} from "../data/siteData";
import {
  SearchIcon,
  FilterIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  FileTextIcon,
  CheckCircleIcon,
  FactoryIcon,
} from "./Icons";

interface TradingProductsProps {
  onOpenRFQ: (productName?: string) => void;
}

export function TradingProducts({ onOpenRFQ }: TradingProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);

  const filteredProducts = MOCK_TRADING_PRODUCTS.filter((prod) => {
    const matchesCat = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="trading-products" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <FactoryIcon size={14} />
            <span>Industrial & Bulk Commodities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Featured Trading <span className="text-gradient-red">Products</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            High-grade materials, construction steel, agricultural grains, and chemicals sourced directly from international Tier-1 manufacturers.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel p-4 rounded-2xl mb-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-gradient-red text-white shadow-md shadow-red-950/50"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              All Categories
            </button>
            {TRADING_PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-red text-white shadow-md shadow-red-950/50"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search products or specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/15 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-zinc-950">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-red-400 border border-red-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {prod.subcategory}
                </span>
                <span className="absolute bottom-3 right-3 bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  In Stock
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-zinc-400 block">
                    {prod.category} &bull; {prod.origin}
                  </span>
                  <h3 className="text-white font-bold text-base line-clamp-2 group-hover:text-red-400 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Minimum Order:</span>
                    <span className="text-white font-semibold">{prod.moq}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => setActiveProductModal(prod)}
                    className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold py-2.5 rounded-xl border border-white/10 transition-colors"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onOpenRFQ(prod.name)}
                    className="w-full bg-gradient-red bg-gradient-red-hover text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1"
                  >
                    <span>RFQ</span>
                    <ChevronRightIcon size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Spec Detail Modal */}
        {activeProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="glass-panel-glow max-w-2xl w-full rounded-3xl p-6 md:p-8 space-y-6 relative border border-red-500/40">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    {activeProductModal.category} &bull; {activeProductModal.subcategory}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">{activeProductModal.name}</h3>
                </div>
                <button
                  onClick={() => setActiveProductModal(null)}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  className="w-full h-48 object-cover rounded-2xl border border-white/10"
                />

                <div className="space-y-4 text-xs text-zinc-300">
                  <div>
                    <h4 className="font-bold text-white mb-1">Product Description</h4>
                    <p className="leading-relaxed">{activeProductModal.description}</p>
                  </div>

                  <div className="bg-black/60 p-3 rounded-xl border border-white/10 space-y-1">
                    <p><strong className="text-white">MOQ:</strong> {activeProductModal.moq}</p>
                    <p><strong className="text-white">Origin Hub:</strong> {activeProductModal.origin}</p>
                    <p><strong className="text-white">Compliance:</strong> NBR & ISO 9001 Certified</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">Technical Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProductModal.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-900/80 p-2.5 rounded-xl border border-white/10 text-xs text-zinc-300">
                      <CheckCircleIcon size={14} className="text-red-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveProductModal(null)}
                  className="w-1/2 bg-zinc-900 text-zinc-300 font-semibold py-3 rounded-xl border border-white/10"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const prodName = activeProductModal.name;
                    setActiveProductModal(null);
                    onOpenRFQ(prodName);
                  }}
                  className="w-1/2 bg-gradient-red text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <FileTextIcon size={16} />
                  <span>Request RFQ Quote</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
