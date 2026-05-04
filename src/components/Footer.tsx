'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const Footer = () => {
  const t = useTranslations('Navigation');
  
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-red bg-clip-text text-transparent mb-4 inline-block">
              MEGA STREAMS
            </Link>
            <p className="text-gray-400 max-w-sm">
              The world's leading IPTV provider. Enjoy thousands of live channels and VODs in crystal clear 4K quality.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-neon-purple transition-colors">{t('home')}</Link></li>
              <li><Link href="#features" className="hover:text-neon-purple transition-colors">{t('features')}</Link></li>
              <li><Link href="#pricing" className="hover:text-neon-purple transition-colors">{t('pricing')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#contact" className="hover:text-neon-purple transition-colors">{t('contact')}</Link></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mega Streams IPTV. All rights reserved.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest">Disclaimer: We do not host any content. All streams are provided by third party providers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
