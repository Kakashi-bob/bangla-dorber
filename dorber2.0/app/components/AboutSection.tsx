"use client";

import React from "react";
import { ShieldCheckIcon, GlobeIcon, UtensilsIcon, AwardIcon } from "./Icons";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <AwardIcon size={14} />
            <span>Heritage & Global Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About <span className="text-gradient-red">BanglaDorber</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Founded with a vision of sovereign excellence, BanglaDorber stands as a beacon of Bangladesh's modern economic enterprise—uniting international industrial trade with artisanal fine dining.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold">
              <GlobeIcon size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Global Trading & Enterprise Division</h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              We specialize in importing high-tensile structural steel rebars, Portland cement, raw cotton yarn, refined edible oils, basic chemicals, and renewable solar hardware. Our clearing & forwarding teams ensure seamless operations across Chittagong Port, Benapole, and Dhaka Cargo Airport.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              <UtensilsIcon size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Culinary & Fine Dining Division</h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Our flagship restaurant brand delivers royal Old Dhaka Kacchi Biryani, fire-grilled Angus burgers, wood-fired artisanal pizzas, and peri-peri fried chicken. Powered by our state-of-the-art online food ordering system with express 25-minute delivery in Dhaka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
