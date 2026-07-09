import { Target, Users, BookOpen, Zap, FileText, Award, Trophy } from "lucide-react";

const steps = [
  { icon: <Target className="w-6 h-6" />, title: "Diagnostik test", description: "Bilim darajasini aniqlash" },
  { icon: <Users className="w-6 h-6" />, title: "Guruh", description: "Mos guruhga taqsimlash" },
  { icon: <BookOpen className="w-6 h-6" />, title: "Dars", description: "Nazariy bilimlar" },
  { icon: <Zap className="w-6 h-6" />, title: "Amaliyot", description: "Topshiriqlar yechish" },
  { icon: <FileText className="w-6 h-6" />, title: "Test", description: "Bilimni tekshirish" },
  { icon: <Award className="w-6 h-6" />, title: "Mock Exam", description: "Sinov imtihoni" },
  { icon: <Trophy className="w-6 h-6" />, title: "Sertifikat", description: "Imtihon topshirish" },
];

export default function Process() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800/40 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-4 border border-secondary-200 dark:border-secondary-700/50">
            O&apos;quv jarayoni
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Qanday o&apos;qitamiz?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Imtihonga tayyorgarlikning 7 bosqichli, samarali va isbotlangan metodikasi.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 -translate-y-1/2 rounded-full" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-primary-900/50 shadow-lg border-2 border-primary-400 dark:border-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary-500 dark:text-primary-400">{step.icon}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="font-semibold text-primary-900 dark:text-white mb-1 text-sm">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
