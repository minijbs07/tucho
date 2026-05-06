"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "es", label: "ESP" },
  { code: "en", label: "ENG" },
  { code: "de", label: "DEU" },
  { code: "fr", label: "FRA" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4 glass-dark text-white shadow-sm" : "py-6 bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-serif text-2xl tracking-wider font-medium">LA TUCHO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/carta" className="hover:text-[var(--color-gold)] transition-colors uppercase">
            {t("tab_menu")}
          </Link>
          <Link href="/vinos" className="hover:text-[var(--color-gold)] transition-colors uppercase">
            {t("tab_wine")}
          </Link>
          <Link href="/reservas" className="px-5 py-2 border border-white/30 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all rounded-sm uppercase">
            {t("book_table")}
          </Link>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 uppercase hover:text-[var(--color-gold)] transition-colors"
            >
              {lang} <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden flex flex-col min-w-[80px]"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "px-4 py-2 text-xs hover:bg-white/10 text-left transition-colors",
                        lang === l.code ? "text-[var(--color-gold)]" : "text-white"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <button
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#1C1C1C] text-white flex flex-col justify-center items-center z-40"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif text-center">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-gold)] transition-colors">
                {t("tab_home")}
              </Link>
              <Link href="/carta" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-gold)] transition-colors">
                {t("tab_menu")}
              </Link>
              <Link href="/vinos" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-gold)] transition-colors">
                {t("tab_wine")}
              </Link>
              <Link href="/reservas" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-gold)] transition-colors">
                {t("book_table")}
              </Link>
              <div className="flex gap-4 mt-8 justify-center">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "text-sm tracking-widest",
                      lang === l.code ? "text-[var(--color-gold)]" : "text-white/50"
                    )}
                  >
                    {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
