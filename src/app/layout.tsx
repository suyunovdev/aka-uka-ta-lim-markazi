import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { faqs } from "@/lib/data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akaukalarmarkazi.uz"),
  title: {
    default:
      "Aka-Uka Ta'lim Markazi — Sertifikat imtihonlariga tayyorgarlik | Ishtixon, Samarqand",
    template: "%s | Aka-Uka Ta'lim Markazi",
  },
  description:
    "Ishtixon tumani, Samarqand viloyatidagi Aka-Uka Ta'lim Markazi — o'zbek tili, matematika, kimyo, ingliz tili, turk tili, rus tili va boshqa fanlar bo'yicha sertifikat imtihonlariga tayyorgarlik. 1000+ o'quvchi A va A+ natija olgan. Tajribali ustozlar, individual yondashuv. Bepul konsultatsiya!",
  keywords: [
    // Asosiy kalit so'zlar
    "ta'lim markazi",
    "o'quv markaz",
    "sertifikat imtihon",
    "sertifikat tayyorgarlik",
    "repetitor",
    "kurs",
    // Fan nomlari
    "o'zbek tili kurslari",
    "matematika kurslari",
    "kimyo kurslari",
    "ingliz tili kurslari",
    "turk tili kurslari",
    "rus tili kurslari",
    "fizika kurslari",
    "biologiya kurslari",
    // CEFR va sertifikatlar
    "CEFR imtihon",
    "CEFR B2",
    "CEFR C1",
    "milliy sertifikat",
    "xalqaro sertifikat",
    "IELTS tayyorgarlik",
    "SAT tayyorgarlik",
    // Geo-targeted
    "Ishtixon ta'lim markazi",
    "Ishtixon repetitor",
    "Ishtixon o'quv markaz",
    "Samarqand ta'lim markazi",
    "Samarqand repetitor",
    "Samarqand viloyati kurslar",
    // Long-tail
    "sertifikat imtihoniga tayyorlanish",
    "online darslar o'zbek tili",
    "matematikadan repetitor Ishtixon",
    "ingliz tili o'rganish Samarqand",
    "kimyodan tayyorgarlik kurslari",
    "ona tili va adabiyot kurslari",
    "imtihonga tayyorgarlik markazi",
    // Brand
    "Aka-Uka",
    "Aka Uka markazi",
    "akaukalarmarkazi",
  ],
  authors: [{ name: "Aka-Uka Ta'lim Markazi" }],
  creator: "Aka-Uka Ta'lim Markazi",
  publisher: "Aka-Uka Ta'lim Markazi",
  category: "education",
  verification: {
    google: "6clwtvh8LpoRZXFzm-GjEQyZ7PGeiX9yC4DrV9oGepE",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aka-Uka Ta'lim Markazi — Sertifikat imtihonlariga tayyorgarlik",
    description:
      "Ishtixon, Samarqand. 1000+ o'quvchi sertifikat olgan. O'zbek tili, matematika, kimyo, ingliz tili va boshqa fanlar. A va A+ natijalar. Bepul konsultatsiya!",
    url: "https://akaukalarmarkazi.uz",
    siteName: "Aka-Uka Ta'lim Markazi",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aka-Uka Ta'lim Markazi — Ishtixon, Samarqand",
    description:
      "Sertifikat imtihonlariga professional tayyorgarlik. 1000+ o'quvchi A va A+ natija olgan!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "UZ-SA",
    "geo.placename": "Ishtixon",
    "geo.position": "39.72;66.56",
    ICBM: "39.72, 66.56",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://akaukalarmarkazi.uz/#organization",
  name: "Aka-Uka Ta'lim Markazi",
  alternateName: ["Aka Uka markazi", "Aka-Uka o'quv markazi"],
  url: "https://akaukalarmarkazi.uz",
  logo: "https://akaukalarmarkazi.uz/icon.png",
  description:
    "Ishtixon tumani, Samarqand viloyatidagi professional ta'lim markazi. O'zbek tili, matematika, kimyo, ingliz tili va boshqa fanlar bo'yicha sertifikat imtihonlariga tayyorgarlik.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ishtixon tumani",
    addressLocality: "Ishtixon",
    addressRegion: "Samarqand viloyati",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.72,
    longitude: 66.56,
  },
  telephone: "+998948040626",
  email: "info@akaukalarmarkazi.uz",
  sameAs: [
    "https://instagram.com/akauka_markazi",
    "https://t.me/Aka_ukalarmarkazi",
    "https://youtu.be/IOwTEQQk5kU",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 39.72,
      longitude: 66.56,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kurslar",
    itemListElement: [
      {
        "@type": "Course",
        name: "O'zbek tili va adabiyot kursi",
        description: "Sertifikat imtihoniga tayyorgarlik — A va A+ natija kafolati",
        provider: { "@id": "https://akaukalarmarkazi.uz/#organization" },
      },
      {
        "@type": "Course",
        name: "Matematika kursi",
        description: "Milliy sertifikat imtihoniga tayyorgarlik",
        provider: { "@id": "https://akaukalarmarkazi.uz/#organization" },
      },
      {
        "@type": "Course",
        name: "Kimyo kursi",
        description: "Kimyo fanidan sertifikat imtihoniga professional tayyorgarlik",
        provider: { "@id": "https://akaukalarmarkazi.uz/#organization" },
      },
      {
        "@type": "Course",
        name: "Ingliz tili CEFR kursi",
        description: "CEFR B2, C1 darajalariga tayyorgarlik",
        provider: { "@id": "https://akaukalarmarkazi.uz/#organization" },
      },
      {
        "@type": "Course",
        name: "Turk tili kursi",
        description: "Turk tili CEFR sertifikatiga tayyorgarlik",
        provider: { "@id": "https://akaukalarmarkazi.uz/#organization" },
      },
      {
        "@type": "Course",
        name: "Rus tili va adabiyot kursi",
        description: "Rus tili sertifikat imtihoniga tayyorgarlik",
        provider: { "@id": "https://akaukalarmarkazi.uz/#organization" },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aka-Uka Ta'lim Markazi",
  url: "https://akaukalarmarkazi.uz",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://akaukalarmarkazi.uz/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Bosh sahifa",
      item: "https://akaukalarmarkazi.uz",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-primary-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
