export type MenuItem = {
  id: string;
  name: Record<string, string>;
  desc?: Record<string, string>;
  price: string;
  category: string;
  image: string;
};

export const menuData: MenuItem[] = [
  // --- PARA PICAR ---
  {
    id: "anchoas",
    name: { es: "Anchoas del Cantábrico", en: "Cantabrian Anchovies", de: "Kantabrische Sardellen", fr: "Anchois de Cantabrie" },
    price: "21,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=800"
  },
  {
    id: "ensalada_tomate",
    name: { es: "Ensalada Tomate y Queso", en: "Tomato & Cheese Salad", de: "Tomaten-Käse-Salat", fr: "Salade Tomate et Fromage" },
    price: "14,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
  },
  {
    id: "ensaladilla",
    name: { es: "Ensaladilla Rusa", en: "Russian Salad", de: "Russischer Salat", fr: "Salade Russe" },
    price: "14,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800"
  },
  {
    id: "puding",
    name: { es: "Puding Casero", en: "Homemade Pudding", de: "Hausgemachter Pudding", fr: "Pudding Fait Maison" },
    price: "14,50 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
  },
  {
    id: "jamon",
    name: { es: "Jamón Ibérico", en: "Iberian Ham", de: "Iberischer Schinken", fr: "Jambon Ibérique" },
    price: "25,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1622222984956-7b76be93cd2c?w=800"
  },
  {
    id: "croquetas",
    name: { es: "Croquetas de Jamón Ibérico", en: "Iberian Ham Croquettes", de: "Kroketten mit iberischem Schinken", fr: "Croquettes de jambon ibérique" },
    price: "14,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=800"
  },
  {
    id: "rabas",
    name: { es: "Rabas de Magano", en: "Fried Squid", de: "Tintenfischringe", fr: "Calamars frits" },
    price: "20,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800"
  },
  {
    id: "almejas",
    name: { es: "Almejas Marinera o Sartén", en: "Clams (Marinera or Pan-fried)", de: "Venusmuscheln (Marinera oder Pfanne)", fr: "Palourdes (Marinera ou Poêlées)" },
    price: "25,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1559047127-f28324e2c4f2?w=800"
  },
  {
    id: "gambas",
    name: { es: "Gambas Frescas", en: "Fresh Prawns", de: "Frische Garnelen", fr: "Crevettes Fraîches" },
    price: "22,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800"
  },
  {
    id: "pulpo",
    name: { es: "Pulpo Plancha", en: "Grilled Octopus", de: "Gegrillter Oktopus", fr: "Poulpe grillé" },
    price: "19,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1608835291093-ef9a4f398b9c?w=800"
  },
  {
    id: "zamburinas",
    name: { es: "Zamburiñas Plancha", en: "Grilled Scallops", de: "Gegrillte Jakobsmuscheln", fr: "Pétoncles grillés" },
    price: "21,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800"
  },
  {
    id: "pastel_setas",
    name: { es: "Pastel templado de Setas", en: "Warm Mushroom Pâté", de: "Warmer Pilzkuchen", fr: "Gâteau tiède aux champignons" },
    price: "16,00 €",
    category: "starters",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800"
  },

  // --- PESCADOS ---
  {
    id: "lubina",
    name: { es: "Lubina al Horno o Plancha", en: "Baked or Grilled Sea Bass", de: "Wolfsbarsch (Ofen oder Gegrillt)", fr: "Loup de mer (Four ou Plancha)" },
    desc: { es: "2 personas", en: "2 people", de: "2 Personen", fr: "2 personnes" },
    price: "55,00 €/Kg",
    category: "fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
  },
  {
    id: "lenguado",
    name: { es: "Lenguado Plancha o Menier", en: "Grilled or Meunière Sole", de: "Seezunge (Gegrillt oder Müllerin)", fr: "Sole (Plancha ou Meunière)" },
    price: "58,00 €/Kg",
    category: "fish",
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800"
  },
  {
    id: "rodaballo",
    name: { es: "Rodaballo Plancha o Frito", en: "Grilled or Fried Turbot", de: "Steinbutt (Gegrillt oder Frittiert)", fr: "Turbot (Plancha ou Frit)" },
    desc: { es: "2 personas", en: "2 people", de: "2 Personen", fr: "2 personnes" },
    price: "55,00 €/Kg",
    category: "fish",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800"
  },
  {
    id: "merluza_rebozada",
    name: { es: "Merluza Rebozada o Plancha", en: "Battered or Grilled Hake", de: "Seehecht (Paniert oder Gegrillt)", fr: "Merlu (Pané ou Plancha)" },
    price: "24,00 €",
    category: "fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
  },
  {
    id: "merluza_salsa",
    name: { es: "Merluza en Salsa Verde", en: "Hake in Green Sauce", de: "Seehecht in grüner Soße", fr: "Merlu en sauce verte" },
    desc: { es: "con Almejas y Gambas", en: "with Clams and Prawns", de: "mit Muscheln und Garnelen", fr: "aux palourdes et crevettes" },
    price: "26,00 €",
    category: "fish",
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800"
  },
  {
    id: "rape_rebozado",
    name: { es: "Rape Rebozado", en: "Battered Monkfish", de: "Seeteufel (Paniert)", fr: "Lotte (Panée)" },
    price: "24,00 €",
    category: "fish",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800"
  },
  {
    id: "rape_horno",
    name: { es: "Rape al Horno o Plancha", en: "Baked or Grilled Monkfish", de: "Seeteufel (Ofen oder Gegrillt)", fr: "Lotte (Four ou Plancha)" },
    desc: { es: "2 personas", en: "2 people", de: "2 Personen", fr: "2 personnes" },
    price: "55,00 €/Kg",
    category: "fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
  },
  {
    id: "san_martin",
    name: { es: "San Martín Plancha o Frito", en: "John Dory (Grilled or Fried)", de: "Petersfisch (Gegrillt oder Frittiert)", fr: "Saint-Pierre (Plancha ou Frit)" },
    desc: { es: "2 personas", en: "2 people", de: "2 Personen", fr: "2 personnes" },
    price: "55,00 €/Kg",
    category: "fish",
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800"
  },

  // --- CARNES ---
  {
    id: "solomillo",
    name: { es: "Solomillo de Novilla", en: "Heifer Sirloin", de: "Färsenfilet", fr: "Filet de génisse" },
    price: "24,50 €",
    category: "meats",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800"
  },
  {
    id: "chuletillas",
    name: { es: "Chuletillas de Lechazo", en: "Baby Lamb Chops", de: "Milchlammkoteletts", fr: "Côtelettes d'agneau de lait" },
    price: "21,00 €",
    category: "meats",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
  },
  {
    id: "chuleta",
    name: { es: "Chuleta", en: "T-Bone Steak", de: "T-Bone-Steak", fr: "Côte de bœuf" },
    price: "44,00 €/kg",
    category: "meats",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800"
  },
  {
    id: "entrecot",
    name: { es: "Entrecot", en: "Entrecote", de: "Entrecote", fr: "Entrecôte" },
    price: "22,00 €",
    category: "meats",
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800"
  }
];

export const wineData: MenuItem[] = [
  { id: "cune", name: { es: "Cune", en: "Cune", de: "Cune", fr: "Cune" }, price: "20,00 €", category: "riojas", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800" },
  { id: "ramon_bilbao", name: { es: "Ramón Bilbao", en: "Ramón Bilbao", de: "Ramón Bilbao", fr: "Ramón Bilbao" }, price: "19,00 €", category: "riojas", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800" },
  { id: "muga", name: { es: "Muga", en: "Muga", de: "Muga", fr: "Muga" }, price: "28,00 €", category: "riojas", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800" },
  { id: "marques_riscal", name: { es: "Marqués de Riscal", en: "Marqués de Riscal", de: "Marqués de Riscal", fr: "Marqués de Riscal" }, price: "28,00 €", category: "reservas", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800" },
  { id: "vina_ardanza", name: { es: "Viña Ardanza", en: "Viña Ardanza", de: "Viña Ardanza", fr: "Viña Ardanza" }, price: "32,00 €", category: "reservas", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800" },
  { id: "imperial", name: { es: "Imperial", en: "Imperial", de: "Imperial", fr: "Imperial" }, price: "34,00 €", category: "reservas", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800" },
  { id: "terras_gauda", name: { es: "Terras Gauda", en: "Terras Gauda", de: "Terras Gauda", fr: "Terras Gauda" }, price: "23,50 €", category: "albarinos", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800" },
  { id: "martin_codax", name: { es: "Martín Codax", en: "Martín Codax", de: "Martín Codax", fr: "Martín Codax" }, price: "23,00 €", category: "albarinos", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800" },
  { id: "mar_frades", name: { es: "Mar de Frades", en: "Mar de Frades", de: "Mar de Frades", fr: "Mar de Frades" }, price: "23,50 €", category: "albarinos", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800" },
  { id: "juve_camps", name: { es: "Juve & Camps Reserva", en: "Juve & Camps Reserva", de: "Juve & Camps Reserva", fr: "Juve & Camps Reserva" }, price: "28,00 €", category: "cavas", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800" },
  { id: "moet_chandon", name: { es: "Möet & Chandon Brut", en: "Möet & Chandon Brut", de: "Möet & Chandon Brut", fr: "Möet & Chandon Brut" }, price: "58,00 €", category: "cavas", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800" }
];
