"use client";

import React, { useState } from "react";

interface ReservationSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export default function ReservationSection({ isOpenModal, onCloseModal }: ReservationSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: new Date().toISOString().split("T")[0],
    timeSlot: "8:00 PM (Dinner)",
    seating: "royal-booth",
    notes: "",
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = "BD-RES-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(generatedId);
    setBookingSuccess(true);
  };

  const formContent = (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#d4af37]/30 shadow-2xl relative">
      
      {bookingSuccess ? (
        <div className="text-center space-y-5 py-8 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-400 flex items-center justify-center text-4xl mx-auto shadow-xl">
            👑
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            আপনার রাজকীয় টেবিল বুকিং নিশ্চিত হয়েছে!
          </h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            ধন্যবাদ <strong className="text-amber-300">{formData.name}</strong>। আপনার জন্য <span className="text-amber-300 font-bold">{formData.guests} জনের</span> আসন সংরক্ষিত রাখা হয়েছে।
          </p>

          <div className="max-w-sm mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">বুকিং রেফারেন্স আইডি:</span>
              <span className="font-mono font-bold text-[#d4af37]">{bookingId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">তারিখ ও সময়:</span>
              <span className="text-white font-semibold">{formData.date} | {formData.timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">আসনের ধরণ:</span>
              <span className="text-amber-200 capitalize">
                {formData.seating === "royal-booth" ? "রাজকীয় ভিআইপি বুথ" : "ফ্যামিলি লাউঞ্জ"}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setBookingSuccess(false);
              if (onCloseModal) onCloseModal();
            }}
            className="px-8 py-3 rounded-full btn-gold text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            ধন্যবাদ
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              অনলাইন টেবিল রেজাবেশন
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              আপনার রাজকীয় আসন <span className="text-gold-gradient">বুক করুন</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              অগ্রিম টেবিল বুকিং করে কোনো ঝুটঝামেলা ছাড়াই পরিবার ও প্রিয়জন নিয়ে রাজকীয় খাবারের স্বাদ নিন।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Guest Name */}
            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1.5">আপনার পূর্ণ নাম *</label>
              <input
                type="text"
                required
                placeholder="যেমন: কামরুল হাসান"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1.5">মোবাইল নম্বর *</label>
              <input
                type="tel"
                required
                placeholder="01700-000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1.5">অতিথির সংখ্যা *</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-amber-100 text-sm focus:border-[#d4af37] focus:outline-none"
              >
                <option value="1" className="bg-black">১ জন (Single)</option>
                <option value="2" className="bg-black">২ জন (Couple Dining)</option>
                <option value="4" className="bg-black">৪ জন (Small Family)</option>
                <option value="6" className="bg-black">৬ জন (Family Table)</option>
                <option value="10" className="bg-black">১০+ জন (Grand Royal Party)</option>
              </select>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1.5">তারিখ *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-amber-100 text-sm focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1.5">সময়সূচী *</label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-amber-100 text-sm focus:border-[#d4af37] focus:outline-none"
              >
                <option value="1:30 PM (Lunch)" className="bg-black">দুপুর ১:৩০ (দুপুরের খাবার)</option>
                <option value="3:00 PM (Lunch)" className="bg-black">দুপুর ৩:০০ (দুপুরের খাবার)</option>
                <option value="8:00 PM (Dinner)" className="bg-black">রাত ৮:০০ (রাতের খাবার)</option>
                <option value="9:30 PM (Dinner)" className="bg-black">রাত ৯:৩০ (রাতের খাবার)</option>
              </select>
            </div>

            {/* Seating Type */}
            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1.5">আসনের পছন্দ *</label>
              <select
                value={formData.seating}
                onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-amber-100 text-sm focus:border-[#d4af37] focus:outline-none"
              >
                <option value="royal-booth" className="bg-black">রাজকীয় ভেলভেট ভিআইপি বুথ</option>
                <option value="family-lounge" className="bg-black">ফ্যামিলি ওপেন লাউঞ্জ</option>
                <option value="rooftop" className="bg-black">ওপেন এয়ার গার্ডেন ডাইনিং</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-amber-200 mb-1.5">বিশেষ কোনো অনুরোধ (ঐচ্ছিক)</label>
            <input
              type="text"
              placeholder="যেমন: জন্মদিনের ডেকোরেশন বা বাচ্চার বিশেষ চেয়ার দরকার..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl btn-gold text-sm font-black uppercase tracking-wider cursor-pointer shadow-xl"
          >
            বুকিং কনফার্ম করুন 👑
          </button>
        </form>
      )}
    </div>
  );

  // Render as standalone Modal if trigger from Navbar, or section element if scrolled
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
        <div className="max-w-2xl w-full relative">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            ✕
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-24 relative bg-gradient-to-b from-[#090a0f] via-[#0d0e15] to-[#090a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
}
