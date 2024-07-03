import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { basePath } from "@/next.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stream TV and Movies Live and Online | Hulu",
  description: "Watch TV shows and movies online. Stream TV episodes of Shōgun, Grey's Anatomy, This Is Us, Bob's Burgers, Brooklyn Nine-Nine, Empire, SNL, and popular movies on your favorite devices. Start your free trial now. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="shortcut icon" 
          href={`${basePath}/favicon.ico`} 
          type="image/x-icon" />
      </head>
      <body className={`${inter.className} relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
