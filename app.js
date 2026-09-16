// Omar Coaching - Hypertrophy & Bulk Tracker Engine v2.0

// Default Target Constants
const DEFAULT_TARGETS = {
    calories: 2770,
    protein: 167,
    carbs: 344,
    fat: 77,
    water: 3.5,
    steps: 7500,
    weeklyGainMin: 0.15, // kg
    weeklyGainMax: 0.35  // kg
};

// Default Preset Meals
const DEFAULT_PRESET_MEALS = {
    pancake: {
        id: "pancake",
        name: "Kahvaltı Pankek",
        desc: "60g Pirinç unu, 1 Muz, 30g Bal, 30g Fıstık ezmesi, 3 Yumurta",
        cal: 810, p: 31, c: 106, f: 31
    },
    preworkout: {
        id: "preworkout",
        name: "Antrenmandan 2 Saat Önce",
        desc: "150g Çiğ Pirinç (~400g pişmiş) + 200g Tavuk Göğsü + H.Cevizi Yağı",
        cal: 850, p: 56, c: 118, f: 16
    },
    postworkout: {
        id: "postworkout",
        name: "Antrenman Sonrası (Post-Workout)",
        desc: "75g Çiğ Pirinç + 150g Tavuk Göğsü + H.Cevizi Yağı",
        cal: 550, p: 40, c: 60, f: 15
    },
    dinner: {
        id: "dinner",
        name: "Akşam / Gece Öğünü",
        desc: "75g Çiğ Pirinç + 150g Tavuk Göğsü + H.Cevizi Yağı",
        cal: 550, p: 40, c: 60, f: 15
    }
};

// Default Supplements Protocol
const DEFAULT_SUPPLEMENTS = [
    { id: "supp_creatine", name: "Kreatin Monohidrat", dosage: "5 gram", timing: "Sabah / Kahvaltı" },
    { id: "supp_whey", name: "Whey Protein", dosage: "1 Ölçek (25g)", timing: "Antrenman Sonrası" },
    { id: "supp_omega3", name: "Omega 3 Balık Yağı", dosage: "2 Kapsül (EPA/DHA)", timing: "Yemekle Birlikte" },
    { id: "supp_d3k2", name: "Vitamin D3 + K2", dosage: "5000 IU / Damla", timing: "Sabah / Kahvaltı" },
    { id: "supp_magnesium", name: "Magnezyum Bisglisinat", dosage: "200-400 mg", timing: "Gece / Yatmadan Önce" },
    { id: "supp_preworkout", name: "Pre-Workout / Kafein", dosage: "1 Porsiyon", timing: "Antrenmandan 30dk Önce" }
];

// Predefined 5-Day Workout Plan
const WORKOUT_PLAN = {
    pzt: {
        title: "Push 1 (İtiş + Triceps)",
        desc: "Göğüs Gücü + Lateral Triceps + Yan Omuz",
        exercises: [
            { id: "pzt_1", name: "Incline Dumbbell Press", target: "2 Çalışma Seti (6-9 Tekrar)", defaultSets: 2, defaultSeat: "Açı: 30°", isTopSet: true },
            { id: "pzt_2", name: "Plate Loaded Chest Press", target: "2 Çalışma Seti (8-10 Tekrar)", defaultSets: 2, defaultSeat: "Koltuk: 4", isTopSet: true },
            { id: "pzt_3", name: "Pec Deck Fly", target: "2 Çalışma Seti (10-12 Tekrar)", defaultSets: 2, defaultSeat: "Koltuk: 3, Kol: 2", isTopSet: false },
            { id: "pzt_4", name: "Düz Bar Triceps Pushdown", target: "2-3 Set (Lateral Baş, Ağır & Sıkı)", defaultSets: 3, defaultSeat: "Kablo: En Üst", isTopSet: true },
            { id: "pzt_5", name: "Tek Kol Makine Lateral", target: "3 Set (Yan Omuz İzolasyon)", defaultSets: 3, defaultSeat: "Koltuk: 5", isTopSet: false }
        ]
    },
    sal: {
        title: "Pull 1 (Lat Genişlik + Arka Omuz)",
        desc: "Arka Omuz Öncelikli + Dikey Çekiş + Kollar",
        exercises: [
            { id: "sal_1", name: "Reverse Pec Deck Fly (Arka Omuz)", target: "3 Set (Skapula Sabit, 10-12 Rep)", defaultSets: 3, defaultSeat: "Pede Göğüs Dayalı", isTopSet: true },
            { id: "sal_2", name: "High Row Tek Kol (Lat Odak)", target: "2 Set (6-8 Tekrar, Dirsek Gövdeye)", defaultSets: 2, defaultSeat: "Koltuk: 3, Göğüs Pedi: 2", isTopSet: true },
            { id: "sal_3", name: "T-Bar Row", target: "2 Sert Çalışma Seti (8-10 Tekrar)", defaultSets: 2, defaultSeat: "Göğüs Destekli", isTopSet: true },
            { id: "sal_4", name: "Geniş Tutuş Lat Pulldown", target: "2 Set (Üst Lat / Teres Major)", defaultSets: 2, defaultSeat: "Bacak Pedi: 4", isTopSet: false },
            { id: "sal_5", name: "Dumbbell Shrug", target: "2 Set (Maks Ağırlık / Maks Rep)", defaultSets: 2, defaultSeat: "Ayakta", isTopSet: false },
            { id: "sal_6", name: "Barbell Biceps Curl", target: "2 Set (Ağır Biceps & Ön Kol)", defaultSets: 2, defaultSeat: "Düz Bar", isTopSet: true },
            { id: "sal_7", name: "Dumbbell Curl + Ters Tutuş V-Bar", target: "2'şer Set (Brachialis / Ön Kol)", defaultSets: 2, defaultSeat: "Kablo Alt", isTopSet: false }
        ]
    },
    car: {
        title: "Legs + Triceps Frekansı",
        desc: "Triceps İzolasyon + Cerrahi Quad + Hamstring",
        exercises: [
            { id: "car_1", name: "Halat Triceps Pushdown", target: "2 Set (Taze Enerjiyle İzolasyon)", defaultSets: 2, defaultSeat: "Kablo: Üst", isTopSet: true },
            { id: "car_2", name: "Hack Squat (Quad Kralı)", target: "2 Ağır Set (3sn iniş, Tam Derinlik)", defaultSets: 2, defaultSeat: "Ayaklar Dar & Altta", isTopSet: true },
            { id: "car_3", name: "Leg Press (Quad Odaklı)", target: "2 Sert Çalışma Seti", defaultSets: 2, defaultSeat: "Platform Altı", isTopSet: true },
            { id: "car_4", name: "Dumbbell RDL (Hamstring/Glute)", target: "2 Sıkı Set (8-10 Tekrar)", defaultSets: 2, defaultSeat: "Düz Zemin", isTopSet: false },
            { id: "car_5", name: "Adductor Machine (Bacak İçi)", target: "2-3 Set (Ön Kalınlık, 12-15 Rep)", defaultSets: 3, defaultSeat: "Geniş Açı: 4", isTopSet: false },
            { id: "car_6", name: "Leg Extension", target: "1 Bitirici Pump Seti", defaultSets: 1, defaultSeat: "Maks Yanma", isTopSet: false }
        ]
    },
    per: {
        title: "OFF (Tam Dinlenme)",
        desc: "Kas Onarımı, Kalori ve Su Alımına Devam",
        exercises: []
    },
    cum: {
        title: "Push 2 (Üst Omuz/Triceps)",
        desc: "Arka Omuz Başlangıç + Makine İtiş + Uzun Baş Triceps",
        exercises: [
            { id: "cum_1", name: "Arka Omuz Fly (Reverse Pec Deck)", target: "3 Set (Taze Sinir Sistemiyle)", defaultSets: 3, defaultSeat: "Koltuk: 3", isTopSet: true },
            { id: "cum_2", name: "Makine Chest Press", target: "2 Sert Set (Derin Esneme)", defaultSets: 2, defaultSeat: "Koltuk: 4", isTopSet: true },
            { id: "cum_3", name: "Pec Fly", target: "2 Set (Göğüs Bitirici)", defaultSets: 2, defaultSeat: "Açı: 2", isTopSet: false },
            { id: "cum_4", name: "Overhead Dual Cable Triceps Extension", target: "3 Set (Uzun Baş Kütle İnşası)", defaultSets: 3, defaultSeat: "Kablo Omuz Boyu", isTopSet: true },
            { id: "cum_5", name: "Tek Kol Makine Lateral", target: "3 Set (Yan Omuz 3D)", defaultSets: 3, defaultSeat: "Koltuk: 5", isTopSet: false }
        ]
    },
    cmt: {
        title: "Pull 2 (Sırt Kalınlık & Trapez)",
        desc: "Orta Sırt + Trapez + Biceps & Ön Kol",
        exercises: [
            { id: "cmt_1", name: "High Row Tek Kol", target: "2 Set (Lat Odaklı)", defaultSets: 2, defaultSeat: "Koltuk: 3", isTopSet: true },
            { id: "cmt_2", name: "T-Bar Row", target: "2 Ağır Çalışma Seti", defaultSets: 2, defaultSeat: "Geniş Tutuş", isTopSet: true },
            { id: "cmt_3", name: "Chest-Supported Wide Grip Row", target: "2 Set (Orta-Üst Sırt / Rhomboid)", defaultSets: 2, defaultSeat: "Koltuk: 2, Göğüs Pedi: 3", isTopSet: true },
            { id: "cmt_4", name: "Dumbbell Shrug", target: "2 Set (Maks Ağırlık / Maks Rep)", defaultSets: 2, defaultSeat: "Ayakta", isTopSet: false },
            { id: "cmt_5", name: "Barbell Curl + DB Curl + Ters V-Bar", target: "2'şer Set (Kol / Ön Kol Paketi)", defaultSets: 2, defaultSeat: "Kablo & Serbest", isTopSet: true }
        ]
    },
    paz: {
        title: "OFF (Tam Dinlenme & Haftalık Check-in)",
        desc: "Tartı Ortalaması Hesaplama & Yeni Hafta Hazırlığı",
        exercises: []
    }
};

// Global App State
let appData = {
    targets: { ...DEFAULT_TARGETS },
    pinnedQuickActions: ["water", "pancake", "steps_1000", "steps_manual"],
    customPresets: { ...DEFAULT_PRESET_MEALS },
    supplements: [...DEFAULT_SUPPLEMENTS],
    supplementsLog: {}, // { "YYYY-MM-DD": { suppId: true/false } }
    todayNutrition: {
        date: new Date().toISOString().split('T')[0],
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        water: 0,
        steps: 0,
        meals: []
    },
    workoutLogs: {}, // { exId: [ { weight, reps, rir, date } ] }
    exerciseSetsCount: {}, // { exId: number }
    seatSettings: {}, // { exId: "Açı: 30°" }
    weightHistory: [] // [ { date: "YYYY-MM-DD", weight: 74.0 } ]
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    loadDataFromStorage();
    checkAndResetDailyNutrition();
    updateDateDisplay();
    renderDashboard();
    renderWorkoutView(currentActiveDay);
    renderNutritionView();
    renderSupplementsView();
    renderScaleView();
    updateCoachReport();
    initSettingsForm();
});

// Storage Management
function loadDataFromStorage() {
    const saved = localStorage.getItem("LEAN_BULK_APP_DATA");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appData = {
                ...appData,
                ...parsed,
                targets: { ...DEFAULT_TARGETS, ...(parsed.targets || {}) },
                customPresets: { ...DEFAULT_PRESET_MEALS, ...(parsed.customPresets || {}) },
                supplements: parsed.supplements && parsed.supplements.length > 0 ? parsed.supplements : [...DEFAULT_SUPPLEMENTS],
                pinnedQuickActions: parsed.pinnedQuickActions || ["water", "pancake", "steps_1000", "steps_manual"],
                todayNutrition: { ...appData.todayNutrition, ...(parsed.todayNutrition || {}) },
                supplementsLog: parsed.supplementsLog || {},
                workoutLogs: parsed.workoutLogs || {},
                exerciseSetsCount: parsed.exerciseSetsCount || {},
                seatSettings: parsed.seatSettings || {},
                weightHistory: parsed.weightHistory || []
            };
        } catch (e) {
            console.error("Storage load error:", e);
        }
    }
}

function saveDataToStorage() {
    localStorage.setItem("LEAN_BULK_APP_DATA", JSON.stringify(appData));
}

function checkAndResetDailyNutrition() {
    const todayStr = new Date().toISOString().split('T')[0];
    if (appData.todayNutrition.date !== todayStr) {
        appData.todayNutrition = {
            date: todayStr,
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            water: 0,
            steps: 0,
            meals: []
        };
        saveDataToStorage();
    }
}

// Navigation Tabs
function navigateToTab(tabName) {
    document.querySelectorAll(".tab-view").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));

    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) targetView.classList.add("active");

    const tabs = ["dashboard", "workout", "nutrition", "supplements", "scale"];
    const activeIndex = tabs.indexOf(tabName);
    if (activeIndex !== -1) {
        document.querySelectorAll(".nav-item")[activeIndex].classList.add("active");
    }

    if (tabName === "scale") updateCoachReport();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Helpers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");
        if (modalId === "modal-settings") initSettingsForm();
        if (modalId === "modal-quick-actions") renderQuickActionsConfig();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
}

// Toast Alert
function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// Date & Dynamic Header
function updateDateDisplay() {
    const today = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayKeys = ["paz", "pzt", "sal", "car", "per", "cum", "cmt"];
    const currentDayKey = dayKeys[today.getDay()];

    const dateStr = today.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
    const latestWeight = (appData.weightHistory && appData.weightHistory.length > 0)
        ? appData.weightHistory[0].weight.toFixed(1)
        : "74.0";

    const headerEl = document.getElementById("header-date");
    if (headerEl) {
        headerEl.innerText = `${dateStr} (${days[today.getDay()]}) • ${latestWeight} kg Lean Bulk`;
    }

    // Today's workout preview on dashboard
    const todayWorkout = WORKOUT_PLAN[currentDayKey];
    if (todayWorkout) {
        const dName = document.getElementById("today-day-name");
        const wTitle = document.getElementById("today-workout-title");
        const wDesc = document.getElementById("today-workout-desc");
        if (dName) dName.innerText = days[today.getDay()];
        if (wTitle) wTitle.innerText = todayWorkout.title;
        if (wDesc) wDesc.innerText = todayWorkout.desc;
    }

    // Dynamic Coach Tip based on current day & targets
    const coachTips = {
        pzt: "Göğüs & Triceps günü! Incline Dumbbell'da ilk seti tükenişe (RIR 0) kadar sürükle.",
        sal: "Sırt & Arka Omuz günü! Reverse Pec Deck'te skapulayı sabitleyip arka omuza izole yüklen.",
        car: "Bacak & Triceps izolasyon günü! Hack Squat'ta 3 saniye negatif tempoyu koru.",
        per: "OFF Günü! Kas lifleri tam dinlenmede büyür. Kalori ve suyunu eksiksiz al.",
        cum: "Push 2! Arka omuzla taze başla, Overhead Triceps ile uzun başı parçala.",
        cmt: "Pull 2! Orta sırt ve trapezlere yüklen. Dumbbell Shrug'da tepe sıkışmayı hisset.",
        paz: "OFF & Check-in Günü! Haftalık tartı ortalamanı kontrol et ve yeni haftayı planla."
    };
    const tipEl = document.getElementById("daily-coach-tip");
    if (tipEl) tipEl.innerText = coachTips[currentDayKey] || "Disiplinini koru, hedeflerine sadık kal!";
}

// ==================== TARGETS & SETTINGS ====================

function initSettingsForm() {
    const t = appData.targets;
    document.getElementById("setting-calories").value = t.calories;
    document.getElementById("setting-protein").value = t.protein;
    document.getElementById("setting-carbs").value = t.carbs;
    document.getElementById("setting-fat").value = t.fat;
    document.getElementById("setting-water").value = t.water;
    document.getElementById("setting-steps").value = t.steps;
    document.getElementById("setting-gain-min").value = t.weeklyGainMin;
    document.getElementById("setting-gain-max").value = t.weeklyGainMax;
}

function saveCustomTargets() {
    const cal = parseInt(document.getElementById("setting-calories").value) || DEFAULT_TARGETS.calories;
    const p = parseInt(document.getElementById("setting-protein").value) || DEFAULT_TARGETS.protein;
    const c = parseInt(document.getElementById("setting-carbs").value) || DEFAULT_TARGETS.carbs;
    const f = parseInt(document.getElementById("setting-fat").value) || DEFAULT_TARGETS.fat;
    const water = parseFloat(document.getElementById("setting-water").value) || DEFAULT_TARGETS.water;
    const steps = parseInt(document.getElementById("setting-steps").value) || DEFAULT_TARGETS.steps;
    const gainMin = parseFloat(document.getElementById("setting-gain-min").value) || DEFAULT_TARGETS.weeklyGainMin;
    const gainMax = parseFloat(document.getElementById("setting-gain-max").value) || DEFAULT_TARGETS.weeklyGainMax;

    appData.targets = {
        calories: cal,
        protein: p,
        carbs: c,
        fat: f,
        water: water,
        steps: steps,
        weeklyGainMin: gainMin,
        weeklyGainMax: gainMax
    };

    saveDataToStorage();
    renderDashboard();
    closeModal('modal-settings');
    showToast("Hedefler başarıyla güncellendi! 🎯");
}

// ==================== DASHBOARD & QUICK ACTIONS ====================

function renderDashboard() {
    const n = appData.todayNutrition;
    const t = appData.targets;

    // Macro summaries
    document.getElementById("consumed-cal").innerText = Math.round(n.calories).toLocaleString('tr-TR');
    document.getElementById("target-cal-lbl").innerText = ` / ${t.calories.toLocaleString('tr-TR')} kcal`;
    document.getElementById("macro-status-badge").innerText = `${t.calories.toLocaleString('tr-TR')} kcal`;
    document.getElementById("remaining-cal").innerText = Math.max(0, Math.round(t.calories - n.calories)).toLocaleString('tr-TR');
    
    document.getElementById("water-consumed").innerText = (n.water || 0).toFixed(1);
    document.getElementById("target-water-lbl").innerText = t.water.toFixed(1);

    // Steps
    const stepsCount = n.steps || 0;
    document.getElementById("steps-val").innerText = stepsCount.toLocaleString('tr-TR');
    document.getElementById("target-steps-lbl").innerText = t.steps.toLocaleString('tr-TR');
    const stepsPct = Math.min(100, (stepsCount / t.steps) * 100);
    const barSteps = document.getElementById("bar-steps");
    if (barSteps) barSteps.style.width = `${stepsPct}%`;

    // Macro Progress Bars
    document.getElementById("consumed-p").innerText = Math.round(n.protein);
    document.getElementById("target-p-lbl").innerText = ` / ${t.protein}g`;
    document.getElementById("consumed-c").innerText = Math.round(n.carbs);
    document.getElementById("target-c-lbl").innerText = ` / ${t.carbs}g`;
    document.getElementById("consumed-f").innerText = Math.round(n.fat);
    document.getElementById("target-f-lbl").innerText = ` / ${t.fat}g`;

    const pPct = Math.min(100, (n.protein / t.protein) * 100);
    const cPct = Math.min(100, (n.carbs / t.carbs) * 100);
    const fPct = Math.min(100, (n.fat / t.fat) * 100);

    document.getElementById("bar-p").style.width = `${pPct}%`;
    document.getElementById("bar-c").style.width = `${cPct}%`;
    document.getElementById("bar-f").style.width = `${fPct}%`;

    renderDashboardQuickActions();
    renderDashboardSupplementsSummary();
}

// Render Pinned Quick Action Buttons on Dashboard
function renderDashboardQuickActions() {
    const container = document.getElementById("dashboard-quick-actions-container");
    if (!container) return;

    const pinned = appData.pinnedQuickActions || ["water", "pancake", "steps_1000", "steps_manual"];
    let buttonsHtml = "";

    pinned.forEach(key => {
        if (key === "water") {
            buttonsHtml += `<button class="quick-action-btn" onclick="addWater(0.5)"><i class="fa-solid fa-glass-water"></i> +500ml Su</button>`;
        } else if (key === "steps_1000") {
            buttonsHtml += `<button class="quick-action-btn" onclick="addSteps(1000)"><i class="fa-solid fa-shoe-prints"></i> +1.000 Adım</button>`;
        } else if (key === "steps_manual") {
            buttonsHtml += `<button class="quick-action-btn" onclick="promptCustomSteps()"><i class="fa-solid fa-pen"></i> Manuel Adım</button>`;
        } else if (appData.customPresets && appData.customPresets[key]) {
            const preset = appData.customPresets[key];
            buttonsHtml += `<button class="quick-action-btn" onclick="logPresetMeal('${key}')"><i class="fa-solid fa-plus"></i> ${preset.name}</button>`;
        }
    });

    if (buttonsHtml === "") {
        buttonsHtml = `<p class="text-muted" style="grid-column: span 2; font-size:0.75rem; text-align:center;">Hızlı buton seçilmedi. 'Özelleştir' butonundan ekleyebilirsin.</p>`;
    }

    container.innerHTML = buttonsHtml;
}

// Modal for Quick Actions Configuration
function renderQuickActionsConfig() {
    const listContainer = document.getElementById("quick-actions-toggle-list");
    if (!listContainer) return;

    const pinned = appData.pinnedQuickActions || [];

    const builtInActions = [
        { key: "water", label: "+500ml Su Ekle", icon: "fa-glass-water" },
        { key: "steps_1000", label: "+1.000 Adım Ekle", icon: "fa-shoe-prints" },
        { key: "steps_manual", label: "Manuel Adım Girişi", icon: "fa-pen" }
    ];

    let html = "";
    builtInActions.forEach(act => {
        const checked = pinned.includes(act.key) ? "checked" : "";
        html += `
            <div class="toggle-item">
                <span><i class="fa-solid ${act.icon}" style="margin-right:8px;"></i> ${act.label}</span>
                <input type="checkbox" value="${act.key}" class="qa-chk" ${checked}>
            </div>
        `;
    });

    // Add preset meals to toggle list
    Object.keys(appData.customPresets || {}).forEach(key => {
        const p = appData.customPresets[key];
        const checked = pinned.includes(key) ? "checked" : "";
        html += `
            <div class="toggle-item">
                <span><i class="fa-solid fa-utensils" style="margin-right:8px;"></i> ${p.name} (${p.cal} kcal)</span>
                <input type="checkbox" value="${key}" class="qa-chk" ${checked}>
            </div>
        `;
    });

    listContainer.innerHTML = html;
}

function saveQuickActionsConfig() {
    const chks = document.querySelectorAll(".qa-chk:checked");
    const selected = Array.from(chks).map(c => c.value);
    appData.pinnedQuickActions = selected;
    saveDataToStorage();
    renderDashboard();
    closeModal('modal-quick-actions');
    showToast("Hızlı işlemler güncellendi! ⚡");
}

function addSteps(amount) {
    appData.todayNutrition.steps = (appData.todayNutrition.steps || 0) + amount;
    saveDataToStorage();
    renderDashboard();
    showToast(`+${amount.toLocaleString('tr-TR')} Adım Eklendi 👟`);
}

function promptCustomSteps() {
    const current = appData.todayNutrition.steps || 0;
    const input = prompt("Bugünkü toplam adım sayını girin:", current > 0 ? current : "7500");
    if (input !== null) {
        const val = parseInt(input.replace(/[^0-9]/g, '')) || 0;
        appData.todayNutrition.steps = val;
        saveDataToStorage();
        renderDashboard();
        showToast(`${val.toLocaleString('tr-TR')} Adım Kaydedildi 👟`);
    }
}

function addWater(amount) {
    appData.todayNutrition.water = (appData.todayNutrition.water || 0) + amount;
    saveDataToStorage();
    renderDashboard();
    showToast(`+${amount * 1000}ml Su Eklendi 💧`);
}

// Mini Supplement Checklist on Dashboard
function renderDashboardSupplementsSummary() {
    const container = document.getElementById("dashboard-supplements-summary");
    if (!container) return;

    const todayStr = appData.todayNutrition.date || new Date().toISOString().split('T')[0];
    const dailyLog = appData.supplementsLog[todayStr] || {};
    const supps = appData.supplements || [];

    if (supps.length === 0) {
        container.innerHTML = `<p class="text-muted" style="font-size:0.75rem;">Henüz suplament eklenmedi.</p>`;
        return;
    }

    container.innerHTML = supps.slice(0, 4).map(s => {
        const isTaken = !!dailyLog[s.id];
        return `
            <div class="supplement-card ${isTaken ? 'taken' : ''}" onclick="toggleSupplement('${s.id}')">
                <div class="supp-left">
                    <button class="supp-chk-btn"><i class="fa-solid fa-check"></i></button>
                    <div class="supp-info">
                        <strong>${s.name}</strong>
                        <span>${s.dosage} • <small>${s.timing}</small></span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// ==================== CUSTOM MEAL BUILDER & PRESETS ====================

function calculateMealCalories() {
    const p = parseFloat(document.getElementById("meal-p").value) || 0;
    const c = parseFloat(document.getElementById("meal-c").value) || 0;
    const f = parseFloat(document.getElementById("meal-f").value) || 0;
    const totalCal = Math.round((p * 4) + (c * 4) + (f * 9));
    document.getElementById("meal-calc-cal").innerText = `${totalCal} kcal`;
    return totalCal;
}

function submitCustomMeal(addToToday = true) {
    const name = document.getElementById("meal-name").value.trim();
    const desc = document.getElementById("meal-desc").value.trim();
    const p = parseFloat(document.getElementById("meal-p").value) || 0;
    const c = parseFloat(document.getElementById("meal-c").value) || 0;
    const f = parseFloat(document.getElementById("meal-f").value) || 0;
    const cal = calculateMealCalories();
    const savePreset = document.getElementById("save-as-preset-chk").checked;

    if (!name) {
        alert("Lütfen bir öğün/besin adı girin.");
        return;
    }

    const mealId = "custom_" + Date.now();

    // If saving as preset library item
    if (savePreset) {
        if (!appData.customPresets) appData.customPresets = {};
        appData.customPresets[mealId] = {
            id: mealId,
            name: name,
            desc: desc || `${p}g P, ${c}g C, ${f}g F`,
            cal: cal, p: p, c: c, f: f
        };
    }

    // Add to today's log
    if (addToToday) {
        appData.todayNutrition.calories += cal;
        appData.todayNutrition.protein += p;
        appData.todayNutrition.carbs += c;
        appData.todayNutrition.fat += f;

        appData.todayNutrition.meals.push({
            id: mealId,
            name: name,
            desc: desc,
            cal: cal,
            p: p,
            c: c,
            f: f,
            time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        });
    }

    // Reset inputs
    document.getElementById("meal-name").value = "";
    document.getElementById("meal-desc").value = "";
    document.getElementById("meal-p").value = "";
    document.getElementById("meal-c").value = "";
    document.getElementById("meal-f").value = "";
    document.getElementById("meal-calc-cal").innerText = "0 kcal";

    saveDataToStorage();
    renderDashboard();
    renderNutritionView();
    closeModal('modal-meal-builder');
    showToast(`${name} başarıyla eklendi! 🍱`);
}

function logPresetMeal(key) {
    const meal = (appData.customPresets && appData.customPresets[key]) || DEFAULT_PRESET_MEALS[key];
    if (!meal) return;

    appData.todayNutrition.calories += meal.cal;
    appData.todayNutrition.protein += meal.p;
    appData.todayNutrition.carbs += meal.c;
    appData.todayNutrition.fat += meal.f;

    appData.todayNutrition.meals.push({
        id: "log_" + Date.now(),
        name: meal.name,
        desc: meal.desc,
        cal: meal.cal,
        p: meal.p,
        c: meal.c,
        f: meal.f,
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    });

    saveDataToStorage();
    renderDashboard();
    renderNutritionView();
    showToast(`${meal.name} Eklendi! 🔥`);
}

function logAllDailyPresets() {
    Object.keys(appData.customPresets || DEFAULT_PRESET_MEALS).forEach(key => {
        logPresetMeal(key);
    });
    showToast("Tüm Günlük Şablon Eklendi! 🎯");
}

function deleteLoggedMeal(mealId) {
    const idx = appData.todayNutrition.meals.findIndex(m => m.id === mealId);
    if (idx === -1) return;

    const removed = appData.todayNutrition.meals[idx];
    appData.todayNutrition.calories = Math.max(0, appData.todayNutrition.calories - removed.cal);
    appData.todayNutrition.protein = Math.max(0, appData.todayNutrition.protein - removed.p);
    appData.todayNutrition.carbs = Math.max(0, appData.todayNutrition.carbs - removed.c);
    appData.todayNutrition.fat = Math.max(0, appData.todayNutrition.fat - removed.f);

    appData.todayNutrition.meals.splice(idx, 1);
    saveDataToStorage();
    renderDashboard();
    renderNutritionView();
    showToast(`${removed.name} silindi, makrolar güncellendi 🗑️`);
}

function deletePreset(key) {
    if (confirm("Bu hazır şablonu silmek istiyor musunuz?")) {
        delete appData.customPresets[key];
        appData.pinnedQuickActions = (appData.pinnedQuickActions || []).filter(k => k !== key);
        saveDataToStorage();
        renderNutritionView();
        renderDashboard();
        showToast("Şablon silindi.");
    }
}

function clearTodayMeals() {
    if (confirm("Bugünkü tüm beslenme kayıtlarını sıfırlamak istiyor musun?")) {
        appData.todayNutrition.calories = 0;
        appData.todayNutrition.protein = 0;
        appData.todayNutrition.carbs = 0;
        appData.todayNutrition.fat = 0;
        appData.todayNutrition.meals = [];
        saveDataToStorage();
        renderDashboard();
        renderNutritionView();
        showToast("Bugünkü beslenme sıfırlandı.");
    }
}

function renderNutritionView() {
    // 1. Render Preset Meals Library
    const presetContainer = document.getElementById("preset-meals-container");
    if (presetContainer) {
        const presets = appData.customPresets || DEFAULT_PRESET_MEALS;
        presetContainer.innerHTML = Object.keys(presets).map(key => {
            const m = presets[key];
            const isCustom = key.startsWith("custom_");
            return `
                <div class="meal-preset-item">
                    <div class="meal-preset-details">
                        <strong>${m.name}</strong>
                        <span>${m.desc || ''}</span>
                        <small>${m.cal} kcal • ${m.p}g P • ${m.c}g C • ${m.f}g F</small>
                    </div>
                    <div style="display:flex; align-items:center; gap:6px;">
                        ${isCustom ? `<button class="btn-delete-item" onclick="deletePreset('${key}')" title="Şablonu Sil"><i class="fa-solid fa-trash"></i></button>` : ''}
                        <button class="btn-circle-add" onclick="logPresetMeal('${key}')" title="Bugüne Ekle"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;
        }).join("");
    }

    // 2. Render Today's Logged Foods List with Individual Deletion
    const loggedContainer = document.getElementById("today-logged-foods-list");
    if (loggedContainer) {
        const meals = appData.todayNutrition.meals || [];
        if (meals.length === 0) {
            loggedContainer.innerHTML = `<p class="text-muted" style="text-align:center; padding:15px; font-size:0.8rem;">Henüz öğün eklenmedi.</p>`;
            return;
        }

        loggedContainer.innerHTML = meals.map(m => `
            <div class="history-item">
                <div>
                    <strong>${m.name}</strong> <small style="color:var(--text-muted)">(${m.time})</small>
                    <div style="font-size:0.7rem; color:var(--text-secondary)">${m.p}g P • ${m.c}g C • ${m.f}g F</div>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <strong style="color:#ffffff; font-size:0.85rem;">+${m.cal} kcal</strong>
                    <button class="btn-delete-item" onclick="deleteLoggedMeal('${m.id}')" title="Öğünü Sil">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `).join("");
    }
}

// ==================== SUPPLEMENTS PROTOCOL ====================

function renderSupplementsView() {
    const container = document.getElementById("supplements-full-list");
    if (!container) return;

    const todayStr = appData.todayNutrition.date || new Date().toISOString().split('T')[0];
    const dailyLog = appData.supplementsLog[todayStr] || {};
    const supps = appData.supplements || [];

    if (supps.length === 0) {
        container.innerHTML = `<p class="text-muted" style="text-align:center; padding:20px; font-size:0.8rem;">Kayıtlı suplement bulunamadı. "+ Takviye Ekle" butonundan ekleyebilirsin.</p>`;
        return;
    }

    container.innerHTML = supps.map(s => {
        const isTaken = !!dailyLog[s.id];
        return `
            <div class="supplement-card ${isTaken ? 'taken' : ''}">
                <div class="supp-left" onclick="toggleSupplement('${s.id}')" style="cursor:pointer; flex:1;">
                    <button class="supp-chk-btn"><i class="fa-solid fa-check"></i></button>
                    <div class="supp-info">
                        <strong>${s.name}</strong>
                        <span>${s.dosage}</span>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="supp-timing-badge">${s.timing}</span>
                    <button class="btn-delete-item" onclick="deleteSupplement('${s.id}')" title="Sil"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    }).join("");
}

function toggleSupplement(suppId) {
    const todayStr = appData.todayNutrition.date || new Date().toISOString().split('T')[0];
    if (!appData.supplementsLog[todayStr]) appData.supplementsLog[todayStr] = {};

    appData.supplementsLog[todayStr][suppId] = !appData.supplementsLog[todayStr][suppId];
    saveDataToStorage();
    renderSupplementsView();
    renderDashboardSupplementsSummary();
    showToast(appData.supplementsLog[todayStr][suppId] ? "Takviye alındı olarak işaretlendi! 💊" : "İşaret kaldırıldı.");
}

function submitNewSupplement() {
    const name = document.getElementById("supp-name").value.trim();
    const dosage = document.getElementById("supp-dosage").value.trim();
    const timing = document.getElementById("supp-timing").value;

    if (!name) {
        alert("Lütfen bir suplement adı girin.");
        return;
    }

    const newSupp = {
        id: "supp_" + Date.now(),
        name: name,
        dosage: dosage || "1 Porsiyon",
        timing: timing
    };

    if (!appData.supplements) appData.supplements = [];
    appData.supplements.push(newSupp);

    document.getElementById("supp-name").value = "";
    document.getElementById("supp-dosage").value = "";

    saveDataToStorage();
    renderSupplementsView();
    renderDashboardSupplementsSummary();
    closeModal('modal-add-supplement');
    showToast(`${name} eklendi! 💊`);
}

function deleteSupplement(suppId) {
    if (confirm("Bu suplementi listeden çıkarmak istiyor musunuz?")) {
        appData.supplements = (appData.supplements || []).filter(s => s.id !== suppId);
        saveDataToStorage();
        renderSupplementsView();
        renderDashboardSupplementsSummary();
        showToast("Suplement silindi.");
    }
}

// ==================== WORKOUT LOGBOOK & OVERLOAD ENGINE ====================

let currentActiveDay = "pzt";

function selectWorkoutDay(dayKey) {
    currentActiveDay = dayKey;
    document.querySelectorAll(".day-pill").forEach(btn => btn.classList.remove("active"));
    const activeBtn = Array.from(document.querySelectorAll(".day-pill")).find(b => b.getAttribute("onclick").includes(dayKey));
    if (activeBtn) activeBtn.classList.add("active");
    renderWorkoutView(dayKey);
}

function getExerciseSetCount(ex) {
    if (appData.exerciseSetsCount && appData.exerciseSetsCount[ex.id]) {
        return appData.exerciseSetsCount[ex.id];
    }
    return ex.defaultSets || 2;
}

function changeExerciseSets(exId, delta) {
    const current = (appData.exerciseSetsCount && appData.exerciseSetsCount[exId]) || 2;
    const updated = Math.max(1, Math.min(8, current + delta));
    if (!appData.exerciseSetsCount) appData.exerciseSetsCount = {};
    appData.exerciseSetsCount[exId] = updated;
    saveDataToStorage();
    renderWorkoutView(currentActiveDay);
    showToast(`Set sayısı güncellendi: ${updated}`);
}

function calculateOverloadTarget(prevLogs) {
    if (!prevLogs || prevLogs.length === 0 || !prevLogs[0] || !prevLogs[0].weight || prevLogs[0].weight === "-") {
        return null;
    }
    const topSet = prevLogs[0];
    const w = parseFloat(topSet.weight);
    const r = parseInt(topSet.reps);
    if (!w || !r) return null;

    // Overload Logic
    const targetSameWeightReps = r + 1;
    const targetHeavierWeight = (w + 2.5).toFixed(1).replace('.0', '');
    const targetHeavierReps = Math.max(5, r - 2);

    return `Geçen Hafta: ${w}kg × ${r} Rep ➔ <strong>Bugün Hedef: ${w}kg × ${targetSameWeightReps} Rep</strong> veya <strong>${targetHeavierWeight}kg × ${targetHeavierReps}+ Rep</strong>`;
}

function renderWorkoutView(dayKey) {
    const container = document.getElementById("workout-content-area");
    const plan = WORKOUT_PLAN[dayKey];
    if (!container || !plan) return;

    if (plan.exercises.length === 0) {
        container.innerHTML = `
            <div class="card" style="text-align: center; padding: 40px 20px;">
                <i class="fa-solid fa-bed" style="font-size: 2.5rem; color: #ffffff; margin-bottom: 12px;"></i>
                <h2>OFF Günü (Tam Dinlenme)</h2>
                <p class="text-secondary" style="font-size:0.85rem; line-height:1.5;">Kas lifleri uykuda ve dinlenirken inşa edilir. Kalorilerini tam al, suyunu ve magnezyumunu ihmal etme.</p>
            </div>
        `;
        return;
    }

    let html = `
        <div class="card" style="background: var(--bg-card-subtle); border-color: var(--border-active);">
            <div class="card-header">
                <h2><i class="fa-solid fa-dumbbell"></i> ${plan.title}</h2>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary);">${plan.desc}</p>
        </div>
    `;

    plan.exercises.forEach(ex => {
        const savedSeat = (appData.seatSettings && appData.seatSettings[ex.id]) || ex.defaultSeat;
        const lastLog = (appData.workoutLogs && appData.workoutLogs[ex.id]) || [];
        const totalSets = getExerciseSetCount(ex);
        const overloadHint = calculateOverloadTarget(lastLog);

        html += `
            <div class="exercise-card">
                <div class="ex-header">
                    <div class="ex-title-group">
                        <h3>${ex.name}</h3>
                        <span class="ex-target-badge">${ex.target}</span>
                    </div>
                    <input type="text" class="ex-seat-input" placeholder="Koltuk/Pim" 
                           value="${savedSeat}" onchange="saveSeatSetting('${ex.id}', this.value)" title="Koltuk ve Pim Ayarın">
                </div>

                ${overloadHint ? `
                    <div class="overload-hint-box">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                        <span>${overloadHint}</span>
                    </div>
                ` : ''}

                <table class="set-rows-table">
                    <thead>
                        <tr>
                            <th style="width: 22%">SET</th>
                            <th style="width: 28%">ÖNCEKİ</th>
                            <th style="width: 26%">BUGÜN</th>
                            <th style="width: 24%">RIR / KALİTE</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        for (let i = 1; i <= totalSets; i++) {
            const prevSet = lastLog[i - 1] || { weight: "-", reps: "-", rir: "" };
            const isTop = (i === 1 || ex.isTopSet);
            const savedW = prevSet.weight !== '-' ? prevSet.weight : '';
            const savedR = prevSet.reps !== '-' ? prevSet.reps : '';
            const savedRir = prevSet.rir || '';

            html += `
                <tr class="set-row">
                    <td><span class="set-tag ${isTop ? 'top-set' : ''}">${isTop ? 'TOP' : 'S' + i}</span></td>
                    <td style="font-size: 0.75rem; color: var(--text-muted);">${prevSet.weight}kg × ${prevSet.reps}</td>
                    <td>
                        <div style="display: flex; gap: 3px;">
                            <input type="number" step="0.5" class="set-input" placeholder="Kg" id="w_${ex.id}_${i}" 
                                   value="${savedW}" onchange="autoSaveSet('${ex.id}', ${i})">
                            <input type="number" class="set-input" placeholder="Rep" id="r_${ex.id}_${i}" 
                                   value="${savedR}" onchange="autoSaveSet('${ex.id}', ${i})">
                        </div>
                    </td>
                    <td>
                        <select class="rir-select" id="rir_${ex.id}_${i}" onchange="autoSaveSet('${ex.id}', ${i})">
                            <option value="" ${savedRir === '' ? 'selected' : ''}>RIR Seç</option>
                            <option value="RIR 0" ${savedRir === 'RIR 0' ? 'selected' : ''}>🔥 RIR 0</option>
                            <option value="RIR 1" ${savedRir === 'RIR 1' ? 'selected' : ''}>💪 RIR 1</option>
                            <option value="RIR 2+" ${savedRir === 'RIR 2+' ? 'selected' : ''}>⚡ RIR 2+</option>
                            <option value="Form Boz" ${savedRir === 'Form Boz' ? 'selected' : ''}>⚠️ Form Boz</option>
                        </select>
                    </td>
                </tr>
            `;
        }

        html += `
                    </tbody>
                </table>
                <div class="ex-card-actions">
                    <span style="font-size:0.7rem; color:var(--text-muted);">Toplam: ${totalSets} Set</span>
                    <div style="display:flex; gap:6px;">
                        <button class="btn btn-xs btn-outline" onclick="changeExerciseSets('${ex.id}', -1)" title="Set Sil"><i class="fa-solid fa-minus"></i> Set</button>
                        <button class="btn btn-xs btn-outline" onclick="changeExerciseSets('${ex.id}', 1)" title="Set Ekle"><i class="fa-solid fa-plus"></i> Set</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function saveSeatSetting(exId, value) {
    if (!appData.seatSettings) appData.seatSettings = {};
    appData.seatSettings[exId] = value;
    saveDataToStorage();
    showToast("Koltuk ayarı kaydedildi 📐");
}

function autoSaveSet(exId, setIndex) {
    const weightEl = document.getElementById(`w_${exId}_${setIndex}`);
    const repsEl = document.getElementById(`r_${exId}_${setIndex}`);
    const rirEl = document.getElementById(`rir_${exId}_${setIndex}`);
    if (!weightEl || !repsEl) return;

    const w = parseFloat(weightEl.value) || 0;
    const r = parseInt(repsEl.value) || 0;
    const rir = rirEl ? rirEl.value : "";

    if (!appData.workoutLogs) appData.workoutLogs = {};
    if (!appData.workoutLogs[exId]) appData.workoutLogs[exId] = [];

    appData.workoutLogs[exId][setIndex - 1] = {
        weight: w,
        reps: r,
        rir: rir,
        date: new Date().toISOString().split('T')[0]
    };

    saveDataToStorage();
    showToast(`Set ${setIndex} Kaydedildi! 💪`);
}

// ==================== SCALE & AUTHENTIC COACH REPORT ====================

function saveDailyWeight() {
    const input = document.getElementById("daily-weight-input");
    const weight = parseFloat(input.value);
    if (!weight || weight < 40 || weight > 180) {
        alert("Lütfen geçerli bir kilo girin (Örn: 74.3)");
        return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    appData.weightHistory = (appData.weightHistory || []).filter(w => w.date !== todayStr);
    appData.weightHistory.unshift({ date: todayStr, weight: weight });

    input.value = "";
    saveDataToStorage();
    renderScaleView();
    updateDateDisplay();
    showToast(`${weight} kg tartı kaydedildi! ⚖️`);
}

function renderScaleView() {
    const history = appData.weightHistory || [];
    const listContainer = document.getElementById("weight-history-list");
    
    if (history.length === 0) {
        listContainer.innerHTML = `<p class="text-muted" style="text-align:center; padding:10px; font-size:0.8rem;">Henüz tartı verisi girilmedi.</p>`;
        document.getElementById("current-week-avg").innerText = "74.0 kg";
        document.getElementById("weekly-delta").innerText = "+0.0 kg";
        return;
    }

    listContainer.innerHTML = history.slice(0, 14).map(h => `
        <div class="history-item">
            <span>${h.date}</span>
            <strong style="color:#ffffff">${h.weight.toFixed(1)} kg</strong>
        </div>
    `).join("");

    // Calculate 7-Day Rolling Average
    const last7 = history.slice(0, 7);
    const avg7 = last7.reduce((acc, curr) => acc + curr.weight, 0) / last7.length;
    document.getElementById("current-week-avg").innerText = `${avg7.toFixed(2)} kg`;

    // Calculate Delta against previous 7 days
    const prev7 = history.slice(7, 14);
    let delta = 0;
    if (prev7.length > 0) {
        const prevAvg = prev7.reduce((acc, curr) => acc + curr.weight, 0) / prev7.length;
        delta = avg7 - prevAvg;
        document.getElementById("weekly-delta").innerText = `${delta >= 0 ? '+' : ''}${delta.toFixed(2)} kg`;
    }

    evaluateCoachDecision(last7.length, avg7, delta);
}

function evaluateCoachDecision(sampleCount, avg, delta) {
    const badge = document.getElementById("coach-verdict-badge");
    const text = document.getElementById("coach-verdict-text");
    const t = appData.targets;

    if (sampleCount < 3) {
        badge.innerText = "Veri Toplanıyor 🔍";
        badge.style.background = "rgba(255, 255, 255, 0.1)";
        badge.style.color = "#ffffff";
        text.innerText = `Net koçluk kararı için ${3 - sampleCount} gün daha sabah aç karnına tartıl reis. Şu anki tartı ortalaman: ${avg.toFixed(2)} kg.`;
        return;
    }

    if (delta >= t.weeklyGainMin && delta <= t.weeklyGainMax) {
        badge.innerText = "Canavar Gibi Gidiyorsun! 🎯🔥";
        badge.style.background = "rgba(48, 209, 88, 0.2)";
        badge.style.color = "var(--status-green)";
        text.innerText = `Haftalık kilo artışın tam hedeflediğimiz aralıkta (+${(delta * 1000).toFixed(0)} gr / hafta). Yağlanma minimum, hipertrofi maksimum! Bu disiplini bozmazsan salonda yanına kimse yaklaşamaz. ${t.calories} kcal hedefini aynen sürdür!`;
    } else if (delta < t.weeklyGainMin) {
        badge.innerText = "Kilo Artışı Yavaş / Plato ⚠️";
        badge.style.background = "rgba(255, 159, 10, 0.2)";
        badge.style.color = "var(--status-amber)";
        text.innerText = `Haftalık artış +${(delta * 1000).toFixed(0)} gr ile yavaş kaldı reis. Kas inşası için kalorik fazlalık şart! Günlük kalorine +150-200 kcal ekle (Örn: Pankek ununu veya akşam pirincini artır), adımları 7.500'de sabitle.`;
    } else {
        badge.innerText = "Hızlı Artış (Yağlanma Uyarısı!) 🚨";
        badge.style.background = "rgba(255, 69, 58, 0.2)";
        badge.style.color = "var(--status-red)";
        text.innerText = `Hop birader dur! Haftalık artış +${(delta * 1000).toFixed(0)} gr ile hızlı gidiyor. 5-6 yıllık sporcuda bu hız kas değil yağ getirir! O göbeği büyütmeden kaloriyi -150 kcal kıs veya günlük adımını 8.500'e çıkar, toparlan hemen!`;
    }
}

function updateCoachReport() {
    const preview = document.getElementById("report-text-preview");
    if (!preview) return;

    const history = appData.weightHistory || [];
    const avg = history.length > 0 
        ? (history.slice(0, 7).reduce((acc, c) => acc + c.weight, 0) / Math.min(7, history.length)).toFixed(2)
        : "74.0";

    const t = appData.targets;
    const n = appData.todayNutrition;

    const reportText = `📋 **HAFTALIK OMAR COACHING RAPORU**
📅 Tarih: ${new Date().toLocaleDateString('tr-TR')}
⚖️ 7 Günlük Tartı Ortalaması: ${avg} kg
🍽️ Beslenme Durumu: ~${t.calories} kcal (${t.protein}g P / ${t.carbs}g C / ${t.fat}g F)
👟 Günlük Adım: ${(n.steps || t.steps).toLocaleString('tr-TR')} / ${t.steps.toLocaleString('tr-TR')} Adım
💧 Günlük Su: ${(n.water || t.water).toFixed(1)} / ${t.water.toFixed(1)} Litre

🏋️ **Bölgesel Odak Durumu:**
- Göğüs: Incline DB ve Pressler stabil & ağır
- Arka Omuz (Zayıf Bölge): 2x haftalık frekans taze enerjiyle vuruldu
- Triceps (Zayıf Bölge): Lateral & Uzun baş izolasyonları tamam
- Bacak: Hack Squat 3sn negatif tempo ile uygulandı

💬 **Haftalık Hissiyat / Not:**
(Buraya eklemek istediğin hissiyatını veya sorunu yazabilirsin)`;

    preview.innerText = reportText;
}

function copyCoachReport() {
    const preview = document.getElementById("report-text-preview");
    if (!preview) return;
    navigator.clipboard.writeText(preview.innerText).then(() => {
        showToast("Rapor panoya kopyalandı! 📋");
    }).catch(() => {
        showToast("Kopyalama başarısız, metni seçip kopyalayabilirsiniz.");
    });
}

// Backup & Restore
function exportDataJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `omar_coaching_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Yedek dosyası indirildi! 💾");
}

function importDataJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            appData = JSON.parse(e.target.result);
            saveDataToStorage();
            renderDashboard();
            renderWorkoutView(currentActiveDay);
            renderNutritionView();
            renderSupplementsView();
            renderScaleView();
            showToast("Veriler başarıyla yüklendi! ✅");
        } catch (err) {
            alert("Geçersiz yedek dosyası.");
        }
    };
    reader.readAsText(file);
}
