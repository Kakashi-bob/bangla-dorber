"use client";

import React from "react";
import {
  GlobeIcon,
  ShieldCheckIcon,
  TruckIcon,
  ChevronRightIcon,
  PhoneIcon,
  FileTextIcon,
  AwardIcon,
  CheckCircleIcon,
} from "./Icons";

interface TradingHeroProps {
  onOpenRFQ: () => void;
  onNavigate: (sectionId: string) => void;
}

export function TradingHero({ onOpenRFQ, onNavigate }: TradingHeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-black py-16 lg:py-24">
      {/* Background glow & mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-red-900/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheckIcon size={14} className="text-red-500" />
              <span>NBR & Bangladesh Bank Compliant Trade Enterprise</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Trusted Trading Partner in <span className="text-gradient-red">Bangladesh</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              BanglaDorber is Bangladesh’s premier international trading conglomerate specializing in high-grade industrial raw materials, structural steel, agricultural commodities, edible oils, and commercial logistics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenRFQ}
                className="bg-gradient-red bg-gradient-red-hover text-white text-base font-bold px-8 py-4 rounded-xl shadow-xl shadow-red-950/60 transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                <FileTextIcon size={18} />
                <span>Get a Quote</span>
                <ChevronRightIcon size={16} />
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="glass-panel text-white hover:text-red-400 text-base font-semibold px-7 py-4 rounded-xl border border-white/15 transition-all hover:border-red-500/50 flex items-center gap-2"
              >
                <PhoneIcon size={18} />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircleIcon size={16} className="text-red-500" />
                <span>100% Quality Inspected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size={16} className="text-red-500" />
                <span>Customs Duty Clearing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size={16} className="text-red-500" />
                <span>Chittagong Port Terminal Access</span>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Glass Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden border border-red-500/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                    <GlobeIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Global Import & Export</h3>
                    <p className="text-zinc-400 text-xs">Live Trade Operations Desk</p>
                  </div>
                </div>
                <span className="text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Active Shipments
                </span>
              </div>

              {/* Active Route Tickers */}
              <div className="space-y-3 text-xs">
                <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-zinc-400 font-medium">BSRM Steel Rebars (500W)</p>
                    <p className="text-white font-semibold">Vietnam &rarr; Chittagong Port</p>
                  </div>
                  <span className="text-red-400 font-bold bg-red-950/60 px-2.5 py-1 rounded border border-red-900/50">
                    25,000 MT
                  </span>
                </div>

                <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-zinc-400 font-medium">Aromatic Basmati Rice</p>
                    <p className="text-white font-semibold">Dinajpur &rarr; Dubai Port</p>
                  </div>
                  <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-900/50">
                    5,000 MT
                  </span>
                </div>

                <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-zinc-400 font-medium">Refined Edible Soybean Oil</p>
                    <p className="text-white font-semibold">Brazil &rarr; Dhaka Central</p>
                  </div>
                  <span className="text-yellow-400 font-bold bg-yellow-950/60 px-2.5 py-1 rounded border border-yellow-900/50">
                    1,200 Liters
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenRFQ}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs py-3 rounded-xl border border-white/15 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Submit Letter of Credit (LC) Inquiry</span>
                  <ChevronRightIcon size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Business Statistics Animated Counter Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 glass-panel p-6 rounded-2xl border border-white/10 text-center">
          <div className="p-3 border-r border-white/10 last:border-0">
            <h4 className="text-3xl lg:text-4xl font-black text-gradient-red">15+</h4>
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mt-1">Years Trade Leadership</p>
          </div>
          <div className="p-3 border-r border-white/10 last:border-0">
            <h4 className="text-3xl lg:text-4xl font-black text-white">45+</h4>
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mt-1">Global Partner Nations</p>
          </div>
          <div className="p-3 border-r border-white/10 last:border-0">
            <h4 className="text-3xl lg:text-4xl font-black text-gradient-red">500K+</h4>
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mt-1">Metric Tons Annual Volume</p>
          </div>
          <div className="p-3">
            <h4 className="text-3xl lg:text-4xl font-black text-white">99.8%</h4>
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mt-1">On-Time Customs Release</p>
          </div>
        </div>
      </div>
    </section>
  );
}
