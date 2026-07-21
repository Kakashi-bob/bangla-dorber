"use client";

import React, { useState } from "react";
import { MenuItem } from "./MenuSection";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "cod",
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);
  const vatAndService = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
  const deliveryFee = subtotal > 0 ? 60 : 0;
  const grandTotal = subtotal + vatAndService + deliveryFee;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      onClearCart();
      setIsCheckingOut(false);
      setOrderSuccess(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop Click to Close */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide Out Panel */}
      <div className="w-full max-w-md bg-[#0f1016] border-l border-[#d4af37]/30 h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              🛒
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">আপনার অর্ডার কার্ট</h3>
              <p className="text-xs text-gray-400">মোট {cartItems.length} টি খাবার সিলেক্ট করা হয়েছে</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        {/* Order Success Popup View */}
        {orderSuccess ? (
          <div className="my-auto text-center space-y-4 p-6 glass-panel rounded-2xl border border-[#d4af37]/40">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-3xl mx-auto animate-bounce">
              ✓
            </div>
            <h4 className="text-2xl font-black text-white">অর্ডার সফল হয়েছে! 🎉</h4>
            <p className="text-xs text-gray-300">
              ধন্যবাদ <strong className="text-amber-300">{formData.name}</strong>, আপনার অর্ডারটি গ্রহণ করা হয়েছে। অর্ডার আইডি: <span className="font-mono text-[#d4af37]">#BD-{Math.floor(1000 + Math.random() * 9000)}</span>
            </p>
            <p className="text-xs text-emerald-400 font-medium">আমদের প্রতিনিধি কল দিয়ে আপনার সাথে যোগাযোগ করবেন।</p>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Form View */
          <form onSubmit={handleCheckoutSubmit} className="my-auto space-y-4 pt-4">
            <h4 className="text-base font-bold text-amber-300 border-b border-white/10 pb-2">
              অর্ডার ও ডেলিভারি তথ্য দিন
            </h4>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">আপনার নাম *</label>
              <input
                type="text"
                required
                placeholder="যেমন: কামরুল হাসান"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">মোবাইল নম্বর *</label>
              <input
                type="tel"
                required
                placeholder="01700-000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">ডেলিভারি ঠিকানা *</label>
              <textarea
                required
                rows={2}
                placeholder="বাসা নং, রোড নং, এলাকা (যেমন: ধানমন্ডি ৭, ঢাকা)"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">পেমেন্ট মেথড</label>
              <select
                value={formData.payment}
                onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-amber-200 text-xs focus:border-[#d4af37] focus:outline-none"
              >
                <option value="cod" className="bg-black text-white">ক্যাশ অন ডেলিভারি (Cash on Delivery)</option>
                <option value="bkash" className="bg-black text-white">বিকাশ / নগদ (bKash / Nagad)</option>
              </select>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setIsCheckingOut(false)}
                className="w-1/3 py-2.5 rounded-xl bg-white/10 text-gray-300 text-xs font-bold"
              >
                আগে যান
              </button>
              <button
                type="submit"
                className="w-2/3 py-2.5 rounded-xl btn-gold text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                অর্ডার নিশ্চিত করুন (৳{grandTotal})
              </button>
            </div>
          </form>
        ) : (
          /* Cart Item List View */
          <>
            <div className="flex-1 py-4 space-y-3 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 text-gray-400 space-y-2">
                  <div className="text-5xl opacity-40">🍽️</div>
                  <p className="text-sm">আপনার কার্ট খালি রয়েছে!</p>
                  <p className="text-xs text-amber-300/60">মেনু থেকে খাবার সিলেক্ট করুন</p>
                </div>
              ) : (
                cartItems.map((ci) => (
                  <div
                    key={ci.item.id}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{ci.item.iconSvg}</span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{ci.item.name}</h4>
                        <p className="text-xs text-gold-gradient font-bold">
                          ৳{ci.item.price * ci.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-white/20 rounded-lg bg-black/40">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, -1)}
                          className="px-2 py-1 text-xs text-gray-300 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-amber-300">{ci.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, 1)}
                          className="px-2 py-1 text-xs text-gray-300 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(ci.item.id)}
                        className="text-red-400 hover:text-red-300 text-xs p-1"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Price Summary Footer */}
            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>খাবারের মূল্য:</span>
                    <span>৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ভ্যাট ও সার্ভিস চার্জ (৫%):</span>
                    <span>৳{vatAndService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>হোম ডেলিভারি ফি:</span>
                    <span>৳{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10 font-extrabold text-sm text-white">
                    <span>সর্বমোট দেয়:</span>
                    <span className="text-gold-gradient text-lg">৳{grandTotal}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3 rounded-xl btn-gold font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-lg"
                >
                  চেকআউট ও অর্ডার কনফার্ম করুন
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
