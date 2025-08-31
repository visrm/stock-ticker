import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="stock, stock ticks, trading, fintech" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
