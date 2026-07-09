import Image from "next/image";
import { teachers } from "@/lib/data";

export default function Teachers() {
  return (
    <section id="teachers" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-800/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4 border border-accent-200 dark:border-accent-700/50">
            Ustozlar
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Bizning ustozlar
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional va tajribali ustozlar jamoasi sizga yordam berishga tayyor.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="glass-card p-6 hover-lift group text-center">
              <div className="relative w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden ring-3 ring-primary-100 dark:ring-primary-800/40">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-primary-900 dark:text-white mb-1">
                {teacher.name}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 font-medium text-sm">
                {teacher.subject}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
