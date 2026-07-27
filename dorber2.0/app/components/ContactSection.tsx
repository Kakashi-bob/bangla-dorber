"use client";

import React, { useState } from "react";
import { SendIcon, MailIcon, CheckCircleIcon } from "./Icons";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <MailIcon size={14} />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-gradient-red">BanglaDorber</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have questions about trade commodities, LC opening, bulk orders, or dining reservations? Send us a direct message.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-panel-glow rounded-3xl p-8 md:p-10 border border-red-500/30">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <input
                type="text"
                placeholder="Inquiry Subject *"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500"
              />

              <textarea
                placeholder="Type your message or trade inquiry here..."
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="w-full bg-gradient-red bg-gradient-red-hover text-white text-sm font-bold py-4 rounded-xl shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 transition-all"
              >
                <SendIcon size={16} />
                <span>Send Message</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircleIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">Thank You, {name}!</h3>
              <p className="text-xs text-zinc-300">
                Your message has been received. Our support team will reply to {email} shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-zinc-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
