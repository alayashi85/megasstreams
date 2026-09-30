"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Globe, Menu, X } from "lucide-react";

const Navbar = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const toggleLanguage = () => {
    setIsOpen(false);
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("features"), href: "/#features" },
    { name: t("pricing"), href: "/#pricing" },
    { name: t("faq"), href: "/#faq" },
    { name: t("contact"), href: "/#contact" },
  ];

  return (
    <nav
      aria-label={t("mainNav")}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-red bg-clip-text text-transparent"
            >
              MEGA STREAMS
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-neon-purple transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button
                aria-label={t("changeLanguage")}
                onClick={toggleLanguage}
                className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-neon-purple border border-neon-purple/30 hover:bg-neon-purple/10 transition-all"
              >
                <Globe size={16} />
                <span>{locale === "en" ? "العربية" : "English"}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <button
              aria-label={t("changeLanguage")}
              onClick={toggleLanguage}
              className="min-h-11 min-w-11 p-2 text-neon-purple border border-neon-purple/30 rounded-md"
            >
              <Globe size={20} />
            </button>
            <button
              aria-label={isOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="flex min-h-11 min-w-11 items-center justify-center text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}

      {
        <div
          id="mobile-navigation"
          hidden={!isOpen}
          className="md:hidden bg-black border-b border-white/10 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-neon-purple hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
