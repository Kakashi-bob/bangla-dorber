"use client";

import React from "react";
import { MOCK_COUPONS } from "../data/siteData";
import { PercentIcon, SparklesIcon, CheckCircleIcon } from "./Icons";

interface SpecialOffersProps {
  onOpenMenu: () => void;
}

export function SpecialOffers({ onOpenMenu }: SpecialOffersProps) {
  return (
    <section id="special-offers" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <PercentIcon size={14} />
            <span>Exclusive Promo Discounts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Special <span className="text-gradient-red">Offers</span> & Promo Codes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Apply these active discount codes during online checkout or enterprise quote submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_COUPONS.map((coupon) => (
            <div
              key={coupon.code}
              className="glass-panel p-6 rounded-3xl border border-red-500/30 space-y-4 relative overflow-hidden group hover:border-red-500 transition-colors shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {coupon.discountPercentage}% OFF
                </span>
                <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
                  <SparklesIcon size={12} /> Active Voucher
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-wider font-mono">
                  {coupon.code}
                </h3>
                <p className="text-zinc-300 text-xs mt-1">{coupon.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(coupon.code);
                    alert(`Promo Code ${coupon.code} copied to clipboard!`);
                  }}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Copy Code
                </button>
                <button
                  onClick={onOpenMenu}
                  className="bg-gradient-red text-white text-xs font-bold px-4 py-2 rounded-xl"
                >
                  Use Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
