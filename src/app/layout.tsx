import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TikTokPixel from "@/app/components/TikTokPixel";
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
  title: "Manual Para Noivos",
  description: "Seu casamento sendo descomplicado!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TikTokPixel />
        {children}
      </body>
    </html>
  );
}
