import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ChattingProvider } from "./_context/useChatting";
import { SettingsProvider } from "./_context/useSettings";
import "./globals.css";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { UserProvider } from "./_context/useCurrUser";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${cabin.className} bg-background flex h-screen items-center justify-center bg-[url(../public/background.jpg)] bg-cover text-gray-100 antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <UserProvider>
            <SettingsProvider>
              <ChattingProvider>{children}</ChattingProvider>
            </SettingsProvider>
          </UserProvider>
        </NextIntlClientProvider>
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
