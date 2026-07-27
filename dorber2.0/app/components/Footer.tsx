"use client";

import React, { useState } from "react";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  GlobeIcon,
  UtensilsIcon,
  ShieldCheckIcon,
  SendIcon,
} from "./Icons";

interface FooterProps {
  onSwitchDivision: (division: "trading" | "dining") => void;
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onSwitchDivision, onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 text-zinc-400 text-xs py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-black border border-red-500/50 flex items-center justify-center font-black text-white text-base">
                BD
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                BANGLA<span className="text-red-500">DORBER</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Bangladesh’s premier conglomerate bridging international commodity trading, customs logistics, and world-class fine dining & online food ordering.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold text-zinc-300">
              <span className="bg-zinc-900 border border-white/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                <ShieldCheckIcon size={12} className="text-red-500" /> NBR Registered
              </span>
              <span className="bg-zinc-900 border border-white/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                <ShieldCheckIcon size={12} className="text-amber-400" /> Halal Certified
              </span>
              <span className="bg-zinc-900 border border-white/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                <ShieldCheckIcon size={12} className="text-emerald-400" /> ISO 9001:2026
              </span>
            </div>
          </div>

          {/* Global Trading Division */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] flex items-center gap-1">
              <GlobeIcon size={14} className="text-red-500" /> Trading Division
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => { onSwitchDivision("trading"); onNavigate("trading-products"); }} className="hover:text-red-400 transition-colors">
                  Construction Steel & Cement
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("trading"); onNavigate("trading-products"); }} className="hover:text-red-400 transition-colors">
                  Agricultural Grains & Rice
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("trading"); onNavigate("trading-products"); }} className="hover:text-red-400 transition-colors">
                  Textile Cotton & Raw Yarn
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("trading"); onNavigate("services"); }} className="hover:text-red-400 transition-colors">
                  Customs Clearance & LC
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("trading"); onNavigate("import-export"); }} className="hover:text-red-400 transition-colors">
                  Chittagong Port Cargo
                </button>
              </li>
            </ul>
          </div>

          {/* Culinary & Fine Dining */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] flex items-center gap-1">
              <UtensilsIcon size={14} className="text-amber-400" /> Culinary Division
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => { onSwitchDivision("dining"); onNavigate("restaurant-menu"); }} className="hover:text-amber-400 transition-colors">
                  Royal Kacchi Biryani
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("dining"); onNavigate("restaurant-menu"); }} className="hover:text-amber-400 transition-colors">
                  Double Smoked Burgers
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("dining"); onNavigate("restaurant-menu"); }} className="hover:text-amber-400 transition-colors">
                  Artisanal Pizzas & BBQ
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("dining"); onNavigate("ai-recommender"); }} className="hover:text-amber-400 transition-colors">
                  AI Taste Recommender
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchDivision("dining"); onNavigate("chefs"); }} className="hover:text-amber-400 transition-colors">
                  Executive Chef Profiles
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Newsletter & Market Reports
            </h4>
            <p className="text-zinc-400 text-[11px]">
              Subscribe for weekly commodity market updates and exclusive restaurant dining vouchers.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-red text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <SendIcon size={12} />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <p className="text-emerald-400 text-xs font-semibold">
                &check; Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>&copy; {new Date().getFullYear()} BanglaDorber Enterprise Ltd. All rights reserved. Dhaka, Bangladesh.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-300">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#about" className="hover:text-zinc-300">Terms of Trade</a>
            <span>&bull;</span>
            <a href="#about" className="hover:text-zinc-300">SGS & NBR Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
