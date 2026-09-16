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

// ==================== EXERCISE ENCYCLOPEDIA (6 ANA KAS GRUBU & ALT BÖLGELER) ====================
const EXERCISE_LIBRARY = [
    // ==================== 1. GÖĞÜS (CHEST) ====================
    // Üst Göğüs (Incline / Clavicular Head)
    {
        id: "lib_inc_bb",
        name: "Incline Barbell Bench Press",
        category: "chest",
        subCategory: "upper_chest",
        muscle: "Üst Göğüs (Clavicular Head)",
        defaultTarget: "3 Çalışma Seti (6-8 Rep)",
        defaultSets: 3,
        defaultSeat: "Sehpa Açısı: 30°",
        isTopSet: true,
        desc: "Köprücük kemiği altındaki üst liflere maksimum mekanik gerilim bindiren altın standart üst göğüs kütle inşacısı.",
        tips: "Sehpa açısını 30 dereceden dik yapmayın (ön omuza kaçar). Barı üst göğüs köprücük kemiğinin 2 parmak altına indirin."
    },
    {
        id: "lib_inc_db",
        name: "Incline Dumbbell Press",
        category: "chest",
        subCategory: "upper_chest",
        muscle: "Üst Göğüs • Derin Esneme",
        defaultTarget: "2-3 Çalışma Seti (6-9 Rep)",
        defaultSets: 2,
        defaultSeat: "Sehpa Açısı: 30°",
        isTopSet: true,
        desc: "Dumbbell serbestliği sayesinde en dipte derin esneme ve tepe noktada üst liflerde maksimum sıkışma sağlar.",
        tips: "Dirsekleri gövdeye 45-60 derece açıyla tutun, en altta 1 saniye derin esnemeyi hissedip patlayıcı itin."
    },
    {
        id: "lib_inc_machine",
        name: "Incline Plate-Loaded Chest Press",
        category: "chest",
        subCategory: "upper_chest",
        muscle: "Üst Göğüs İzolasyon Makinesi",
        defaultTarget: "2 Sert Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 3-4",
        isTopSet: true,
        desc: "Denge problemi olmadan üst göğüs liflerini tükenişe (RIR 0) kadar güvenle zorlamayı sağlar.",
        tips: "Skapulaları geriye ve aşağı kilitleyin, sırtı sehpaya yapıştırın."
    },
    {
        id: "lib_low_cable_fly",
        name: "Low-to-High Cable Fly (Aşağıdan Yukarı)",
        category: "chest",
        subCategory: "upper_chest",
        muscle: "Üst Göğüs & İç Çizgi",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablolar En Altta",
        isTopSet: false,
        desc: "Üst göğüs liflerinin yönünde (omuz hizasına doğru yukarı) kesintisiz kablo gerilimi yaratır.",
        tips: "Elleri göğüs/çene hizasında birleştirirken avuç içlerini yukarı baktırın ve tepede 1 saniye sıkın."
    },

    // Orta & Genel Göğüs (Flat / Sternal Head)
    {
        id: "lib_flat_bench",
        name: "Flat Barbell Bench Press",
        category: "chest",
        subCategory: "mid_chest",
        muscle: "Orta & Tüm Göğüs + Güç",
        defaultTarget: "3 Set (5-8 Rep)",
        defaultSets: 3,
        defaultSeat: "Düz Sehpa",
        isTopSet: true,
        desc: "Üst vücut itiş gücünün ve genel göğüs kalınlığının temel taşıdır.",
        tips: "Ayakları yere sağlam basın (leg drive), skapulaları geriye kilitleyin, barı memeuçlarına kontrollü indirin."
    },
    {
        id: "lib_flat_db_press",
        name: "Flat Dumbbell Press",
        category: "chest",
        subCategory: "mid_chest",
        muscle: "Orta Göğüs • Derin Esneme",
        defaultTarget: "2-3 Set (7-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Düz Sehpa",
        isTopSet: true,
        desc: "Bardan daha fazla hareket mesafesi (ROM) sunarak göğüs kaslarını daha derin esnetir.",
        tips: "Ağırlıkları tepe noktada birbirine çarptırmayın; gerilimi kas üzerinde tutun."
    },
    {
        id: "lib_plate_press",
        name: "Plate Loaded Flat Chest Press",
        category: "chest",
        subCategory: "mid_chest",
        muscle: "Orta & Tüm Göğüs Makinesi",
        defaultTarget: "2 Çalışma Seti (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 4",
        isTopSet: true,
        desc: "Serbest ağırlık omuz yorgunluğunu ekarte ederek göğüste saf mekanik gerilim yaratır.",
        tips: "Tepede dirsekleri kitlemeden hemen önce durup gerilimi göğüste bırakın."
    },

    // Alt Göğüs & Dips (Lower Chest / Costal Head)
    {
        id: "lib_dips",
        name: "Weighted Chest Dips",
        category: "chest",
        subCategory: "lower_chest",
        muscle: "Alt Göğüs & Ön Omuz",
        defaultTarget: "2-3 Set (6-8 Rep)",
        defaultSets: 2,
        defaultSeat: "Gövde 30° Öne Eğik",
        isTopSet: true,
        desc: "Gövdeyi öne eğerek yapılan dips, alt göğüs çizgisine en yüksek gerilimi bindiren kütle kralıdır.",
        tips: "Gövdeyi dik tutarsanız tricepse kaçar; gövdeyi öne eğin ve dirsekleri hafif dışarı açın."
    },
    {
        id: "lib_dec_press",
        name: "Decline Barbell / Dumbbell Press",
        category: "chest",
        subCategory: "lower_chest",
        muscle: "Alt Göğüs Kalınlığı",
        defaultTarget: "2 Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Decline Sehpa (-15°)",
        isTopSet: false,
        desc: "Omuz eklemine en az baskı bindiren açıyla alt ve orta göğsü izole eder.",
        tips: "Kontrollü iniş yapın ve alt göğüs kemeri hizasına indirin."
    },
    {
        id: "lib_high_cable_fly",
        name: "High-to-Low Cable Fly (Yukarıdan Aşağı)",
        category: "chest",
        subCategory: "lower_chest",
        muscle: "Alt Göğüs Çizgisi & İzolasyon",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablolar En Üstte",
        isTopSet: false,
        desc: "Kabloları yukarıdan kasık hizasına doğru birleştirerek alt göğüs çizgisini derinlemesine belirginleştirir.",
        tips: "Kolları kasıkların önünde çaprazlayarak ekstra kasılma sağlayabilirsiniz."
    },

    // İç & Fly İzolasyon
    {
        id: "lib_pec_deck",
        name: "Pec Deck Fly (Makine Göğüs)",
        category: "chest",
        subCategory: "chest_fly",
        muscle: "İç & Tüm Göğüs İzolasyonu",
        defaultTarget: "2-3 Çalışma Seti (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 3, Kol: 2",
        isTopSet: false,
        desc: "Yatay adduksiyon açısında tepe sıkışmayı kusursuz yaşatan, triceps gücünü devre dışı bırakan hareket.",
        tips: "Dirsekleri hafif bükük ve sabit tutun; hareketi dirseklerle kapatın, ellerle değil."
    },
    {
        id: "lib_cable_cross",
        name: "Standing Cable Crossover",
        category: "chest",
        subCategory: "chest_fly",
        muscle: "İç Göğüs & Pump",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo: Omuz Boyu",
        isTopSet: false,
        desc: "Tüm hareket açısı boyunca kesintisiz direnç eğrisiyle göğüs liflerini kanla doldurur.",
        tips: "Gövdeyi sabit tutun, ivme almayın, göğsü öne doğru kabartarak sıkın."
    },
    {
        id: "lib_db_fly",
        name: "Flat / Incline Dumbbell Fly",
        category: "chest",
        subCategory: "chest_fly",
        muscle: "Göğüs Derin Esneme",
        defaultTarget: "2 Set (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Sehpa Açılı",
        isTopSet: false,
        desc: "Göğüs liflerini en derin esneme pozisyonunda hipertrofiye teşvik eder.",
        tips: "Aşırı derine inerek omuz kapsülünü zorlamayın; gerilimi göğüste hissedince durun."
    },

    // ==================== 2. OMUZ (SHOULDERS) ====================
    // Ön Omuz (Press)
    {
        id: "lib_ohp",
        name: "Overhead Barbell Press (OHP / Military Press)",
        category: "shoulders",
        subCategory: "front_delts",
        muscle: "Ön Omuz (Anterior Deltoid) & Genel Güç",
        defaultTarget: "3 Set (5-8 Rep)",
        defaultSets: 3,
        defaultSeat: "Ayakta",
        isTopSet: true,
        desc: "Tüm omuz kemerine ve core bölgesine ham itiş gücü kazandıran kral bileşik hareket.",
        tips: "Kalçayı ve karın kaslarını sıkın, bar çene hizasını geçer geçmez başınızı hafif öne alıp kilitleyin."
    },
    {
        id: "lib_db_shoulder_press",
        name: "Seated Dumbbell Shoulder Press",
        category: "shoulders",
        subCategory: "front_delts",
        muscle: "Ön Omuz & Yan Omuz Kütlesi",
        defaultTarget: "2 Sert Set (6-8 Rep)",
        defaultSets: 2,
        defaultSeat: "Sehpa Açısı: 75°",
        isTopSet: true,
        desc: "Serbest dumbbel hareket serbestliği ile omuza devasa bir kütle kazandırır.",
        tips: "Sehpayı tam 90 derece dik yapmayın (75-80 derece omuz eklemi için idealdir)."
    },
    {
        id: "lib_mach_shoulder_press",
        name: "Machine Shoulder Press",
        category: "shoulders",
        subCategory: "front_delts",
        muscle: "Ön Omuz Güvenli Tükeniş",
        defaultTarget: "2-3 Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 3",
        isTopSet: true,
        desc: "Denge problemi olmadan omuzları tam tükenişe götürmek için idealdir.",
        tips: "Ağırlığı kulak hizasına kadar indirip tepeye kontrollü itin."
    },
    {
        id: "lib_front_raise",
        name: "Dumbbell / Cable Front Raise",
        category: "shoulders",
        subCategory: "front_delts",
        muscle: "Ön Omuz İzolasyonu",
        defaultTarget: "2 Set (12-15 Rep)",
        defaultSets: 2,
        defaultSeat: "Ayakta",
        isTopSet: false,
        desc: "Ön omuz başını doğrudan yukarı kaldırış açısında izole eder.",
        tips: "Gövdeyi sallamadan sadece omuz ekleminden kaldırın."
    },

    // Yan Omuz (Lateral Delts - 3D Genişlik)
    {
        id: "lib_db_lateral",
        name: "Dumbbell Lateral Raise",
        category: "shoulders",
        subCategory: "lateral_delts",
        muscle: "Yan Omuz (Lateral Deltoid)",
        defaultTarget: "3-4 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Ayakta / Hafif 15° Öne Eğik",
        isTopSet: false,
        desc: "Vücudu önden ve arkadan geniş gösteren yan omuz başlarının temel hareketidir.",
        tips: "Dumbbell'ları yukarı değil, iki yana uzatır gibi kaldırın (lead with elbows). Serçe parmak hafif yukarı bakabilir."
    },
    {
        id: "lib_mach_lateral",
        name: "Tek Kol Makine Lateral Raise",
        category: "shoulders",
        subCategory: "lateral_delts",
        muscle: "Yan Omuz (Sürekli Gerilim)",
        defaultTarget: "3 Set (10-12 Rep)",
        defaultSets: 3,
        defaultSeat: "Koltuk: 5",
        isTopSet: false,
        desc: "Dumbbell'ın en dipte gerilim kaybetmesini önler, hareketin başından sonuna kadar yan omuza gerilim verir.",
        tips: "Göğsü pede yaslayın ve tek kolla tepe noktada 1 saniye duraklayın."
    },
    {
        id: "lib_cable_lateral",
        name: "Egyptian Cable Lateral Raise",
        category: "shoulders",
        subCategory: "lateral_delts",
        muscle: "Yan Omuz (Derin Esneme Açısı)",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo: Diz Hizası",
        isTopSet: false,
        desc: "Vücudu direkten tutarak yana yatırıp yapılan kablo lateral, yan omuzun en derin esneme noktasında aşırı büyüme uyarısı verir.",
        tips: "Direğe tutunup 30 derece yana eğilin, kabloyu arkadan çekin."
    },

    // Arka Omuz (Rear Delts)
    {
        id: "lib_rev_pec_deck",
        name: "Reverse Pec Deck Fly (Arka Omuz)",
        category: "shoulders",
        subCategory: "rear_delts",
        muscle: "Arka Omuz (Posterior Deltoid)",
        defaultTarget: "3 Set (10-12 Rep)",
        defaultSets: 3,
        defaultSeat: "Göğüs Pede Dayalı",
        isTopSet: true,
        desc: "Skapulayı hareket ettirmeden arka omuz başını saf şekilde izole ederek 3D küre görüntüsü kazandırır.",
        tips: "Kürek kemiklerini birbirine yapıştırmayın (sırt devreye girer); kolları dışarı doğru uzatarak açın."
    },
    {
        id: "lib_face_pull",
        name: "Kablo Face Pull (Halat)",
        category: "shoulders",
        subCategory: "rear_delts",
        muscle: "Arka Omuz & Dış Rotatörler",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo: Göz/Alın Hizası",
        isTopSet: false,
        desc: "Omuz sağlığı, postür düzeltme ve arka omuz liflerini güçlendirme için olmazsa olmazdır.",
        tips: "Halatı alına doğru çekerken elleri iki yana açarak dış rotasyon yapın (biceps pozu verir gibi)."
    },
    {
        id: "lib_bent_db_rear",
        name: "Bent-Over Dumbbell Rear Delt Raise",
        category: "shoulders",
        subCategory: "rear_delts",
        muscle: "Arka Omuz Serbest Ağırlık",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Sehpada Göğüs Destekli",
        isTopSet: false,
        desc: "Sehpaya göğsü dayayarak ivme almadan arka omuza doğrudan yük bindirir.",
        tips: "Hafif-orta kilo kullanın; kollar hafif dirsekten bükük olsun."
    },

    // ==================== 3. SIRT (BACK) ====================
    // Lats / Kanat (Genişlik & V-Taper)
    {
        id: "lib_high_row",
        name: "High Row Tek Kol (Plate-Loaded / Cable)",
        category: "back",
        subCategory: "lats",
        muscle: "Alt & Orta Lat (Kanat Genişliği)",
        defaultTarget: "2-3 Set (6-8 Rep, Dirsek Gövdeye)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 3, Göğüs Pedi: 2",
        isTopSet: true,
        desc: "Açısal çekişle dirseği kalça cebine doğru çekerek alt lat liflerine cerrahi izolasyon sağlar.",
        tips: "Dirseği arkaya değil, kalçanıza doğru çekin. Hareketi başlatırken omzunuzu hafif aşağı bastırın."
    },
    {
        id: "lib_lat_pull",
        name: "Geniş Tutuş Lat Pulldown",
        category: "back",
        subCategory: "lats",
        muscle: "Üst Lat & Teres Major (V-Taper)",
        defaultTarget: "2-3 Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Bacak Pedi: 4",
        isTopSet: false,
        desc: "Sırtın üst genişliğini ve önden bakıldığında kanatların üçgen açılmasını sağlar.",
        tips: "Barı göğsün üstüne çekin; geriye aşırı yaslanmayın (maksimum 15 derece)."
    },
    {
        id: "lib_close_pulldown",
        name: "Nötr / Dar Tutuş Lat Pulldown (Mag Grip / V-Bar)",
        category: "back",
        subCategory: "lats",
        muscle: "Tüm Lat Hattı & Derin Kasılma",
        defaultTarget: "2-3 Set (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Bacak Pedi: 4",
        isTopSet: true,
        desc: "Nötr tutuş dirseklerin gövdeye daha yakın geçmesini sağlayarak latları en dipte daha sert kasındırır.",
        tips: "Dirsekleri aşağı ve içeri doğru çekin, tepe noktada latların esnediğini hissedin."
    },
    {
        id: "lib_straight_arm_pull",
        name: "Straight-Arm Cable Pulldown / DB Pullover",
        category: "back",
        subCategory: "lats",
        muscle: "Lat İzolasyonu & Serratus",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo En Üstte",
        isTopSet: false,
        desc: "Biceps gücünü tamamen sıfırlayarak kanat kaslarını saf omuz ekstansiyonu ile izole eder.",
        tips: "Kolları düz tutun, dirsekleri bükmeyin; barı kalçanıza doğru bastırın."
    },

    // Orta Sırt & Rhomboid (Mid Back / Kalınlık)
    {
        id: "lib_tbar_row",
        name: "T-Bar Row (Göğüs Destekli)",
        category: "back",
        subCategory: "mid_back",
        muscle: "Orta Sırt, Rhomboid & Sırt Kalınlığı",
        defaultTarget: "2-3 Sert Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Göğüs Destekli",
        isTopSet: true,
        desc: "Alt bele sıfır yük bindirerek orta sırtı kalınlaştıran 1 numaralı harekettir.",
        tips: "Dirsekleri 45-60 derece açıyla çekin ve kürek kemiklerini birbirine yapıştırın."
    },
    {
        id: "lib_bb_row",
        name: "Barbell Bent-Over Row (Pendlay / Classic)",
        category: "back",
        subCategory: "mid_back",
        muscle: "Genel Sırt Kalınlığı & Güç",
        defaultTarget: "3 Set (6-8 Rep)",
        defaultSets: 3,
        defaultSeat: "Ayakta (Gövde 45-90°)",
        isTopSet: true,
        desc: "Serbest ağırlıkla tüm sırtı, rhomboidleri ve spinal erektörleri aynı anda çalıştıran temel güç hareketi.",
        tips: "Belinizi düz tutun (asla kamburlaşmayın), barı karın deliğine doğru çekin."
    },
    {
        id: "lib_chest_row",
        name: "Chest-Supported Wide Grip Machine Row",
        category: "back",
        subCategory: "mid_back",
        muscle: "Üst Sırt & Orta Sırt Detayları",
        defaultTarget: "2-3 Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 2, Göğüs Pedi: 3",
        isTopSet: true,
        desc: "Geniş tutuşla üst-orta sırt kaslarını 3D derinlikle ortaya çıkarır.",
        tips: "Çekerken omuzları geriye alın, skapula retraksiyonuna odaklanın."
    },
    {
        id: "lib_seated_cable_row",
        name: "Seated Cable Row (V-Bar / Geniş Bar)",
        category: "back",
        subCategory: "mid_back",
        muscle: "Orta Sırt & Alt Lat Kalınlığı",
        defaultTarget: "3 Set (10-12 Rep)",
        defaultSets: 3,
        defaultSeat: "Düz Zemin",
        isTopSet: false,
        desc: "Kablo gerilimiyle sırtın ortasında derin bir kasılma ve pump sağlar.",
        tips: "Geriye aşırı yatmayın; omurgayı dik tutarak dirsekleri geriye çekin."
    },

    // Trapez (Traps & Üst Sırt)
    {
        id: "lib_db_shrug",
        name: "Dumbbell Shrug",
        category: "back",
        subCategory: "traps",
        muscle: "Üst Trapez Kütlesi",
        defaultTarget: "2-3 Set (10-12 Rep, Tepede 2sn Durakla)",
        defaultSets: 2,
        defaultSeat: "Ayakta",
        isTopSet: false,
        desc: "Boyun ve omuz arasındaki trapez kaslarına kalınlık katar.",
        tips: "Omuzları dairesel çevirmeyin (omuz eklemine zararlıdır); dümdüz kulaklarınıza doğru çekip tepede 2 saniye sıkın."
    },
    {
        id: "lib_bb_shrug",
        name: "Barbell Shrug / Smith Machine Shrug",
        category: "back",
        subCategory: "traps",
        muscle: "Ağır Trapez Yüklemesi",
        defaultTarget: "3 Set (8-10 Rep)",
        defaultSets: 3,
        defaultSeat: "Ayakta",
        isTopSet: true,
        desc: "Yüksek ağırlıklarla trapez kaslarına aşırı mekanik gerilim bindirir.",
        tips: "Kolları bükmeyin; sadece omuzları yukarı kaldırarak yükü trapeze bindirin."
    },

    // Bel & Omurga (Lower Back / Erector Spinae)
    {
        id: "lib_deadlift",
        name: "Barbell Conventional Deadlift",
        category: "back",
        subCategory: "lower_back",
        muscle: "Tüm Arka Zincir, Bel & Sırt",
        defaultTarget: "3 Set (3-5 Rep)",
        defaultSets: 3,
        defaultSeat: "Zemin",
        isTopSet: true,
        desc: "Vücudun üretebileceği en yüksek toplam kuvveti oluşturan güç ve kalınlık kralı.",
        tips: "Barı bacaklarınıza yakın tutun, omurgayı nötr kilitleyin, yeri bacaklarınızla itin."
    },
    {
        id: "lib_back_ext",
        name: "Hyperextension / 45° Back Extension",
        category: "back",
        subCategory: "lower_back",
        muscle: "Erector Spinae & Bel Sağlığı",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "45° Sehpa",
        isTopSet: false,
        desc: "Bel kaslarını ve omurga destekleyicilerini sakatlıklara karşı zırh gibi güçlendirir.",
        tips: "Tepede aşırı geriye bükülmeyin (hiperekstansiyon yapmayın); omurga düz olunca durun."
    },

    // ==================== 4. KOL (ARMS) ====================
    // Biceps (İki Başlı Kol)
    {
        id: "lib_bb_curl",
        name: "Barbell Biceps Curl (Düz Bar / EZ-Bar)",
        category: "arms",
        subCategory: "biceps",
        muscle: "Genel Biceps Gücü (İki Baş)",
        defaultTarget: "2-3 Set (6-8 Rep)",
        defaultSets: 2,
        defaultSeat: "Ayakta",
        isTopSet: true,
        desc: "Biceps kütle inşasının en ağır ve temel serbest ağırlık hareketidir.",
        tips: "Dirsekleri gövdenin yanında sabitleyin; gövdeyi arkaya savurmayın."
    },
    {
        id: "lib_db_incline_curl",
        name: "Incline Dumbbell Curl",
        category: "arms",
        subCategory: "biceps",
        muscle: "Biceps Uzun Baş (Peak / Tepe)",
        defaultTarget: "2-3 Set (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Sehpa Açısı: 45°",
        isTopSet: false,
        desc: "Kol gövdenin gerisinde kalarak biceps uzun başını tam gerilimde esnetir ve tepe kütlesini (peak) artırır.",
        tips: "Dirsekleri öne kaçırmayın; omzun gerisinde sabit kalsın."
    },
    {
        id: "lib_preacher_curl",
        name: "Preacher Curl (Scott Bench)",
        category: "arms",
        subCategory: "biceps",
        muscle: "Biceps Kısa Baş & İç Kalınlık",
        defaultTarget: "2 Set (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 3",
        isTopSet: false,
        desc: "Vücut ivmesini sıfırlayarak biceps alt bağlantı noktasına saf gerilim bindirir.",
        tips: "En dipte dirsekleri aşırı kitlemeyin; tendonu korumak için hafif bükükken dönüşe geçin."
    },
    {
        id: "lib_bayesian_curl",
        name: "Bayesian Cable Curl (Sırttan Çekiş)",
        category: "arms",
        subCategory: "biceps",
        muscle: "Biceps Derin Esneme Gerilimi",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo En Altta",
        isTopSet: false,
        desc: "Kablo arkada kalacak şekilde öne adım atarak biceps liflerini en uzun pozisyonunda hipertrofiye zorlar.",
        tips: "Gövdeyi hafif öne eğin, dirseği arkada kilitleyip bükün."
    },

    // Triceps (Üç Başlı Kol)
    {
        id: "lib_straight_bar_push",
        name: "Düz Bar Triceps Pushdown",
        category: "arms",
        subCategory: "triceps",
        muscle: "Triceps Lateral Baş (Dış Kütle)",
        defaultTarget: "3 Set (Ağır & Sıkı, 8-10 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo En Üstte",
        isTopSet: true,
        desc: "Dıştan bakıldığında kolu geniş ve kalın gösteren Lateral başı en sert vuran harekettir.",
        tips: "Dirsekleri kaburgalarınıza kilitleyin; sadece ön kol hareket etsin."
    },
    {
        id: "lib_overhead_cable_ext",
        name: "Overhead Dual Cable Triceps Extension",
        category: "arms",
        subCategory: "triceps",
        muscle: "Triceps Uzun Baş (Long Head - %60 Hacim)",
        defaultTarget: "3 Set (Tam Esneme, 8-10 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo: Omuz/Göğüs Boyu",
        isTopSet: true,
        desc: "Triceps kas kütlesinin %60'ını oluşturan uzun başı derin esnemede hipertrofiye zorlar.",
        tips: "Dirsekleri başın yanlarında tutun, geriye doğru tam esnetip tepeye itin."
    },
    {
        id: "lib_rope_pushdown",
        name: "Halat Triceps Pushdown",
        category: "arms",
        subCategory: "triceps",
        muscle: "Triceps Dış & Medial Baş",
        defaultTarget: "2-3 Set (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Kablo Üstte",
        isTopSet: false,
        desc: "Altta halatı iki yana açarak tepe sıkışmayı maksimize eder.",
        tips: "Altta kilitlerken bilekleri iki yana açın ve 1 saniye sıkın."
    },
    {
        id: "lib_skullcrusher",
        name: "Lying EZ-Bar Skullcrusher",
        category: "arms",
        subCategory: "triceps",
        muscle: "Triceps Uzun Baş & Genel Eklem Gücü",
        defaultTarget: "3 Set (8-10 Rep)",
        defaultSets: 3,
        defaultSeat: "Düz Sehpa",
        isTopSet: true,
        desc: "Barı alna veya başın arkasına doğru indirerek triceps eklemini tam bükülmede yükler.",
        tips: "Barı burnunuza değil, başınızın arkasına doğru indirirseniz uzun baş daha fazla çalışır."
    },
    {
        id: "lib_cgbp",
        name: "Close-Grip Barbell Bench Press",
        category: "arms",
        subCategory: "triceps",
        muscle: "Triceps İtiş Gücü & Ağır Kütle",
        defaultTarget: "3 Set (6-8 Rep)",
        defaultSets: 3,
        defaultSeat: "Düz Sehpa",
        isTopSet: true,
        desc: "Ağır kilolarla tricepse aşırı yük bindiren bileşik itiş hareketi.",
        tips: "Elleri çok dar tutmayın (bilek sakatlanır); omuz genişliğinde tutmak mükemmeldir."
    },

    // Brachialis & Ön Kol (Forearms)
    {
        id: "lib_hammer_curl",
        name: "Dumbbell Hammer Curl",
        category: "arms",
        subCategory: "forearms",
        muscle: "Brachialis & Kol Yan Kalınlığı",
        defaultTarget: "2-3 Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Ayakta (Nötr Tutuş)",
        isTopSet: false,
        desc: "Biceps ile triceps arasındaki Brachialis kasını büyüterek kolu dışarı doğru iter ve kalınlaştırır.",
        tips: "Avuç içleri birbirine baksın; tepeye kontrollü kaldırın."
    },
    {
        id: "lib_reverse_curl",
        name: "Kablo Ters Tutuş V-Bar Curl (Reverse Curl)",
        category: "arms",
        subCategory: "forearms",
        muscle: "Brachioradialis (Ön Kol Üstü)",
        defaultTarget: "2-3 Set (12-15 Rep)",
        defaultSets: 2,
        defaultSeat: "Kablo En Altta",
        isTopSet: false,
        desc: "Kavrama gücünü ve ön kolun üst kalınlığını inşa eder.",
        tips: "Avuç içleri yere baksın (pronated grip); bilekleri bükmeyin."
    },
    {
        id: "lib_wrist_curl",
        name: "Seated Barbell / DB Wrist Curl",
        category: "arms",
        subCategory: "forearms",
        muscle: "Ön Kol İç Fleksörleri",
        defaultTarget: "3 Set (15-20 Rep)",
        defaultSets: 3,
        defaultSeat: "Diz Üstü Destekli",
        isTopSet: false,
        desc: "Bilek fleksörlerini güçlendirerek devasa ön kol ve tutuş kuvveti sağlar.",
        tips: "Barı parmak uçlarına kadar yuvarlayıp bilekle yukarı bükün."
    },

    // ==================== 5. KARIN & CORE (ABS & CORE) ====================
    // Üst & Orta Karın
    {
        id: "lib_cable_crunch",
        name: "Kablo Halat Crunch (Kneeling Cable Crunch)",
        category: "abs",
        subCategory: "upper_abs",
        muscle: "Rektus Abdominis (Six-Pack Tuğlaları)",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Dizler Üzerinde",
        isTopSet: false,
        desc: "Karın kaslarına ağırlık bindirerek six-pack tuğlalarını derinlemesine kalınlaştıran 1 numaralı hareket.",
        tips: "Kalçayı geriye oturtmayın; omurganızı C harfi gibi bükerek dirsekleri dizlerinize doğru kıvırın."
    },
    {
        id: "lib_decline_crunch",
        name: "Decline Bench Weighted Crunch",
        category: "abs",
        subCategory: "upper_abs",
        muscle: "Üst Karın & Ağırlıklı Hipertrofi",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Decline Sehpa",
        isTopSet: false,
        desc: "Eğim açısı sayesinde yerçekimine karşı karın kaslarını yakar.",
        tips: "Göğsünüze bir plaka alarak omurgayı bükün."
    },

    // Alt Karın (Lower Abs)
    {
        id: "lib_hanging_leg_raise",
        name: "Hanging Leg / Knee Raise",
        category: "abs",
        subCategory: "lower_abs",
        muscle: "Alt Karın & Pelvik Kontrol",
        defaultTarget: "3 Set (10-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Barda Asılı",
        isTopSet: false,
        desc: "Pelvisi yukarı bükerek alt karın duvarını sıkılaştırır ve belirginleştirir.",
        tips: "Sadece bacakları kaldırmayın; kalçayı ve leğen kemiğini göğsünüze doğru kıvırın."
    },
    {
        id: "lib_captain_chair",
        name: "Captain's Chair Knee / Leg Raise",
        category: "abs",
        subCategory: "lower_abs",
        muscle: "Alt Karın İzolasyonu",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Dirsek Destekli İstasyon",
        isTopSet: false,
        desc: "Dirsek desteğiyle sallanmayı engelleyip alt karın kaslarına saf yük bindirir.",
        tips: "Dizleri göğse çekerken alt karını sıkın ve kontrollü indirin."
    },

    // Oblikler (Yan Karın)
    {
        id: "lib_woodchopper",
        name: "Kablo Woodchopper (Yukarıdan Aşağı / Çapraz)",
        category: "abs",
        subCategory: "obliques",
        muscle: "Oblikler (Yan Karın Çizgileri)",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Kablo: Omuz Boyu",
        isTopSet: false,
        desc: "Gövde rotasyonu ile yan karın kaslarını şekillendirir ve V-cut hattını belirginleştirir.",
        tips: "Hareketi kollarla değil, gövdenizi döndürerek yapın."
    },
    {
        id: "lib_russian_twist",
        name: "Weighted Russian Twist",
        category: "abs",
        subCategory: "obliques",
        muscle: "Oblikler & Dinamik Core",
        defaultTarget: "3 Set (20 Toplam Rep)",
        defaultSets: 3,
        defaultSeat: "Zemin",
        isTopSet: false,
        desc: "Yan karın kaslarının dinamik rotasyonel dayanıklılığını artırır.",
        tips: "Ayakları yerden hafif kaldırın ve plakayı iki yana kontrollü dokundurun."
    },

    // Core & Anti-Ekstansiyon
    {
        id: "lib_ab_wheel",
        name: "Ab Wheel Rollout (Karın Çarkı)",
        category: "abs",
        subCategory: "core",
        muscle: "Tüm Core Duvarı & Anti-Ekstansiyon",
        defaultTarget: "3 Set (8-12 Rep)",
        defaultSets: 3,
        defaultSeat: "Dizler Üzerinde",
        isTopSet: true,
        desc: "Dünyanın en zor ve en verimli karın hareketlerinden biridir; tüm core duvarını çelik gibi yapar.",
        tips: "Belinizi aşağı çökertmeyin; karın kaslarını sıkarak uzanın ve karınla geri çekilin."
    },
    {
        id: "lib_plank",
        name: "Plank / Weighted Plank",
        category: "abs",
        subCategory: "core",
        muscle: "Transversus Abdominis & Statik Core",
        defaultTarget: "3 Set (45-60 sn)",
        defaultSets: 3,
        defaultSeat: "Zemin",
        isTopSet: false,
        desc: "Derin karın kaslarını güçlendirerek beli inceltir ve omurga duruşunu korur.",
        tips: "Kalçayı yukarı kaldırmayın veya aşağı düşürmeyin; vücut düz bir hat olsun."
    },

    // ==================== 6. BACAK (LEGS) ====================
    // Ön Bacak (Quadriceps)
    {
        id: "lib_bb_squat",
        name: "Barbell Back Squat (High Bar / Low Bar)",
        category: "legs",
        subCategory: "quads",
        muscle: "Genel Bacak & Tüm Vücut Gücü",
        defaultTarget: "3-4 Set (5-8 Rep)",
        defaultSets: 3,
        defaultSeat: "Squat Rack",
        isTopSet: true,
        desc: "Bacak gelişiminin ve genel anabolik hormon salınımının tartışmasız kralıdır.",
        tips: "Topukları yerden kaldırmayın, dizleri ayak parmakları yönünde açın, kalçayı paralel altına indirin."
    },
    {
        id: "lib_hack_squat",
        name: "Hack Squat (Quad Canavarı)",
        category: "legs",
        subCategory: "quads",
        muscle: "Ön Bacak (Vastus Medialis / Gözyaşı)",
        defaultTarget: "2-3 Ağır Set (3sn Negatif, Tam Derinlik)",
        defaultSets: 2,
        defaultSeat: "Ayaklar Dar & Altta",
        isTopSet: true,
        desc: "Diz fleksiyonunu maksimize ederek ön bacak liflerini cerrahi hassasiyetle parçalar.",
        tips: "Ayakları platformun altına koyun ve en altta dizlerin tamamen bükülmesine izin verin."
    },
    {
        id: "lib_leg_press",
        name: "Plate Loaded Leg Press (45°)",
        category: "legs",
        subCategory: "quads",
        muscle: "Genel Quad & Bacak Gücü",
        defaultTarget: "2-3 Sert Çalışma Seti (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Platform Altı",
        isTopSet: true,
        desc: "Omurga yorgunluğu olmadan devasa tonajlarla bacaklara aşırı yük bindirir.",
        tips: "En üstte dizleri asla kitlemeyin; en altta kalçanın koltuktan kalkmasına izin vermeyin."
    },
    {
        id: "lib_bulgarian_split",
        name: "Bulgarian Split Squat (Dumbbell)",
        category: "legs",
        subCategory: "quads",
        muscle: "Tek Bacak Quad & Glute Hipertrofisi",
        defaultTarget: "2-3 Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Sehpada Arka Ayak Destekli",
        isTopSet: false,
        desc: "Bacaklar arasındaki asimetriyi düzeltir, ön bacak ve kalçada çılgın bir büyüme tetikler.",
        tips: "Gövdeyi dik tutarsanız quads, hafif öne eğerseniz glutes daha çok çalışır."
    },
    {
        id: "lib_leg_ext",
        name: "Leg Extension",
        category: "legs",
        subCategory: "quads",
        muscle: "Quad İzolasyonu & Rectus Femoris",
        defaultTarget: "2 Bitirici Set (12-15 Rep, Maks Pump)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 3",
        isTopSet: false,
        desc: "Ön bacağın üst liflerini (Rectus Femoris) tam kilitlenmede izole eder.",
        tips: "Tepede 1 saniye kilitlenip bacağı sıkın, inişi 3 saniyede yavaş yapın."
    },

    // Arka Bacak (Hamstrings)
    {
        id: "lib_rdl",
        name: "Barbell / Dumbbell Romanian Deadlift (RDL)",
        category: "legs",
        subCategory: "hamstrings",
        muscle: "Hamstring (Arka Bacak) & Glute",
        defaultTarget: "2-3 Sıkı Set (8-10 Rep)",
        defaultSets: 2,
        defaultSeat: "Düz Zemin",
        isTopSet: true,
        desc: "Kalçayı geriye iterek arka bacak liflerini en derin esneme pozisyonunda büyütür.",
        tips: "Dizleri kitlemeyin (hafif mikro bükük olsun); hareketi dizle değil, kalçayı arkadaki duvara değdirir gibi geriye iterek yapın."
    },
    {
        id: "lib_lying_leg_curl",
        name: "Lying Leg Curl (Yatarak Arka Bacak)",
        category: "legs",
        subCategory: "hamstrings",
        muscle: "Hamstring İzolasyonu • Diz Fleksiyonu",
        defaultTarget: "2-3 Set (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Ped Ayarlı",
        isTopSet: false,
        desc: "Diz eklemini bükerek arka bacağın tüm liflerini izole eder.",
        tips: "Kalçayı pedden kaldırmayın; ayak bileklerini kendinize çekerek çekin."
    },
    {
        id: "lib_seated_leg_curl",
        name: "Seated Leg Curl (Oturarak Arka Bacak)",
        category: "legs",
        subCategory: "hamstrings",
        muscle: "Hamstring Uzun Pozisyonda Hipertrofi",
        defaultTarget: "2-3 Set (10-12 Rep)",
        defaultSets: 2,
        defaultSeat: "Koltuk: 3",
        isTopSet: true,
        desc: "Kalça bükük pozisyonda olduğu için hamstring kasını daha uzun lif boyunda çalıştırarak üstün hipertrofi sağlar.",
        tips: "Gövdeyi öne hafif eğerek hamstring esnemesini daha da artırın."
    },

    // Kalça (Glutes)
    {
        id: "lib_hip_thrust",
        name: "Barbell Hip Thrust (Kalça İtişi)",
        category: "legs",
        subCategory: "glutes",
        muscle: "Gluteus Maximus (Kalça Kütlesi)",
        defaultTarget: "3 Set (8-10 Rep, Tepede 2sn Sık)",
        defaultSets: 3,
        defaultSeat: "Sehpa Sırt Destekli",
        isTopSet: true,
        desc: "Kalça kasına tepe noktada en yüksek yatay mekanik gerilimi bindiren 1 numaralı harekettir.",
        tips: "Tepede beli aşırı bükmeyin; çeneyi göğse yakın tutun ve tepede kalçayı sıkarak kilitleyin."
    },

    // Bacak İçi (Adductors)
    {
        id: "lib_adductor",
        name: "Adductor Machine (Bacak İçi)",
        category: "legs",
        subCategory: "adductors",
        muscle: "Bacak İçi Adductor Kasları",
        defaultTarget: "3 Set (12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Geniş Açı: 4",
        isTopSet: false,
        desc: "Önden bakıldığında bacağın içini doldurarak bacaklara devasa bir kalınlık ve derinlik katar.",
        tips: "Geniş açıda başlayın, en içte dizleri birbirine değdirip 1 saniye sıkın."
    },

    // Kalf (Calves)
    {
        id: "lib_calf_raise",
        name: "Standing / Seated Calf Raise (Kalf Kaldırışı)",
        category: "legs",
        subCategory: "calves",
        muscle: "Kalf (Gastrocnemius & Soleus)",
        defaultTarget: "3 Set (Tepe 2sn Bekleme, 12-15 Rep)",
        defaultSets: 3,
        defaultSeat: "Platform",
        isTopSet: false,
        desc: "Tam esneme ve tepe sıkışmayla inatçı kalf liflerini büyütür.",
        tips: "Asla zıplayarak ivme almayın. En dipte 2 saniye tam esneyin, tepeye çıkıp parmak ucunda 2 saniye bekleyin."
    }
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

// Dual-Role & Coach State
let currentAuthRole = "athlete";
let currentPortalMode = "athlete"; // 'athlete' | 'coach'
let currentCoachActiveTab = "roster";
let currentCoachSelectedAthlete = "omer";
let currentCoachDetailSubtab = "nutrition";
let currentCoachFilterGoal = "all";

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    seedInitialUsersAndDemoData();
    const hasActiveSession = loadDataFromStorage();
    const activeUsername = getActiveSessionUsername();
    const registry = getUsersRegistry();
    const user = activeUsername && registry[activeUsername];

    if (user && user.role === "coach") {
        switchAppPortal("coach");
    } else {
        switchAppPortal("athlete");
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
        initCollapsibleBanners();

        if (!hasActiveSession && !getActiveSessionUsername()) {
            openAuthModal("login");
        } else {
            checkOnboardingStatus();
            checkAthletePendingRevision();
            checkAthleteUnreadMessages();
        }
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
        document.body.classList.add("modal-open");
        if (modalId === "modal-settings") initSettingsForm();
        if (modalId === "modal-quick-actions") renderQuickActionsConfig();
        if (modalId === "modal-supplement-catalog") renderSupplementCatalog();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("active");
        // Check if any other modal is still active
        const anyActive = document.querySelector(".modal-overlay.active");
        if (!anyActive) {
            document.body.classList.remove("modal-open");
        }
    }
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

    const geminiInput = document.getElementById("setting-gemini-key");
    if (geminiInput) {
        geminiInput.value = localStorage.getItem("OMAR_GEMINI_API_KEY") || "";
    }
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

    const geminiInput = document.getElementById("setting-gemini-key");
    if (geminiInput) {
        const keyVal = geminiInput.value.trim();
        if (keyVal) {
            localStorage.setItem("OMAR_GEMINI_API_KEY", keyVal);
        } else {
            localStorage.removeItem("OMAR_GEMINI_API_KEY");
        }
    }

    saveDataToStorage();
    renderDashboard();
    closeModal('modal-settings');
    showToast("Hedefler ve ayarlar başarıyla güncellendi! 🎯");
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
                            <th style="width: 20%">SET</th>
                            <th style="width: 25%">ÖNCEKİ</th>
                            <th style="width: 25%">BUGÜN</th>
                            <th style="width: 30%">ZORLUK (RIR)</th>
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
                            <option value="" ${savedRir === '' ? 'selected' : ''}>Zorluk Seç</option>
                            <option value="RIR 0" ${savedRir === 'RIR 0' || savedRir === 'Zor (RIR 0)' || savedRir === '🔴 Zor (Tükeniş / 0)' ? 'selected' : ''}>🔴 Zor (Tükeniş / 0)</option>
                            <option value="RIR 1" ${savedRir === 'RIR 1' || savedRir === 'İdeal (RIR 1)' || savedRir === '🟢 İdeal (1 Kaldı)' ? 'selected' : ''}>🟢 İdeal (1 Kaldı)</option>
                            <option value="RIR 2+" ${savedRir === 'RIR 2+' || savedRir === 'Kolay (RIR 2+)' || savedRir === '🟡 Kolay (2+ Kaldı)' ? 'selected' : ''}>🟡 Kolay (2+ Kaldı)</option>
                            <option value="Form Boz" ${savedRir === 'Form Boz' || savedRir === 'Kötü Form' || savedRir === '⚠️ Kötü Form' ? 'selected' : ''}>⚠️ Kötü Form</option>
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

let currentLibraryMainMuscle = "chest";
let currentLibrarySubCategory = "all";
let currentLibrarySearchQuery = "";

const MUSCLE_SUBREGIONS_MAP = {
    chest: [
        { id: "all", name: "Tümü (Tüm Göğüs)" },
        { id: "upper_chest", name: "Üst Göğüs (Incline)" },
        { id: "mid_chest", name: "Orta Göğüs (Flat)" },
        { id: "lower_chest", name: "Alt Göğüs & Dips" },
        { id: "chest_fly", name: "İç Göğüs & Fly İzolasyon" }
    ],
    shoulders: [
        { id: "all", name: "Tümü (Tüm Omuz)" },
        { id: "front_delts", name: "Ön Omuz (Press / Güç)" },
        { id: "side_delts", name: "Yan Omuz (Lateral 3D)" },
        { id: "rear_delts", name: "Arka Omuz (Face Pull / Fly)" }
    ],
    back: [
        { id: "all", name: "Tümü (Tüm Sırt)" },
        { id: "lats", name: "Lats & Kanat (Genişlik / V-Taper)" },
        { id: "mid_back", name: "Orta Sırt & Rhomboid (Kalınlık)" },
        { id: "traps", name: "Trapez (Shrug / Üst Sırt)" },
        { id: "lower_back", name: "Bel & Omurga (Erector / Deadlift)" }
    ],
    arms: [
        { id: "all", name: "Tümü (Tüm Kol)" },
        { id: "biceps", name: "Biceps (Pazu / Tepe & İzolasyon)" },
        { id: "triceps", name: "Triceps (Arka Kol & İtiş Gücü)" },
        { id: "forearms", name: "Brachialis & Ön Kol / Bilek" }
    ],
    abs: [
        { id: "all", name: "Tümü (Tüm Karın & Core)" },
        { id: "upper_abs", name: "Üst & Orta Karın (Crunch)" },
        { id: "lower_abs", name: "Alt Karın (Leg Raise / Asılma)" },
        { id: "obliques", name: "Oblikler (Yan Karın / Rotasyon)" },
        { id: "core", name: "Core Duvarı (Rollout & Plank)" }
    ],
    legs: [
        { id: "all", name: "Tümü (Tüm Bacak & Kalça)" },
        { id: "quads", name: "Ön Bacak (Squat & Leg Press)" },
        { id: "hamstrings", name: "Arka Bacak (RDL & Leg Curl)" },
        { id: "glutes", name: "Kalça (Hip Thrust & Glute)" },
        { id: "adductors", name: "Bacak İçi (Adductor)" },
        { id: "calves", name: "Kalf (Calf Raise)" }
    ]
};

function openExerciseManagerModal() {
    const plan = appData.customWorkoutPlan[currentActiveDay];
    if (!plan) return;

    document.getElementById("ex-mgr-day-title").innerHTML = `<i class="fa-solid fa-dumbbell"></i> ${plan.title} - Hareketleri Düzenle`;
    
    // Reset search input
    const searchInput = document.getElementById("library-ex-search");
    if (searchInput) searchInput.value = "";
    currentLibrarySearchQuery = "";

    renderCurrentExercisesInManager();
    setLibraryMainMuscle("chest");
    openModal('modal-exercise-manager');
}

function renderCurrentExercisesInManager() {
    const listContainer = document.getElementById("ex-mgr-current-list");
    const plan = appData.customWorkoutPlan[currentActiveDay];
    if (!listContainer || !plan) return;

    if (plan.exercises.length === 0) {
        listContainer.innerHTML = `<p class="text-muted" style="text-align:center; font-size:0.8rem; padding:10px 0;">Bu gün için henüz kayıtlı hareket yok. Aşağıdaki kütüphaneden ekleyebilirsiniz.</p>`;
        return;
    }

    listContainer.innerHTML = plan.exercises.map((ex, idx) => `
        <div class="ex-mgr-item">
            <div>
                <strong>${idx + 1}. ${ex.name}</strong>
                <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:2px;">
                    <span class="muscle-tag">${ex.muscle || ''}</span> • ${ex.target}
                    ${ex.defaultSeat ? `• <em>${ex.defaultSeat}</em>` : ''}
                </div>
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
    renderLibraryExercises();
    renderWorkoutView(currentActiveDay);
    showToast(`${removed.name} programdan çıkarıldı.`);
}

function setLibraryMainMuscle(muscleKey, btn) {
    currentLibraryMainMuscle = muscleKey || "chest";
    currentLibrarySubCategory = "all";

    // Update active class on muscle pills
    document.querySelectorAll(".muscle-pill").forEach(p => p.classList.remove("active"));
    if (btn) {
        btn.classList.add("active");
    } else {
        const targetPill = document.getElementById(`mpill-${currentLibraryMainMuscle}`);
        if (targetPill) targetPill.classList.add("active");
    }

    renderLibrarySubregions();
    renderLibraryExercises();
}

function setLibrarySubCategory(subKey, btn) {
    currentLibrarySubCategory = subKey || "all";

    // Update active class on subregion chips
    document.querySelectorAll(".subregion-chip").forEach(c => c.classList.remove("active"));
    if (btn) {
        btn.classList.add("active");
    }

    renderLibraryExercises();
}

function handleLibrarySearch(query) {
    currentLibrarySearchQuery = (query || "").trim().toLowerCase();
    renderLibraryExercises();
}

function renderLibrarySubregions() {
    const container = document.getElementById("library-subregion-chips");
    if (!container) return;

    const subregions = MUSCLE_SUBREGIONS_MAP[currentLibraryMainMuscle] || [
        { id: "all", name: "Tümü" }
    ];

    container.innerHTML = subregions.map(sub => `
        <button type="button" class="subregion-chip ${currentLibrarySubCategory === sub.id ? 'active' : ''}" onclick="setLibrarySubCategory('${sub.id}', this)">
            ${sub.name}
        </button>
    `).join("");
}

function renderLibraryExercises() {
    const container = document.getElementById("library-exercises-list");
    if (!container) return;

    const plan = appData.customWorkoutPlan[currentActiveDay];
    const currentExNames = plan ? plan.exercises.map(e => e.name) : [];
    const q = currentLibrarySearchQuery;

    const filtered = EXERCISE_LIBRARY.filter(ex => {
        if (q && q.length > 0) {
            const nameMatch = ex.name.toLowerCase().includes(q);
            const muscleMatch = ex.muscle.toLowerCase().includes(q);
            const descMatch = ex.desc && ex.desc.toLowerCase().includes(q);
            const tipsMatch = ex.tips && ex.tips.toLowerCase().includes(q);
            return nameMatch || muscleMatch || descMatch || tipsMatch;
        }

        // Category & Subcategory matching
        if (ex.category !== currentLibraryMainMuscle) return false;
        if (currentLibrarySubCategory !== "all" && ex.subCategory !== currentLibrarySubCategory) return false;
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:24px 10px; color:var(--text-muted); font-size:0.85rem;">
                <i class="fa-solid fa-magnifying-glass" style="font-size:1.5rem; margin-bottom:8px; opacity:0.5; display:block;"></i>
                Aramanıza uygun hareket bulunamadı. Lütfen farklı bir arama kelimesi veya kas grubu seçin.
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(ex => {
        const inPlan = currentExNames.includes(ex.name);
        return `
            <div class="library-ex-item">
                <div style="flex:1;">
                    <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-bottom:4px;">
                        <strong style="font-size:0.85rem; color:#ffffff;">${ex.name}</strong>
                        ${ex.isTopSet ? `<span class="top-set-badge" style="font-size:0.6rem; padding:1px 5px;"><i class="fa-solid fa-fire"></i> TOP SET</span>` : ''}
                        <span class="library-sub-badge">${ex.muscle}</span>
                    </div>
                    <div style="font-size:0.72rem; color:var(--text-secondary); margin-bottom:3px;">
                        <i class="fa-solid fa-bullseye" style="color:var(--accent-orange); font-size:0.65rem;"></i> <strong>Hedef:</strong> ${ex.defaultTarget} 
                        ${ex.defaultSeat ? `• <i class="fa-solid fa-chair" style="color:var(--accent-cyan); font-size:0.65rem;"></i> ${ex.defaultSeat}` : ''}
                    </div>
                    <div style="font-size:0.7rem; color:var(--text-muted); line-height:1.35;">
                        ${ex.desc}
                        ${ex.tips ? `<span style="display:block; color:#9ca3af; margin-top:2px;"><em>💡 ${ex.tips}</em></span>` : ''}
                    </div>
                </div>
                <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px; justify-content:center;">
                    ${inPlan 
                        ? `<button class="btn btn-xs btn-outline" style="color:var(--status-green); border-color:var(--status-green); cursor:default;" disabled><i class="fa-solid fa-check"></i> Ekli</button>`
                        : `<button class="btn btn-xs btn-primary" onclick="addExerciseToDay('${ex.id}')"><i class="fa-solid fa-plus"></i> Ekle</button>`
                    }
                </div>
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
    renderLibraryExercises();
    renderWorkoutView(currentActiveDay);
    showToast(`${libEx.name} programa eklendi! 💪`);
}

// Collapsible Banners & Guidance Cards Management
function dismissCoachDailyBanner(event) {
    if (event) event.stopPropagation();
    const banner = document.getElementById("coach-daily-banner");
    if (banner) banner.style.display = "none";
    try {
        localStorage.setItem("OMAR_HIDE_DAILY_COACH_BANNER", "true");
    } catch(e) {}
    showToast("Koç bilgilendirme kartı kapatıldı. ℹ️");
}

function toggleRIRLegendCollapse() {
    const card = document.getElementById("rir-legend-container");
    const icon = document.getElementById("rir-collapse-icon");
    if (!card) return;

    const isCollapsed = card.classList.toggle("collapsed");
    if (icon) {
        icon.className = isCollapsed ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up";
    }
    try {
        localStorage.setItem("OMAR_RIR_LEGEND_COLLAPSED", isCollapsed ? "true" : "false");
    } catch(e) {}
}

function initCollapsibleBanners() {
    try {
        if (localStorage.getItem("OMAR_HIDE_DAILY_COACH_BANNER") === "true") {
            const banner = document.getElementById("coach-daily-banner");
            if (banner) banner.style.display = "none";
        }
        if (localStorage.getItem("OMAR_RIR_LEGEND_COLLAPSED") === "true") {
            const card = document.getElementById("rir-legend-container");
            const icon = document.getElementById("rir-collapse-icon");
            if (card) card.classList.add("collapsed");
            if (icon) icon.className = "fa-solid fa-chevron-down";
        }
    } catch(e) {}
}

// Strength & Progressive Overload Estimation Functions
function calculateEstimated1RM(weight, reps) {
    if (!weight || !reps || reps <= 0) return 0;
    if (reps === 1) return weight;
    // Brzycki 1RM Formula
    return Math.round(weight / (1.0278 - (0.0278 * Math.min(reps, 15))));
}

function getNextSessionProgressionAdvice(lastWeight, lastReps, lastRir) {
    if (!lastWeight) return null;
    if (lastRir === 0 && lastReps >= 8) {
        return {
            advice: `Tebrikler! ${lastWeight} kg ile hedefe ulaştın. Gelecek antrenmanda +2.5 kg artırmayı hedefle! 🔥`,
            suggestedWeight: (parseFloat(lastWeight) + 2.5).toFixed(1)
        };
    } else if (lastRir === 1) {
        return {
            advice: `Güzel performans! Gelecek antrenmanda aynı kiloyla +1 tekrar eklemeye çalış. 📈`,
            suggestedWeight: parseFloat(lastWeight).toFixed(1)
        };
    } else {
        return {
            advice: `Mevcut kiloda formu koruyarak tekrar sayısını tamamlamaya odaklan. 🎯`,
            suggestedWeight: parseFloat(lastWeight).toFixed(1)
        };
    }
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

// ==================== AUTHENTICATION, DUAL-ROLE & COACH ENGINE ====================

async function hashPassword(password) {
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(password + "_omar_salt_2026");
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (e) {
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

function getCoachMasterPin() {
    return localStorage.getItem("OMAR_COACH_MASTER_KEY") || "COACH2026";
}

function setCoachMasterPin(pin) {
    localStorage.setItem("OMAR_COACH_MASTER_KEY", pin);
}

function updateCoachMasterPin() {
    const input = document.getElementById("coach-settings-master-pin");
    if (!input || !input.value.trim()) {
        showToast("Lütfen geçerli bir PIN girin.");
        return;
    }
    setCoachMasterPin(input.value.trim());
    showToast("Antrenör Güvenlik Anahtarı güncellendi! 🔑");
}

function getChatDB() {
    try {
        const data = localStorage.getItem("OMAR_CHAT_DB");
        return data ? JSON.parse(data) : {};
    } catch (e) {
        return {};
    }
}

function saveChatDB(db) {
    localStorage.setItem("OMAR_CHAT_DB", JSON.stringify(db));
}

function getRevisionsDB() {
    try {
        const data = localStorage.getItem("OMAR_REVISIONS_DB");
        return data ? JSON.parse(data) : {};
    } catch (e) {
        return {};
    }
}

function saveRevisionsDB(db) {
    localStorage.setItem("OMAR_REVISIONS_DB", JSON.stringify(db));
}

// Generate Unique 4-Digit Random Athlete Identity Tag (#1000 - #9999)
function generateUniqueAthleteTag(registry) {
    registry = registry || getUsersRegistry();
    const existingTags = new Set(
        Object.values(registry)
            .map(u => u.athleteTag)
            .filter(Boolean)
    );
    let tag = "";
    let attempts = 0;
    while (attempts < 10000) {
        const randNum = Math.floor(1000 + Math.random() * 9000); // 1000 - 9999
        tag = `#${randNum}`;
        if (!existingTags.has(tag)) {
            return tag;
        }
        attempts++;
    }
    return `#${Math.floor(1000 + Math.random() * 9000)}`;
}

// Copy Athlete ID Tag to Clipboard with 1-Click
function copyAthleteTag() {
    const activeUsername = getActiveSessionUsername();
    const registry = getUsersRegistry();
    const user = activeUsername && registry[activeUsername];
    const tag = (user && user.athleteTag) || "#4829";

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tag).then(() => {
            showToast(`Sporcu Kimlik Kodun (${tag}) panoya kopyalandı! 📋`);
        }).catch(() => {
            showToast(`Sporcu Kimlik Kodun: ${tag}`);
        });
    } else {
        showToast(`Sporcu Kimlik Kodun: ${tag}`);
    }
}

// Seed Demo Registry & Clean Up Fake Accounts
function seedInitialUsersAndDemoData() {
    let registry = getUsersRegistry();
    let chatDb = getChatDB();
    let revDb = getRevisionsDB();
    let needsSave = false;

    // Purge fake demo accounts if present
    if (registry["caner"]) { delete registry["caner"]; needsSave = true; }
    if (registry["burak"]) { delete registry["burak"]; needsSave = true; }
    if (registry["mert"]) { delete registry["mert"]; needsSave = true; }
    if (chatDb["caner"]) { delete chatDb["caner"]; saveChatDB(chatDb); }
    if (chatDb["burak"]) { delete chatDb["burak"]; saveChatDB(chatDb); }

    // Coach Account
    if (!registry["coach_omar"]) {
        registry["coach_omar"] = {
            username: "coach_omar",
            displayName: "Koç Ömer",
            role: "coach",
            passwordHash: "coach_pass_hash_2026",
            createdAt: "2026-09-01",
            data: createDefaultAppData()
        };
        needsSave = true;
    }

    // Athlete 1: Ömer Faruk (Real User - Lean Bulk)
    if (!registry["omer"]) {
        const omerData = createDefaultAppData();
        omerData.userProfile = { age: 24, height: 178, weight: 74.0, gender: "male", frequency: 5, activity: "moderate", goal: "bulk" };
        omerData.targets = { calories: 2770, protein: 167, carbs: 344, fat: 77, water: 3.5, steps: 7500, weeklyGainMin: 0.15, weeklyGainMax: 0.35 };
        omerData.todayNutrition = {
            consumedCal: 2450,
            consumedP: 155,
            consumedC: 310,
            consumedF: 68,
            consumedWater: 3.0,
            steps: 6800,
            meals: [
                { id: "pancake", name: "1. Kahvaltı Pankek", cal: 810, p: 31, c: 106, f: 31, time: "08:30" },
                { id: "preworkout", name: "2. Antrenmandan 2 Saat Önce", cal: 850, p: 56, c: 118, f: 16, time: "12:30" },
                { id: "postworkout", name: "3. Antrenman Sonrası (Post-Workout)", cal: 550, p: 40, c: 60, f: 15, time: "16:00" }
            ]
        };
        omerData.workoutLogs = {
            "pzt_1": [
                { weight: 80, reps: 8, rir: "RIR 0", date: "2026-09-16" },
                { weight: 72.5, reps: 10, rir: "RIR 1", date: "2026-09-16" }
            ],
            "pzt_2": [
                { weight: 32, reps: 9, rir: "RIR 1", date: "2026-09-16" }
            ]
        };
        omerData.weightHistory = [
            { date: "2026-09-16", weight: 74.0 },
            { date: "2026-09-09", weight: 73.8 },
            { date: "2026-09-02", weight: 73.5 }
        ];
        omerData.onboardingCompleted = true;

        registry["omer"] = {
            username: "omer",
            displayName: "Ömer Faruk",
            role: "athlete",
            athleteTag: "#4829",
            passwordHash: "1234",
            createdAt: "2026-09-01",
            data: omerData
        };
        needsSave = true;
    } else if (!registry["omer"].athleteTag) {
        registry["omer"].athleteTag = "#4829";
        needsSave = true;
    }

    // Ensure all existing athlete accounts have an athleteTag
    Object.values(registry).forEach(u => {
        if (u.role === "athlete" && !u.athleteTag) {
            u.athleteTag = generateUniqueAthleteTag(registry);
            needsSave = true;
        }
    });

    // Seed Demo Messages for Real User
    if (!chatDb["omer"]) {
        chatDb["omer"] = [
            { sender: "coach", text: "Selam Ömer! Bugün Push 1 günün, Bench Press'te 80kg top sete odaklan.", time: "10:30", date: "2026-09-16", read: true },
            { sender: "athlete", text: "Hocam 80kg ile 8 rep tam RIR 0 çıkardım! 🔥", time: "14:15", date: "2026-09-16", read: true },
            { sender: "coach", text: "Mükemmel iş! Gelecek hafta 82.5kg deneyeceğiz, dinlenmeni ve suyunu aksatma.", time: "14:20", date: "2026-09-16", read: true }
        ];
        saveChatDB(chatDb);
    }

    // Seed Demo Revision for Real User
    if (!revDb["omer"]) {
        revDb["omer"] = {
            calories: 2850,
            protein: 170,
            carbs: 360,
            fat: 78,
            water: 3.5,
            steps: 7500,
            gainMin: 0.15,
            gainMax: 0.35,
            coachNote: "Haftalık kilo artış hızın kontrollü gidiyor. Kaloriyi +80 kcal artırarak hipertrofiyi hızlandırıyoruz. Karbonhidratı antrenman öncesine yükle!",
            date: "2026-09-16",
            applied: false
        };
        saveRevisionsDB(revDb);
    }

    if (needsSave) {
        saveUsersRegistry(registry);
    }
}

// Auth Role Selector
function selectAuthRole(role) {
    currentAuthRole = role;
    const athletePill = document.getElementById("role-pill-athlete");
    const coachPill = document.getElementById("role-pill-coach");
    const loginKeyGrp = document.getElementById("login-coach-key-group");
    const regKeyGrp = document.getElementById("reg-coach-key-group");
    const loginBtn = document.getElementById("login-submit-btn");
    const regBtn = document.getElementById("register-submit-btn");
    const logoBadge = document.getElementById("auth-brand-logo");

    if (role === "coach") {
        if (athletePill) athletePill.classList.remove("active");
        if (coachPill) coachPill.classList.add("active");
        if (loginKeyGrp) loginKeyGrp.style.display = "block";
        if (regKeyGrp) regKeyGrp.style.display = "block";
        if (loginBtn) loginBtn.innerHTML = `Antrenör Girişi Yap <i class="fa-solid fa-crown"></i>`;
        if (regBtn) regBtn.innerHTML = `Antrenör Hesabı Aç <i class="fa-solid fa-crown"></i>`;
        if (logoBadge) logoBadge.innerHTML = `<i class="fa-solid fa-crown" style="color:#ffd60a;"></i>`;
    } else {
        if (athletePill) athletePill.classList.add("active");
        if (coachPill) coachPill.classList.remove("active");
        if (loginKeyGrp) loginKeyGrp.style.display = "none";
        if (regKeyGrp) regKeyGrp.style.display = "none";
        if (loginBtn) loginBtn.innerHTML = `Giriş Yap <i class="fa-solid fa-arrow-right-to-bracket"></i>`;
        if (regBtn) regBtn.innerHTML = `Hesap Oluştur ve Başla <i class="fa-solid fa-rocket"></i>`;
        if (logoBadge) logoBadge.innerHTML = `<i class="fa-solid fa-dumbbell"></i>`;
    }
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

    // Role check for Coach
    if (currentAuthRole === "coach") {
        const pinInput = document.getElementById("login-coach-key") ? document.getElementById("login-coach-key").value.trim() : "";
        if (pinInput !== getCoachMasterPin()) {
            if (errBanner) {
                errBanner.innerText = "Hatalı Antrenör Güvenlik Anahtarı (Master PIN)!";
                errBanner.style.display = "block";
            }
            return;
        }
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
    if (user.passwordHash !== inputHash && user.passwordHash !== passwordInput) {
        if (errBanner) {
            errBanner.innerText = "Hatalı şifre girdiniz. Lütfen tekrar deneyin.";
            errBanner.style.display = "block";
        }
        return;
    }

    // Success login
    setActiveSessionUsername(usernameInput);

    if (currentAuthRole === "coach" || user.role === "coach") {
        closeAuthModal();
        switchAppPortal("coach");
        showToast(`Antrenör Girişi Başarılı! Hoş geldin, ${user.displayName || user.username}! 👑`);
        return;
    }

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
    switchAppPortal("athlete");
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

    if (currentAuthRole === "coach") {
        const pinInput = document.getElementById("reg-coach-key") ? document.getElementById("reg-coach-key").value.trim() : "";
        if (pinInput !== getCoachMasterPin()) {
            if (errBanner) {
                errBanner.innerText = "Antrenör hesabı açmak için geçerli bir Güvenlik Anahtarı girmelisiniz.";
                errBanner.style.display = "block";
            }
            return;
        }
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
    const athleteTag = (currentAuthRole === "athlete") ? generateUniqueAthleteTag(registry) : null;

    registry[username] = {
        username,
        displayName,
        role: currentAuthRole,
        athleteTag,
        passwordHash,
        createdAt: new Date().toISOString().split('T')[0],
        data: initialData
    };

    saveUsersRegistry(registry);
    setActiveSessionUsername(username);

    closeAuthModal();

    if (currentAuthRole === "coach") {
        switchAppPortal("coach");
        showToast(`Antrenör hesabınız açıldı! Hoş geldiniz, Koç ${displayName}! 👑`);
    } else {
        loadDataFromStorage();
        updateTopBarUserHeader();
        renderDashboard();
        renderWorkoutView(currentActiveDay);
        renderNutritionView();
        renderSupplementsView();
        renderScaleView();
        initSettingsForm();
        switchAppPortal("athlete");
        showToast(`Hesabın oluşturuldu! Özel Sporcu Kodun: ${athleteTag} 🚀`);

        setTimeout(() => {
            openOnboardingWizard();
        }, 400);
    }
}

// ==================== PORTAL SWITCHER & COACH CONTROLLERS ====================

function switchAppPortal(mode) {
    const athleteContainer = document.getElementById("athlete-app-container");
    const coachContainer = document.getElementById("coach-app-container");

    if (mode === "coach") {
        const activeUsername = getActiveSessionUsername();
        const registry = getUsersRegistry();
        const user = activeUsername && registry[activeUsername];

        if (!user || user.role !== "coach") {
            const pin = prompt("Antrenör Yönetim Paneline erişmek için Güvenlik Anahtarını (Master PIN) girin:");
            if (!pin || pin.trim() !== getCoachMasterPin()) {
                showToast("Hatalı güvenlik anahtarı! ❌");
                return;
            }
        }

        currentPortalMode = "coach";
        if (athleteContainer) athleteContainer.style.display = "none";
        if (coachContainer) coachContainer.style.display = "flex";
        renderCoachPortal();
        showToast("Antrenör Yönetim Paneline Geçildi 👑");
    } else {
        currentPortalMode = "athlete";
        if (coachContainer) coachContainer.style.display = "none";
        if (athleteContainer) athleteContainer.style.display = "flex";
        loadDataFromStorage();
        updateTopBarUserHeader();
        renderDashboard();
        checkAthletePendingRevision();
        checkAthleteUnreadMessages();
        showToast("Sporcu Portalı Aktif 🏃‍♂️");
    }
}

function navigateCoachTab(tabKey) {
    currentCoachActiveTab = tabKey;
    document.querySelectorAll(".coach-bottom-nav .nav-item").forEach(btn => btn.classList.remove("active"));
    const activeBtn = Array.from(document.querySelectorAll(".coach-bottom-nav .nav-item")).find(b => b.getAttribute("onclick") && b.getAttribute("onclick").includes(tabKey));
    if (activeBtn) activeBtn.classList.add("active");

    document.querySelectorAll("#coach-app-container .tab-view").forEach(v => v.classList.remove("active"));
    const activeView = document.getElementById(`view-coach-${tabKey}`);
    if (activeView) activeView.classList.add("active");

    if (tabKey === "roster") renderCoachRoster();
    else if (tabKey === "detail") renderCoachDetail(currentCoachSelectedAthlete);
    else if (tabKey === "prescriptions") renderCoachPrescriptions(currentCoachSelectedAthlete);
    else if (tabKey === "chat") renderCoachChat(currentCoachSelectedAthlete);
    else if (tabKey === "settings") renderCoachSettings();
}

function renderCoachPortal() {
    const registry = getUsersRegistry();
    const chatDb = getChatDB();
    const revDb = getRevisionsDB();

    const athletes = Object.values(registry).filter(u => u.role !== "coach");
    const countBadge = document.getElementById("coach-athlete-count-badge");
    if (countBadge) countBadge.innerText = athletes.length;

    // Stats
    const totalAthletesEl = document.getElementById("c-stat-total-athletes");
    const activeTodayEl = document.getElementById("c-stat-active-today");
    const unreadMsgEl = document.getElementById("c-stat-unread-messages");
    const pendingRevEl = document.getElementById("c-stat-pending-revisions");

    if (totalAthletesEl) totalAthletesEl.innerText = athletes.length;
    if (activeTodayEl) {
        const activeCount = athletes.filter(a => a.data && a.data.todayNutrition && a.data.todayNutrition.consumedCal > 0).length;
        activeTodayEl.innerText = activeCount;
    }

    let unreadTotal = 0;
    Object.keys(chatDb).forEach(u => {
        const msgs = chatDb[u] || [];
        unreadTotal += msgs.filter(m => m.sender === "athlete" && !m.read).length;
    });

    if (unreadMsgEl) unreadMsgEl.innerText = unreadTotal;
    const coachUnreadBadge = document.getElementById("coach-unread-total");
    if (coachUnreadBadge) {
        coachUnreadBadge.innerText = unreadTotal;
        coachUnreadBadge.style.display = unreadTotal > 0 ? "inline-flex" : "none";
    }

    let pendingRevTotal = Object.values(revDb).filter(r => !r.applied).length;
    if (pendingRevEl) pendingRevEl.innerText = pendingRevTotal;

    // Set default selected athlete if not set
    if (!currentCoachSelectedAthlete && athletes.length > 0) {
        currentCoachSelectedAthlete = athletes[0].username;
    }

    renderCoachRoster();
}

function filterCoachRoster() {
    renderCoachRoster();
}

function filterCoachRosterByGoal(goal, btn) {
    currentCoachFilterGoal = goal;
    document.querySelectorAll(".roster-pill").forEach(p => p.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderCoachRoster();
}

function renderCoachRoster() {
    const container = document.getElementById("coach-roster-container");
    if (!container) return;

    const registry = getUsersRegistry();
    const chatDb = getChatDB();
    const searchVal = document.getElementById("coach-athlete-search") ? document.getElementById("coach-athlete-search").value.trim().toLowerCase() : "";

    let athletes = Object.values(registry).filter(u => u.role !== "coach");

    // Filter by search
    if (searchVal) {
        athletes = athletes.filter(a => 
            (a.displayName && a.displayName.toLowerCase().includes(searchVal)) || 
            (a.username && a.username.toLowerCase().includes(searchVal)) ||
            (a.athleteTag && a.athleteTag.toLowerCase().includes(searchVal))
        );
    }

    // Filter by goal
    if (currentCoachFilterGoal !== "all") {
        athletes = athletes.filter(a => {
            const goal = (a.data && a.data.userProfile && a.data.userProfile.goal) || "bulk";
            return goal === currentCoachFilterGoal;
        });
    }

    if (athletes.length === 0) {
        container.innerHTML = `
            <div class="card" style="text-align:center; padding:30px 16px;">
                <i class="fa-solid fa-user-xmark" style="font-size:2rem; color:var(--text-muted); margin-bottom:10px;"></i>
                <h4 style="color:#fff;">Kayıtlı Sporcu Bulunamadı</h4>
                <p class="text-secondary" style="font-size:0.75rem;">Arama kriterlerine uygun sporcu yok veya henüz sporcu eklenmedi.</p>
            </div>
        `;
        return;
    }

    const goalMap = { bulk: "🔥 Lean Bulk", cut: "✂️ Cutting", recomp: "⚡ Recomp" };

    let html = "";
    athletes.forEach(ath => {
        const uData = ath.data || {};
        const p = uData.userProfile || {};
        const t = uData.targets || DEFAULT_TARGETS;
        const n = uData.todayNutrition || {};
        const goalStr = goalMap[p.goal] || "🔥 Lean Bulk";

        const history = uData.weightHistory || [];
        const currentW = history.length > 0 ? history[0].weight : (p.weight || 74.0);

        const consumedCal = n.consumedCal || 0;
        const targetCal = t.calories || 2770;
        const calPercent = Math.min(100, Math.round((consumedCal / targetCal) * 100));

        const stepsVal = n.steps || 0;
        const targetSteps = t.steps || 7500;

        const msgs = chatDb[ath.username] || [];
        const unreadCount = msgs.filter(m => m.sender === "athlete" && !m.read).length;

        const initial = (ath.displayName || ath.username).charAt(0).toUpperCase();

        html += `
            <div class="athlete-roster-card">
                <div class="arc-header">
                    <div class="arc-left">
                        <div class="arc-avatar">${initial}</div>
                        <div class="arc-name-group">
                            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                <h3>${ath.displayName || ath.username}</h3>
                                <span class="badge-id">${ath.athleteTag || '#----'}</span>
                            </div>
                            <span class="arc-uname">@${ath.username}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:6px;">
                        <span class="arc-goal-badge">${goalStr}</span>
                        ${unreadCount > 0 ? `<span class="badge-role" style="background:var(--status-amber); color:#000; font-size:0.6rem; font-weight:900;">${unreadCount} Yeni Mesaj</span>` : ''}
                    </div>
                </div>

                <div class="arc-metrics-row">
                    <div class="arc-m-item">
                        <span>Güncel Kilo</span>
                        <strong>${currentW.toFixed(1)} kg</strong>
                    </div>
                    <div class="arc-m-item">
                        <span>Günlük Kalori</span>
                        <strong>${consumedCal} / ${targetCal} kcal</strong>
                    </div>
                    <div class="arc-m-item">
                        <span>Adım</span>
                        <strong>${stepsVal.toLocaleString('tr-TR')} / ${targetSteps.toLocaleString('tr-TR')}</strong>
                    </div>
                </div>

                <div style="margin-bottom:10px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.68rem; color:var(--text-secondary); margin-bottom:3px;">
                        <span>Beslenme Uyumu (%${calPercent})</span>
                        <span>${consumedCal >= targetCal ? 'Hedefe Ulaşıldı ✅' : `${targetCal - consumedCal} kcal kaldı`}</span>
                    </div>
                    <div class="progress-track"><div class="progress-fill cal-fill" style="width: ${calPercent}%;"></div></div>
                </div>

                <div class="arc-actions-grid">
                    <button class="btn btn-xs btn-outline" onclick="selectCoachDetailAthlete('${ath.username}')">
                        <i class="fa-solid fa-chart-pie"></i> İncele
                    </button>
                    <button class="btn btn-xs btn-primary" onclick="loadAthleteForPrescription('${ath.username}')">
                        <i class="fa-solid fa-file-pen"></i> Revize Et
                    </button>
                    <button class="btn btn-xs btn-outline" onclick="selectCoachChatAthlete('${ath.username}')">
                        <i class="fa-solid fa-comments"></i> Chat ${unreadCount > 0 ? `(${unreadCount})` : ''}
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function selectCoachDetailAthlete(username) {
    currentCoachSelectedAthlete = username;
    navigateCoachTab("detail");
}

function switchCoachDetailTab(subtab, btn) {
    currentCoachDetailSubtab = subtab;
    document.querySelectorAll(".deep-tab").forEach(t => t.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderCoachDetail(currentCoachSelectedAthlete);
}

function goToPrescriptionForCurrentAthlete() {
    loadAthleteForPrescription(currentCoachSelectedAthlete);
}

function goToChatForCurrentAthlete() {
    selectCoachChatAthlete(currentCoachSelectedAthlete);
}

function renderCoachDetail(username) {
    const registry = getUsersRegistry();
    const ath = registry[username];
    if (!ath) return;

    // Update Dropdown
    const selectEl = document.getElementById("coach-detail-athlete-select");
    if (selectEl) {
        const athletes = Object.values(registry).filter(u => u.role !== "coach");
        selectEl.innerHTML = athletes.map(a => `<option value="${a.username}" ${a.username === username ? 'selected' : ''}>${a.displayName || a.username} (@${a.username})</option>`).join('');
    }

    const uData = ath.data || {};
    const p = uData.userProfile || {};
    const t = uData.targets || DEFAULT_TARGETS;
    const n = uData.todayNutrition || {};

    const history = uData.weightHistory || [];
    const currentW = history.length > 0 ? history[0].weight : (p.weight || 74.0);

    const goalMap = { bulk: "🔥 Lean Bulk", cut: "✂️ Cutting", recomp: "⚡ Recomp" };

    const avatarEl = document.getElementById("adh-avatar");
    const nameEl = document.getElementById("adh-name");
    const unameEl = document.getElementById("adh-uname");
    const goalEl = document.getElementById("adh-goal");
    const weightEl = document.getElementById("adh-weight");
    const calEl = document.getElementById("adh-calorie-status");
    const stepsEl = document.getElementById("adh-steps");

    if (avatarEl) avatarEl.innerText = (ath.displayName || ath.username).charAt(0).toUpperCase();
    if (nameEl) nameEl.innerText = ath.displayName || ath.username;
    if (unameEl) unameEl.innerText = `@${ath.username}`;
    if (goalEl) goalEl.innerText = goalMap[p.goal] || "🔥 Lean Bulk";
    if (weightEl) weightEl.innerText = `${currentW.toFixed(1)} kg`;
    if (calEl) calEl.innerText = `${n.consumedCal || 0} / ${t.calories || 2770}`;
    if (stepsEl) stepsEl.innerText = `${(n.steps || 0).toLocaleString('tr-TR')} / ${(t.steps || 7500).toLocaleString('tr-TR')}`;

    const contentArea = document.getElementById("coach-deep-dive-content");
    if (!contentArea) return;

    if (currentCoachDetailSubtab === "nutrition") {
        const meals = (n.meals && n.meals.length > 0) ? n.meals : [];
        let mealsHtml = "";
        if (meals.length === 0) {
            mealsHtml = `<p class="text-secondary" style="font-size:0.75rem; text-align:center; padding:16px;">Bugün henüz kayıtlı öğün yok.</p>`;
        } else {
            meals.forEach(m => {
                mealsHtml += `
                    <div class="deep-meal-item">
                        <div class="deep-meal-title">
                            <span>${m.name}</span>
                            <span class="badge-role" style="font-size:0.65rem;">${m.cal} kcal</span>
                        </div>
                        <div style="font-size:0.68rem; color:var(--text-secondary); margin-top:3px; display:flex; gap:10px;">
                            <span>🍗 <strong>${m.p}g</strong> Prot</span>
                            <span>🍚 <strong>${m.c}g</strong> Karb</span>
                            <span>🥑 <strong>${m.f}g</strong> Yağ</span>
                            ${m.time ? `<span>⏰ ${m.time}</span>` : ''}
                        </div>
                    </div>
                `;
            });
        }

        contentArea.innerHTML = `
            <div class="deep-card">
                <div class="card-header" style="margin-bottom:8px;">
                    <h2>🍽️ BUGÜNKÜ ÇİĞ ÖĞÜN VE MAKRO DAĞILIMI</h2>
                </div>
                <div class="profile-macro-banner" style="margin-bottom:12px;">
                    <div class="prof-macro-col p-col"><span>Protein</span><strong>${n.consumedP || 0} / ${t.protein}g</strong></div>
                    <div class="prof-macro-col c-col"><span>Karbonhidrat</span><strong>${n.consumedC || 0} / ${t.carbs}g</strong></div>
                    <div class="prof-macro-col f-col"><span>Yağ</span><strong>${n.consumedF || 0} / ${t.fat}g</strong></div>
                    <div class="prof-macro-col cal-col"><span>Kalori</span><strong>${n.consumedCal || 0} / ${t.calories}</strong></div>
                </div>
                <div>${mealsHtml}</div>
            </div>
        `;
    } else if (currentCoachDetailSubtab === "workout") {
        const logs = uData.workoutLogs || {};
        const logKeys = Object.keys(logs);

        let logsHtml = "";
        if (logKeys.length === 0) {
            logsHtml = `<p class="text-secondary" style="font-size:0.75rem; text-align:center; padding:16px;">Henüz kaydedilmiş antrenman seti bulunmuyor.</p>`;
        } else {
            logKeys.forEach(k => {
                const sets = logs[k] || [];
                logsHtml += `
                    <div class="deep-meal-item">
                        <strong style="color:#ffd60a; font-size:0.78rem; display:block; margin-bottom:4px;">Egzersiz Kodu: ${k}</strong>
                        <table style="width:100%; font-size:0.72rem; color:#fff;">
                            <thead>
                                <tr style="color:var(--text-muted); text-align:left;">
                                    <th>Set</th>
                                    <th>Ağırlık</th>
                                    <th>Tekrar</th>
                                    <th>Zorluk / RIR</th>
                                    <th>Tarih</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${sets.map((s, idx) => `
                                    <tr>
                                        <td>S${idx + 1}</td>
                                        <td><strong>${s.weight} kg</strong></td>
                                        <td><strong>${s.reps} rep</strong></td>
                                        <td><span class="badge-role" style="font-size:0.62rem;">${s.rir || 'Belirtilmedi'}</span></td>
                                        <td style="color:var(--text-muted);">${s.date || 'Bugün'}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            });
        }

        contentArea.innerHTML = `
            <div class="deep-card">
                <div class="card-header" style="margin-bottom:8px;">
                    <h2>🏋️ ANTRENMAN DEFTERİ & SET PERFORMANSI</h2>
                </div>
                <div>${logsHtml}</div>
            </div>
        `;
    } else if (currentCoachDetailSubtab === "supplements") {
        const suppLog = uData.supplementsLog || {};
        const suppList = uData.supplements || [];

        contentArea.innerHTML = `
            <div class="deep-card">
                <div class="card-header" style="margin-bottom:8px;">
                    <h2>💊 SUPLEMENT KULLANIM PLANI</h2>
                </div>
                ${suppList.map(s => {
                    const isTaken = suppLog[s.id];
                    return `
                        <div class="deep-meal-item" style="display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <strong style="color:#fff; font-size:0.8rem;">${s.name}</strong>
                                <div style="font-size:0.68rem; color:var(--text-secondary);">${s.timing} • ${s.dosage}</div>
                            </div>
                            <span class="badge-role" style="${isTaken ? 'background:rgba(48,209,88,0.2); color:#30d158;' : 'background:rgba(255,255,255,0.08); color:var(--text-muted);'}">
                                ${isTaken ? 'Alındı ✅' : 'Bekliyor ⏳'}
                            </span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    } else if (currentCoachDetailSubtab === "scale") {
        const weights = uData.weightHistory || [];

        contentArea.innerHTML = `
            <div class="deep-card">
                <div class="card-header" style="margin-bottom:8px;">
                    <h2>⚖️ TARTI VE KİLO GEÇMİŞİ</h2>
                </div>
                <table style="width:100%; font-size:0.75rem; color:#fff;">
                    <thead>
                        <tr style="color:var(--text-muted); text-align:left; border-bottom:1px solid var(--border-subtle);">
                            <th style="padding:6px 0;">Tarih</th>
                            <th>Kilo (kg)</th>
                            <th>Haftalık Değişim</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${weights.map((w, idx) => {
                            const prev = weights[idx + 1];
                            const diff = prev ? (w.weight - prev.weight).toFixed(1) : "-";
                            const diffColor = diff > 0 ? "var(--status-green)" : diff < 0 ? "var(--status-amber)" : "var(--text-muted)";
                            return `
                                <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                                    <td style="padding:6px 0; color:var(--text-secondary);">${w.date}</td>
                                    <td><strong>${w.weight.toFixed(1)} kg</strong></td>
                                    <td style="color:${diffColor}; font-weight:700;">${diff !== '-' ? (diff > 0 ? `+${diff}` : diff) + ' kg' : '-'}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}

function loadAthleteForPrescription(username) {
    currentCoachSelectedAthlete = username;
    navigateCoachTab("prescriptions");
}

function renderCoachPrescriptions(username) {
    const registry = getUsersRegistry();
    const selectEl = document.getElementById("rx-athlete-select");
    if (selectEl) {
        const athletes = Object.values(registry).filter(u => u.role !== "coach");
        selectEl.innerHTML = athletes.map(a => `<option value="${a.username}" ${a.username === username ? 'selected' : ''}>${a.displayName || a.username} (@${a.username})</option>`).join('');
    }

    const ath = registry[username];
    if (!ath) return;

    const uData = ath.data || {};
    const t = uData.targets || DEFAULT_TARGETS;

    const calEl = document.getElementById("rx-calories");
    const pEl = document.getElementById("rx-protein");
    const cEl = document.getElementById("rx-carbs");
    const fEl = document.getElementById("rx-fat");
    const waterEl = document.getElementById("rx-water");
    const stepsEl = document.getElementById("rx-steps");
    const gainMinEl = document.getElementById("rx-gain-min");
    const gainMaxEl = document.getElementById("rx-gain-max");

    if (calEl) calEl.value = t.calories;
    if (pEl) pEl.value = t.protein;
    if (cEl) cEl.value = t.carbs;
    if (fEl) fEl.value = t.fat;
    if (waterEl) waterEl.value = t.water || 3.5;
    if (stepsEl) stepsEl.value = t.steps || 7500;
    if (gainMinEl) gainMinEl.value = t.weeklyGainMin || 0.15;
    if (gainMaxEl) gainMaxEl.value = t.weeklyGainMax || 0.35;

    // Render Past Revisions
    const revDb = getRevisionsDB();
    const athRev = revDb[username];
    const historyContainer = document.getElementById("rx-history-container");
    if (historyContainer) {
        if (!athRev) {
            historyContainer.innerHTML = `<p class="text-secondary" style="font-size:0.75rem; text-align:center; padding:12px;">Bu sporcuya ait henüz geçmiş bir revizyon bulunmuyor.</p>`;
        } else {
            historyContainer.innerHTML = `
                <div class="deep-meal-item" style="border-left:3px solid var(--coach-gold);">
                    <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                        <strong style="color:#ffd60a; font-size:0.78rem;">Tarih: ${athRev.date}</strong>
                        <span class="badge-role" style="${athRev.applied ? 'background:rgba(48,209,88,0.2); color:#30d158;' : 'background:rgba(255,214,10,0.2); color:#ffd60a;'}">
                            ${athRev.applied ? 'Sporcu Uyguladı ✅' : 'Beklemede ⏳'}
                        </span>
                    </div>
                    <p style="font-size:0.75rem; color:#ffffff; margin-bottom:6px;">"${athRev.coachNote}"</p>
                    <div style="font-size:0.68rem; color:var(--text-secondary); display:flex; gap:8px;">
                        <span>🎯 <strong>${athRev.calories} kcal</strong></span>
                        <span>🍗 <strong>${athRev.protein}P</strong></span>
                        <span>🍚 <strong>${athRev.carbs}C</strong></span>
                        <span>🥑 <strong>${athRev.fat}F</strong></span>
                    </div>
                </div>
            `;
        }
    }
}

function submitCoachPrescription() {
    const selectEl = document.getElementById("rx-athlete-select");
    const username = selectEl ? selectEl.value : currentCoachSelectedAthlete;
    if (!username) return;

    const calories = parseInt(document.getElementById("rx-calories").value) || 2770;
    const protein = parseInt(document.getElementById("rx-protein").value) || 167;
    const carbs = parseInt(document.getElementById("rx-carbs").value) || 344;
    const fat = parseInt(document.getElementById("rx-fat").value) || 77;
    const water = parseFloat(document.getElementById("rx-water").value) || 3.5;
    const steps = parseInt(document.getElementById("rx-steps").value) || 7500;
    const gainMin = parseFloat(document.getElementById("rx-gain-min").value) || 0.15;
    const gainMax = parseFloat(document.getElementById("rx-gain-max").value) || 0.35;
    const coachNote = document.getElementById("rx-coach-note").value.trim() || "Kalori ve makro hedeflerin güncellendi.";

    const revDb = getRevisionsDB();
    revDb[username] = {
        calories, protein, carbs, fat, water, steps, gainMin, gainMax,
        coachNote,
        date: new Date().toISOString().split('T')[0],
        applied: false
    };
    saveRevisionsDB(revDb);

    // Also update athlete target immediately
    const registry = getUsersRegistry();
    if (registry[username] && registry[username].data) {
        registry[username].data.targets = {
            calories, protein, carbs, fat, water, steps,
            weeklyGainMin: gainMin,
            weeklyGainMax: gainMax
        };
        saveUsersRegistry(registry);
    }

    // Send automated chat note
    const chatDb = getChatDB();
    if (!chatDb[username]) chatDb[username] = [];
    chatDb[username].push({
        sender: "coach",
        text: `📋 [YENİ HEDEF & REVİZYON]: Günlük ${calories} kcal (${protein}P / ${carbs}C / ${fat}F). Not: "${coachNote}"`,
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toISOString().split('T')[0],
        read: false
    });
    saveChatDB(chatDb);

    showToast("Revizyon başarıyla sporcuya iletildi! 🚀");
    renderCoachPrescriptions(username);
}

function selectCoachChatAthlete(username) {
    currentCoachSelectedAthlete = username;
    navigateCoachTab("chat");
}

function renderCoachChat(username) {
    const registry = getUsersRegistry();
    const chatDb = getChatDB();
    const ath = registry[username];
    if (!ath) return;

    // Dropdown
    const selectEl = document.getElementById("coach-chat-athlete-select");
    if (selectEl) {
        const athletes = Object.values(registry).filter(u => u.role !== "coach");
        selectEl.innerHTML = athletes.map(a => `<option value="${a.username}" ${a.username === username ? 'selected' : ''}>${a.displayName || a.username}</option>`).join('');
    }

    const avatarEl = document.getElementById("coach-chat-active-avatar");
    const nameEl = document.getElementById("coach-chat-active-name");
    if (avatarEl) avatarEl.innerText = (ath.displayName || ath.username).charAt(0).toUpperCase();
    if (nameEl) nameEl.innerText = ath.displayName || ath.username;

    // Messages
    const msgsArea = document.getElementById("coach-chat-messages-area");
    if (!msgsArea) return;

    const msgs = chatDb[username] || [];

    // Mark as read
    msgs.forEach(m => {
        if (m.sender === "athlete") m.read = true;
    });
    chatDb[username] = msgs;
    saveChatDB(chatDb);

    if (msgs.length === 0) {
        msgsArea.innerHTML = `
            <div style="text-align:center; padding:30px 10px; color:var(--text-secondary); font-size:0.78rem;">
                <i class="fa-solid fa-comments" style="font-size:2rem; margin-bottom:8px; opacity:0.4;"></i>
                <p>Henüz mesajlaşma geçmişi yok. İlk direktifi aşağıdan yazabilirsin.</p>
            </div>
        `;
        return;
    }

    let html = "";
    msgs.forEach(m => {
        const isCoach = m.sender === "coach";
        html += `
            <div class="chat-msg-row ${isCoach ? 'sent' : 'received'}">
                <div class="chat-bubble ${isCoach ? 'coach' : 'athlete'}">
                    <span class="chat-sender-tag">${isCoach ? '👑 Koç Ömer' : `@${username}`}</span>
                    <div class="chat-text">${m.text}</div>
                </div>
                <span class="chat-time">${m.time || ''}</span>
            </div>
        `;
    });

    msgsArea.innerHTML = html;
    msgsArea.scrollTop = msgsArea.scrollHeight;
}

function handleCoachSendMessage(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("coach-chat-input");
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    const username = currentCoachSelectedAthlete;

    const chatDb = getChatDB();
    if (!chatDb[username]) chatDb[username] = [];

    chatDb[username].push({
        sender: "coach",
        text: text,
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toISOString().split('T')[0],
        read: false
    });

    saveChatDB(chatDb);
    input.value = "";
    renderCoachChat(username);
}

function insertCoachQuickReply(text) {
    const input = document.getElementById("coach-chat-input");
    if (input) {
        input.value = text;
        input.focus();
    }
}

function renderCoachSettings() {
    const pinInput = document.getElementById("coach-settings-master-pin");
    if (pinInput) pinInput.value = "";
}

function handleCoachConnectAthleteById(event) {
    if (event) event.preventDefault();
    const inputEl = document.getElementById("connect-ath-id");
    const errBanner = document.getElementById("connect-ath-error");
    if (!inputEl) return;

    let query = inputEl.value.trim();
    if (!query) {
        if (errBanner) {
            errBanner.innerText = "Lütfen bir sporcu kimlik kodu (#ID) veya kullanıcı adı girin.";
            errBanner.style.display = "block";
        }
        return;
    }

    // Clean query
    if (query.startsWith("@")) query = query.substring(1).trim();
    const queryLower = query.toLowerCase();
    const queryAsTag = query.startsWith("#") ? query.toUpperCase() : `#${query.toUpperCase()}`;

    const registry = getUsersRegistry();
    const athletes = Object.values(registry).filter(u => u.role !== "coach");

    // Search by athleteTag or username
    const found = athletes.find(a => 
        (a.athleteTag && a.athleteTag.toUpperCase() === queryAsTag) ||
        (a.athleteTag && a.athleteTag.toLowerCase() === queryLower) ||
        (a.username && a.username.toLowerCase() === queryLower)
    );

    if (!found) {
        if (errBanner) {
            errBanner.innerText = `"${query}" kimliğine veya kullanıcı adına sahip kayıtlı bir sporcu bulunamadı. Sporcunun profilinde yer alan 4 haneli #ID kodunu doğru girdiğinizden emin olun.`;
            errBanner.style.display = "block";
        }
        return;
    }

    if (errBanner) errBanner.style.display = "none";
    inputEl.value = "";
    closeModal("modal-coach-new-athlete");

    currentCoachSelectedAthlete = found.username;
    renderCoachPortal();
    showToast(`Sporcu (${found.displayName || found.username} ${found.athleteTag || ''}) listenize bağlandı! 🎯🔥`);
}

function exportCoachAllDataJSON() {
    const backup = {
        usersRegistry: getUsersRegistry(),
        chatDb: getChatDB(),
        revisionsDb: getRevisionsDB(),
        masterPin: getCoachMasterPin(),
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Omar_Coaching_Tum_Veritabani_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Tüm antrenör ve sporcu veritabanı indirildi! 💾");
}

function importCoachAllDataJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.usersRegistry) saveUsersRegistry(data.usersRegistry);
            if (data.chatDb) saveChatDB(data.chatDb);
            if (data.revisionsDb) saveRevisionsDB(data.revisionsDb);
            if (data.masterPin) setCoachMasterPin(data.masterPin);
            showToast("Veritabanı başarıyla geri yüklendi! 🚀");
            renderCoachPortal();
        } catch (err) {
            showToast("Hata: Geçersiz JSON dosyası.");
        }
    };
    reader.readAsText(file);
}

// ==================== ATHLETE SIDE CHAT & REVISION HANDLERS ====================

function openAthleteChatModal() {
    const activeUsername = getActiveSessionUsername() || "omer";
    const chatDb = getChatDB();
    const msgs = chatDb[activeUsername] || [];

    // Mark coach messages as read
    msgs.forEach(m => {
        if (m.sender === "coach") m.read = true;
    });
    chatDb[activeUsername] = msgs;
    saveChatDB(chatDb);

    const unreadBadge = document.getElementById("athlete-unread-badge");
    if (unreadBadge) unreadBadge.style.display = "none";

    renderAthleteChatMessages(activeUsername);
    openModal("modal-athlete-chat");
}

function renderAthleteChatMessages(username) {
    const msgsArea = document.getElementById("athlete-chat-messages-area");
    if (!msgsArea) return;

    const chatDb = getChatDB();
    const msgs = chatDb[username] || [];

    if (msgs.length === 0) {
        msgsArea.innerHTML = `
            <div style="text-align:center; padding:30px 10px; color:var(--text-secondary); font-size:0.78rem;">
                <i class="fa-solid fa-crown" style="font-size:2rem; margin-bottom:8px; color:var(--coach-gold);"></i>
                <p>Koçun Ömer ile birebir iletişim hattı. Aklına takılanları ve form videolarını buradan iletebilirsin.</p>
            </div>
        `;
        return;
    }

    let html = "";
    msgs.forEach(m => {
        const isMe = m.sender === "athlete";
        html += `
            <div class="chat-msg-row ${isMe ? 'sent' : 'received'}">
                <div class="chat-bubble ${isMe ? 'athlete' : 'coach'}">
                    <span class="chat-sender-tag">${isMe ? 'Sen' : '👑 Koç Ömer'}</span>
                    <div class="chat-text">${m.text}</div>
                </div>
                <span class="chat-time">${m.time || ''}</span>
            </div>
        `;
    });

    msgsArea.innerHTML = html;
    msgsArea.scrollTop = msgsArea.scrollHeight;
}

function handleAthleteSendMessage(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("athlete-chat-input");
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    const activeUsername = getActiveSessionUsername() || "omer";

    const chatDb = getChatDB();
    if (!chatDb[activeUsername]) chatDb[activeUsername] = [];

    chatDb[activeUsername].push({
        sender: "athlete",
        text: text,
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toISOString().split('T')[0],
        read: false
    });

    saveChatDB(chatDb);
    input.value = "";
    renderAthleteChatMessages(activeUsername);
    showToast("Mesajın Koç Ömer'e iletildi! 💬");
}

function insertAthleteQuickMessage(text) {
    const input = document.getElementById("athlete-chat-input");
    if (input) {
        input.value = text;
        input.focus();
    }
}

function checkAthletePendingRevision() {
    const activeUsername = getActiveSessionUsername();
    if (!activeUsername) return;

    const revDb = getRevisionsDB();
    const rev = revDb[activeUsername];
    const banner = document.getElementById("athlete-revision-banner");

    if (rev && !rev.applied) {
        if (banner) {
            const dateEl = document.getElementById("athlete-rev-date");
            const noteEl = document.getElementById("athlete-rev-note");
            const gridEl = document.getElementById("athlete-rev-macro-grid");

            if (dateEl) dateEl.innerText = rev.date;
            if (noteEl) noteEl.innerText = `"${rev.coachNote}"`;
            if (gridEl) {
                gridEl.innerHTML = `
                    <div class="rev-macro-item"><span>Hedef</span><strong>${rev.calories} kcal</strong></div>
                    <div class="rev-macro-item"><span>Protein</span><strong>${rev.protein}g</strong></div>
                    <div class="rev-macro-item"><span>Karb</span><strong>${rev.carbs}g</strong></div>
                    <div class="rev-macro-item"><span>Yağ</span><strong>${rev.fat}g</strong></div>
                `;
            }
            banner.style.display = "block";
        }
    } else {
        if (banner) banner.style.display = "none";
    }
}

function acceptCoachRevision() {
    const activeUsername = getActiveSessionUsername();
    if (!activeUsername) return;

    const revDb = getRevisionsDB();
    const rev = revDb[activeUsername];
    if (!rev) return;

    appData.targets = {
        calories: rev.calories,
        protein: rev.protein,
        carbs: rev.carbs,
        fat: rev.fat,
        water: rev.water || 3.5,
        steps: rev.steps || 7500,
        weeklyGainMin: rev.gainMin || 0.15,
        weeklyGainMax: rev.gainMax || 0.35
    };

    rev.applied = true;
    revDb[activeUsername] = rev;
    saveRevisionsDB(revDb);
    saveDataToStorage();

    recalculateDailyTotals();
    renderDashboard();
    initSettingsForm();

    const banner = document.getElementById("athlete-revision-banner");
    if (banner) banner.style.display = "none";

    showToast("Koç revizyonu ve yeni hedefler başarıyla uygulandı! 🎯🔥");
}

function checkAthleteUnreadMessages() {
    const activeUsername = getActiveSessionUsername();
    if (!activeUsername) return;

    const chatDb = getChatDB();
    const msgs = chatDb[activeUsername] || [];
    const unread = msgs.filter(m => m.sender === "coach" && !m.read).length;

    const unreadBadge = document.getElementById("athlete-unread-badge");
    if (unreadBadge) {
        unreadBadge.innerText = unread;
        unreadBadge.style.display = unread > 0 ? "flex" : "none";
    }
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
    const idTagEl = document.getElementById("profile-athlete-id-tag");
    const goalEl = document.getElementById("profile-goal-tag");
    const dateEl = document.getElementById("profile-created-date");
    const avatarEl = document.getElementById("profile-avatar-large");

    const displayName = user.displayName || user.username;
    if (nameEl) nameEl.innerText = displayName;
    if (unameEl) unameEl.innerText = `@${user.username}`;
    if (idTagEl) idTagEl.innerText = user.athleteTag || (user.role === 'coach' ? '👑 KOÇ' : '#4829');
    if (dateEl) dateEl.innerText = `Kayıt: ${user.createdAt || '2026-09-16'}`;

    if (avatarEl) {
        const initial = displayName.charAt(0).toUpperCase();
        avatarEl.innerHTML = `<span>${initial}</span>`;
    }

    const goalMap = { bulk: "🔥 Lean Bulk", cut: "✂️ Cutting", recomp: "⚡ Recomp" };
    const p = appData.userProfile || { age: 24, height: 178, weight: 74, gender: "male", frequency: 5, activity: "moderate", goal: "bulk" };
    const goalName = user.role === "coach" ? "👑 Baş Antrenör" : (goalMap[p.goal] || "🔥 Lean Bulk");
    if (goalEl) goalEl.innerText = goalName;

    // Physical Stats
    const history = appData.weightHistory || [];
    const currentWeight = history.length > 0 ? history[0].weight : (p.weight || 74.0);
    const height = p.height || 178;
    const age = p.age || 24;
    const genderStr = p.gender === "female" ? "Kadın" : "Erkek";

    let bmr = (10 * currentWeight) + (6.25 * height) - (5 * age);
    if (p.gender === "female") bmr -= 161;
    else bmr += 5;
    bmr = Math.round(bmr);

    let mult = 1.45;
    if (p.activity === "sedentary") mult = 1.30;
    else if (p.activity === "moderate") mult = 1.45;
    else if (p.activity === "active") mult = 1.60;
    const tdee = Math.round(bmr * mult);

    const statWeightEl = document.getElementById("prof-stat-weight");
    const statHeightEl = document.getElementById("prof-stat-height");
    const statAgeEl = document.getElementById("prof-stat-age");
    const statBmrTdeeEl = document.getElementById("prof-stat-bmr-tdee");

    if (statWeightEl) statWeightEl.innerText = `${currentWeight.toFixed(1)} kg`;
    if (statHeightEl) statHeightEl.innerText = `${height} cm`;
    if (statAgeEl) statAgeEl.innerText = `${age} Yaş • ${genderStr}`;
    if (statBmrTdeeEl) statBmrTdeeEl.innerText = `${bmr.toLocaleString('tr-TR')} / ${tdee.toLocaleString('tr-TR')} kcal`;

    // Target Macros
    const t = appData.targets;
    const macroPEl = document.getElementById("prof-macro-p");
    const macroCEl = document.getElementById("prof-macro-c");
    const macroFEl = document.getElementById("prof-macro-f");
    const macroCalEl = document.getElementById("prof-macro-cal");

    if (macroPEl) macroPEl.innerText = `${t.protein}g`;
    if (macroCEl) macroCEl.innerText = `${t.carbs}g`;
    if (macroFEl) macroFEl.innerText = `${t.fat}g`;
    if (macroCalEl) macroCalEl.innerText = `${t.calories.toLocaleString('tr-TR')} kcal`;

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
    if (user.passwordHash !== oldHash && user.passwordHash !== oldP) {
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

    const dashAvatar = document.getElementById("dash-user-avatar");
    const dashName = document.getElementById("dash-user-name");
    const dashUname = document.getElementById("dash-user-uname");
    const dashGoal = document.getElementById("dash-user-goal");
    const dashIdBadge = document.getElementById("dash-user-id-badge");

    const history = appData.weightHistory || [];
    const currentW = history.length > 0 ? history[0].weight : (appData.userProfile ? appData.userProfile.weight : 74.0);
    const goalMap = { bulk: "🔥 Lean Bulk", cut: "✂️ Cutting", recomp: "⚡ Recomp" };
    const goalName = (appData.userProfile && goalMap[appData.userProfile.goal]) || "🔥 Lean Bulk";

    if (user) {
        const displayName = user.displayName || user.username;
        const initial = displayName.charAt(0).toUpperCase();

        if (nameEl) nameEl.innerHTML = `${displayName} <span style="font-size:0.75rem; color:var(--status-blue); font-weight:700;">(@${user.username})</span>`;
        if (avatarEl) avatarEl.innerHTML = `<span>${initial}</span>`;

        if (dashAvatar) dashAvatar.innerText = initial;
        if (dashName) dashName.innerText = displayName;
        if (dashUname) dashUname.innerText = `@${user.username}`;
        if (dashGoal) dashGoal.innerText = goalName;
        if (dashIdBadge) dashIdBadge.innerText = user.athleteTag || (user.role === 'coach' ? '👑 KOÇ' : '#4829');
    } else {
        if (nameEl) nameEl.innerText = "OMAR COACHING";
        if (avatarEl) avatarEl.innerHTML = `<i class="fa-solid fa-user"></i>`;
        if (dashAvatar) dashAvatar.innerText = "O";
        if (dashName) dashName.innerText = "OMAR COACHING";
        if (dashUname) dashUname.innerText = "@misafir";
        if (dashGoal) dashGoal.innerText = goalName;
        if (dashIdBadge) dashIdBadge.innerText = "#----";
    }

    if (subStatusEl) {
        subStatusEl.innerText = `Bugün: ${currentW.toFixed(1)} kg • ${goalName}`;
    }
}

// ==================== 12. HİBRİT YAPAY ZEKA ASİSTANLARI MOTORU (ENES ABİ, VEDAT DÜBÜR, KÜRAY) ====================

let activeAssistantPersona = "enes";
let assistantChatHistory = {
    enes: [],
    vedat: [],
    kuray: []
};

const ASSISTANT_PERSONAS = {
    enes: {
        id: "enes",
        name: "Enes Abi",
        avatar: "🦍",
        role: "Salon Kıdemlisi & Biyomekanik Uzmanı",
        themeClass: "enes",
        accentColor: "#ff4500",
        tagline: "Makine doluysa ya da omzun batıyorsa söyle; 1'e 1 anatomik alternatifini çakıp programa işleyelim.",
        welcomeMsg: "Selamünaleyküm aslanım! Salonda makineye mi çöktüler, yoksa dips/bench yaparken omzun mu batıyor? Söyle bakalım derdin ne, 1'e 1 aynı lif açısını yakalayacak alternatifi bulup tek tıkla programına işleyelim. Bahane yok!",
        quickTopics: [
            { id: "crowded", label: "⚡ Makine Dolu! Ne Yapayım?" },
            { id: "pain", label: "🩹 Dips / Bench'te Omuz Batması" },
            { id: "lat_swap", label: "🦅 Lat Pulldown Dolu, Sırt Değil Lat Ver" },
            { id: "overload", label: "🔥 Bugün Canavar Gibiyim, Kilo Tavsiyesi Ver" }
        ]
    },
    vedat: {
        id: "vedat",
        name: "Vedat Dübür",
        avatar: "🍳",
        role: "Makro Gurmesi & Sokak Şefi",
        themeClass: "vedat",
        accentColor: "#f59e0b",
        tagline: "Dolapta ne varsa söyle; 5 dakikada kuru tavuk-lapa illetinden kurtarıp kütle bombası tarif patlatayım.",
        welcomeMsg: "Ooo kütle sevdalısı kardeşim hoş geldin! Yine o kupkuru haşlama tavukla lapa pirince mi bakıp iç çekiyorsun? Ver bakayım dolapta ne var; sana 5 dakikada 50g proteinli bomba bir sokak şefi tarifi patlatayım!",
        quickTopics: [
            { id: "pantry", label: "🍗 Dolaptakilerle Tarif Yap" },
            { id: "macros", label: "📊 Kalan Makrolarımı Doldur" },
            { id: "rescue", label: "🤢 Kuru Tavuk-Pirinçten Kurtar Beni" },
            { id: "pancake", label: "🥞 40g Proteinli Bomba Pankek" }
        ]
    },
    kuray: {
        id: "kuray",
        name: "Küray",
        avatar: "💊",
        role: "Suplement Çakalı & Biyokimya",
        themeClass: "kuray",
        accentColor: "#8b5cf6",
        tagline: "Fuzuli tozlara para bayılma! Derdin neyse (uyku, gaz, pump, toparlanma) nokta atışı suplementi yazayım.",
        welcomeMsg: "Eyvallah usta! Piyasada kutusu bin lira olan çöp tozlara para kaptırma. Söyle derdin ne: Gece uyku mu tutmuyor, bulkta miden davul gibi mi şişiyor, yoksa antrenmanda damarların mı açılmıyor? Nokta atışı takviyeyi yazayım.",
        quickTopics: [
            { id: "sleep", label: "💤 Gece Uyuyamıyorum / Toparlanamıyorum" },
            { id: "bloat", label: "🤢 Bulkta Karnım Balon Gibi Şişiyor" },
            { id: "pump", label: "⚡ Damar Açıcı Pump & Güç Kombini" },
            { id: "stack", label: "🎯 Gerçekten Bana Hangi Suplementler Şart?" }
        ]
    }
};

function openAssistantModal(personaKey) {
    if (personaKey) {
        activeAssistantPersona = personaKey;
    }
    updateAssistantModalHeader();
    renderAssistantQuickTopics();
    
    // Initialize welcome message if history is empty
    if (!assistantChatHistory[activeAssistantPersona] || assistantChatHistory[activeAssistantPersona].length === 0) {
        const persona = ASSISTANT_PERSONAS[activeAssistantPersona];
        assistantChatHistory[activeAssistantPersona] = [
            { sender: "assistant", text: persona.welcomeMsg, time: getCurrentTimeStr() }
        ];
    }
    
    renderAssistantMessages();
    openModal('modal-ai-assistant');

    // Focus input
    setTimeout(() => {
        const input = document.getElementById("ai-user-input");
        if (input) input.focus();
    }, 300);
}

function updateAssistantModalHeader() {
    const persona = ASSISTANT_PERSONAS[activeAssistantPersona] || ASSISTANT_PERSONAS.enes;
    const avatarEl = document.getElementById("ai-active-avatar");
    const nameEl = document.getElementById("ai-active-name");
    const roleEl = document.getElementById("ai-active-role");
    const hintEl = document.getElementById("ai-footer-hint");
    const modeBadge = document.getElementById("ai-active-mode-badge");
    const modeText = document.getElementById("ai-mode-text");
    const modeDot = document.getElementById("ai-mode-dot");
    const apiBtnLabel = document.getElementById("ai-api-status-label");
    const toggleBtn = document.getElementById("ai-api-drawer-toggle-btn");
    const keyInput = document.getElementById("modal-gemini-key-input");

    if (avatarEl) avatarEl.innerText = persona.avatar;
    if (nameEl) nameEl.innerText = persona.name;
    if (roleEl) roleEl.innerText = persona.role;
    if (hintEl) hintEl.innerText = persona.tagline;

    const savedKey = localStorage.getItem("OMAR_GEMINI_API_KEY");
    const isOnline = !!(savedKey && savedKey.trim().length > 10);

    if (modeBadge) {
        modeBadge.innerHTML = isOnline 
            ? `<i class="fa-solid fa-wifi" style="color:var(--status-green);"></i> Canlı Gemini AI`
            : `<i class="fa-solid fa-bolt" style="color:var(--status-amber);"></i> Çevrimdışı Motor`;
    }

    if (modeText) {
        modeText.innerHTML = isOnline 
            ? `<strong style="color:var(--status-green);">🟢 Canlı Gemini 2.5 Flash Aktif</strong>` 
            : `<strong style="color:var(--status-amber);">⚡ Çevrimdışı Mod</strong> <span style="font-size:0.65rem; color:var(--text-muted);">(Canlı AI için tıkla)</span>`;
    }

    if (toggleBtn) {
        toggleBtn.innerHTML = isOnline
            ? `<i class="fa-solid fa-gear"></i> API Ayarı <i class="fa-solid fa-chevron-down" style="font-size:0.6rem;"></i>`
            : `<i class="fa-solid fa-wifi"></i> Canlı Online AI Aç 🔽`;
    }

    if (modeDot) {
        if (isOnline) modeDot.classList.add("online");
        else modeDot.classList.remove("online");
    }

    if (apiBtnLabel) {
        apiBtnLabel.innerText = isOnline ? "Gemini 2.5" : "Online API";
    }

    if (keyInput && savedKey) {
        keyInput.value = savedKey;
    }

    // Also sync setting modal input if present
    const settingsKeyInput = document.getElementById("setting-gemini-key");
    if (settingsKeyInput && savedKey) {
        settingsKeyInput.value = savedKey;
    }

    // Update active tab in switcher
    document.querySelectorAll(".persona-tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    const activeTab = document.getElementById(`tab-persona-${activeAssistantPersona}`);
    if (activeTab) activeTab.classList.add("active");
}

function toggleApiSetupDrawer() {
    const drawer = document.getElementById("ai-api-drawer");
    if (!drawer) return;
    const isHidden = drawer.style.display === "none" || !drawer.style.display;
    drawer.style.display = isHidden ? "block" : "none";
    if (isHidden) {
        const input = document.getElementById("modal-gemini-key-input");
        if (input) {
            input.value = localStorage.getItem("OMAR_GEMINI_API_KEY") || "";
            input.focus();
        }
    }
}

async function pasteModalGeminiKey() {
    try {
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            if (text && text.trim().length > 5) {
                const input = document.getElementById("modal-gemini-key-input");
                if (input) input.value = text.trim();
                showToast("📋 API Anahtarı panodan yapıştırıldı!");
                return;
            }
        }
    } catch (e) {
        console.log("Clipboard read error:", e);
    }
    const manualKey = prompt("Lütfen Google AI Studio'dan aldığınız API Anahtarını (AIzaSy...) buraya yapıştırın:");
    if (manualKey && manualKey.trim()) {
        const input = document.getElementById("modal-gemini-key-input");
        if (input) input.value = manualKey.trim();
        showToast("📋 Anahtar yapıştırıldı!");
    }
}

async function saveModalGeminiKey() {
    const input = document.getElementById("modal-gemini-key-input");
    if (!input) return;
    const key = input.value.trim();

    if (!key || key.length < 10) {
        alert("Lütfen geçerli bir Google Gemini API Anahtarı girin (AIzaSy...).");
        return;
    }

    showToast("🔄 Gemini API Anahtarı test ediliyor...");

    try {
        const testRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: "test ping" }] }]
            })
        });

        if (!testRes.ok) {
            const errBody = await testRes.text();
            console.error("Gemini Key Validation Failed:", testRes.status, errBody);
            alert(`⚠️ Google Gemini API Anahtarı Doğrulanamadı (HTTP ${testRes.status})\n\nLütfen anahtarın başında veya sonunda boşluk olmadığından ve Google AI Studio'dan doğru kopyalandığından emin olun.`);
            return;
        }
    } catch (e) {
        console.warn("Connection test error:", e);
    }

    localStorage.setItem("OMAR_GEMINI_API_KEY", key);
    const settingInput = document.getElementById("setting-gemini-key");
    if (settingInput) settingInput.value = key;

    updateAssistantModalHeader();
    toggleApiSetupDrawer();
    showToast("🎉 Canlı Gemini AI Modu Doğrulandı & Aktif Edildi!");

    // Send a live test greeting from active persona
    if (!assistantChatHistory[activeAssistantPersona]) assistantChatHistory[activeAssistantPersona] = [];
    assistantChatHistory[activeAssistantPersona].push({
        sender: "assistant",
        text: `🚀 <strong>Online Gemini Bağlandı!</strong><br>Canlı yapay zeka devrede aslanım. Aklına ne gelirse sor, tüm biyomekanik ve fizyoloji bilgimle buradayım!`,
        time: getCurrentTimeStr()
    });
    renderAssistantMessages();
}

function removeModalGeminiKey() {
    localStorage.removeItem("OMAR_GEMINI_API_KEY");
    const input = document.getElementById("modal-gemini-key-input");
    if (input) input.value = "";
    const settingInput = document.getElementById("setting-gemini-key");
    if (settingInput) settingInput.value = "";

    updateAssistantModalHeader();
    toggleApiSetupDrawer();
    showToast("ℹ️ API Anahtarı kaldırıldı. Çevrimdışı Biyomekanik Motoruna dönüldü.");
}

function switchActiveAssistant(personaKey) {
    activeAssistantPersona = personaKey;
    const switcher = document.getElementById("ai-persona-switcher");
    if (switcher) switcher.style.display = "none";
    updateAssistantModalHeader();
    renderAssistantQuickTopics();

    if (!assistantChatHistory[activeAssistantPersona] || assistantChatHistory[activeAssistantPersona].length === 0) {
        const persona = ASSISTANT_PERSONAS[activeAssistantPersona];
        assistantChatHistory[activeAssistantPersona] = [
            { sender: "assistant", text: persona.welcomeMsg, time: getCurrentTimeStr() }
        ];
    }

    renderAssistantMessages();
}

function togglePersonaSwitcher() {
    const switcher = document.getElementById("ai-persona-switcher");
    if (switcher) {
        switcher.style.display = switcher.style.display === "none" ? "flex" : "none";
    }
}

function renderAssistantQuickTopics() {
    const container = document.getElementById("ai-quick-topics-bar");
    const persona = ASSISTANT_PERSONAS[activeAssistantPersona];
    if (!container || !persona) return;

    container.innerHTML = persona.quickTopics.map(t => `
        <button type="button" class="quick-trigger-chip" onclick="triggerAssistantPrompt('${persona.id}', '${t.id}')">
            ${t.label}
        </button>
    `).join("");
}

function triggerAssistantPrompt(personaKey, promptType) {
    if (personaKey !== activeAssistantPersona) {
        activeAssistantPersona = personaKey;
    }
    openAssistantModal(personaKey);

    let promptText = "";
    if (personaKey === "enes") {
        if (promptType === "crowded") promptText = "Reis salonda makine dolu, mevcut antrenmanıma uygun 1'e 1 alternatif ne yapayım?";
        else if (promptType === "pain") promptText = "Dips veya Bench yaparken omzum batıyor, omzu riske atmadan alt/üst göğüs için ne yapayım?";
        else if (promptType === "lat_swap") promptText = "Lat Pulldown dolu, sakın bana sırt row verme, dikey kanat açısını koruyacak alternatif ver!";
        else if (promptType === "overload") promptText = "Bugün kendimi canavar gibi hissediyorum, top setlerde kiloyu artırayım mı?";
        else promptText = "Enes Abi antrenmanımla ilgili bir konuda danışacaktım.";
    } else if (personaKey === "vedat") {
        if (promptType === "pantry") promptText = "Dolapta tavuk, pirinç, yumurta ve yoğurt var. 5 dakikada yüksek proteinli pratik bir tarif patlat!";
        else if (promptType === "macros") promptText = "Günün bitmesine makro açığım kaldı, kalan protein ve karbonhidratı nasıl tamamlayayım?";
        else if (promptType === "rescue") promptText = "Kuru haşlama tavuk ve tatsız lapa pirinç yemekten baydım, beni kurtaracak bir lezzet ver!";
        else if (promptType === "pancake") promptText = "Bana 40g proteinli çılgın bir anabolik pankek tarifi ver!";
        else promptText = "Vedat usta yemek konusunda fikrine ihtiyacım var.";
    } else if (personaKey === "kuray") {
        if (promptType === "sleep") promptText = "Gece uyku tutmuyor ve toparlanamıyorum, hangi suplementleri almalıyım?";
        else if (promptType === "bloat") promptText = "Bulk döneminde yüksek kalori yiyince karnım balon gibi şişiyor, sindirim için ne önerirsin?";
        else if (promptType === "pump") promptText = "Antrenmanda damarların hortum gibi açılması ve canavar gibi pump için ne kombinleyeyim?";
        else if (promptType === "stack") promptText = "Piyasadaki çöp tozları geç, bana gerçekten kütle için şart olan temel suplementleri say!";
        else promptText = "Küray takviyeler hakkında nokta atışı tavsiye ver.";
    }

    const input = document.getElementById("ai-user-input");
    if (input) input.value = promptText;
    sendAssistantMessage();
}

function renderAssistantMessages() {
    const container = document.getElementById("ai-chat-messages");
    if (!container) return;

    const history = assistantChatHistory[activeAssistantPersona] || [];
    const persona = ASSISTANT_PERSONAS[activeAssistantPersona];

    container.innerHTML = history.map(msg => {
        const isUser = msg.sender === "user";
        return `
            <div class="ai-msg-row ${isUser ? 'user' : 'assistant'}">
                <div class="ai-msg-avatar">
                    ${isUser ? '👤' : persona.avatar}
                </div>
                <div class="ai-msg-bubble">
                    <div style="font-size:0.82rem; line-height:1.45;">${msg.text}</div>
                    ${msg.actionHtml ? `<div class="ai-action-box">${msg.actionHtml}</div>` : ''}
                    <div style="font-size:0.6rem; color:${isUser ? '#666666' : 'var(--text-muted)'}; text-align:right; margin-top:4px;">${msg.time || ''}</div>
                </div>
            </div>
        `;
    }).join("");

    container.scrollTop = container.scrollHeight;
}

async function sendAssistantMessage() {
    const input = document.getElementById("ai-user-input");
    if (!input) return;

    const userText = input.value.trim();
    if (!userText) return;

    input.value = "";
    const timeStr = getCurrentTimeStr();

    // 1. Add user message to history
    if (!assistantChatHistory[activeAssistantPersona]) {
        assistantChatHistory[activeAssistantPersona] = [];
    }
    assistantChatHistory[activeAssistantPersona].push({
        sender: "user",
        text: userText,
        time: timeStr
    });

    renderAssistantMessages();

    // 2. Show animated 3-dot typing indicator
    const persona = ASSISTANT_PERSONAS[activeAssistantPersona];
    const typingId = `typing_${Date.now()}`;
    const container = document.getElementById("ai-chat-messages");
    if (container) {
        const typingEl = document.createElement("div");
        typingEl.id = typingId;
        typingEl.className = "ai-msg-row assistant";
        typingEl.innerHTML = `
            <div class="ai-msg-avatar">${persona.avatar}</div>
            <div class="ai-msg-bubble" style="display:flex; align-items:center; gap:8px; color:var(--text-muted);">
                <span>${persona.name} yazıyor</span>
                <span class="ai-typing-dots">
                    <span class="ai-typing-dot"></span>
                    <span class="ai-typing-dot"></span>
                    <span class="ai-typing-dot"></span>
                </span>
            </div>
        `;
        container.appendChild(typingEl);
        container.scrollTop = container.scrollHeight;
    }

    const startTime = Date.now();

    // 3. Process with Gemini API or Deep Semantic Offline Engine
    const apiKey = localStorage.getItem("OMAR_GEMINI_API_KEY");
    let aiResponse = null;

    if (apiKey && apiKey.trim().length > 10 && navigator.onLine) {
        try {
            aiResponse = await callGeminiAssistantApi(activeAssistantPersona, userText, apiKey);
        } catch (e) {
            console.error("Gemini API Request Failed, falling back to offline engine:", e);
        }
    }

    if (!aiResponse) {
        // Deep semantic offline engine
        aiResponse = processOfflineAssistantResponse(activeAssistantPersona, userText);
    }

    // Natural typing delay for realistic interaction feel (minimum 600ms)
    const elapsed = Date.now() - startTime;
    if (elapsed < 600) {
        await new Promise(r => setTimeout(r, 600 - elapsed));
    }

    // Remove typing indicator
    const typingEl = document.getElementById(typingId);
    if (typingEl) typingEl.remove();

    // Add assistant response to history
    assistantChatHistory[activeAssistantPersona].push({
        sender: "assistant",
        text: aiResponse.text,
        actionHtml: aiResponse.actionHtml || null,
        time: getCurrentTimeStr()
    });

    renderAssistantMessages();
}

// ==================== ONLINE GEMINI MULTI-TURN API CALL ====================

async function callGeminiAssistantApi(personaKey, userText, apiKey) {
    const persona = ASSISTANT_PERSONAS[personaKey];
    const currentPlan = appData.customWorkoutPlan[currentActiveDay] || DEFAULT_WORKOUT_PLAN[currentActiveDay];
    const consumed = appData.todayNutrition || {};
    const target = appData.targets || DEFAULT_TARGETS;

    const systemPrompt = `Sen '${persona.name}' adında, ${persona.role} olarak konuşan bir karaktersin.
Karakterinin Temel Özellikleri:
- Sokak ve salon ağzıyla (argolu, samimi, babacan, esprili, lafını sakınmayan, dobra bir Türk spor salonu efsanesi) konuşursun.
- Hitapların: "aslanım, paşam, demir bükücü, kütle kralı, şampiyon, usta, canavar".
- Asla resmi/robotik konuşma; tamamen doğal, canlı ve eğlenceli ol.
- Antrenman sorularında 1'e 1 anatomik biyomekanik eşdeğerleri bilirsin (örn: lat pulldown yerine asla row önermezsin, omuz batmasında açıyı korursun).
- Beslenme sorularında pratik, lezzetli, yüksek proteinli tarifler verirsin.
- Suplement sorularında para tuzağı fuzuli tozları eler, nokta atışı bilimsel takviyeleri yazarsın.
- Sporcu tükenişte baş ağrısı (exertion headache/Valsalva), mide bulantısı, halsizlik, eklem batması veya sakatlık yaşadığında anında şefkatli ama dobra sporcu tüyoları ve fizyolojik çözümleri verirsin.

Kullanıcının Canlı Uygulama Durumu:
- Aktif Günün Antrenmanı: ${currentPlan.title} (${currentPlan.desc})
- Günün Egzersizleri: ${currentPlan.exercises.map(e => e.name).join(", ")}
- Günlük Makro Hedefi: ${target.calories} kcal • ${target.protein}g Protein • ${target.carbs}g Karb • ${target.fat}g Yağ
- Bugün Tüketilen: ${consumed.calories || 0} kcal • ${consumed.protein || 0}g P • ${consumed.carbs || 0}g C • ${consumed.fat || 0}g F
- Kalan Makro Açığı: ${Math.max(0, target.protein - (consumed.protein||0))}g Protein, ${Math.max(0, target.carbs - (consumed.carbs||0))}g Karb
- Kilo & Hedef: ${appData.userProfile ? appData.userProfile.weight : 74} kg (${appData.userProfile ? appData.userProfile.goal : 'bulk'})

Format Kuralları:
- Paragraflar arasına <br><br> koy.
- Vurgulamak istediğin önemli noktaları <strong>...</strong> içine al.
- Yanıtların ne çok kısa ne de gereksiz ansiklopedik olsun; vurucu, samimi ve pratik tavsiyeler ver.`;

    // 1. Build conversation history
    const history = assistantChatHistory[personaKey] || [];
    const contents = [];

    history.forEach(m => {
        const role = m.sender === "user" ? "user" : "model";
        const cleanText = (m.text || "").replace(/<[^>]*>?/gm, ' ').replace(/&nbsp;/g, ' ').trim();
        if (!cleanText) return;

        if (contents.length > 0 && contents[contents.length - 1].role === role) {
            contents[contents.length - 1].parts[0].text += "\n" + cleanText;
        } else {
            contents.push({
                role: role,
                parts: [{ text: cleanText }]
            });
        }
    });

    if (contents.length === 0 || contents[contents.length - 1].role !== "user") {
        contents.push({
            role: "user",
            parts: [{ text: userText }]
        });
    }

    let recentContents = contents.slice(-8);
    while (recentContents.length > 0 && recentContents[0].role !== "user") {
        recentContents.shift();
    }
    if (recentContents.length === 0) {
        recentContents.push({
            role: "user",
            parts: [{ text: userText }]
        });
    }

    const payloadWithSys = {
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: recentContents,
        generationConfig: { temperature: 0.85, maxOutputTokens: 1000 }
    };

    const payloadSimple = {
        contents: [
            {
                role: "user",
                parts: [{ text: `[SİSTEM REHBERİ: ${systemPrompt}]\n\nKullanıcı: ${userText}` }]
            }
        ],
        generationConfig: { temperature: 0.85, maxOutputTokens: 1000 }
    };

    const models = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-2.5-flash", "gemini-1.5-pro"];
    let data = null;
    let lastError = null;

    for (const model of models) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payloadWithSys)
            });
            if (res.ok) {
                data = await res.json();
                break;
            } else {
                const err = await res.text();
                console.warn(`${model} sys error:`, res.status, err);
                lastError = new Error(`${model} HTTP ${res.status}: ${err}`);
            }
        } catch (e) {
            lastError = e;
        }

        try {
            const res2 = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payloadSimple)
            });
            if (res2.ok) {
                data = await res2.json();
                break;
            }
        } catch (e) {
            lastError = e;
        }
    }

    if (!data) {
        throw lastError || new Error("Gemini API isteği başarısız oldu.");
    }

    const reply = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text;

    if (!reply) throw new Error("Boş Gemini yanıtı");

    let formattedText = reply.replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
    
    // Auto-generate dynamic action buttons
    let actionHtml = null;
    const lowerReply = reply.toLowerCase();

    if (personaKey === "enes") {
        if (lowerReply.includes("high-to-low") || lowerReply.includes("cable fly") || lowerReply.includes("decline")) {
            actionHtml = `
                <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Dips', 'lib_high_cable_fly', 'High-to-Low Cable Fly')">
                    <i class="fa-solid fa-arrows-rotate"></i> Programda Dips'i High-to-Low Cable Fly ile Değiştir 🔄
                </button>
            `;
        } else if (lowerReply.includes("single-arm") || lowerReply.includes("high row") || lowerReply.includes("straight-arm")) {
            actionHtml = `
                <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Lat Pulldown', 'lib_high_row', 'High Row Tek Kol (Lat Odak)')">
                    <i class="fa-solid fa-arrows-rotate"></i> Programda Single-Arm High Cable Row ile Değiştir 🦅
                </button>
            `;
        } else if (lowerReply.includes("hack squat") || lowerReply.includes("leg press")) {
            actionHtml = `
                <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Squat', 'lib_hack_squat', 'Hack Squat')">
                    <i class="fa-solid fa-arrows-rotate"></i> Programda Hack Squat ile Değiştir 🦵
                </button>
            `;
        }
    } else if (personaKey === "vedat") {
        if (lowerReply.includes("tarif") || lowerReply.includes("risotto") || lowerReply.includes("pankek") || lowerReply.includes("lapa")) {
            actionHtml = `
                <button class="ai-action-btn btn-recipe" onclick="applyAiMealAdd('ai_meal_${Date.now()}', 'Vedat\\'ın Özel Tarifi', 45, 75, 10, 570)">
                    <i class="fa-solid fa-utensils"></i> Bu Tarifi Bugünkü Öğünlerime Ekle (45g P) 🍽️
                </button>
            `;
        }
    } else if (personaKey === "kuray") {
        if (lowerReply.includes("magnezyum") || lowerReply.includes("melatonin")) {
            actionHtml = `
                <button class="ai-action-btn btn-supplement" onclick="applyAiSupplementAdd('cat_mag_bis')">
                    <i class="fa-solid fa-plus"></i> Magnezyum Bisglisinat'ı Listeme Ekle 💊
                </button>
            `;
        } else if (lowerReply.includes("sitrulin") || lowerReply.includes("kreatin")) {
            actionHtml = `
                <button class="ai-action-btn btn-supplement" onclick="applyAiSupplementAdd('cat_citrulline')">
                    <i class="fa-solid fa-bolt"></i> L-Sitrulin Malat'ı Listeme Ekle ⚡
                </button>
            `;
        }
    }

    return {
        text: formattedText,
        actionHtml: actionHtml
    };
}

// ==================== COMPREHENSIVE SEMANTIC OFFLINE KNOWLEDGE ENGINE ====================

function processOfflineAssistantResponse(personaKey, userText) {
    const raw = userText || "";
    const t = raw.toLowerCase();
    const currentPlan = appData.customWorkoutPlan[currentActiveDay] || DEFAULT_WORKOUT_PLAN[currentActiveDay];
    const consumed = appData.todayNutrition || {};
    const target = appData.targets || DEFAULT_TARGETS;

    // -------------------------------------------------------------
    // GREETINGS & CASUAL TALK (ALL PERSONAS)
    // -------------------------------------------------------------
    if (/^(selam|merhaba|naber|nasılsın|ne haber|hey|günaydın|iyi akşamlar|sa|s.a|selamün|slm)/i.test(t.trim())) {
        if (personaKey === "enes") {
            return {
                text: `Aleykümselam aslanım! Demirler hazır, enerji yerinde mi? Bugün günlerden <strong>${currentPlan.title}</strong>. Salonda doluluk var mı, omzunda batma var mı, yoksa yeni bir hareket mi deneyeceğiz? Söyle bakalım derdin ne!`
            };
        } else if (personaKey === "vedat") {
            return {
                text: `Selamlar kütle şampiyonu! Hoş geldin mutfağa. Kuru tavuk kemirmekten bıktın mı, yoksa akşama açık kalan makroları mı kapatacağız? Dolapta ne var ne yok söyle, 5 dakikada bomba bir tarif çıkarayım!`
            };
        } else if (personaKey === "kuray") {
            return {
                text: `Aleyküm eyvallah paşam! Toz-hap dünyasına hoş geldin. Gece uyku mu tutmuyor, bulkta miden davul gibi mi şişiyor yoksa damarları mı patlatacağız? Söyle derdini, nokta atışı takviyeyi yazayım.`
            };
        }
    }

    // -------------------------------------------------------------
    // WELLNESS, NAUSEA, FATIGUE, DIZZINESS & ENERGY ISSUES (ALL PERSONAS)
    // -------------------------------------------------------------
    if (t.includes("mide") || t.includes("bulantı") || t.includes("bulan") || t.includes("kusma") || t.includes("halsiz") || t.includes("yorgun") || t.includes("efor") || t.includes("enerji") || t.includes("baş dön") || t.includes("tansiyon") || t.includes("güçsüz") || t.includes("bitkin") || t.includes("kötü his")) {
        if (personaKey === "enes") {
            return {
                text: `Aman dikkat aslanım! Mide bulantısıyla veya düşük tansiyonla ağır demire girilmez, bayılıp kendini sakatlarsın.<br><br>
                       <strong>Hemen şunları yap:</strong><br>
                       1. 🛑 <strong>Ağır setleri hemen durdur:</strong> Bir banka otur, derin derin diyafram nefesi al ve yüzüne soğuk su çarp.<br>
                       2. 💧 <strong>Elektrolit & Su:</strong> Bir şişe maden suyunu yudum yudum iç (tuz ve mineral tansiyonu toparlar).<br>
                       3. 💡 <strong>Neden oldu?</strong> Antrenmandan çok kısa süre önce ağır bir öğün yediysen kan mideye çekilmiştir veya preworkout kafeini çarpmıştır.<br><br>
                       Eğer 10 dakikaya toparlarsan bugün <strong>RIR 3-4</strong> (hafif pompa) şeklinde bitir; toparlayamazsan antrenmanı bırak evine git, dinlen. Kütle kaçmıyor, önce sağlık!`
            };
        } else if (personaKey === "vedat") {
            return {
                text: `Usta geçmiş olsun! Mide bulanıyorsa kesin antrenmana girmeden 20-30 dakika önce yağlı veya ağır bir şey gömdün, sindirim sistemi kitlendi.<br><br>
                       <strong>Hemen kurtarma taktiği:</strong><br>
                       - Sakın üstüne lıkır lıkır soğuk su dikme!<br>
                       - Bir şişe <strong>maden suyunun içine çeyrek limon sık</strong> ve bir fiske tuz at, küçük yudumlarla iç.<br>
                       - Bir sonraki antrenmanında ana öğününü salona gelmeden en az <strong>1.5 - 2 saat önce</strong> bitirmiş ol.`
            };
        } else {
            return {
                text: `Reis preworkout kafein dozu yüksek geldiyse veya aç karnına yoğun efora girdiysen tansiyon çakılmış olabilir.<br><br>
                       <strong>Takviye & Reçete:</strong><br>
                       - Hemen <strong>Maden Suyu + 1 tutam Himalaya Tuzu</strong> ile sodyum/potasyumu yerine koy.<br>
                       - Mideni rahatlatmak için 1 bardak ılık suya yarım limon ve az zencefil çok iyi gelir.<br>
                       - Bir dahaki sefere antrenman öncesi preworkout dozunu yarıya düşür veya pumpsuz kafeinsiz formüllere geç!`
            };
        }
    }

    if (t.includes("fıkra") || t.includes("şaka") || t.includes("komik")) {
        if (personaKey === "enes") {
            return {
                text: `Bir gün elemanın teki salona gelmiş, 3 ayda 20 kilo kas alıp Mr. Olympia olcam demiş. Hoca sormuş: "Günde kaç saat uyuyorsun?" Eleman: "4 saat, sabah da poğaça yiyorum". Hoca demiş ki: "Sen anca fırıncı küreği olursun oğlum, önce o uykunu 8 saate çıkar, tavuğunu ye!" 😂 Hadi şimdi bırak geyiği, setine odaklan!`
            };
        } else if (personaKey === "vedat") {
            return {
                text: `Bir sporcu restorana gitmiş, garsona demiş ki: "Bana öyle bir yemek getir ki içinde hiç yağ ve tuz olmasın, kupkuru olsun, tadı da karton gibi olsun". Garson şaşırmış: "Abi bizde öyle bir yemek yok". Sporcu: "Nasıl yok ya, ben 3 yıldır evde her gün bunu yiyorum!" 😂 İşte o yüzden buradayım, seni lezzetli besleyeceğim!`
            };
        } else {
            return {
                text: `Eleman suplement dükkanına girmiş: "Abi bana öyle bir toz ver ki hem yağ yaksın, hem 10 kilo kas koysun, hem de sınavı kazandırsın". Dükkancı demiş ki: "O tozun adı büyü kardeşim, Hogwarts sol tarafta!" 😂 Boş vaatlere para kaptırma, bilimsel çalışana gel!`
            };
        }
    }

    // -------------------------------------------------------------
    // 1. ENES ABİ (ANTRENMAN & BİYOMEKANİK DEEP KNOWLEDGE)
    // -------------------------------------------------------------
    if (personaKey === "enes") {
        // Dips & Omuz Ağrısı
        if (t.includes("dips") || (t.includes("omuz") && (t.includes("ağrı") || t.includes("bat") || t.includes("acı") || t.includes("sakat")))) {
            return {
                text: `Lan oğlum omzunu eline mi alacaksın? Dips yaparken köprücük kemiğin veya ön omuz kapsülün batıyorsa sakın zorlama! Dips gövde öne eğildiğinde alt göğüs liflerine (Costal Head) çılgın gerilim bindirir ama omuz eklemine de makaslama kuvveti uygular.<br><br>
                       Sana aynı alt göğüs lif açısını sıfır eklem stresiyle verecek <strong>High-to-Low Cable Fly</strong> veya <strong>Decline Dumbbell Press</strong> yazıyorum. Aşağıdaki butona tıkla, bugünkü ${currentPlan.title} programına hemen işleyelim!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Dips', 'lib_high_cable_fly', 'High-to-Low Cable Fly')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Dips'i High-to-Low Cable Fly ile Değiştir 🔄
                    </button>
                    <button class="ai-action-btn btn-swap" style="background:linear-gradient(135deg,#e11d48,#be123c); margin-top:4px;" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Dips', 'lib_dec_press', 'Decline Dumbbell Press')">
                        <i class="fa-solid fa-dumbbell"></i> Alternatif: Decline Dumbbell Press Ekle
                    </button>
                `
            };
        }

        // Lat Pulldown & Dikey Çekiş (Row Önermeme Kuralı)
        if (t.includes("lat") || t.includes("pulldown") || t.includes("kanat") || t.includes("genişlik")) {
            return {
                text: `Bak burası hipertrofinin altın kuralıdır: Lat Pulldown makinesi dolu diye gidip sakın Barbell Row ya da T-Bar yapma! O hareketler orta sırt (Rhomboid/Trapez) kalınlığı içindir; kanatların aşağı doğru genişlemesi (V-Taper) için omuz adduksiyonu ve dikey çekiş şarttır.<br><br>
                       Hemen kablo istasyonuna geç, tepeye tek kol tutamağı takıp <strong>Single-Arm High Cable Row</strong> yap veya <strong>Straight-Arm Cable Pulldown</strong> ile kanatları izole et!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Lat Pulldown', 'lib_high_row', 'High Row Tek Kol (Lat Odak)')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Single-Arm High Cable Row ile Değiştir 🦅
                    </button>
                    <button class="ai-action-btn btn-swap" style="background:linear-gradient(135deg,#0284c7,#0369a1); margin-top:4px;" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Lat Pulldown', 'lib_straight_arm_pull', 'Straight-Arm Cable Pulldown')">
                        <i class="fa-solid fa-link"></i> Alternatif: Straight-Arm Pulldown Ekle
                    </button>
                `
            };
        }

        // Bench Press / Göğüs Pres
        if (t.includes("bench") || t.includes("göğüs") || t.includes("chest press") || t.includes("incline")) {
            return {
                text: `Düz bench doluysa veya bar köprücük kemiğini sıkıştırıyorsa vakit kaybetmek yok! Dumbbell alarak <strong>Incline Dumbbell Press (30°)</strong> veya <strong>Flat Dumbbell Press</strong>'e geçiyoruz. Dumbbell serbestliği sayesinde en dipte göğsü bardan 2 kat daha derin esnetirsin!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Bench Press', 'lib_inc_db', 'Incline Dumbbell Press')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Incline Dumbbell Press ile Değiştir 🫁
                    </button>
                    <button class="ai-action-btn btn-swap" style="background:linear-gradient(135deg,#2563eb,#1d4ed8); margin-top:4px;" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Bench Press', 'lib_flat_db_press', 'Flat Dumbbell Press')">
                        <i class="fa-solid fa-dumbbell"></i> Alternatif: Flat Dumbbell Press Ekle
                    </button>
                `
            };
        }

        // Pec Fly / Kelebek
        if (t.includes("pec") || t.includes("fly") || t.includes("kelebek") || t.includes("crossover")) {
            return {
                text: `Pec deck makinesine sıra gelmediyse hemen dumbbell'ları kap, sehpada <strong>Flat Dumbbell Fly</strong> veya kablo istasyonunda <strong>Low-to-High Cable Fly</strong> yapıyoruz. Göğüs liflerini en dipte 1 saniye esnetip tepe noktada sıkıştır!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Pec Deck', 'lib_db_fly', 'Flat / Incline Dumbbell Fly')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Dumbbell Fly ile Değiştir 💪
                    </button>
                `
            };
        }

        // Squat / Hack Squat / Leg Press / Ön Bacak
        if (t.includes("squat") || t.includes("bacak") || t.includes("quad") || t.includes("leg press")) {
            return {
                text: `Squat rack doluysa ya da belinde baskı hissediyorsan hiç dert etme aslanım. <strong>Hack Squat</strong> veya <strong>Plate Loaded Leg Press (45°)</strong> ile omurga yükünü sıfırlayıp ön bacak liflerine cerrahi hassasiyetle yükleniyoruz!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Squat', 'lib_hack_squat', 'Hack Squat (Quad Canavarı)')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Hack Squat ile Değiştir 🦵
                    </button>
                    <button class="ai-action-btn btn-swap" style="background:linear-gradient(135deg,#059669,#047857); margin-top:4px;" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Squat', 'lib_leg_press', 'Plate Loaded Leg Press')">
                        <i class="fa-solid fa-weight-hanging"></i> Alternatif: Leg Press Ekle
                    </button>
                `
            };
        }

        // RDL / Arka Bacak / Leg Curl
        if (t.includes("rdl") || t.includes("deadlift") || t.includes("arka bacak") || t.includes("hamstring") || t.includes("leg curl")) {
            return {
                text: `Arka bacak kütlesi için altın standart: <strong>Barbell / Dumbbell Romanian Deadlift (RDL)</strong> ve <strong>Seated Leg Curl</strong>. RDL kalçayı geriye iterek hamstring liflerini en uzun pozisyonda parçalar!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Leg Curl', 'lib_rdl', 'Romanian Deadlift (RDL)')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda RDL ile Değiştir 🏋️
                    </button>
                `
            };
        }

        // Omuz / Yan Omuz / Lateral / OHP
        if (t.includes("omuz") || t.includes("lateral") || t.includes("ohp") || t.includes("military") || t.includes("face pull")) {
            return {
                text: `3D Hindistan cevizi gibi omuzlar istiyorsan: Yan omuz için <strong>Tek Kol Kablo Lateral Raise</strong> (kablo gerilimi sıfırdan zirveye kesilmez), arka omuz için ise <strong>Face Pull</strong> şarttır!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Lateral', 'lib_cable_lateral', 'Tek Kol Kablo Lateral Raise')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Kablo Lateral Raise Ekle 🦾
                    </button>
                `
            };
        }

        // Kol / Biceps / Triceps
        if (t.includes("kol") || t.includes("biceps") || t.includes("triceps") || t.includes("pazu") || t.includes("curl") || t.includes("pushdown")) {
            return {
                text: `Kolu kalınlaştıran sır: Kolun %65'i triceps'tir! Triceps uzun başı için <strong>Overhead Cable Extension</strong>, biceps tepe noktası için <strong>Incline DB Curl</strong> veya <strong>Bayesian Cable Curl</strong> yapıyoruz!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Triceps', 'lib_overhead_tri', 'Overhead Cable Extension')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Overhead Cable Extension Ekle 💪
                    </button>
                `
            };
        }

        // Karın & Core
        if (t.includes("karın") || t.includes("six pack") || t.includes("abs") || t.includes("core") || t.includes("crunch")) {
            return {
                text: `Mekikle vakit kaybetme paşam. Six-pack tuğlalarını derinleştirmek için ağırlıklı <strong>Kablo Halat Crunch</strong> ve pelvik kontrol için <strong>Hanging Leg Raise</strong> yapacaksın!`,
                actionHtml: `
                    <button class="ai-action-btn btn-swap" onclick="applyAiExerciseSwap('${currentActiveDay}', 'Karın', 'lib_cable_crunch', 'Kablo Halat Crunch')">
                        <i class="fa-solid fa-arrows-rotate"></i> Programda Kablo Halat Crunch Ekle 🧱
                    </button>
                `
            };
        }

        // Baş Ağrısı & Efor / Valsalva / Nefes Tutma Hatası
        if (t.includes("baş ağrı") || t.includes("başım") || t.includes("şakak") || t.includes("ense") || t.includes("zonkla") || t.includes("ıkın") || t.includes("nefes tut")) {
            return {
                text: `Eyvah aslanım, sakın o seti zorlama! Buna spor hekimliğinde <strong>Efor Baş Ağrısı (Weightlifter's / Exertion Headache)</strong> denir.<br><br>
                       <strong>Neden Başına Geldi?</strong><br>
                       Tükenişe yaklaşırken nefesini boğazında kilitlediğin an (hatalı Valsalva manevrası) göğüs içi ve kafa içi venöz basınç bir anda tavan yapar; ense ve şakak damarlarında zonklayıcı çılgın bir baş ağrısı başlatır.<br><br>
                       <strong>Acil Kurtarma Adımları:</strong><br>
                       1. 🛑 <strong>Ağırlığı hemen bırak</strong>, oturup boyun ve trapez kaslarını tamamen gevşet.<br>
                       2. 🫁 <strong>Doğru Nefes Tekniği:</strong> Bir sonraki sette ağırlığı kaldırırken/iterken (konsantrik fazda) mutlaka <strong>ağzından kuvvetlice 'Tısss' diye nefes ver</strong>, havayı içinde hapsetme!<br>
                       3. 💧 Bir şişe maden suyu içip tansiyonu dengele. Eğer zonklama 15 dakikada geçmezse bugünkü antrenmanı derhal sonlandır, beyin damarlarına şaka olmaz!`
            };
        }

        // RIR / Set / Tekrar / Overload / Program Soruları
        if (t.includes("rir") || t.includes("tekrar") || t.includes("set") || t.includes("tükeniş") || t.includes("kilo") || t.includes("ağırlık") || t.includes("kaç")) {
            return {
                text: `Demir kural: İlk çalışma setinde (TOP SET) hedefin <strong>RIR 0 (Tam Tükeniş)</strong> olsun. Hedef tekrarı (örn: 8 tekrar) temiz formla yakaladığın anda, bir sonraki hafta kiloya <strong>+2.5 kg ekle</strong>. Formu bozmadan ağırlığı artırmak hipertrofinin anahtarıdır!`
            };
        }

        // Genel antrenman danışması
        return {
            text: `Bugünkü antrenman günün: <strong>${currentPlan.title}</strong> (${currentPlan.desc}).<br><br>Hangi hareket doluysa, neren ağrıyorsa ya da hangi kası patlatmak istiyorsan açıkça yaz aslanım; biyomekaniğe uygun 1'e 1 çözümünü söyleyip hemen programına işleyeyim!`
        };
    }

    // -------------------------------------------------------------
    // 2. VEDAT DÜBÜR (BESLENME & TARİF DEEP KNOWLEDGE)
    // -------------------------------------------------------------
    if (personaKey === "vedat") {
        // Tavuk & Pirinç kurtarma / Sote / Risotto
        if (t.includes("tavuk") || t.includes("pirinç") || t.includes("kuru") || t.includes("lapa") || t.includes("baydı") || t.includes("bıktım")) {
            return {
                text: `Yıllardır kuru haşlama tavukla lapa pirinç yiyip hayattan soğuyan sporcuları kurtarma derneği başkanı olarak konuşuyorum:<br><br>
                       🍳 <strong>"Tavuklu Yalancı Risotto / Lapa Kurtarıcı"</strong>:<br>
                       150g Çiğ Tavuk Göğsü küp doğranır, tavada 1 tatlı kaşığı zeytinyağı, sarımsak ve pul biberle 5dk sotelenir. Haşlanmış sıcak pirinç tavaya atılır, 50g süzme yoğurt eklenip krema kıvamına gelene kadar 1 dakika karıştırılır.<br><br>
                       📊 <strong>Değerler:</strong> 48g Protein • 78g Karb • 9g Yağ • 620 kcal. Kayıp gider boğazından!`,
                actionHtml: `
                    <button class="ai-action-btn btn-recipe" onclick="applyAiMealAdd('ai_risotto', 'Vedat\\'ın Tavuklu Yalancı Risottosu', 48, 78, 9, 620)">
                        <i class="fa-solid fa-utensils"></i> Bu Tarifi Bugünkü Öğünlerime Ekle (48g P) 🍽️
                    </button>
                `
            };
        }

        // Kıyma / Et / Patates
        if (t.includes("kıyma") || t.includes("et") || t.includes("biftek") || t.includes("patates") || t.includes("dana")) {
            return {
                text: `Kırmızı etin gücü bir başkadır paşam! Sana <strong>"Anabolik Kıymalı Fırın Patates Tava"</strong>:<br><br>
                       🥩 150g Yağsız Dana Kıyma + 200g Küp Patates + Soğan & Biber.<br>
                       Tavada kıymayı kavur, patatesleri hava fritözünde veya fırında çıtır yap, üzerine dök. Yanına 1 bardak ayran çak.<br><br>
                       📊 <strong>Değerler:</strong> 42g Protein • 45g Karb • 14g Yağ • 480 kcal!`,
                actionHtml: `
                    <button class="ai-action-btn btn-recipe" onclick="applyAiMealAdd('ai_beef_potato', 'Vedat\\'ın Kıymalı Patates Tavası', 42, 45, 14, 480)">
                        <i class="fa-solid fa-plus"></i> Kıymalı Patates Öğününü Ekle 🥩
                    </button>
                `
            };
        }

        // Yumurta / Yulaf / Pankek / Kahvaltı
        if (t.includes("yumurta") || t.includes("yulaf") || t.includes("pankek") || t.includes("kahvaltı") || t.includes("muz") || t.includes("fıstık ezmesi")) {
            return {
                text: `Sabahları anabolik hormonları şahlandıracak <strong>"40g Proteinli Kütle Pankeki"</strong>:<br><br>
                       🥞 60g Pirinç Unu veya Yulaf + 3 Bütün Yumurta + 1 Muz + 20g Bal + 25g Fıstık Ezmesi. Çırp, yapışmaz tavada önlü arkalı 3'er dakika pişir.<br><br>
                       📊 <strong>Değerler:</strong> 34g Protein • 98g Karb • 24g Yağ • 750 kcal!`,
                actionHtml: `
                    <button class="ai-action-btn btn-recipe" onclick="applyAiMealAdd('ai_pancake', 'Vedat\\'ın 40g Proteinli Kütle Pankeki', 34, 98, 24, 750)">
                        <i class="fa-solid fa-fire"></i> Kütle Pankekini Öğünlere Ekle 🔥
                    </button>
                `
            };
        }

        // Ton Balığı / Somon / Balık
        if (t.includes("ton") || t.includes("somon") || t.includes("balık")) {
            return {
                text: `Hızlı ve temiz protein arayana: <strong>"10 Dakikada Ton Balıklı Akdeniz Kasesi"</strong>:<br><br>
                       🐟 1 Kutu Süzme Ton Balığı (160g) + 150g Haşlanmış Pirinç / Makarna + Mısır + 1 Kaşık Zeytinyağı + Limon.<br><br>
                       📊 <strong>Değerler:</strong> 40g Protein • 55g Karb • 12g Yağ • 500 kcal!`,
                actionHtml: `
                    <button class="ai-action-btn btn-recipe" onclick="applyAiMealAdd('ai_tuna_bowl', 'Vedat\\'ın Ton Balıklı Kasesi', 40, 55, 12, 500)">
                        <i class="fa-solid fa-plus"></i> Ton Balıklı Kaseyi Ekle 🐟
                    </button>
                `
            };
        }

        // Kalan Makrolar / Gün Sonu Açığı
        if (t.includes("makro") || t.includes("kalan") || t.includes("açık") || t.includes("kalori") || t.includes("tamamla") || t.includes("doldur")) {
            const remP = Math.max(0, target.protein - (consumed.protein || 0));
            const remC = Math.max(0, target.carbs - (consumed.carbs || 0));
            return {
                text: `Kasanı hemen kontrol ettim paşam: Günlük hedefe ulaşmak için <strong>${remP}g Protein</strong> ve <strong>${remC}g Karbonhidrat</strong> açığın var.<br><br>
                       Sana 2 dakikalık <strong>"Anabolik Gece Pudingi"</strong>:<br>
                       🥣 150g Süzme Yoğurt / Quark + 1 Ölçek Whey Protein + 1 Muz + 1 Kaşık Bal. Karıştır, tatlı niyetine göm!`,
                actionHtml: `
                    <button class="ai-action-btn btn-recipe" onclick="applyAiMealAdd('ai_night_pudding', 'Vedat\\'ın Anabolik Gece Pudingi', ${remP > 0 ? remP : 35}, ${remC > 0 ? remC : 50}, 5, 420)">
                        <i class="fa-solid fa-check"></i> Kalan Makroları Kapatan Öğünü Ekle 🥣
                    </button>
                `
            };
        }

        // Kilo alamıyorum / İştahsızlık
        if (t.includes("kilo alamıyorum") || t.includes("iştah") || t.includes("yiyemiyorum") || t.includes("hacim")) {
            return {
                text: `Kilo alamıyorum diyen adam çiğnemekle vakit kaybediyordur aslanım! Sıvı kaloriye geçiyoruz: <strong>"1000 Kalorilik Canavar Shake"</strong>:<br><br>
                       🥤 100g Yulaf + 2 Muz + 40g Fıstık Ezmesi + 1 Ölçek Whey + 300ml Süt + 1 Kaşık Bal. Blenderdan geçir, 2 dakikada iç. Mideyi yormadan 1000 kalori cepte!`
            };
        }

        // Genel beslenme danışması
        return {
            text: `Dolapta ne malzemen varsa söyle (örn: tavuk, lor, kıyma, ton balığı, yulaf, patates, makarna, yoğurt); sana gramajı, kalorisi ve makroları tam hesaplanmış lokum gibi bir sporcu yemeği patlatayım!`
        };
    }

    // -------------------------------------------------------------
    // 3. KÜRAY (SUPLEMENT & BİYOKİMYA DEEP KNOWLEDGE)
    // -------------------------------------------------------------
    if (personaKey === "kuray") {
        // Uyku / Melatonin / Magnezyum
        if (t.includes("uyku") || t.includes("gece") || t.includes("toparlan") || t.includes("yorgun") || t.includes("dinlen")) {
            return {
                text: `Gece deliksiz uyuyamıyorsan kas büyümesini unut paşam. Büyüme hormonu ve kas proteini sentezi derin REM uykusunda tavan yapar:<br><br>
                       💤 <strong>Magnezyum Bisglisinat (250-400 mg):</strong> Beyindeki GABA reseptörlerine bağlanır, sinir sistemini susturur ve kas kramplarını siler.<br>
                       🌙 <strong>Melatonin (1-3 mg):</strong> Sirkadiyen ritmini düzenler, 20 dakikada tatlı bir uykuya daldırır.`,
                actionHtml: `
                    <button class="ai-action-btn btn-supplement" onclick="applyAiSupplementAdd('cat_mag_bis')">
                        <i class="fa-solid fa-plus"></i> Magnezyum Bisglisinat'ı Listeme Ekle 💊
                    </button>
                    <button class="ai-action-btn btn-supplement" style="background:linear-gradient(135deg,#6366f1,#4f46e5); margin-top:4px;" onclick="applyAiSupplementAdd('cat_melatonin')">
                        <i class="fa-solid fa-moon"></i> Melatonin'i Listeme Ekle 🌙
                    </button>
                `
            };
        }

        // Şişkinlik / Gaz / Sindirim / Mide
        if (t.includes("şişkin") || t.includes("gaz") || t.includes("mide") || t.includes("sindirim") || t.includes("hazımsız")) {
            return {
                text: `Bulkta yüksek pirinç ve et tüketiminden karnın davul gibi şişiyorsa mide asidin ve enzimlerin yetersizdir. Sindirilmeyen besin kas yapmaz, bağırsakta fermente olup gaz yapar!<br><br>
                       🧪 <strong>Sindirim Enzimleri Kompleksi (Proteaz & Amilaz):</strong> En ağır öğününle 1 kapsül alıyorsun, dakikalar içinde şişkinliği bitirir.<br>
                       🍏 <strong>Organik Elma Sirkesi:</strong> Yemekten 10dk önce suya 1 kaşık karıştır, mide HCL asidini optimize et.`,
                actionHtml: `
                    <button class="ai-action-btn btn-supplement" onclick="applyAiSupplementAdd('cat_enzymes')">
                        <i class="fa-solid fa-plus"></i> Sindirim Enzimlerini Listeme Ekle 🧪
                    </button>
                `
            };
        }

        // Pump / Damar / Sitrulin / Pre-Workout / Enerji
        if (t.includes("pump") || t.includes("damar") || t.includes("pre") || t.includes("enerji") || t.includes("sitrulin") || t.includes("kafein")) {
            return {
                text: `Damarların itfaiye hortumu gibi açılmasını ve sette tükenmemeyi istiyorsan:<br><br>
                       ⚡ <strong>L-Sitrulin Malat (6-8 gram):</strong> Kandaki nitrik oksit (NO) seviyesini tavan yaptırır, kaslara kan pompalar.<br>
                       ☕ <strong>Kafein (200 mg):</strong> Merkezi sinir sistemini uyarır, odaklanmayı artırır.`,
                actionHtml: `
                    <button class="ai-action-btn btn-supplement" onclick="applyAiSupplementAdd('cat_citrulline')">
                        <i class="fa-solid fa-plus"></i> L-Sitrulin Malat'ı Listeme Ekle ⚡
                    </button>
                `
            };
        }

        // Kreatin / Güç / Kütle
        if (t.includes("kreatin") || t.includes("creatine") || t.includes("güç") || t.includes("su tutma") || t.includes("ne zaman")) {
            return {
                text: `Kreatin dünyada hakkında en çok araştırma yapılmış 1 numaralı kütle suplementidir!<br><br>
                       🔥 <strong>Kullanım:</strong> Yükleme yapmana gerek yok; her gün düzenli <strong>5 gram Kreatin Monohidrat</strong> al. Hücre içi ATP depolarını fuller, sette +2 tekrar ve net kas gücü kazandırır. Zamanı fark etmez, her gün aksatmadan iç!`,
                actionHtml: `
                    <button class="ai-action-btn btn-supplement" onclick="applyAiSupplementAdd('cat_creatine')">
                        <i class="fa-solid fa-bolt"></i> Kreatin Monohidrat'ı Listeme Ekle 🔥
                    </button>
                `
            };
        }

        // Eklem Ağrısı / Omega 3 / Kolajen
        if (t.includes("eklem") || t.includes("kıkırdak") || t.includes("omega") || t.includes("balık yağı") || t.includes("kolajen")) {
            return {
                text: `Ağır kiloların altında eklemlerin gıcırdıyorsa:<br><br>
                       🐟 <strong>Yüksek EPA/DHA Omega-3 (2000-3000 mg):</strong> Eklem içi iltihabı ve sürtünmeyi siler.<br>
                       🦴 <strong>Tip 2 Kolajen + C Vitamini:</strong> Kıkırdak dokunun elastikiyetini korur.`,
                actionHtml: `
                    <button class="ai-action-btn btn-supplement" onclick="applyAiSupplementAdd('cat_omega3')">
                        <i class="fa-solid fa-plus"></i> Omega-3 Balık Yağını Listeme Ekle 🐟
                    </button>
                `
            };
        }

        // Temel Stack / Ne lazım
        if (t.includes("ne lazım") || t.includes("hangisi") || t.includes("şart") || t.includes("stack") || t.includes("tavsiye")) {
            return {
                text: `Piyasadaki fuzuli para tuzaklarını çöpe at. Bir sporcuya gerçekten çalışan **Kutsal 4'lü Stack** şudur:<br><br>
                       1. <strong>Kreatin Monohidrat (5g):</strong> Saf güç & ATP.<br>
                       2. <strong>Whey Protein:</strong> Pratik günlük protein tamamlama.<br>
                       3. <strong>Magnezyum Bisglisinat:</strong> Derin uyku & sinir sistemi.<br>
                       4. <strong>Omega-3 (Yüksek EPA/DHA):</strong> Kalp & eklem sağlığı.`
            };
        }

        // Genel suplement danışması
        return {
            text: `Derdin neyse söyle (uyku, sindirim/gaz, pump, kramp, eklem ağrısı veya temel bulk stack'i), sana boş kutuları değil, gerçekten çalışan takviyeleri yazayım!`
        };
    }

    return {
        text: "Sorunu anladım aslanım! Biraz daha detay verirsen nokta atışı yardımcı olayım."
    };
}

// ==================== ONE-CLICK ACTIONS FROM AI ====================

function applyAiExerciseSwap(dayKey, oldExMatch, newLibExId, newExName) {
    const plan = appData.customWorkoutPlan[dayKey];
    if (!plan) return;

    const libEx = EXERCISE_LIBRARY.find(e => e.id === newLibExId);
    if (!libEx) return;

    // Find exercise to replace (or replace first matching or append)
    let replaced = false;
    for (let i = 0; i < plan.exercises.length; i++) {
        if (plan.exercises[i].name.toLowerCase().includes(oldExMatch.toLowerCase())) {
            plan.exercises[i] = {
                id: `${dayKey}_${Date.now()}`,
                name: libEx.name,
                muscle: libEx.muscle,
                target: libEx.defaultTarget,
                defaultSets: libEx.defaultSets,
                defaultSeat: libEx.defaultSeat,
                isTopSet: libEx.isTopSet
            };
            replaced = true;
            break;
        }
    }

    if (!replaced) {
        // Append if old exercise wasn't in plan
        plan.exercises.push({
            id: `${dayKey}_${Date.now()}`,
            name: libEx.name,
            muscle: libEx.muscle,
            target: libEx.defaultTarget,
            defaultSets: libEx.defaultSets,
            defaultSeat: libEx.defaultSeat,
            isTopSet: libEx.isTopSet
        });
    }

    saveDataToStorage();
    renderWorkoutView(dayKey);
    showToast(`✅ ${newExName || libEx.name} bugünkü programa işlendi! 💪`);
}

function applyAiSupplementAdd(suppId) {
    if (!appData.supplements) appData.supplements = [];
    const suppInCatalog = SUPPLEMENT_CATALOG.find(s => s.id === suppId);
    const suppName = suppInCatalog ? suppInCatalog.name : "Suplement";

    if (!appData.supplements.includes(suppId)) {
        appData.supplements.push(suppId);
        saveDataToStorage();
        renderSupplementsView();
        showToast(`✅ ${suppName} günlük suplement protokolüne eklendi! 💊`);
    } else {
        showToast(`ℹ️ ${suppName} zaten protokolünde ekli.`);
    }
}

function applyAiMealAdd(mealId, mealName, p, c, f, cal) {
    if (!appData.todayNutrition.meals) appData.todayNutrition.meals = [];

    const newLoggedMeal = {
        id: `ai_${Date.now()}`,
        presetId: mealId,
        name: mealName,
        desc: `${p}g Protein • ${c}g Karb • ${f}g Yağ • ${cal} kcal`,
        cal: cal,
        p: p,
        c: c,
        f: f,
        time: getCurrentTimeStr()
    };

    appData.todayNutrition.meals.push(newLoggedMeal);
    recalculateDailyTotals();
    saveDataToStorage();
    renderNutritionView();
    renderDashboard();
    showToast(`✅ ${mealName} başarıyla öğünlerine eklendi! 🍽️`);
}

function openApiKeySettings() {
    closeModal('modal-ai-assistant');
    openModal('modal-settings');
}

function getCurrentTimeStr() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// Global Modal Backdrop Protection & Touch Handlers
function initModalBackdropHandlers() {
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", function(e) {
            if (e.target === this) {
                e.stopPropagation();
                e.preventDefault();
                closeModal(this.id);
            }
        });
        overlay.addEventListener("touchmove", function(e) {
            if (e.target === this) {
                e.preventDefault();
            }
        }, { passive: false });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initModalBackdropHandlers);
} else {
    initModalBackdropHandlers();
}
