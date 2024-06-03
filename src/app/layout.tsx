import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. Mitra Jaya Arya Sanika",
  description: "Keamanan Terjamin dengan Sumber Daya Pengamanan Profesional",
  authors: [{ name: "PT. Mitra Jaya Arya Sanika" }],
  keywords: [
    "Keamanan",
    "Sumber Daya Pengamanan",
    "PT. Mitra Jaya Arya Sanika",
    "Jasa Pengamanan",
    "Jasa Pengemudi",
    "Supir",
    "Pengelola Parkir",
    "Pengemudi Profesional",
    "Keamanan Lingkungan",
    "Layanan Pengemudi",
    "Layanan Parkir",
    "Manajemen Keamanan",
    "Solusi Keamanan",
    "Pengamanan Acara",
    "Pengemudi Berpengalaman",
    "Pengelolaan Keamanan",
    "Keamanan dan Keselamatan",
    "Layanan Supir Pribadi",
    "Pengemudi Pribadi",
    "Sistem Keamanan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
