import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Touheed Naveed — Full-Stack Developer",
  description:
    "Full-stack developer crafting pixel-perfect interfaces and performant backend systems. Available for freelance projects and full-time opportunities.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "typescript"],
  authors: [{ name: "Touheed Naveed" }],
  openGraph: {
    title: "Touheed Naveed — Full-Stack Developer",
    description:
      "Full-stack developer crafting pixel-perfect interfaces and performant backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${poppins.variable}`}>
      <body className="bg-[#0C0C0E] text-[#F2F2ED] font-sans">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
