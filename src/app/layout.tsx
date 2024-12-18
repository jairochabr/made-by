import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "../styles/globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.variable, inter.variable, "antialiased")}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
