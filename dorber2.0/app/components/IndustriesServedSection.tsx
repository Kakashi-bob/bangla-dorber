"use client";

import React from "react";
import { INDUSTRIES_SERVED } from "../data/siteData";
import { FactoryIcon, ChevronRightIcon, ShieldCheckIcon } from "./Icons";

interface IndustriesServedSectionProps {
  onOpenRFQ: () => void;
}

export function IndustriesServedSection({ onOpenRFQ }: IndustriesServedSectionProps) {
  return (
    <section id="industries" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <FactoryIcon size={14} />
            <span>Cross-Sector Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Industries We <span className="text-gradient-red">Serve</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Powering Bangladesh's fastest growing economic sectors with certified raw materials, machinery, and trade logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-white font-bold text-base leading-snug">{ind.name}</h3>
                <p className="text-emerald-400 text-xs font-bold bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/50 inline-block">
                  {ind.count}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenRFQ}
                  className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1"
                >
                  <span>Request Sector Quote</span>
                  <ChevronRightIcon size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
