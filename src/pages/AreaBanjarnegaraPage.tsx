import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Truck, HelpCircle, AlertCircle, Wrench } from 'lucide-react';
import { activeArea } from '../data/areas';
import { siteConfig, buildWhatsAppUrl } from '../data/siteConfig';

interface AreaBanjarnegaraPageProps {
  onNavigate: (path: string) => void;
}

export const AreaBanjarnegaraPage: React.FC<AreaBanjarnegaraPageProps> = ({ onNavigate }) => {
  // Pilihan fokus tab: Sedot WC vs Perbaikan Saluran Mampet di Banjarnegara
  const [activeTab, setActiveTab] = useState<'sedot-wc' | 'saluran-mampet'>('sedot-wc');

  const waBanjarnegaraSedot = buildWhatsAppUrl({
    serviceName: 'Jasa Sedot WC Banjarnegara',
    areaName: 'Banjarnegara',
    channelType: 'sedot-wc'
  });

  const waBanjarnegaraSaluran = buildWhatsAppUrl({
    serviceName: 'Jasa Perbaikan Saluran Mampet Banjarnegara',
    areaName: 'Banjarnegara',
    channelType: 'saluran-mampet',
    customDetail: 'Saluran air mampet Banjarnegara'
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
        <button onClick={() => onNavigate('/')} className="hover:text-emerald-700">
          Beranda
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <button onClick={() => onNavigate('/area-layanan/')} className="hover:text-emerald-700">
          Area Layanan
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-emerald-800 font-semibold">Banjarnegara</span>
      </nav>

      {/* Hero Header Lokal Banjarnegara */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-800 font-medium">
          <span className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-900 font-semibold">
            {activeArea.statusBadge}
          </span>
          <span aria-hidden="true">·</span>
          <span>Kabupaten Banjarnegara, Jawa Tengah</span>
          <span aria-hidden="true">·</span>
          <span>Armada Tangki Lokal Siap Sedia</span>
        </div>

        {/* H1 Sesuai Spesifikasi Prompt Section 7 */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          {activeArea.h1}
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
          Layanan penyedotan septic tank dan pelancaran pipa pembuangan buntu resmi untuk seluruh wilayah Kabupaten Banjarnegara. Kami menghubungkan pesanan Anda langsung dengan armada mobil tangki vakum dan teknisi lokal terdekat dari kecamatan tempat tinggal Anda.
        </p>

        {/* Tombol Aksi WhatsApp Cepat */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={activeTab === 'sedot-wc' ? waBanjarnegaraSedot : waBanjarnegaraSaluran}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Pesan untuk Area Banjarnegara via WhatsApp</span>
          </a>
          <div className="text-xs text-neutral-500 flex items-center gap-1.5 px-2">
            <Truck className="w-4 h-4 text-emerald-700" />
            <span>Armada tangki siap meluncur dari pangkalan Banjarnegara</span>
          </div>
        </div>
      </div>

      {/* Tab Switcher untuk Fokus Layanan Banjarnegara */}
      <div className="flex border-b border-neutral-200 gap-4 text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab('sedot-wc')}
          className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'sedot-wc'
              ? 'border-emerald-700 text-emerald-900 font-bold'
              : 'border-transparent text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <Truck className="w-4 h-4" />
          <span>Fokus: Jasa Sedot WC Banjarnegara</span>
        </button>
        <button
          onClick={() => setActiveTab('saluran-mampet')}
          className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'saluran-mampet'
              ? 'border-sky-700 text-sky-900 font-bold'
              : 'border-transparent text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>Fokus: Perbaikan Saluran Mampet Banjarnegara</span>
        </button>
      </div>

      {/* Konten Tab 1: Jasa Sedot WC Banjarnegara */}
      {activeTab === 'sedot-wc' ? (
        <div className="space-y-10">
          {/* Kondisi Geografis & Layanan Khusus Banjarnegara */}
          <section className="bg-emerald-50/60 rounded-2xl p-6 sm:p-7 border border-emerald-200/80 space-y-3">
            <h2 className="text-lg font-bold text-emerald-950">
              Karakteristik Sanitasi & Kebutuhan Sedot WC di Banjarnegara
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Kabupaten Banjarnegara memiliki topografi yang bervariasi mulai dari dataran lembah Sungai Serayu (wilayah Klampok, Purwareja, Mandiraja, Bawang) hingga perbukitan dan lereng pegunungan (Madukara, Punggelan, Karangkobar).
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Saat musim hujan tiba, permukaan air tanah meningkat pesat sehingga daya serap septic tank konvensional menurun. Hal ini kerap memicu kloset meluap atau air lambat turun. Pengurasan tuntas endapan lumpur menggunakan mobil vakum memastikan septic tank memiliki ruang tampung maksimal.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Mitra armada dilengkapi selang spiral hingga 50 meter untuk menjangkau jalan gang sempit di perkampungan.</span>
            </div>
          </section>

          {/* Jenis Layanan Sedot WC di Banjarnegara */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">
              Jenis Layanan Sedot WC yang Dilayani di Banjarnegara
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Sedot WC Rumah Tangga & Perumahan',
                  desc: 'Penyedotan rutin tangki septic tank hunian warga di wilayah perumahan maupun perkampungan warga.'
                },
                {
                  title: 'Sedot Septic Tank Ruko & Pertokoan',
                  desc: 'Penanganan toilet bangunan usaha di kawasan pasar dan pertokoan Klampok, Bawang, dan Kota Banjarnegara.'
                },
                {
                  title: 'Pengurasan Limbah Tinja Sekolah & Masjid',
                  desc: 'Pelayanan fasilitas sosial dan tempat ibadah dengan koordinasi jam pengerjaan yang fleksibel.'
                },
                {
                  title: 'Penyedotan Gang Sempit (Opsi Selang Panjang)',
                  desc: 'Solusi untuk rumah yang tidak dapat dimasuki truk tangki secara langsung dengan sambungan selang ekstensi.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                  <h3 className="text-sm font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tanda Septic Tank Perlu Disedot */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">
              Kondisi yang Menandakan Septic Tank Perlu Disedot
            </h2>
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
              {[
                'Air di kloset turun lambat dan terdengar suara gelembung udara',
                'Muncul aroma gas septic tank yang menusuk hidung di area kamar mandi atau pekarangan',
                'Sudah lebih dari 2–3 tahun belum pernah dilakukan pengurasan sejak terakhir kali disedot',
                'Kloset di lantai satu meluap saat kloset lain disiram bersamaan'
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        /* Konten Tab 2: Jasa Saluran Mampet Banjarnegara */
        <div className="space-y-10">
          <section className="bg-sky-50/60 rounded-2xl p-6 sm:p-7 border border-sky-200/80 space-y-3">
            <h2 className="text-lg font-bold text-sky-950">
              Jasa Perbaikan Saluran Mampet Tanpa Bongkar di Banjarnegara
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Pipa pembuangan air kamar mandi, bak cuci piring (sink dapur), dan wastafel rumah di Banjarnegara sering tersumbat karena penumpukan kerak lemak sisa cucian atau rontokan rambut.
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Teknisi mitra kami hadir dengan mesin kawat spiral baja bermotor rotasi tinggi (drain snake). Kawat fleksibel ini menyusuri lekukan pipa di bawah lantai dan mengangkat atau menghancurkan sumbatan dalam waktu singkat tanpa merusak keramik lantai rumah Anda.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">
              Masalah Saluran yang Ditangani Teknisi Banjarnegara
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Floor Drain Kamar Mandi Tersumbat', desc: 'Air genangan surut lama akibat gumpalan rambut dan buih sabun.' },
                { title: 'Bak Cuci Piring Dapur (Sink) Mampet', desc: 'Tersumbat lapisan lemak membeku dan sisa makanan yang membusuk.' },
                { title: 'Kloset Buntu Kemasukan Benda Asing', desc: 'Pembalut, sabun batangan, atau mainan terjepit di leher angsa toilet.' },
                { title: 'Pipa Pembuangan Air Hujan / Talang', desc: 'Daun gugur dan lumut yang menyumbat jalur pembuangan atap.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-white space-y-1.5">
                  <h3 className="text-sm font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Cakupan Wilayah Kecamatan di Banjarnegara */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2 className="text-xl font-bold text-neutral-900">
            Kecamatan yang Dilayani di Kabupaten Banjarnegara
          </h2>
        </div>
        <p className="text-xs text-neutral-500">
          Seluruh kecamatan berikut dapat dilayani oleh armada mitra lokal terdekat:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {activeArea.subDistricts.map((d, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-200 bg-white space-y-1 hover:border-emerald-500 transition-colors"
            >
              <div className="font-semibold text-xs sm:text-sm text-neutral-900 flex items-center justify-between">
                <span>{d.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <p className="text-[11px] text-neutral-500">{d.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Informasi Tentang Vendor / Mitra Armada Lokal */}
      <section className="bg-neutral-100 rounded-2xl p-6 sm:p-7 border border-neutral-200 space-y-3">
        <div className="flex items-center gap-2 text-neutral-900 font-bold text-base">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <h2>Informasi Mitra Vendor Lokal Banjarnegara</h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          {activeArea.partnerInfo}
        </p>
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-700">
          <div className="bg-white p-3 rounded-lg border border-neutral-200">
            <strong>Standar Tangki:</strong> Bersih, tertutup, dan tidak bocor
          </div>
          <div className="bg-white p-3 rounded-lg border border-neutral-200">
            <strong>Kapasitas:</strong> 3.000 – 4.000 Liter
          </div>
          <div className="bg-white p-3 rounded-lg border border-neutral-200">
            <strong>Pembuangan:</strong> IPLT Resmi terstandar
          </div>
        </div>
      </section>

      {/* FAQ Lokal Banjarnegara */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">
          FAQ Jasa Sedot WC di Banjarnegara
        </h2>
        <div className="space-y-3">
          {activeArea.localFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-white space-y-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box Khusus Banjarnegara */}
      <div className="rounded-2xl bg-emerald-900 text-white p-7 text-center space-y-4">
        <h2 className="text-lg sm:text-xl font-bold">
          Pesan Jasa Sedot WC / Saluran Mampet di Banjarnegara
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto">
          Cukup kirimkan nama kecamatan dan alamat Anda di Banjarnegara melalui tombol WhatsApp berikut. Admin koordinasi kami akan langsung menghubungkan dengan armada mitra terdekat.
        </p>
        <a
          href={activeTab === 'sedot-wc' ? waBanjarnegaraSedot : waBanjarnegaraSaluran}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-emerald-950 hover:bg-emerald-50 transition-colors shadow-md"
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>Kirim Pesan WhatsApp ({siteConfig.whatsappNumberDisplay})</span>
        </a>
      </div>
    </div>
  );
};
