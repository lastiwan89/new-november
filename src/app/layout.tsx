import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Explore Japan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={livvic.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
