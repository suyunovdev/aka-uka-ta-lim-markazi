"use client";

import { useState } from "react";
import { Send, Phone, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSubmitted(true);
      setFormData({ name: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4 border border-primary-200 dark:border-primary-700/50">
              Bog&apos;lanish
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-primary-900 dark:text-white mb-6">
              Bepul konsultatsiya oling
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Formani to&apos;ldiring va biz sizga 24 soat ichida bog&apos;lanamiz.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-primary-800 dark:text-slate-300 mb-2">
                  Ismingiz
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700/50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-800 dark:text-white placeholder:text-slate-400"
                  placeholder="Ismingizni kiriting"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-800 dark:text-slate-300 mb-2">
                  Telefon raqamingiz
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700/50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-800 dark:text-white placeholder:text-slate-400"
                  placeholder="+998 __ ___ __ __"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-800 dark:text-slate-300 mb-2">
                  Qaysi fan qiziqtiradi?
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700/50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-800 dark:text-white"
                >
                  <option value="">Fanni tanlang</option>
                  <option value="math">Matematika</option>
                  <option value="physics">Fizika</option>
                  <option value="chemistry">Kimyo</option>
                  <option value="biology">Biologiya</option>
                  <option value="uzbek">Ona tili va adabiyot</option>
                  <option value="english">Ingliz tili</option>
                  <option value="russian">Rus tili</option>
                  <option value="sat">SAT</option>
                  <option value="other">Boshqa fan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-800 dark:text-slate-300 mb-2">
                  Qo&apos;shimcha ma&apos;lumot
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700/50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none outline-none text-slate-800 dark:text-white placeholder:text-slate-400"
                  placeholder="Savollaringiz bo'lsa yozing..."
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitted || loading}
                className="w-full py-4 rounded-xl gradient-bg text-white font-bold text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {submitted ? (
                  "Yuborildi!"
                ) : loading ? (
                  "Yuborilmoqda..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Yuborish
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-900 dark:text-white mb-6">
                Aloqa ma&apos;lumotlari
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-800/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-800/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Telefon</p>
                    <p className="font-semibold text-primary-900 dark:text-white">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaInstagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Instagram</p>
                    <p className="font-semibold text-primary-900 dark:text-white">{siteConfig.instagram}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary-50 dark:bg-secondary-900/20">
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-800/40 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Manzil</p>
                    <p className="font-semibold text-primary-900 dark:text-white">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
