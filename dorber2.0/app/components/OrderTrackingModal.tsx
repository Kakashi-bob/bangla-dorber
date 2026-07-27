"use client";

import React, { useState, useEffect } from "react";
import {
  ClockIcon,
  CheckCircleIcon,
  TruckIcon,
  XIcon,
  PhoneIcon,
  MapPinIcon,
  RefreshCwIcon,
} from "./Icons";

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOrderId?: string;
}

const ORDER_STAGES = [
  { stage: 1, title: "Order Received", desc: "Your order is confirmed & sent to BanglaDorber central kitchen" },
  { stage: 2, title: "Preparing Ingredients", desc: "Chef Tariqul is selecting organic spices & fresh proteins" },
  { stage: 3, title: "Cooking & Dum Baking", desc: "Slow cooking in traditional wood-fired ovens" },
  { stage: 4, title: "Out for Delivery", desc: "Rider Tanvir is en route with thermal hot-bags" },
  { stage: 5, title: "Delivered", desc: "Order delivered safely to your doorstep. Bon Appétit!" },
];

export function OrderTrackingModal({
  isOpen,
  onClose,
  initialOrderId = "BD-849201",
}: OrderTrackingModalProps) {
  const [orderId, setOrderId] = useState(initialOrderId);
  const [searchId, setSearchId] = useState(initialOrderId);
  const [currentStageIndex, setCurrentStageIndex] = useState(2); // 0 to 4
  const [etaMinutes, setEtaMinutes] = useState(18);

  useEffect(() => {
    if (initialOrderId) {
      setOrderId(initialOrderId);
      setSearchId(initialOrderId);
    }
  }, [initialOrderId]);

  if (!isOpen) return null;

  const handleAdvanceStage = () => {
    if (currentStageIndex < 4) {
      setCurrentStageIndex(currentStageIndex + 1);
      setEtaMinutes(Math.max(0, etaMinutes - 6));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel-glow max-w-xl w-full rounded-3xl p-6 md:p-8 space-y-6 relative border border-red-500/40 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <TruckIcon size={20} />
            </div>
            <div>
              <h3 className="text-white font-black text-lg">Live Order Status Tracker</h3>
              <p className="text-zinc-400 text-xs">Real-Time Kitchen & Rider Telemetry</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Search Order ID */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Order ID (e.g. BD-849201)"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white uppercase focus:outline-none focus:border-red-500"
          />
          <button
            onClick={() => setOrderId(searchId)}
            className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-white/10"
          >
            Track
          </button>
        </div>

        {/* Active Order Card Header */}
        <div className="bg-black/60 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Order Reference</span>
            <span className="text-base font-black text-amber-400">{orderId}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Estimated Delivery</span>
            <span className="text-base font-black text-emerald-400 flex items-center gap-1 justify-end">
              <ClockIcon size={16} />
              {currentStageIndex === 4 ? "Delivered!" : `${etaMinutes} Mins`}
            </span>
          </div>
        </div>

        {/* Stepper Progress Timeline */}
        <div className="space-y-4 py-2">
          {ORDER_STAGES.map((s, idx) => {
            const isCompleted = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;

            return (
              <div key={s.stage} className="flex items-start gap-4 relative">
                {/* Vertical Connecting Line */}
                {idx < ORDER_STAGES.length - 1 && (
                  <div
                    className={`absolute left-4 top-8 w-0.5 h-10 ${
                      idx < currentStageIndex ? "bg-red-500" : "bg-zinc-800"
                    }`}
                  />
                )}

                {/* Stage Bullet */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border transition-all ${
                    isCompleted
                      ? "bg-red-600 border-red-500 text-white shadow-md shadow-red-950"
                      : isCurrent
                      ? "bg-amber-500 border-amber-400 text-black animate-pulse"
                      : "bg-zinc-900 border-white/10 text-zinc-500"
                  }`}
                >
                  {isCompleted ? <CheckCircleIcon size={16} /> : s.stage}
                </div>

                {/* Stage Info */}
                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h4
                      className={`text-sm font-bold ${
                        isCurrent
                          ? "text-amber-400 font-extrabold"
                          : isCompleted
                          ? "text-white"
                          : "text-zinc-500"
                      }`}
                    >
                      {s.title}
                    </h4>
                    {isCurrent && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rider Details (Out for delivery stage) */}
        {currentStageIndex >= 3 && (
          <div className="bg-zinc-900/90 p-4 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-950 border border-red-500/40 flex items-center justify-center text-white font-bold">
                RT
              </div>
              <div>
                <p className="text-white font-bold">Rider Tanvir (Express Logistics)</p>
                <p className="text-zinc-400 text-[11px]">Green Honda CB150R &bull; Dhaka Central Zone</p>
              </div>
            </div>
            <a
              href="tel:+8801700000000"
              className="bg-emerald-950 border border-emerald-700/50 text-emerald-400 p-2.5 rounded-xl flex items-center gap-1 font-bold"
            >
              <PhoneIcon size={14} />
              <span>Call Rider</span>
            </a>
          </div>
        )}

        {/* Controls for Live Demo */}
        <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
          <button
            onClick={handleAdvanceStage}
            disabled={currentStageIndex === 4}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20"
          >
            <RefreshCwIcon size={13} />
            <span>Simulate Next Stage</span>
          </button>

          <button
            onClick={onClose}
            className="bg-gradient-red text-white font-bold px-5 py-2.5 rounded-xl shadow-md"
          >
            Close Tracker
          </button>
        </div>
      </div>
    </div>
  );
}
