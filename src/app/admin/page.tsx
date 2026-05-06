"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ChevronLeft, ChevronRight, LogOut, Check, Save } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const { lang, t } = useLanguage();
  const [email, setEmail] = useState("tucho@admin.com");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [availability, setAvailability] = useState<Record<string, string>>({});
  const [selectedDates, setSelectedDates] = useState<Set<string>>(new Set());
  const [statusSelection, setStatusSelection] = useState<string>("green");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      if (user) {
        loadData();
      }
    });
    return () => unsubscribe();
  }, []);

  const loadData = async () => {
    try {
      const docRef = doc(db, "disponibilidad", "calendario");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAvailability(docSnap.data() as Record<string, string>);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err) {
      setError(t("admin_login_error"));
    }
  };

  const handleLogout = () => signOut(auth);

  const toggleDateSelection = (isoDate: string, shiftKey: boolean) => {
    setSaved(false);
    const newSelection = new Set(selectedDates);
    if (shiftKey) {
      // Select week logic
      const date = new Date(isoDate);
      const day = date.getDay();
      const diff = (day === 0 ? -6 : 1) - day;
      const monday = new Date(date);
      monday.setDate(date.getDate() + diff);
      
      for(let i=0; i<7; i++){
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        newSelection.add(d.toISOString().split('T')[0]);
      }
    } else {
      if (newSelection.has(isoDate)) {
        newSelection.delete(isoDate);
      } else {
        newSelection.add(isoDate);
      }
    }
    setSelectedDates(newSelection);
  };

  const saveChanges = async () => {
    const newData = { ...availability };
    selectedDates.forEach(date => {
      if (statusSelection === "none") {
        delete newData[date];
      } else {
        newData[date] = statusSelection;
      }
    });

    try {
      await setDoc(doc(db, "disponibilidad", "calendario"), newData);
      setAvailability(newData);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      setSelectedDates(new Set());
    } catch (e) {
      console.error("Error saving", e);
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="w-full min-h-screen bg-[var(--color-brown)] flex items-center justify-center p-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 max-w-md w-full shadow-2xl rounded-sm"
        >
          <h1 className="font-serif text-3xl text-[var(--color-brown)] mb-8 text-center">{t("admin_modal_title")}</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div>
              <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">{t("admin_user")}</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-[var(--color-beige)] p-3 outline-none focus:border-[var(--color-gold)] transition-colors bg-[var(--color-ivory)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">{t("admin_pass")}</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-[var(--color-beige)] p-3 outline-none focus:border-[var(--color-gold)] transition-colors bg-[var(--color-ivory)]"
              />
            </div>
            <button type="submit" className="w-full bg-[var(--color-brown)] text-white py-3 uppercase tracking-widest text-sm font-medium hover:bg-black transition-colors">
              {t("admin_login_btn")}
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const days = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(`${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`);
  }

  return (
    <main className="w-full min-h-screen bg-[var(--color-ivory)] pt-32 pb-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="font-serif text-4xl text-[var(--color-brown)]">{t("admin_editor_title")}</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-[var(--color-charcoal)]/60 hover:text-black transition-colors">
            <LogOut className="w-4 h-4" /> {t("admin_logout")}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white p-8 shadow-sm border border-[var(--color-beige)]">
            <div className="flex justify-between items-center mb-8">
              <button onClick={() => setCurrentDate(new Date(year, month - 1))} className="p-2 hover:text-[var(--color-gold)] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="font-serif text-xl uppercase tracking-widest text-[var(--color-brown)]">
                {currentDate.toLocaleString('es-ES', { month: 'long' })} {year}
              </h3>
              <button onClick={() => setCurrentDate(new Date(year, month + 1))} className="p-2 hover:text-[var(--color-gold)] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center mb-4 text-xs font-medium text-[var(--color-charcoal)]/40 uppercase">
              <div>L</div><div>M</div><div>X</div><div>J</div><div>V</div><div>S</div><div>D</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((isoDate, index) => {
                if (!isoDate) return <div key={index} className="aspect-square" />;
                const day = parseInt(isoDate.split('-')[2]);
                const isSelected = selectedDates.has(isoDate);
                const status = availability[isoDate];
                
                return (
                  <div 
                    key={isoDate}
                    onClick={(e) => toggleDateSelection(isoDate, e.shiftKey)}
                    className={cn(
                      "aspect-square flex flex-col items-center justify-center relative cursor-pointer border transition-all rounded-sm",
                      isSelected ? "border-[var(--color-brown)] bg-[var(--color-beige)]/30 shadow-inner" : "border-transparent hover:border-[var(--color-beige)]",
                    )}
                  >
                    <span className={cn("text-sm z-10 font-light", isSelected ? "font-medium" : "")}>{day}</span>
                    {status && (
                      <div className={cn(
                        "w-2 h-2 rounded-full absolute bottom-1.5 z-10",
                        status === "green" ? "bg-emerald-500" : status === "orange" ? "bg-amber-500" : "bg-rose-500"
                      )} />
                    )}
                  </div>
                );
              })}
            </div>
            
            <p className="text-xs text-[var(--color-charcoal)]/50 mt-6 text-center">
              * Shift + Click para seleccionar semana completa
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 shadow-sm border border-[var(--color-beige)]">
              <h3 className="font-serif text-xl text-[var(--color-brown)] mb-6">Estado</h3>
              
              <div className="space-y-4">
                {[
                  { id: "green", label: t("legend_high"), color: "bg-emerald-500" },
                  { id: "orange", label: t("legend_low"), color: "bg-amber-500" },
                  { id: "red", label: t("legend_full"), color: "bg-rose-500" },
                  { id: "none", label: t("admin_clear"), color: "bg-transparent border border-gray-300" }
                ].map((s) => (
                  <label key={s.id} className="flex items-center gap-4 cursor-pointer p-3 border border-transparent hover:bg-[var(--color-beige)]/20 transition-colors rounded-sm">
                    <input 
                      type="radio" 
                      name="status" 
                      value={s.id} 
                      checked={statusSelection === s.id}
                      onChange={() => setStatusSelection(s.id)}
                      className="hidden"
                    />
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center border", statusSelection === s.id ? "border-black" : "border-transparent")}>
                      <div className={cn("w-3.5 h-3.5 rounded-full", s.color)} />
                    </div>
                    <span className="font-light text-[var(--color-charcoal)]">{s.label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-beige)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-light">{selectedDates.size} días seleccionados</span>
                  {selectedDates.size > 0 && (
                    <button onClick={() => setSelectedDates(new Set())} className="text-xs text-red-500 hover:underline">
                      Limpiar
                    </button>
                  )}
                </div>

                <button 
                  onClick={saveChanges}
                  disabled={selectedDates.size === 0}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-brown)] text-white py-3 uppercase tracking-widest text-sm font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4" /> {t("admin_save")}
                </button>

                {saved && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center justify-center gap-2 text-emerald-600 text-sm font-medium"
                  >
                    <Check className="w-4 h-4" /> {t("admin_save_success")}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
