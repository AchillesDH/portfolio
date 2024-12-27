import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dylan hearn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FAF9F6] px-4">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto max-w-screen-sm p-8 font-[family-name:var(--font-geist-sans)] border my-4 shadow-sm bg-white`}
      >
        <Navbar />
        <main>{children}</main>
        <div id="copyright" className="mt-8">
          <p className="text-xs text-zinc-200">&copy; Copyright 2024, Dylan Hearn.</p>
        </div>
      </body>
    </html>
  );
}
