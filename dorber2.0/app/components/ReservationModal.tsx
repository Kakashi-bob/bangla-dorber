"use client";

import React, { useState } from "react";
import {
  UtensilsIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  XIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "./Icons";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [guestCount, setGuestCount] = useState(2);
  const [resDate, setResDate] = useState("2026-07-28");
  const [resTime, setResTime] = useState("19:30");
  const [seatingArea, setSeatingArea] = useState("VIP Private Lounge");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationCode, setReservationCode] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = "RES-" + Math.floor(10000 + Math.random() * 90000);
    setReservationCode(code);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel-glow max-w-xl w-full rounded-3xl p-6 md:p-8 space-y-6 relative border border-amber-500/40 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <UtensilsIcon size={20} />
            </div>
            <div>
              <h3 className="text-white font-black text-lg">Reserve a Gourmet Table</h3>
              <p className="text-zinc-400 text-xs">BanglaDorber Heritage Restaurant, Dhaka</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
          >
            <XIcon size={18} />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Date, Time & Guests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1">
                  <CalendarIcon size={13} className="text-amber-400" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={resDate}
                  onChange={(e) => setResDate(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1">
                  <ClockIcon size={13} className="text-amber-400" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={resTime}
                  onChange={(e) => setResTime(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="14:00">02:00 PM (Lunch)</option>
                  <option value="18:30">06:30 PM (Dinner)</option>
                  <option value="19:30">07:30 PM (Prime Dinner)</option>
                  <option value="21:00">09:00 PM (Late Dinner)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1">
                  <UserIcon size={13} className="text-amber-400" />
                  <span>Number of Guests</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  required
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Seating Preference */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300">Seating Atmosphere</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  "VIP Private Lounge",
                  "Rooftop Garden",
                  "Main Heritage Dining",
                  "Terrace Lounge",
                ].map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSeatingArea(area)}
                    className={`p-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                      seatingArea === area
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold"
                        : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              />

              <input
                type="tel"
                placeholder="Mobile Phone Number *"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <textarea
              placeholder="Special requests or dietary instructions (optional)"
              rows={2}
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-black text-sm font-extrabold py-3.5 rounded-xl shadow-xl shadow-amber-950/50 transition-all transform hover:scale-[1.01]"
            >
              Confirm VIP Table Reservation
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center mx-auto">
              <CheckCircleIcon size={36} />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Reservation Confirmed
              </span>
              <h3 className="text-2xl font-black text-white mt-1">We Look Forward To Serving You!</h3>
            </div>

            <div className="bg-black/60 p-4 rounded-2xl border border-amber-500/30 text-left text-xs space-y-2 text-zinc-300 max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Confirmation Voucher:</span>
                <span className="font-bold text-amber-400">{reservationCode}</span>
              </div>
              <div className="flex justify-between">
                <span>Guest Name:</span>
                <span className="font-semibold text-white">{customerName}</span>
              </div>
              <div className="flex justify-between">
                <span>Guests & Area:</span>
                <span className="font-semibold text-white">{guestCount} Guests &bull; {seatingArea}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="font-semibold text-white">{resDate} at {resTime}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              An SMS confirmation voucher has been dispatched to {customerPhone}.
            </p>

            <button
              onClick={handleReset}
              className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold px-6 py-3 rounded-xl border border-white/10"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
