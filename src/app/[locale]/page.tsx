import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonButton from "@/components/NeonButton";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import { Tv, Film, Monitor, Shield, Zap, MessageCircle } from "lucide-react";
import { siteUrl, whatsappUrl } from "@/lib/site";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Index");
  const features = [Tv, Film, Monitor, Shield, Zap, MessageCircle];
  const featureKeys = [
    "channels",
    "vod",
    "quality",
    "antifreeze",
    "instant",
    "support",
  ];
  const plans = ["1month", "3months", "6months", "12months"].map((key) => ({
    duration: t(`pricing.${key}`),
    price: t(`pricing.${key}Price`),
    key,
  }));
  const steps = t.raw("steps") as { title: string; body: string }[];
  const faq = t.raw("faq") as { q: string; a: string }[];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mega Streams IPTV",
    description: t("description"),
    url: `${siteUrl}/${locale}`,
    provider: { "@type": "Organization", name: "Mega Streams", url: siteUrl },
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.duration,
      price:
        t("pricing.currency") === "IQD"
          ? plan.price.replaceAll(".", "")
          : plan.price,
      priceCurrency: t("pricing.currency"),
      url: `${siteUrl}/${locale}#pricing`,
    })),
  };
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
      <a href="#main-content" className="skip-link">
        {t("skip")}
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-5 text-sm font-semibold tracking-widest text-purple-300">
              MEGA STREAMS
            </p>
            <h1 className="mb-6 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-gray-300">
              {t("description")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <NeonButton href={whatsappUrl(t("trialMessage"))} external>
                {t("getTrial")}
              </NeonButton>
              <NeonButton href="#pricing" variant="red">
                {t("pricing.title")}
              </NeonButton>
            </div>
          </div>
        </section>
        <section id="features" className="bg-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">{t("featuresTitle")}</h2>
              <p className="text-gray-300">{t("featuresIntro")}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((Icon, index) => (
                <FeatureCard
                  key={featureKeys[index]}
                  icon={Icon}
                  title={t(`features.${featureKeys[index]}`)}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{t("pricing.title")}</h2>
              <p className="text-gray-300">{t("pricingIntro")}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.key}
                  duration={plan.duration}
                  price={plan.price}
                  currency={t("pricing.currency")}
                  isPopular={plan.key === "6months"}
                  popularText={t("pricing.popular")}
                  totalText={t("totalPrice")}
                  features={t.raw("planFeatures")}
                  buttonText={t("buyNow")}
                  href={whatsappUrl(
                    t("planMessage", {
                      plan: plan.duration,
                      price: plan.price,
                      currency: t("pricing.currency"),
                    }),
                  )}
                />
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-300">
              {t("pricingNote")}
            </p>
          </div>
        </section>
        <section className="bg-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold">
              {t("devices.title")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {["android", "firestick", "smarttv", "mobile", "pc"].map(
                (device) => (
                  <div
                    key={device}
                    className="rounded-2xl border border-white/10 p-5 text-center"
                  >
                    <p>{t(`devices.${device}`)}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold">
              {t("stepsTitle")}
            </h2>
            <ol className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-white/10 p-6"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neon-purple/20 text-purple-200">
                    {index + 1}
                  </span>
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-gray-300">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="faq" className="bg-white/5 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">
              {t("faqTitle")}
            </h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="rounded-xl border border-white/10 p-5"
                >
                  <summary className="cursor-pointer font-semibold">
                    {item.q}
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-300">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-5 text-3xl font-bold">{t("contactTitle")}</h2>
            <p className="mb-8 text-lg text-gray-300">{t("contactIntro")}</p>
            <NeonButton href={whatsappUrl(t("contactMessage"))} external>
              {t("contactButton")}
            </NeonButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
