import type { Metadata } from "next";
import "./globals.css";
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Varun Bhutoria",
  description: "Varun Bhutoria's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} font-mono antialiased h-screen w-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
