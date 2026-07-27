"use client";

import React, { useState } from "react";
import { MessageSquareIcon, SendIcon, XIcon } from "./Icons";

export function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const handleSendWhatsApp = () => {
    if (!chatMessage.trim()) return;
    const text = encodeURIComponent(`Hello BanglaDorber! ${chatMessage}`);
    window.open(`https://wa.me/8801700000000?text=${text}`, "_blank");
    setChatMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-3 w-80 glass-panel-glow rounded-3xl p-4 border border-emerald-500/40 shadow-2xl animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                BD
              </div>
              <div>
                <h4 className="text-white font-bold text-xs">BanglaDorber WhatsApp Desk</h4>
                <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Online Now
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
            >
              <XIcon size={14} />
            </button>
          </div>

          <div className="bg-black/60 p-3 rounded-xl border border-white/10 text-xs text-zinc-300 mb-3 space-y-1">
            <p className="font-semibold text-white">How can we assist you today?</p>
            <p className="text-[11px] text-zinc-400">
              Ask about bulk trade shipments, LC terms, or food ordering & table bookings!
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="w-full bg-zinc-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleSendWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl font-bold"
            >
              <SendIcon size={14} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 hover:scale-110 transition-transform"
        title="Live WhatsApp Support"
      >
        <MessageSquareIcon size={24} />
      </button>
    </div>
  );
}
