import React from 'react';
import { Phone, CheckCircle2, ChevronRight, HelpCircle, Shield, Truck, Clock, Sparkles } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../data/siteConfig';
import { servicesData } from '../data/services';
import { activeArea, expansionAreasData } from '../data/areas';
import { articlesData } from '../data/articles';
import { EstimatorCalculator } from '../components/EstimatorCalculator';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const sedotWcServices = servicesData.filter((s) => s.category === 'sedot-wc');
  const saluranServices = servicesData.filter((s) => s.category === 'saluran-mampet');

  const heroWhatsAppUrl = buildWhatsAppUrl({
    serviceName: 'Layanan Sedot WC',
    areaName: 'Banjarnegara',
    channelType: 'sedot-wc'
  });

  return (
    <div className="space-y-20 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Unboxed Metadata (Zero-pill discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-300 font-medium">
                <span>Mitra Lokal Banjarnegara</span>
                <span aria-hidden="true">·</span>
                <span>Armada Vakum Bertenaga</span>
                <span aria-hidden="true">·</span>
                <span>Respon Cepat</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Jasa Sedot WC & Pelancaran Saluran Mampet
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                Solusi higienis dan terpercaya untuk septic tank penuh serta pipa pembuangan tersumbat. Didukung armada mobil tangki vakum bersih dan teknisi lokal terverifikasi di wilayah Banjarnegara.
              </p>

              {/* Verified Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-emerald-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pilihan selang panjang hingga 50 meter</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Teknisi ramah & pengerjaan bersih</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Jangkauan rumah, ruko & kantor</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pembayaran langsung setelah tuntas</span>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-emerald-950 shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Pesan Sekarang via WhatsApp</span>
                </a>

                <button
                  onClick={() => onNavigate('/area-layanan/banjarnegara/')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                >
                  <span>Cek Wilayah Banjarnegara</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-emerald-300/80 pt-1">
                Jam operasional: {siteConfig.operationalHours}
              </div>
            </div>

            {/* Right Media Slot */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-emerald-900/50 aspect-[4/3] lg:aspect-[4/3]">
                <img
                  src="https://ais-dev-zp7f46lf7qul6rufky3jpi-137331743627.asia-southeast1.run.app/uploads/1791803746434_hero_truck_clean_1791585969077_c038ec0a.jpg"
                  alt="Armada truk tangki vakum sedot WC profesional"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="font-semibold text-sm text-emerald-200">Armada Tangki Vakum Bersih</div>
                  <div className="text-neutral-300 text-[11px]">Siap menjangkau permukiman padat dan jalan utama</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PENJELASAN SINGKAT & PRIORITAS LAYANAN SEDOT WC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
            Prioritas Layanan Utama
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Jasa Sedot WC & Pengurasan Septic Tank
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Penyedotan menyeluruh limbah toilet dan lumpur tinja yang telah mengendap. Dikerjakan menggunakan mesin vakum berdaya sedot tinggi tanpa menimbulkan bau berlebih ke lingkungan sekitar.
          </p>
        </div>

        {/* Kartu Layanan Sedot WC */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sedotWcServices.map((service) => {
            const serviceWaUrl = buildWhatsAppUrl({
              serviceName: service.title,
              areaName: 'Banjarnegara',
              channelType: 'sedot-wc'
            });

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-emerald-500/60 transition-colors"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100 relative">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {service.title}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-xl font-bold text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-semibold text-neutral-900">Keunggulan Layanan:</div>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {service.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-3 mt-4">
                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Pesan via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onNavigate(`/layanan/${service.slug}/`)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-700 hover:text-emerald-800 hover:bg-neutral-100 transition-colors"
                  >
                    <span>Pelajari Rincian</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. LAYANAN PENDAMPING: PERBAIKAN SALURAN MAMPET */}
      <section className="bg-neutral-100/70 border-y border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-semibold text-sky-800 tracking-wider uppercase">
              Layanan Pendamping Khusus
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Jasa Perbaikan Saluran Pipa Mampet
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Air kamar mandi tergenang atau bak cuci piring meluap karena lemak beku? Teknisi kami menggunakan alat spiral kawat fleksibel (drain auger) untuk melancarkan saluran tanpa perlu membongkar lantai keramik Anda.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {saluranServices.map((service) => {
              const saluranWaUrl = buildWhatsAppUrl({
                serviceName: service.title,
                areaName: 'Banjarnegara',
                channelType: 'saluran-mampet',
                customDetail: service.slug === 'saluran-wc-mampet' ? 'Kloset/WC' : 'Kamar mandi / Dapur'
              });

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md">
                        {service.categoryLabel}
                      </span>
                      <span className="text-xs text-neutral-400">Teknik Tanpa Bongkar</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-semibold text-neutral-900">Karakteristik Pengerjaan:</div>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {service.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-3 mt-4">
                    <a
                      href={saluranWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-sky-800 hover:bg-sky-900 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Konsultasi Saluran Mampet</span>
                    </a>
                    <button
                      onClick={() => onNavigate(`/layanan/${service.slug}/`)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-700 hover:text-sky-900 hover:bg-neutral-100 transition-colors"
                    >
                      <span>Detail Layanan</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ESTIMATOR & CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EstimatorCalculator />
      </section>

      {/* 5. ALASAN MEMILIH LAYANAN (BERDASARKAN FAKTA TERVERIFIKASI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
            Standar Kerja Profesional
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Mengapa Memilih Layanan Kami?
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Kami mengutamakan transparansi tarif dan kepuasan hasil pengerjaan tanpa klaim berlebihan yang tidak dapat dibuktikan di lapangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Armada Terawat & Bersih</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Tangki vakum secara berkala disterilisasi agar saat parkir di depan rumah pelanggan tidak menimbulkan bau yang mengganggu lingkungan.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Jangkauan Selang Panjang</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Menjangkau rumah di dalam gang, perumahan padat, dan lokasi dengan jarak 30 hingga 50 meter dari badan jalan tempat truk parkir.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Jadwal Tepat Waktu</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Pesanan Anda diteruskan ke mitra terdekat dengan konfirmasi estimasi jam kedatangan yang jelas sebelum tim berangkat.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Tarif Disepakati di Awal</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Tidak ada biaya tersembunyi. Biaya dikonfirmasikan sebelum selang dipasang dan pengerjaan dimulai.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CARA PEMESANAN */}
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-semibold text-emerald-300 tracking-wider uppercase">
              Alur Pelayanan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Cara Pemesanan Cepat & Praktis
            </h2>
            <p className="text-sm text-emerald-200 leading-relaxed">
              Hanya butuh 4 langkah mudah dari konsultasi awal hingga toilet Anda berfungsi normal kembali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Hubungi WhatsApp',
                desc: 'Klik tombol WhatsApp di website dan kirimkan lokasi kecamatan serta kendala yang Anda alami.'
              },
              {
                step: '02',
                title: 'Konfirmasi Biaya & Selang',
                desc: 'Admin menginformasikan estimasi biaya serta menanyakan jarak parkir mobil ke titik septic tank.'
              },
              {
                step: '03',
                title: 'Armada Tiba di Lokasi',
                desc: 'Teknisi mitra datang sesuai jadwal yang disepakati dan langsung melakukan penyedotan / pelancaran.'
              },
              {
                step: '04',
                title: 'Uji Siram & Selesai',
                desc: 'Lakukan tes siram toilet bersama teknisi sebelum melakukan pembayaran tunai atau transfer.'
              }
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-xl bg-emerald-900/60 border border-emerald-800 space-y-3">
                <div className="text-2xl font-bold font-mono text-emerald-400">{s.step}</div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AREA LAYANAN YANG TERSEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
              Cakupan Wilayah
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Area Layanan Saat Ini
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/area-layanan/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <span>Lihat Semua Wilayah & Perluasan</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Highlight Banjarnegara */}
        <div className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl border border-emerald-200 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                Wilayah Aktif Terverifikasi
              </span>
              <span className="text-xs text-neutral-500">Tahap Pertama</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900">
              Kabupaten Banjarnegara & Sekitarnya
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Melayani Banjarnegara Kota, Bawang, Klampok, Purwareja Klampok, Wanadadi, Mandiraja, Madukara, Sigaluh, Susukan, Punggelan, Karangkobar, dan wilayah sekitarnya dengan armada mitra lokal berpengalaman.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onNavigate('/area-layanan/banjarnegara/')}
              className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
            >
              Halaman Khusus Banjarnegara
            </button>
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Hubungi Armada Banjarnegara</span>
            </a>
          </div>
        </div>

        {/* Expansion preview note */}
        <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
          <span>
            Wilayah pengembangan berikutnya: Purwokerto, Banyumas, Purbalingga, Wonosobo, Temanggung, dan 9 kota lainnya sedang dalam tahap verifikasi mitra.
          </span>
          <button
            onClick={() => onNavigate('/area-layanan/')}
            className="text-emerald-700 font-semibold underline underline-offset-2 shrink-0 ml-4"
          >
            Cek Status
          </button>
        </div>
      </section>

      {/* 8. ARTIKEL SEO & TIPS TERBARU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
              Edukasi & Tips Sanitasi
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Artikel & Panduan Perawatan Toilet
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/artikel/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <span>Lihat Semua 7 Artikel</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-emerald-500/60 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/artikel/${article.slug}/`)}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ UMUM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
            Tanya Jawab
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Informasi penting seputar proses pemesanan dan pengerjaan sedot WC.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Apakah pemesanan sedot WC harus dijadwalkan jauh-jauh hari?',
              a: 'Tidak harus. Kami siap melayani pemesanan langsung hari ini jika armada mitra di area Anda sedang tersedia, atau Anda dapat menentukan hari dan jam yang paling nyaman untuk Anda.'
            },
            {
              q: 'Bagaimana cara menentukan apakah septic tank penuh atau salurannya yang mampet?',
              a: 'Bila seluruh WC di rumah airnya lambat turun dan terdengar suara gluk-gluk atau keluar aroma gas metana, itu tanda septic tank penuh. Namun bila hanya 1 kloset atau wastafel yang macet setelah ada benda terjatuh, kemungkinan besar hanya salurannya yang tersumbat.'
            },
            {
              q: 'Berapa kapasitas tangki truk sedot WC?',
              a: 'Armada mitra umumnya membawa tangki vakum berkapasitas 3.000 hingga 4.000 liter, sangat memadai untuk menguras tuntas septic tank rumah tinggal, perumahan, maupun ruko.'
            },
            {
              q: 'Kemana limbah kotoran hasil sedotan dibuang?',
              a: 'Seluruh limbah tinja yang disedot dibuang ke Instalasi Pengolahan Lumpur Tinja (IPLT) resmi yang ditunjuk oleh dinas kebersihan pemerintah daerah setempat.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white border border-neutral-200 space-y-2">
              <h3 className="text-sm font-bold text-neutral-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                <span>{item.q}</span>
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CTA WHATSAPP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Toilet Macet atau Septic Tank Sudah Penuh?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Jangan tunda hingga meluap ke lantai hunian. Konsultasikan kondisi Anda sekarang ke tim koordinasi kami melalui WhatsApp untuk konfirmasi armada mitra terdekat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-white text-emerald-950 hover:bg-emerald-100 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4 text-emerald-800" />
              <span>Chat WhatsApp ({siteConfig.whatsappNumberDisplay})</span>
            </a>
            <button
              onClick={() => onNavigate('/area-layanan/banjarnegara/')}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-950/60 hover:bg-emerald-950 text-white border border-emerald-700 transition-colors"
            >
              Info Wilayah Banjarnegara
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
