"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { wineData } from "@/lib/data";
import Footer from "@/components/Footer";
import { Grape, Award, Sailboat, PartyPopper } from "lucide-react";

export default function VinosPage() {
  const { lang, t } = useLanguage();

  const riojas = wineData.filter((item) => item.category === "riojas");
  const reservas = wineData.filter((item) => item.category === "reservas");
  const albarinos = wineData.filter((item) => item.category === "albarinos");
  const cavas = wineData.filter((item) => item.category === "cavas");

  const Section = ({ id, title, icon: Icon, items }: { id: string; title: string; icon: any; items: typeof wineData }) => (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-10 border-b border-[var(--color-beige)] pb-4">
        <Icon className="w-6 h-6 text-[var(--color-gold)]" />
        <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-brown)]">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex justify-between items-center py-4 border-b border-[var(--color-beige)]/50 group"
          >
            <span className="font-serif text-lg text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
              {item.name[lang] || item.name.es}
            </span>
            <span className="font-medium text-[var(--color-brown)]">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="w-full min-h-screen bg-[var(--color-beige)]/20 pt-32">
      <div className="container mx-auto max-w-5xl px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[var(--color-gold)] tracking-[0.2em] uppercase text-sm mb-4 font-medium">Bodega</p>
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-brown)] mb-8">{t("wine_title")}</h1>
          <div className="w-12 h-[1px] bg-[var(--color-brown)] mx-auto" />
        </motion.div>

        <Section id="riojas" title={t("wine_section_riojas")} icon={Grape} items={riojas} />
        <Section id="reservas" title={t("wine_section_reservas")} icon={Award} items={reservas} />
        <Section id="albarinos" title={t("wine_section_albarinos")} icon={Sailboat} items={albarinos} />
        <Section id="cavas" title={t("wine_section_cavas")} icon={PartyPopper} items={cavas} />

        <div className="text-center mt-12 py-8 border-t border-[var(--color-beige)] text-[var(--color-charcoal)]/60 font-light text-sm tracking-wide">
          {t("wine_footer")}
        </div>
      </div>
      <Footer />
    </main>
  );
}
