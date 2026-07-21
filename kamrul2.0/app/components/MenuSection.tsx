"use client";

import React, { useState } from "react";

export interface MenuItem {
  id: string;
  name: string;
  englishName: string;
  category: "biryani" | "fish" | "meat" | "dessert" | "drinks";
  price: number;
  rating: number;
  spiceLevel: number;
  isPopular?: boolean;
  description: string;
  iconSvg: string;
  image?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "শাহী খাসির কাচ্চি বিরিয়ানি",
    englishName: "Shahi Mutton Kacchi Biryani",
    category: "biryani",
    price: 580,
    rating: 4.9,
    spiceLevel: 2,
    isPopular: true,
    description: "খাঁটি দেশি ঘি, জাফরান, আলু ও তুলতুলে খাসির মাংসের সাথে সুগন্ধি বাসমতী চালের শাহী কাচ্চি।",
    iconSvg: "🍖",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m2",
    name: "সর্ষে ইলিশ পাতুড়ি",
    englishName: "Mustard Ilish Paturi",
    category: "fish",
    price: 650,
    rating: 4.9,
    spiceLevel: 3,
    isPopular: true,
    description: "কলা পাতায় মোড়ানো খাঁটি সর্ষে বাটা ও কাঁচা মরিচের ফ্লেভারে ভাপে সিদ্ধ পদ্মার ইলিশ।",
    iconSvg: "🐟",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m3",
    name: "গলদা চিংড়ি মালাইকারি",
    englishName: "Jumbo Prawn Coconut Curry",
    category: "fish",
    price: 720,
    rating: 4.8,
    spiceLevel: 1,
    isPopular: true,
    description: "নারকেলের ঘন দুধ ও শাহী মশলায় রান্না করা রাজকীয় বড় সাইজের গলদা চিংড়ি।",
    iconSvg: "🦐",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m4",
    name: "নবাবী ভুনা হাঁসের মাংস",
    englishName: "Nawabi Duck Bhuna",
    category: "meat",
    price: 540,
    rating: 4.7,
    spiceLevel: 3,
    isPopular: false,
    description: "হাতে বাটা মসলা ও নারকেলের দুধে ধীমে আঁচে সেদ্ধ করা ভুনা হাঁসের মাংস।",
    iconSvg: "🦆",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m5",
    name: "শাহী মোঘলাই রেজালা",
    englishName: "Shahi Mutton Rezala",
    category: "meat",
    price: 490,
    rating: 4.8,
    spiceLevel: 1,
    isPopular: false,
    description: "কাজুবাদাম, পোস্ত দানা ও মিষ্টি দই দিয়ে তৈরি ধবধবে সাদা গ্রেভির শাহী রেজালা।",
    iconSvg: "🍲",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m6",
    name: "বগুড়ার শাহী মিষ্টি দই ও রাজভোগ",
    englishName: "Shahi Mishti Doi & Rajbhog",
    category: "dessert",
    price: 250,
    rating: 5.0,
    spiceLevel: 0,
    isPopular: true,
    description: "মাটির হাড়িতে তৈরি ঐতিহ্যবাহী বগুড়ার ঘনীভূত দই ও জাফরানি রাজভোগ রসভরা।",
    iconSvg: "🏺",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m7",
    name: "নবাবী জাফরানি পেস্তা লাচ্ছি",
    englishName: "Zaffrani Pista Lassi",
    category: "drinks",
    price: 180,
    rating: 4.9,
    spiceLevel: 0,
    isPopular: false,
    description: "ইরানি জাফরান, পেস্তা বাদাম ও ঠান্ডা ঘোল দিয়ে বানানো ঐতিহ্যবাহী মিষ্টি শরবত।",
    iconSvg: "🥤",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m8",
    name: "স্পেশাল রাজকীয় বোরহানি",
    englishName: "Special Royal Borhani",
    category: "drinks",
    price: 100,
    rating: 4.9,
    spiceLevel: 2,
    isPopular: true,
    description: "টক দই, পুদিনা পাতা, বিট লবণ ও পাচক মসলায় তৈরি বিরিয়ানির সেরা সঙ্গী।",
    iconSvg: "🥛",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
  },
];

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.englishName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 relative bg-[#090a0f] border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
            আমাদের বিশেষ খাবারের তালিকা
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            শাহাজাদী ও রাজকীয় <span className="text-gold-gradient">খাবারের মেনু</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            প্রতিটি পদ তৈরি হয় সম্পূর্ণ খাঁটি দেশি উপাদানে এবং শাহী রেসিপির জাদুতে। আপনার পছন্দের পদটি সিলেক্ট করে কার্টে যোগ করুন।
          </p>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div className="space-y-6 mb-12">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="খাবারের নাম লিখে খুঁজুন (যেমন: কাচ্চি, ইলিশ)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full glass-panel border border-amber-400/30 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
            />
            <svg
              className="w-5 h-5 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "সব খাবার" },
              { id: "biryani", label: "শাহী বিরিয়ানি" },
              { id: "fish", label: "ইলিশ ও সামুদ্রিক মাছ" },
              { id: "meat", label: "মাংসের পদ" },
              { id: "dessert", label: "মিষ্টি ও পিঠা" },
              { id: "drinks", label: "শাহী পানীয়" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "btn-gold shadow-lg"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-[#d4af37]/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between relative group border border-white/5 hover:border-[#d4af37]/40"
            >
              {/* Popular Badge */}
              {item.isPopular && (
                <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#881337] to-[#d4af37] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                  সেরা পছন্দ 🔥
                </div>
              )}

              <div>
                {/* Visual Image / Icon Illustration Box */}
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-[#1a1c26] to-[#0d0e14] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-all duration-300">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-6xl drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]">
                      {item.iconSvg}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 pointer-events-none" />
                  
                  {/* Rating Badge */}
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-amber-300 text-xs font-bold flex items-center gap-1 border border-white/10 z-10">
                    <span>★</span> {item.rating}
                  </div>

                  {/* Spice Level Indicator */}
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] text-red-400 font-bold border border-white/10 z-10">
                    {"🌶️".repeat(item.spiceLevel) || "মিষ্টি"}
                  </div>
                </div>

                {/* Card Information */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-amber-200/70 font-medium">{item.englishName}</p>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Cart Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">মূল্য</span>
                  <span className="text-xl font-extrabold text-gold-gradient">
                    ৳{item.price}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className="px-4 py-2 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-black text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>অর্ডার করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">দুঃখিত, আপনার অনুসন্ধানের সাথে কোনো খাবার মেলেনি।</p>
          </div>
        )}

      </div>
    </section>
  );
}
