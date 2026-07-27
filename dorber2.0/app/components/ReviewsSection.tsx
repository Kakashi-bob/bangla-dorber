"use client";

import React from "react";
import { TESTIMONIALS } from "../data/siteData";
import { StarIcon, ShieldCheckIcon } from "./Icons";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheckIcon size={14} />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Leaders & <span className="text-gradient-red">Gourmets</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Read what corporate clients and food enthusiasts say about BanglaDorber enterprise quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} size={16} fill="#f59e0b" className="text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/10">
                    {t.division} Division
                  </span>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-zinc-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
