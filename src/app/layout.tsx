import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/layoutComponents/navbar";
import Footer from "./_components/layoutComponents/footer";
import AosInit from "./_components/layoutComponents/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "porto",
  description: "Rama Naufal Alim Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-blue-200"}>
        <Navbar />
        <AosInit>{children}</AosInit>
        <Footer />
      </body>
    </html>
  );
}
