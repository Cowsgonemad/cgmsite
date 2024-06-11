import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: '--font-archivo'
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
    <html lang="en" className={`${screebie.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
