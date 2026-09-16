// Omar Coaching - Hypertrophy & Bulk Tracker Engine v2.6

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

// ==================== RAW & WHOLE FOODS DATABASE (100g BAŞINA DEĞERLER) ====================
const RAW_FOODS_DATABASE = [
    // KARBONHİDRAT KAYNAKLARI (ÇİĞ AĞIRLIK)
    { id: "cig_pirinc", name: "Çiğ Beyaz Pirinç (Basmati / Yasemin)", unit: "g", p: 7.5, c: 78.0, f: 0.5, cal: 350 },
    { id: "pirinc_unu", name: "Çiğ Pirinç Unu", unit: "g", p: 6.0, c: 80.0, f: 1.0, cal: 360 },
    { id: "cig_yulaf", name: "Çiğ Yulaf Ezmesi", unit: "g", p: 13.0, c: 60.0, f: 7.0, cal: 370 },
    { id: "cig_makarna", name: "Çiğ Makarna / Spagetti", unit: "g", p: 12.0, c: 72.0, f: 1.5, cal: 355 },
    { id: "cig_patates", name: "Çiğ Patates", unit: "g", p: 2.0, c: 17.0, f: 0.1, cal: 77 },
    { id: "cig_tatli_patates", name: "Çiğ Tatlı Patates", unit: "g", p: 1.6, c: 20.0, f: 0.1, cal: 86 },
    { id: "cig_karabugday", name: "Çiğ Karabuğday (Greçka)", unit: "g", p: 13.0, c: 71.0, f: 3.0, cal: 343 },
    { id: "muz", name: "Muz (Taze)", unit: "g", p: 1.1, c: 23.0, f: 0.3, cal: 89 },
    { id: "bal", name: "Bal / Pekmez", unit: "g", p: 0.3, c: 82.0, f: 0.0, cal: 304 },
    { id: "hurma", name: "Hurma (Medjool / Cennet)", unit: "g", p: 2.0, c: 75.0, f: 0.4, cal: 280 },
    { id: "pirinc_patlagi", name: "Pirinç Patlağı (Rice Cake)", unit: "g", p: 8.0, c: 82.0, f: 2.0, cal: 380 },

    // PROTEİN KAYNAKLARI (ÇİĞ AĞIRLIK)
    { id: "tavuk_gogsu", name: "Çiğ Tavuk Göğsü (Derisiz)", unit: "g", p: 23.0, c: 0.0, f: 1.5, cal: 110 },
    { id: "hindi_gogsu", name: "Çiğ Hindi Göğsü", unit: "g", p: 24.0, c: 0.0, f: 1.0, cal: 105 },
    { id: "dana_kiyma", name: "Çiğ Dana Kıyma (%10-12 Yağ)", unit: "g", p: 21.0, c: 0.0, f: 10.0, cal: 175 },
    { id: "dana_biftek", name: "Çiğ Dana Biftek (Yağsız)", unit: "g", p: 22.0, c: 0.0, f: 6.0, cal: 145 },
    { id: "yumurta_butun", name: "Bütün Yumurta (1 Adet = 50g)", unit: "g", p: 13.0, c: 1.0, f: 10.0, cal: 145 },
    { id: "yumurta_beyazi", name: "Yumurta Beyazı (Sıvı)", unit: "g", p: 11.0, c: 0.7, f: 0.2, cal: 52 },
    { id: "somon", name: "Çiğ Somon Balığı", unit: "g", p: 20.0, c: 0.0, f: 13.0, cal: 208 },
    { id: "ton_baligi", name: "Ton Balığı (Konserve Süzme)", unit: "g", p: 26.0, c: 0.0, f: 1.0, cal: 115 },
    { id: "lor_peyniri", name: "Lor Peyniri (Yağsız Diyet)", unit: "g", p: 17.0, c: 3.0, f: 1.0, cal: 90 },
    { id: "quark_yogurt", name: "Süzme Yoğurt / Quark / Protein Yoğurt", unit: "g", p: 10.0, c: 4.0, f: 0.5, cal: 60 },
    { id: "whey_toz", name: "Whey Protein Tozu (1 Ölçek = 30g)", unit: "g", p: 80.0, c: 5.0, f: 3.0, cal: 370 },

    // SAĞLIKLI YAĞ KAYNAKLARI
    { id: "zeytinyagi", name: "Zeytinyağı (Sızma)", unit: "g", p: 0.0, c: 0.0, f: 100.0, cal: 884 },
    { id: "hindistan_cevizi_yagi", name: "Hindistan Cevizi Yağı", unit: "g", p: 0.0, c: 0.0, f: 100.0, cal: 890 },
    { id: "fistik_ezmesi", name: "Fıstık Ezmesi (%100 Şekersiz)", unit: "g", p: 25.0, c: 20.0, f: 50.0, cal: 588 },
    { id: "cig_badem", name: "Çiğ Badem", unit: "g", p: 21.0, c: 15.0, f: 50.0, cal: 600 },
    { id: "cig_ceviz", name: "Çiğ Ceviz", unit: "g", p: 15.0, c: 14.0, f: 65.0, cal: 654 },
    { id: "avokado", name: "Avokado", unit: "g", p: 2.0, c: 9.0, f: 15.0, cal: 160 },
    { id: "tereyagi", name: "Tereyağı / Sade Yağ (Ghee)", unit: "g", p: 0.5, c: 0.5, f: 82.0, cal: 740 }
];

// Default Preset Meals with Ingredients
const DEFAULT_PRESET_MEALS = {
    pancake: {
        id: "pancake",
        name: "1. Kahvaltı Pankek",
        ingredients: [
            { foodId: "pirinc_unu", amount: 60 },
            { foodId: "muz", amount: 100 },
            { foodId: "bal", amount: 30 },
            { foodId: "fistik_ezmesi", amount: 30 },
            { foodId: "yumurta_butun", amount: 150 } // 3 yumurta ~150g
        ],
        desc: "60g Pirinç unu, 1 Muz (100g), 30g Bal, 30g Fıstık ezmesi, 3 Yumurta",
        cal: 810, p: 31, c: 106, f: 31
    },
    preworkout: {
        id: "preworkout",
        name: "2. Antrenmandan 2 Saat Önce",
        ingredients: [
            { foodId: "cig_pirinc", amount: 150 },
            { foodId: "tavuk_gogsu", amount: 200 },
            { foodId: "hindistan_cevizi_yagi", amount: 10 }
        ],
        desc: "150g Çiğ Pirinç (~400g pişmiş) + 200g Çiğ Tavuk Göğsü + 10g H.Cevizi Yağı",
        cal: 850, p: 56, c: 118, f: 16
    },
    postworkout: {
        id: "postworkout",
        name: "3. Antrenman Sonrası (Post-Workout)",
        ingredients: [
            { foodId: "cig_pirinc", amount: 75 },
            { foodId: "tavuk_gogsu", amount: 150 },
            { foodId: "hindistan_cevizi_yagi", amount: 10 }
        ],
        desc: "75g Çiğ Pirinç + 150g Çiğ Tavuk Göğsü + 10g H.Cevizi Yağı",
        cal: 550, p: 40, c: 60, f: 15
    },
    dinner: {
        id: "dinner",
        name: "4. Akşam / Gece Öğünü",
        ingredients: [
            { foodId: "cig_pirinc", amount: 75 },
            { foodId: "tavuk_gogsu", amount: 150 },
            { foodId: "hindistan_cevizi_yagi", amount: 10 }
        ],
        desc: "75g Çiğ Pirinç + 150g Çiğ Tavuk Göğsü + 10g H.Cevizi Yağı",
        cal: 550, p: 40, c: 60, f: 15
    }
};

// ==================== 50+ MASTER SUPPLEMENT DATABASE ====================
const MASTER_SUPPLEMENT_DATABASE = [
    // 1. PERFORMANS & GÜÇ
    { id: "cat_creatine", name: "Kreatin Monohidrat", category: "performans", dosage: "5 gram", timing: "Sabah / Kahvaltı", benefit: "Hücresel ATP üretimi, patlayıcı güç, kas içi su tutumu ve hacim.", details: "Kas içi fosfokreatin depolarını doyurarak yüksek yoğunluklu setlerde ATP yenilenmesini hızlandırır. Güç artışı ve kas protein sentezini doğrudan destekler." },
    { id: "cat_citrulline", name: "L-Sitrülin Malat", category: "performans", dosage: "6-8 gram (2:1)", timing: "Antrenmandan 30dk Önce", benefit: "Nitrik Oksit (NO) artışı, derin kas pump'ı ve laktik asit geciktirme.", details: "Arjinin seviyelerini arjininin kendisinden daha etkili yükseltir. Kan damarlarını genişleterek kaslara oksijen ve besin taşınmasını maksimize eder." },
    { id: "cat_betaalanine", name: "Beta-Alanin", category: "performans", dosage: "3.2 - 4 gram", timing: "Antrenmandan 30dk Önce", benefit: "Kas karnozin seviyelerini artırarak yüksek tekrarlarda yanmayı geciktirir.", details: "Kas içi asidozu (H+ iyon birikimi) tamponlar. 8-15 tekrar ve drop setlerde tükeniş süresini uzatır." },
    { id: "cat_caffeine", name: "Kafein Anhidroz / Pre-Workout", category: "performans", dosage: "150-250 mg", timing: "Antrenmandan 30dk Önce", benefit: "Merkezi sinir sistemi uyarımı, odaklanma ve güç iletim hızı.", details: "Adenozin reseptörlerini bloke ederek yorgunluk hissini öteler. Motor ünite aktivasyonunu artırır." },
    { id: "cat_betaine", name: "Betain Anhidroz (TMG)", category: "performans", dosage: "2.5 gram", timing: "Antrenman Öncesi/Sabah", benefit: "Hücresel hidrasyon, metilasyon desteği ve güç çıktısı.", details: "Kas liflerinde osmolit görevi görerek hücre hacmini artırır ve antrenman hacmi kapasitesini yükseltir." },
    { id: "cat_arginine", name: "L-Arjinin AKG", category: "performans", dosage: "3-5 gram", timing: "Antrenmandan 30dk Önce", benefit: "Vaskülarite (damarlanma) ve kan akışı desteği.", details: "Endotel dokuda NO sentaz enzimini uyararak kan akışını hızlandırır." },
    { id: "cat_sodium", name: "Sodyum / Himalaya Tuzu", category: "performans", dosage: "1-2 gram (Çeyrek Çay Kaşığı)", timing: "Antrenman Öncesi Öğünle", benefit: "Maksimum kas pump'ı, sinir iletimi ve kas krampı önleme.", details: "Antrenman öncesi karbonhidratla alındığında glikozun kas içine taşınmasını (SGLT1) ve damar içi plazma hacmini artırır." },
    { id: "cat_taurine", name: "L-Taurin", category: "performans", dosage: "1-2 gram", timing: "Antrenman Öncesi/Sonrası", benefit: "Hücresel hidrasyon, elektrolit dengesi ve kas kasılma verimi.", details: "Kalsiyum iyonlarının kas liflerindeki hareketini düzenleyerek kramp riskini azaltır." },
    { id: "cat_glycerol", name: "Gliserol Monostearat / HydroMax", category: "performans", dosage: "2-5 gram", timing: "Antrenmandan 30dk Önce (Bol Suyla)", benefit: "Hiper-hidrasyon ve devasa kas dolgunluğu (Pump).", details: "Vücudun geçici olarak daha fazla su tutmasını sağlayarak antrenman boyunca kasların şişkin ve hidrate kalmasını sağlar." },
    { id: "cat_alphagpc", name: "Alpha-GPC (Kolin)", category: "performans", dosage: "300-600 mg", timing: "Antrenmandan 30dk Önce", benefit: "Zihin-kas bağlantısı (Mind-Muscle Connection) ve odak.", details: "Beyinde asetilkolin nörotransmiterini artırarak kas kasılma sinyallerini güçlendirir." },

    // 2. PROTEİN & AMİNO ASİTLER
    { id: "cat_whey_iso", name: "Whey Protein Isolate", category: "protein", dosage: "25-30 gram (1 Ölçek)", timing: "Antrenman Sonrası", benefit: "Sıfır yağ/şeker, ultra hızlı emilim ve anında Lösin tetiklemesi.", details: "%90+ protein saflığı ile antrenman sonrası mTOR sinyal yolunu açarak kas proteini sentezini (MPS) başlatır." },
    { id: "cat_whey_conc", name: "Whey Protein Konsantre", category: "protein", dosage: "25-30 gram (1 Ölçek)", timing: "Ara Öğün / Kahvaltı", benefit: "Ekonomik, lezzetli ve yüksek biyoyararlanımlı protein kaynağı.", details: "İmmünoglobulin ve laktoferrin içerikleriyle bağışıklığı ve kas onarımını destekler." },
    { id: "cat_casein", name: "Misellar Kazein", category: "protein", dosage: "30 gram", timing: "Gece / Yatmadan Önce", benefit: "6-8 saat boyunca yavaş salınımlı anti-katabolik amino asit akışı.", details: "Midede jel kıvamı alarak gece uykusunda kas yıkımını önler." },
    { id: "cat_eaa", name: "EAA (Esansiyel Amino Asitler)", category: "protein", dosage: "10-15 gram", timing: "Antrenman Esnasında (Intra)", benefit: "Sindirim yükü olmadan kas proteini sentezini koruma.", details: "Vücudun üretemediği 9 temel amino asidin tamamını sağlayarak antrenman esnasında katabolizmayı durdurur." },
    { id: "cat_bcaa", name: "BCAA (2:1:1)", category: "protein", dosage: "5-10 gram", timing: "Antrenman Esnası/Sonrası", benefit: "Lösin, İzolösin ve Valin ile yorgunluk geciktirme.", details: "Triptofanın beyne girişini yarışarak engelleyip merkezi yorgunluğu azaltır." },
    { id: "cat_glutamine", name: "L-Glutamin", category: "protein", dosage: "5-10 gram", timing: "Sabah Aç / Gece", benefit: "Bağırsak astarı sağlığı, sindirim ve toparlanma.", details: "Bağırsak epitel hücrelerinin ana yakıtıdır; besin emilimini ve mikrobiyota bütünlüğünü artırır." },
    { id: "cat_collagen", name: "Kolajen Peptit (Tip 1 & 3)", category: "protein", dosage: "10 gram", timing: "Sabah (C Vitaminiyle)", benefit: "Tendon, bağ doku, eklem ve kıkırdak elastikiyeti.", details: "Ağır yük binen tendon ve bağ dokuların kolajen liflerini yeniler." },
    { id: "cat_citrulline_free", name: "Serbest L-Sitrülin", category: "protein", dosage: "3-5 gram", timing: "Antrenman Öncesi", benefit: "Saf sitrülin ile saf NO üretimi.", details: "Malat asidi içermeyen saf amino asit formu." },
    { id: "cat_carnitine", name: "L-Karnitin L-Tartrat (LCLT)", category: "protein", dosage: "2 gram", timing: "Antrenmandan 30dk Önce", benefit: "Androjen reseptör yoğunluğu artışı ve yağ asidi taşınımı.", details: "Kaslardaki testosteron bağlayan androjen reseptörlerini artırarak toparlanmayı hızlandırır." },
    { id: "cat_hmb", name: "HMB (Kalsiyum HMB)", category: "protein", dosage: "3 gram", timing: "Antrenman Öncesi/Sonrası", benefit: "Ağır bacak günlerinde kas hasarını (DOMS) minimize etme.", details: "Lösin metabolitidir; proteolizi (kas yıkımı) baskılamada son derece etkilidir." },

    // 3. VİTAMİN & TEMEL MİNERALLER
    { id: "cat_d3k2", name: "Vitamin D3 + K2 (MK-7)", category: "vitamin", dosage: "5000 IU D3 + 100mcg K2", timing: "Sabah / Yağlı Öğünle", benefit: "Testosteron üretimi, kemik yoğunluğu ve kalsiyum yönlendirmesi.", details: "D3 kalsiyum emilimini sağlarken K2 bu kalsiyumu damarlardan kemik ve kas dokusuna yönlendirir." },
    { id: "cat_magnesium_bis", name: "Magnezyum Bisglisinat", category: "vitamin", dosage: "200-400 mg", timing: "Gece / Yatmadan Önce", benefit: "Kas gevşemesi, derin uyku, kramp önleme ve sinir yatıştırma.", details: "Glisin amino asidine bağlı formu kan-beyin bariyerini rahat geçer; sindirimi bozmadan derin uyku sağlar." },
    { id: "cat_zinc", name: "Çinko Pikolinat", category: "vitamin", dosage: "15-30 mg", timing: "Akşam Yemekle Birlikte", benefit: "Testosteron optimizasyonu, protein sentezi ve bağışıklık.", details: "200'den fazla enzimatik reaksiyonun kofaktörüdür; aromataz enzimini dengelemeye yardımcı olur." },
    { id: "cat_zma", name: "ZMA (Çinko + Magnezyum + B6)", category: "vitamin", dosage: "Standart 1 Porsiyon", timing: "Gece Yatmadan Önce", benefit: "Gece anabolik hormon salınımı ve derin toparlanma.", details: "Aç karnına alındığında gece GH ve testosteron biyoyararlanımını destekler." },
    { id: "cat_bcomplex", name: "Aktif B-Kompleks (Metilfolat & B12)", category: "vitamin", dosage: "1 Kapsül", timing: "Sabah Kahvaltıyla", benefit: "Karbonhidrat/protein enerji metabolizması ve sinir sağlığı.", details: "Metillendirilmiş formlar hücre düzeyinde ATP dönüşümünü maksimum verime ulaştırır." },
    { id: "cat_vitaminc", name: "C Vitamini (Askorbik Asit / Ester-C)", category: "vitamin", dosage: "500-1000 mg", timing: "Sabah veya Öğünle", benefit: "Kortizol dengeleme, antioksidan koruma ve kolajen sentezi.", details: "Ağır antrenman sonrası oluşan aşırı serbest radikal hasarını nötralize eder." },
    { id: "cat_potassium", name: "Potasyum Sitrat", category: "vitamin", dosage: "500-1000 mg", timing: "Öğünlerle Bölünerek", benefit: "Hücre içi sıvı dengesi, kan basıncı ve sodyum pompası.", details: "Hücre içi ana elektrolittir; kas kasılmasının elektriksel iletimini sağlar." },
    { id: "cat_iron", name: "Demir Bisglisinat", category: "vitamin", dosage: "15-20 mg", timing: "Sabah Aç (C Vitaminiyle)", benefit: "Hemoglobin üretimi ve kaslara oksijen taşınması.", details: "Yorgunluk ve demir eksikliği kaynaklı performans düşüşlerini engeller." },
    { id: "cat_calcium", name: "Kalsiyum Sitrat", category: "vitamin", dosage: "500 mg", timing: "Öğünle Birlikte", benefit: "Kas liflerinin kasılma mekanizması ve iskelet gücü.", details: "Aktin-miyozin köprülerinin kurulmasında birincil sinyal molekülüdür." },
    { id: "cat_multivit", name: "Gelişmiş Sporcu Multivitamini", category: "vitamin", dosage: "1 Porsiyon", timing: "Kahvaltı Sonrası", benefit: "Genel mikro besin açığını kapatma ve bağışıklık sigortası.", details: "Yoğun antrenman yapan sporcularda ter ve idrarla atılan mikro besinleri tamamlar." },

    // 4. SAĞLIK, LONGEVITY & EKLEM
    { id: "cat_omega3", name: "Omega 3 Balık Yağı (Trigliserit Form)", category: "saglik", dosage: "2000-3000 mg (Yüksek EPA/DHA)", timing: "Öğünle Birlikte", benefit: "Sistemik inflamasyonu düşürme, insülin duyarlılığı ve kalp sağlığı.", details: "Hücre zarının akışkanlığını artırarak kas hücrelerinin besin alımını (insülin duyarlılığını) kolaylaştırır." },
    { id: "cat_ashwagandha", name: "Ashwagandha (KSM-66)", category: "saglik", dosage: "300-600 mg", timing: "Akşam / Gece", benefit: "Kortizolü (stres hormonu) düşürme, güç ve testosteron desteği.", details: "GABAerjik aktiviteyi destekler; kronik antrenman stresini ve kortizolü baskılayarak kas gelişimini korur." },
    { id: "cat_coq10", name: "CoQ10 (Ubiquinol)", category: "saglik", dosage: "100-200 mg", timing: "Sabah Yağlı Öğünle", benefit: "Mitokondriyal enerji üretimi ve hücresel antioksidan koruma.", details: "Hücrenin enerji santrali olan mitokondrilerde elektron taşıma zincirinin anahtarıdır." },
    { id: "cat_curcumin", name: "Kurkumin + Karabiber (Piperin)", category: "saglik", dosage: "500 mg (Standardize)", timing: "Yemekle Birlikte", benefit: "Eklem ağrılarını dindirme ve güçlü anti-inflamatuar etki.", details: "NF-kB yolağını bloke ederek eklem ve tendonlardaki enflamatuar sitokinleri azaltır." },
    { id: "cat_nac", name: "NAC (N-Asetil Sistein)", category: "saglik", dosage: "600-1200 mg", timing: "Sabah Aç Karnına", benefit: "Glutatyon (ana antioksidan) üretimi ve karaciğer detoksu.", details: "Vücudun en güçlü iç antioksidanı olan glutatyonun öncül maddesidir; hücresel hasarı onarır." },
    { id: "cat_berberine", name: "Berberin HCL", category: "saglik", dosage: "500 mg", timing: "Yüksek Karbonhidratlı Öğünden Önce", benefit: "İnsülin duyarlılığı, glikozun kas içine yönlendirilmesi (GDA).", details: "AMPK enzimini aktive ederek karbonhidratların yağ dokusuna değil kas glikojenine gitmesini sağlar." },
    { id: "cat_ala", name: "Alfa Lipoik Asit (R-ALA)", category: "saglik", dosage: "300-600 mg", timing: "Karbonhidratlı Öğünle", benefit: "Güçlü antioksidan ve besin partisyoneri (kas dolgunluğu).", details: "Hem suda hem yağda çözünen evrensel antioksidandır; glikoz taşınmasını destekler." },
    { id: "cat_glucosamine", name: "Glukozamin + Kondroitin + MSM", category: "saglik", dosage: "1500mg / 1200mg", timing: "Öğünle Birlikte", benefit: "Ağır squat ve presslerde diz/omuz kıkırdak koruması.", details: "Eklem sıvısını (sinovyal sıvı) ve kıkırdak matriksini besler." },
    { id: "cat_milkthistle", name: "Milk Thistle (Silymarin)", category: "saglik", dosage: "250-500 mg", timing: "Yemekle Birlikte", benefit: "Karaciğer enzimlerini dengeleme ve toksin temizliği.", details: "Karaciğer hepatosit hücrelerinin zar bütünlüğünü korur." },
    { id: "cat_resveratrol", name: "Trans-Resveratrol", category: "saglik", dosage: "250-500 mg", timing: "Sabah", benefit: "Damar elastikiyeti, longevity ve sirtuin aktivasyonu.", details: "Damar içi nitrik oksit biyoyararlanımını destekler." },

    // 5. UYKU, SİNİR SİSTEMİ & SİNDİRİM
    { id: "cat_melatonin", name: "Melatonin", category: "uyku", dosage: "1-3 mg", timing: "Uykudan 30-45dk Önce", benefit: "Sirkadiyen ritim düzeni ve hızlı uykuya dalış.", details: "Epifiz bezinden salgılanan uyku hormonudur; büyüme hormonu (GH) salınan derin REM evresini düzenler." },
    { id: "cat_theanine", name: "L-Teanin", category: "uyku", dosage: "100-200 mg", timing: "Gece veya Kafeinle", benefit: "Zihinsel sakinlik, alfa beyin dalgaları ve stres yatıştırma.", details: "Kafeinin getirdiği çarpıntı/anksiyeteyi siler; gece zihni susturarak uykuya hazırlar." },
    { id: "cat_probiotics", name: "Geniş Spektrumlu Probiyotik", category: "uyku", dosage: "10-50 Milyar CFU", timing: "Sabah Aç Karnına", benefit: "Makro besinlerin tam emilimi, gaz/şişkinlik önleme.", details: "Bulk döneminde artan yüksek pirinç ve protein tüketiminin bağırsakta verimli emilmesini sağlar." },
    { id: "cat_enzymes", name: "Sindirim Enzimleri Kompleksi", category: "uyku", dosage: "1 Kapsül", timing: "En Ağır Öğünlerle (Proteaz/Amilaz)", benefit: "Yüksek kalorili öğünlerde mide rahatlığı ve tam sindirim.", details: "Proteaz, amilaz ve lipaz enzimleri ile büyük öğünlerin dakikalar içinde parçalanmasını sağlar." },
    { id: "cat_gaba", name: "GABA (Gama-Aminobütirik Asit)", category: "uyku", dosage: "500-1000 mg", timing: "Gece Yatmadan Önce", benefit: "Merkezi sinir sistemi inhibisyonu ve derin toparlanma.", details: "Beyindeki aşırı elektriksel aktiviteyi yatıştırır." },
    { id: "cat_5htp", name: "5-HTP (5-Hidroksitriptofan)", category: "uyku", dosage: "100 mg", timing: "Gece", benefit: "Serotonin & melatonin sentezi, iştah dengesi.", details: "Triptofanın doğrudan serotonin ve melatonine dönüşen basamağıdır." },
    { id: "cat_applecider", name: "Elma Sirkesi (Organik / Analı)", category: "uyku", dosage: "1 Yemek Kaşığı (Suya)", timing: "Büyük Öğünlerden 10dk Önce", benefit: "Mide asiditesi (HCL) optimizasyonu ve glisemik kontrol.", details: "Mide PH'ını düşürerek proteinlerin parçalanmasını ve pepsin enziminin çalışmasını hızlandırır." },
    { id: "cat_inulin", name: "İnülin / Prebiyotik Lif", category: "uyku", dosage: "5 gram", timing: "Öğünle Birlikte", benefit: "Yararlı bağırsak bakterilerini besleme ve sindirim düzeni.", details: "Kısa zincirli yağ asitleri (SCFA) üretimini artırarak metabolik sağlığı korur." },
    { id: "cat_tartcherry", name: "Tart Cherry (Vişne Ekstresi)", category: "uyku", dosage: "500 mg", timing: "Gece / Antrenman Sonrası", benefit: "Doğal melatonin kaynağı ve kas ağrısı (DOMS) azaltma.", details: "Yüksek antosiyanin içeriğiyle kas iltihabını temizler ve derin uykuyu tetikler." },
    { id: "cat_apigenin", name: "Apigenin (Papatya Ekstresi)", category: "uyku", dosage: "50 mg", timing: "Uykudan 1 Saat Önce", benefit: "Kortizolü nötralize etme ve derin kas gevşemesi.", details: "GABA-A reseptörlerine bağlanarak uyku kalitesini artırır." }
];

// ==================== EXERCISE ENCYCLOPEDIA ====================
const EXERCISE_LIBRARY = [
    { id: "lib_inc_db", name: "Incline Dumbbell Press", muscle: "Üst Göğüs (Clavicular Head)", defaultTarget: "2 Çalışma Seti (6-9 Rep)", defaultSets: 2, defaultSeat: "Açı: 30°", isTopSet: true, desc: "Üst göğüs liflerini köprücük kemiği hattında maksimum mekanik gerilimle esnetir ve kalınlık kazandırır." },
    { id: "lib_plate_press", name: "Plate Loaded Chest Press", muscle: "Orta & Tüm Göğüs", defaultTarget: "2 Çalışma Seti (8-10 Rep)", defaultSets: 2, defaultSeat: "Koltuk: 4", isTopSet: true, desc: "Serbest ağırlık yorgunluğu olmadan göğüs kaslarını güvenle tam tükenişe götürmeyi sağlar." },
    { id: "lib_pec_deck", name: "Pec Deck Fly (Makine Göğüs)", muscle: "İç & Tüm Göğüs İzolasyonu", defaultTarget: "2 Çalışma Seti (10-12 Rep)", defaultSets: 2, defaultSeat: "Koltuk: 3, Kol: 2", isTopSet: false, desc: "Maksimum yatay adduksiyon sağlayarak göğüs liflerinin tepe sıkışmasını hedefler." },
    { id: "lib_dips", name: "Weighted Chest Dips", muscle: "Alt Göğüs & Ön Omuz", defaultTarget: "2 Set (6-8 Rep)", defaultSets: 2, defaultSeat: "Gövde Öne Eğik", isTopSet: true, desc: "Vücut ağırlığı veya zincirle alt göğüs çizgisine ve tricepse muazzam bir kütle kazandırır." },
    { id: "lib_cable_cross", name: "Cable Crossover / Fly", muscle: "Alt & İç Göğüs", defaultTarget: "3 Set (12-15 Rep)", defaultSets: 3, defaultSeat: "Kablolar Üstte", isTopSet: false, desc: "Sürekli gerilim hattında göğüs kaslarını kanla doldurur ve pump yaratır." },
    { id: "lib_flat_bench", name: "Flat Barbell Bench Press", muscle: "Genel Göğüs Gücü", defaultTarget: "3 Set (5-8 Rep)", defaultSets: 3, defaultSeat: "Düz Sehpa", isTopSet: true, desc: "Klasik göğüs kütle ve güç temel taşıdır." },
    { id: "lib_high_row", name: "High Row Tek Kol", muscle: "Alt & Orta Lat (Kanat)", defaultTarget: "2 Set (6-8 Rep, Dirsek Gövdeye)", defaultSets: 2, defaultSeat: "Koltuk: 3, Göğüs Pedi: 2", isTopSet: true, desc: "Dirseği kalçaya doğru çekerek alt lat liflerine cerrahi izolasyon sağlar." },
    { id: "lib_tbar_row", name: "T-Bar Row (Göğüs Destekli)", muscle: "Orta Sırt, Rhomboid & Kalınlık", defaultTarget: "2 Sert Set (8-10 Rep)", defaultSets: 2, defaultSeat: "Göğüs Destekli", isTopSet: true, desc: "Omurgaya gereksiz yük bindirmeden orta sırtı kalınlaştıran 1 numaralı harekettir." },
    { id: "lib_lat_pull", name: "Geniş Tutuş Lat Pulldown", muscle: "Üst Lat & Teres Major (V-Taper)", defaultTarget: "2-3 Set (10-12 Rep)", defaultSets: 2, defaultSeat: "Bacak Pedi: 4", isTopSet: false, desc: "Sırtın genişliğini ve önden bakıldığında kanatların açılmasını sağlar." },
    { id: "lib_chest_row", name: "Chest-Supported Wide Grip Row", muscle: "Üst Sırt & Arka Omuz Hattı", defaultTarget: "2 Set (8-10 Rep)", defaultSets: 2, defaultSeat: "Koltuk: 2, Göğüs: 3", isTopSet: true, desc: "Geniş tutuşla skapulaları birbirine yapıştırarak 3D sırt detaylarını ortaya çıkarır." },
    { id: "lib_seated_cable_row", name: "Seated Cable Row (V-Bar)", muscle: "Orta Sırt & Lat Kalınlığı", defaultTarget: "3 Set (10-12 Rep)", defaultSets: 3, defaultSeat: "Düz Zemin", isTopSet: false, desc: "Kablo gerilimiyle sırtın derinlemesine kasılmasını sağlar." },
    { id: "lib_db_pullover", name: "Dumbbell Pullover", muscle: "Serratus Anterior & Lat Esneme", defaultTarget: "2 Set (10-12 Rep)", defaultSets: 2, defaultSeat: "Sehpada Enlemesine", isTopSet: false, desc: "Göğüs kafesini açar ve latların en derin esneme pozisyonunda büyümesini tetikler." },
    { id: "lib_rev_pec_deck", name: "Reverse Pec Deck Fly", muscle: "Arka Omuz (Posterior Deltoid)", defaultTarget: "3 Set (Skapula Sabit, 10-12 Rep)", defaultSets: 3, defaultSeat: "Pede Göğüs Dayalı", isTopSet: true, desc: "Skapulayı hareket ettirmeden arka omuz başını izole ederek 3D omuz görüntüsünün temelini atar." },
    { id: "lib_mach_lateral", name: "Tek Kol Makine Lateral Raise", muscle: "Yan Omuz (Lateral Deltoid)", defaultTarget: "3 Set (10-12 Rep)", defaultSets: 3, defaultSeat: "Koltuk: 5", isTopSet: false, desc: "Yerçekimi açısını nötralize ederek yan omuzda sürekli gerilim sağlar." },
    { id: "lib_face_pull", name: "Kablo Face Pull", muscle: "Arka Omuz & Dış Rotatörler", defaultTarget: "3 Set (12-15 Rep)", defaultSets: 3, defaultSeat: "Kablo: Göz Hizası", isTopSet: false, desc: "Omuz eklemini korur, postürü düzeltir ve arka omuz kütlesini artırır." },
    { id: "lib_db_lateral", name: "Dumbbell Lateral Raise", muscle: "Yan Omuz", defaultTarget: "3 Set (12-15 Rep)", defaultSets: 3, defaultSeat: "Ayakta / Hafif Eğik", isTopSet: false, desc: "Omuz genişliğinin klasik ve vazgeçilmez hareketidir." },
    { id: "lib_db_shoulder_press", name: "Seated Dumbbell Shoulder Press", muscle: "Ön Omuz & Yan Omuz Gücü", defaultTarget: "2 Sert Set (6-8 Rep)", defaultSets: 2, defaultSeat: "Açı: 75°", isTopSet: true, desc: "Omuz kemerine ham itiş gücü ve kütle kazandırır." },
    { id: "lib_straight_bar_push", name: "Düz Bar Triceps Pushdown", muscle: "Triceps Lateral Baş (Dış Kütle)", defaultTarget: "3 Set (Ağır & Sıkı)", defaultSets: 3, defaultSeat: "Kablo: En Üst", isTopSet: true, desc: "Dıştan bakıldığında kolu geniş gösteren Lateral başı en sert vuran harekettir." },
    { id: "lib_overhead_cable_ext", name: "Overhead Dual Cable Triceps Extension", muscle: "Triceps Uzun Baş (Long Head)", defaultTarget: "3 Set (Tam Esneme, 8-10 Rep)", defaultSets: 3, defaultSeat: "Kablo Omuz Boyu", isTopSet: true, desc: "Triceps kas kütlesinin %60'ını oluşturan uzun başı derin esnemede hipertrofiye zorlar." },
    { id: "lib_rope_pushdown", name: "Halat Triceps Pushdown", muscle: "Triceps Dış & Medial Baş", defaultTarget: "2-3 Set (10-12 Rep)", defaultSets: 2, defaultSeat: "Kablo: Üst", isTopSet: false, desc: "Altta halatı iki yana açarak tepe sıkışmayı maksimize eder." },
    { id: "lib_skullcrusher", name: "Lying EZ-Bar Skullcrusher", muscle: "Triceps Uzun Baş & Genel", defaultTarget: "3 Set (8-10 Rep)", defaultSets: 3, defaultSeat: "Düz Sehpa", isTopSet: true, desc: "Alna doğru indirerek triceps eklemini tam bükülmede yükler." },
    { id: "lib_bb_curl", name: "Barbell Biceps Curl", muscle: "Genel Biceps Gücü", defaultTarget: "2 Set (Ağır, 6-8 Rep)", defaultSets: 2, defaultSeat: "Düz Bar", isTopSet: true, desc: "Biceps kütle inşasının en temel ve ağır serbest ağırlık hareketidir." },
    { id: "lib_db_incline_curl", name: "Incline Dumbbell Curl", muscle: "Biceps Uzun Baş (Peak)", defaultTarget: "2-3 Set (10-12 Rep)", defaultSets: 2, defaultSeat: "Açı: 45°", isTopSet: false, desc: "Omzun gerisinde kalarak biceps uzun başını tam gerilimde esnetir." },
    { id: "lib_hammer_curl", name: "Dumbbell Hammer Curl", muscle: "Brachialis & Ön Kol (Ön Kalınlık)", defaultTarget: "2 Set (8-10 Rep)", defaultSets: 2, defaultSeat: "Ayakta / Nötr Tutuş", isTopSet: false, desc: "Biceps ile triceps arasındaki Brachialis kasını büyüterek kolu dışarı doğru iter ve kalınlaştırır." },
    { id: "lib_preacher_curl", name: "Preacher Curl (Scot Bench)", muscle: "Biceps Kısa Baş & İzolasyon", defaultTarget: "2 Set (10-12 Rep)", defaultSets: 2, defaultSeat: "Koltuk: 3", isTopSet: false, desc: "Vücut ivmesini sıfırlayarak biceps alt bağlantı noktasına saf gerilim bindirir." },
    { id: "lib_reverse_curl", name: "Kablo Ters Tutuş V-Bar Curl", muscle: "Brachioradialis (Ön Kol Üstü)", defaultTarget: "2 Set (12-15 Rep)", defaultSets: 2, defaultSeat: "Kablo Alt", isTopSet: false, desc: "Kavrama gücünü ve ön kolun üst kalınlığını inşa eder." },
    { id: "lib_hack_squat", name: "Hack Squat (Quad Kralı)", muscle: "Ön Bacak (Vastus Medialis / Gözyaşı)", defaultTarget: "2 Ağır Set (3sn Negatif, Tam Derinlik)", defaultSets: 2, defaultSeat: "Ayaklar Dar & Altta", isTopSet: true, desc: "Diz fleksiyonunu maksimize ederek ön bacak liflerini cerrahi hassasiyetle parçalar." },
    { id: "lib_leg_press", name: "Plate Loaded Leg Press", muscle: "Genel Quad & Kalça Gücü", defaultTarget: "2 Sert Çalışma Seti", defaultSets: 2, defaultSeat: "Platform Altı", isTopSet: true, desc: "Omurga yorgunluğu olmadan yüksek tonajla bacaklara aşırı yük bindirir." },
    { id: "lib_rdl", name: "Dumbbell / Barbell RDL", muscle: "Hamstring (Arka Bacak) & Glute", defaultTarget: "2 Sıkı Set (8-10 Rep)", defaultSets: 2, defaultSeat: "Düz Zemin", isTopSet: false, desc: "Kalçayı geriye iterek arka bacak liflerini en derin esneme pozisyonunda büyütür." },
    { id: "lib_adductor", name: "Adductor Machine (Bacak İçi)", muscle: "Bacak İçi Adductor Kasları", defaultTarget: "3 Set (12-15 Rep)", defaultSets: 3, defaultSeat: "Geniş Açı: 4", isTopSet: false, desc: "Önden bakıldığında bacağın içini doldurarak devasa bir kalınlık katar." },
    { id: "lib_leg_ext", name: "Leg Extension", muscle: "Quad İzolasyonu & Rectus Femoris", defaultTarget: "1-2 Bitirici Set (Maks Pump)", defaultSets: 2, defaultSeat: "Koltuk: 3", isTopSet: false, desc: "Ön bacağın üst tepe noktasında tam kilitlenme sağlar." },
    { id: "lib_leg_curl", name: "Lying / Seated Leg Curl", muscle: "Hamstring İzolasyon", defaultTarget: "2-3 Set (10-12 Rep)", defaultSets: 2, defaultSeat: "Ped Ayarlı", isTopSet: false, desc: "Diz fleksiyonuyla arka bacak kaslarını izole eder." },
    { id: "lib_calf_raise", name: "Standing / Seated Calf Raise", muscle: "Kalf (Gastrocnemius & Soleus)", defaultTarget: "3 Set (Tepe 2sn Bekleme, 12-15 Rep)", defaultSets: 3, defaultSeat: "Platform", isTopSet: false, desc: "Tam esneme ve tepe sıkışmayla inatçı kalf liflerini büyütür." },
    { id: "lib_db_shrug", name: "Dumbbell Shrug", muscle: "Üst Trapez Kütlesi", defaultTarget: "2 Set (Maks Ağırlık / Tepe Bekleme)", defaultSets: 2, defaultSeat: "Ayakta", isTopSet: false, desc: "Boyun ve omuz arasındaki trapez kaslarına kalınlık katar." },
    { id: "lib_cable_crunch", name: "Kablo Halat Crunch", muscle: "Rektus Abdominis (Karın Kasları)", defaultTarget: "3 Set (12-15 Rep)", defaultSets: 3, defaultSeat: "Dizler Üzerinde", isTopSet: false, desc: "Karın kaslarına ağırlık bindirerek six-pack tuğlalarını kalınlaştırır." },
    { id: "lib_hanging_leg_raise", name: "Hanging Leg / Knee Raise", muscle: "Alt Karın & Core", defaultTarget: "3 Set (Maks Rep)", defaultSets: 3, defaultSeat: "Barda Asılı", isTopSet: false, desc: "Pelvisi yukarı bükerek alt karın duvarını sıkılaştırır." }
];

// Initial 5-Day Workout Template
const DEFAULT_WORKOUT_PLAN = {
    pzt: {
        title: "Push 1 (İtiş + Triceps)",
        desc: "Göğüs Gücü + Lateral Triceps + Yan Omuz",
        exercises: [
            { id: "pzt_1", name: "Incline Dumbbell Press", muscle: "Üst Göğüs", target: "2 Çalışma Seti (6-9 Tekrar)", defaultSets: 2, defaultSeat: "Açı: 30°", isTopSet: true },
            { id: "pzt_2", name: "Plate Loaded Chest Press", muscle: "Orta Göğüs", target: "2 Çalışma Seti (8-10 Tekrar)", defaultSets: 2, defaultSeat: "Koltuk: 4", isTopSet: true },
            { id: "pzt_3", name: "Pec Deck Fly", muscle: "İç Göğüs", target: "2 Çalışma Seti (10-12 Tekrar)", defaultSets: 2, defaultSeat: "Koltuk: 3, Kol: 2", isTopSet: false },
            { id: "pzt_4", name: "Düz Bar Triceps Pushdown", muscle: "Lateral Baş Triceps", target: "2-3 Set (Lateral Baş, Ağır & Sıkı)", defaultSets: 3, defaultSeat: "Kablo: En Üst", isTopSet: true },
            { id: "pzt_5", name: "Tek Kol Makine Lateral", muscle: "Yan Omuz 3D", target: "3 Set (Yan Omuz İzolasyon)", defaultSets: 3, defaultSeat: "Koltuk: 5", isTopSet: false }
        ]
    },
    sal: {
        title: "Pull 1 (Lat Genişlik + Arka Omuz)",
        desc: "Arka Omuz Öncelikli + Dikey Çekiş + Kollar",
        exercises: [
            { id: "sal_1", name: "Reverse Pec Deck Fly (Arka Omuz)", muscle: "Arka Omuz İzolasyon", target: "3 Set (Skapula Sabit, 10-12 Rep)", defaultSets: 3, defaultSeat: "Pede Göğüs Dayalı", isTopSet: true },
            { id: "sal_2", name: "High Row Tek Kol (Lat Odak)", muscle: "Alt/Orta Lat", target: "2 Set (6-8 Tekrar, Dirsek Gövdeye)", defaultSets: 2, defaultSeat: "Koltuk: 3, Göğüs Pedi: 2", isTopSet: true },
            { id: "sal_3", name: "T-Bar Row", muscle: "Orta Sırt & Kalınlık", target: "2 Sert Çalışma Seti (8-10 Tekrar)", defaultSets: 2, defaultSeat: "Göğüs Destekli", isTopSet: true },
            { id: "sal_4", name: "Geniş Tutuş Lat Pulldown", muscle: "Üst Lat (Genişlik)", target: "2 Set (Üst Lat / Teres Major)", defaultSets: 2, defaultSeat: "Bacak Pedi: 4", isTopSet: false },
            { id: "sal_5", name: "Dumbbell Shrug", muscle: "Trapez", target: "2 Set (Maks Ağırlık / Maks Rep)", defaultSets: 2, defaultSeat: "Ayakta", isTopSet: false },
            { id: "sal_6", name: "Barbell Biceps Curl", muscle: "Genel Biceps", target: "2 Set (Ağır Biceps & Ön Kol)", defaultSets: 2, defaultSeat: "Düz Bar", isTopSet: true },
            { id: "sal_7", name: "Dumbbell Curl + Ters Tutuş V-Bar", muscle: "Brachialis & Ön Kol", target: "2'şer Set (Brachialis / Ön Kol)", defaultSets: 2, defaultSeat: "Kablo Alt", isTopSet: false }
        ]
    },
    car: {
        title: "Legs + Triceps Frekansı",
        desc: "Triceps İzolasyon + Cerrahi Quad + Hamstring",
        exercises: [
            { id: "car_1", name: "Halat Triceps Pushdown", muscle: "Triceps Dış Baş", target: "2 Set (Taze Enerjiyle İzolasyon)", defaultSets: 2, defaultSeat: "Kablo: Üst", isTopSet: true },
            { id: "car_2", name: "Hack Squat (Quad Kralı)", muscle: "Ön Bacak Quad", target: "2 Ağır Set (3sn iniş, Tam Derinlik)", defaultSets: 2, defaultSeat: "Ayaklar Dar & Altta", isTopSet: true },
            { id: "car_3", name: "Leg Press (Quad Odaklı)", muscle: "Genel Bacak Gücü", target: "2 Sert Çalışma Seti", defaultSets: 2, defaultSeat: "Platform Altı", isTopSet: true },
            { id: "car_4", name: "Dumbbell RDL (Hamstring/Glute)", muscle: "Arka Bacak & Kalça", target: "2 Sıkı Set (8-10 Tekrar)", defaultSets: 2, defaultSeat: "Düz Zemin", isTopSet: false },
            { id: "car_5", name: "Adductor Machine (Bacak İçi)", muscle: "Bacak İçi Kalınlık", target: "2-3 Set (Ön Kalınlık, 12-15 Rep)", defaultSets: 3, defaultSeat: "Geniş Açı: 4", isTopSet: false },
            { id: "car_6", name: "Leg Extension", muscle: "Quad İzolasyon", target: "1 Bitirici Pump Seti", defaultSets: 1, defaultSeat: "Maks Yanma", isTopSet: false }
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
            { id: "cum_1", name: "Arka Omuz Fly (Reverse Pec Deck)", muscle: "Arka Omuz", target: "3 Set (Taze Sinir Sistemiyle)", defaultSets: 3, defaultSeat: "Koltuk: 3", isTopSet: true },
            { id: "cum_2", name: "Makine Chest Press", muscle: "Göğüs Gücü", target: "2 Sert Set (Derin Esneme)", defaultSets: 2, defaultSeat: "Koltuk: 4", isTopSet: true },
            { id: "cum_3", name: "Pec Fly", muscle: "Göğüs İzolasyon", target: "2 Set (Göğüs Bitirici)", defaultSets: 2, defaultSeat: "Açı: 2", isTopSet: false },
            { id: "cum_4", name: "Overhead Dual Cable Triceps Extension", muscle: "Triceps Uzun Baş", target: "3 Set (Uzun Baş Kütle İnşası)", defaultSets: 3, defaultSeat: "Kablo Omuz Boyu", isTopSet: true },
            { id: "cum_5", name: "Tek Kol Makine Lateral", muscle: "Yan Omuz 3D", target: "3 Set (Yan Omuz 3D)", defaultSets: 3, defaultSeat: "Koltuk: 5", isTopSet: false }
        ]
    },
    cmt: {
        title: "Pull 2 (Sırt Kalınlık & Trapez)",
        desc: "Orta Sırt + Trapez + Biceps & Ön Kol",
        exercises: [
            { id: "cmt_1", name: "High Row Tek Kol", muscle: "Alt/Orta Lat", target: "2 Set (Lat Odaklı)", defaultSets: 2, defaultSeat: "Koltuk: 3", isTopSet: true },
            { id: "cmt_2", name: "T-Bar Row", muscle: "Orta Sırt Kalınlık", target: "2 Ağır Çalışma Seti", defaultSets: 2, defaultSeat: "Geniş Tutuş", isTopSet: true },
            { id: "cmt_3", name: "Chest-Supported Wide Grip Row", muscle: "Üst Sırt / Rhomboid", target: "2 Set (Orta-Üst Sırt / Rhomboid)", defaultSets: 2, defaultSeat: "Koltuk: 2, Göğüs Pedi: 3", isTopSet: true },
            { id: "cmt_4", name: "Dumbbell Shrug", muscle: "Trapez", target: "2 Set (Maks Ağırlık / Maks Rep)", defaultSets: 2, defaultSeat: "Ayakta", isTopSet: false },
            { id: "cmt_5", name: "Barbell Curl + DB Curl + Ters V-Bar", muscle: "Biceps & Ön Kol", target: "2'şer Set (Kol / Ön Kol Paketi)", defaultSets: 2, defaultSeat: "Kablo & Serbest", isTopSet: true }
        ]
    },
    paz: {
        title: "OFF (Tam Dinlenme & Haftalık Check-in)",
        desc: "Tartı Ortalaması Hesaplama & Yeni Hafta Hazırlığı",
        exercises: []
    }
};

function createDefaultAppData() {
    return {
        targets: { ...DEFAULT_TARGETS },
        pinnedQuickActions: ["water", "pancake", "steps_1000", "steps_manual"],
        customPresets: { ...DEFAULT_PRESET_MEALS },
        customWorkoutPlan: JSON.parse(JSON.stringify(DEFAULT_WORKOUT_PLAN)),
        supplements: [
            MASTER_SUPPLEMENT_DATABASE[0], // Kreatin
            MASTER_SUPPLEMENT_DATABASE[10], // Whey Isolate
            MASTER_SUPPLEMENT_DATABASE[30], // Omega 3
            MASTER_SUPPLEMENT_DATABASE[20], // D3+K2
            MASTER_SUPPLEMENT_DATABASE[21]  // Magnezyum Bisglisinat
        ],
        supplementsLog: {},
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
        workoutLogs: {},
        exerciseSetsCount: {},
        seatSettings: {},
        weightHistory: [],
        onboardingCompleted: false,
        userProfile: null
    };
}

// Global App State
let appData = createDefaultAppData();

let currentActiveDay = "pzt";
let currentSuppCatalogCategory = "all";
let currentRecipeIngredients = []; // [ { foodId, amount } ]

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    const hasActiveSession = loadDataFromStorage();
    checkAndResetDailyNutrition();
    recalculateDailyTotals();
    updateDateDisplay();
    updateTopBarUserHeader();
    renderDashboard();
    renderWorkoutView(currentActiveDay);
    renderNutritionView();
    renderSupplementsView();
    renderScaleView();
    updateCoachReport();
    initSettingsForm();
    renderSupplementCatalog();

    if (!hasActiveSession && !getActiveSessionUsername()) {
        openAuthModal("login");
    } else {
        checkOnboardingStatus();
    }
});

// Storage Management
function loadDataFromStorage() {
    const activeUsername = getActiveSessionUsername();
    const registry = getUsersRegistry();

    // 1. If active user exists in registry, load their isolated data
    if (activeUsername && registry[activeUsername] && registry[activeUsername].data) {
        const parsed = registry[activeUsername].data;
        appData = {
            ...createDefaultAppData(),
            ...parsed,
            targets: { ...DEFAULT_TARGETS, ...(parsed.targets || {}) },
            customPresets: { ...DEFAULT_PRESET_MEALS, ...(parsed.customPresets || {}) },
            customWorkoutPlan: parsed.customWorkoutPlan || JSON.parse(JSON.stringify(DEFAULT_WORKOUT_PLAN)),
            supplements: parsed.supplements && parsed.supplements.length > 0 ? parsed.supplements : appData.supplements,
            pinnedQuickActions: parsed.pinnedQuickActions || ["water", "pancake", "steps_1000", "steps_manual"],
            todayNutrition: { ...createDefaultAppData().todayNutrition, ...(parsed.todayNutrition || {}) },
            supplementsLog: parsed.supplementsLog || {},
            workoutLogs: parsed.workoutLogs || {},
            exerciseSetsCount: parsed.exerciseSetsCount || {},
            seatSettings: parsed.seatSettings || {},
            weightHistory: parsed.weightHistory || [],
            onboardingCompleted: parsed.onboardingCompleted !== undefined ? parsed.onboardingCompleted : false,
            userProfile: parsed.userProfile || null
        };
        return true;
    }

    // 2. Legacy fallback
    const saved = localStorage.getItem("LEAN_BULK_APP_DATA");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appData = {
                ...createDefaultAppData(),
                ...parsed,
                targets: { ...DEFAULT_TARGETS, ...(parsed.targets || {}) },
                customPresets: { ...DEFAULT_PRESET_MEALS, ...(parsed.customPresets || {}) },
                customWorkoutPlan: parsed.customWorkoutPlan || JSON.parse(JSON.stringify(DEFAULT_WORKOUT_PLAN)),
                supplements: parsed.supplements && parsed.supplements.length > 0 ? parsed.supplements : appData.supplements,
                pinnedQuickActions: parsed.pinnedQuickActions || ["water", "pancake", "steps_1000", "steps_manual"],
                todayNutrition: { ...createDefaultAppData().todayNutrition, ...(parsed.todayNutrition || {}) },
                supplementsLog: parsed.supplementsLog || {},
                workoutLogs: parsed.workoutLogs || {},
                exerciseSetsCount: parsed.exerciseSetsCount || {},
                seatSettings: parsed.seatSettings || {},
                weightHistory: parsed.weightHistory || [],
                onboardingCompleted: parsed.onboardingCompleted !== undefined ? parsed.onboardingCompleted : false,
                userProfile: parsed.userProfile || null
            };
            return true;
        } catch (e) {
            console.error("Storage load error:", e);
        }
    }
    return false;
}

function saveDataToStorage() {
    const activeUsername = getActiveSessionUsername();
    if (activeUsername) {
        const registry = getUsersRegistry();
        if (registry[activeUsername]) {
            registry[activeUsername].data = JSON.parse(JSON.stringify(appData));
            saveUsersRegistry(registry);
        }
    }
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

// Recalculate today totals from actual logged meals (prevents desync!)
function recalculateDailyTotals() {
    const meals = appData.todayNutrition.meals || [];
    let totCal = 0, totP = 0, totC = 0, totF = 0;
    meals.forEach(m => {
        totCal += m.cal || 0;
        totP += m.p || 0;
        totC += m.c || 0;
        totF += m.f || 0;
    });

    appData.todayNutrition.calories = totCal;
    appData.todayNutrition.protein = totP;
    appData.todayNutrition.carbs = totC;
    appData.todayNutrition.fat = totF;
}

// Navigation & Modals
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

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");
        if (modalId === "modal-settings") initSettingsForm();
        if (modalId === "modal-quick-actions") renderQuickActionsConfig();
        if (modalId === "modal-supplement-catalog") renderSupplementCatalog();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// Date Display & Header
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

    const todayWorkout = appData.customWorkoutPlan[currentDayKey] || DEFAULT_WORKOUT_PLAN[currentDayKey];
    if (todayWorkout) {
        const dName = document.getElementById("today-day-name");
        const wTitle = document.getElementById("today-workout-title");
        const wDesc = document.getElementById("today-workout-desc");
        if (dName) dName.innerText = days[today.getDay()];
        if (wTitle) wTitle.innerText = todayWorkout.title;
        if (wDesc) wDesc.innerText = todayWorkout.desc;
    }

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
    recalculateDailyTotals();
    const n = appData.todayNutrition;
    const t = appData.targets;

    document.getElementById("consumed-cal").innerText = Math.round(n.calories).toLocaleString('tr-TR');
    document.getElementById("target-cal-lbl").innerText = ` / ${t.calories.toLocaleString('tr-TR')} kcal`;
    document.getElementById("macro-status-badge").innerText = `${t.calories.toLocaleString('tr-TR')} kcal`;
    document.getElementById("remaining-cal").innerText = Math.max(0, Math.round(t.calories - n.calories)).toLocaleString('tr-TR');
    
    document.getElementById("water-consumed").innerText = (n.water || 0).toFixed(1);
    document.getElementById("target-water-lbl").innerText = t.water.toFixed(1);

    const stepsCount = n.steps || 0;
    document.getElementById("steps-val").innerText = stepsCount.toLocaleString('tr-TR');
    document.getElementById("target-steps-lbl").innerText = t.steps.toLocaleString('tr-TR');
    const stepsPct = Math.min(100, (stepsCount / t.steps) * 100);
    const barSteps = document.getElementById("bar-steps");
    if (barSteps) barSteps.style.width = `${stepsPct}%`;

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

// ==================== SMART RECIPE & RAW INGREDIENT BUILDER ====================

function openNewRecipeBuilderModal() {
    document.getElementById("recipe-edit-preset-id").value = "";
    document.getElementById("recipe-meal-name").value = "";
    document.getElementById("recipe-builder-title").innerHTML = `<i class="fa-solid fa-utensils"></i> Çiğ Gramajlı Öğün Oluşturucu`;
    document.getElementById("recipe-add-today-row").style.display = "block";
    document.getElementById("recipe-add-today-chk").checked = true;
    document.getElementById("recipe-save-preset-chk").checked = true;

    currentRecipeIngredients = [
        { foodId: "tavuk_gogsu", amount: 200 },
        { foodId: "cig_pirinc", amount: 150 },
        { foodId: "zeytinyagi", amount: 10 }
    ];

    renderRecipeIngredientsRows();
    openModal('modal-recipe-builder');
}

function openEditRecipeModal(presetKey) {
    const preset = (appData.customPresets && appData.customPresets[presetKey]) || DEFAULT_PRESET_MEALS[presetKey];
    if (!preset) return;

    document.getElementById("recipe-edit-preset-id").value = presetKey;
    document.getElementById("recipe-meal-name").value = preset.name;
    document.getElementById("recipe-builder-title").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Şablonu Düzenle: ${preset.name}`;
    document.getElementById("recipe-save-preset-chk").checked = true;
    document.getElementById("recipe-add-today-chk").checked = false;

    if (preset.ingredients && preset.ingredients.length > 0) {
        currentRecipeIngredients = JSON.parse(JSON.stringify(preset.ingredients));
    } else {
        // Fallback if older preset had no ingredients list
        currentRecipeIngredients = [
            { foodId: "tavuk_gogsu", amount: 150 },
            { foodId: "cig_pirinc", amount: 100 }
        ];
    }

    renderRecipeIngredientsRows();
    openModal('modal-recipe-builder');
}

function addIngredientRow(foodId = "cig_pirinc", amount = 100) {
    currentRecipeIngredients.push({ foodId: foodId, amount: amount });
    renderRecipeIngredientsRows();
}

function removeIngredientRow(index) {
    currentRecipeIngredients.splice(index, 1);
    renderRecipeIngredientsRows();
}

function updateIngredientRowFood(index, newFoodId) {
    if (currentRecipeIngredients[index]) {
        currentRecipeIngredients[index].foodId = newFoodId;
        renderRecipeIngredientsRows();
    }
}

function updateIngredientRowAmount(index, newAmount) {
    if (currentRecipeIngredients[index]) {
        currentRecipeIngredients[index].amount = parseFloat(newAmount) || 0;
        calculateRecipeLiveTotals();
    }
}

function renderRecipeIngredientsRows() {
    const container = document.getElementById("recipe-ingredients-container");
    if (!container) return;

    if (currentRecipeIngredients.length === 0) {
        container.innerHTML = `<p class="text-muted" style="text-align:center; font-size:0.75rem; padding:10px;">Henüz malzeme eklenmedi. "+ Malzeme Ekle" butonuna bas.</p>`;
        calculateRecipeLiveTotals();
        return;
    }

    let html = "";
    currentRecipeIngredients.forEach((item, idx) => {
        const food = RAW_FOODS_DATABASE.find(f => f.id === item.foodId) || RAW_FOODS_DATABASE[0];
        const factor = (item.amount || 0) / 100;
        const rowP = (food.p * factor).toFixed(1);
        const rowC = (food.c * factor).toFixed(1);
        const rowF = (food.f * factor).toFixed(1);
        const rowCal = Math.round(food.cal * factor);

        html += `
            <div class="ingredient-row">
                <div class="ing-inputs-top">
                    <select class="ing-food-select" onchange="updateIngredientRowFood(${idx}, this.value)">
                        ${RAW_FOODS_DATABASE.map(f => `
                            <option value="${f.id}" ${f.id === item.foodId ? 'selected' : ''}>${f.name}</option>
                        `).join("")}
                    </select>
                    <input type="number" class="ing-amount-input" value="${item.amount}" step="5" min="1" 
                           oninput="updateIngredientRowAmount(${idx}, this.value)" title="Gramaj / Miktar">
                    <span style="font-size:0.72rem; color:var(--text-secondary); font-weight:600;">gr</span>
                    <button class="btn-delete-item" onclick="removeIngredientRow(${idx})" title="Malzemeyi Sil"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="ing-macro-preview">
                    <span>${item.amount}g ➔ ${rowCal} kcal</span>
                    <span>${rowP}g P • ${rowC}g C • ${rowF}g F</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    calculateRecipeLiveTotals();
}

function calculateRecipeLiveTotals() {
    let totP = 0, totC = 0, totF = 0, totCal = 0;
    let descParts = [];

    currentRecipeIngredients.forEach(item => {
        const food = RAW_FOODS_DATABASE.find(f => f.id === item.foodId);
        if (food) {
            const factor = (item.amount || 0) / 100;
            totP += food.p * factor;
            totC += food.c * factor;
            totF += food.f * factor;
            totCal += food.cal * factor;
            descParts.push(`${item.amount}g ${food.name.split(' (')[0]}`);
        }
    });

    totP = Math.round(totP * 10) / 10;
    totC = Math.round(totC * 10) / 10;
    totF = Math.round(totF * 10) / 10;
    totCal = Math.round(totCal);

    const calEl = document.getElementById("recipe-calc-calories");
    const pEl = document.getElementById("recipe-calc-p");
    const cEl = document.getElementById("recipe-calc-c");
    const fEl = document.getElementById("recipe-calc-f");

    if (calEl) calEl.innerText = `${totCal} kcal`;
    if (pEl) pEl.innerText = `${totP}g`;
    if (cEl) cEl.innerText = `${totC}g`;
    if (fEl) fEl.innerText = `${totF}g`;

    return { cal: totCal, p: totP, c: totC, f: totF, desc: descParts.join(" + ") };
}

function saveRecipeBuilderMeal() {
    const presetIdInput = document.getElementById("recipe-edit-preset-id").value;
    const nameInput = document.getElementById("recipe-meal-name").value.trim();
    const saveAsPreset = document.getElementById("recipe-save-preset-chk").checked;
    const addToToday = document.getElementById("recipe-add-today-chk").checked;

    if (!nameInput) {
        alert("Lütfen öğün adı girin (Örn: Antrenman Önü).");
        return;
    }

    if (currentRecipeIngredients.length === 0) {
        alert("Lütfen en az bir malzeme ekleyin.");
        return;
    }

    const totals = calculateRecipeLiveTotals();
    const presetKey = presetIdInput || ("custom_" + Date.now());

    // Save as preset template if selected
    if (saveAsPreset) {
        if (!appData.customPresets) appData.customPresets = {};
        appData.customPresets[presetKey] = {
            id: presetKey,
            name: nameInput,
            ingredients: JSON.parse(JSON.stringify(currentRecipeIngredients)),
            desc: totals.desc,
            cal: totals.cal,
            p: totals.p,
            c: totals.c,
            f: totals.f
        };
    }

    // Add to today's logged meals if selected
    if (addToToday) {
        appData.todayNutrition.meals.push({
            id: "meal_" + Date.now(),
            name: nameInput,
            desc: totals.desc,
            cal: totals.cal,
            p: totals.p,
            c: totals.c,
            f: totals.f,
            time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        });
    }

    recalculateDailyTotals();
    saveDataToStorage();
    renderDashboard();
    renderNutritionView();
    closeModal('modal-recipe-builder');
    showToast(`${nameInput} başarıyla kaydedildi! 🍱 (${totals.cal} kcal)`);
}

function logPresetMeal(key) {
    const meal = (appData.customPresets && appData.customPresets[key]) || DEFAULT_PRESET_MEALS[key];
    if (!meal) return;

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

    recalculateDailyTotals();
    saveDataToStorage();
    renderDashboard();
    renderNutritionView();
    showToast(`${meal.name} Eklendi! 🔥 (+${meal.cal} kcal)`);
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
    appData.todayNutrition.meals.splice(idx, 1);

    recalculateDailyTotals();
    saveDataToStorage();
    renderDashboard();
    renderNutritionView();
    showToast(`${removed.name} silindi, kalori düşürüldü 🗑️`);
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
    const presetContainer = document.getElementById("preset-meals-container");
    if (presetContainer) {
        const presets = appData.customPresets || DEFAULT_PRESET_MEALS;
        presetContainer.innerHTML = Object.keys(presets).map(key => {
            const m = presets[key];
            return `
                <div class="meal-preset-item">
                    <div class="meal-preset-details">
                        <strong>${m.name}</strong>
                        <span>${m.desc || ''}</span>
                        <small>${m.cal} kcal • ${m.p}g P • ${m.c}g C • ${m.f}g F</small>
                    </div>
                    <div style="display:flex; align-items:center; gap:6px;">
                        <button class="btn-edit-item" onclick="openEditRecipeModal('${key}')" title="Çiğ Gramajları Düzenle"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn-delete-item" onclick="deletePreset('${key}')" title="Şablonu Sil"><i class="fa-solid fa-trash"></i></button>
                        <button class="btn-circle-add" onclick="logPresetMeal('${key}')" title="Bugüne Ekle"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;
        }).join("");
    }

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

// ==================== 50+ SUPPLEMENTS MANAGEMENT & CATALOG ====================

function renderSupplementsView() {
    const container = document.getElementById("supplements-full-list");
    if (!container) return;

    const todayStr = appData.todayNutrition.date || new Date().toISOString().split('T')[0];
    const dailyLog = appData.supplementsLog[todayStr] || {};
    const supps = appData.supplements || [];

    if (supps.length === 0) {
        container.innerHTML = `<p class="text-muted" style="text-align:center; padding:20px; font-size:0.8rem;">Kayıtlı suplement bulunamadı. "50+ Katalogdan Seç" butonundan ekleyebilirsin.</p>`;
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
                        <span>${s.dosage} • <span class="supp-timing-badge">${s.timing}</span></span>
                        ${s.benefit ? `<span class="supp-benefit-tag"><i class="fa-solid fa-bolt"></i> ${s.benefit}</span>` : ''}
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    ${s.details ? `<button class="btn-edit-item" onclick="showSupplementInfo('${s.id}')" title="Bilimsel Bilgi"><i class="fa-solid fa-circle-info"></i></button>` : ''}
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

function renderSupplementCatalog() {
    const container = document.getElementById("supp-catalog-items-container");
    if (!container) return;

    const searchTerm = (document.getElementById("supp-catalog-search").value || "").toLowerCase().trim();
    const currentSuppIds = (appData.supplements || []).map(s => s.id);

    const filtered = MASTER_SUPPLEMENT_DATABASE.filter(s => {
        const matchesCat = (currentSuppCatalogCategory === "all" || s.category === currentSuppCatalogCategory);
        const matchesSearch = s.name.toLowerCase().includes(searchTerm) || (s.benefit && s.benefit.toLowerCase().includes(searchTerm));
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p class="text-muted" style="text-align:center; padding:15px; font-size:0.8rem;">Aradığınız kritere uygun takviye bulunamadı.</p>`;
        return;
    }

    container.innerHTML = filtered.map(s => {
        const alreadyAdded = currentSuppIds.includes(s.id);
        return `
            <div class="supp-catalog-item">
                <div class="supp-catalog-left">
                    <strong>${s.name}</strong>
                    <span>${s.dosage} • ${s.timing}</span>
                    <span class="supp-benefit-tag">${s.benefit}</span>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button class="btn btn-xs btn-outline" onclick="showMasterSupplementInfo('${s.id}')"><i class="fa-solid fa-info"></i></button>
                    ${alreadyAdded 
                        ? `<button class="btn btn-xs btn-outline" style="color:var(--status-green); border-color:var(--status-green);" disabled><i class="fa-solid fa-check"></i> Ekli</button>`
                        : `<button class="btn btn-xs btn-primary" onclick="addSupplementFromCatalog('${s.id}')"><i class="fa-solid fa-plus"></i> Ekle</button>`
                    }
                </div>
            </div>
        `;
    }).join("");
}

function filterSuppByCategory(cat) {
    currentSuppCatalogCategory = cat;
    document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
    const activePill = Array.from(document.querySelectorAll(".category-pill")).find(p => p.getAttribute("onclick").includes(cat));
    if (activePill) activePill.classList.add("active");
    renderSupplementCatalog();
}

function filterSupplementCatalog() {
    renderSupplementCatalog();
}

function addSupplementFromCatalog(suppId) {
    const master = MASTER_SUPPLEMENT_DATABASE.find(s => s.id === suppId);
    if (!master) return;

    if (!appData.supplements) appData.supplements = [];
    if (!appData.supplements.some(s => s.id === suppId)) {
        appData.supplements.push({ ...master });
        saveDataToStorage();
        renderSupplementsView();
        renderDashboardSupplementsSummary();
        renderSupplementCatalog();
        showToast(`${master.name} takip listene eklendi! 💊`);
    }
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

function showMasterSupplementInfo(suppId) {
    const s = MASTER_SUPPLEMENT_DATABASE.find(item => item.id === suppId);
    if (!s) return;
    displaySupplementInfoModal(s);
}

function showSupplementInfo(suppId) {
    const s = (appData.supplements || []).find(item => item.id === suppId) || MASTER_SUPPLEMENT_DATABASE.find(item => item.id === suppId);
    if (!s) return;
    displaySupplementInfoModal(s);
}

function displaySupplementInfoModal(s) {
    document.getElementById("supp-info-title").innerHTML = `<i class="fa-solid fa-capsules"></i> ${s.name}`;
    document.getElementById("supp-info-body").innerHTML = `
        <div style="display:flex; flex-direction:column; gap:10px;">
            <div class="card" style="background:var(--bg-card-subtle);">
                <div style="font-size:0.75rem; color:var(--text-secondary); text-transform:uppercase; font-weight:700;">Temel Faydası</div>
                <strong style="color:var(--status-green); font-size:0.88rem; margin-top:2px;">${s.benefit}</strong>
            </div>
            <div class="form-row-2">
                <div class="stat-box">
                    <span class="lbl">Önerilen Dozaj</span>
                    <strong class="val" style="font-size:0.85rem;">${s.dosage}</strong>
                </div>
                <div class="stat-box">
                    <span class="lbl">Zamanlama</span>
                    <strong class="val" style="font-size:0.85rem;">${s.timing}</strong>
                </div>
            </div>
            <div class="card" style="background:var(--bg-card-subtle);">
                <div style="font-size:0.75rem; color:var(--text-secondary); text-transform:uppercase; font-weight:700; margin-bottom:4px;">Bilimsel Etki Mekanizması</div>
                <p style="font-size:0.82rem; line-height:1.5; color:var(--text-primary);">${s.details || 'Bu takviye sporcu performansını ve toparlanmasını destekler.'}</p>
            </div>
            <button class="btn btn-primary btn-block" onclick="closeModal('modal-supp-info')">Kapat</button>
        </div>
    `;
    openModal('modal-supp-info');
}

// ==================== WORKOUT PROGRAM & EXERCISE MANAGER ====================

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

    const targetSameWeightReps = r + 1;
    const targetHeavierWeight = (w + 2.5).toFixed(1).replace('.0', '');
    const targetHeavierReps = Math.max(5, r - 2);

    return `Geçen Hafta: ${w}kg × ${r} Rep ➔ <strong>Bugün Hedef: ${w}kg × ${targetSameWeightReps} Rep</strong> veya <strong>${targetHeavierWeight}kg × ${targetHeavierReps}+ Rep</strong>`;
}

function renderWorkoutView(dayKey) {
    const container = document.getElementById("workout-content-area");
    const plan = (appData.customWorkoutPlan && appData.customWorkoutPlan[dayKey]) || DEFAULT_WORKOUT_PLAN[dayKey];
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
                        <span class="ex-target-badge"><span class="muscle-tag">${ex.muscle || 'Kas Grubu'}</span> ${ex.target}</span>
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

function openExerciseManagerModal() {
    const plan = appData.customWorkoutPlan[currentActiveDay];
    if (!plan) return;

    document.getElementById("ex-mgr-day-title").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> ${plan.title} - Hareketleri Düzenle`;
    renderCurrentExercisesInManager();
    renderLibraryExercisesByMuscle();
    openModal('modal-exercise-manager');
}

function renderCurrentExercisesInManager() {
    const listContainer = document.getElementById("ex-mgr-current-list");
    const plan = appData.customWorkoutPlan[currentActiveDay];
    if (!listContainer || !plan) return;

    if (plan.exercises.length === 0) {
        listContainer.innerHTML = `<p class="text-muted" style="text-align:center; font-size:0.8rem;">Bu gün için kayıtlı egzersiz yok.</p>`;
        return;
    }

    listContainer.innerHTML = plan.exercises.map((ex, idx) => `
        <div class="ex-mgr-item">
            <div>
                <strong>${idx + 1}. ${ex.name}</strong>
                <div style="font-size:0.7rem; color:var(--text-secondary);"><span class="muscle-tag">${ex.muscle || ''}</span> • ${ex.target}</div>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
                <button class="btn-delete-item" onclick="removeExerciseFromDay(${idx})" title="Hareketten Çıkar"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join("");
}

function removeExerciseFromDay(index) {
    const plan = appData.customWorkoutPlan[currentActiveDay];
    if (!plan || !plan.exercises[index]) return;

    const removed = plan.exercises.splice(index, 1)[0];
    saveDataToStorage();
    renderCurrentExercisesInManager();
    renderWorkoutView(currentActiveDay);
    showToast(`${removed.name} programdan çıkarıldı.`);
}

function renderLibraryExercisesByMuscle() {
    const select = document.getElementById("library-muscle-select");
    const container = document.getElementById("library-exercises-list");
    if (!select || !container) return;

    const selectedMuscle = select.value;
    const plan = appData.customWorkoutPlan[currentActiveDay];
    const currentExNames = plan ? plan.exercises.map(e => e.name) : [];

    const filtered = EXERCISE_LIBRARY.filter(ex => {
        if (selectedMuscle === "all") return true;
        if (selectedMuscle === "chest") return ex.muscle.includes("Göğüs");
        if (selectedMuscle === "back") return ex.muscle.includes("Sırt") || ex.muscle.includes("Lat");
        if (selectedMuscle === "shoulders") return ex.muscle.includes("Omuz");
        if (selectedMuscle === "triceps") return ex.muscle.includes("Triceps");
        if (selectedMuscle === "biceps") return ex.muscle.includes("Biceps") || ex.muscle.includes("Brachialis");
        if (selectedMuscle === "legs") return ex.muscle.includes("Bacak") || ex.muscle.includes("Quad") || ex.muscle.includes("Hamstring") || ex.muscle.includes("Kalf");
        if (selectedMuscle === "abs_traps") return ex.muscle.includes("Trapez") || ex.muscle.includes("Karın");
        return true;
    });

    container.innerHTML = filtered.map(ex => {
        const inPlan = currentExNames.includes(ex.name);
        return `
            <div class="library-ex-item">
                <div style="flex:1;">
                    <strong style="font-size:0.8rem; color:#ffffff;">${ex.name}</strong>
                    <div style="font-size:0.68rem; color:var(--text-secondary);">${ex.muscle} • ${ex.desc}</div>
                </div>
                ${inPlan 
                    ? `<button class="btn btn-xs btn-outline" style="color:var(--status-green); border-color:var(--status-green);" disabled><i class="fa-solid fa-check"></i> Ekli</button>`
                    : `<button class="btn btn-xs btn-primary" onclick="addExerciseToDay('${ex.id}')"><i class="fa-solid fa-plus"></i> Ekle</button>`
                }
            </div>
        `;
    }).join("");
}

function addExerciseToDay(libExId) {
    const libEx = EXERCISE_LIBRARY.find(e => e.id === libExId);
    if (!libEx) return;

    const plan = appData.customWorkoutPlan[currentActiveDay];
    if (!plan) return;

    const newEx = {
        id: `${currentActiveDay}_${Date.now()}`,
        name: libEx.name,
        muscle: libEx.muscle,
        target: libEx.defaultTarget,
        defaultSets: libEx.defaultSets,
        defaultSeat: libEx.defaultSeat,
        isTopSet: libEx.isTopSet
    };

    plan.exercises.push(newEx);
    saveDataToStorage();
    renderCurrentExercisesInManager();
    renderLibraryExercisesByMuscle();
    renderWorkoutView(currentActiveDay);
    showToast(`${libEx.name} programa eklendi! 💪`);
}

// ==================== SCALE & COACH REPORT ====================

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

    const last7 = history.slice(0, 7);
    const avg7 = last7.reduce((acc, curr) => acc + curr.weight, 0) / last7.length;
    document.getElementById("current-week-avg").innerText = `${avg7.toFixed(2)} kg`;

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
🍽️ Beslenme Durumu: ~${Math.round(n.calories)} / ${t.calories} kcal (${Math.round(n.protein)}g P / ${Math.round(n.carbs)}g C / ${Math.round(n.fat)}g F)
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
            recalculateDailyTotals();
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

// ==================== ONBOARDING & PERSONALIZED DIET WIZARD ENGINE ====================

const WIZARD_FOOD_CATEGORIES = {
    carbs: [
        { id: "cig_pirinc", name: "🍚 Çiğ Pirinç (Basmati/Yasemin)" },
        { id: "pirinc_unu", name: "🥣 Çiğ Pirinç Unu" },
        { id: "cig_yulaf", name: "🌾 Çiğ Yulaf Ezmesi" },
        { id: "cig_makarna", name: "🍝 Çiğ Makarna" },
        { id: "cig_patates", name: "🥔 Çiğ Patates" },
        { id: "cig_tatli_patates", name: "🍠 Çiğ Tatlı Patates" },
        { id: "cig_karabugday", name: "🌱 Çiğ Karabuğday" },
        { id: "muz", name: "🍌 Muz" },
        { id: "bal", name: "🍯 Bal / Pekmez" },
        { id: "hurma", name: "🌴 Hurma" },
        { id: "pirinc_patlagi", name: "🍘 Pirinç Patlağı" }
    ],
    proteins: [
        { id: "tavuk_gogsu", name: "🍗 Çiğ Tavuk Göğsü" },
        { id: "hindi_gogsu", name: "🦃 Çiğ Hindi Göğsü" },
        { id: "dana_kiyma", name: "🥩 Çiğ Dana Kıyma (%10-12)" },
        { id: "dana_biftek", name: "🥩 Çiğ Dana Biftek" },
        { id: "yumurta_butun", name: "🥚 Bütün Yumurta" },
        { id: "yumurta_beyazi", name: "🍳 Yumurta Beyazı" },
        { id: "somon", name: "🐟 Çiğ Somon" },
        { id: "ton_baligi", name: "🥫 Ton Balığı (Süzme)" },
        { id: "lor_peyniri", name: "🧀 Lor Peyniri" },
        { id: "quark_yogurt", name: "🥛 Süzme Yoğurt / Quark" },
        { id: "whey_toz", name: "⚡ Whey Protein Tozu" }
    ],
    fats: [
        { id: "zeytinyagi", name: "🫒 Zeytinyağı" },
        { id: "hindistan_cevizi_yagi", name: "🥥 Hindistan Cevizi Yağı" },
        { id: "fistik_ezmesi", name: "🥜 Fıstık Ezmesi" },
        { id: "cig_badem", name: "🌰 Çiğ Badem" },
        { id: "cig_ceviz", name: "🥜 Çiğ Ceviz" },
        { id: "avokado", name: "🥑 Avokado" },
        { id: "tereyagi", name: "🧈 Tereyağı / Sade Yağ" }
    ]
};

let wizardState = {
    currentStep: 1,
    goal: "bulk", // "bulk", "cut", "recomp"
    gender: "male", // "male", "female"
    age: 24,
    height: 178,
    weight: 74.0,
    frequency: 5, // 3, 5, 6
    activity: "moderate", // "sedentary", "moderate", "active"
    path: "auto", // "auto", "manual"
    manualKcal: 2770,
    manualP: 167,
    manualC: 344,
    manualF: 77,
    manualWater: 3.5,
    manualSteps: 7500,
    selectedCarbs: ["cig_pirinc", "pirinc_unu", "cig_yulaf", "muz", "bal"],
    selectedProteins: ["tavuk_gogsu", "yumurta_butun", "whey_toz"],
    selectedFats: ["fistik_ezmesi", "zeytinyagi", "hindistan_cevizi_yagi"],
    mealCount: 4,
    calculated: null
};

function checkOnboardingStatus() {
    if (!appData.onboardingCompleted) {
        setTimeout(() => {
            openOnboardingWizard();
        }, 400);
    }
}

function openOnboardingWizard() {
    wizardState.currentStep = 1;

    // Load saved userProfile if exists
    if (appData.userProfile) {
        const p = appData.userProfile;
        wizardState.gender = p.gender || "male";
        wizardState.age = p.age || 24;
        wizardState.height = p.height || 178;
        wizardState.weight = p.weight || 74.0;
        wizardState.frequency = p.frequency || 5;
        wizardState.activity = p.activity || "moderate";
        wizardState.goal = p.goal || "bulk";
        wizardState.path = p.path || "auto";
        if (p.mealCount) wizardState.mealCount = p.mealCount;
        if (p.selectedCarbs) wizardState.selectedCarbs = [...p.selectedCarbs];
        if (p.selectedProteins) wizardState.selectedProteins = [...p.selectedProteins];
        if (p.selectedFats) wizardState.selectedFats = [...p.selectedFats];
    } else {
        // Use current weight history if available
        if (appData.weightHistory && appData.weightHistory.length > 0) {
            wizardState.weight = appData.weightHistory[0].weight;
        }
    }

    // Prepopulate inputs
    document.getElementById("wizard-age").value = wizardState.age;
    document.getElementById("wizard-height").value = wizardState.height;
    document.getElementById("wizard-weight").value = wizardState.weight;
    document.getElementById("wizard-workout-frequency").value = wizardState.frequency;
    document.getElementById("wizard-activity-level").value = wizardState.activity;

    // Prepopulate manual targets from appData
    const t = appData.targets;
    document.getElementById("wizard-manual-cal").value = t.calories || 2770;
    document.getElementById("wizard-manual-p").value = t.protein || 167;
    document.getElementById("wizard-manual-c").value = t.carbs || 344;
    document.getElementById("wizard-manual-f").value = t.fat || 77;
    document.getElementById("wizard-manual-water").value = t.water || 3.5;
    document.getElementById("wizard-manual-steps").value = t.steps || 7500;

    selectWizardGoal(wizardState.goal);
    setWizardGender(wizardState.gender);
    selectWizardPath(wizardState.path);
    setWizardMealCount(wizardState.mealCount);

    renderWizardFoodChips();
    renderWizardStep();
    openModal("modal-onboarding-wizard");
}

function selectWizardGoal(goal) {
    wizardState.goal = goal;
    document.querySelectorAll(".goal-card").forEach(el => el.classList.remove("active"));
    const card = document.getElementById(`goal-card-${goal}`);
    if (card) card.classList.add("active");
}

function setWizardGender(gender) {
    wizardState.gender = gender;
    const maleBtn = document.getElementById("wizard-gender-male");
    const femaleBtn = document.getElementById("wizard-gender-female");
    if (maleBtn) maleBtn.classList.toggle("active", gender === "male");
    if (femaleBtn) femaleBtn.classList.toggle("active", gender === "female");
}

function selectWizardPath(path) {
    wizardState.path = path;
    document.querySelectorAll(".path-card").forEach(el => el.classList.remove("active"));
    const card = document.getElementById(`path-card-${path}`);
    if (card) card.classList.add("active");
}

function setWizardMealCount(cnt) {
    wizardState.mealCount = cnt;
    [3, 4, 5].forEach(num => {
        const btn = document.getElementById(`wizard-meal-cnt-${num}`);
        if (btn) btn.classList.toggle("active", num === cnt);
    });
}

function toggleWizardFood(foodId, category) {
    let list;
    if (category === "carbs") list = wizardState.selectedCarbs;
    else if (category === "proteins") list = wizardState.selectedProteins;
    else if (category === "fats") list = wizardState.selectedFats;

    if (!list) return;
    const idx = list.indexOf(foodId);
    if (idx >= 0) {
        if (list.length <= 1) {
            showToast("Her kategoriden en az 1 besin seçmelisin!");
            return;
        }
        list.splice(idx, 1);
    } else {
        list.push(foodId);
    }
    renderWizardFoodChips();
}

function renderWizardFoodChips() {
    const renderCategory = (containerId, items, selectedList, cat) => {
        const el = document.getElementById(containerId);
        if (!el) return;
        el.innerHTML = items.map(item => {
            const isSelected = selectedList.includes(item.id);
            return `
                <div class="food-chip ${isSelected ? 'selected' : ''}" onclick="toggleWizardFood('${item.id}', '${cat}')">
                    <i class="fa-solid ${isSelected ? 'fa-check' : 'fa-plus'}"></i>
                    <span>${item.name}</span>
                </div>
            `;
        }).join("");
    };

    renderCategory("wizard-carbs-grid", WIZARD_FOOD_CATEGORIES.carbs, wizardState.selectedCarbs, "carbs");
    renderCategory("wizard-proteins-grid", WIZARD_FOOD_CATEGORIES.proteins, wizardState.selectedProteins, "proteins");
    renderCategory("wizard-fats-grid", WIZARD_FOOD_CATEGORIES.fats, wizardState.selectedFats, "fats");
}

function renderWizardStep() {
    const step = wizardState.currentStep;
    
    // Update Badge & Progress Bar
    const badge = document.getElementById("wizard-step-badge");
    const pbar = document.getElementById("wizard-progress-bar");
    const heading = document.getElementById("wizard-main-heading");
    const prevBtn = document.getElementById("wizard-btn-prev");
    const nextBtn = document.getElementById("wizard-btn-next");

    if (badge) badge.innerText = `ADIM ${step} / 5`;
    if (pbar) pbar.style.width = `${(step / 5) * 100}%`;

    // Hide all step views
    const allStepViews = [
        "wizard-step-1",
        "wizard-step-2",
        "wizard-step-3",
        "wizard-step-4-manual",
        "wizard-step-4-auto",
        "wizard-step-5"
    ];
    allStepViews.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    if (prevBtn) prevBtn.style.visibility = step === 1 ? "hidden" : "visible";

    if (step === 1) {
        heading.innerText = "1. Ana Hedefini Belirle";
        document.getElementById("wizard-step-1").style.display = "block";
        nextBtn.innerHTML = 'Devam Et <i class="fa-solid fa-chevron-right"></i>';
    } else if (step === 2) {
        heading.innerText = "2. Fiziksel Profil Bilgileri";
        document.getElementById("wizard-step-2").style.display = "block";
        nextBtn.innerHTML = 'Devam Et <i class="fa-solid fa-chevron-right"></i>';
    } else if (step === 3) {
        heading.innerText = "3. Kurulum Yöntemi";
        document.getElementById("wizard-step-3").style.display = "block";
        nextBtn.innerHTML = 'Devam Et <i class="fa-solid fa-chevron-right"></i>';
    } else if (step === 4) {
        if (wizardState.path === "manual") {
            heading.innerText = "4. Kalori ve Makro Hedeflerin";
            document.getElementById("wizard-step-4-manual").style.display = "block";
        } else {
            heading.innerText = "4. Besin Tercihlerin & Öğün Sayısı";
            document.getElementById("wizard-step-4-auto").style.display = "block";
        }
        nextBtn.innerHTML = 'Hesapla & Önizle <i class="fa-solid fa-wand-magic-sparkles"></i>';
    } else if (step === 5) {
        heading.innerText = "5. Kişiye Özel Plan Özeti";
        document.getElementById("wizard-step-5").style.display = "block";
        nextBtn.innerHTML = 'Planı Uygula ve Başla 🚀';
    }
}

function nextWizardStep() {
    if (wizardState.currentStep === 1) {
        wizardState.currentStep = 2;
        renderWizardStep();
    } else if (wizardState.currentStep === 2) {
        const age = parseInt(document.getElementById("wizard-age").value) || 24;
        const height = parseInt(document.getElementById("wizard-height").value) || 178;
        const weight = parseFloat(document.getElementById("wizard-weight").value) || 74.0;
        const frequency = parseInt(document.getElementById("wizard-workout-frequency").value) || 5;
        const activity = document.getElementById("wizard-activity-level").value || "moderate";

        wizardState.age = age;
        wizardState.height = height;
        wizardState.weight = weight;
        wizardState.frequency = frequency;
        wizardState.activity = activity;

        wizardState.currentStep = 3;
        renderWizardStep();
    } else if (wizardState.currentStep === 3) {
        wizardState.currentStep = 4;
        renderWizardStep();
    } else if (wizardState.currentStep === 4) {
        if (wizardState.path === "manual") {
            const cal = parseInt(document.getElementById("wizard-manual-cal").value) || 2770;
            const p = parseInt(document.getElementById("wizard-manual-p").value) || 167;
            const c = parseInt(document.getElementById("wizard-manual-c").value) || 344;
            const f = parseInt(document.getElementById("wizard-manual-f").value) || 77;
            const water = parseFloat(document.getElementById("wizard-manual-water").value) || 3.5;
            const steps = parseInt(document.getElementById("wizard-manual-steps").value) || 7500;

            wizardState.manualKcal = cal;
            wizardState.manualP = p;
            wizardState.manualC = c;
            wizardState.manualF = f;
            wizardState.manualWater = water;
            wizardState.manualSteps = steps;
        }

        calculateWizardPlan();
        wizardState.currentStep = 5;
        renderWizardStep();
    } else if (wizardState.currentStep === 5) {
        applyWizardPlanAndFinish();
    }
}

function prevWizardStep() {
    if (wizardState.currentStep > 1) {
        wizardState.currentStep--;
        renderWizardStep();
    }
}

function calculateWizardPlan() {
    const { gender, age, height, weight, frequency, activity, goal, path, mealCount, selectedCarbs, selectedProteins, selectedFats } = wizardState;

    // 1. Mifflin-St Jeor BMR
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    if (gender === "male") {
        bmr += 5;
    } else {
        bmr -= 161;
    }
    bmr = Math.round(bmr);

    // 2. Activity Multiplier
    let activityMult = 1.35;
    if (activity === "sedentary") activityMult = 1.25 + (frequency * 0.025);
    else if (activity === "moderate") activityMult = 1.35 + (frequency * 0.03);
    else if (activity === "active") activityMult = 1.45 + (frequency * 0.035);

    const tdee = Math.round(bmr * activityMult);

    let targetCal, targetP, targetF, targetC;
    let gainMin = 0.15, gainMax = 0.35;

    if (path === "manual") {
        targetCal = wizardState.manualKcal;
        targetP = wizardState.manualP;
        targetC = wizardState.manualC;
        targetF = wizardState.manualF;
    } else {
        // Automatic Calculation based on Goal
        if (goal === "bulk") {
            targetCal = tdee + 300;
            targetP = Math.round(weight * 2.0); // 2.0g/kg
            targetF = Math.round(weight * 0.9); // 0.9g/kg
            targetC = Math.max(50, Math.round((targetCal - (targetP * 4 + targetF * 9)) / 4));
            gainMin = 0.15;
            gainMax = 0.35;
        } else if (goal === "cut") {
            targetCal = Math.max(1300, tdee - 450);
            targetP = Math.round(weight * 2.3); // 2.3g/kg (preserve muscle in deficit)
            targetF = Math.round(weight * 0.8); // 0.8g/kg
            targetC = Math.max(50, Math.round((targetCal - (targetP * 4 + targetF * 9)) / 4));
            gainMin = -0.7;
            gainMax = -0.3; // fat loss target range
        } else { // recomp
            targetCal = tdee;
            targetP = Math.round(weight * 2.2); // 2.2g/kg
            targetF = Math.round(weight * 0.85); // 0.85g/kg
            targetC = Math.max(50, Math.round((targetCal - (targetP * 4 + targetF * 9)) / 4));
            gainMin = -0.1;
            gainMax = 0.1;
        }
    }

    const targetWater = path === "manual" ? wizardState.manualWater : Math.max(2.5, +(weight * 0.045).toFixed(1));
    const targetSteps = path === "manual" ? wizardState.manualSteps : (activity === "active" ? 10000 : (activity === "moderate" ? 8000 : 6000));

    // 3. Generate Intelligent Meal Presets with RAW Grams if auto
    let generatedPresets = {};
    if (path === "auto") {
        generatedPresets = generateAutoMealPresets({
            mealCount,
            totalP: targetP,
            totalC: targetC,
            totalF: targetF,
            totalCal: targetCal,
            selectedCarbs,
            selectedProteins,
            selectedFats
        });
    } else {
        generatedPresets = { ...appData.customPresets };
    }

    wizardState.calculated = {
        bmr,
        tdee,
        calories: targetCal,
        protein: targetP,
        carbs: targetC,
        fat: targetF,
        water: targetWater,
        steps: targetSteps,
        weeklyGainMin: gainMin,
        weeklyGainMax: gainMax,
        generatedPresets
    };

    // Update Summary UI in Step 5
    renderWizardSummaryUI();
}

function getMealSubtotalMacros(ingredients) {
    let totP = 0, totC = 0, totF = 0, totCal = 0;
    let descParts = [];

    ingredients.forEach(item => {
        const food = RAW_FOODS_DATABASE.find(f => f.id === item.foodId);
        if (food) {
            const factor = (item.amount || 0) / 100;
            totP += food.p * factor;
            totC += food.c * factor;
            totF += food.f * factor;
            totCal += food.cal * factor;
            descParts.push(`${item.amount}g ${food.name.split(' (')[0]}`);
        }
    });

    return {
        p: Math.round(totP * 10) / 10,
        c: Math.round(totC * 10) / 10,
        f: Math.round(totF * 10) / 10,
        cal: Math.round(totCal),
        desc: descParts.join(" + ")
    };
}

function generateAutoMealPresets({ mealCount, totalP, totalC, totalF, totalCal, selectedCarbs, selectedProteins, selectedFats }) {
    const presets = {};

    // 1. MEAL 1: KAHVALTI (BREAKFAST)
    const bfastIngredients = [];

    // Breakfast Protein
    let bfastP = 0;
    if (selectedProteins.includes("yumurta_butun")) {
        bfastIngredients.push({ foodId: "yumurta_butun", amount: 150 }); // 3 Yumurta = 150g (~20g P, 15g F)
        bfastP += 20;
    } else if (selectedProteins.includes("yumurta_beyazi")) {
        bfastIngredients.push({ foodId: "yumurta_beyazi", amount: 200 }); // 200g (~22g P)
        bfastP += 22;
    } else if (selectedProteins.includes("whey_toz")) {
        bfastIngredients.push({ foodId: "whey_toz", amount: 30 }); // 30g (~24g P)
        bfastP += 24;
    } else if (selectedProteins.includes("lor_peyniri")) {
        bfastIngredients.push({ foodId: "lor_peyniri", amount: 150 }); // 150g (~25g P)
        bfastP += 25;
    } else {
        bfastIngredients.push({ foodId: "yumurta_butun", amount: 150 });
        bfastP += 20;
    }

    // Breakfast Carbs
    let bfastC = 0;
    if (selectedCarbs.includes("pirinc_unu")) {
        bfastIngredients.push({ foodId: "pirinc_unu", amount: 60 });
        bfastC += 48;
    } else if (selectedCarbs.includes("cig_yulaf")) {
        bfastIngredients.push({ foodId: "cig_yulaf", amount: 70 });
        bfastC += 42;
    } else {
        bfastIngredients.push({ foodId: selectedCarbs[0] || "cig_yulaf", amount: 60 });
        bfastC += 40;
    }

    if (selectedCarbs.includes("muz")) {
        bfastIngredients.push({ foodId: "muz", amount: 100 }); // 1 Muz (~23g C)
        bfastC += 23;
    }
    if (selectedCarbs.includes("bal")) {
        bfastIngredients.push({ foodId: "bal", amount: 25 }); // 25g Bal (~20g C)
        bfastC += 20;
    }

    // Breakfast Fats
    let bfastF = 0;
    if (selectedFats.includes("fistik_ezmesi")) {
        bfastIngredients.push({ foodId: "fistik_ezmesi", amount: 25 });
        bfastF += 13;
    } else if (selectedFats.includes("cig_badem")) {
        bfastIngredients.push({ foodId: "cig_badem", amount: 20 });
        bfastF += 10;
    } else if (selectedFats.includes("cig_ceviz")) {
        bfastIngredients.push({ foodId: "cig_ceviz", amount: 20 });
        bfastF += 13;
    }

    const bfastTotals = getMealSubtotalMacros(bfastIngredients);
    presets["preset_meal_1"] = {
        id: "preset_meal_1",
        name: "1. Kahvaltı (Pankek / Kase)",
        ingredients: bfastIngredients,
        desc: bfastTotals.desc,
        cal: bfastTotals.cal,
        p: bfastTotals.p,
        c: bfastTotals.c,
        f: bfastTotals.f
    };

    // 2. MAIN MEALS (Remaining meals)
    const mainMealsCount = Math.max(2, mealCount - 1);
    const remP = Math.max(30, totalP - bfastTotals.p);
    const remC = Math.max(50, totalC - bfastTotals.c);
    const remF = Math.max(15, totalF - bfastTotals.f);

    const mealTargetP = remP / mainMealsCount;
    const mealTargetC = remC / mainMealsCount;
    const mealTargetF = remF / mainMealsCount;

    // Filter main meal preferred foods
    const mainProteinPool = selectedProteins.filter(p => !["yumurta_beyazi", "lor_peyniri"].includes(p));
    const activeProtPool = mainProteinPool.length > 0 ? mainProteinPool : ["tavuk_gogsu"];

    const mainCarbPool = selectedCarbs.filter(c => !["bal", "hurma", "muz"].includes(c));
    const activeCarbPool = mainCarbPool.length > 0 ? mainCarbPool : ["cig_pirinc"];

    const mainFatPool = selectedFats.filter(f => !["fistik_ezmesi"].includes(f));
    const activeFatPool = mainFatPool.length > 0 ? mainFatPool : ["zeytinyagi"];

    const mealTitles = {
        3: ["2. Öğle & Antrenman Önü", "3. Akşam Yemeği & Toparlanma"],
        4: ["2. Öğle Yemeği (Antrenman Önü)", "3. Antrenman Sonrası (Post-Workout)", "4. Akşam / Gece Öğünü"],
        5: ["2. Kuşluk / Ara Öğün", "3. Öğle Yemeği (Antrenman Önü)", "4. Antrenman Sonrası (Post-Workout)", "5. Akşam Yemeği"]
    }[mealCount] || ["2. Öğle Yemeği", "3. Antrenman Sonrası", "4. Akşam Yemeği"];

    for (let i = 0; i < mainMealsCount; i++) {
        const mealNum = i + 2;
        const mealKey = `preset_meal_${mealNum}`;
        const mealName = mealTitles[i] || `${mealNum}. Ana Öğün`;

        // Pick rotating protein
        const protId = activeProtPool[i % activeProtPool.length];
        const protFood = RAW_FOODS_DATABASE.find(f => f.id === protId) || RAW_FOODS_DATABASE[11]; // tavuk_gogsu
        const protGrams = Math.max(50, Math.round((mealTargetP / (protFood.p / 100)) / 10) * 10);

        // Pick rotating carb
        const carbId = activeCarbPool[i % activeCarbPool.length];
        const carbFood = RAW_FOODS_DATABASE.find(f => f.id === carbId) || RAW_FOODS_DATABASE[0]; // cig_pirinc
        const carbGrams = Math.max(30, Math.round((mealTargetC / (carbFood.c / 100)) / 5) * 5);

        // Pick rotating fat
        const fatId = activeFatPool[i % activeFatPool.length];
        const fatFood = RAW_FOODS_DATABASE.find(f => f.id === fatId) || RAW_FOODS_DATABASE[22]; // zeytinyagi
        const fatGrams = Math.max(5, Math.round((mealTargetF / (fatFood.f / 100)) / 5) * 5);

        const mealIngredients = [
            { foodId: carbFood.id, amount: carbGrams },
            { foodId: protFood.id, amount: protGrams },
            { foodId: fatFood.id, amount: fatGrams }
        ];

        const mealTotals = getMealSubtotalMacros(mealIngredients);
        presets[mealKey] = {
            id: mealKey,
            name: mealName,
            ingredients: mealIngredients,
            desc: mealTotals.desc,
            cal: mealTotals.cal,
            p: mealTotals.p,
            c: mealTotals.c,
            f: mealTotals.f
        };
    }

    return presets;
}

function renderWizardSummaryUI() {
    const calc = wizardState.calculated;
    if (!calc) return;

    // Badges & numbers
    const goalBadge = document.getElementById("summary-goal-badge");
    const goalTitles = {
        bulk: "🔥 LEAN BULK PLANI (KÜTLE & HACİM)",
        cut: "✂️ DEFINASYON & YAĞ YAKIMI (CUTTING)",
        recomp: "⚡ BODY RECOMPOSITION PLANI"
    };
    if (goalBadge) goalBadge.innerText = goalTitles[wizardState.goal] || "KİŞİYE ÖZEL BESLENME PLANI";

    document.getElementById("summary-cal-val").innerText = `${calc.calories.toLocaleString('tr-TR')} kcal / gün`;
    document.getElementById("summary-bmr-val").innerText = calc.bmr;
    document.getElementById("summary-tdee-val").innerText = calc.tdee;

    document.getElementById("summary-p-val").innerText = `${calc.protein}g`;
    document.getElementById("summary-c-val").innerText = `${calc.carbs}g`;
    document.getElementById("summary-f-val").innerText = `${calc.fat}g`;

    const totalCals = (calc.protein * 4) + (calc.carbs * 4) + (calc.fat * 9);
    const pPct = Math.round(((calc.protein * 4) / totalCals) * 100);
    const cPct = Math.round(((calc.carbs * 4) / totalCals) * 100);
    const fPct = Math.round(((calc.fat * 9) / totalCals) * 100);

    const pPctEl = document.getElementById("summary-p-pct");
    const cPctEl = document.getElementById("summary-c-pct");
    const fPctEl = document.getElementById("summary-f-pct");

    if (pPctEl) pPctEl.innerText = `(~%${pPct})`;
    if (cPctEl) cPctEl.innerText = `(~%${cPct})`;
    if (fPctEl) fPctEl.innerText = `(~%${fPct})`;

    // Render Generated Meals List
    const mealsContainer = document.getElementById("wizard-generated-meals-container");
    if (!mealsContainer) return;

    const presets = calc.generatedPresets || {};
    const presetKeys = Object.keys(presets);

    if (presetKeys.length === 0) {
        mealsContainer.innerHTML = `<p class="text-secondary" style="font-size:0.8rem;">Mevcut kayıtlı öğünleriniz kullanılacak.</p>`;
        return;
    }

    mealsContainer.innerHTML = presetKeys.map(key => {
        const m = presets[key];
        return `
            <div class="wizard-gen-meal-card">
                <div class="gen-meal-header">
                    <span class="gen-meal-title">${m.name}</span>
                    <span class="gen-meal-macros">${m.cal} kcal • ${m.p}P / ${m.c}C / ${m.f}F</span>
                </div>
                <div class="gen-meal-ingredients">
                    <i class="fa-solid fa-scale-balanced" style="font-size:0.68rem; margin-right:4px;"></i>${m.desc}
                </div>
            </div>
        `;
    }).join("");
}

function applyWizardPlanAndFinish() {
    const calc = wizardState.calculated;
    if (!calc) return;

    // Apply targets
    appData.targets = {
        calories: calc.calories,
        protein: calc.protein,
        carbs: calc.carbs,
        fat: calc.fat,
        water: calc.water,
        steps: calc.steps,
        weeklyGainMin: calc.weeklyGainMin,
        weeklyGainMax: calc.weeklyGainMax
    };

    // Apply auto-generated presets if created
    if (wizardState.path === "auto" && calc.generatedPresets && Object.keys(calc.generatedPresets).length > 0) {
        appData.customPresets = JSON.parse(JSON.stringify(calc.generatedPresets));
    }

    // Save user profile & flag
    appData.userProfile = {
        gender: wizardState.gender,
        age: wizardState.age,
        height: wizardState.height,
        weight: wizardState.weight,
        frequency: wizardState.frequency,
        activity: wizardState.activity,
        goal: wizardState.goal,
        path: wizardState.path,
        mealCount: wizardState.mealCount,
        selectedCarbs: [...wizardState.selectedCarbs],
        selectedProteins: [...wizardState.selectedProteins],
        selectedFats: [...wizardState.selectedFats]
    };
    appData.onboardingCompleted = true;

    // Save and re-render everything
    saveDataToStorage();
    recalculateDailyTotals();
    updateDateDisplay();
    renderDashboard();
    renderNutritionView();
    initSettingsForm();
    updateCoachReport();

    closeModal("modal-onboarding-wizard");
    showToast("Kişiye özel diyet planın ve hedeflerin başarıyla uygulandı! 🔥🎯");
}

// ==================== AUTHENTICATION & USER MANAGEMENT ====================

async function hashPassword(password) {
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(password + "_omar_salt_2026");
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (e) {
        // Fallback simple hash for environments without crypto.subtle
        let hash = 0;
        const str = password + "_omar_salt_2026";
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return "fallback_" + Math.abs(hash);
    }
}

function getUsersRegistry() {
    try {
        const data = localStorage.getItem("OMAR_USERS_REGISTRY");
        return data ? JSON.parse(data) : {};
    } catch (e) {
        return {};
    }
}

function saveUsersRegistry(registry) {
    localStorage.setItem("OMAR_USERS_REGISTRY", JSON.stringify(registry));
}

function getActiveSessionUsername() {
    return localStorage.getItem("OMAR_ACTIVE_SESSION_USER") || null;
}

function setActiveSessionUsername(username) {
    localStorage.setItem("OMAR_ACTIVE_SESSION_USER", username);
}

function clearActiveSessionUsername() {
    localStorage.removeItem("OMAR_ACTIVE_SESSION_USER");
}

function openAuthModal(tab = "login") {
    const overlay = document.getElementById("modal-auth-overlay");
    if (overlay) overlay.style.display = "flex";
    switchAuthTab(tab);
}

function closeAuthModal() {
    const overlay = document.getElementById("modal-auth-overlay");
    if (overlay) overlay.style.display = "none";
}

function switchAuthTab(tab) {
    const loginTab = document.getElementById("auth-tab-login");
    const regTab = document.getElementById("auth-tab-register");
    const loginForm = document.getElementById("auth-form-login");
    const regForm = document.getElementById("auth-form-register");
    const loginErr = document.getElementById("login-error-msg");
    const regErr = document.getElementById("register-error-msg");

    if (loginErr) loginErr.style.display = "none";
    if (regErr) regErr.style.display = "none";

    if (tab === "login") {
        if (loginTab) loginTab.classList.add("active");
        if (regTab) regTab.classList.remove("active");
        if (loginForm) loginForm.style.display = "block";
        if (regForm) regForm.style.display = "none";
    } else {
        if (loginTab) loginTab.classList.remove("active");
        if (regTab) regTab.classList.add("active");
        if (loginForm) loginForm.style.display = "none";
        if (regForm) regForm.style.display = "block";
    }
}

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const eye = document.getElementById(inputId + "-eye");
    if (!input) return;

    if (input.type === "password") {
        input.type = "text";
        if (eye) {
            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");
        }
    } else {
        input.type = "password";
        if (eye) {
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }
    }
}

async function handleLoginSubmit(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("login-username").value.trim().toLowerCase();
    const passwordInput = document.getElementById("login-password").value;
    const errBanner = document.getElementById("login-error-msg");

    if (!usernameInput || !passwordInput) {
        if (errBanner) {
            errBanner.innerText = "Lütfen kullanıcı adı ve şifrenizi girin.";
            errBanner.style.display = "block";
        }
        return;
    }

    const registry = getUsersRegistry();
    const user = registry[usernameInput];

    if (!user) {
        if (errBanner) {
            errBanner.innerText = "Bu kullanıcı adına ait bir hesap bulunamadı.";
            errBanner.style.display = "block";
        }
        return;
    }

    const inputHash = await hashPassword(passwordInput);
    if (user.passwordHash !== inputHash) {
        if (errBanner) {
            errBanner.innerText = "Hatalı şifre girdiniz. Lütfen tekrar deneyin.";
            errBanner.style.display = "block";
        }
        return;
    }

    // Success login
    setActiveSessionUsername(usernameInput);
    loadDataFromStorage();
    checkAndResetDailyNutrition();
    recalculateDailyTotals();
    updateDateDisplay();
    updateTopBarUserHeader();
    renderDashboard();
    renderWorkoutView(currentActiveDay);
    renderNutritionView();
    renderSupplementsView();
    renderScaleView();
    updateCoachReport();
    initSettingsForm();

    closeAuthModal();
    showToast(`Tekrar hoş geldin, ${user.displayName || user.username}! 🔥`);

    if (!appData.onboardingCompleted) {
        setTimeout(openOnboardingWizard, 300);
    }
}

async function handleRegisterSubmit(event) {
    event.preventDefault();
    const displayName = document.getElementById("reg-name").value.trim();
    const username = document.getElementById("reg-username").value.trim().toLowerCase();
    const password = document.getElementById("reg-password").value;
    const confirm = document.getElementById("reg-password-confirm").value;
    const errBanner = document.getElementById("register-error-msg");

    if (!displayName || !username || !password) {
        if (errBanner) {
            errBanner.innerText = "Lütfen tüm alanları doldurun.";
            errBanner.style.display = "block";
        }
        return;
    }

    if (username.length < 3) {
        if (errBanner) {
            errBanner.innerText = "Kullanıcı adı en az 3 karakter olmalıdır.";
            errBanner.style.display = "block";
        }
        return;
    }

    if (password.length < 4) {
        if (errBanner) {
            errBanner.innerText = "Şifre en az 4 karakter olmalıdır.";
            errBanner.style.display = "block";
        }
        return;
    }

    if (password !== confirm) {
        if (errBanner) {
            errBanner.innerText = "Girdiğiniz şifreler birbiriyle eşleşmiyor.";
            errBanner.style.display = "block";
        }
        return;
    }

    const registry = getUsersRegistry();
    if (registry[username]) {
        if (errBanner) {
            errBanner.innerText = "Bu kullanıcı adı zaten alınmış. Farklı bir kullanıcı adı seçin.";
            errBanner.style.display = "block";
        }
        return;
    }

    const passwordHash = await hashPassword(password);
    const initialData = createDefaultAppData();

    registry[username] = {
        username,
        displayName,
        passwordHash,
        createdAt: new Date().toISOString().split('T')[0],
        data: initialData
    };

    saveUsersRegistry(registry);
    setActiveSessionUsername(username);

    // Load newly created user data
    loadDataFromStorage();
    updateTopBarUserHeader();
    renderDashboard();
    renderWorkoutView(currentActiveDay);
    renderNutritionView();
    renderSupplementsView();
    renderScaleView();
    initSettingsForm();

    closeAuthModal();
    showToast(`Hesabın başarıyla oluşturuldu! Hoş geldin, ${displayName}! 🚀`);

    // Launch Onboarding Wizard for new user
    setTimeout(() => {
        openOnboardingWizard();
    }, 400);
}

function openUserProfileModal() {
    const activeUsername = getActiveSessionUsername();
    const registry = getUsersRegistry();
    const user = activeUsername && registry[activeUsername];

    if (!user) {
        openAuthModal("login");
        return;
    }

    const nameEl = document.getElementById("profile-display-name");
    const unameEl = document.getElementById("profile-username-tag");
    const goalEl = document.getElementById("profile-goal-tag");
    const dateEl = document.getElementById("profile-created-date");
    const avatarEl = document.getElementById("profile-avatar-large");

    if (nameEl) nameEl.innerText = user.displayName || user.username;
    if (unameEl) unameEl.innerText = `@${user.username}`;
    if (dateEl) dateEl.innerText = `Kayıt: ${user.createdAt || '2026-09-16'}`;

    if (avatarEl) {
        const initial = (user.displayName || user.username || "O").charAt(0).toUpperCase();
        avatarEl.innerHTML = `<span>${initial}</span>`;
    }

    const goalMap = { bulk: "🔥 Lean Bulk", cut: "✂️ Cutting", recomp: "⚡ Recomp" };
    const goalName = (appData.userProfile && goalMap[appData.userProfile.goal]) || "🔥 Lean Bulk";
    if (goalEl) goalEl.innerText = goalName;

    // Reset password inputs
    const oldP = document.getElementById("pwd-old");
    const newP = document.getElementById("pwd-new");
    if (oldP) oldP.value = "";
    if (newP) newP.value = "";

    openModal("modal-user-profile");
}

async function handleChangePasswordSubmit() {
    const activeUsername = getActiveSessionUsername();
    const registry = getUsersRegistry();
    const user = activeUsername && registry[activeUsername];

    if (!user) return;

    const oldP = document.getElementById("pwd-old").value;
    const newP = document.getElementById("pwd-new").value;

    if (!oldP || !newP) {
        showToast("Lütfen mevcut ve yeni şifrenizi girin.");
        return;
    }

    if (newP.length < 4) {
        showToast("Yeni şifre en az 4 karakter olmalıdır.");
        return;
    }

    const oldHash = await hashPassword(oldP);
    if (user.passwordHash !== oldHash) {
        showToast("Mevcut şifreniz hatalı!");
        return;
    }

    const newHash = await hashPassword(newP);
    user.passwordHash = newHash;
    registry[activeUsername] = user;
    saveUsersRegistry(registry);

    document.getElementById("pwd-old").value = "";
    document.getElementById("pwd-new").value = "";
    showToast("Şifreniz başarıyla değiştirildi! 🔑");
}

function logoutCurrentUser() {
    clearActiveSessionUsername();
    closeModal("modal-user-profile");
    updateTopBarUserHeader();
    openAuthModal("login");
    showToast("Oturum kapatıldı.");
}

function updateTopBarUserHeader() {
    const activeUsername = getActiveSessionUsername();
    const registry = getUsersRegistry();
    const user = activeUsername && registry[activeUsername];

    const nameEl = document.getElementById("header-user-name");
    const avatarEl = document.getElementById("header-user-avatar");
    const subStatusEl = document.getElementById("header-date");

    if (user) {
        if (nameEl) nameEl.innerText = user.displayName ? user.displayName.toUpperCase() : user.username.toUpperCase();
        if (avatarEl) {
            const initial = (user.displayName || user.username || "O").charAt(0).toUpperCase();
            avatarEl.innerHTML = `<span>${initial}</span>`;
        }
    } else {
        if (nameEl) nameEl.innerText = "OMAR COACHING";
        if (avatarEl) avatarEl.innerHTML = `<i class="fa-solid fa-user"></i>`;
    }

    if (subStatusEl) {
        const history = appData.weightHistory || [];
        const currentW = history.length > 0 ? history[0].weight : (appData.userProfile ? appData.userProfile.weight : 74.0);
        const goalMap = { bulk: "Lean Bulk", cut: "Cutting", recomp: "Recomp" };
        const goalName = (appData.userProfile && goalMap[appData.userProfile.goal]) || "Lean Bulk";
        subStatusEl.innerText = `Bugün: ${currentW.toFixed(1)} kg • ${goalName}`;
    }
}

