import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "@/components/layout";

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

const jester = localFont({
  src: 'fonts/Jester.ttf',
  variable: '--font-jester'
});

export const metadata: Metadata = {
  title: "Cows Gone Mad: Earn, Buy & Trade Moo Token | Solana NFT Game Marketplace",
  description: "Discover Cows Gone Mad, the Play-to-Earn NFT game built on Solana. Buy and trade Moo tokens for in-game rewards, exclusive NFTs, and real money opportunities. Join a trusted Solana marketplace for secure crypto transactions,  gaming assets, and passive income with blockchain technology.",
  keywords: ['buy Moo token', 'earn money Solana game', 'play-to-earn NFT', 'Solana NFT marketplace', 'crypto gaming investment', 'buy Solana gaming token', 'make money with NFTs', 'secure crypto wallet Solana', 'passive income blockchain', 'trade gaming tokens for money', 'real money play-to-earn games', 'best Solana token to buy', 'NFT game reward system']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${screebie.variable} ${outfit.variable} ${jester.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
