"use client";

import React from "react";

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  dishTried: string;
}

const REVIEWS_LIST: Review[] = [
  {
    id: "r1",
    name: "তানভীর আহমেদ",
    location: "ধানমন্ডি, ঢাকা",
    rating: 5,
    comment: "বাংলা দরবারের খাসির কাচ্চি বিরিয়ানিটা জাস্ট অসাধারণ! একদম ঘিয়ের মৌ মৌ গন্ধ আর খাঁটি কাঁসার থালিতে দেওয়ার অভিজ্ঞতাটাই আলাদা।",
    date: "১৬ জুলাই, ২০২৬",
    dishTried: "শাহী খাসির কাচ্চি বিরিয়ানি",
  },
  {
    id: "r2",
    name: "সুমাইয়া রহমান",
    location: "গুলশান ২, ঢাকা",
    rating: 5,
    comment: "সর্ষে ইলিশ পাতুড়ি আর গলদা চিংড়ির মালাইকারি মুখে লেগে থাকার মতো স্বাদ। পরিবারের সবাইকে নিয়ে পরিবেশটা খুবই রাজকীয় লেগেছে।",
    date: "১৮ জুলাই, ২০২৬",
    dishTried: "সর্ষে ইলিশ পাতুড়ি",
  },
  {
    id: "r3",
    name: "মেহেদী হাসান",
    location: "উত্তরা, ঢাকা",
    rating: 5,
    comment: "অনলাইন টেবিল বুকিং করার সাথে সাথেই কনফার্মেশন পেয়েছিলাম। স্টাফদের ব্যবহার ও খাবার পরিবেশন খুবই প্রফেশনাল। ৫ এ ৫ স্টার!",
    date: "২০ জুলাই, ২০২৬",
    dishTried: "নবাবী ভুনা হাঁস",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
            গ্রাহকের ভালোবাসা ও মতামত
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            ভোজনরসিকদের <span className="text-gold-gradient">সততা মূল্যায়ণ</span>
          </h2>
          <p className="text-gray-400 text-sm">
            হাজারো সুখী গ্রাহকের প্রশংসাই আমাদের কাজের অনুপ্রেরণা। দেখে নিন আমাদের সম্পর্কে তারা কী বলছেন।
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Rating Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {"★".repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    ✓ ভেরিফাইড ক্রেতা
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-[10px] text-amber-200/70">{rev.location}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">অর্ডার: {rev.dishTried}</p>
                </div>
                <span className="text-[10px] text-gray-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
