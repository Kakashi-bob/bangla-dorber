"use client";

import React, { useState } from "react";
import {
  LayoutDashboardIcon,
  ShoppingBagIcon,
  XIcon,
  FileTextIcon,
  UserIcon,
  PercentIcon,
  CheckCircleIcon,
  RefreshCwIcon,
} from "./Icons";

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminDashboardModal({ isOpen, onClose }: AdminDashboardModalProps) {
  const [adminSection, setAdminSection] = useState<"orders" | "rfqs" | "coupons" | "analytics">("orders");

  const [ordersList, setOrdersList] = useState([
    { id: "BD-849201", customer: "Nusrat Jahan", phone: "+880 1711-223344", items: "Royal Kacchi Biryani (x2)", status: "Cooking", total: 1500 },
    { id: "BD-849202", customer: "Engr. Mahmud", phone: "+880 1819-556677", items: "Smash Burger (x3), Fries", status: "Preparing", total: 1780 },
    { id: "BD-849203", customer: "Tanvir Ahmed", phone: "+880 1912-990011", items: "Truffle Pizza, Mocktail", status: "Out for Delivery", total: 1230 },
  ]);

  const [rfqLeads, setRfqLeads] = useState([
    { ref: "RFQ-BD-904128", company: "Apex Garments Ltd", product: "Raw Cotton Yarn 30s", qty: "25 MT", port: "Chittagong Port" },
    { ref: "RFQ-BD-904129", company: "Dhaka Sky-Tower Proj", product: "BSRM Steel Rebars 500W", qty: "500 MT", port: "Chittagong Port" },
  ]);

  if (!isOpen) return null;

  const handleUpdateOrderStatus = (orderId: string, newStatus: string) => {
    setOrdersList((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel-glow max-w-4xl w-full max-h-[90vh] rounded-3xl p-6 md:p-8 space-y-6 relative border border-amber-500/40 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 sticky top-0 bg-[#0d0d12]/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <LayoutDashboardIcon size={20} />
            </div>
            <div>
              <h3 className="text-white font-black text-xl">BanglaDorber Enterprise Admin</h3>
              <p className="text-zinc-400 text-xs">Live Order Management, RFQ Desk & Analytics</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Analytics Top Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Total Revenue</span>
            <span className="text-xl font-black text-gradient-gold">৳4,850,000</span>
          </div>
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Active Food Orders</span>
            <span className="text-xl font-black text-white">{ordersList.length} Active</span>
          </div>
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Enterprise RFQs</span>
            <span className="text-xl font-black text-red-400">{rfqLeads.length} Inquiries</span>
          </div>
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold block">System Status</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              100% Operational
            </span>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-white/10 text-xs font-bold">
          <button
            onClick={() => setAdminSection("orders")}
            className={`px-4 py-2 rounded-xl transition-all ${
              adminSection === "orders" ? "bg-gradient-red text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            Manage Food Orders
          </button>
          <button
            onClick={() => setAdminSection("rfqs")}
            className={`px-4 py-2 rounded-xl transition-all ${
              adminSection === "rfqs" ? "bg-gradient-red text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            Manage Trade RFQs
          </button>
          <button
            onClick={() => setAdminSection("coupons")}
            className={`px-4 py-2 rounded-xl transition-all ${
              adminSection === "coupons" ? "bg-gradient-red text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            Manage Coupons
          </button>
        </div>

        {/* Orders Table */}
        {adminSection === "orders" && (
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Live Order Management Queue
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400 font-semibold">
                    <th className="py-2.5 px-3">Order ID</th>
                    <th className="py-2.5 px-3">Customer</th>
                    <th className="py-2.5 px-3">Items</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Update Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {ordersList.map((o) => (
                    <tr key={o.id} className="hover:bg-zinc-900/40">
                      <td className="py-3 px-3 font-bold text-amber-400">{o.id}</td>
                      <td className="py-3 px-3 text-white font-medium">
                        {o.customer}
                        <br />
                        <span className="text-[10px] text-zinc-400">{o.phone}</span>
                      </td>
                      <td className="py-3 px-3 text-zinc-300">{o.items}</td>
                      <td className="py-3 px-3 font-bold text-white">৳{o.total}</td>
                      <td className="py-3 px-3 font-bold text-emerald-400">{o.status}</td>
                      <td className="py-3 px-3">
                        <select
                          value={o.status}
                          onChange={(e) => handleUpdateOrderStatus(o.id, e.target.value)}
                          className="bg-black border border-white/20 rounded-lg px-2 py-1 text-[11px] text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="Received">Order Received</option>
                          <option value="Preparing">Preparing</option>
                          <option value="Cooking">Cooking</option>
                          <option value="Out for Delivery">Out for Delivery</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* RFQ Leads Table */}
        {adminSection === "rfqs" && (
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Corporate Trade RFQ Inquiries
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400 font-semibold">
                    <th className="py-2.5 px-3">RFQ Ref</th>
                    <th className="py-2.5 px-3">Company</th>
                    <th className="py-2.5 px-3">Commodity & Volume</th>
                    <th className="py-2.5 px-3">Target Port</th>
                    <th className="py-2.5 px-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {rfqLeads.map((r) => (
                    <tr key={r.ref} className="hover:bg-zinc-900/40">
                      <td className="py-3 px-3 font-bold text-red-400">{r.ref}</td>
                      <td className="py-3 px-3 font-semibold text-white">{r.company}</td>
                      <td className="py-3 px-3 text-zinc-300">{r.product} ({r.qty})</td>
                      <td className="py-3 px-3 text-zinc-400">{r.port}</td>
                      <td className="py-3 px-3">
                        <button
                          onClick={() => alert(`Pro-Forma Quote sent to ${r.company}`)}
                          className="bg-red-600 hover:bg-red-500 text-white font-bold px-3 py-1 rounded-md text-[11px]"
                        >
                          Send Pro-Forma
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Coupons Admin */}
        {adminSection === "coupons" && (
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Active Discount Coupons
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-black/60 p-4 rounded-2xl border border-white/10">
                <span className="font-mono text-base font-bold text-amber-400">BANGLA10</span>
                <p className="text-zinc-300">10% OFF over ৳500</p>
              </div>
              <div className="bg-black/60 p-4 rounded-2xl border border-white/10">
                <span className="font-mono text-base font-bold text-amber-400">VIPGOLD</span>
                <p className="text-zinc-300">20% OFF over ৳1500</p>
              </div>
              <div className="bg-black/60 p-4 rounded-2xl border border-white/10">
                <span className="font-mono text-base font-bold text-amber-400">WELCOME20</span>
                <p className="text-zinc-300">15% Welcome Bonus</p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gradient-red text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md"
          >
            Exit Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
}
