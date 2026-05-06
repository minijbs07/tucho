"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { db } from "@/lib/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AvailabilityCalendar() {
  const { lang, t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [availability, setAvailability] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "disponibilidad", "calendario"), (doc) => {
      if (doc.exists()) {
        setAvailability(doc.data() as Record<string, string>);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleString(lang === "es" ? "es-ES" : lang === "en" ? "en-US" : lang, { month: "long" });
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const days = [];
  for (let i = 0; i < startOffset; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isoDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    days.push({ day: i, isoDate });
  }

  const todayStr = new Date().toISOString().split('T')[0];

  const getDotColor = (status: string) => {
    if (status === "green") return "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]";
    if (status === "orange") return "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]";
    if (status === "red") return "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]";
    return "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/50 backdrop-blur-sm border border-[var(--color-beige)] p-8 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => changeMonth(-1)} className="p-2 hover:text-[var(--color-gold)] transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h3 className="font-serif text-2xl uppercase tracking-widest text-[var(--color-brown)]">
          {getMonthName(currentDate)} {year}
        </h3>
        <button onClick={() => changeMonth(1)} className="p-2 hover:text-[var(--color-gold)] transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mb-4 text-sm font-medium text-[var(--color-charcoal)]/60">
        <div>{t("day_mon")}</div><div>{t("day_tue")}</div><div>{t("day_wed")}</div>
        <div>{t("day_thu")}</div><div>{t("day_fri")}</div><div>{t("day_sat")}</div><div>{t("day_sun")}</div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((item, index) => (
          <div key={index} className="aspect-square flex flex-col items-center justify-center relative">
            {item && (
              <>
                <span className={cn(
                  "text-lg z-10 font-light",
                  item.isoDate === todayStr ? "font-medium text-[var(--color-gold)]" : "text-[var(--color-charcoal)]"
                )}>
                  {item.day}
                </span>
                {item.isoDate === todayStr && (
                  <div className="absolute inset-2 border border-[var(--color-gold)] rounded-full z-0 opacity-20" />
                )}
                {availability[item.isoDate] && (
                  <div className={cn("w-2 h-2 rounded-full absolute bottom-2 z-10", getDotColor(availability[item.isoDate]))} />
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-[var(--color-beige)] text-sm font-light">
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"/>{t("legend_high")}</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"/>{t("legend_low")}</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"/>{t("legend_full")}</div>
      </div>
    </div>
  );
}
