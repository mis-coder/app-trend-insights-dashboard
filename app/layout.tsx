import Header from "@/components/UI/header";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Menu } from "lucide-react";
import Sidebar from "@/components/UI/sidebar";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Trendz",
  description: "App Trend Insights Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        <div className="flex w-screen h-screen fixed">
        <Sidebar />
        <div className="p-6 overflow-y-auto w-screen md:w-auto lg:w-auto">
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
