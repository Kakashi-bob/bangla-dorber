"use client";

import React from "react";
import { CHEFS_PROFILES } from "../data/siteData";
import { SparklesIcon, AwardIcon } from "./Icons";

export function ChefSection() {
  return (
    <section id="chefs" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <SparklesIcon size={14} />
            <span>Master Culinary Artisans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Meet Our <span className="text-gradient-gold">Executive Chefs</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Combining centuries of Bangladeshi royal heritage recipes with modern culinary technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CHEFS_PROFILES.map((chef, idx) => (
            <div
              key={idx}
              className="glass-panel-glow rounded-3xl overflow-hidden border border-amber-500/30 flex flex-col sm:flex-row items-center group shadow-xl"
            >
              <div className="w-full sm:w-1/2 h-64 sm:h-full relative overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-1/2 p-6 space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {chef.role}
                </span>
                <h3 className="text-white font-black text-xl">{chef.name}</h3>
                <p className="text-xs text-zinc-300 font-medium flex items-center gap-1">
                  <AwardIcon size={14} className="text-amber-400" />
                  {chef.experience}
                </p>
                <div className="bg-black/60 p-3 rounded-xl border border-white/10 text-xs text-zinc-300">
                  <strong className="text-white block mb-0.5">Culinary Specialty:</strong>
                  {chef.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
