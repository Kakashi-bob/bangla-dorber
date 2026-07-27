"use client";

import React, { useState } from "react";
import { IMPORT_EXPORT_STEPS } from "../data/siteData";
import {
  GlobeIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  FileTextIcon,
  CheckCircleIcon,
  MapPinIcon,
} from "./Icons";

interface ImportExportSectionProps {
  onOpenRFQ: () => void;
}

export function ImportExportSection({ onOpenRFQ }: ImportExportSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="import-export" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <GlobeIcon size={14} />
            <span>End-to-End Customs & Cargo Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Import & Export <span className="text-gradient-red">Process</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We streamline complex cross-border trade operations with 100% Bangladesh Bank, NBR, and Chittagong Port Authority compliance.
          </p>
        </div>

        {/* Steps Grid / Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Steps Nav Left */}
          <div className="lg:col-span-5 space-y-3">
            {IMPORT_EXPORT_STEPS.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`glass-panel p-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isActive
                      ? "border-red-500 bg-red-950/40 shadow-lg shadow-red-950/50"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center border shrink-0 ${
                      isActive
                        ? "bg-gradient-red text-white border-red-400"
                        : "bg-zinc-900 text-zinc-400 border-white/10"
                    }`}
                  >
                    {item.step}
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-bold text-sm ${isActive ? "text-white" : "text-zinc-300"}`}>
                      {item.title}
                    </h3>
                  </div>

                  <ChevronRightIcon
                    size={16}
                    className={`transition-transform ${isActive ? "text-red-400 rotate-90" : "text-zinc-600"}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Step Detailed Card Right */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-3xl p-8 md:p-10 space-y-6 relative border border-red-500/40">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-red-400">
                  Step {IMPORT_EXPORT_STEPS[activeStep].step} of 05
                </span>
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-700/50 px-2.5 py-1 rounded-full font-medium">
                  Verified Standard Procedure
                </span>
              </div>

              <h3 className="text-2xl font-black text-white">
                {IMPORT_EXPORT_STEPS[activeStep].title}
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {IMPORT_EXPORT_STEPS[activeStep].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 text-xs space-y-1">
                  <span className="text-zinc-400 font-medium block">Key Compliance:</span>
                  <span className="text-white font-bold flex items-center gap-1">
                    <ShieldCheckIcon size={14} className="text-red-500" />
                    NBR Customs Clearance & H.S. Code
                  </span>
                </div>
                <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 text-xs space-y-1">
                  <span className="text-zinc-400 font-medium block">Avg Execution Time:</span>
                  <span className="text-white font-bold flex items-center gap-1">
                    <TruckIcon size={14} className="text-red-500" />
                    3 to 7 Business Days
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                <button
                  onClick={onOpenRFQ}
                  className="bg-gradient-red bg-gradient-red-hover text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
                >
                  <FileTextIcon size={16} />
                  <span>Initiate Import Trade Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Ports Route Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <MapPinIcon size={20} className="text-red-500" />
              <h4 className="text-white font-bold text-base">Chittagong Port Terminal</h4>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Main ocean shipping gateway handling 90%+ of Bangladesh bulk industrial cargo and container vessels.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <MapPinIcon size={20} className="text-red-500" />
              <h4 className="text-white font-bold text-base">Benapole Land Port</h4>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Direct overland trade corridor for heavy raw cotton, chemicals, and agricultural produce from India & regional neighbors.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <MapPinIcon size={20} className="text-red-500" />
              <h4 className="text-white font-bold text-base">Hazrat Shahjalal Air Cargo</h4>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              High-speed temperature-controlled air cargo for urgent tech hardware, electronics, and perishables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
