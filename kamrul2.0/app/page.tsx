"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection, { MenuItem } from "./components/MenuSection";
import CartDrawer, { CartItem } from "./components/CartDrawer";
import ReservationSection from "./components/ReservationSection";
import StorySection from "./components/StorySection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Add Item to Cart
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Update Item Quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prevCart) =>
      prevCart
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove Item
  const handleRemoveItem = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((ci) => ci.item.id !== id));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  return (
    <main className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col justify-between selection:bg-[#d4af37] selection:text-black">
      {/* Sticky Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Hero Banner with Digital Graphics */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Menu Section with Filter & Search */}
      <MenuSection onAddToCart={handleAddToCart} />

      {/* Royal Story & History Section */}
      <StorySection />

      {/* Online Table Reservation Section */}
      <ReservationSection />

      {/* Customer Reviews & Rating Section */}
      <ReviewsSection />

      {/* Complete Footer Section */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Modal Triggered from Header */}
      {isReservationOpen && (
        <ReservationSection
          isOpenModal={true}
          onCloseModal={() => setIsReservationOpen(false)}
        />
      )}
    </main>
  );
}
