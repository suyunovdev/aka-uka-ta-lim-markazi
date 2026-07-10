import Image from "next/image";

export default function Founder() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative mx-auto lg:mx-0 w-full max-w-md">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary-200 dark:ring-primary-700/50">
              <Image
                src="/images/founder.jpg"
                alt="Rahmiddin Vafoxonov"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 400px, 450px"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary-500/10 dark:bg-secondary-400/10 rounded-full blur-2xl" />
          </div>

          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800/40 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-4 border border-secondary-200 dark:border-secondary-700/50">
              Asoschi
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-4">
              Rahmiddin Vafoxonov
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 font-medium mb-6">
              &quot;Aka-ukalar&quot; o&apos;quv markazi va xususiy maktabi asoschisi
            </p>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Rahmiddin Vafoxonov — &quot;Aka-ukalar&quot; o&apos;quv markazi va xususiy maktabiga asos solgan
                rahbar va tashkilotchi. Minglab o&apos;quvchilarga sifatli ta&apos;lim olish imkoniyatini yaratdi.
              </p>
              <p>
                10 dan ortiq kitoblar muallifi. Uning rahbarligida markaz bugungi kunda 30 dan ortiq
                professional ustozlar jamoasi bilan o&apos;quvchilarni milliy va xalqaro imtihonlarga
                tayyorlash bo&apos;yicha yetakchi ta&apos;lim muassasalaridan biriga aylandi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
