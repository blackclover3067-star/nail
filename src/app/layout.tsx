import type { Metadata } from "next";
import { inter, playfair } from "@/styles/fonts";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Nail Atelier | Luxury Nail Artistry",
  description: "Luxury nail artistry crafted with perfection. Experience modern elegance, editorial designs, and high-end beauty treatments.",
  openGraph: {
    title: "Nail Atelier | Luxury Nail Artistry",
    description: "Luxury nail artistry crafted with perfection. Experience modern elegance, editorial designs, and high-end beauty treatments.",
    type: "website",
    locale: "en_US",
    url: "https://nail-atelier.vercel.app",
    siteName: "Nail Atelier",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      style={{ scrollBehavior: "auto" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative overflow-x-hidden">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
