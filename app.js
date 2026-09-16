// Lean Bulk Coach & Tracker Application Engine

// Initial State & Target Constants
const TARGETS = {
    calories: 2770,
    protein: 167,
    carbs: 344,
    fat: 77,
    water: 3.5,
    steps: 7500,
    weeklyGainMin: 0.15, // kg
    weeklyGainMax: 0.35  // kg
};

// Preset Meals Configuration
const PRESET_MEALS = {
    pancake: {
        name: "Kahvaltı Pankek",
        desc: "60g Pirinç unu, 1 Muz, 30g Bal, 30g Fıstık ezmesi, 3 Yumurta",
        cal: 810, p: 31, c: 106, f: 31
    },
    preworkout: {
        name: "Antrenmandan 2 Saat Önce",
        desc: "150g Çiğ Pirinç (~400g pişmiş) + 200g Tavuk Göğsü + H.Cevizi Yağı",
        cal: 850, p: 56, c: 118, f: 16
    },
    postworkout: {
        name: "Antrenman Sonrası (Post-Workout)",
        desc: "75g Çiğ Pirinç + 150g Tavuk Göğsü + H.Cevizi Yağı",
        cal: 550, p: 40, c: 60, f: 15
    },
    dinner: {
        name: "Akşam / Gece Öğünü",
        desc: "75g Çiğ Pirinç + 150g Tavuk Göğsü + H.Cevizi Yağı",
        cal: 550, p: 40, c: 60, f: 15
    }
};

// Predefined Workout Plan
const WORKOUT_PLAN = {
    pzt: {
        title: "Push 1 (İtiş + Triceps)",
        desc: "Göğüs Gücü + Lateral Triceps + Yan Omuz",
        exercises: [
            { id: "pzt_1", name: "Incline Dumbbell Press", target: "2 Çalışma Seti (6-9 Tekrar)", sets: 2, defaultSeat: "Açı: 30°", isTopSet: true },
            { id: "pzt_2", name: "Plate Loaded Chest Press", target: "2 Çalışma Seti (8-10 Tekrar)", sets: 2, defaultSeat: "Koltuk: 4", isTopSet: true },
            { id: "pzt_3", name: "Pec Deck Fly", target: "2 Çalışma Seti (10-12 Tekrar)", sets: 2, defaultSeat: "Koltuk: 3, Kol: 2", isTopSet: false },
            { id: "pzt_4", name: "Düz Bar Triceps Pushdown", target: "2-3 Set (Lateral Baş, Ağır & Sıkı)", sets: 3, defaultSeat: "Kablo: En Üst", isTopSet: true },
            { id: "pzt_5", name: "Tek Kol Makine Lateral", target: "3 Set (Yan Omuz İzolasyon)", sets: 3, defaultSeat: "Koltuk: 5", isTopSet: false }
        ]
    },
    sal: {
        title: "Pull 1 (Lat Genişlik + Arka Omuz)",
        desc: "Arka Omuz Öncelikli + Dikey Çekiş + Kollar",
        exercises: [
            { id: "sal_1", name: "Reverse Pec Deck Fly (Arka Omuz)", target: "3 Set (Skapula Sabit, 10-12 Rep)", sets: 3, defaultSeat: "Pede Göğüs Dayalı", isTopSet: true },
            { id: "sal_2", name: "High Row Tek Kol (Lat Odak)", target: "2 Set (6-8 Tekrar, Dirsek Gövdeye)", sets: 2, defaultSeat: "Koltuk: 3, Göğüs Pedi: 2", isTopSet: true },
            { id: "sal_3", name: "T-Bar Row", target: "2 Sert Çalışma Seti (8-10 Tekrar)", sets: 2, defaultSeat: "Göğüs Destekli", isTopSet: true },
            { id: "sal_4", name: "Geniş Tutuş Lat Pulldown", target: "2 Set (Üst Lat / Teres Major)", sets: 2, defaultSeat: "Bacak Pedi: 4", isTopSet: false },
            { id: "sal_5", name: "Dumbbell Shrug", target: "2 Set (Maks Ağırlık / Maks Rep)", sets: 2, defaultSeat: "Ayakta", isTopSet: false },
            { id: "sal_6", name: "Barbell Biceps Curl", target: "2 Set (Ağır Biceps & Ön Kol)", sets: 2, defaultSeat: "Düz Bar", isTopSet: true },
            { id: "sal_7", name: "Dumbbell Curl + Ters Tutuş V-Bar", target: "2'şer Set (Brachialis / Ön Kol)", sets: 2, defaultSeat: "Kablo Alt", isTopSet: false }
        ]
    },
    car: {
        title: "Legs + Triceps Frekansı",
        desc: "Triceps İzolasyon + Cerrahi Quad + Hamstring",
        exercises: [
            { id: "car_1", name: "Halat Triceps Pushdown", target: "2 Set (Taze Enerjiyle İzolasyon)", sets: 2, defaultSeat: "Kablo: Üst", isTopSet: true },
            { id: "car_2", name: "Hack Squat (Quad Kralı)", target: "2 Ağır Set (3sn iniş, Tam Derinlik)", sets: 2, defaultSeat: "Ayaklar Dar & Altta", isTopSet: true },
            { id: "car_3", name: "Leg Press (Quad Odaklı)", target: "2 Sert Çalışma Seti", sets: 2, defaultSeat: "Platform Altı", isTopSet: true },
            { id: "car_4", name: "Dumbbell RDL (Hamstring/Glute)", target: "2 Sıkı Set (8-10 Tekrar)", sets: 2, defaultSeat: "Düz Zemin", isTopSet: false },
            { id: "car_5", name: "Adductor Machine (Bacak İçi)", target: "2-3 Set (Ön Kalınlık, 12-15 Rep)", sets: 3, defaultSeat: "Geniş Açı: 4", isTopSet: false },
            { id: "car_6", name: "Leg Extension", target: "1 Bitirici Pump Seti", sets: 1, defaultSeat: "Maks Yanma", isTopSet: false }
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
            { id: "cum_1", name: "Arka Omuz Fly (Reverse Pec Deck)", target: "3 Set (Taze Sinir Sistemiyle)", sets: 3, defaultSeat: "Koltuk: 3", isTopSet: true },
            { id: "cum_2", name: "Makine Chest Press", target: "2 Sert Set (Derin Esneme)", sets: 2, defaultSeat: "Koltuk: 4", isTopSet: true },
            { id: "cum_3", name: "Pec Fly", target: "2 Set (Göğüs Bitirici)", sets: 2, defaultSeat: "Açı: 2", isTopSet: false },
            { id: "cum_4", name: "Overhead Dual Cable Triceps Extension", target: "3 Set (Uzun Baş Kütle İnşası)", sets: 3, defaultSeat: "Kablo Omuz Boyu", isTopSet: true },
            { id: "cum_5", name: "Tek Kol Makine Lateral", target: "3 Set (Yan Omuz 3D)", sets: 3, defaultSeat: "Koltuk: 5", isTopSet: false }
        ]
    },
    cmt: {
        title: "Pull 2 (Sırt Kalınlık & Trapez)",
        desc: "Orta Sırt + Trapez + Biceps & Ön Kol",
        exercises: [
            { id: "cmt_1", name: "High Row Tek Kol", target: "2 Set (Lat Odaklı)", sets: 2, defaultSeat: "Koltuk: 3", isTopSet: true },
            { id: "cmt_2", name: "T-Bar Row", target: "2 Ağır Çalışma Seti", sets: 2, defaultSeat: "Geniş Tutuş", isTopSet: true },
            { id: "cmt_3", name: "Chest-Supported Wide Grip Row", target: "2 Set (Orta-Üst Sırt / Rhomboid)", sets: 2, defaultSeat: "Koltuk: 2, Göğüs Pedi: 3", isTopSet: true },
            { id: "cmt_4", name: "Dumbbell Shrug", target: "2 Set (Maks Ağırlık / Maks Rep)", sets: 2, defaultSeat: "Ayakta", isTopSet: false },
            { id: "cmt_5", name: "Barbell Curl + DB Curl + Ters V-Bar", target: "2'şer Set (Kol / Ön Kol Paketi)", sets: 2, defaultSeat: "Kablo & Serbest", isTopSet: true }
        ]
    },
    paz: {
        title: "OFF (Tam Dinlenme & Haftalık Check-in)",
        desc: "Tartı Ortalaması Hesaplama & Yeni Hafta Hazırlığı",
        exercises: []
    }
};

// Application State Management
let appData = {
    todayNutrition: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        water: 0,
        meals: []
    },
    workoutLogs: {},
    seatSettings: {},
    weightHistory: [] // { date: "YYYY-MM-DD", weight: 74.2 }
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    loadDataFromStorage();
    updateDateDisplay();
    renderDashboard();
    renderWorkoutView("pzt");
    renderNutritionView();
    renderScaleView();
    updateCoachReport();
});

// Storage Helpers
function loadDataFromStorage() {
    const saved = localStorage.getItem("LEAN_BULK_APP_DATA");
    if (saved) {
        try {
            appData = JSON.parse(saved);
        } catch (e) {
            console.error("Storage parse error:", e);
        }
    }
}

function saveDataToStorage() {
    localStorage.setItem("LEAN_BULK_APP_DATA", JSON.stringify(appData));
}

// Navigation Tabs
function navigateToTab(tabName) {
    document.querySelectorAll(".tab-view").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));

    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) targetView.classList.add("active");

    const activeIndex = ["dashboard", "workout", "nutrition", "scale", "report"].indexOf(tabName);
    if (activeIndex !== -1) {
        document.querySelectorAll(".nav-item")[activeIndex].classList.add("active");
    }

    if (tabName === "report") updateCoachReport();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Date Display & Header
function updateDateDisplay() {
    const today = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayKeys = ["paz", "pzt", "sal", "car", "per", "cum", "cmt"];
    const currentDayKey = dayKeys[today.getDay()];

    const dateStr = today.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
    document.getElementById("header-date").innerText = `${dateStr} (${days[today.getDay()]}) • 74 kg Lean Bulk`;

    // Today's workout preview on dashboard
    const todayWorkout = WORKOUT_PLAN[currentDayKey];
    document.getElementById("today-day-name").innerText = days[today.getDay()];
    document.getElementById("today-workout-title").innerText = todayWorkout.title;
    document.getElementById("today-workout-desc").innerText = todayWorkout.desc;
}

// Toast Alert
function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// ==================== DASHBOARD & NUTRITION ====================

function renderDashboard() {
    const n = appData.todayNutrition;
    document.getElementById("consumed-cal").innerText = Math.round(n.calories).toLocaleString('tr-TR');
    document.getElementById("remaining-cal").innerText = Math.max(0, Math.round(TARGETS.calories - n.calories)).toLocaleString('tr-TR');
    document.getElementById("water-consumed").innerText = (n.water || 0).toFixed(1);

    // Steps rendering
    const stepsCount = n.steps || 0;
    const stepsEl = document.getElementById("steps-val");
    if (stepsEl) stepsEl.innerText = stepsCount.toLocaleString('tr-TR');
    const stepsPct = Math.min(100, (stepsCount / TARGETS.steps) * 100);
    const barSteps = document.getElementById("bar-steps");
    if (barSteps) barSteps.style.width = `${stepsPct}%`;

    document.getElementById("consumed-p").innerText = Math.round(n.protein);
    document.getElementById("consumed-c").innerText = Math.round(n.carbs);
    document.getElementById("consumed-f").innerText = Math.round(n.fat);

    const pPct = Math.min(100, (n.protein / TARGETS.protein) * 100);
    const cPct = Math.min(100, (n.carbs / TARGETS.carbs) * 100);
    const fPct = Math.min(100, (n.fat / TARGETS.fat) * 100);

    document.getElementById("bar-p").style.width = `${pPct}%`;
    document.getElementById("bar-c").style.width = `${cPct}%`;
    document.getElementById("bar-f").style.width = `${fPct}%`;
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
    showToast(`+${amount * 1000}ml Su Eklendi`);
}

function logPresetMeal(type) {
    const meal = PRESET_MEALS[type];
    if (!meal) return;

    appData.todayNutrition.calories += meal.cal;
    appData.todayNutrition.protein += meal.p;
    appData.todayNutrition.carbs += meal.c;
    appData.todayNutrition.fat += meal.f;

    appData.todayNutrition.meals.push({
        id: Date.now(),
        name: meal.name,
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
    logPresetMeal('pancake');
    logPresetMeal('preworkout');
    logPresetMeal('postworkout');
    logPresetMeal('dinner');
    showToast("Tüm Günlük Menü Başarıyla Eklendi! (2.760 kcal) 🎯");
}

function clearTodayMeals() {
    if (confirm("Bugünkü beslenme kayıtlarını sıfırlamak istiyor musun?")) {
        appData.todayNutrition = { calories: 0, protein: 0, carbs: 0, fat: 0, water: 0, meals: [] };
        saveDataToStorage();
        renderDashboard();
        renderNutritionView();
        showToast("Beslenme sıfırlandı.");
    }
}

function renderNutritionView() {
    const container = document.getElementById("today-logged-foods-list");
    if (!container) return;
    const meals = appData.todayNutrition.meals || [];

    if (meals.length === 0) {
        container.innerHTML = `<p class="text-muted" style="text-align:center; padding:15px;">Henüz öğün eklenmedi.</p>`;
        return;
    }

    container.innerHTML = meals.map(m => `
        <div class="history-item">
            <div>
                <strong>${m.name}</strong> <small style="color:var(--text-muted)">(${m.time})</small>
                <div style="font-size:0.7rem; color:var(--text-secondary)">${m.p}g P • ${m.c}g C • ${m.f}g F</div>
            </div>
            <strong style="color:var(--primary); font-size:0.9rem;">+${m.cal} kcal</strong>
        </div>
    `).join("");
}

// ==================== WORKOUT LOGBOOK ====================

let currentActiveDay = "pzt";

function selectWorkoutDay(dayKey) {
    currentActiveDay = dayKey;
    document.querySelectorAll(".day-pill").forEach(btn => btn.classList.remove("active"));
    const activeBtn = Array.from(document.querySelectorAll(".day-pill")).find(b => b.getAttribute("onclick").includes(dayKey));
    if (activeBtn) activeBtn.classList.add("active");
    renderWorkoutView(dayKey);
}

function renderWorkoutView(dayKey) {
    const container = document.getElementById("workout-content-area");
    const plan = WORKOUT_PLAN[dayKey];
    if (!container || !plan) return;

    if (plan.exercises.length === 0) {
        container.innerHTML = `
            <div class="card" style="text-align: center; padding: 40px 20px;">
                <i class="fa-solid fa-bed" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 12px;"></i>
                <h2>OFF Günü (Tam Dinlenme)</h2>
                <p class="text-muted">Kas lifleri dinlenirken ve uykudayken büyür. Kalorilerini tam al, suyunu iç ve toparlan.</p>
            </div>
        `;
        return;
    }

    let html = `
        <div class="card" style="margin-bottom: 14px; background: rgba(0, 242, 254, 0.08); border-color: rgba(0, 242, 254, 0.3);">
            <div class="card-header">
                <h2><i class="fa-solid fa-fire"></i> ${plan.title}</h2>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-secondary);">${plan.desc}</p>
        </div>
    `;

    plan.exercises.forEach(ex => {
        const savedSeat = (appData.seatSettings && appData.seatSettings[ex.id]) || ex.defaultSeat;
        const lastLog = (appData.workoutLogs && appData.workoutLogs[ex.id]) || [];

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

                <table class="set-rows-table">
                    <thead>
                        <tr>
                            <th style="width: 25%">SET</th>
                            <th style="width: 35%">ÖNCEKİ</th>
                            <th style="width: 40%">BUGÜN (KG x TEKRAR)</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        for (let i = 1; i <= ex.sets; i++) {
            const prevSet = lastLog[i - 1] || { weight: "-", reps: "-" };
            const isTop = i === 1 || ex.isTopSet;

            html += `
                <tr class="set-row">
                    <td><span class="set-tag ${isTop ? 'top-set' : ''}">${isTop ? 'TOP SET' : 'Set ' + i}</span></td>
                    <td style="font-size: 0.8rem; color: var(--text-muted);">${prevSet.weight} kg × ${prevSet.reps}</td>
                    <td>
                        <div style="display: flex; gap: 4px; justify-content: center;">
                            <input type="number" step="0.5" class="set-input" placeholder="Kg" id="w_${ex.id}_${i}" 
                                   value="${prevSet.weight !== '-' ? prevSet.weight : ''}" onchange="autoSaveSet('${ex.id}', ${i})">
                            <input type="number" class="set-input" placeholder="Tekrar" id="r_${ex.id}_${i}" 
                                   value="${prevSet.reps !== '-' ? prevSet.reps : ''}" onchange="autoSaveSet('${ex.id}', ${i})">
                        </div>
                    </td>
                </tr>
            `;
        }

        html += `
                    </tbody>
                </table>
            </div>
        `;
    });

    container.innerHTML = html;
}

function saveSeatSetting(exId, value) {
    if (!appData.seatSettings) appData.seatSettings = {};
    appData.seatSettings[exId] = value;
    saveDataToStorage();
    showToast("Koltuk ayarı güncellendi! 📐");
}

function autoSaveSet(exId, setIndex) {
    const weightEl = document.getElementById(`w_${exId}_${setIndex}`);
    const repsEl = document.getElementById(`r_${exId}_${setIndex}`);
    if (!weightEl || !repsEl) return;

    const w = parseFloat(weightEl.value) || 0;
    const r = parseInt(repsEl.value) || 0;

    if (!appData.workoutLogs) appData.workoutLogs = {};
    if (!appData.workoutLogs[exId]) appData.workoutLogs[exId] = [];

    appData.workoutLogs[exId][setIndex - 1] = { weight: w, reps: r, date: new Date().toISOString().split('T')[0] };
    saveDataToStorage();
    showToast(`Set ${setIndex} Kaydedildi! 💪`);
}

// ==================== WEIGH-IN & COACH AI ====================

function saveDailyWeight() {
    const input = document.getElementById("daily-weight-input");
    const weight = parseFloat(input.value);
    if (!weight || weight < 40 || weight > 180) {
        alert("Lütfen geçerli bir kilo girin (Örn: 74.3)");
        return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    // Remove if already exists today
    appData.weightHistory = (appData.weightHistory || []).filter(w => w.date !== todayStr);
    appData.weightHistory.unshift({ date: todayStr, weight: weight });

    input.value = "";
    saveDataToStorage();
    renderScaleView();
    showToast(`${weight} kg tartı kaydedildi! ⚖️`);
}

function renderScaleView() {
    const history = appData.weightHistory || [];
    const listContainer = document.getElementById("weight-history-list");
    
    if (history.length === 0) {
        listContainer.innerHTML = `<p class="text-muted" style="text-align:center; padding:10px;">Henüz tartı verisi girilmedi.</p>`;
        document.getElementById("current-week-avg").innerText = "74.0 kg";
        document.getElementById("weekly-delta").innerText = "+0.0 kg";
        return;
    }

    listContainer.innerHTML = history.slice(0, 14).map(h => `
        <div class="history-item">
            <span>${h.date}</span>
            <strong style="color:var(--primary)">${h.weight.toFixed(1)} kg</strong>
        </div>
    `).join("");

    // Calculate 7-Day Rolling Average
    const last7 = history.slice(0, 7);
    const avg7 = last7.reduce((acc, curr) => acc + curr.weight, 0) / last7.length;
    document.getElementById("current-week-avg").innerText = `${avg7.toFixed(2)} kg`;

    // Calculate Delta against previous 7 days (if available)
    const prev7 = history.slice(7, 14);
    let delta = 0;
    if (prev7.length > 0) {
        const prevAvg = prev7.reduce((acc, curr) => acc + curr.weight, 0) / prev7.length;
        delta = avg7 - prevAvg;
        document.getElementById("weekly-delta").innerText = `${delta >= 0 ? '+' : ''}${delta.toFixed(2)} kg`;
    }

    // AI Coaching Decision Logic
    evaluateCoachDecision(last7.length, avg7, delta);
}

function evaluateCoachDecision(sampleCount, avg, delta) {
    const badge = document.getElementById("coach-verdict-badge");
    const text = document.getElementById("coach-verdict-text");

    if (sampleCount < 4) {
        badge.innerText = "Veri Toplanıyor";
        badge.style.background = "rgba(0, 242, 254, 0.2)";
        badge.style.color = "var(--primary)";
        text.innerText = `Haftalık ortalamanın netleşmesi için ${4 - sampleCount} gün daha sabah aç karnına tartıl. Şu anki ortalaman: ${avg.toFixed(2)} kg.`;
        return;
    }

    if (delta >= TARGETS.weeklyGainMin && delta <= TARGETS.weeklyGainMax) {
        badge.innerText = "Mükemmel Lean Bulk Hızı! 🎯";
        badge.style.background = "rgba(0, 230, 118, 0.2)";
        badge.style.color = "var(--accent-green)";
        text.innerText = `Haftalık kilo artışın tam hedeflediğimiz aralıkta (+${(delta * 1000).toFixed(0)} gr / hafta). Yağlanma minimum, kas gelişimi maksimum. 2.770 kcal hedefini aynen koru!`;
    } else if (delta < TARGETS.weeklyGainMin) {
        badge.innerText = "Kilo Artışı Yavaş / Plato ⚠️";
        badge.style.background = "rgba(255, 145, 0, 0.2)";
        badge.style.color = "var(--accent-orange)";
        text.innerText = `Haftalık artış +${(delta * 1000).toFixed(0)} gr'da kaldı. Kas inşasını sürdürmek için günlük +150 kcal ekle (Öneri: Pirinç ununu 60g'dan 95g'a çıkar veya fazladan 1 muz ekle).`;
    } else {
        badge.innerText = "Hızlı Artış (Yağlanma Riski) 🚨";
        badge.style.background = "rgba(255, 82, 82, 0.2)";
        badge.style.color = "var(--accent-red)";
        text.innerText = `Haftalık artış +${(delta * 1000).toFixed(0)} gr ile hızlı gidiyor. 5-6 yıllık sporcuda bu hız yağlanma yapar. Günlük kaloriyi -150 kcal kıs veya günlük adımını 8.500'e çıkar.`;
    }
}

// ==================== COACH REPORT GENERATION ====================

function updateCoachReport() {
    const preview = document.getElementById("report-text-preview");
    if (!preview) return;

    const history = appData.weightHistory || [];
    const avg = history.length > 0 
        ? (history.slice(0, 7).reduce((acc, c) => acc + c.weight, 0) / Math.min(7, history.length)).toFixed(2)
        : "74.0";

    const reportText = `📋 **HAFTALIK OMAR COACHING RAPORU**
📅 Tarih: ${new Date().toLocaleDateString('tr-TR')}
⚖️ 7 Günlük Tartı Ortalaması: ${avg} kg
🍽️ Beslenme Durumu: ~2.770 kcal (167g P / 344g C / 77g F)
👟 Günlük Adım Hedefi: ${(appData.todayNutrition.steps || 7500).toLocaleString('tr-TR')} / 7.500 Adım
💧 Günlük Su: ${(appData.todayNutrition.water || 3.5).toFixed(1)} / 3.5 Litre

🏋️ **Öne Çıkan Notlar:**
- Push (Incline DB & Pressler): Stabil & Güçlü
- Çekiş & Arka Omuz: 2x Frekans taze enerjiyle vuruldu
- Bacak (Hack Squat 3sn tempo): Quad odaklı uygulandı
- Triceps (3 Farklı Baş): 3x haftalık frekans tamamlandı

💬 **Haftalık Hissiyat / Soru:**
(Buraya eklemek istediğin notu yazabilirsin)`;

    preview.innerText = reportText;
}

function copyCoachReport() {
    const preview = document.getElementById("report-text-preview");
    navigator.clipboard.writeText(preview.innerText).then(() => {
        showToast("Rapor panoya kopyalandı! Sohbete yapıştırabilirsin 📋");
    }).catch(() => {
        showToast("Kopyalama başarısız, metni manuel seçebilirsiniz.");
    });
}

// JSON Backup / Restore
function exportDataJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `lean_bulk_backup_${new Date().toISOString().split('T')[0]}.json`);
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
            renderScaleView();
            showToast("Veriler başarıyla yüklendi! ✅");
        } catch (err) {
            alert("Geçersiz yedek dosyası.");
        }
    };
    reader.readAsText(file);
}
