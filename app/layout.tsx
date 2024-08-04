import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const inter = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Modern E-learning App",
  description: "E-learning App by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
