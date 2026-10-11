import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, FileCode } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenInfinityGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInfinityGuide }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold tracking-tight">Jasa Sedot WC</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Pusat informasi, pemesanan jasa sedot septic tank, dan pelancaran saluran air mampet berbasis jaringan mitra vendor armada terpercaya di Banjarnegara.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sistem Mitra Vendor Lokal Terverifikasi</span>
            </div>
            <button
              onClick={onOpenInfinityGuide}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-4 pt-1 transition-colors"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Panduan Ekspor InfinityFree & Astro</span>
            </button>
          </div>

          {/* Layanan */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase text-neutral-200">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/layanan/sedot-wc/')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Jasa Sedot WC
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/layanan/sedot-septic-tank/')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Jasa Sedot Septic Tank
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/layanan/perbaikan-saluran-mampet/')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Jasa Saluran Mampet
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/layanan/saluran-wc-mampet/')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Jasa Saluran WC Mampet
                </button>
              </li>
            </ul>
          </div>

          {/* Wilayah & Edukasi */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase text-neutral-200">
              Wilayah & Artikel
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/area-layanan/banjarnegara/')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sedot WC Banjarnegara (Aktif)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/area-layanan/')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Semua Wilayah & Ekspansi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/artikel/')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Artikel & Tips Sanitasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/kebijakan-privasi/')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Kebijakan Privasi
                </button>
              </li>
            </ul>
          </div>

          {/* Kontak & Jam Kerja */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase text-neutral-200">
              Pusat Koordinasi
            </h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteConfig.operationalHours}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>WhatsApp: {siteConfig.whatsappNumberDisplay}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fokus Layanan Aktif: {siteConfig.primaryArea}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Jasa Sedot WC ({siteConfig.domain}). Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-400">
            <button onClick={() => handleNav('/kontak/')} className="hover:text-neutral-300">Kontak</button>
            <span>·</span>
            <button onClick={() => handleNav('/kebijakan-privasi/')} className="hover:text-neutral-300">Kebijakan Privasi</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
