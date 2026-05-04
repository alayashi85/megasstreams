import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeonButton from '@/components/NeonButton';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import { Tv, Film, Monitor, Shield, Zap, Infinity, Users, Activity, CheckCircle } from 'lucide-react';

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('Index');

  const features = [
    { icon: Tv, title: t('features.channels') },
    { icon: Film, title: t('features.vod') },
    { icon: Monitor, title: t('features.quality') },
    { icon: Shield, title: t('features.antifreeze') },
    { icon: Zap, title: t('features.instant') },
    { icon: Infinity, title: t('features.support') },
  ];

  const pricingPlans = [
    { duration: t('pricing.1month'), price: t('pricing.1monthPrice'), popular: false },
    { duration: t('pricing.3months'), price: t('pricing.3monthsPrice'), popular: false },
    { duration: t('pricing.6months'), price: t('pricing.6monthsPrice'), popular: true },
    { duration: t('pricing.12months'), price: t('pricing.12monthsPrice'), popular: false },
  ];

  const commonFeatures = [
    "22,000+ Live Channels",
    "120,000+ VODs",
    "4K / 8K / FHD Quality",
    "All Devices Supported",
    "Anti-Freeze System",
    "EPG Guide Included"
  ];

  const whatsappLink = "https://wa.me/9647800302092"; // Placeholder

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mega Streams IPTV Subscription",
    "description": t('description'),
    "brand": {
      "@type": "Brand",
      "name": "Mega Streams"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "50.99",
      "priceCurrency": "USD",
      "offerCount": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              {t('title').split('-')[0]}
              <span className="block bg-gradient-to-r from-neon-purple to-neon-red bg-clip-text text-transparent">
                {t('title').split('-')[1]}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <NeonButton variant="purple">
                  {t('getTrial')}
                </NeonButton>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <NeonButton variant="red">
                  {t('buyNow')}
                </NeonButton>
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <Users className="text-neon-purple mb-2" size={32} />
                <span className="text-2xl font-bold">{t('stats.users')}</span>
              </div>
              <div className="flex flex-col items-center border-x border-white/10 px-8">
                <Activity className="text-neon-red mb-2" size={32} />
                <span className="text-2xl font-bold">{t('stats.uptime')}</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="text-neon-purple mb-2" size={32} />
                <span className="text-2xl font-bold">{t('stats.channels')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-gray-400">Everything you need for the perfect streaming experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('pricing.title')}</h2>
              <p className="text-gray-400">Simple and transparent pricing for everyone.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  duration={plan.duration}
                  price={plan.price}
                  currency={t('pricing.currency')}
                  isPopular={plan.popular}
                  features={commonFeatures}
                  buttonText={t('buyNow')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Device Support Section */}
        <section className="py-24 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">{t('devices.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 opacity-70">
              <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <p className="font-bold">{t('devices.android')}</p>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <p className="font-bold">{t('devices.firestick')}</p>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <p className="font-bold">{t('devices.smarttv')}</p>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <p className="font-bold">{t('devices.mobile')}</p>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <p className="font-bold">{t('devices.pc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-red/20 -z-10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of happy customers and start streaming your favorite content now.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <NeonButton variant="purple" className="text-xl px-12 py-4">
                Contact Us on WhatsApp
              </NeonButton>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
