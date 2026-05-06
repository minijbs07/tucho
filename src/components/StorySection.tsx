"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function StorySection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 bg-[var(--color-background)]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-brown)] leading-tight">
              Una historia de sabor y tradición familiar.
            </h2>
            <div className="w-20 h-[1px] bg-[var(--color-gold)]" />
            <p className="text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed">
              En La Tucho llevamos décadas seleccionando el mejor producto del mar Cantábrico y las carnes más nobles para ofrecerte una experiencia gastronómica que honra nuestras raíces. Nuestro compromiso es la calidad absoluta, tratada con el respeto que merece, en un entorno diseñado para el disfrute y la calma.
            </p>
            <p className="text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed">
              Cada plato cuenta nuestra historia. Cada detalle refleja nuestra pasión por la excelencia.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full overflow-hidden"
          >
            <img 
              src="https://latucho.com.es/wp-content/uploads/2020/06/la-tucho-restaurante-5.jpg" 
              alt="Interior Restaurante" 
              className="object-cover w-full h-full grayscale-[20%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
