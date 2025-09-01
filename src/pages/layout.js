import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head key="root">
        <title>Stock Ticker</title>
        <meta name="keywords" content="stock, stock ticks, trading, fintech" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
