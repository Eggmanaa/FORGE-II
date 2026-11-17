import type { Metadata } from "next";
import { Lato, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const label = Montserrat({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FORGE | Character & Virtue Formation at Bishop Diego",
  description:
    "FORGE is a Christ-centered character, virtue, and leadership formation curriculum for grades 9-12 at Bishop García Diego High School.",
  icons: { icon: "/images/forge-emblem.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${label.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
