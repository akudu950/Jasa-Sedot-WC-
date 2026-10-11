import React, { useState } from 'react';
import { MapPin, Phone, CheckCircle2, ChevronRight, Clock, ShieldCheck, UserPlus, Info } from 'lucide-react';
import { activeArea, expansionAreasData } from '../data/areas';
import { siteConfig, buildWhatsAppUrl } from '../data/siteConfig';

interface AreasOverviewPageProps {
  onNavigate: (path: string) => void;
}

export const AreasOverviewPage: React.FC<AreasOverviewPageProps> = ({ onNavigate }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredExpansions = expansionAreasData.filter((item) =>
    item.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    item.province.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const waVendorJoinUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Halo Admin, saya pemilik armada truk sedot WC / teknisi saluran mampet dan berminat mendaftar sebagai mitra vendor lokal di wilayah saya.'
  )}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
        <button onClick={() => onNavigate('/')} className="hover:text-emerald-700">
          Beranda
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-emerald-800 font-semibold">Area Layanan</span>
      </nav>

      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
          <span>Jaringan Pelayanan Sanitasi</span>
          <span aria-hidden="true">·</span>
          <span>Transparansi Ketersediaan Wilayah</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          Cakupan Area Layanan & Rencana Perluasan
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
          Kami berkomitmen hanya membuka layanan di kota/kabupaten yang telah memiliki armada mitra lokal resmi dan terverifikasi. Berikut adalah status ketersediaan wilayah pengerjaan kami.
        </p>
      </div>

      {/* 1. WILAYAH AKTIF (BANJARNEGARA) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-600" />
          <h2 className="text-xl font-bold text-neutral-900">
            Wilayah Operasional Aktif
          </h2>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 rounded-2xl border-2 border-emerald-600/30 p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white bg-emerald-700 px-2.5 py-0.5 rounded">
                  AKTIF BEROPERASI
                </span>
                <span className="text-xs text-neutral-500">Jawa Tengah</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                Kabupaten Banjarnegara
              </h3>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('/area-layanan/banjarnegara/')}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
              >
                Buka Halaman Banjarnegara
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Armada tangki vakum dan teknisi saluran telah siap melayani rumah, perumahan, kontrakan, kantor, ruko, dan instansi di seluruh kecamatan Banjarnegara.
          </p>

          <div className="pt-2 border-t border-emerald-100 flex flex-wrap gap-2 text-xs">
            {activeArea.subDistricts.map((d, i) => (
              <span key={i} className="bg-white border border-emerald-200 px-2.5 py-1 rounded-md text-emerald-950 font-medium">
                {d.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WILAYAH PERLUASAN BERIKUTNYA (14 KOTA) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h2 className="text-xl font-bold text-neutral-900">
                Daftar Wilayah Pengembangan (14 Kota/Kabupaten)
              </h2>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Wilayah berikut sedang dalam tahap verifikasi mitra armada. Anda tetap dapat menanyakan ketersediaan darurat ke admin.
            </p>
          </div>

          {/* Filter Input */}
          <div className="w-full sm:w-60">
            <input
              type="text"
              placeholder="Cari nama kota/wilayah..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredExpansions.map((area) => (
            <div
              key={area.id}
              className="p-5 rounded-xl border border-neutral-200 bg-white space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    Tahap Pengembangan
                  </span>
                  <span className="text-[11px] text-neutral-400">{area.province}</span>
                </div>
                <h4 className="text-base font-bold text-neutral-900">{area.name}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {area.statusNotes}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-400 text-[11px]">Rencana: Sedot WC & Pipa</span>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Halo, saya ingin menanyakan apakah sudah tersedia jadwal armada sedot WC di wilayah ${area.name}?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Tanya Jadwal
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AJAKAN KERJASAMA MITRA VENDOR LOKAL */}
      <section className="bg-neutral-900 text-white rounded-2xl p-7 sm:p-9 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <UserPlus className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold">
              Apakah Anda Pemilik Armada Truk Sedot WC atau Teknisi di Wilayah Tersebut?
            </h3>
            <p className="text-xs text-neutral-400">
              Bergabunglah menjadi mitra jaringan resmi kami untuk menerima pesanan pelanggan di kota Anda.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
          Kami menerapkan seleksi ketat: mitra harus memiliki armada tangki vakum bersih, selang memadai, komitmen harga transparan, dan pembuangan resmi ke IPLT. Tidak ada sistem klaim fiktif.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={waVendorJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Daftar Sebagai Mitra Vendor via WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigate('/kontak/')}
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            Hubungi Pusat Kemitraan
          </button>
        </div>
      </section>
    </div>
  );
};
