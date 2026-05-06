"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { menuData } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MenuPreview() {
  const { lang, t } = useLanguage();
  
  // Take a few highlights from different categories
  const highlights = menuData.filter(item => 
    ['anchoas', 'rodaballo', 'chuleta'].includes(item.id)
  );

  return (
    <section className="py-32 px-6 bg-[var(--color-ivory)] border-t border-[var(--color-beige)]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-brown)]">
              Especialidades Destacadas
            </h2>
            <p className="text-lg text-[var(--color-charcoal)]/70 font-light">
              Nuestra carta es un homenaje al producto de temporada. Seleccionamos cuidadosamente cada ingrediente para garantizar la máxima calidad en su plato.
            </p>
          </div>
          <Link href="/carta" className="group flex items-center gap-3 text-[var(--color-brown)] uppercase tracking-widest text-sm font-medium hover:text-[var(--color-gold)] transition-colors">
            {t("home_cta")} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img 
                  src={item.image} 
                  alt={item.name[lang] || item.name.es} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-brown)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                {item.name[lang] || item.name.es}
              </h3>
              {item.desc && (
                <p className="text-sm text-[var(--color-charcoal)]/60 mb-2 font-light">
                  {item.desc[lang] || item.desc.es}
                </p>
              )}
              <p className="text-lg text-[var(--color-charcoal)] font-medium">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
