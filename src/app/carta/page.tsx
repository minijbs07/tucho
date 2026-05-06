"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { menuData } from "@/lib/data";
import Footer from "@/components/Footer";
import { Sparkles, Fish, Beef } from "lucide-react";

export default function CartaPage() {
  const { lang, t } = useLanguage();

  const starters = menuData.filter((item) => item.category === "starters");
  const fish = menuData.filter((item) => item.category === "fish");
  const meats = menuData.filter((item) => item.category === "meats");

  const Section = ({ id, title, icon: Icon, items }: { id: string; title: string; icon: any; items: typeof menuData }) => (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-beige)] pb-6">
        <Icon className="w-8 h-8 text-[var(--color-gold)]" />
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown)]">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {items.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex gap-6 group cursor-pointer"
          >
            <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm">
              <img 
                src={item.image} 
                alt={item.name[lang] || item.name.es} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-xl text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors pr-4">
                  {item.name[lang] || item.name.es}
                </h3>
                <span className="font-medium text-[var(--color-brown)] whitespace-nowrap">{item.price}</span>
              </div>
              {item.desc && (
                <p className="text-sm text-[var(--color-charcoal)]/60 font-light">
                  {item.desc[lang] || item.desc.es}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="w-full min-h-screen bg-[var(--color-ivory)] pt-32">
      <div className="container mx-auto max-w-5xl px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[var(--color-gold)] tracking-[0.2em] uppercase text-sm mb-4 font-medium">La Tucho</p>
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-brown)] mb-8">{t("menu_title")}</h1>
          <div className="w-12 h-[1px] bg-[var(--color-brown)] mx-auto" />
        </motion.div>

        <Section id="starters" title={t("menu_section_starters")} icon={Sparkles} items={starters} />
        <Section id="fish" title={t("menu_section_fish")} icon={Fish} items={fish} />
        <Section id="meats" title={t("menu_section_meats")} icon={Beef} items={meats} />

        <div className="text-center mt-12 py-8 border-t border-[var(--color-beige)] text-[var(--color-charcoal)]/60 font-light text-sm tracking-wide">
          {t("menu_footer")}
        </div>
      </div>
      <Footer />
    </main>
  );
}
