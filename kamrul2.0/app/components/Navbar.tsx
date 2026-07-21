"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export default function Navbar({ cartCount, onOpenCart, onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3 shadow-2xl shadow-black/80" : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#fef08a] to-[#881337] p-[2px] shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090a0f] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16.5L6 19.5L7.5 13.5L3 9L9 8L12 2Z" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-2xl font-black tracking-wide text-gold-gradient block leading-none">
              বাংলা দরবার
            </span>
            <span className="text-[10px] tracking-widest uppercase text-amber-300/80 font-medium block mt-1">
              Royal Bengali Dining
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-amber-100 hover:text-[#d4af37] transition-colors">
            প্রচ্ছদ
          </a>
          <a href="#menu" className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors">
            খাবারের মেনু
          </a>
          <a href="#story" className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors">
            আমাদের গল্প
          </a>
          <a href="#reservation" className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors">
            টেবিল বুকিং
          </a>
          <a href="#reviews" className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors">
            গ্রাহক মতামত
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors">
            যোগাযোগ
          </a>
        </nav>

        {/* Action Buttons: Cart & Book Table */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-amber-200 hover:bg-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all cursor-pointer"
            aria-label="View Cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#881337] border border-[#d4af37] text-white text-xs font-bold flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Book Table Button */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-gold cursor-pointer"
          >
            টেবিল বুকিং
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-[#d4af37]/20 px-6 py-6 space-y-4 mt-3 animate-fadeIn">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#d4af37]"
          >
            প্রচ্ছদ (Home)
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#d4af37]"
          >
            খাবারের মেনু (Menu)
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#d4af37]"
          >
            আমাদের গল্প (Story)
          </a>
          <a
            href="#reservation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#d4af37]"
          >
            টেবিল বুকিং (Reservation)
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#d4af37]"
          >
            গ্রাহক মতামত (Reviews)
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#d4af37]"
          >
            যোগাযোগ (Contact)
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-xl btn-gold font-bold text-center text-sm uppercase tracking-wider"
            >
              টেবিল বুক করুন
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
