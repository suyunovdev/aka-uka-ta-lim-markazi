import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

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
    default: "Aka-Uka Ta'lim Markazi | Sertifikat imtihonlariga tayyorgarlik",
    template: "%s | Aka-Uka Ta'lim Markazi",
  },
  description:
    "Ishtixon tumani. O'rta maktab fanlari bo'yicha sertifikat imtihonlariga professional tayyorgarlik markazi. Tajribali ustozlar, individual yondashuv va yuqori natijalar.",
  keywords: [
    "ta'lim markazi",
    "sertifikat",
    "imtihon",
    "Ishtixon",
    "o'zbek tili",
    "matematika",
    "ingliz tili",
    "turk tili",
    "CEFR",
    "Samarqand",
    "repetitor",
    "o'quv markaz",
  ],
  authors: [{ name: "Aka-Uka Ta'lim Markazi" }],
  creator: "Aka-Uka Ta'lim Markazi",
  publisher: "Aka-Uka Ta'lim Markazi",
  verification: {
    google: "6clwtvh8LpoRZXFzm-GjEQyZ7PGeiX9yC4DrV9oGepE",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aka-Uka Ta'lim Markazi",
    description:
      "Ishtixon tumani. Sertifikat imtihonlariga professional tayyorgarlik. Tajribali ustozlar, individual yondashuv va yuqori natijalar.",
    url: "https://akaukalarmarkazi.uz",
    siteName: "Aka-Uka Ta'lim Markazi",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aka-Uka Ta'lim Markazi",
    description:
      "Ishtixon tumani. Sertifikat imtihonlariga professional tayyorgarlik markazi.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Aka-Uka Ta'lim Markazi",
  url: "https://akaukalarmarkazi.uz",
  description:
    "Ishtixon tumani. O'rta maktab fanlari bo'yicha sertifikat imtihonlariga professional tayyorgarlik markazi. Tajribali ustozlar, individual yondashuv va yuqori natijalar.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ishtixon tumani",
    addressCountry: "UZ",
  },
  telephone: "+998948040626",
  sameAs: [
    "https://instagram.com/akauka_markazi",
    "https://t.me/Aka_ukalarmarkazi",
    "https://youtu.be/IOwTEQQk5kU",
  ],
  openingHours: "Mo-Sa 08:00-20:00",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
