"use client";

import React, { useState } from "react";
import { MenuItem, MOCK_COUPONS } from "../data/siteData";
import {
  ShoppingBagIcon,
  XIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  PercentIcon,
  CheckCircleIcon,
  CreditCardIcon,
  SmartphoneIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "./Icons";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (orderId: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced,
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>("");
  const [couponSuccess, setCouponSuccess] = useState<string>("");

  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "bKash" | "Nagad" | "Rocket" | "Card">("bKash");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);
  const deliveryFee = deliveryMethod === "delivery" ? (subtotal > 0 ? 60 : 0) : 0;
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const total = Math.max(0, subtotal + deliveryFee - discountAmount);

  const handleApplyCoupon = () => {
    setCouponError("");
    setCouponSuccess("");
    const matched = MOCK_COUPONS.find(
      (c) => c.code.toUpperCase() === couponCode.trim().toUpperCase()
    );

    if (!matched) {
      setCouponError("Invalid promo code! Try BANGLA10 or VIPGOLD");
      return;
    }

    if (subtotal < matched.minOrder) {
      setCouponError(`Minimum order amount for ${matched.code} is ৳${matched.minOrder}`);
      return;
    }

    setAppliedDiscount(matched.discountPercentage);
    setCouponSuccess(`${matched.discountPercentage}% Discount Applied Successfully!`);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!customerName || !customerPhone || (deliveryMethod === "delivery" && !deliveryAddress)) {
      alert("Please fill in your contact and address details.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedOrderId = "BD-" + Math.floor(100000 + Math.random() * 900000);
      setIsSubmitting(false);
      onClearCart();
      onClose();
      onOrderPlaced(generatedOrderId);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-lg bg-[#0d0d12] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0d0d12]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <ShoppingBagIcon size={20} />
            </div>
            <div>
              <h3 className="text-white font-black text-lg">Your Order Basket</h3>
              <p className="text-zinc-400 text-xs">{cart.length} Food Items Selected</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-6 flex-1 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto text-zinc-500">
                <ShoppingBagIcon size={32} />
              </div>
              <p className="text-zinc-400 text-sm font-medium">Your food cart is empty.</p>
              <p className="text-zinc-500 text-xs">Browse our menu and add your favorite dishes!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center gap-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-white/10"
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className="text-white font-bold text-xs line-clamp-1">{item.name}</h4>
                    <p className="text-amber-400 font-black text-sm">৳{item.price * quantity}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-xl border border-white/10">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:text-red-400 text-zinc-400"
                    >
                      <MinusIcon size={13} />
                    </button>
                    <span className="text-white text-xs font-bold w-4 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:text-red-400 text-zinc-400"
                    >
                      <PlusIcon size={13} />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                  >
                    <TrashIcon size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {cart.length > 0 && (
            <>
              {/* Promo Coupon Form */}
              <div className="bg-zinc-900/80 p-4 rounded-2xl border border-white/10 space-y-2">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <PercentIcon size={14} className="text-amber-400" />
                  <span>Apply Promo Code / Coupon</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter BANGLA10 or VIPGOLD"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full bg-black border border-white/15 rounded-xl px-3 py-2 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-red-500"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold px-4 py-2 rounded-xl transition-all"
                  >
                    Apply
                  </button>
                </div>
                {couponError && <p className="text-red-400 text-[11px] font-medium">{couponError}</p>}
                {couponSuccess && (
                  <p className="text-emerald-400 text-[11px] font-medium flex items-center gap-1">
                    <CheckCircleIcon size={12} />
                    {couponSuccess}
                  </p>
                )}
              </div>

              {/* Delivery / Pickup Choice */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">Fulfillment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      deliveryMethod === "delivery"
                        ? "bg-red-950/80 border-red-500 text-white"
                        : "bg-zinc-900 border-white/10 text-zinc-400"
                    }`}
                  >
                    Home Delivery (৳60)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      deliveryMethod === "pickup"
                        ? "bg-red-950/80 border-red-500 text-white"
                        : "bg-zinc-900 border-white/10 text-zinc-400"
                    }`}
                  >
                    Takeaway Pickup (Free)
                  </button>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckout} className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Customer & Payment Details
                </h4>

                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                />

                <input
                  type="tel"
                  placeholder="Mobile Phone (bKash/Nagad) *"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                />

                {deliveryMethod === "delivery" && (
                  <textarea
                    placeholder="Full Delivery Address in Dhaka / Bangladesh *"
                    required
                    rows={2}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                  />
                )}

                {/* Payment Methods */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-semibold text-zinc-300">Select Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "bKash", label: "bKash" },
                      { id: "Nagad", label: "Nagad" },
                      { id: "Rocket", label: "Rocket" },
                      { id: "COD", label: "Cash on Delivery" },
                      { id: "Card", label: "Debit/Credit Card" },
                    ].map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id as any)}
                        className={`p-2 rounded-xl text-xs font-bold border transition-all text-center ${
                          paymentMethod === pm.id
                            ? "bg-gradient-red text-white border-red-500"
                            : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {pm.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Order Summary & Submit */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-zinc-300">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>৳{subtotal}</span>
                  </div>
                  {deliveryMethod === "delivery" && (
                    <div className="flex justify-between">
                      <span>Delivery Charge:</span>
                      <span>৳{deliveryFee}</span>
                    </div>
                  )}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Discount ({appliedDiscount}%):</span>
                      <span>-৳{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                    <span>Total Amount Payable:</span>
                    <span className="text-gradient-gold">৳{total}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-red bg-gradient-red-hover text-white text-sm font-bold py-4 rounded-xl shadow-xl shadow-red-950/60 mt-4 flex items-center justify-center gap-2 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Processing Order...</span>
                    ) : (
                      <>
                        <span>Confirm & Place Order (৳{total})</span>
                        <ChevronRightIcon size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
