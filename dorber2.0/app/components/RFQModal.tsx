"use client";

import React, { useState, useEffect } from "react";
import {
  FileTextIcon,
  ShieldCheckIcon,
  XIcon,
  CheckCircleIcon,
  GlobeIcon,
} from "./Icons";

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export function RFQModal({ isOpen, onClose, prefilledProduct = "" }: RFQModalProps) {
  const [productName, setProductName] = useState(prefilledProduct);
  const [category, setCategory] = useState("Construction Materials");
  const [quantity, setQuantity] = useState("50 Metric Tons");
  const [destinationPort, setDestinationPort] = useState("Chittagong Port Terminal");
  const [lcTerms, setLcTerms] = useState("Irrevocable Sight LC");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [rfqRef, setRfqRef] = useState("");

  useEffect(() => {
    if (prefilledProduct) {
      setProductName(prefilledProduct);
    }
  }, [prefilledProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = "RFQ-BD-" + Math.floor(100000 + Math.random() * 900000);
    setRfqRef(generatedRef);
    setIsSuccess(true);
  };

  const handleDone = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel-glow max-w-2xl w-full rounded-3xl p-6 md:p-8 space-y-6 relative border border-red-500/40 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <FileTextIcon size={20} />
            </div>
            <div>
              <h3 className="text-white font-black text-lg">Request For Quote (RFQ)</h3>
              <p className="text-zinc-400 text-xs">BanglaDorber International Trading Desk</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Product / Commodity Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BSRM Steel Rebars 500W Grade"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Product Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Construction Materials">Construction Materials</option>
                  <option value="Industrial Products">Industrial Products</option>
                  <option value="Agricultural Products">Agricultural Products</option>
                  <option value="Food Commodities">Food Commodities</option>
                  <option value="Consumer Goods">Consumer Goods</option>
                  <option value="Chemicals">Chemicals</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Required Quantity & Unit *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 50 Metric Tons"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Discharge / Delivery Port</label>
                <select
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Chittagong Port Terminal">Chittagong Port Terminal</option>
                  <option value="Benapole Land Port">Benapole Land Port</option>
                  <option value="Dhaka Cargo Airport">Dhaka Air Cargo</option>
                  <option value="Factory Doorstep (Dhaka/Gazipur)">Factory Doorstep</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Payment / LC Term</label>
                <select
                  value={lcTerms}
                  onChange={(e) => setLcTerms(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Irrevocable Sight LC">Irrevocable Sight LC</option>
                  <option value="90 Days Deferred LC">90 Days Deferred LC</option>
                  <option value="Telegraphic Transfer (TT)">Telegraphic Transfer (TT)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Company Name *"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Contact Person Name *"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                placeholder="Business Email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <textarea
              placeholder="Additional specification details or customs requirement notes..."
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="w-full bg-gradient-red bg-gradient-red-hover text-white text-sm font-bold py-3.5 rounded-xl shadow-xl shadow-red-950/60 transition-all"
            >
              Submit Enterprise RFQ Quote
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500 text-red-400 flex items-center justify-center mx-auto">
              <CheckCircleIcon size={36} />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                RFQ Submitted Successfully
              </span>
              <h3 className="text-2xl font-black text-white mt-1">Official Pro-Forma Quote Under Preparation</h3>
            </div>

            <div className="bg-black/60 p-4 rounded-2xl border border-white/10 text-left text-xs space-y-2 text-zinc-300 max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>RFQ Reference:</span>
                <span className="font-bold text-amber-400">{rfqRef}</span>
              </div>
              <div className="flex justify-between">
                <span>Commodity:</span>
                <span className="font-semibold text-white">{productName} ({quantity})</span>
              </div>
              <div className="flex justify-between">
                <span>Client & Company:</span>
                <span className="font-semibold text-white">{contactName} ({companyName})</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              Our Senior Trade Specialist will email the signed pro-forma invoice to {email} within 4 business hours.
            </p>

            <button
              onClick={handleDone}
              className="bg-gradient-red text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
