import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import './globals.css'
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "VarianPlus | lorem ipsum dolor sit amet consectetur",
  description: "lorem ipsum dolor sit amet consectetur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
