import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          gutter={8}
          toastOptions={{
            success: { duration: 3000 },
            style: {
              backgroundColor: "var(--color-indigo-100)",
              color: "var(--color-slate-900)",
              padding: "0.6rem",
            },
          }}
        />
      </body>
    </html>
  );
}
