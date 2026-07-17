"use client";

import {
  Calculator, Atom, FlaskConical, Dna, Monitor, ScrollText,
  Globe, BookMarked, Languages, LetterText, Speech, GraduationCap,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { subjects } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-7 h-7" />,
  Atom: <Atom className="w-7 h-7" />,
  FlaskConical: <FlaskConical className="w-7 h-7" />,
  Dna: <Dna className="w-7 h-7" />,
  Monitor: <Monitor className="w-7 h-7" />,
  ScrollText: <ScrollText className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  BookMarked: <BookMarked className="w-7 h-7" />,
  Languages: <Languages className="w-7 h-7" />,
  LetterText: <LetterText className="w-7 h-7" />,
  Speech: <Speech className="w-7 h-7" />,
  GraduationCap: <GraduationCap className="w-7 h-7" />,
};

const colors = [
  "from-primary-500 to-primary-600",
  "from-secondary-500 to-secondary-600",
  "from-primary-400 to-secondary-500",
  "from-secondary-400 to-primary-500",
  "from-primary-600 to-primary-700",
  "from-secondary-600 to-secondary-700",
  "from-primary-500 to-secondary-400",
  "from-secondary-500 to-primary-400",
  "from-primary-400 to-primary-600",
  "from-secondary-400 to-secondary-600",
  "from-primary-500 to-secondary-600",
  "from-secondary-500 to-primary-600",
];

export default function Subjects() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.08, y: 40 });

  return (
    <section id="subjects" className="section-padding">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800/40 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-4 border border-secondary-200 dark:border-secondary-700/50">
            Fanlar
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            O&apos;qitiladigan fanlar
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            O&apos;rta maktabdagi barcha fanlar bo&apos;yicha sertifikat imtihonlariga tayyorgarlik.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg">
            <span className="text-lg font-bold">Oylik narx:</span>
            <span className="text-2xl font-extrabold">400 000 so&apos;m</span>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {subjects.map((subject, index) => (
            <div key={index} className="glass-card p-6 hover-lift group cursor-default text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <span className="text-white">{iconMap[subject.icon]}</span>
              </div>
              <h3 className="font-semibold text-primary-900 dark:text-white text-sm lg:text-base">
                {subject.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
