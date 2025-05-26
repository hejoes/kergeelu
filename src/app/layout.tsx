import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Transform Your Health | Pure Wellness Holistic Nutrition",
  description:
    "Discover the power of natural healing through gentle, proven methods. Expert guidance on liver cleansing, whole food nutrition, and holistic wellness for optimal health and vitality.",
  keywords:
    "holistic nutrition, liver cleanse, detox, whole foods, natural healing, wellness coach, nutrition expert, health transformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-cream-50`}>
        {children}
      </body>
    </html>
  );
}
