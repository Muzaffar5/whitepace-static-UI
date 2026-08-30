import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar"; // Import Navbar
import Footer from "./components/layout/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitepace",
  description: "Get More Done with Whitepace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}