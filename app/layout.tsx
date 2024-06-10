import type { Metadata } from "next";
import {cn} from "@/lib/utils";
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import React from "react";

const TELUGU = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption"
});

export const metadata: Metadata = {
  title: "Ugo DA SILVA - Développeur Magento",
  description: "Découvrez le portfolio de John Doe, développeur Magento certifié. Spécialiste en développement de boutiques en ligne performantes et personnalisées avec Magento. Explorez mes projets et compétences en e-commerce, intégration de modules et optimisation de performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
          GeistSans.variable,
          GeistMono.variable,
          TELUGU.variable,
          "font-sans h-full bg-background text-foreground"
      )}>
        {children}
      </body>
    </html>
  );
}
