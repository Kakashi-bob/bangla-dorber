"use client";

import React from "react";

export default function StorySection() {
  return (
    <section id="story" className="py-24 relative bg-[#090a0f] overflow-hidden border-t border-b border-amber-500/10">
      
      {/* Glow Orbs Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#881337]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Illustration Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 shadow-2xl relative">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#d4af37] to-[#881337] p-[2px] shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#090a0f] flex items-center justify-center text-4xl">
                    👑
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gold-gradient">
                  নবাবী স্বাদের শতাব্দী প্রাচীন ইতিহাস
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  ঢাকার নবাব পরিবার এবং ঐতিহ্যবাহী জমিদারি আমলের রান্নাঘর থেকে অনুপ্রাণিত হয়ে আমরা সংরক্ষণ করেছি বাঙালির খাঁটি রেসিপি।
                </p>

                <div className="pt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs font-bold text-amber-300 block">১৭৮২ খ্রিস্টাব্দ</span>
                    <span className="text-[10px] text-gray-400">নবাবী মশলার আবির্ভাব</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs font-bold text-amber-300 block">১০০% খাঁটি</span>
                    <span className="text-[10px] text-gray-400">কাঁসা-পিতলের থালি</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-bold text-amber-300 uppercase tracking-widest">
              আমাদের ঐতিহ্য ও পরিচয়
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              বাঙালি খাবারের খাঁটি স্বাদ বজায় রাখাই আমাদের <span className="text-gold-gradient">একমাত্র মূলমন্ত্র</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-amber-300">বাংলা দরবার</strong> শুধুই একটি রেস্তোরাঁ নয়—এটি বাংলা সংস্কৃতির এক অনন্য উদযাপন। আমরা বিশ্বাস করি, ভালো খাবার কেবল পেট ভরায় না, মনকে স্পর্শ করে। আমাদের প্রধান বাবুর্চিরা দীর্ঘ ৩০ বছর ধরে প্রাচীন রান্নার পদ্ধতি মেনে কাঠের আঁচে খাবার তৈরি করে আসছেন।
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-white/10 flex items-start gap-3">
                <div className="text-2xl">🍯</div>
                <div>
                  <h4 className="text-sm font-bold text-white">খাঁটি পাবনার ঘি</h4>
                  <p className="text-xs text-gray-400">কোনো কৃত্রিম ফ্লেভার নয়, সব রান্নায় সরাসরি গাওয়া ঘি ব্যবহার করা হয়।</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10 flex items-start gap-3">
                <div className="text-2xl">🔥</div>
                <div>
                  <h4 className="text-sm font-bold text-white">ধীমে আঁচে কাচ্চি</h4>
                  <p className="text-xs text-gray-400">কাঠের আগুনে ৩ ঘণ্টা ধরে ময়দার প্রলেপ দিয়ে ধীমে আঁচে দমে রান্না।</p>
                </div>
              </div>
            </div>

            {/* Chef Quote Badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#d4af37]/10 via-white/5 to-transparent border-l-4 border-[#d4af37] text-xs text-amber-200 italic">
              &quot;আমরা কোনো সস্তা শর্টকাট ব্যবহার করি না। প্রতিটা বিরিয়ানি ও ঝোলে থাকে ভালোবাসার ছোঁয়া ও আমাদের ঐতিহ্য।&quot; 
              <span className="block font-bold not-italic text-white mt-1">— ওস্তাদ রফিক বাবুর্চি (প্রধান শেফ, বাংলা দরবার)</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
