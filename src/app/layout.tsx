import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const body = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  axes: ["wdth"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "FadiDev — Small, careful apps for iOS",
    template: "%s | FadiDev",
  },
  description:
    "FadiDev is a one-person app workshop making small, careful iOS apps. No accounts, no ads, no tracking — buy once, own it.",
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
    <html
      lang="en"
      className={`${body.variable} ${mono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* restore a pinned theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        {/* the bench: everything hangs on two rails */}
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col border-x border-border">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
