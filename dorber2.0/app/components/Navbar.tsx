"use client";

import React, { useState } from "react";
import {
  GlobeIcon,
  UtensilsIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  PhoneIcon,
  MailIcon,
  MenuIcon,
  XIcon,
  SparklesIcon,
  LayoutDashboardIcon,
  ClockIcon,
  ChevronRightIcon,
} from "./Icons";

interface NavbarProps {
  currentDivision: "trading" | "dining";
  onSwitchDivision: (division: "trading" | "dining") => void;
  cartCount: number;
  favCount: number;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  onOpenRFQ: () => void;
  onOpenReservation: () => void;
  onOpenTrackOrder: () => void;
  onOpenAdmin: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({
  currentDivision,
  onSwitchDivision,
  cartCount,
  favCount,
  onOpenCart,
  onOpenAccount,
  onOpenRFQ,
  onOpenReservation,
  onOpenTrackOrder,
  onOpenAdmin,
  activeSection,
  onNavigate,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Banner Bar */}
      <div className="bg-[#0b0b0e] border-b border-white/10 text-xs py-2 px-4 md:px-8 text-zinc-400 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-red-400 transition-colors">
            <PhoneIcon size={14} className="text-red-500" />
            <span>+880 9612-DORBER (367237)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 hover:text-red-400 transition-colors">
            <MailIcon size={14} className="text-red-500" />
            <span>contact@bangladorber.com</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <ClockIcon size={14} className="text-yellow-500" />
            <span>Dhaka HQ: 24/7 Global Trading Desk & Dining</span>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* Division Switcher */}
          <div className="bg-zinc-900/90 p-0.5 rounded-full border border-white/10 flex items-center text-xs">
            <button
              onClick={() => onSwitchDivision("trading")}
              className={`px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                currentDivision === "trading"
                  ? "bg-gradient-red text-white shadow-md shadow-red-900/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <GlobeIcon size={13} />
              <span>Trading Enterprise</span>
            </button>
            <button
              onClick={() => onSwitchDivision("dining")}
              className={`px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                currentDivision === "dining"
                  ? "bg-gradient-red text-white shadow-md shadow-red-900/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <UtensilsIcon size={13} />
              <span>Fine Dining</span>
            </button>
          </div>

          <button
            onClick={onOpenAdmin}
            className="hidden lg:flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-md transition-all"
          >
            <LayoutDashboardIcon size={13} />
            <span>Admin Portal</span>
          </button>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="glass-panel border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick("hero")}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-800 to-black border border-red-500/50 flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-105 transition-transform">
            <span className="text-xl font-black tracking-tighter text-white">BD</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                BANGLA<span className="text-red-500">DORBER</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-red-900/40 text-red-400 border border-red-700/50 px-1.5 py-0.5 rounded">
                BD
              </span>
            </div>
            <p className="text-[10px] tracking-wider uppercase text-zinc-400 font-medium">
              {currentDivision === "trading" ? "Global Trading & Commodities" : "Fine Dining & Gourmet Ordering"}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <button
            onClick={() => handleNavClick("hero")}
            className={`hover:text-red-400 transition-colors ${activeSection === "hero" ? "text-red-500 font-semibold" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className={`hover:text-red-400 transition-colors ${activeSection === "about" ? "text-red-500 font-semibold" : ""}`}
          >
            About Us
          </button>

          {currentDivision === "trading" ? (
            <>
              <button
                onClick={() => handleNavClick("trading-products")}
                className={`hover:text-red-400 transition-colors ${activeSection === "trading-products" ? "text-red-500 font-semibold" : ""}`}
              >
                Products
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className={`hover:text-red-400 transition-colors ${activeSection === "services" ? "text-red-500 font-semibold" : ""}`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("import-export")}
                className={`hover:text-red-400 transition-colors ${activeSection === "import-export" ? "text-red-500 font-semibold" : ""}`}
              >
                Import & Export
              </button>
              <button
                onClick={() => handleNavClick("industries")}
                className={`hover:text-red-400 transition-colors ${activeSection === "industries" ? "text-red-500 font-semibold" : ""}`}
              >
                Industries
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleNavClick("restaurant-menu")}
                className={`hover:text-red-400 transition-colors ${activeSection === "restaurant-menu" ? "text-red-500 font-semibold" : ""}`}
              >
                Menu
              </button>
              <button
                onClick={() => handleNavClick("special-offers")}
                className={`hover:text-red-400 transition-colors ${activeSection === "special-offers" ? "text-red-500 font-semibold" : ""}`}
              >
                Offers
              </button>
              <button
                onClick={() => handleNavClick("ai-recommender")}
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                <SparklesIcon size={14} />
                <span>AI Recommender</span>
              </button>
              <button
                onClick={() => handleNavClick("chefs")}
                className={`hover:text-red-400 transition-colors ${activeSection === "chefs" ? "text-red-500 font-semibold" : ""}`}
              >
                Chefs
              </button>
            </>
          )}

          <button
            onClick={() => handleNavClick("gallery")}
            className={`hover:text-red-400 transition-colors ${activeSection === "gallery" ? "text-red-500 font-semibold" : ""}`}
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavClick("blog")}
            className={`hover:text-red-400 transition-colors ${activeSection === "blog" ? "text-red-500 font-semibold" : ""}`}
          >
            Blog & News
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className={`hover:text-red-400 transition-colors ${activeSection === "contact" ? "text-red-500 font-semibold" : ""}`}
          >
            Contact
          </button>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Order Tracking Button */}
          <button
            onClick={onOpenTrackOrder}
            className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 border border-white/10 px-3 py-2 rounded-xl transition-all"
            title="Track Your Food Order or Import Shipment"
          >
            <ClockIcon size={15} className="text-red-500" />
            <span className="font-medium">Track Order</span>
          </button>

          {/* Cart Icon (Dining Mode / Enterprise) */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-white rounded-xl transition-all hover:scale-105"
            title="View Shopping Cart"
          >
            <ShoppingBagIcon size={18} className="text-red-400" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-black shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account Icon */}
          <button
            onClick={onOpenAccount}
            className="hidden md:flex p-2.5 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-white rounded-xl transition-all hover:scale-105"
            title="Customer Account Portal"
          >
            <UserIcon size={18} className="text-zinc-300" />
          </button>

          {/* Division Specific Action CTA */}
          {currentDivision === "trading" ? (
            <button
              onClick={onOpenRFQ}
              className="bg-gradient-red bg-gradient-red-hover text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-red-900/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ChevronRightIcon size={14} />
            </button>
          ) : (
            <button
              onClick={onOpenReservation}
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-amber-900/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <UtensilsIcon size={14} />
              <span>Book Table</span>
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">
              Navigation Menu
            </span>
            <button
              onClick={onOpenAdmin}
              className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-md"
            >
              Admin Dashboard
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 font-medium text-sm text-zinc-200">
            <button
              onClick={() => handleNavClick("hero")}
              className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
            >
              About Us
            </button>

            {currentDivision === "trading" ? (
              <>
                <button
                  onClick={() => handleNavClick("trading-products")}
                  className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
                >
                  Products
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick("import-export")}
                  className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
                >
                  Import & Export
                </button>
                <button
                  onClick={() => handleNavClick("industries")}
                  className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
                >
                  Industries
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavClick("restaurant-menu")}
                  className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
                >
                  Menu
                </button>
                <button
                  onClick={() => handleNavClick("special-offers")}
                  className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
                >
                  Special Offers
                </button>
                <button
                  onClick={() => handleNavClick("ai-recommender")}
                  className="text-left px-3 py-2 rounded-lg bg-amber-950/30 text-amber-400"
                >
                  AI Recommender
                </button>
                <button
                  onClick={() => handleNavClick("chefs")}
                  className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
                >
                  Chefs
                </button>
              </>
            )}

            <button
              onClick={() => handleNavClick("gallery")}
              className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick("blog")}
              className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
            >
              Blog & News
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onOpenAccount}
              className="text-left px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-red-950/40 hover:text-red-400 transition-colors"
            >
              Customer Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
