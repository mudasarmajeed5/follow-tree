import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import SessionWrapper from "./component/SessionWrapper";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ['400', '700'], // Add desired weights
  subsets: ['latin'],
});
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
  title: "Follow Tree",
  description: "Follow tree your all in one link for all online platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body
        className={`${geistSans.variable} ${poppins.className} ${geistMono.variable} antialiased text-white bg-gray-950`}
        >
        <Navbar/>
        {children}
        <Footer/>
      </body>
      </SessionWrapper>
    </html>
  );
}
