import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Samad | Portfolio",
  description: "A showcase of my work and skills in modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        <CustomCursor />
        <div className="fixed inset-0 -z-10 bg-[#020617]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,#1e3a8a,transparent)]" />
        {children}
      </body>
    </html>
  );
}
