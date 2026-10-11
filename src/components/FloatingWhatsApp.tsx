import React, { useState } from 'react';
import { Phone, X, MessageSquare, ChevronDown } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../data/siteConfig';

interface FloatingWhatsAppProps {
  currentPath: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Tentukan channel default berdasarkan halaman yang sedang dibuka
  const isSaluranMampet = currentPath.includes('saluran') || currentPath.includes('mampet');
  const isBanjarnegara = currentPath.includes('banjarnegara') || !currentPath.includes('area-layanan');
  const currentArea = isBanjarnegara ? 'Banjarnegara' : 'Wilayah Anda';

  let currentServiceName = 'Jasa Sedot WC';
  let defaultChannel: 'sedot-wc' | 'saluran-mampet' = 'sedot-wc';

  if (currentPath.includes('sedot-septic-tank')) {
    currentServiceName = 'Jasa Sedot Septic Tank';
  } else if (currentPath.includes('saluran-wc-mampet')) {
    currentServiceName = 'Jasa Saluran WC Mampet';
    defaultChannel = 'saluran-mampet';
  } else if (isSaluranMampet) {
    currentServiceName = 'Jasa Perbaikan Saluran Mampet';
    defaultChannel = 'saluran-mampet';
  }

  const directUrl = buildWhatsAppUrl({
    serviceName: currentServiceName,
    areaName: currentArea,
    channelType: defaultChannel
  });

  const sedotWcUrl = buildWhatsAppUrl({
    serviceName: 'Jasa Sedot WC',
    areaName: currentArea,
    channelType: 'sedot-wc'
  });

  const saluranUrl = buildWhatsAppUrl({
    serviceName: 'Jasa Perbaikan Saluran Mampet',
    areaName: currentArea,
    channelType: 'saluran-mampet',
    customDetail: 'WC/kamar mandi/dapur'
  });

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {/* Pop-up dialog options */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="bg-emerald-800 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-200" />
              <span className="font-semibold text-sm">Konsultasi WhatsApp Cepat</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white p-1 rounded-md"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3.5 space-y-2 text-xs text-neutral-600">
            <p className="font-medium text-neutral-800">
              Pilih jenis bantuan yang Anda perlukan:
            </p>

            <a
              href={sedotWcUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2.5 rounded-lg border border-neutral-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition-colors group"
            >
              <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900 group-hover:text-emerald-800 text-xs">
                  Pesan Sedot WC / Septic Tank
                </div>
                <div className="text-[11px] text-neutral-500 line-clamp-1">
                  Kuras kotoran penuh, tangki vakum bersih
                </div>
              </div>
            </a>

            <a
              href={saluranUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2.5 rounded-lg border border-neutral-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition-colors group"
            >
              <div className="w-7 h-7 rounded-md bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900 group-hover:text-emerald-800 text-xs">
                  Pelancaran Saluran Mampet
                </div>
                <div className="text-[11px] text-neutral-500 line-clamp-1">
                  WC mampet, wastafel, floor drain kamar mandi
                </div>
              </div>
            </a>

            <div className="pt-1 text-[11px] text-neutral-400 text-center">
              Jam buka: {siteConfig.operationalHours}
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-emerald-900 text-xs font-semibold shadow-lg border border-neutral-200 hover:bg-neutral-50 transition-all hover:shadow-md"
          >
            <span>Tanya Jadwal & Biaya</span>
          </a>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          aria-label="Buka Chat WhatsApp"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
