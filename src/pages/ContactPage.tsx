import React, { useState } from 'react';
import { Phone, Clock, MapPin, Send, MessageSquare, ChevronRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: 'Banjarnegara Kota',
    service: 'Sedot WC Rumah',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin Jasa Sedot WC,
Saya ingin memesan layanan sanitasi:
• Nama: ${formData.name || 'Pelanggan'}
• Kontak: ${formData.phone || '-'}
• Lokasi: ${formData.area}
• Kebutuhan: ${formData.service}
• Keterangan Kendala: ${formData.notes || 'Mohon info jadwal dan estimasi biaya.'}

Mohon informasi ketersediaan armada terdekat. Terima kasih.`;

    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
        <button onClick={() => onNavigate('/')} className="hover:text-emerald-700">
          Beranda
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-emerald-800 font-semibold">Kontak Kami</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>Layanan Konsultasi & Pemesanan</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          Hubungi Pusat Koordinasi Layanan
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Punya pertanyaan seputar ketersediaan armada sedot WC, panjang selang, atau ingin berkonsultasi mengenai saluran pipa mampet? Tim admin kami siap merespons cepat via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Kolom Info Kontak */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-emerald-950 text-white space-y-5">
            <h2 className="text-lg font-bold text-emerald-200">
              Informasi Pusat Layanan
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-emerald-100">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Nomor WhatsApp</div>
                  <div className="text-xs text-emerald-200">{siteConfig.whatsappNumberDisplay}</div>
                  <div className="text-[11px] text-emerald-300/80 mt-0.5">Respon cepat via pesan teks</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Jam Operasional</div>
                  <div className="text-xs text-emerald-200">{siteConfig.operationalHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Wilayah Layanan Utama</div>
                  <div className="text-xs text-emerald-200">{siteConfig.primaryArea}</div>
                  <div className="text-[11px] text-emerald-300/80 mt-0.5">Klampok, Bawang, Wanadadi, Kota, dll.</div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-800 text-[11px] text-emerald-300/80 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pemesanan langsung diteruskan ke mitra armada terdekat</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 space-y-2">
            <span className="font-bold text-neutral-900">Tips Sebelum Menghubungi:</span>
            <p className="leading-relaxed text-[11px]">
              Pastikan Anda mengetahui perkiraan lokasi bak kontrol septic tank dan jarak perkiraan mobil tangki saat parkir di depan rumah atau mulut gang agar kami dapat menyiapkan sambungan selang yang pas.
            </p>
          </div>
        </div>

        {/* Kolom Formulir Pesan Cepat */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
          <h2 className="text-lg font-bold text-neutral-900 mb-1">
            Formulir Pemesanan Cepat
          </h2>
          <p className="text-xs text-neutral-500 mb-6">
            Isi formulir di bawah ini dan rincian akan langsung terformat rapi untuk dikirimkan ke WhatsApp kami.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-neutral-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                required
                placeholder="Contoh: Pak Bambang"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Kecamatan / Lokasi</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Klampok, Banjarnegara"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Jenis Layanan</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                >
                  <option value="Sedot WC Rumah Tangga">Sedot WC Rumah Tangga</option>
                  <option value="Sedot Septic Tank Ruko / Usaha">Sedot Septic Tank Ruko / Usaha</option>
                  <option value="Kuras Lumpur Septic Tank Tuntas">Kuras Lumpur Septic Tank Tuntas</option>
                  <option value="Saluran Kamar Mandi Mampet">Saluran Kamar Mandi Mampet</option>
                  <option value="Saluran Wastafel Dapur Mampet">Saluran Wastafel Dapur Mampet</option>
                  <option value="Kloset Buntu / Tersumbat">Kloset Buntu / Tersumbat</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">Catatan Kendala (Opsional)</label>
              <textarea
                rows={3}
                placeholder="Contoh: Air kloset meluap sejak kemarin sore, lokasi masuk gang 20 meter dari jalan raya."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Buka Chat WhatsApp & Kirim Rincian Ini</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
