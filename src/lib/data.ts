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
  { name: "Sunnatilla Mardiyev", subject: "Biologiya va Kimyo", image: "/images/teachers/sunnatilla_mardiyev.webp" },
  { name: "Boliboyev Shahboz", subject: "Matematika", image: "/images/teachers/boliboyev_shahboz.webp" },
  { name: "Bratov Javohir", subject: "Ingliz tili", image: "/images/teachers/bratov_javohir.webp" },
  { name: "Rahimov Hasan", subject: "Rus tili", image: "/images/teachers/rahimov_hasan.webp" },
  { name: "Aktamov G'iyosiddin", subject: "Ingliz tili", image: "/images/teachers/aktam_giyosiddin.webp" },
  { name: "Po'latov Shamshodbek", subject: "Ingliz tili", image: "/images/teachers/shamshodbek_polatov.webp" },
  { name: "Toshqulov Hasan", subject: "Matematika", image: "/images/teachers/toshqulov_hasan.webp" },
  { name: "Tirkashev Shomansur", subject: "Fizika", image: "/images/teachers/tirkashev_shomansur.webp" },
  { name: "Sharafov Abbos", subject: "Kimyo", image: "/images/teachers/sharafov_abbos.webp" },
  { name: "Oqbutayev Hasan", subject: "Ona tili va adabiyot", image: "/images/teachers/oqbutayev_hasan.webp" },
  { name: "Ibragimova Farangiz", subject: "Ingliz tili va huquq", image: "/images/teachers/ibragimova_farangiz.webp" },
  { name: "Amanov Maqsud", subject: "SAT", image: "/images/teachers/amanov_maqsud.webp" },
  { name: "Muzrobov Abdurahmon", subject: "Turk tili", image: "/images/teachers/muzrobov_abdurahmon.webp" },
  { name: "Boliboyev Shohruz", subject: "Matematika", image: "/images/teachers/boliboyev_shohruz.webp" },
  { name: "Yusupova Dilobar", subject: "Matematika", image: "/images/teachers/dilobar_fazilboy_qizi.webp" },
  { name: "Vafoxonov Rasul", subject: "Ona tili va adabiyot", image: "/images/teachers/vafoxonov_rasul.webp" },
  { name: "Abdulxayeva Zuxra", subject: "Ona tili va adabiyot", image: "/images/teachers/abdulxayeva_zuxra.webp" },
  { name: "Arzimurodov Jo'rabek", subject: "Matematika", image: "/images/teachers/arzimurodov_jorabek.webp" },
  { name: "Berdanov Muxlisjon", subject: "Matematika", image: "/images/teachers/berdanov_muxlisjon.webp" },
  { name: "Xolmurodov Dilshod", subject: "Matematika", image: "/images/teachers/xolmurodov_dilshod.webp" },
  { name: "Hamroyev Abdulaziz", subject: "Matematika", image: "/images/teachers/hamroyev_abdulaziz.webp" },
  { name: "Jabborova Madina", subject: "Ingliz tili", image: "/images/teachers/jabborova_madina.webp" },
  { name: "Normamatova Mo'tabar", subject: "Ona tili va adabiyot", image: "/images/teachers/normamatova_motabar.webp" },
];

export interface CertificateResult {
  name: string;
  subject: string;
  score: number;
  percentage: number | null;
  grade: string;
  image: string;
}

export const certificates: CertificateResult[] = [
  // ======== MATEMATIKA (6) ========
  {
    name: "Rahmatov Zoir",
    subject: "Matematika (O'zbek)",
    score: 76.75,
    percentage: 100,
    grade: "A+",
    image: "/images/certificates/cert_008.webp",
  },
  {
    name: "Saydullayev Muhammadali",
    subject: "Matematika (O'zbek)",
    score: 66.03,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_012.webp",
  },
  {
    name: "Do'stmurodov Muhammad",
    subject: "Matematika (O'zbek)",
    score: 63.05,
    percentage: 97,
    grade: "B+",
    image: "/images/certificates/cert_013.webp",
  },
  {
    name: "Umrzoqov Sardorbek",
    subject: "Matematika (O'zbek)",
    score: 63.05,
    percentage: 97,
    grade: "B+",
    image: "/images/certificates/cert_020.webp",
  },
  {
    name: "Quvondiqov Shahro'z",
    subject: "Matematika (O'zbek)",
    score: 61.34,
    percentage: 94.37,
    grade: "B+",
    image: "/images/certificates/cert_004.webp",
  },
  {
    name: "Mansurov Ixtiyorjon",
    subject: "Matematika (O'zbek)",
    score: 61.35,
    percentage: 94.38,
    grade: "B+",
    image: "/images/certificates/cert_014.webp",
  },

  // ======== KIMYO (10) ========
  {
    name: "Sheraliyev Islom",
    subject: "Kimyo (O'zbek)",
    score: 74.91,
    percentage: 100,
    grade: "A+",
    image: "/images/certificates/cert_027.webp",
  },
  {
    name: "Sharafov Abbos",
    subject: "Kimyo (O'zbek)",
    score: 74.65,
    percentage: 100,
    grade: "A+",
    image: "/images/certificates/cert_026.webp",
  },
  {
    name: "Dustqobilova Aziza",
    subject: "Kimyo (O'zbek)",
    score: 72.32,
    percentage: 100,
    grade: "A+",
    image: "/images/certificates/cert_023.webp",
  },
  {
    name: "Tog'aynazarov Shamshodjon",
    subject: "Kimyo (O'zbek)",
    score: 67.9,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_029.webp",
  },
  {
    name: "Husanov Oybek",
    subject: "Kimyo (O'zbek)",
    score: 67.22,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_025.webp",
  },
  {
    name: "Uzoqova Zarnigor",
    subject: "Kimyo (O'zbek)",
    score: 66.75,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_028.webp",
  },
  {
    name: "Abdakimov Azizjon",
    subject: "Kimyo (O'zbek)",
    score: 65.56,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_022.webp",
  },
  {
    name: "Abduvohidova Nigina",
    subject: "Kimyo (O'zbek)",
    score: 62.93,
    percentage: 96.82,
    grade: "B+",
    image: "/images/certificates/cert_031.webp",
  },
  {
    name: "Rayimov Islomjon",
    subject: "Kimyo (O'zbek)",
    score: 61.7,
    percentage: 94.92,
    grade: "B+",
    image: "/images/certificates/cert_033.webp",
  },
  {
    name: "Davirov Bunyodjon",
    subject: "Kimyo (O'zbek)",
    score: 61.62,
    percentage: 94.8,
    grade: "B+",
    image: "/images/certificates/cert_030.webp",
  },

  // ======== RUS TILI VA ADABIYOT (2) ========
  {
    name: "Ulug'bekova Gulzoda",
    subject: "Rus tili va adabiyot",
    score: 61.63,
    percentage: 94.82,
    grade: "B+",
    image: "/images/certificates/cert_002.webp",
  },
  {
    name: "Ziyodullayeva Rayhona",
    subject: "Rus tili va adabiyot",
    score: 60.96,
    percentage: 93.78,
    grade: "B+",
    image: "/images/certificates/cert_003.webp",
  },

  // ======== O'ZBEK TILI VA ADABIYOT (24) ========
  {
    name: "Ochilova Setora",
    subject: "O'zbek tili va adabiyot",
    score: 69.59,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_092.webp",
  },
  {
    name: "Rashidova Farangiz",
    subject: "O'zbek tili va adabiyot",
    score: 67.25,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_156.webp",
  },
  {
    name: "Qaharova Nargiza",
    subject: "O'zbek tili va adabiyot",
    score: 66.81,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/Qaharova Nargiza A.webp",
  },
  {
    name: "Abdimajitova Sevara",
    subject: "O'zbek tili va adabiyot",
    score: 66.41,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_118.webp",
  },
  {
    name: "Ishniyazova Nargiza",
    subject: "O'zbek tili va adabiyot",
    score: 65.96,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_123.webp",
  },
  {
    name: "Xolmaxammatova Dilshoda",
    subject: "O'zbek tili va adabiyot",
    score: 65.84,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_188.webp",
  },
  {
    name: "Xolmonova Shabbona",
    subject: "O'zbek tili va adabiyot",
    score: 65.49,
    percentage: 100,
    grade: "A",
    image: "/images/certificates/cert_159.webp",
  },
  {
    name: "Eshto'xtayeva Shabnam",
    subject: "O'zbek tili va adabiyot",
    score: 64.94,
    percentage: 99.91,
    grade: "B+",
    image: "/images/certificates/Eshto'xtayeva Shabnam B+.webp",
  },
  {
    name: "Abdihomidova Charos",
    subject: "O'zbek tili va adabiyot",
    score: 64.88,
    percentage: 99.82,
    grade: "B+",
    image: "/images/certificates/cert_182.webp",
  },
  {
    name: "Xolmirzayeva Durdona",
    subject: "O'zbek tili va adabiyot",
    score: 64.29,
    percentage: 98.91,
    grade: "B+",
    image: "/images/certificates/Xolmirzayeva Durdona B+.webp",
  },
  {
    name: "Vafoxonov Rahmonjon",
    subject: "O'zbek tili va adabiyot",
    score: 63.5,
    percentage: 97.69,
    grade: "B+",
    image: "/images/certificates/cert_127.webp",
  },
  {
    name: "Norboyeva Muborak",
    subject: "O'zbek tili va adabiyot",
    score: 63.38,
    percentage: 97.51,
    grade: "B+",
    image: "/images/certificates/Norboyeva Muborak B+.webp",
  },
  {
    name: "Mansurova Shahzoda",
    subject: "O'zbek tili va adabiyot",
    score: 62.0,
    percentage: 96.38,
    grade: "B+",
    image: "/images/certificates/cert_189.webp",
  },
  {
    name: "Xursanova Nozanin",
    subject: "O'zbek tili va adabiyot",
    score: 61.89,
    percentage: 95.22,
    grade: "B+",
    image: "/images/certificates/cert_112.webp",
  },
  {
    name: "Tirkasheva Mohina",
    subject: "O'zbek tili va adabiyot",
    score: 61.43,
    percentage: 94.51,
    grade: "B+",
    image: "/images/certificates/Tirkasheva Mohina B+.webp",
  },
  {
    name: "Tirkasheva Bahora",
    subject: "O'zbek tili va adabiyot",
    score: 61.35,
    percentage: 94.38,
    grade: "B+",
    image: "/images/certificates/Tirkasheva Bahora B+.webp",
  },
  {
    name: "Mardonova Mohinur",
    subject: "O'zbek tili va adabiyot",
    score: 61.3,
    percentage: 94.31,
    grade: "B+",
    image: "/images/certificates/Mardonova Mohinur B+.webp",
  },
  {
    name: "Qo'chqorova Mohichehra",
    subject: "O'zbek tili va adabiyot",
    score: 61.13,
    percentage: 94.05,
    grade: "B+",
    image: "/images/certificates/cert_152.webp",
  },
  {
    name: "Amirqulova Nilufar",
    subject: "O'zbek tili va adabiyot",
    score: 60.88,
    percentage: 93.66,
    grade: "B+",
    image: "/images/certificates/cert_176.webp",
  },
  {
    name: "Erkinova Gulsanam",
    subject: "O'zbek tili va adabiyot",
    score: 60.58,
    percentage: 93.2,
    grade: "B+",
    image: "/images/certificates/Erkinova Gulsanam B+.webp",
  },
  {
    name: "Norboyeva Shohsanam",
    subject: "O'zbek tili va adabiyot",
    score: 60.48,
    percentage: 93.05,
    grade: "B+",
    image: "/images/certificates/cert_191.webp",
  },
  {
    name: "Nurullayeva Farangiz",
    subject: "O'zbek tili va adabiyot",
    score: 60.43,
    percentage: 92.97,
    grade: "B+",
    image: "/images/certificates/cert_184.webp",
  },
  {
    name: "Eliboyeva Zilola",
    subject: "O'zbek tili va adabiyot",
    score: 60.11,
    percentage: 92.48,
    grade: "B+",
    image: "/images/certificates/Eliboyeva Zilola B+.webp",
  },
  {
    name: "Nurullayev Azizbek",
    subject: "O'zbek tili va adabiyot",
    score: 60.03,
    percentage: 92.35,
    grade: "B+",
    image: "/images/certificates/cert_132.webp",
  },
];

export const books = [
  {
    title: "Ona tili: Mukammal tahlil va test",
    grade: "5-sinf",
    image: "/images/books/book_209.webp",
  },
  {
    title: "Ona tili: Mukammal tahlil va test",
    grade: "6-sinf",
    image: "/images/books/book_204.webp",
  },
  {
    title: "Ona tili: Mukammal tahlil va test",
    grade: "7-sinf",
    image: "/images/books/book_203.webp",
  },
  {
    title: "Ona tili: Mukammal tahlil va test",
    grade: "8-sinf",
    image: "/images/books/book_206.webp",
  },
  {
    title: "Ona tili: Mukammal tahlil va test",
    grade: "9-sinf",
    image: "/images/books/book_210.webp",
  },
  {
    title: "Adabiyot: Testlar to'plami",
    grade: "5-6-sinflar",
    image: "/images/books/book_205.webp",
  },
  {
    title: "Adabiyot: Testlar to'plami",
    grade: "9-10-11-sinflar",
    image: "/images/books/book_207.webp",
  },
  {
    title: "Adabiyot: Maxsus testlar",
    grade: "Badiiy asarlar bo'yicha",
    image: "/images/books/book_208.webp",
  },
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
    answer:
      "Ha, biz ham online, ham offline darslar o'tkazamiz. Online darslar Zoom platformasida olib boriladi. Siz o'zingizga qulay bo'lgan formatni tanlashingiz mumkin.",
  },
  {
    question: "Qanday ro'yxatdan o'taman?",
    answer:
      "Ro'yxatdan o'tish uchun biz bilan bog'laning — telefon qiling, Instagramda yozing yoki saytdagi formani to'ldiring. Sizga 24 soat ichida aloqaga chiqamiz va bepul konsultatsiya o'tkazamiz.",
  },
  {
    question: "Kurslar qachon boshlanadi?",
    answer:
      "Yangi guruhlar har oyning 1-kuni va 15-kuni ochiladi. Shuningdek, individual darslar istalgan vaqtda boshlanishi mumkin.",
  },
  {
    question: "Qaysi fanlar o'qitiladi?",
    answer:
      "Barcha o'rta maktab fanlari: Matematika, Fizika, Kimyo, Biologiya, Dasturlash, Tarix, Geografiya, Ona tili va adabiyot, Ingliz tili, Rus tili, Turk tili va SAT.",
  },
];
