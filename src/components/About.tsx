import { GraduationCap, Target, Users, ClipboardCheck, Lightbulb, TrendingUp } from "lucide-react";

const features = [
  { icon: <GraduationCap className="w-7 h-7" />, title: "Tajribali ustozlar", description: "30+ professional ustoz boshqaruvida sifatli ta'lim", color: "primary" },
  { icon: <Target className="w-7 h-7" />, title: "Individual yondashuv", description: "Har bir o'quvchiga shaxsiy o'quv reja tuziladi", color: "secondary" },
  { icon: <Users className="w-7 h-7" />, title: "Kichik guruhlar", description: "Guruhlarda 8-10 nafar o'quvchi samarali o'qish uchun", color: "accent" },
  { icon: <ClipboardCheck className="w-7 h-7" />, title: "Sinov imtihonlari", description: "Haqiqiy imtihon sharoitida tayyorgarlik ko'rish imkoniyati", color: "primary" },
  { icon: <Lightbulb className="w-7 h-7" />, title: "Zamonaviy metodika", description: "Interaktiv va samarali o'qitish usullari qo'llanadi", color: "secondary" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "100% natija", description: "Barcha o'quvchilarimiz sertifikat imtihonidan muvaffaqiyatli o'tdi", color: "accent" },
];

const colorClasses: Record<string, string> = {
  primary: "bg-primary-100 dark:bg-primary-800/30 text-primary-600 dark:text-primary-400",
  secondary: "bg-secondary-100 dark:bg-secondary-800/30 text-secondary-600 dark:text-secondary-400",
  accent: "bg-accent-100 dark:bg-accent-800/30 text-accent-600 dark:text-accent-400",
};

export default function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4 border border-primary-200 dark:border-primary-700/50">
            Biz haqimizda
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Nima uchun bizni tanlashadi?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Aka-Uka Ta&apos;lim Markazi — birodarlik, hamkorlik va o&apos;zaro qo&apos;llab-quvvatlash
            g&apos;oyasini mujassam etgan ta&apos;lim maskani.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 hover-lift group cursor-default">
              <div className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
