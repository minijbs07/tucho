"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        {/* Usamos una de las imágenes originales */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 motion-safe:animate-slow-zoom"
          style={{ backgroundImage: "url('https://latucho.com.es/wp-content/uploads/2021/04/la-tucho-restaurante.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1c1c1c]/90" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[var(--color-gold)] tracking-[0.2em] text-sm md:text-base uppercase mb-6"
        >
          {t("home_subtitle")}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight font-medium"
        >
          La Tucho
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/80 font-light mb-12 max-w-2xl text-balance"
        >
          {t("hero_title")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/reservas" className="group relative px-8 py-4 bg-white text-black font-medium tracking-wide uppercase text-sm overflow-hidden flex items-center justify-center gap-2">
            <span className="relative z-10 transition-colors group-hover:text-white">{t("book_table")}</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-colors group-hover:text-white" />
            <div className="absolute inset-0 bg-[var(--color-brown)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
          
          <Link href="/carta" className="group relative px-8 py-4 border border-white/30 text-white font-medium tracking-wide uppercase text-sm flex items-center justify-center hover:border-white transition-colors">
            <span>{t("home_cta")}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
