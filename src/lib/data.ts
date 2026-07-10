export const siteConfig = {
  name: "Aka-Uka Ta'lim Markazi",
  slogan: "Kelajagingizni biz bilan quring",
  mission: "Maqsadimiz — sizni natijaga olib chiqish",
  phone: "+998 94 804 06 26",
  phoneRaw: "+998948040626",
  instagram: "@akauka_markazi",
  instagramUrl: "https://instagram.com/akauka_markazi",
  telegram: "", // keyin qo'shiladi
  telegramUrl: "",
  youtube: "https://youtu.be/IOwTEQQk5kU",
  address: "Ishtixon tumani",
  email: "",
};

export interface Teacher {
  name: string;
  subject: string;
  image: string;
}

export const teachers: Teacher[] = [
  { name: "Vafoxonov Rahmonjon", subject: "Ona tili va adabiyot", image: "/images/teachers/vafoxonov_rahmonjon.png" },
  { name: "Sunnatulla Mardiyev", subject: "Biologiya va Kimyo", image: "/images/teachers/sunnatulla_mardiyev.png" },
  { name: "Boliboyev Shahboz", subject: "Matematika", image: "/images/teachers/boliboyev_shahboz.png" },
  { name: "Baratov Javohir", subject: "Ingliz tili", image: "/images/teachers/baratov_javohir.png" },
  { name: "Rahimov Hasan", subject: "Rus tili", image: "/images/teachers/rahimov_hasan.png" },
  { name: "Aktamov G'iyosiddin", subject: "Ingliz tili", image: "/images/teachers/aktamov_giyosiddin.png" },
  { name: "Po'latov Shamshodbek", subject: "Ingliz tili", image: "/images/teachers/polatov_shamshodbek.png" },
  { name: "Toshqulov Hasan", subject: "Matematika", image: "/images/teachers/toshqulov_hasan.png" },
  { name: "Tirkashev Shomansur", subject: "Fizika", image: "/images/teachers/tirkashev_shomansur.png" },
  { name: "Sharafov Abbos", subject: "Kimyo", image: "/images/teachers/sharafov_abbos.png" },
  { name: "Oqbutayev Javohir", subject: "Ona tili va adabiyot", image: "/images/teachers/oqbutayev_javohir.png" },
  { name: "Ibragimova Farangiz", subject: "Ingliz tili va huquq", image: "/images/teachers/ibragimova_farangiz.png" },
  { name: "Amanov Maqsud", subject: "SAT", image: "/images/teachers/amanov_maqsud.png" },
  { name: "Muzrabov Abdurahmon", subject: "Turk tili", image: "/images/teachers/muzrabov_abdurahmon.png" },
  { name: "Boliboyev Shohruz", subject: "Matematika", image: "/images/teachers/boliboyev_shohruz.png" },
  { name: "Yusupova Dilobar", subject: "Matematika", image: "/images/teachers/yusupova_dilobar.png" },
];

export type CertSubjectFilter = "all" | "uzbek" | "math" | "chemistry" | "english" | "turkish" | "russian";

export interface CertificateResult {
  name: string;
  subject: string;
  score: number;
  percentage: number | null;
  grade: string;
  image: string;
}

export const certSubjectFilters: { key: CertSubjectFilter; label: string }[] = [
  { key: "all", label: "Barchasi" },
  { key: "uzbek", label: "O'zbek tili" },
  { key: "math", label: "Matematika" },
  { key: "chemistry", label: "Kimyo" },
  { key: "english", label: "Ingliz tili" },
  { key: "turkish", label: "Turk tili" },
  { key: "russian", label: "Rus tili" },
];

export const subjectFilterMap: Record<CertSubjectFilter, string[]> = {
  all: [],
  uzbek: ["O'zbek tili va adabiyot"],
  math: ["Matematika (O'zbek)"],
  chemistry: ["Kimyo (O'zbek)"],
  english: ["Ingliz tili"],
  turkish: ["Turk tili"],
  russian: ["Rus tili va adabiyot"],
};

export const certificates: CertificateResult[] = [
  // ======== MATEMATIKA (12) ========
  { name: "Rahmatov Zoir", subject: "Matematika (O'zbek)", score: 76.75, percentage: 100, grade: "A+", image: "/images/certificates/cert_007.jpg" },
  { name: "Aktamov Shohruhxon", subject: "Matematika (O'zbek)", score: 67.12, percentage: 100, grade: "A", image: "/images/certificates/cert_005.jpg" },
  { name: "Saydullayev Muhammadali", subject: "Matematika (O'zbek)", score: 66.03, percentage: 100, grade: "A", image: "/images/certificates/cert_011.jpg" },
  { name: "Quvondiqov Bahodir", subject: "Matematika (O'zbek)", score: 65.53, percentage: 100, grade: "A", image: "/images/certificates/cert_009.jpg" },
  { name: "Do'stmurodov Muhammad", subject: "Matematika (O'zbek)", score: 63.05, percentage: 97, grade: "B+", image: "/images/certificates/cert_012.jpg" },
  { name: "Umrzoqov Sardorbek", subject: "Matematika (O'zbek)", score: 63.05, percentage: 97, grade: "B+", image: "/images/certificates/cert_020.jpg" },
  { name: "Quvondiqov Shahro'z", subject: "Matematika (O'zbek)", score: 61.34, percentage: 94.37, grade: "B+", image: "/images/certificates/cert_004.jpg" },
  { name: "Mansurov Ixtiyorjon", subject: "Matematika (O'zbek)", score: 61.35, percentage: 94.38, grade: "B+", image: "/images/certificates/cert_014.jpg" },
  { name: "Kamolova Umida", subject: "Matematika (O'zbek)", score: 59.89, percentage: 92.14, grade: "B", image: "/images/certificates/cert_016.jpg" },
  { name: "Xayrullayev Jamshid", subject: "Matematika (O'zbek)", score: 57.18, percentage: 87.97, grade: "B", image: "/images/certificates/cert_008.jpg" },
  { name: "Saidalimov Asliddin", subject: "Matematika (O'zbek)", score: 56.09, percentage: 86.29, grade: "B", image: "/images/certificates/cert_006.jpg" },
  { name: "Abdurahmonova Aziza", subject: "Matematika (O'zbek)", score: 55.49, percentage: 85.37, grade: "B", image: "/images/certificates/cert_010.jpg" },

  // ======== KIMYO (13) ========
  { name: "Sheraliyev Islom", subject: "Kimyo (O'zbek)", score: 74.91, percentage: 100, grade: "A+", image: "/images/certificates/cert_027.jpg" },
  { name: "Sharafov Abbos", subject: "Kimyo (O'zbek)", score: 74.65, percentage: 100, grade: "A+", image: "/images/certificates/cert_026.jpg" },
  { name: "Dustqobilova Aziza", subject: "Kimyo (O'zbek)", score: 72.32, percentage: 100, grade: "A+", image: "/images/certificates/cert_023.jpg" },
  { name: "Tog'aynazarov Shamshodjon", subject: "Kimyo (O'zbek)", score: 67.9, percentage: 100, grade: "A", image: "/images/certificates/cert_029.jpg" },
  { name: "Husanov Oybek", subject: "Kimyo (O'zbek)", score: 67.22, percentage: 100, grade: "A", image: "/images/certificates/cert_025.jpg" },
  { name: "Uzoqova Zarnigor", subject: "Kimyo (O'zbek)", score: 66.75, percentage: 100, grade: "A", image: "/images/certificates/cert_028.jpg" },
  { name: "Abdakimov Azizjon", subject: "Kimyo (O'zbek)", score: 65.56, percentage: 100, grade: "A", image: "/images/certificates/cert_021.jpg" },
  { name: "Abduvohidova Nigina", subject: "Kimyo (O'zbek)", score: 62.93, percentage: 96.82, grade: "B+", image: "/images/certificates/cert_031.jpg" },
  { name: "Rayimov Islomjon", subject: "Kimyo (O'zbek)", score: 61.7, percentage: 94.92, grade: "B+", image: "/images/certificates/cert_033.jpg" },
  { name: "Davirov Bunyodjon", subject: "Kimyo (O'zbek)", score: 61.62, percentage: 94.8, grade: "B+", image: "/images/certificates/cert_030.jpg" },
  { name: "Ismatillayeva Aziza", subject: "Kimyo (O'zbek)", score: 59.97, percentage: 92.26, grade: "B", image: "/images/certificates/cert_024.jpg" },
  { name: "Shuxratova Kumush", subject: "Kimyo (O'zbek)", score: 58.52, percentage: 90.03, grade: "B", image: "/images/certificates/cert_034.jpg" },
  { name: "Nasriddinova Nurgul", subject: "Kimyo (O'zbek)", score: 56.82, percentage: 87.42, grade: "B", image: "/images/certificates/cert_032.jpg" },

  // ======== INGLIZ TILI — CEFR (19) ========
  { name: "Yoqubjonova Muxlisaxon", subject: "Ingliz tili", score: 67, percentage: null, grade: "C1", image: "/images/certificates/cert_057.jpg" },
  { name: "Boltayeva Dilfuzaxon", subject: "Ingliz tili", score: 66, percentage: null, grade: "C1", image: "/images/certificates/cert_062.jpg" },
  { name: "Tursunboyeva Shirmanoy", subject: "Ingliz tili", score: 65, percentage: null, grade: "C1", image: "/images/certificates/cert_035.jpg" },
  { name: "Abdikarimova Rayhona", subject: "Ingliz tili", score: 65, percentage: null, grade: "C1", image: "/images/certificates/cert_039.jpg" },
  { name: "Gulomjonova Muhlisaxon", subject: "Ingliz tili", score: 62, percentage: null, grade: "B2", image: "/images/certificates/cert_043.jpg" },
  { name: "Saydaliyeva Zebiniso", subject: "Ingliz tili", score: 62, percentage: null, grade: "B2", image: "/images/certificates/cert_050.jpg" },
  { name: "Abduqayumova Nilufar", subject: "Ingliz tili", score: 61, percentage: null, grade: "B2", image: "/images/certificates/cert_036.jpg" },
  { name: "Qayumova Sarvinozxon", subject: "Ingliz tili", score: 61, percentage: null, grade: "B2", image: "/images/certificates/cert_053.jpg" },
  { name: "Qurambayeva Munisa", subject: "Ingliz tili", score: 61, percentage: null, grade: "B2", image: "/images/certificates/cert_049.jpg" },
  { name: "Berdiyeva Lobar", subject: "Ingliz tili", score: 59, percentage: null, grade: "B2", image: "/images/certificates/cert_048.jpg" },
  { name: "Raxmatova Madina", subject: "Ingliz tili", score: 58, percentage: null, grade: "B2", image: "/images/certificates/cert_042.jpg" },
  { name: "Asilbekov Kamoliddin", subject: "Ingliz tili", score: 57, percentage: null, grade: "B2", image: "/images/certificates/cert_044.jpg" },
  { name: "O'rozov Shohro'z", subject: "Ingliz tili", score: 57, percentage: null, grade: "B2", image: "/images/certificates/cert_038.jpg" },
  { name: "Nizomov Sanjar", subject: "Ingliz tili", score: 56, percentage: null, grade: "B2", image: "/images/certificates/cert_045.jpg" },
  { name: "Raxmatova Fazilat", subject: "Ingliz tili", score: 54, percentage: null, grade: "B2", image: "/images/certificates/cert_041.jpg" },
  { name: "Ochilova Marjona", subject: "Ingliz tili", score: 54, percentage: null, grade: "B2", image: "/images/certificates/cert_047.jpg" },
  { name: "Raxmatova Zarinaxon", subject: "Ingliz tili", score: 51, percentage: null, grade: "B2", image: "/images/certificates/cert_051.jpg" },
  { name: "Sunnatillayeva Oygul", subject: "Ingliz tili", score: 51, percentage: null, grade: "B2", image: "/images/certificates/cert_037.jpg" },
  { name: "Abdukarimova Hilola", subject: "Ingliz tili", score: 51, percentage: null, grade: "B2", image: "/images/certificates/cert_046.jpg" },

  // ======== TURK TILI — CEFR (20) ========
  { name: "Abralova Dinora", subject: "Turk tili", score: 60, percentage: null, grade: "B2", image: "/images/certificates/cert_068.jpg" },
  { name: "Nosirova Dinora", subject: "Turk tili", score: 58, percentage: null, grade: "B2", image: "/images/certificates/cert_085.jpg" },
  { name: "Qoraqulova Barchinoy", subject: "Turk tili", score: 54, percentage: null, grade: "B2", image: "/images/certificates/cert_064.jpg" },
  { name: "Hasanova Xolida", subject: "Turk tili", score: 52, percentage: null, grade: "B2", image: "/images/certificates/cert_086.jpg" },
  { name: "Akramova Dilbar", subject: "Turk tili", score: 52, percentage: null, grade: "B2", image: "/images/certificates/cert_096.jpg" },
  { name: "Esonboyeva Farangiz", subject: "Turk tili", score: 51, percentage: null, grade: "B2", image: "/images/certificates/cert_066.jpg" },
  { name: "Abdirahmonova Madinabonu", subject: "Turk tili", score: 51, percentage: null, grade: "B2", image: "/images/certificates/cert_072.jpg" },
  { name: "Eshmurodova Saida", subject: "Turk tili", score: 49, percentage: null, grade: "B1", image: "/images/certificates/cert_073.jpg" },
  { name: "Mamirova Xumora", subject: "Turk tili", score: 49, percentage: null, grade: "B1", image: "/images/certificates/cert_082.jpg" },
  { name: "Erkinova Malika", subject: "Turk tili", score: 47, percentage: null, grade: "B1", image: "/images/certificates/cert_063.jpg" },
  { name: "Rustamova Diyora", subject: "Turk tili", score: 47, percentage: null, grade: "B1", image: "/images/certificates/cert_089.jpg" },
  { name: "Pardaboyeva Adiba", subject: "Turk tili", score: 46, percentage: null, grade: "B1", image: "/images/certificates/cert_083.jpg" },
  { name: "Abruyeva Go'zal", subject: "Turk tili", score: 45, percentage: null, grade: "B1", image: "/images/certificates/cert_088.jpg" },
  { name: "Samarova Gulsevar", subject: "Turk tili", score: 44, percentage: null, grade: "B1", image: "/images/certificates/cert_069.jpg" },
  { name: "Orziqulova Marjona", subject: "Turk tili", score: 44, percentage: null, grade: "B1", image: "/images/certificates/cert_080.jpg" },
  { name: "Tirkasheva Asaloy", subject: "Turk tili", score: 43, percentage: null, grade: "B1", image: "/images/certificates/cert_071.jpg" },
  { name: "Barnoyeva Husnida", subject: "Turk tili", score: 43, percentage: null, grade: "B1", image: "/images/certificates/cert_081.jpg" },
  { name: "Abdakimova Aziza", subject: "Turk tili", score: 41, percentage: null, grade: "B1", image: "/images/certificates/cert_084.jpg" },
  { name: "Ziyodullayeva Ruxsora", subject: "Turk tili", score: 38, percentage: null, grade: "B1", image: "/images/certificates/cert_067.jpg" },
  { name: "Baxtiyorova Gulsanam", subject: "Turk tili", score: 38, percentage: null, grade: "B1", image: "/images/certificates/cert_087.jpg" },

  // ======== RUS TILI VA ADABIYOT (3) ========
  { name: "Ulug'bekova Gulzoda", subject: "Rus tili va adabiyot", score: 61.63, percentage: 94.82, grade: "B+", image: "/images/certificates/cert_002.jpg" },
  { name: "Ziyodullayeva Rayhona", subject: "Rus tili va adabiyot", score: 60.96, percentage: 93.78, grade: "B+", image: "/images/certificates/cert_003.jpg" },
  { name: "Muhammadqulova Shalola", subject: "Rus tili va adabiyot", score: 55.6, percentage: 85.54, grade: "B", image: "/images/certificates/cert_001.jpg" },

  // ======== O'ZBEK TILI VA ADABIYOT — Mavjud (19) ========
  { name: "Qaharova Nargiza", subject: "O'zbek tili va adabiyot", score: 66.81, percentage: 100, grade: "A", image: "/images/certificates/Qaharova Nargiza A.png" },
  { name: "Eshto'xtayeva Shabnam", subject: "O'zbek tili va adabiyot", score: 64.94, percentage: 99.91, grade: "B+", image: "/images/certificates/Eshto'xtayeva Shabnam B+.png" },
  { name: "Xolmirzayeva Durdona", subject: "O'zbek tili va adabiyot", score: 64.29, percentage: 98.91, grade: "B+", image: "/images/certificates/Xolmirzayeva Durdona B+.png" },
  { name: "Norboyeva Muborak", subject: "O'zbek tili va adabiyot", score: 63.38, percentage: 97.51, grade: "B+", image: "/images/certificates/Norboyeva Muborak B+.png" },
  { name: "Tirkasheva Mohina", subject: "O'zbek tili va adabiyot", score: 61.43, percentage: 94.51, grade: "B+", image: "/images/certificates/Tirkasheva Mohina B+.png" },
  { name: "Tirkasheva Bahora", subject: "O'zbek tili va adabiyot", score: 61.35, percentage: 94.38, grade: "B+", image: "/images/certificates/Tirkasheva Bahora B+.png" },
  { name: "Mardonova Mohinur", subject: "O'zbek tili va adabiyot", score: 61.30, percentage: 94.31, grade: "B+", image: "/images/certificates/Mardonova Mohinur B+.png" },
  { name: "Erkinova Gulsanam", subject: "O'zbek tili va adabiyot", score: 60.58, percentage: 93.20, grade: "B+", image: "/images/certificates/Erkinova Gulsanam B+.png" },
  { name: "Eliboyeva Zilola", subject: "O'zbek tili va adabiyot", score: 60.11, percentage: 92.48, grade: "B+", image: "/images/certificates/Eliboyeva Zilola B+.png" },
  { name: "Keldiyarova Farangiz", subject: "O'zbek tili va adabiyot", score: 58.73, percentage: 90.35, grade: "B", image: "/images/certificates/Keldiyarova Farangiz B.png" },
  { name: "Qo'chqorova Jasmina", subject: "O'zbek tili va adabiyot", score: 57.86, percentage: 89.02, grade: "B", image: "/images/certificates/Qo'chqorova Jasmina B.png" },
  { name: "Suvanova Farangiz", subject: "O'zbek tili va adabiyot", score: 57.79, percentage: 88.91, grade: "B", image: "/images/certificates/Suvanova Farangiz B.png" },
  { name: "Tolliboyeva Shodiyona", subject: "O'zbek tili va adabiyot", score: 57.51, percentage: 88.48, grade: "B", image: "/images/certificates/Tolliboyeva Shodiyona B.png" },
  { name: "Xoliqulova Zuxra", subject: "O'zbek tili va adabiyot", score: 57.02, percentage: 87.72, grade: "B", image: "/images/certificates/Xoliqulova Zuxra B.png" },
  { name: "Rasulova Shohsanam", subject: "O'zbek tili va adabiyot", score: 56.51, percentage: 86.94, grade: "B", image: "/images/certificates/Rasulova Shohsanam B.png" },
  { name: "Pardaboyeva Marjona", subject: "O'zbek tili va adabiyot", score: 56.29, percentage: 86.60, grade: "B", image: "/images/certificates/Pardaboyeva Marjona B.png" },
  { name: "Xudoyberdiyeva Mushtariybonu", subject: "O'zbek tili va adabiyot", score: 56.05, percentage: 86.23, grade: "B", image: "/images/certificates/Xudoyberdiyeva Mushtariybonu B.png" },
  { name: "Hakimova Bonu", subject: "O'zbek tili va adabiyot", score: 55.41, percentage: 85.25, grade: "B", image: "/images/certificates/Hakimova Bonu B.png" },
  { name: "Ernazarova Ozoda", subject: "O'zbek tili va adabiyot", score: 55.15, percentage: 84.85, grade: "B", image: "/images/certificates/Ernazarova Ozoda B.png" },

  // ======== O'ZBEK TILI VA ADABIYOT — Yangi, Batch 3-4 (21) ========
  { name: "Ochilova Setora", subject: "O'zbek tili va adabiyot", score: 69.59, percentage: 100, grade: "A", image: "/images/certificates/cert_091.jpg" },
  { name: "Abdimajitova Sevara", subject: "O'zbek tili va adabiyot", score: 66.41, percentage: 100, grade: "A", image: "/images/certificates/cert_118.jpg" },
  { name: "Ishniyazova Nargiza", subject: "O'zbek tili va adabiyot", score: 65.96, percentage: 100, grade: "A", image: "/images/certificates/cert_123.jpg" },
  { name: "Boborajabova E'tibor", subject: "O'zbek tili va adabiyot", score: 65.51, percentage: 100, grade: "A", image: "/images/certificates/cert_125.jpg" },
  { name: "Samarova Sitora", subject: "O'zbek tili va adabiyot", score: 65.43, percentage: 100, grade: "A", image: "/images/certificates/cert_114.jpg" },
  { name: "Xursanova Nozanin", subject: "O'zbek tili va adabiyot", score: 61.89, percentage: 95.22, grade: "B+", image: "/images/certificates/cert_112.jpg" },
  { name: "Qirjigitov Dilmurod", subject: "O'zbek tili va adabiyot", score: 61.79, percentage: 95.06, grade: "B+", image: "/images/certificates/cert_115.jpg" },
  { name: "Murodova Muborak", subject: "O'zbek tili va adabiyot", score: 61.53, percentage: 94.66, grade: "B+", image: "/images/certificates/cert_116.jpg" },
  { name: "Xoliqulova Aziza", subject: "O'zbek tili va adabiyot", score: 61.02, percentage: 93.88, grade: "B+", image: "/images/certificates/cert_113.jpg" },
  { name: "Ergashev Abdulazizjon", subject: "O'zbek tili va adabiyot", score: 60.97, percentage: 93.8, grade: "B+", image: "/images/certificates/cert_120.jpg" },
  { name: "Sharifova Dilafro'z", subject: "O'zbek tili va adabiyot", score: 58.56, percentage: 90.09, grade: "B", image: "/images/certificates/cert_119.jpg" },
  { name: "Erjigitova Marjona", subject: "O'zbek tili va adabiyot", score: 56.08, percentage: 86.28, grade: "B", image: "/images/certificates/cert_095.jpg" },
  { name: "Toshniyozova Farangiz", subject: "O'zbek tili va adabiyot", score: 55.83, percentage: 85.89, grade: "B", image: "/images/certificates/cert_097.jpg" },
  { name: "Quvondiqova Umida", subject: "O'zbek tili va adabiyot", score: 54.93, percentage: 84.51, grade: "C+", image: "/images/certificates/cert_117.jpg" },
  { name: "Berdimurodova Shahzoda", subject: "O'zbek tili va adabiyot", score: 54.05, percentage: 83.15, grade: "C+", image: "/images/certificates/cert_093.jpg" },
  { name: "Mahammadiyeva Durdona", subject: "O'zbek tili va adabiyot", score: 54.08, percentage: 83.2, grade: "C+", image: "/images/certificates/cert_094.jpg" },
  { name: "Qodirova Madina", subject: "O'zbek tili va adabiyot", score: 52.86, percentage: 81.32, grade: "C+", image: "/images/certificates/cert_122.jpg" },
  { name: "Turdiyeva Umidabonu", subject: "O'zbek tili va adabiyot", score: 52.78, percentage: 81.2, grade: "C+", image: "/images/certificates/cert_124.jpg" },
  { name: "Xolboyeva Saida", subject: "O'zbek tili va adabiyot", score: 52.0, percentage: 80, grade: "C+", image: "/images/certificates/cert_121.jpg" },
  { name: "Primova Aziza", subject: "O'zbek tili va adabiyot", score: 48.18, percentage: 74.12, grade: "C", image: "/images/certificates/cert_092.jpg" },
  { name: "Abduhakimova Gulsevar", subject: "O'zbek tili va adabiyot", score: 47.84, percentage: 73.6, grade: "C", image: "/images/certificates/cert_090.jpg" },

  // ======== O'ZBEK TILI VA ADABIYOT — Batch 5 (25) ========
  { name: "Lapasova Gulsevar", subject: "O'zbek tili va adabiyot", score: 66.61, percentage: 100, grade: "A", image: "/images/certificates/cert_140.jpg" },
  { name: "Mamatkulova Bibizaxro", subject: "O'zbek tili va adabiyot", score: 66.25, percentage: 100, grade: "A", image: "/images/certificates/cert_149.jpg" },
  { name: "Asatullayeva Surayyo", subject: "O'zbek tili va adabiyot", score: 64.4, percentage: 99.08, grade: "B+", image: "/images/certificates/cert_148.jpg" },
  { name: "Vafoxonov Rahmonjon", subject: "O'zbek tili va adabiyot", score: 63.5, percentage: 97.69, grade: "B+", image: "/images/certificates/cert_127.jpg" },
  { name: "Tohirova Soliha", subject: "O'zbek tili va adabiyot", score: 62.87, percentage: 96.72, grade: "B+", image: "/images/certificates/cert_144.jpg" },
  { name: "Izzatullayeva Gulyora", subject: "O'zbek tili va adabiyot", score: 62.48, percentage: 96.12, grade: "B+", image: "/images/certificates/cert_143.jpg" },
  { name: "Ortiqova Dilshoda", subject: "O'zbek tili va adabiyot", score: 61.66, percentage: 94.86, grade: "B+", image: "/images/certificates/cert_138.jpg" },
  { name: "Tolliboyeva Tulinoy", subject: "O'zbek tili va adabiyot", score: 61.1, percentage: 94, grade: "B+", image: "/images/certificates/cert_141.jpg" },
  { name: "Fayzullayeva Umida", subject: "O'zbek tili va adabiyot", score: 60.33, percentage: 92.82, grade: "B+", image: "/images/certificates/cert_135.jpg" },
  { name: "Nurullayev Azizbek", subject: "O'zbek tili va adabiyot", score: 60.03, percentage: 92.35, grade: "B+", image: "/images/certificates/cert_132.jpg" },
  { name: "Musirmonov Kamol", subject: "O'zbek tili va adabiyot", score: 59.96, percentage: 92.25, grade: "B", image: "/images/certificates/cert_146.jpg" },
  { name: "Niyazova Muxlisa", subject: "O'zbek tili va adabiyot", score: 59.07, percentage: 90.88, grade: "B", image: "/images/certificates/cert_130.jpg" },
  { name: "G'aforov Samandar", subject: "O'zbek tili va adabiyot", score: 59.04, percentage: 90.83, grade: "B", image: "/images/certificates/cert_134.jpg" },
  { name: "Xujonova Lola", subject: "O'zbek tili va adabiyot", score: 58.53, percentage: 90.05, grade: "B", image: "/images/certificates/cert_142.jpg" },
  { name: "Abdusalomov Aslbek", subject: "O'zbek tili va adabiyot", score: 57.71, percentage: 88.78, grade: "B", image: "/images/certificates/cert_129.jpg" },
  { name: "Sindorova Barchinoy", subject: "O'zbek tili va adabiyot", score: 57.36, percentage: 88.25, grade: "B", image: "/images/certificates/cert_128.jpg" },
  { name: "Husanova Gulnoza", subject: "O'zbek tili va adabiyot", score: 56.96, percentage: 87.63, grade: "B", image: "/images/certificates/cert_145.jpg" },
  { name: "Qurbonova Nasiba", subject: "O'zbek tili va adabiyot", score: 56.63, percentage: 87.12, grade: "B", image: "/images/certificates/cert_150.jpg" },
  { name: "Xolmurodova Yodgora", subject: "O'zbek tili va adabiyot", score: 56.12, percentage: 86.34, grade: "B", image: "/images/certificates/cert_147.jpg" },
  { name: "Turdiyev Oybek", subject: "O'zbek tili va adabiyot", score: 56.03, percentage: 86.2, grade: "B", image: "/images/certificates/cert_126.jpg" },
  { name: "Abdullayeva Munisa", subject: "O'zbek tili va adabiyot", score: 55.37, percentage: 85.18, grade: "B", image: "/images/certificates/cert_137.jpg" },
  { name: "Aliqulova Gullola", subject: "O'zbek tili va adabiyot", score: 54.4, percentage: 83.69, grade: "C+", image: "/images/certificates/cert_139.jpg" },
  { name: "Jozilova Shahzoda", subject: "O'zbek tili va adabiyot", score: 52.16, percentage: 80.25, grade: "C+", image: "/images/certificates/cert_131.jpg" },
  { name: "Do'stmurodova Diyora", subject: "O'zbek tili va adabiyot", score: 50.16, percentage: 77.17, grade: "C+", image: "/images/certificates/cert_136.jpg" },
  { name: "Vafaxanova Shaxnoza", subject: "O'zbek tili va adabiyot", score: 48.3, percentage: 74.31, grade: "C", image: "/images/certificates/cert_133.jpg" },

  // ======== O'ZBEK TILI VA ADABIYOT — Batch 6 (25) ========
  { name: "Rashidova Farangiz", subject: "O'zbek tili va adabiyot", score: 67.25, percentage: 100, grade: "A", image: "/images/certificates/cert_156.jpg" },
  { name: "Qoraqulova Norgul", subject: "O'zbek tili va adabiyot", score: 66.56, percentage: 100, grade: "A", image: "/images/certificates/cert_158.jpg" },
  { name: "Narzullayeva Shabona", subject: "O'zbek tili va adabiyot", score: 65.92, percentage: 100, grade: "A", image: "/images/certificates/cert_157.jpg" },
  { name: "Xolmonova Shabbona", subject: "O'zbek tili va adabiyot", score: 65.49, percentage: 100, grade: "A", image: "/images/certificates/cert_159.jpg" },
  { name: "Fayzullayeva Zahro", subject: "O'zbek tili va adabiyot", score: 65.47, percentage: 100, grade: "A", image: "/images/certificates/cert_153.jpg" },
  { name: "Komilova Ruxshona", subject: "O'zbek tili va adabiyot", score: 64.63, percentage: 99.43, grade: "B+", image: "/images/certificates/cert_173.jpg" },
  { name: "Sultonova Sevara", subject: "O'zbek tili va adabiyot", score: 64.99, percentage: 99.98, grade: "B+", image: "/images/certificates/cert_154.jpg" },
  { name: "Mahmudova Sarvara", subject: "O'zbek tili va adabiyot", score: 61.31, percentage: 94.32, grade: "B+", image: "/images/certificates/cert_160.jpg" },
  { name: "Qo'chqorova Mohichehra", subject: "O'zbek tili va adabiyot", score: 61.13, percentage: 94.05, grade: "B+", image: "/images/certificates/cert_152.jpg" },
  { name: "Tog'aynazarov Shamshodjon", subject: "O'zbek tili va adabiyot", score: 59.47, percentage: 91.49, grade: "B", image: "/images/certificates/cert_164.jpg" },
  { name: "Quvondiqov Shahro'z", subject: "O'zbek tili va adabiyot", score: 58.78, percentage: 90.43, grade: "B", image: "/images/certificates/cert_171.jpg" },
  { name: "Oblaqulova Gullola", subject: "O'zbek tili va adabiyot", score: 58.57, percentage: 90.11, grade: "B", image: "/images/certificates/cert_155.jpg" },
  { name: "Abdakimov Azizjon", subject: "O'zbek tili va adabiyot", score: 58.11, percentage: 89.4, grade: "B", image: "/images/certificates/cert_165.jpg" },
  { name: "Tashanova Nigina", subject: "O'zbek tili va adabiyot", score: 57.72, percentage: 88.8, grade: "B", image: "/images/certificates/cert_174.jpg" },
  { name: "Berdimurodova Xumora", subject: "O'zbek tili va adabiyot", score: 57.13, percentage: 87.89, grade: "B", image: "/images/certificates/cert_166.jpg" },
  { name: "Abdusalimova Rayhona", subject: "O'zbek tili va adabiyot", score: 56.36, percentage: 86.71, grade: "B", image: "/images/certificates/cert_167.jpg" },
  { name: "Mahmudov Otabek", subject: "O'zbek tili va adabiyot", score: 55.73, percentage: 85.74, grade: "B", image: "/images/certificates/cert_161.jpg" },
  { name: "G'ofurova Gulchexra", subject: "O'zbek tili va adabiyot", score: 55.32, percentage: 85.11, grade: "B", image: "/images/certificates/cert_169.jpg" },
  { name: "Jo'rayev Sanjar", subject: "O'zbek tili va adabiyot", score: 54.87, percentage: 84.42, grade: "C+", image: "/images/certificates/cert_151.jpg" },
  { name: "Ismatillayeva Zaynab", subject: "O'zbek tili va adabiyot", score: 54.79, percentage: 84.29, grade: "C+", image: "/images/certificates/cert_162.jpg" },
  { name: "Baxtiyarova Marjona", subject: "O'zbek tili va adabiyot", score: 54.11, percentage: 83.25, grade: "C+", image: "/images/certificates/cert_172.jpg" },
  { name: "Alovxonova Malika", subject: "O'zbek tili va adabiyot", score: 53.85, percentage: 82.85, grade: "C+", image: "/images/certificates/cert_170.jpg" },
  { name: "Qahramonov Temurbek", subject: "O'zbek tili va adabiyot", score: 53.47, percentage: 82.26, grade: "C+", image: "/images/certificates/cert_163.jpg" },
  { name: "Rahmatova Shohista", subject: "O'zbek tili va adabiyot", score: 50.64, percentage: 77.91, grade: "C+", image: "/images/certificates/cert_168.jpg" },
  { name: "Jozilova Gulbahor", subject: "O'zbek tili va adabiyot", score: 50.23, percentage: 77.28, grade: "C+", image: "/images/certificates/cert_175.jpg" },

  // ======== O'ZBEK TILI VA ADABIYOT — Batch 7 (26) ========
  { name: "Saydirasulova Laziza", subject: "O'zbek tili va adabiyot", score: 68.2, percentage: 100, grade: "A", image: "/images/certificates/cert_181.jpg" },
  { name: "Oqbutayev Javohir", subject: "O'zbek tili va adabiyot", score: 66.57, percentage: 100, grade: "A", image: "/images/certificates/cert_192.jpg" },
  { name: "Nasirdinova Malika", subject: "O'zbek tili va adabiyot", score: 66.49, percentage: 100, grade: "A", image: "/images/certificates/cert_190.jpg" },
  { name: "Xolmaxammatova Dilshoda", subject: "O'zbek tili va adabiyot", score: 65.84, percentage: 100, grade: "A", image: "/images/certificates/cert_188.jpg" },
  { name: "Ismatillayeva Bahora", subject: "O'zbek tili va adabiyot", score: 65.62, percentage: 100, grade: "A", image: "/images/certificates/cert_186.jpg" },
  { name: "Abdihomidova Charos", subject: "O'zbek tili va adabiyot", score: 64.88, percentage: 99.82, grade: "B+", image: "/images/certificates/cert_182.jpg" },
  { name: "Xo'jaqulova Shabnam", subject: "O'zbek tili va adabiyot", score: 62.2, percentage: 95.69, grade: "B+", image: "/images/certificates/cert_194.jpg" },
  { name: "Mansurova Shahzoda", subject: "O'zbek tili va adabiyot", score: 62.0, percentage: 96.38, grade: "B+", image: "/images/certificates/cert_189.jpg" },
  { name: "Sobirova Zuhra", subject: "O'zbek tili va adabiyot", score: 61.99, percentage: 95.37, grade: "B+", image: "/images/certificates/cert_187.jpg" },
  { name: "Mexriddinova Sevinch", subject: "O'zbek tili va adabiyot", score: 61.61, percentage: 94.78, grade: "B+", image: "/images/certificates/cert_180.jpg" },
  { name: "Amirqulova Nilufar", subject: "O'zbek tili va adabiyot", score: 60.88, percentage: 93.66, grade: "B+", image: "/images/certificates/cert_176.jpg" },
  { name: "Norboyeva Shohsanam", subject: "O'zbek tili va adabiyot", score: 60.48, percentage: 93.05, grade: "B+", image: "/images/certificates/cert_191.jpg" },
  { name: "Nurullayeva Farangiz", subject: "O'zbek tili va adabiyot", score: 60.43, percentage: 92.97, grade: "B+", image: "/images/certificates/cert_184.jpg" },
  { name: "Temirova Zarnigor", subject: "O'zbek tili va adabiyot", score: 64.07, percentage: 98.57, grade: "B+", image: "/images/certificates/cert_197.jpg" },
  { name: "Tolliboyeva Farzona", subject: "O'zbek tili va adabiyot", score: 58.38, percentage: 89.82, grade: "B", image: "/images/certificates/cert_179.jpg" },
  { name: "Djaxparova Rayxona", subject: "O'zbek tili va adabiyot", score: 56.71, percentage: 87.25, grade: "B", image: "/images/certificates/cert_178.jpg" },
  { name: "Mamarasulova Oyjamol", subject: "O'zbek tili va adabiyot", score: 56.45, percentage: 86.85, grade: "B", image: "/images/certificates/cert_195.jpg" },
  { name: "Suyunova Barchinoy", subject: "O'zbek tili va adabiyot", score: 56.28, percentage: 86.58, grade: "B", image: "/images/certificates/cert_196.jpg" },
  { name: "Kenjayeva Dilbar", subject: "O'zbek tili va adabiyot", score: 55.91, percentage: 86.02, grade: "B", image: "/images/certificates/cert_201.jpg" },
  { name: "O'tkirova Nigina", subject: "O'zbek tili va adabiyot", score: 55.73, percentage: 85.74, grade: "B", image: "/images/certificates/cert_177.jpg" },
  { name: "Fayzullayeva Sabina", subject: "O'zbek tili va adabiyot", score: 54.42, percentage: 83.72, grade: "C+", image: "/images/certificates/cert_199.jpg" },
  { name: "Sulaymonova Tursunoy", subject: "O'zbek tili va adabiyot", score: 52.58, percentage: 80.89, grade: "C+", image: "/images/certificates/cert_200.jpg" },
  { name: "Artiqova E'zoza", subject: "O'zbek tili va adabiyot", score: 51.3, percentage: 78.92, grade: "C+", image: "/images/certificates/cert_202.jpg" },
  { name: "Murodova Gulhayo", subject: "O'zbek tili va adabiyot", score: 50.98, percentage: 78.43, grade: "C+", image: "/images/certificates/cert_193.jpg" },
  { name: "Eshonkulova Dilshoda", subject: "O'zbek tili va adabiyot", score: 48.97, percentage: 75.34, grade: "C", image: "/images/certificates/cert_198.jpg" },
  { name: "Ruzimurodov Shohjahon", subject: "O'zbek tili va adabiyot", score: 47.05, percentage: 72.38, grade: "C", image: "/images/certificates/cert_183.jpg" },
];

export const books = [
  { title: "Ona tili: Mukammal tahlil va test", grade: "5-sinf", image: "/images/books/book_209.jpg" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "6-sinf", image: "/images/books/book_204.jpg" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "7-sinf", image: "/images/books/book_203.jpg" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "8-sinf", image: "/images/books/book_206.jpg" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "9-sinf", image: "/images/books/book_210.jpg" },
  { title: "Adabiyot: Testlar to'plami", grade: "5-6-sinflar", image: "/images/books/book_205.jpg" },
  { title: "Adabiyot: Testlar to'plami", grade: "9-10-11-sinflar", image: "/images/books/book_207.jpg" },
  { title: "Adabiyot: Maxsus testlar", grade: "Badiiy asarlar bo'yicha", image: "/images/books/book_208.jpg" },
];

export const subjects = [
  { name: "Matematika", icon: "Calculator" },
  { name: "Fizika", icon: "Atom" },
  { name: "Kimyo", icon: "FlaskConical" },
  { name: "Biologiya", icon: "Dna" },
  { name: "Dasturlash", icon: "Monitor" },
  { name: "Tarix", icon: "ScrollText" },
  { name: "Geografiya", icon: "Globe" },
  { name: "Ona tili va adabiyot", icon: "BookMarked" },
  { name: "Ingliz tili", icon: "Languages" },
  { name: "Rus tili", icon: "LetterText" },
  { name: "Turk tili", icon: "Speech" },
  { name: "SAT", icon: "GraduationCap" },
];

export const faqs = [
  {
    question: "Online darslar bormi?",
    answer: "Ha, biz ham online, ham offline darslar o'tkazamiz. Online darslar Zoom platformasida olib boriladi. Siz o'zingizga qulay bo'lgan formatni tanlashingiz mumkin.",
  },
  {
    question: "Qanday ro'yxatdan o'taman?",
    answer: "Ro'yxatdan o'tish uchun biz bilan bog'laning — telefon qiling, Instagramda yozing yoki saytdagi formani to'ldiring. Sizga 24 soat ichida aloqaga chiqamiz va bepul konsultatsiya o'tkazamiz.",
  },
  {
    question: "Kurslar qachon boshlanadi?",
    answer: "Yangi guruhlar har oyning 1-kuni va 15-kuni ochiladi. Shuningdek, individual darslar istalgan vaqtda boshlanishi mumkin.",
  },
  {
    question: "Qaysi fanlar o'qitiladi?",
    answer: "Barcha o'rta maktab fanlari: Matematika, Fizika, Kimyo, Biologiya, Dasturlash, Tarix, Geografiya, Ona tili va adabiyot, Ingliz tili, Rus tili, Turk tili va SAT.",
  },
];
