import { Inter } from "next/font/google";
import React from "react";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waterworth Team",
  description: "WW GanG Global Takeover",
};

const GA_TRACKING_ID = "G-NR96J6EX3V"; // Replace with your Measurement ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main
          style={{
            paddingTop: "80px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {children}
        </main>{" "}
        {/* Added inline styles for padding */}
      </body>
    </html>
  );
}
