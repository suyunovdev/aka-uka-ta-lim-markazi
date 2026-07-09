import Image from "next/image";
import { Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary-950 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo/Aka-uka_Logo_horizontal_white.png"
                alt="Aka-Uka Ta'lim Markazi"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-primary-300/70 mb-6 max-w-md">
              {siteConfig.slogan}. {siteConfig.mission}.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-900 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-10 h-10 rounded-xl bg-primary-900 hover:bg-secondary-600 flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-300/70 hover:text-secondary-400 transition-colors">Biz haqimizda</a></li>
              <li><a href="#subjects" className="text-primary-300/70 hover:text-secondary-400 transition-colors">Fanlar</a></li>
              <li><a href="#teachers" className="text-primary-300/70 hover:text-secondary-400 transition-colors">Ustozlar</a></li>
              <li><a href="#results" className="text-primary-300/70 hover:text-secondary-400 transition-colors">Natijalar</a></li>
              <li><a href="#contact" className="text-primary-300/70 hover:text-secondary-400 transition-colors">Kontaktlar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-primary-300/70">{siteConfig.phone}</li>
              <li className="text-primary-300/70">{siteConfig.instagram}</li>
              <li className="text-primary-300/70">{siteConfig.address}</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-primary-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-400/60 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
