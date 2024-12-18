import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import React from "react";
// import { Poppins } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const poppins = Poppins( options:{
//   subsets:['latin'],
//   weight:['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900' ],
//   variable:"--font-poppins"
// });
export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt - The only storages solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
