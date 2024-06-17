import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit'
});

const screebie = localFont({
  src: 'fonts/screebie.ttf',
  variable: '--font-screebie'
});

export const metadata: Metadata = {
  title: "Cows Gone Mad",
  description: "Landing Page Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${screebie.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
