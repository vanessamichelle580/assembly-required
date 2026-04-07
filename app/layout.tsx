import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Raleway } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Assembly Required | Building Your Best Life",
  description: "Join Vanessa Michelle on a journey of intentional living and personal growth. Insights on mindset, money, health, and curating the life you love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${lora.variable} ${raleway.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
