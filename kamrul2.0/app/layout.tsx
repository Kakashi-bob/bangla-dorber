import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "বাংলা দরবার | Royal Bengali Cuisine & Heritage Dining",
  description: "বাংলা দরবার - ঐতিহ্যের রাজকীয় আমেজে সেরা বাঙালি খাবারের স্বাদ। শাহী বিরিয়ানি, ইলিশ পাতুড়ি, গোল্ডা চিংড়ি মালাইকারি সহ খাঁটি স্বাদ।",
  keywords: ["Bangla Dorbar", "বাংলা দরবার", "Bengali Restaurant", "Kacchi Biryani", "Dhaka Fine Dining"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className="min-h-screen bg-[#090a0f] text-gray-100 antialiased selection:bg-[#d4af37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
