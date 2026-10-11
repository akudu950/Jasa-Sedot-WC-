import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const EstimatorCalculator: React.FC = () => {
  const [serviceType, setServiceType] = useState<'sedot-wc' | 'sedot-septic' | 'saluran-mampet' | 'wc-buntu'>('sedot-wc');
  const [district, setDistrict] = useState<string>('Banjarnegara Kota');
  const [hoseDistance, setHoseDistance] = useState<'dekat' | 'sedang' | 'jauh'>('dekat');
  const [urgency, setUrgency] = useState<'hari-ini' | 'jadwal-besok'>('hari-ini');

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'sedot-wc': return 'Jasa Sedot WC Rumah Tinggal';
      case 'sedot-septic': return 'Jasa Pengurasan Lumpur Septic Tank (Tuntas)';
      case 'saluran-mampet': return 'Perbaikan Saluran Kamar Mandi / Dapur Mampet';
      case 'wc-buntu': return 'Pelancaran Saluran Kloset Tersumbat Benda Padat';
    }
  };

  const getHoseLabel = () => {
    switch (hoseDistance) {
      case 'dekat': return 'Dekat jalan mobil (<15 meter)';
      case 'sedang': return 'Masuk gang perumahan (15–30 meter)';
      case 'jauh': return 'Gang sempit / lokasi dalam (30–50 meter)';
    }
  };

  const generateWhatsAppInquiry = () => {
    const service = getServiceLabel();
    const hose = getHoseLabel();
    const waktu = urgency === 'hari-ini' ? 'Hari ini secepatnya' : 'Direncanakan besok / lusa';

    const text = `Halo Admin Jasa Sedot WC,
Saya ingin menanyakan estimasi biaya dan jadwal untuk layanan berikut:
• Jenis Layanan: ${service}
• Lokasi: Kecamatan ${district}, Banjarnegara
• Jarak Parkir Truk ke Titik: ${hose}
• Waktu Pengerjaan: ${waktu}

Mohon informasi ketersediaan armada mitra dan estimasi tarifnya. Terima kasih.`;

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900">
            Kalkulator Estimasi Kebutuhan Layanan
          </h3>
          <p className="text-xs text-neutral-500">
            Bantu kami memetakan armada dan panjang selang yang tepat sebelum teknisi meluncur.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom Pilihan */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              1. Pilih Kebutuhan Layanan
            </label>
            <div className="space-y-2">
              {[
                { id: 'sedot-wc', label: 'Sedot WC Penuh (Rumah / Kontrakan)' },
                { id: 'sedot-septic', label: 'Pengurasan Endapan Lumpur Septic Tank' },
                { id: 'saluran-mampet', label: 'Saluran Air Kamar Mandi / Dapur Mampet' },
                { id: 'wc-buntu', label: 'Kloset Buntu / Tersumbat Benda Padat' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id as any)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between ${
                    serviceType === item.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold'
                      : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {serviceType === item.id && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              2. Wilayah Kecamatan (Banjarnegara)
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full text-xs px-3 py-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Banjarnegara Kota">Kecamatan Banjarnegara (Kota)</option>
              <option value="Bawang">Kecamatan Bawang</option>
              <option value="Klampok">Kecamatan Klampok / Purwareja Klampok</option>
              <option value="Mandiraja">Kecamatan Mandiraja</option>
              <option value="Wanadadi">Kecamatan Wanadadi</option>
              <option value="Madukara">Kecamatan Madukara</option>
              <option value="Sigaluh">Kecamatan Sigaluh</option>
              <option value="Susukan">Kecamatan Susukan</option>
              <option value="Punggelan">Kecamatan Punggelan</option>
              <option value="Karangkobar">Kecamatan Karangkobar</option>
              <option value="Lainnya">Kecamatan Lainnya di Banjarnegara</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              3. Estimasi Jarak Parkir Mobil Tangki ke Titik WC
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'dekat', label: '< 15 Meter', sub: 'Pinggir jalan' },
                { id: 'sedang', label: '15–30 M', sub: 'Gang sedang' },
                { id: 'jauh', label: '30–50 M', sub: 'Gang sempit' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setHoseDistance(item.id as any)}
                  className={`p-2.5 rounded-lg border text-center transition-colors ${
                    hoseDistance === item.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold'
                      : 'border-neutral-200 hover:border-neutral-300 text-neutral-600'
                  }`}
                >
                  <div className="text-xs font-semibold">{item.label}</div>
                  <div className="text-[10px] text-neutral-500">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Hasil & Tindakan */}
        <div className="flex flex-col justify-between bg-neutral-50 rounded-xl p-5 border border-neutral-200">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Ringkasan Kebutuhan Pengerjaan
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500">Layanan Dipilih:</span>
                <span className="font-semibold text-neutral-800 text-right">{getServiceLabel()}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500">Wilayah:</span>
                <span className="font-semibold text-neutral-800">Kec. {district}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500">Kebutuhan Selang:</span>
                <span className="font-semibold text-neutral-800">{getHoseLabel()}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500">Status Vendor:</span>
                <span className="font-semibold text-emerald-700">Mitra Siap Sedia</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-600 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-neutral-800">
                <AlertCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>Transparansi Tarif:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-500">
                Tarif sedot WC dihitung berdasarkan volume tangki & panjang selang yang terpakai. Tidak ada biaya tersembunyi. Estimasi pasti akan disepakati melalui WhatsApp sebelum armada bergerak.
              </p>
            </div>
          </div>

          <div className="pt-5 mt-4 border-t border-neutral-200">
            <a
              href={generateWhatsAppInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Kirim Rincian Ini ke WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
