"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { TradingHero } from "./components/TradingHero";
import { RestaurantHero } from "./components/RestaurantHero";
import { AboutSection } from "./components/AboutSection";
import { TradingProducts } from "./components/TradingProducts";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { ServicesSection } from "./components/ServicesSection";
import { ImportExportSection } from "./components/ImportExportSection";
import { IndustriesServedSection } from "./components/IndustriesServedSection";
import { ChefSection } from "./components/ChefSection";
import { SpecialOffers } from "./components/SpecialOffers";
import { AIFoodRecommender } from "./components/AIFoodRecommender";
import { ReviewsSection } from "./components/ReviewsSection";
import { GallerySection } from "./components/GallerySection";
import { BlogSection } from "./components/BlogSection";
import { FAQSection } from "./components/FAQSection";
import { GoogleMapSection } from "./components/GoogleMapSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloating } from "./components/WhatsAppFloating";

// Modals
import { CartDrawer, CartItem } from "./components/CartDrawer";
import { OrderTrackingModal } from "./components/OrderTrackingModal";
import { ReservationModal } from "./components/ReservationModal";
import { RFQModal } from "./components/RFQModal";
import { CustomerAccountModal } from "./components/CustomerAccountModal";
import { AdminDashboardModal } from "./components/AdminDashboardModal";

import { MenuItem, MOCK_MENU_ITEMS } from "./data/siteData";
import { CheckCircleIcon } from "./components/Icons";

export default function Home() {
  const [currentDivision, setCurrentDivision] = useState<"trading" | "dining">("trading");
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Cart & Favorites State
  const [cart, setCart] = useState<CartItem[]>([
    { item: MOCK_MENU_ITEMS[0], quantity: 1 },
  ]);
  const [favorites, setFavorites] = useState<string[]>(["fm-1", "fm-2"]);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [rfqPrefilledProduct, setRfqPrefilledProduct] = useState("");
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [trackOrderId, setTrackOrderId] = useState("BD-849201");
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Toast Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((c) => c.item.id === item.id);
      if (existing) {
        return prevCart.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
    triggerToast(`Added "${item.name}" to cart!`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
    triggerToast("Item removed from cart");
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleFavorite = (itemId: string) => {
    setFavorites((prev) => {
      if (prev.includes(itemId)) {
        triggerToast("Removed from favorites");
        return prev.filter((id) => id !== itemId);
      } else {
        triggerToast("Saved to favorites!");
        return [...prev, itemId];
      }
    });
  };

  const handleOpenRFQ = (productName?: string) => {
    setRfqPrefilledProduct(productName || "");
    setIsRFQOpen(true);
  };

  const handleOpenTrackOrder = (orderId?: string) => {
    if (orderId) setTrackOrderId(orderId);
    setIsTrackOrderOpen(true);
  };

  const handleOrderPlaced = (generatedOrderId: string) => {
    setTrackOrderId(generatedOrderId);
    setIsTrackOrderOpen(true);
    triggerToast(`Order ${generatedOrderId} placed successfully!`);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-red-600 selection:text-white flex flex-col font-sans">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 glass-panel-glow border border-red-500/50 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-right duration-300">
          <CheckCircleIcon size={18} className="text-red-500" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Main Glass Navigation Header */}
      <Navbar
        currentDivision={currentDivision}
        onSwitchDivision={(div) => {
          setCurrentDivision(div);
          triggerToast(`Switched to ${div === "trading" ? "Global Trading" : "Fine Dining"} Division`);
        }}
        cartCount={cartCount}
        favCount={favorites.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenRFQ={() => handleOpenRFQ()}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenTrackOrder={() => handleOpenTrackOrder()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Dynamic Division Content */}
      <main className="flex-1">
        {/* Division Hero */}
        {currentDivision === "trading" ? (
          <TradingHero
            onOpenRFQ={() => handleOpenRFQ()}
            onNavigate={handleNavigate}
          />
        ) : (
          <RestaurantHero
            onOpenMenu={() => handleNavigate("restaurant-menu")}
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}

        {/* Company Introduction */}
        <AboutSection />

        {/* Division Specific Showcase */}
        {currentDivision === "trading" ? (
          <>
            <TradingProducts onOpenRFQ={handleOpenRFQ} />
            <ServicesSection onOpenRFQ={() => handleOpenRFQ()} />
            <ImportExportSection onOpenRFQ={() => handleOpenRFQ()} />
            <IndustriesServedSection onOpenRFQ={() => handleOpenRFQ()} />
          </>
        ) : (
          <>
            <RestaurantMenu
              onAddToCart={handleAddToCart}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
            <SpecialOffers onOpenMenu={() => handleNavigate("restaurant-menu")} />
            <AIFoodRecommender onAddToCart={handleAddToCart} />
            <ChefSection />
          </>
        )}

        {/* Shared Enterprise Sections */}
        <ReviewsSection />
        <GallerySection />
        <BlogSection />
        <FAQSection />
        <GoogleMapSection />
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer
        onSwitchDivision={(div) => setCurrentDivision(div)}
        onNavigate={handleNavigate}
      />

      {/* Floating Action Elements */}
      <WhatsAppFloating />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
      />

      <OrderTrackingModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
        initialOrderId={trackOrderId}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <RFQModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        prefilledProduct={rfqPrefilledProduct}
      />

      <CustomerAccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        favorites={favorites}
        onOpenTrackOrder={handleOpenTrackOrder}
      />

      <AdminDashboardModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
