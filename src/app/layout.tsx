import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./mahar.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahar by Memoraa' — Katalog Mahar & Ring Box Custom",
  description:
    "Katalog mahar pernikahan & ring box handmade by Memoraa'. Custom nama, tanggal, dan warna. Pengiriman seluruh Indonesia.",
  keywords: [
    "mahar",
    "mahar pernikahan",
    "ring box",
    "gunungan resin",
    "wayang kulit",
    "memoraa",
    "mahar custom",
  ],
  authors: [{ name: "Memoraa'" }],
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mahar by Memoraa' — Katalog Mahar & Ring Box Custom",
    description:
      "Katalog mahar pernikahan & ring box handmade by Memoraa'. Custom nama, tanggal, dan warna.",
    siteName: "Mahar by Memoraa'",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahar by Memoraa'",
    description: "Katalog mahar pernikahan & ring box handmade by Memoraa'.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased`}
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
