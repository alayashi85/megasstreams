import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  const title = isAr 
    ? "ميجا ستريمز - أفضل خدمة IPTV مع أكثر من 22,000 قناة" 
    : "Mega Streams - Best IPTV Service | 22,000+ Live Channels";
  const description = isAr
    ? "استمتع بأفضل تجربة IPTV مع ميجا ستريمز. أكثر من 22,000 قناة مباشرة و 120,000 فيديو حسب الطلب بجودة 4K. تفعيل فوري ودعم 24/7."
    : "Experience the ultimate IPTV service with Mega Streams. Over 22,000 live channels and 120,000+ VODs in 4K quality. Instant activation and 24/7 support.";

  return {
    title,
    description,
    metadataBase: new URL('https://megastreamsapp.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-US': '/en',
        'ar-SA': '/ar',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://megastreamsapp.com/${locale}`,
      siteName: 'Mega Streams IPTV',
      locale: isAr ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
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
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClass = locale === 'ar' ? cairo.className : geistSans.className;

  return (
    <html lang={locale} dir={direction} className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}>
      <body className={`${fontClass} min-h-full flex flex-col bg-[#0a0a0a] text-white`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
