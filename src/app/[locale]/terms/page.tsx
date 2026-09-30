import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonButton from "@/components/NeonButton";
import { siteUrl, whatsappUrl } from "@/lib/site";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "ar"
        ? "معلومات الاشتراك | ميجا ستريمز"
        : "Subscription information | Mega Streams",
    alternates: {
      canonical: `${siteUrl}/${locale}/terms`,
      languages: { en: `${siteUrl}/en/terms`, ar: `${siteUrl}/ar/terms` },
    },
    robots: { index: false, follow: true },
  };
}
export default async function Terms({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = locale === "ar";
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-3xl px-5 pt-32 pb-16">
        <h1 className="mb-8 text-3xl font-bold">
          {ar ? "معلومات قبل الاشتراك" : "Before you subscribe"}
        </h1>
        <div className="space-y-6 leading-relaxed text-gray-300">
          <p>
            {ar
              ? "تعرض الباقات المدة والسعر الإجمالي. زر الباقة يفتح محادثة واتساب لطلب المعلومات ولا يخصم أي مبلغ."
              : "Each plan shows its duration and total price. A plan button opens a WhatsApp conversation to request information and does not charge you."}
          </p>
          <p>
            {ar
              ? "قبل الدفع، اطلب تأكيدًا مكتوبًا لطرق الدفع، ووقت التفعيل، وعدد الاتصالات المتزامنة، والتجديد، والإلغاء والاسترجاع. لم تُنشر بعد سياسة تفصيلية لهذه الشروط على الموقع."
              : "Before paying, request written confirmation of payment methods, activation time, simultaneous connections, renewal, cancellation and refunds. Detailed policies for these terms have not yet been published on this website."}
          </p>
          <p>
            {ar
              ? "تحقق من توافق الجهاز والمحتوى المتاح في بلدك باستخدام التجربة. جودة البث تعتمد على الجهاز والمصدر والاتصال."
              : "Use a trial to check device compatibility and the content available in your country. Streaming quality depends on your device, the source and your connection."}
          </p>
          <NeonButton
            href={whatsappUrl(
              ar
                ? "أريد تأكيد شروط الاشتراك والدفع والاسترجاع قبل الشراء."
                : "Please confirm subscription, payment and refund terms before I purchase.",
            )}
            external
          >
            {ar ? "اسأل الدعم قبل الدفع" : "Ask support before paying"}
          </NeonButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
