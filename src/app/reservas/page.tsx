"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import Footer from "@/components/Footer";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

export default function ReservasPage() {
  const { t } = useLanguage();

  return (
    <main className="w-full min-h-screen bg-[var(--color-ivory)] pt-32">
      <div className="container mx-auto max-w-6xl px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--color-gold)] tracking-[0.2em] uppercase text-sm mb-4 font-medium">Reservas</p>
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-brown)] mb-8">{t("home_reservations")}</h1>
          <div className="w-12 h-[1px] bg-[var(--color-brown)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl text-[var(--color-brown)] mb-6">Disponibilidad en tiempo real</h2>
            <p className="text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed mb-8">
              Consulta nuestro calendario para conocer la disponibilidad actual. Para realizar una reserva, por favor contáctanos por teléfono. Estaremos encantados de atenderte y preparar tu mesa con el mayor de los cuidados.
            </p>
            <div className="bg-[var(--color-beige)]/30 p-8 border border-[var(--color-beige)]">
              <h3 className="font-serif text-xl text-[var(--color-brown)] mb-4">Contacto Directo</h3>
              <ul className="space-y-4 font-light">
                <li><a href="tel:+34942336177" className="text-lg hover:text-[var(--color-gold)] transition-colors">{t("home_phone_landline")}: 942 336 177</a></li>
                <li><a href="tel:+34673752220" className="text-lg hover:text-[var(--color-gold)] transition-colors">{t("home_phone_mobile")}: 673 752 220</a></li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AvailabilityCalendar />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
