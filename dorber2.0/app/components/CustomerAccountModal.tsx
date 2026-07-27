"use client";

import React, { useState } from "react";
import { UserIcon, XIcon, ShoppingBagIcon, HeartIcon, MapPinIcon, ClockIcon } from "./Icons";

interface CustomerAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  onOpenTrackOrder: (orderId?: string) => void;
}

export function CustomerAccountModal({
  isOpen,
  onClose,
  favorites,
  onOpenTrackOrder,
}: CustomerAccountModalProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "login" | "history" | "favorites">("profile");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Demo state
  const [email, setEmail] = useState("kabir.hossain@example.com");
  const [password, setPassword] = useState("••••••••");

  if (!isOpen) return null;

  const mockOrderHistory = [
    { id: "BD-849201", date: "July 26, 2026", items: "Royal Kacchi Biryani, Peri-Peri Chicken", status: "Delivered", total: 1540 },
    { id: "BD-721094", date: "July 20, 2026", items: "Double Smoked Smash Burger, Mojito", status: "Delivered", total: 760 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel-glow max-w-xl w-full rounded-3xl p-6 md:p-8 space-y-6 relative border border-red-500/40 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <UserIcon size={20} />
            </div>
            <div>
              <h3 className="text-white font-black text-lg">Customer Account Hub</h3>
              <p className="text-zinc-400 text-xs">Manage Orders, Addresses & Favorites</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-3 gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-white/10 text-xs font-bold">
          <button
            onClick={() => setActiveTab("profile")}
            className={`py-2 rounded-xl transition-all ${
              activeTab === "profile"
                ? "bg-gradient-red text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Profile
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`py-2 rounded-xl transition-all ${
              activeTab === "history"
                ? "bg-gradient-red text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Order History
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`py-2 rounded-xl transition-all ${
              activeTab === "favorites"
                ? "bg-gradient-red text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Favorites ({favorites.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "profile" && (
          <div className="space-y-4 text-xs">
            <div className="flex items-center gap-4 bg-black/60 p-4 rounded-2xl border border-white/10">
              <div className="w-14 h-14 rounded-full bg-red-950 border border-red-500 flex items-center justify-center text-white font-black text-xl">
                KH
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Kabir Hossain</h4>
                <p className="text-zinc-400">kabir.hossain@example.com &bull; +880 1711-889900</p>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-bold mt-1 inline-block">
                  Gold VIP Customer
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Saved Delivery Addresses</h4>
              <div className="bg-black/60 p-3.5 rounded-2xl border border-white/10 space-y-1">
                <span className="text-white font-bold block flex items-center gap-1">
                  <MapPinIcon size={14} className="text-red-500" /> Primary Residence (Gulshan-2)
                </span>
                <p className="text-zinc-400">House 12, Road 45, Block D, Gulshan-2, Dhaka 1212</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-3">
            {mockOrderHistory.map((order) => (
              <div
                key={order.id}
                className="bg-black/60 p-4 rounded-2xl border border-white/10 space-y-2 text-xs"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-400 text-sm">{order.id}</span>
                  <span className="bg-emerald-950 text-emerald-400 border border-emerald-700/50 px-2.5 py-0.5 rounded-full font-bold">
                    {order.status}
                  </span>
                </div>
                <p className="text-zinc-300">{order.items}</p>
                <div className="flex justify-between items-center pt-2 border-t border-white/10 text-zinc-400">
                  <span>{order.date} &bull; Total: ৳{order.total}</span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenTrackOrder(order.id);
                    }}
                    className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1"
                  >
                    <ClockIcon size={12} />
                    <span>Track Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="text-xs text-zinc-400 space-y-2">
            <p>You have saved {favorites.length} items to your favorites list.</p>
            {favorites.length === 0 ? (
              <p className="text-zinc-500 italic py-4">Click the heart icon on any food item to save it here!</p>
            ) : (
              <div className="bg-black/60 p-4 rounded-2xl border border-white/10 text-white font-bold">
                {favorites.length} Gourmet Dishes Bookmarked
              </div>
            )}
          </div>
        )}

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gradient-red text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
