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
        ? "معلومات الخصوصية | ميجا ستريمز"
        : "Privacy information | Mega Streams",
    alternates: {
      canonical: `${siteUrl}/${locale}/privacy`,
      languages: { en: `${siteUrl}/en/privacy`, ar: `${siteUrl}/ar/privacy` },
    },
    robots: { index: false, follow: true },
  };
}
export default async function Privacy({
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
          {ar ? "معلومات الخصوصية" : "Privacy information"}
        </h1>
        <div className="space-y-6 leading-relaxed text-gray-300">
          <p>
            {ar
              ? "روابط التواصل والاشتراك تنقلك إلى واتساب. عند فتح محادثة، تخضع بياناتك أيضًا لسياسة خصوصية واتساب."
              : "Contact and subscription links take you to WhatsApp. When you open a conversation, your data is also subject to the WhatsApp privacy policy."}
          </p>
          <p>
            {ar
              ? "لا ترسل كلمات مرور أو أرقام بطاقات أو مستندات هوية في طلب معلومات. يمكنك سؤال الدعم عن كيفية التعامل مع بيانات المحادثات والطلبات."
              : "Do not send passwords, card numbers or identity documents in an information request. You can ask support how conversation and order data is handled."}
          </p>
          <p>
            {ar
              ? "هذه معلومات عن مسار التواصل وليست سياسة خصوصية مكتملة. بيانات الجهة المسؤولة وفترات الاحتفاظ وحقوق البيانات وتفاصيل خدمات الاستضافة لم تُنشر بعد."
              : "This describes the contact journey and is not a complete privacy policy. Controller details, retention periods, data rights and hosting-service details have not yet been published."}
          </p>
          <a
            className="underline"
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ar ? "سياسة خصوصية واتساب" : "WhatsApp privacy policy"}
          </a>
          <div>
            <NeonButton
              href={whatsappUrl(
                ar
                  ? "أريد الاستفسار عن الخصوصية والتعامل مع بياناتي."
                  : "I would like information about privacy and handling of my data.",
              )}
              external
            >
              {ar ? "استفسر عن الخصوصية" : "Ask about privacy"}
            </NeonButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
