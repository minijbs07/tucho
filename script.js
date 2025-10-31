// --- DOM Elements ---
// (Ya no se necesita el "DOMContentLoaded" gracias a 'defer' en el HTML)

const appContainer = document.querySelector(".app-container");
const tabs = document.querySelectorAll(".tab-item");
const pages = document.querySelectorAll(".page");
const tabIndicator = document.querySelector(".tab-indicator");
const heroCtaButton = document.querySelector(".hero-cta");
const cartaTabButton = document.querySelector('.tab-item[data-page="page-carta"]');

// Language
const langToggleButton = document.querySelector(".lang-toggle-btn");
const languageCodeDisplay = document.getElementById("language-code-display");
const langMenu = document.querySelector(".language-menu");
const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-lang]");

// Menu Elements
const startersList = document.getElementById("starters-list");
const fishList = document.getElementById("fish-list");
const meatsList = document.getElementById("meats-list");
const menuFooter = document.getElementById("menu-footer");

// Wine Elements
const wineRiojasList = document.getElementById("wine-riojas-list");
const wineReservasList = document.getElementById("wine-reservas-list");
const wineAlbarinosList = document.getElementById("wine-albarinos-list");
const wineCavasList = document.getElementById("wine-cavas-list");

// Calendar Elements
const calMonthYear = document.getElementById("cal-month-year");
const calDatesGrid = document.getElementById("cal-dates-grid");
const calPrevBtn = document.getElementById("cal-prev");
const calNextBtn = document.getElementById("cal-next");

// --- Admin Modal Elements ---
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminModalOverlay = document.getElementById("admin-modal-overlay");
// Vistas
const adminLoginView = document.getElementById("admin-login-view");
const adminEditorView = document.getElementById("admin-editor-view");
// Vista Login
const adminUserInput = document.getElementById("admin-user");
const adminPassInput = document.getElementById("admin-pass");
const adminSubmitLoginBtn = document.getElementById("admin-submit-login");
const adminCancelLoginBtn = document.getElementById("admin-cancel-login");
const adminLoginError = document.getElementById("admin-login-error");
// Vista Editor (Actualizada)
const adminEditDateStartInput = document.getElementById("admin-edit-date-start");
const adminEditDateEndInput = document.getElementById("admin-edit-date-end");
const adminStatusSelector = document.querySelector(".admin-status-selector");
const adminSubmitSaveBtn = document.getElementById("admin-submit-save");
const adminLogoutBtn = document.getElementById("admin-logout");
const adminSaveSuccess = document.getElementById("admin-save-success");


// --- App State ---
let currentLang = "es";
let calCurrentDate = new Date(); 
// 🔥 ADMIN MINI-CAL
let adminMiniSelectedDates = new Set();
let adminMiniCurrentDate = new Date();
let appState = {
    isAdminLoggedIn: false
};


// --- 1. DATOS DE LA CARTA ---
const menuData = {
    // --- PARA PICAR ---
    "anchoas": {
        name_es: "Anchoas del Cantábrico", name_en: "Cantabrian Anchovies", name_de: "Kantabrische Sardellen", name_fr: "Anchois de Cantabrie",
        price: "21,00 €",
        desc_es: "", desc_en: "", desc_de: "", desc_fr: "",
        category: "starters"
    },
    "ensalada_tomate": {
        name_es: "Ensalada Tomate y Queso", name_en: "Tomato & Cheese Salad", name_de: "Tomaten-Käse-Salat", name_fr: "Salade Tomate et Fromage",
        price: "14,00 €",
        category: "starters"
    },
    "ensaladilla": {
        name_es: "Ensaladilla Rusa", name_en: "Russian Salad", name_de: "Russischer Salat", name_fr: "Salade Russe",
        price: "14,00 €",
        category: "starters"
    },
    "puding": {
        name_es: "Puding Casero", name_en: "Homemade Pudding", name_de: "Hausgemachter Pudding", name_fr: "Pudding Fait Maison",
        price: "14,50 €",
        category: "starters"
    },
    "jamon": {
        name_es: "Jamón Ibérico", name_en: "Iberian Ham", name_de: "Iberischer Schinken", name_fr: "Jambon Ibérique",
        price: "25,00 €",
        category: "starters"
    },
    "croquetas": {
        name_es: "Croquetas de Jamón Ibérico", name_en: "Iberian Ham Croquettes", name_de: "Kroketten mit iberischem Schinken", name_fr: "Croquettes de jambon ibérique",
        price: "14,00 €",
        category: "starters"
    },
    "rabas": {
        name_es: "Rabas de Magano", name_en: "Fried Squid", name_de: "Tintenfischringe", name_fr: "Calamars frits",
        price: "20,00 €",
        category: "starters"
    },
    "almejas": {
        name_es: "Almejas Marinera o Sartén", name_en: "Clams (Marinera or Pan-fried)", name_de: "Venusmuscheln (Marinera oder Pfanne)", name_fr: "Palourdes (Marinera ou Poêlées)",
        price: "25,00 €",
        category: "starters"
    },
    "gambas": {
        name_es: "Gambas Frescas", name_en: "Fresh Prawns", name_de: "Frische Garnelen", name_fr: "Crevettes Fraîches",
        price: "22,00 €",
        category: "starters"
    },
     "pulpo": {
        name_es: "Pulpo Plancha", name_en: "Grilled Octopus", name_de: "Gegrillter Oktopus", name_fr: "Poulpe grillé",
        price: "19,00 €",
        category: "starters"
    },
    "zamburinas": {
        name_es: "Zamburiñas Plancha", name_en: "Grilled Scallops", name_de: "Gegrillte Jakobsmuscheln", name_fr: "Pétoncles grillés",
        price: "21,00 €",
        category: "starters"
    },
    "pastel_setas": {
        name_es: "Pastel templado de Setas", name_en: "Warm Mushroom Pâté", name_de: "Warmer Pilzkuchen", name_fr: "Gâteau tiède aux champignons",
        price: "16,00 €",
        category: "starters"
    },
    // --- PESCADOS ---
    "lubina": {
        name_es: "Lubina al Horno o Plancha", name_en: "Baked or Grilled Sea Bass", name_de: "Wolfsbarsch (Ofen oder Gegrillt)", name_fr: "Loup de mer (Four ou Plancha)",
        price: "55,00 €/Kg",
        desc_es: "2 personas", desc_en: "2 people", desc_de: "2 Personen", desc_fr: "2 personnes",
        category: "fish"
    },
    "lenguado": {
        name_es: "Lenguado Plancha o Menier", name_en: "Grilled or Meunière Sole", name_de: "Seezunge (Gegrillt oder Müllerin)", name_fr: "Sole (Plancha ou Meunière)",
        price: "58,00 €/Kg",
        category: "fish"
    },
    "rodaballo": {
        name_es: "Rodaballo Plancha o Frito", name_en: "Grilled or Fried Turbot", name_de: "Steinbutt (Gegrillt oder Frittiert)", name_fr: "Turbot (Plancha ou Frit)",
        price: "55,00 €/Kg",
        desc_es: "2 personas", desc_en: "2 people", desc_de: "2 Personen", desc_fr: "2 personnes",
        category: "fish"
    },
    "merluza_rebozada": {
        name_es: "Merluza Rebozada o Plancha", name_en: "Battered or Grilled Hake", name_de: "Seehecht (Paniert oder Gegrillt)", name_fr: "Merlu (Pané ou Plancha)",
        price: "24,00 €",
        category: "fish"
    },
    "merluza_salsa": {
        name_es: "Merluza en Salsa Verde", name_en: "Hake in Green Sauce", name_de: "Seehecht in grüner Soße", name_fr: "Merlu en sauce verte",
        price: "26,00 €",
        desc_es: "con Almejas y Gambas", desc_en: "with Clams and Prawns", desc_de: "mit Muscheln und Garnelen", desc_fr: "aux palourdes et crevettes",
        category: "fish"
    },
    "rape_rebozado": {
        name_es: "Rape Rebozado", name_en: "Battered Monkfish", name_de: "Seeteufel (Paniert)", name_fr: "Lotte (Panée)",
        price: "24,00 €",
        category: "fish"
    },
    "rape_horno": {
        name_es: "Rape al Horno o Plancha", name_en: "Baked or Grilled Monkfish", name_de: "Seeteufel (Ofen oder Gegrillt)", name_fr: "Lotte (Four ou Plancha)",
        price: "55,00 €/Kg",
        desc_es: "2 personas", desc_en: "2 people", desc_de: "2 Personen", desc_fr: "2 personnes",
        category: "fish"
    },
    "san_martin": {
        name_es: "San Martín Plancha o Frito", name_en: "John Dory (Grilled or Fried)", name_de: "Petersfisch (Gegrillt oder Frittiert)", name_fr: "Saint-Pierre (Plancha ou Frit)",
        price: "55,00 €/Kg",
        desc_es: "2 personas", desc_en: "2 people", desc_de: "2 Personen", desc_fr: "2 personnes",
        category: "fish"
    },
    // --- CARNES ---
    "solomillo": {
        name_es: "Solomillo de Novilla", name_en: "Heifer Sirloin", name_de: "Färsenfilet", name_fr: "Filet de génisse",
        price: "24,50 €",
        category: "meats"
    },
    "chuletillas": {
        name_es: "Chuletillas de Lechazo", name_en: "Baby Lamb Chops", name_de: "Milchlammkoteletts", name_fr: "Côtelettes d'agneau de lait",
        price: "21,00 €",
        category: "meats"
    },
    "chuleta": {
        name_es: "Chuleta", name_en: "T-Bone Steak", name_de: "T-Bone-Steak", name_fr: "Côte de bœuf",
        price: "44,00 €/kg",
        category: "meats"
    },
    "entrecot": {
        name_es: "Entrecot", name_en: "Entrecote", name_de: "Entrecote", name_fr: "Entrecôte",
        price: "22,00 €",
        category: "meats"
    }
};

// --- 2. DATOS DE LOS VINOS ---
const wineData = {
    "cune": {
        name_es: "Cune", name_en: "Cune", name_de: "Cune", name_fr: "Cune",
        price: "20,00 €", category: "riojas"
    },
    "ramon_bilbao": {
        name_es: "Ramón Bilbao", name_en: "Ramón Bilbao", name_de: "Ramón Bilbao", name_fr: "Ramón Bilbao",
        price: "19,00 €", category: "riojas"
    },
    "muga": {
        name_es: "Muga", name_en: "Muga", name_de: "Muga", name_fr: "Muga",
        price: "28,00 €", category: "riojas"
    },
    "marques_riscal": {
        name_es: "Marqués de Riscal", name_en: "Marqués de Riscal", name_de: "Marqués de Riscal", name_fr: "Marqués de Riscal",
        price: "28,00 €", category: "reservas"
    },
    "vina_ardanza": {
        name_es: "Viña Ardanza", name_en: "Viña Ardanza", name_de: "Viña Ardanza", name_fr: "Viña Ardanza",
        price: "32,00 €", category: "reservas"
    },
    "imperial": {
        name_es: "Imperial", name_en: "Imperial", name_de: "Imperial", name_fr: "Imperial",
        price: "34,00 €", category: "reservas"
    },
    "terras_gauda": {
        name_es: "Terras Gauda", name_en: "Terras Gauda", name_de: "Terras Gauda", name_fr: "Terras Gauda",
        price: "23,50 €", category: "albarinos"
    },
    "martin_codax": {
        name_es: "Martín Codax", name_en: "Martín Codax", name_de: "Martín Codax", name_fr: "Martín Codax",
        price: "23,00 €", category: "albarinos"
    },
    "mar_frades": {
        name_es: "Mar de Frades", name_en: "Mar de Frades", name_de: "Mar de Frades", name_fr: "Mar de Frades",
        price: "23,50 €", category: "albarinos"
    },
    "juve_camps": {
        name_es: "Juve & Camps Reserva", name_en: "Juve & Camps Reserva", name_de: "Juve & Camps Reserva", name_fr: "Juve & Camps Reserva",
        price: "28,00 €", category: "cavas"
    },
    "moet_chandon": {
        name_es: "Möet & Chandon Brut", name_en: "Möet & Chandon Brut", name_de: "Möet & Chandon Brut", name_fr: "Möet & Chandon Brut",
        price: "58,00 €", category: "cavas"
    }
};

// --- 3. DATOS DE DISPONIBILIDAD ---
let availabilityData = {};
function normalizeStatus(status) {
    const statusMap = {
        // Español
        'alta': 'green', 'baja': 'orange', 'completo': 'red',
        'Alta': 'green', 'Baja': 'orange', 'Completo': 'red',
        // Inglés
        'high': 'green', 'low': 'orange', 'full': 'red',
        'High': 'green', 'Low': 'orange', 'Full': 'red',
        // Cualquier otro → null (se elimina)
    };
    return statusMap[status] || (['green', 'orange', 'red'].includes(status) ? status : null);
}
async function loadAvailabilityFromDB() {
    try {
        const doc = await db.collection("disponibilidad").doc("calendario").get();
        if (doc.exists) {
            let rawData = doc.data();
            // 🔄 MIGRA AUTOMÁTICAMENTE datos antiguos a nuevo formato
            const migrated = {};
            let hasChanges = false;
            for (const date in rawData) {
                const newStatus = normalizeStatus(rawData[date]);
                if (newStatus) {
                    migrated[date] = newStatus;
                    if (newStatus !== rawData[date]) hasChanges = true;
                }
            }
            availabilityData = migrated;
            
            // 💾 Si hubo migración, guarda AUTOMÁTICO en Firebase (una sola vez)
            if (hasChanges) {
                console.log("🔄 Migrando datos antiguos a nuevo formato...");
                await db.collection("disponibilidad").doc("calendario").set(availabilityData);
                console.log("✅ Migración completada y guardada en Firebase!");
            }
        } else {
            availabilityData = {};
        }
    } catch (error) {
        console.error("Error al cargar/migrar datos:", error);
        availabilityData = {};
    }
    renderCalendar(calCurrentDate);
}

function saveAvailabilityToDB() {
    db.collection("disponibilidad").doc("calendario").set(availabilityData)
        .then(() => {
            console.log("¡Disponibilidad guardada en Firebase!");
        })
        .catch((error) => {
            console.error("Error al guardar en Firebase: ", error);
        });
}


// --- 4. TRADUCCIONES DE LA INTERFAZ (UI) ---
const uiTranslations = {
    es: {
        tab_home: "Inicio", tab_menu: "Carta", tab_wine: "Vinos",
        home_subtitle: "Restaurante en Santander", home_cta: "Ver Carta",
        home_reservations: "Reservas y Pedidos", home_phone_landline: "Teléfono Fijo",
        home_phone_mobile: "Móvil", home_address: "Dirección",
        home_availability_title: "Consulta nuestra disponibilidad",
        day_mon: "L", day_tue: "M", day_wed: "X", day_thu: "J", day_fri: "V", day_sat: "S", day_sun: "D",
        legend_high: "Alta", legend_low: "Baja", legend_full: "Completo",
        admin_login: "Admin",
        admin_modal_title: "Acceso Admin", admin_login_error: "Email o contraseña incorrectos.",
        admin_user: "Email", admin_pass: "Contraseña",
        admin_cancel: "Cancelar", admin_login_btn: "Entrar",
        admin_editor_title: "Editar Disponibilidad", 
        admin_start_date: "Fecha de Inicio", admin_end_date: "Fecha de Fin (Opcional)",
        admin_date_note: "Si se omite la fecha de fin, solo se modificará el día de inicio.",
        admin_status: "Estado",
        admin_clear: "Quitar", admin_logout: "Salir", admin_save: "Guardar",
        admin_save_success: "¡Guardado con éxito!",
        menu_title: "Nuestra Carta",
        menu_section_starters: "Para Picar", menu_section_fish: "Pescados", menu_section_meats: "Carnes",
        menu_footer: "Servicio de Pan 1,50 € / IVA incluido",
        wine_title: "Nuestros Vinos", wine_section_riojas: "Riojas",
        wine_section_reservas: "Reservas", wine_section_albarinos: "Albariños",
        wine_section_cavas: "Cavas y Champagnes", wine_footer: "IVA 10 % incluido",
    },
    en: {
        tab_home: "Home", tab_menu: "Menu", tab_wine: "Wines",
        home_subtitle: "Restaurant in Santander", home_cta: "View Menu",
        home_reservations: "Reservations & Orders", home_phone_landline: "Landline",
        home_phone_mobile: "Mobile", home_address: "Address",
        home_availability_title: "Check our availability",
        day_mon: "M", day_tue: "T", day_wed: "W", day_thu: "T", day_fri: "F", day_sat: "S", day_sun: "S",
        legend_high: "High", legend_low: "Low", legend_full: "Full",
        admin_login: "Admin",
        admin_modal_title: "Admin Access", admin_login_error: "Incorrect email or password.",
        admin_user: "Email", admin_pass: "Password",
        admin_cancel: "Cancel", admin_login_btn: "Login",
        admin_editor_title: "Edit Availability",
        admin_start_date: "Start Date", admin_end_date: "End Date (Optional)",
        admin_date_note: "If end date is omitted, only the start date will be modified.",
        admin_status: "Status",
        admin_clear: "Clear", admin_logout: "Logout", admin_save: "Save",
        admin_save_success: "Saved successfully!",
        menu_title: "Our Menu",
        menu_section_starters: "Starters", menu_section_fish: "Fish", menu_section_meats: "Meats",
        menu_footer: "Bread Service 1.50 € / VAT included",
        wine_title: "Our Wines", wine_section_riojas: "Riojas",
        wine_section_reservas: "Reserva Wines", wine_section_albarinos: "Albariños",
        wine_section_cavas: "Cavas & Champagnes", wine_footer: "10% VAT included",
    },
    de: { // (Traducciones para Alemán)
        tab_home: "Start", tab_menu: "Speisekarte", tab_wine: "Weine",
        home_subtitle: "Restaurant in Santander", home_cta: "Speisekarte",
        home_reservations: "Reservierungen", home_phone_landline: "Festnetz",
        home_phone_mobile: "Mobil", home_address: "Adresse",
        home_availability_title: "Verfügbarkeit prüfen",
        day_mon: "Mo", day_tue: "Di", day_wed: "Mi", day_thu: "Do", day_fri: "Fr", day_sat: "Sa", day_sun: "So",
        legend_high: "Hoch", legend_low: "Niedrig", legend_full: "Voll",
        admin_login: "Admin",
        admin_modal_title: "Admin-Zugang", admin_login_error: "E-Mail oder Passwort falsch.",
        admin_user: "E-Mail", admin_pass: "Passwort",
        admin_cancel: "Abbrechen", admin_login_btn: "Einloggen",
        admin_editor_title: "Verfügbarkeit bearbeiten",
        admin_start_date: "Startdatum", admin_end_date: "Enddatum (Optional)",
        admin_date_note: "Wenn kein Enddatum angegeben wird, wird nur das Startdatum geändert.",
        admin_status: "Status",
        admin_clear: "Löschen", admin_logout: "Ausloggen", admin_save: "Speichern",
        admin_save_success: "Gespeichert!",
        menu_title: "Speisekarte",
        menu_section_starters: "Vorspeisen", menu_section_fish: "Fischgerichte", menu_section_meats: "Fleischgerichte",
        menu_footer: "Brot 1,50 € / MwSt. inbegriffen",
        wine_title: "Unsere Weine", wine_section_riojas: "Riojas",
        wine_section_reservas: "Reservas", wine_section_albarinos: "Albariños",
        wine_section_cavas: "Cavas & Champagner", wine_footer: "10% MwSt. inbegriffen",
    },
    fr: { // (Traducciones para Francés)
        tab_home: "Accueil", tab_menu: "Carte", tab_wine: "Vins",
        home_subtitle: "Restaurant à Santander", home_cta: "Voir la Carte",
        home_reservations: "Réservations", home_phone_landline: "Fixe",
        home_phone_mobile: "Portable", home_address: "Adresse",
        home_availability_title: "Voir nos disponibilités",
        day_mon: "L", day_tue: "M", day_wed: "M", day_thu: "J", day_fri: "V", day_sat: "S", day_sun: "D",
        legend_high: "Haute", legend_low: "Faible", legend_full: "Complet",
        admin_login: "Admin",
        admin_modal_title: "Accès Admin", admin_login_error: "Email ou mot de passe incorrect.",
        admin_user: "Email", admin_pass: "Mot de passe",
        admin_cancel: "Annuler", admin_login_btn: "Entrer",
        admin_editor_title: "Éditer Disponibilité",
        admin_start_date: "Date de début", admin_end_date: "Date de fin (Optionnel)",
        admin_date_note: "Si la date de fin est omise, seule la date de début sera modifiée.",
        admin_status: "Statut",
        admin_clear: "Enlever", admin_logout: "Sortir", admin_save: "Enregistrer",
        admin_save_success: "Enregistré!",
        menu_title: "Notre Carte",
        menu_section_starters: "Entrées", menu_section_fish: "Poissons", menu_section_meats: "Viandes",
        menu_footer: "Service pain 1,50 € / TVA incluse",
        wine_title: "Nos Vins", wine_section_riojas: "Riojas",
        wine_section_reservas: "Réserves", wine_section_albarinos: "Albariños",
        wine_section_cavas: "Cavas & Champagnes", wine_footer: "10% TVA incluse",
    }
};

// --- 5. FUNCIONES ---

function updateLanguage(lang) {
    currentLang = lang;
    if (!uiTranslations[lang]) lang = "es"; 
    
    languageCodeDisplay.innerText = lang.toUpperCase();

    translatableElements.forEach(el => {
        const baseKey = el.dataset.lang;
        if (uiTranslations[lang][baseKey]) {
            el.innerText = uiTranslations[lang][baseKey];
        }
    });

    langButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.langSet === lang);
    });

    langMenu.classList.remove("show");
    
    renderCalendar(calCurrentDate);
}

function renderMenu(lang) {
    startersList.innerHTML = "";
    fishList.innerHTML = "";
    meatsList.innerHTML = "";
    
    if (!uiTranslations[lang]) lang = "es"; 
    
    for (const key in menuData) {
        const item = menuData[key];
        const name = item['name_' + lang] || item.name_es;
        const desc = item['desc_' + lang] || item.desc_es || "";
        const price = item.price;
        const li = document.createElement("li");
        li.className = "list-item";
        
        let descHTML = "";
        if (desc) {
            descHTML = `<span class="item-description">${desc}</span>`;
        }
        
        li.innerHTML = `
            <div class="item-details">
                <span class="item-name">${name}</span>
                ${descHTML}
            </div>
            <span class="item-price">${price}</span>
        `;

        if (item.category === "starters") {
            startersList.appendChild(li);
        } else if (item.category === "fish") {
            fishList.appendChild(li);
        } else if (item.category === "meats") {
            meatsList.appendChild(li);
        }
    }

    menuFooter.innerText = uiTranslations[lang]["menu_footer"];
    document.querySelector("#page-carta h1").innerText = uiTranslations[lang]["menu_title"];
}

function renderWines(lang) {
    wineRiojasList.innerHTML = "";
    wineReservasList.innerHTML = "";
    wineAlbarinosList.innerHTML = "";
    wineCavasList.innerHTML = "";
    
    if (!uiTranslations[lang]) lang = "es"; 

    for (const key in wineData) {
        const item = wineData[key];
        const name = item['name_' + lang] || item.name_es;
        
        const li = document.createElement("li");
        li.className = "list-item";
        li.innerHTML = `
            <div class="item-details">
                <span class="item-name">${name}</span>
            </div>
            <span class="item-price">${item.price}</span>
        `;

        if (item.category === "riojas") {
            wineRiojasList.appendChild(li);
        } else if (item.category === "reservas") {
            wineReservasList.appendChild(li);
        } else if (item.category === "albarinos") {
            wineAlbarinosList.appendChild(li);
        } else if (item.category === "cavas") {
            wineCavasList.appendChild(li);
        }
    }
}

function updateTabIndicator(activeTab) {
    if (!activeTab) return;
    tabIndicator.style.width = `${activeTab.offsetWidth}px`;
    tabIndicator.style.transform = `translateX(${activeTab.offsetLeft}px)`;
}

// --- LÓGICA DEL CALENDARIO ---

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth(); 
    let lang = currentLang;
    
    if (!uiTranslations[lang]) lang = "es"; 

    const monthNames = uiTranslations[lang] ? 
        [
            uiTranslations[lang].month_1 || "Enero",
            uiTranslations[lang].month_2 || "Febrero",
            uiTranslations[lang].month_3 || "Marzo",
            uiTranslations[lang].month_4 || "Abril",
            uiTranslations[lang].month_5 || "Mayo",
            uiTranslations[lang].month_6 || "Junio",
            uiTranslations[lang].month_7 || "Julio",
            uiTranslations[lang].month_8 || "Agosto",
            uiTranslations[lang].month_9 || "Septiembre",
            uiTranslations[lang].month_10 || "Octubre",
            uiTranslations[lang].month_11 || "Noviembre",
            uiTranslations[lang].month_12 || "Diciembre"
        ] : 
        ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    calMonthYear.innerText = `${monthNames[month]} ${year}`;
    calDatesGrid.innerHTML = ""; 

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const startOffset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < startOffset; i++) {
        const padDay = document.createElement("div");
        padDay.className = "cal-date other-month";
        calDatesGrid.appendChild(padDay);
    }

    const today = new Date();
    const todayDateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayEl = document.createElement("div");
        dayEl.className = "cal-date";
        
        const isoDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        
        if (isoDate === todayDateString) {
            dayEl.classList.add("today");
        }
        
        dayEl.innerHTML = `<span>${i}</span>`;
        
        const status = availabilityData[isoDate];
        if (status) {
            const dot = document.createElement("div");
            dot.className = `date-dot dot-${status}`;
            dayEl.appendChild(dot);
        }
        
        if (appState.isAdminLoggedIn) {
            dayEl.addEventListener("click", () => handleCalendarDateClick(isoDate));
        }
        
        calDatesGrid.appendChild(dayEl);
    }
}

function changeCalendarMonth(offset) {
    calCurrentDate.setMonth(calCurrentDate.getMonth() + offset);
    renderCalendar(calCurrentDate);
}

// --- LÓGICA DEL MODAL ADMIN ---

function showAdminModal() {
    adminModalOverlay.style.display = "flex";
    adminLoginView.classList.add("active");
    adminEditorView.classList.remove("active");
    adminLoginError.style.display = "none";
    adminSaveSuccess.style.display = "none";
    adminPassInput.value = "";
}

function closeAdminModal() {
    adminModalOverlay.style.display = "none";
}

function handleAdminLogin() {
    const email = adminUserInput.value; 
    const pass = adminPassInput.value;
    adminLoginError.style.display = "none";

    auth.signInWithEmailAndPassword(email, pass)
        .then((userCredential) => {
            appState.isAdminLoggedIn = true;
            appContainer.classList.add("admin-mode-active"); 
            adminLoginView.classList.remove("active");
            adminEditorView.classList.add("active");
            
            // ✅ Inicializa el mini-calendario inmediatamente
            adminMiniCurrentDate = new Date();
            adminMiniSelectedDates.clear();
            
            setTimeout(() => {
                renderAdminMiniCalendar();
                lucide.createIcons();
            }, 10);
            
            renderCalendar(calCurrentDate);
        })
        .catch((error) => {
            adminLoginError.style.display = "block";
        });
}

function handleAdminLogout() {
    auth.signOut().then(() => {
        appState.isAdminLoggedIn = false;
        appContainer.classList.remove("admin-mode-active");
        renderCalendar(calCurrentDate);
        closeAdminModal();
        adminLoginView.classList.add("active");
        adminEditorView.classList.remove("active");
    }).catch((error) => {
        console.error("Error al cerrar sesión: ", error);
    });
}

function handleCalendarDateClick(isoDate) {
    adminModalOverlay.style.display = "flex";
    adminLoginView.classList.remove("active");
    adminEditorView.classList.add("active");
    
    // 🔥 PRE-SELECCIONA el día clicado
    adminMiniSelectedDates = new Set([isoDate]);
    adminMiniCurrentDate = new Date(isoDate);
    
    // ✅ RENDERIZA el mini-calendario DESPUÉS de actualizar la fecha
    setTimeout(() => {
        renderAdminMiniCalendar();
        lucide.createIcons(); // Re-inicializa los iconos
    }, 10);
    
    updateSelectedCount();
    
    // Pre-selecciona estado actual
    const currentStatus = availabilityData[isoDate] || "none";
    const radioToCheck = document.getElementById(`status-${currentStatus}`);
    if(radioToCheck) radioToCheck.checked = true;
    
    adminSaveSuccess.style.display = "none";
}

// 🔥 RENDER MINI-CAL
function renderAdminMiniCalendar() {
    const year = adminMiniCurrentDate.getFullYear();
    const month = adminMiniCurrentDate.getMonth();
    const lang = currentLang;
    
    // Mes
    const monthNames = [
        uiTranslations[lang]?.month_1 || "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    document.getElementById("admin-mini-month-year").innerText = `${monthNames[month]} ${year}`;
    
    // Días header
    const daysHeader = document.getElementById("admin-mini-days-header");
    daysHeader.innerHTML = "";
    const dayLabels = uiTranslations[lang] ? 
        [uiTranslations[lang].day_mon, uiTranslations[lang].day_tue, uiTranslations[lang].day_wed, 
         uiTranslations[lang].day_thu, uiTranslations[lang].day_fri, uiTranslations[lang].day_sat, uiTranslations[lang].day_sun] : 
        ["L","M","X","J","V","S","D"];
    dayLabels.forEach(label => {
        const div = document.createElement("div");
        div.className = "admin-mini-day-header";
        div.innerText = label;
        daysHeader.appendChild(div);
    });
    
    // Días mes
    const datesGrid = document.getElementById("admin-mini-dates-grid");
    datesGrid.innerHTML = "";
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = (firstDay === 0) ? 6 : firstDay - 1;
    
    // Padding
    for (let i = 0; i < startOffset; i++) {
        const div = document.createElement("div");
        div.className = "admin-mini-date other-month";
        datesGrid.appendChild(div);
    }
    
    // Días
    const todayStr = new Date().toISOString().split('T')[0];
    for (let day = 1; day <= daysInMonth; day++) {
        const isoDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const div = document.createElement("div");
        div.className = `admin-mini-date ${adminMiniSelectedDates.has(isoDate) ? 'selected' : ''} ${isoDate === todayStr ? 'today' : ''}`;
        div.innerHTML = `<span>${day}</span>`;
        div.dataset.date = isoDate;
        div.dataset.weekStart = getWeekStart(isoDate); // 🔥 NUEVO: guarda el inicio de semana
        
        div.addEventListener("click", (e) => {
            if (e.shiftKey) {
                // Shift+Click = Selecciona semana completa
                selectWeek(isoDate);
            } else {
                // Click normal = Selecciona día individual
                toggleAdminMiniDate(isoDate, div);
            }
        });
        datesGrid.appendChild(div);
    }
}

// 🔥 NUEVA FUNCIÓN: Obtiene el lunes de la semana de una fecha
function getWeekStart(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDay();
    const diff = (day === 0 ? -6 : 1) - day; // Ajuste para que lunes sea inicio
    const monday = new Date(date);
    monday.setDate(date.getDate() + diff);
    return monday.toISOString().split('T')[0];
}

// 🔥 NUEVA FUNCIÓN: Selecciona todos los días de una semana
function selectWeek(isoDate) {
    const startDate = new Date(getWeekStart(isoDate));
    
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const dateStr = currentDate.toISOString().split('T')[0];
        
        // Solo selecciona días del mes actual visible
        if (currentDate.getMonth() === adminMiniCurrentDate.getMonth()) {
            adminMiniSelectedDates.add(dateStr);
        }
    }
    
    renderAdminMiniCalendar();
    lucide.createIcons();
    updateSelectedCount();
}

function toggleAdminMiniDate(isoDate, el) {
    if (adminMiniSelectedDates.has(isoDate)) {
        adminMiniSelectedDates.delete(isoDate);
        el.classList.remove("selected");
    } else {
        adminMiniSelectedDates.add(isoDate);
        el.classList.add("selected");
    }
    updateSelectedCount();
}

function updateSelectedCount() {
    const count = adminMiniSelectedDates.size;
    const langKey = count === 0 ? "0 días seleccionados" : 
                    count === 1 ? "1 día seleccionado" : 
                    `${count} días seleccionados`;
    document.getElementById("admin-selected-count").innerText = langKey;
    document.getElementById("admin-submit-save").disabled = count === 0;
}

function changeAdminMiniMonth(offset) {
    adminMiniCurrentDate.setMonth(adminMiniCurrentDate.getMonth() + offset);
    renderAdminMiniCalendar();
    lucide.createIcons(); // Re-inicializa los iconos después de cambiar mes
}

// 🔥 GUARDAR MULTI
function handleAdminSave() {
    const selectedRadio = document.querySelector('input[name="admin-status"]:checked');
    if (!selectedRadio || adminMiniSelectedDates.size === 0) {
        alert("Selecciona días Y estado.");
        return;
    }
    
    const status = selectedRadio.value;
    let savedCount = 0;
    
    adminMiniSelectedDates.forEach(isoDate => {
        if (status === 'none') {
            delete availabilityData[isoDate];
        } else {
            availabilityData[isoDate] = status;
        }
        savedCount++;
    });
    
    saveAvailabilityToDB();
    renderCalendar(calCurrentDate); // Actualiza cal principal
    
    adminSaveSuccess.style.display = "block";
    adminSaveSuccess.innerText = `¡${savedCount} día(s) guardado(s)!`;
    
    setTimeout(() => {
        adminSaveSuccess.style.display = "none";
        adminSaveSuccess.innerText = uiTranslations[currentLang].admin_save_success;
        closeAdminModal(); // Cierra auto
    }, 2000);
}

// --- 6. EVENT LISTENERS ---

langToggleButton.addEventListener("click", (e) => { e.stopPropagation(); langMenu.classList.toggle("show"); });
langButtons.forEach(btn => { btn.addEventListener("click", () => { updateLanguage(btn.dataset.langSet); }); });
document.addEventListener("click", (e) => { if (!langMenu.contains(e.target) && !langToggleButton.contains(e.target)) { langMenu.classList.remove("show"); } });

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const targetPageId = tab.dataset.page;
        pages.forEach(page => page.classList.remove("active"));
        tabs.forEach(t => t.classList.remove("active"));
        const targetPage = document.getElementById(targetPageId);
        if (targetPage) targetPage.classList.add("active");
        tab.classList.add("active");
        langMenu.classList.remove("show");
        updateTabIndicator(tab);
        appContainer.classList.toggle('on-home', targetPageId === 'page-home');
    });
});

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;
function showNextSlide() { if (slides.length === 0) return; slides[currentSlide].classList.remove("active"); currentSlide = (currentSlide + 1) % slides.length; slides[currentSlide].classList.add("active"); }
setInterval(showNextSlide, 5000);
heroCtaButton.addEventListener("click", () => { if (cartaTabButton) cartaTabButton.click(); });

calPrevBtn.addEventListener("click", () => changeCalendarMonth(-1));
calNextBtn.addEventListener("click", () => changeCalendarMonth(1));

adminLoginBtn.addEventListener("click", showAdminModal);
adminCancelLoginBtn.addEventListener("click", closeAdminModal);
adminModalOverlay.addEventListener("click", (e) => {
    if (e.target === adminModalOverlay) {
        closeAdminModal();
    }
});

adminSubmitLoginBtn.addEventListener("click", handleAdminLogin);
adminSubmitSaveBtn.addEventListener("click", handleAdminSave);
adminLogoutBtn.addEventListener("click", handleAdminLogout);

// 🔥 ADMIN MINI-CAL EVENTS
document.getElementById("admin-mini-prev").addEventListener("click", () => changeAdminMiniMonth(-1));
document.getElementById("admin-mini-next").addEventListener("click", () => changeAdminMiniMonth(1));
document.getElementById("admin-clear-selection").addEventListener("click", () => {
    adminMiniSelectedDates.clear();
    renderAdminMiniCalendar();
    updateSelectedCount();
});

// 🗑️ LIMPIAR TODO EL CALENDARIO
document.getElementById("admin-clear-all-btn").addEventListener("click", () => {
    if (confirm("⚠️ ¿Estás seguro de que quieres ELIMINAR TODOS los estados del calendario?\n\nEsta acción NO se puede deshacer.")) {
        availabilityData = {};
        saveAvailabilityToDB();
        renderCalendar(calCurrentDate);
        renderAdminMiniCalendar();
        lucide.createIcons();
        alert("✅ Todos los estados han sido eliminados del calendario.");
    }
});

// --- 7. INICIALIZACIÓN ---
updateLanguage(currentLang);
renderMenu(currentLang);
renderWines(currentLang);

const initialActiveTab = document.querySelector(".tab-item.active");
updateTabIndicator(initialActiveTab);

// Carga los datos de Firebase y LUEGO renderiza el calendario
loadAvailabilityFromDB();