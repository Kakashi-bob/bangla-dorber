"use client";

import React from "react";
import {
  UtensilsIcon,
  ShoppingBagIcon,
  StarIcon,
  ClockIcon,
  SparklesIcon,
  ChevronRightIcon,
  FlameIcon,
} from "./Icons";

interface RestaurantHeroProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export function RestaurantHero({ onOpenMenu, onOpenReservation, onOpenCart }: RestaurantHeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center bg-[#09090b] overflow-hidden py-16 lg:py-24">
      {/* Background imagery overlay with rich dark red glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80"
          alt="Gourmet Dining Background"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/70 to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/30 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <SparklesIcon size={14} className="text-amber-400" />
              <span>BanglaDorber Fine Dining & Online Delivery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Experience Authentic <span className="text-gradient-red">Taste</span>, Delivered to Your <span className="text-gradient-gold">Door</span>.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Indulge in royal Bangladeshi Kacchi Biryani, fire-grilled gourmet BBQ, artisan wood-fired pizzas, and double-smoked Angus burgers—crafted by master chefs using premium imported ingredients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenMenu}
                className="bg-gradient-red bg-gradient-red-hover text-white text-base font-bold px-8 py-4 rounded-2xl shadow-xl shadow-red-950/70 transition-all transform hover:-translate-y-1 flex items-center gap-2.5"
              >
                <ShoppingBagIcon size={20} />
                <span>Order Now</span>
              </button>

              <button
                onClick={onOpenMenu}
                className="glass-panel text-white hover:text-amber-300 text-base font-semibold px-7 py-4 rounded-2xl border border-white/15 transition-all hover:border-amber-500/40 flex items-center gap-2"
              >
                <UtensilsIcon size={18} className="text-amber-400" />
                <span>View Menu</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-black text-base font-bold px-7 py-4 rounded-2xl shadow-xl shadow-amber-950/40 transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                <span>Reserve a Table</span>
                <ChevronRightIcon size={16} />
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-300 font-medium">
              <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
                <ClockIcon size={16} className="text-amber-400" />
                <span>Express 25-Min Delivery in Dhaka</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
                <StarIcon size={16} className="text-amber-400" fill="#f59e0b" />
                <span>4.9 / 5.0 (2,500+ Verified Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
                <FlameIcon size={16} className="text-red-500" />
                <span>100% Halal Certified</span>
              </div>
            </div>
          </div>

          {/* Right Floating Food Hero Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Glowing Ambient Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-amber-500 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />

              {/* Main Food Card */}
              <div className="relative glass-panel rounded-3xl p-6 border border-white/15 space-y-5 overflow-hidden shadow-2xl">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
                    alt="Royal Crown Kacchi Biryani"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                     Chef's Special
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <h4 className="font-bold text-lg">Royal Kacchi Biryani</h4>
                      <p className="text-xs text-amber-300">Old Dhaka Heritage Dum Style</p>
                    </div>
                    <span className="text-xl font-black text-gradient-gold">৳750</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-300 bg-black/50 p-3 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1 font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Kitchen Active Now
                  </span>
                  <span>Preparation Time: 25 mins</span>
                </div>

                <button
                  onClick={onOpenMenu}
                  className="w-full bg-gradient-red bg-gradient-red-hover text-white font-bold py-3 rounded-xl shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBagIcon size={16} />
                  <span>Order Chef's Special Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
