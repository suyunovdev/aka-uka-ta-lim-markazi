export const siteConfig = {
  name: "Aka-Uka Ta'lim Markazi",
  slogan: "Kelajagingizni biz bilan quring",
  mission: "Maqsadimiz — sizni natijaga olib chiqish",
  phone: "+998 94 804 06 26",
  phoneRaw: "+998948040626",
  instagram: "@akauka_markazi",
  instagramUrl: "https://instagram.com/akauka_markazi",
  telegram: "@Aka_ukalarmarkazi",
  telegramUrl: "https://t.me/Aka_ukalarmarkazi",
  youtube: "https://youtu.be/IOwTEQQk5kU",
  address: "Ishtixon tumani",
  workingHours: "Dushanba – Shanba, 8:00 – 20:00",
  email: "",
};

export interface Teacher {
  name: string;
  subject: string;
  image: string;
}

export const teachers: Teacher[] = [
  { name: "Vafoxonov Rahmonjon", subject: "Ona tili va adabiyot", image: "/images/teachers/vafoxonov_rahmonjon.webp" },
  { name: "Sunnatulla Mardiyev", subject: "Biologiya va Kimyo", image: "/images/teachers/sunnatulla_mardiyev.webp" },
  { name: "Boliboyev Shahboz", subject: "Matematika", image: "/images/teachers/boliboyev_shahboz.webp" },
  { name: "Baratov Javohir", subject: "Ingliz tili", image: "/images/teachers/baratov_javohir.webp" },
  { name: "Rahimov Hasan", subject: "Rus tili", image: "/images/teachers/rahimov_hasan.webp" },
  { name: "Aktamov G'iyosiddin", subject: "Ingliz tili", image: "/images/teachers/aktamov_giyosiddin.webp" },
  { name: "Po'latov Shamshodbek", subject: "Ingliz tili", image: "/images/teachers/polatov_shamshodbek.webp" },
  { name: "Toshqulov Hasan", subject: "Matematika", image: "/images/teachers/toshqulov_hasan.webp" },
  { name: "Tirkashev Shomansur", subject: "Fizika", image: "/images/teachers/tirkashev_shomansur.webp" },
  { name: "Sharafov Abbos", subject: "Kimyo", image: "/images/teachers/sharafov_abbos.webp" },
  { name: "Oqbutayev Javohir", subject: "Ona tili va adabiyot", image: "/images/teachers/oqbutayev_javohir.webp" },
  { name: "Ibragimova Farangiz", subject: "Ingliz tili va huquq", image: "/images/teachers/ibragimova_farangiz.webp" },
  { name: "Amanov Maqsud", subject: "SAT", image: "/images/teachers/amanov_maqsud.webp" },
  { name: "Muzrabov Abdurahmon", subject: "Turk tili", image: "/images/teachers/muzrabov_abdurahmon.webp" },
  { name: "Boliboyev Shohruz", subject: "Matematika", image: "/images/teachers/boliboyev_shohruz.webp" },
  { name: "Yusupova Dilobar", subject: "Matematika", image: "/images/teachers/yusupova_dilobar.webp" },
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
  // ======== MATEMATIKA (8) ========
  { name: "Rahmatov Zoir", subject: "Matematika (O'zbek)", score: 76.75, percentage: 100, grade: "A+", image: "/images/certificates/cert_008.webp" },
  { name: "Saydullayev Muhammadali", subject: "Matematika (O'zbek)", score: 66.03, percentage: 100, grade: "A", image: "/images/certificates/cert_012.webp" },
  { name: "Do'stmurodov Muhammad", subject: "Matematika (O'zbek)", score: 63.05, percentage: 97, grade: "B+", image: "/images/certificates/cert_013.webp" },
  { name: "Umrzoqov Sardorbek", subject: "Matematika (O'zbek)", score: 63.05, percentage: 97, grade: "B+", image: "/images/certificates/cert_020.webp" },
  { name: "Quvondiqov Shahro'z", subject: "Matematika (O'zbek)", score: 61.34, percentage: 94.37, grade: "B+", image: "/images/certificates/cert_004.webp" },
  { name: "Mansurov Ixtiyorjon", subject: "Matematika (O'zbek)", score: 61.35, percentage: 94.38, grade: "B+", image: "/images/certificates/cert_014.webp" },
  { name: "Xayrullayev Jamshid", subject: "Matematika (O'zbek)", score: 57.18, percentage: 87.97, grade: "B", image: "/images/certificates/cert_009.webp" },
  { name: "Abdurahmonova Aziza", subject: "Matematika (O'zbek)", score: 55.49, percentage: 85.37, grade: "B", image: "/images/certificates/cert_011.webp" },

  // ======== KIMYO (13) ========
  { name: "Sheraliyev Islom", subject: "Kimyo (O'zbek)", score: 74.91, percentage: 100, grade: "A+", image: "/images/certificates/cert_027.webp" },
  { name: "Sharafov Abbos", subject: "Kimyo (O'zbek)", score: 74.65, percentage: 100, grade: "A+", image: "/images/certificates/cert_026.webp" },
  { name: "Dustqobilova Aziza", subject: "Kimyo (O'zbek)", score: 72.32, percentage: 100, grade: "A+", image: "/images/certificates/cert_023.webp" },
  { name: "Tog'aynazarov Shamshodjon", subject: "Kimyo (O'zbek)", score: 67.9, percentage: 100, grade: "A", image: "/images/certificates/cert_029.webp" },
  { name: "Husanov Oybek", subject: "Kimyo (O'zbek)", score: 67.22, percentage: 100, grade: "A", image: "/images/certificates/cert_025.webp" },
  { name: "Uzoqova Zarnigor", subject: "Kimyo (O'zbek)", score: 66.75, percentage: 100, grade: "A", image: "/images/certificates/cert_028.webp" },
  { name: "Abdakimov Azizjon", subject: "Kimyo (O'zbek)", score: 65.56, percentage: 100, grade: "A", image: "/images/certificates/cert_022.webp" },
  { name: "Abduvohidova Nigina", subject: "Kimyo (O'zbek)", score: 62.93, percentage: 96.82, grade: "B+", image: "/images/certificates/cert_031.webp" },
  { name: "Rayimov Islomjon", subject: "Kimyo (O'zbek)", score: 61.7, percentage: 94.92, grade: "B+", image: "/images/certificates/cert_033.webp" },
  { name: "Davirov Bunyodjon", subject: "Kimyo (O'zbek)", score: 61.62, percentage: 94.8, grade: "B+", image: "/images/certificates/cert_030.webp" },
  { name: "Ismatillayeva Aziza", subject: "Kimyo (O'zbek)", score: 59.97, percentage: 92.26, grade: "B", image: "/images/certificates/cert_024.webp" },
  { name: "Shuxratova Kumush", subject: "Kimyo (O'zbek)", score: 58.52, percentage: 90.03, grade: "B", image: "/images/certificates/cert_034.webp" },
  { name: "Nasriddinova Nurgul", subject: "Kimyo (O'zbek)", score: 56.82, percentage: 87.42, grade: "B", image: "/images/certificates/cert_032.webp" },

  // ======== INGLIZ TILI — CEFR (13) ========
  { name: "Yoqubjonova Muxlisaxon", subject: "Ingliz tili", score: 67, percentage: null, grade: "C1", image: "/images/certificates/cert_057.webp" },
  { name: "Tursunboyeva Shirmanoy", subject: "Ingliz tili", score: 65, percentage: null, grade: "C1", image: "/images/certificates/cert_035.webp" },
  { name: "Abdikarimova Rayhona", subject: "Ingliz tili", score: 65, percentage: null, grade: "C1", image: "/images/certificates/cert_039.webp" },
  { name: "Abduqayumova Nilufar", subject: "Ingliz tili", score: 61, percentage: null, grade: "B2", image: "/images/certificates/cert_036.webp" },
  { name: "Asilbekov Kamoliddin", subject: "Ingliz tili", score: 57, percentage: null, grade: "B2", image: "/images/certificates/cert_044.webp" },
  { name: "O'rozov Shohro'z", subject: "Ingliz tili", score: 57, percentage: null, grade: "B2", image: "/images/certificates/cert_038.webp" },
  { name: "Nizomov Sanjar", subject: "Ingliz tili", score: 56, percentage: null, grade: "B2", image: "/images/certificates/cert_045.webp" },
  { name: "Ochilova Marjona", subject: "Ingliz tili", score: 54, percentage: null, grade: "B2", image: "/images/certificates/cert_047.webp" },
  { name: "Sunnatillayeva Oygul", subject: "Ingliz tili", score: 51, percentage: null, grade: "B2", image: "/images/certificates/cert_037.webp" },
  { name: "Abdukarimova Hilola", subject: "Ingliz tili", score: 51, percentage: null, grade: "B2", image: "/images/certificates/cert_046.webp" },

  // ======== TURK TILI — CEFR (7) ========
  { name: "Hasanova Xolida", subject: "Turk tili", score: 52, percentage: null, grade: "B2", image: "/images/certificates/cert_086.webp" },
  { name: "Rustamova Diyora", subject: "Turk tili", score: 47, percentage: null, grade: "B1", image: "/images/certificates/cert_089.webp" },
  { name: "Pardaboyeva Adiba", subject: "Turk tili", score: 46, percentage: null, grade: "B1", image: "/images/certificates/cert_083.webp" },
  { name: "Samarova Gulsevar", subject: "Turk tili", score: 44, percentage: null, grade: "B1", image: "/images/certificates/cert_069.webp" },
  { name: "Orziqulova Marjona", subject: "Turk tili", score: 44, percentage: null, grade: "B1", image: "/images/certificates/cert_080.webp" },
  { name: "Ziyodullayeva Ruxsora", subject: "Turk tili", score: 38, percentage: null, grade: "B1", image: "/images/certificates/cert_067.webp" },

  // ======== RUS TILI VA ADABIYOT (3) ========
  { name: "Ulug'bekova Gulzoda", subject: "Rus tili va adabiyot", score: 61.63, percentage: 94.82, grade: "B+", image: "/images/certificates/cert_002.webp" },
  { name: "Ziyodullayeva Rayhona", subject: "Rus tili va adabiyot", score: 60.96, percentage: 93.78, grade: "B+", image: "/images/certificates/cert_003.webp" },
  { name: "Muhammadqulova Shalola", subject: "Rus tili va adabiyot", score: 55.6, percentage: 85.54, grade: "B", image: "/images/certificates/cert_001.webp" },

  // ======== O'ZBEK TILI VA ADABIYOT — Mavjud (19) ========
  { name: "Qaharova Nargiza", subject: "O'zbek tili va adabiyot", score: 66.81, percentage: 100, grade: "A", image: "/images/certificates/Qaharova Nargiza A.webp" },
  { name: "Eshto'xtayeva Shabnam", subject: "O'zbek tili va adabiyot", score: 64.94, percentage: 99.91, grade: "B+", image: "/images/certificates/Eshto'xtayeva Shabnam B+.webp" },
  { name: "Xolmirzayeva Durdona", subject: "O'zbek tili va adabiyot", score: 64.29, percentage: 98.91, grade: "B+", image: "/images/certificates/Xolmirzayeva Durdona B+.webp" },
  { name: "Norboyeva Muborak", subject: "O'zbek tili va adabiyot", score: 63.38, percentage: 97.51, grade: "B+", image: "/images/certificates/Norboyeva Muborak B+.webp" },
  { name: "Tirkasheva Mohina", subject: "O'zbek tili va adabiyot", score: 61.43, percentage: 94.51, grade: "B+", image: "/images/certificates/Tirkasheva Mohina B+.webp" },
  { name: "Tirkasheva Bahora", subject: "O'zbek tili va adabiyot", score: 61.35, percentage: 94.38, grade: "B+", image: "/images/certificates/Tirkasheva Bahora B+.webp" },
  { name: "Mardonova Mohinur", subject: "O'zbek tili va adabiyot", score: 61.30, percentage: 94.31, grade: "B+", image: "/images/certificates/Mardonova Mohinur B+.webp" },
  { name: "Erkinova Gulsanam", subject: "O'zbek tili va adabiyot", score: 60.58, percentage: 93.20, grade: "B+", image: "/images/certificates/Erkinova Gulsanam B+.webp" },
  { name: "Eliboyeva Zilola", subject: "O'zbek tili va adabiyot", score: 60.11, percentage: 92.48, grade: "B+", image: "/images/certificates/Eliboyeva Zilola B+.webp" },
  { name: "Keldiyarova Farangiz", subject: "O'zbek tili va adabiyot", score: 58.73, percentage: 90.35, grade: "B", image: "/images/certificates/Keldiyarova Farangiz B.webp" },
  { name: "Qo'chqorova Jasmina", subject: "O'zbek tili va adabiyot", score: 57.86, percentage: 89.02, grade: "B", image: "/images/certificates/Qo'chqorova Jasmina B.webp" },
  { name: "Suvanova Farangiz", subject: "O'zbek tili va adabiyot", score: 57.79, percentage: 88.91, grade: "B", image: "/images/certificates/Suvanova Farangiz B.webp" },
  { name: "Tolliboyeva Shodiyona", subject: "O'zbek tili va adabiyot", score: 57.51, percentage: 88.48, grade: "B", image: "/images/certificates/Tolliboyeva Shodiyona B.webp" },
  { name: "Xoliqulova Zuxra", subject: "O'zbek tili va adabiyot", score: 57.02, percentage: 87.72, grade: "B", image: "/images/certificates/Xoliqulova Zuxra B.webp" },
  { name: "Rasulova Shohsanam", subject: "O'zbek tili va adabiyot", score: 56.51, percentage: 86.94, grade: "B", image: "/images/certificates/Rasulova Shohsanam B.webp" },
  { name: "Pardaboyeva Marjona", subject: "O'zbek tili va adabiyot", score: 56.29, percentage: 86.60, grade: "B", image: "/images/certificates/Pardaboyeva Marjona B.webp" },
  { name: "Xudoyberdiyeva Mushtariybonu", subject: "O'zbek tili va adabiyot", score: 56.05, percentage: 86.23, grade: "B", image: "/images/certificates/Xudoyberdiyeva Mushtariybonu B.webp" },
  { name: "Hakimova Bonu", subject: "O'zbek tili va adabiyot", score: 55.41, percentage: 85.25, grade: "B", image: "/images/certificates/Hakimova Bonu B.webp" },
  { name: "Ernazarova Ozoda", subject: "O'zbek tili va adabiyot", score: 55.15, percentage: 84.85, grade: "B", image: "/images/certificates/Ernazarova Ozoda B.webp" },

  // ======== O'ZBEK TILI VA ADABIYOT — Yangi, Batch 3-4 (12) ========
  { name: "Ochilova Setora", subject: "O'zbek tili va adabiyot", score: 69.59, percentage: 100, grade: "A", image: "/images/certificates/cert_092.webp" },
  { name: "Abdimajitova Sevara", subject: "O'zbek tili va adabiyot", score: 66.41, percentage: 100, grade: "A", image: "/images/certificates/cert_118.webp" },
  { name: "Ishniyazova Nargiza", subject: "O'zbek tili va adabiyot", score: 65.96, percentage: 100, grade: "A", image: "/images/certificates/cert_123.webp" },
  { name: "Xursanova Nozanin", subject: "O'zbek tili va adabiyot", score: 61.89, percentage: 95.22, grade: "B+", image: "/images/certificates/cert_112.webp" },
  { name: "Sharifova Dilafro'z", subject: "O'zbek tili va adabiyot", score: 58.56, percentage: 90.09, grade: "B", image: "/images/certificates/cert_119.webp" },
  { name: "Erjigitova Marjona", subject: "O'zbek tili va adabiyot", score: 56.08, percentage: 86.28, grade: "B", image: "/images/certificates/cert_096.webp" },
  { name: "Toshniyozova Farangiz", subject: "O'zbek tili va adabiyot", score: 55.83, percentage: 85.89, grade: "B", image: "/images/certificates/cert_097.webp" },
  { name: "Berdimurodova Shahzoda", subject: "O'zbek tili va adabiyot", score: 54.05, percentage: 83.15, grade: "C+", image: "/images/certificates/cert_094.webp" },
  { name: "Mahammadiyeva Durdona", subject: "O'zbek tili va adabiyot", score: 54.08, percentage: 83.2, grade: "C+", image: "/images/certificates/cert_095.webp" },
  { name: "Qodirova Madina", subject: "O'zbek tili va adabiyot", score: 52.86, percentage: 81.32, grade: "C+", image: "/images/certificates/cert_122.webp" },
  { name: "Primova Aziza", subject: "O'zbek tili va adabiyot", score: 48.18, percentage: 74.12, grade: "C", image: "/images/certificates/cert_093.webp" },
  { name: "Abduhakimova Gulsevar", subject: "O'zbek tili va adabiyot", score: 47.84, percentage: 73.6, grade: "C", image: "/images/certificates/cert_091.webp" },

  // ======== O'ZBEK TILI VA ADABIYOT — Batch 5 (8) ========
  { name: "Vafoxonov Rahmonjon", subject: "O'zbek tili va adabiyot", score: 63.5, percentage: 97.69, grade: "B+", image: "/images/certificates/cert_127.webp" },
  { name: "Nurullayev Azizbek", subject: "O'zbek tili va adabiyot", score: 60.03, percentage: 92.35, grade: "B+", image: "/images/certificates/cert_132.webp" },
  { name: "Niyazova Muxlisa", subject: "O'zbek tili va adabiyot", score: 59.07, percentage: 90.88, grade: "B", image: "/images/certificates/cert_130.webp" },
  { name: "Xujonova Lola", subject: "O'zbek tili va adabiyot", score: 58.53, percentage: 90.05, grade: "B", image: "/images/certificates/cert_142.webp" },
  { name: "Abdusalomov Aslbek", subject: "O'zbek tili va adabiyot", score: 57.71, percentage: 88.78, grade: "B", image: "/images/certificates/cert_129.webp" },
  { name: "Xolmurodova Yodgora", subject: "O'zbek tili va adabiyot", score: 56.12, percentage: 86.34, grade: "B", image: "/images/certificates/cert_147.webp" },
  { name: "Abdullayeva Munisa", subject: "O'zbek tili va adabiyot", score: 55.37, percentage: 85.18, grade: "B", image: "/images/certificates/cert_137.webp" },
  { name: "Jozilova Shahzoda", subject: "O'zbek tili va adabiyot", score: 52.16, percentage: 80.25, grade: "C+", image: "/images/certificates/cert_131.webp" },

  // ======== O'ZBEK TILI VA ADABIYOT — Batch 6 (7) ========
  { name: "Rashidova Farangiz", subject: "O'zbek tili va adabiyot", score: 67.25, percentage: 100, grade: "A", image: "/images/certificates/cert_156.webp" },
  { name: "Xolmonova Shabbona", subject: "O'zbek tili va adabiyot", score: 65.49, percentage: 100, grade: "A", image: "/images/certificates/cert_159.webp" },
  { name: "Qo'chqorova Mohichehra", subject: "O'zbek tili va adabiyot", score: 61.13, percentage: 94.05, grade: "B+", image: "/images/certificates/cert_152.webp" },
  { name: "Berdimurodova Xumora", subject: "O'zbek tili va adabiyot", score: 57.13, percentage: 87.89, grade: "B", image: "/images/certificates/cert_166.webp" },
  { name: "Mahmudov Otabek", subject: "O'zbek tili va adabiyot", score: 55.73, percentage: 85.74, grade: "B", image: "/images/certificates/cert_161.webp" },
  { name: "Baxtiyarova Marjona", subject: "O'zbek tili va adabiyot", score: 54.11, percentage: 83.25, grade: "C+", image: "/images/certificates/cert_172.webp" },
  { name: "Alovxonova Malika", subject: "O'zbek tili va adabiyot", score: 53.85, percentage: 82.85, grade: "C+", image: "/images/certificates/cert_170.webp" },

  // ======== O'ZBEK TILI VA ADABIYOT — Batch 7 (12) ========
  { name: "Xolmaxammatova Dilshoda", subject: "O'zbek tili va adabiyot", score: 65.84, percentage: 100, grade: "A", image: "/images/certificates/cert_188.webp" },
  { name: "Abdihomidova Charos", subject: "O'zbek tili va adabiyot", score: 64.88, percentage: 99.82, grade: "B+", image: "/images/certificates/cert_182.webp" },
  { name: "Mansurova Shahzoda", subject: "O'zbek tili va adabiyot", score: 62.0, percentage: 96.38, grade: "B+", image: "/images/certificates/cert_189.webp" },
  { name: "Amirqulova Nilufar", subject: "O'zbek tili va adabiyot", score: 60.88, percentage: 93.66, grade: "B+", image: "/images/certificates/cert_176.webp" },
  { name: "Norboyeva Shohsanam", subject: "O'zbek tili va adabiyot", score: 60.48, percentage: 93.05, grade: "B+", image: "/images/certificates/cert_191.webp" },
  { name: "Nurullayeva Farangiz", subject: "O'zbek tili va adabiyot", score: 60.43, percentage: 92.97, grade: "B+", image: "/images/certificates/cert_184.webp" },
  { name: "Kenjayeva Dilbar", subject: "O'zbek tili va adabiyot", score: 55.91, percentage: 86.02, grade: "B", image: "/images/certificates/cert_201.webp" },
  { name: "Fayzullayeva Sabina", subject: "O'zbek tili va adabiyot", score: 54.42, percentage: 83.72, grade: "C+", image: "/images/certificates/cert_199.webp" },
  { name: "Artiqova E'zoza", subject: "O'zbek tili va adabiyot", score: 51.3, percentage: 78.92, grade: "C+", image: "/images/certificates/cert_202.webp" },
  { name: "Murodova Gulhayo", subject: "O'zbek tili va adabiyot", score: 50.98, percentage: 78.43, grade: "C+", image: "/images/certificates/cert_193.webp" },
  { name: "Eshonkulova Dilshoda", subject: "O'zbek tili va adabiyot", score: 48.97, percentage: 75.34, grade: "C", image: "/images/certificates/cert_198.webp" },
  { name: "Ruzimurodov Shohjahon", subject: "O'zbek tili va adabiyot", score: 47.05, percentage: 72.38, grade: "C", image: "/images/certificates/cert_183.webp" },
];

export const books = [
  { title: "Ona tili: Mukammal tahlil va test", grade: "5-sinf", image: "/images/books/book_209.webp" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "6-sinf", image: "/images/books/book_204.webp" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "7-sinf", image: "/images/books/book_203.webp" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "8-sinf", image: "/images/books/book_206.webp" },
  { title: "Ona tili: Mukammal tahlil va test", grade: "9-sinf", image: "/images/books/book_210.webp" },
  { title: "Adabiyot: Testlar to'plami", grade: "5-6-sinflar", image: "/images/books/book_205.webp" },
  { title: "Adabiyot: Testlar to'plami", grade: "9-10-11-sinflar", image: "/images/books/book_207.webp" },
  { title: "Adabiyot: Maxsus testlar", grade: "Badiiy asarlar bo'yicha", image: "/images/books/book_208.webp" },
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
