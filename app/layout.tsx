import { Inter } from "next/font/google";

import type { Metadata } from "next";

import Providers from "@/components/providers/ReactQueryProvider";
import "./globals.css";
import "@/public/icons.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hasalanka",
  description: "Hasalanka Portfolio",
  icons: {
    icon: "/hasalanka1.svg",
    shortcut: "/hasalanka1.svg",
    apple: "/hasalanka1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
