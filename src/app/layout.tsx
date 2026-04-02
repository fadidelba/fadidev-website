import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FadiDev — Crafting Beautiful Apps for iOS & Android",
    template: "%s | FadiDev",
  },
  description:
    "FadiDev is an indie app studio crafting premium mobile experiences for iOS and Android.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FadiDev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
