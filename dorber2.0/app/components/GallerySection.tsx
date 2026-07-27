"use client";

import React, { useState } from "react";
import { SparklesIcon } from "./Icons";

const GALLERY_IMAGES = [
  {
    title: "Chittagong Port Steel Discharge Terminal",
    category: "Trade & Ports",
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Royal Crown Kacchi Biryani Platter",
    category: "Culinary & Dining",
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wood-Fired Pizza Kitchen Oven",
    category: "Culinary & Dining",
    url: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Modern Bonded Warehouse Gazipur",
    category: "Trade & Ports",
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Double Smoked Gourmet Angus Burger",
    category: "Culinary & Dining",
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Heavy Cargo Container Vessel Shipping",
    category: "Trade & Ports",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
];

export function GallerySection() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <SparklesIcon size={14} />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Enterprise <span className="text-gradient-red">Gallery</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            High-resolution photography capturing our global port shipments and gourmet dining experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          {["All", "Trade & Ports", "Culinary & Dining"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-gradient-red text-white shadow-md shadow-red-950/50"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-3xl overflow-hidden glass-panel border border-white/10 group cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/50">
                  {item.category}
                </span>
                <h4 className="font-bold text-sm">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
