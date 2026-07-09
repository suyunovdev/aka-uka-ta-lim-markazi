import {
  Award,
  BookOpen,
  Trophy,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Light: brand-tinted gradient, Dark: deep navy gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-primary-950 dark:to-primary-900" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-100/40 to-transparent dark:from-primary-800/10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-900/10 rounded-full blur-3xl" />

      {/* Floating icons */}
      <div className="absolute top-32 right-10 lg:right-32 animate-float">
        <div className="glass-card p-4 shadow-xl">
          <Award className="w-8 h-8 text-primary-500 dark:text-primary-400" />
        </div>
      </div>
      <div className="absolute top-60 left-10 lg:left-32 animate-float animate-delay-200">
        <div className="glass-card p-4 shadow-xl">
          <BookOpen className="w-8 h-8 text-secondary-500 dark:text-secondary-400" />
        </div>
      </div>
      <div className="absolute bottom-40 right-20 lg:right-40 animate-float animate-delay-400">
        <div className="glass-card p-4 shadow-xl">
          <Trophy className="w-8 h-8 text-accent-500 dark:text-accent-400" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 border border-primary-200 dark:border-primary-700/50">
            <Sparkles className="w-4 h-4" />
            <span>1000+ o&apos;quvchi sertifikat oldi — 100% natija!</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-900 dark:text-white leading-tight mb-6">
            <span className="gradient-text">Aka-Uka</span>{" "}
            Ta&apos;lim Markazi —{" "}
            <span className="gradient-text">natijaga</span> olib chiqamiz
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tajribali ustozlar, individual yondashuv va zamonaviy metodikalar bilan
            o&apos;quvchilarni sertifikat imtihonlariga tayyorlaymiz. Ishtixon tumani.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl gradient-bg text-white font-bold text-lg shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/35 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Bepul konsultatsiya
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#results"
              className="px-8 py-4 rounded-2xl bg-white dark:bg-primary-900/50 text-primary-700 dark:text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-200 dark:border-primary-700/50 flex items-center justify-center gap-2"
            >
              <Trophy className="w-5 h-5 text-secondary-500" />
              Natijalarni ko&apos;rish
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-primary-900 dark:text-white">100%</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Muvaffaqiyat</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-primary-900 dark:text-white">30+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Ustozlar</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
              ))}
              <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
                <strong className="text-primary-900 dark:text-white">9.1K+</strong> followers
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-400 dark:text-primary-600" />
      </div>
    </section>
  );
}
