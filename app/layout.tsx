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
  title: "Cows Gone Mad",
  description: "Project Landing Page",
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
