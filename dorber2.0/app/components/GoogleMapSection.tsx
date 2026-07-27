"use client";

import React from "react";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "./Icons";

export function GoogleMapSection() {
  return (
    <section id="map" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
              <MapPinIcon size={14} />
              <span>Headquarters & Fine Dining Hub</span>
            </div>

            <h2 className="text-3xl font-black text-white">
              Visit BanglaDorber <span className="text-gradient-red">HQ & Restaurant</span>
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Located in the heart of Gulshan diplomatic enclave in Dhaka. Our trade executive suites and flagship fine dining restaurant welcome global delegates and food enthusiasts daily.
            </p>

            <div className="space-y-4 text-xs text-zinc-300">
              <div className="flex items-start gap-3 bg-black/60 p-3.5 rounded-2xl border border-white/10">
                <MapPinIcon size={18} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Address:</strong>
                  <span>BanglaDorber Tower, Plot 42, Road 11, Block C, Gulshan-2, Dhaka 1212, Bangladesh</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/60 p-3.5 rounded-2xl border border-white/10">
                <PhoneIcon size={18} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Hotline & Reservations:</strong>
                  <span>+880 9612-DORBER (367237) / +880 1711-000999</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/60 p-3.5 rounded-2xl border border-white/10">
                <ClockIcon size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Hours of Operation:</strong>
                  <span>Trading Desk: 24/7 Global | Dining: 11:00 AM - 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed Right */}
          <div className="lg:col-span-7 h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl relative">
            <iframe
              title="BanglaDorber Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.582335198276!2d90.4125183150041!3d23.79788298456673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f6233261%3A0xe572d427d14d7938!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
