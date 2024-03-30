import Header from "@/components/UI/header";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
      <head>
        <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" />
        <Script
          src="https://mediafiles.botpress.cloud/d5468644-29e9-4017-8d8a-e653c454d2f5/webchat/config.js"
          defer
        />
      </head>
      <body className={nunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
