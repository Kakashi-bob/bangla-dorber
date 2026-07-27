"use client";

import React from "react";
import { TRADE_SERVICES } from "../data/siteData";
import {
  GlobeIcon,
  ShieldCheckIcon,
  TruckIcon,
  AwardIcon,
  CreditCardIcon,
  FactoryIcon,
  ChevronRightIcon,
} from "./Icons";

interface ServicesSectionProps {
  onOpenRFQ: () => void;
}

export function ServicesSection({ onOpenRFQ }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GlobeIcon":
        return <GlobeIcon size={24} className="text-red-500" />;
      case "ShieldCheckIcon":
        return <ShieldCheckIcon size={24} className="text-red-500" />;
      case "TruckIcon":
        return <TruckIcon size={24} className="text-red-500" />;
      case "AwardIcon":
        return <AwardIcon size={24} className="text-red-500" />;
      case "CreditCardIcon":
        return <CreditCardIcon size={24} className="text-red-500" />;
      default:
        return <FactoryIcon size={24} className="text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <AwardIcon size={14} />
            <span>Corporate Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Enterprise <span className="text-gradient-red">Services</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From global sourcing to trade financing and bonded warehousing—we deliver complete end-to-end supply chain infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADE_SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-950 to-zinc-900 border border-red-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(s.icon)}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={onOpenRFQ}
                  className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Inquire Service</span>
                  <ChevronRightIcon size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
