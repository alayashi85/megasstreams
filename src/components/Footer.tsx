"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations("Navigation");
  const i = useTranslations("Index");

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-red bg-clip-text text-transparent mb-4 inline-block"
            >
              MEGA STREAMS
            </Link>
            <p className="text-gray-400 max-w-sm">{i("footerDescription")}</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{i("quickLinks")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-neon-purple transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-neon-purple transition-colors"
                >
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="hover:text-neon-purple transition-colors"
                >
                  {t("pricing")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{i("supportTitle")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-neon-purple transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-neon-purple transition-colors"
                >
                  {i("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-neon-purple transition-colors"
                >
                  {i("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Mega Streams IPTV. {i("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
