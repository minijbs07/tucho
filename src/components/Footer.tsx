"use client";

import { useLanguage } from "./LanguageContext";
import { MapPin, Phone, Mail, Link as LinkIcon } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-brown)] text-[var(--color-ivory)] pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl mb-6">La Tucho</h3>
            <p className="text-[var(--color-ivory)]/70 font-light leading-relaxed">
              Restaurante en Santander dedicado al mejor producto del mar Cantábrico y carnes seleccionadas.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
                <span className="font-serif text-xs">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
                <span className="font-serif text-xs">FB</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-[var(--color-gold)]">{t("home_reservations")}</h4>
            <ul className="space-y-4 text-[var(--color-ivory)]/80 font-light">
              <li>
                <a href="tel:+34942336177" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[var(--color-gold)]" />
                  <span>{t("home_phone_landline")}: 942 336 177</span>
                </a>
              </li>
              <li>
                <a href="tel:+34673752220" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[var(--color-gold)]" />
                  <span>{t("home_phone_mobile")}: 673 752 220</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@latucho.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[var(--color-gold)]" />
                  <span>info@latucho.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-[var(--color-gold)]">{t("home_address")}</h4>
            <div className="flex items-start gap-3 text-[var(--color-ivory)]/80 font-light">
              <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
              <p className="leading-relaxed">
                c/ San Román, 12<br />
                Bº Corbán<br />
                39012 Santander<br />
                Cantabria, España
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-[var(--color-gold)]">Horario</h4>
            <ul className="space-y-2 text-[var(--color-ivory)]/80 font-light">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Lunes</span> <span className="text-[var(--color-gold)]">Cerrado</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mar - Jue</span> <span>13:00 - 16:30</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Vie - Sáb</span> <span>13:00 - 16:30 | 20:30 - 23:30</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Domingo</span> <span>13:00 - 16:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-ivory)]/50 tracking-wider">
          <p>&copy; {new Date().getFullYear()} La Tucho. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
