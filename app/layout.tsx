import ResponsiveSidebar from "@/components/Menu/responsive-sidebar";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
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
       <ResponsiveSidebar />
        <div className="flex w-screen h-screen ">
          <Sidebar />
          <div className="z-1 pt-20 md:pt-5 lg:pt-5 p-5 overflow-y-auto w-screen md:w-auto lg:w-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
