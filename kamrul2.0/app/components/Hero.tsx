"use client";

import React from "react";

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-[#0f1017] via-[#090a0f] to-[#090a0f]">
      {/* Background Decorative Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#d4af37]/20 to-[#881337]/30 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Information */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Royal Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#d4af37]/30 text-xs font-semibold text-amber-200 uppercase tracking-widest shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
              ঢাকার সেরা প্রিমিয়াম রাজকীয় রেস্তোরাঁ
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              রাজকীয় বাঙালি স্বাদের <br />
              <span className="text-gold-gradient text-gold-glow">ঐতিহ্যবাহী দরবার</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              নবাবী আমলের গোপন মশলার রেসিপি, কাঁসা-পিতলের রাজকীয় পরিবেশনা এবং ১০০০+ খাঁটি দেশি খাবারের অপূর্ব স্বাদ নিয়ে আমরা তৈরি করেছি <strong className="text-amber-300">বাংলা দরবার</strong>।
            </p>

            {/* Feature Bullet Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-amber-100/90">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-amber-400/20">
                <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ১০০% খাঁটি ঘি ও মশলা
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-amber-400/20">
                <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                শাহী বাবুর্চির রান্নার জাদু
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-amber-400/20">
                <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                লাইভ হাইজিন কিচেন
              </div>
            </div>

            {/* Action Buttons & Rating */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-gold text-base font-extrabold uppercase tracking-wide cursor-pointer shadow-2xl flex items-center justify-center gap-2"
              >
                <span>টেবিল বুক করুন</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-amber-400/30 text-amber-200 text-base font-semibold transition-all text-center"
              >
                মেনু দেখুন
              </a>
            </div>

            {/* Customer Trust Rating Bar */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] bg-amber-900 flex items-center justify-center text-xs font-bold text-amber-200">
                  K
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] bg-red-950 flex items-center justify-center text-xs font-bold text-amber-200">
                  S
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] bg-yellow-900 flex items-center justify-center text-xs font-bold text-amber-200">
                  A
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center text-amber-400 text-sm">
                  ★★★★★ <span className="ml-2 font-bold text-white">4.9/5.0</span>
                </div>
                <p className="text-xs text-gray-400">২,৫০০+ পজিটিভ ভোজনরসিক গ্রাহকের রিভিউ</p>
              </div>
            </div>

          </div>

          {/* Right Column - Luxury Graphic Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-lg aspect-square rounded-3xl p-3 bg-gradient-to-b from-[#d4af37]/40 via-white/5 to-[#881337]/50 shadow-2xl shadow-[#d4af37]/20 border border-[#d4af37]/30">
              
              {/* Graphic Display Box */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative group bg-[#12131a]">
                
                {/* Visual Graphic Representation */}
                <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#1b0a0e] via-[#151622] to-[#251e10]">
                  {/* Decorative Radial Grid */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Center Dish Graphic Icon & Backdrop */}
                  <div className="relative z-10 text-center p-8">
                    <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-tr from-[#d4af37] to-[#881337] p-1 shadow-2xl shadow-[#d4af37]/40 mb-6 animate-pulse">
                      <div className="w-full h-full rounded-full bg-[#090a0f] flex items-center justify-center overflow-hidden">
                        {/* Shahi Feast SVG Illustration */}
                        <svg className="w-24 h-24 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-xs font-bold text-amber-300 tracking-wider uppercase">
                      রাজকীয় ভোজ থালি 👑
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-2">শাহজাহানি কাঁসা থালি</h3>
                    <p className="text-xs text-amber-200/70 mt-1">কাচ্চি বিরিয়ানি + ইলিশ পাতুড়ি + মালাইকারি + মিষ্টি দই</p>
                  </div>
                </div>

                {/* Floating Highlight Card 1 */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-2 rounded-xl flex items-center gap-2 border border-amber-400/40 shadow-lg animate-bounce">
                  <span className="text-lg">🔥</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">হট সেলিং</p>
                    <p className="text-xs font-bold text-amber-300">কাচ্চি বিরিয়ানি</p>
                  </div>
                </div>

                {/* Floating Highlight Card 2 */}
                <div className="absolute bottom-4 left-4 glass-panel px-3 py-2 rounded-xl flex items-center gap-2 border border-amber-400/40 shadow-lg">
                  <span className="text-lg">👑</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">স্পেশালিটি</p>
                    <p className="text-xs font-bold text-amber-300">খাঁটি কাঁসার থালি</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
