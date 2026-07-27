import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BanglaDorber | Premium International Trading & Fine Dining Group Bangladesh",
  description: "BanglaDorber is Bangladesh's premier luxury corporate group offering global commodity import-export, industrial materials, structural steel, customs logistics, fine dining, and express online food ordering in Dhaka.",
  keywords: ["BanglaDorber", "Trading Company Bangladesh", "Import Export Bangladesh", "Fine Dining Dhaka", "Kacchi Biryani Delivery", "BSRM Steel Import", "Online Food Ordering Dhaka"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
