import "@styles/globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import StoreProvider from "./StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "浪窩",
  description:
    "流浪動物領養平台彙整了詳細的寵物資訊，方便您快速查找與篩選，並提供連結至全國動物收容管理系統，幫助您找到理想的毛小孩。",
  verification: {
    other: {
      "google-site-verification": "v6v5cQgu6HRRUeS6hooF0gk5DtXrkJfnurpBqCIMCxM",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <StoreProvider>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
