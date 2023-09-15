import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { cn } from "@/utils/helper";
import Navbar from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={cn(outfit.className, "overflow-x-hidden")}>
        <Navbar />
        <div className="px-6 md:px-0">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
