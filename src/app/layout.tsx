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
  title: "Transform Your Health | Medical Medium Nutrition Expert",
  description:
    "Discover the power of natural healing through Medical Medium principles. Expert guidance on liver cleansing, toxic load reduction, and superfood nutrition for optimal health.",
  keywords:
    "Medical Medium, nutrition expert, liver cleanse, detox, superfoods, natural healing, Anthony Williams",
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
