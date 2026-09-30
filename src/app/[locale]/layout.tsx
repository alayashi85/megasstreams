import type { Metadata } from "next";
import { Geist, Cairo } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const t = await getTranslations({ locale, namespace: "Index" });
  const title = t("metadataTitle");
  const description = t("description");

  return {
    title,
    description,
    metadataBase: new URL("https://megastreamsapp.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://megastreamsapp.com/${locale}`,
      siteName: "Mega Streams IPTV",
      locale: isAr ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  const direction = locale === "ar" ? "rtl" : "ltr";
  const fontClass = locale === "ar" ? cairo.className : geistSans.className;

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${geistSans.variable} ${cairo.variable} h-full antialiased`}
    >
      <body
        className={`${fontClass} min-h-full flex flex-col bg-[#0a0a0a] text-white`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
