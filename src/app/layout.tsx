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
  title: "Aka-Uka Ta'lim Markazi | Sertifikat imtihonlariga tayyorgarlik",
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
  ],
  openGraph: {
    title: "Aka-Uka Ta'lim Markazi",
    description: "Kelajagingizni biz bilan quring",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
