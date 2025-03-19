import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chat Application",
    template: "%s | Chat Application",
  },
  description:
    "A nice chat app craeted by Ghaith you can communicate with your friends easily send messages images and a lot of interesting stuff! \n what are you waiting for just give it a try :)",
  authors: [{ name: "Ghaith Shabakji" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin.className} bg-background flex h-screen items-center justify-center bg-[url(../public/bg.jpg)] text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
