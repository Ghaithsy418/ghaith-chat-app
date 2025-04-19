import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Cabin } from "next/font/google";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";
import { ChattingProvider } from "./_context/useChatting";
import { UserProvider } from "./_context/useCurrUser";
import { SettingsProvider } from "./_context/useSettings";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const cookieStore = await cookies();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        style={{
          backgroundImage: `url("./background${cookieStore.get("background")?.value || ""}.jpg")`,
        }}
        className={`${cabin.className} bg-background flex h-[90vh] items-center justify-center bg-cover bg-center text-gray-100 antialiased sm:h-screen`}
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
