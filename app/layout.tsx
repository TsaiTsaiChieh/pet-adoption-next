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
  title: "浪窩 | 動物領養",
  description:
    "«浪窩»致力於成為台灣最便捷的動物領養平台。我們整合全國收容中心的寵物數據，提供清晰的分類與篩選功能，用戶可以依需求快速瀏覽狗、貓等多種類別的毛小孩。此外，我們還提供鏈結至政府的動物收容管理系統，讓領養不再困難。",
  verification: {
    google: "jk_t74cYy2JQjyBY-950HIiwJEx9lWx4glve7cThKp4",
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
