import { GraduationCap, TrendingUp, Users, BookOpen } from "lucide-react";

const stats = [
  { value: "1000+", label: "Sertifikat oldi", icon: <GraduationCap className="w-8 h-8" /> },
  { value: "100%", label: "Muvaffaqiyat", icon: <TrendingUp className="w-8 h-8" /> },
  { value: "30+", label: "Ustozlar", icon: <Users className="w-8 h-8" /> },
  { value: "12+", label: "Fan", icon: <BookOpen className="w-8 h-8" /> },
];

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
