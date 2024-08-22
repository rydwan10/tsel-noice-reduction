import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/app-config";


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  generator: "Next.js",
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className='min-h-screen bg-background font-sans antialiased'
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex h-full flex-1 justify-center"
            style={{
              background: '#101315'
            }}
          >
            <div className="w-full max-w-[unset] md:max-w-md md:shadow-xl">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
