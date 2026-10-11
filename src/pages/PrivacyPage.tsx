import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
        <button onClick={() => onNavigate('/')} className="hover:text-emerald-700">
          Beranda
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-emerald-800 font-semibold">Kebijakan Privasi</span>
      </nav>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Perlindungan Data Calon Pelanggan</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          Kebijakan Privasi
        </h1>

        <p className="text-xs text-neutral-500">
          Terakhir diperbarui: Oktober 2025 · Berlaku untuk seluruh pengunjung situs {siteConfig.domain}
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">1. Pendahuluan</h2>
          <p>
            Website <strong>{siteConfig.domain}</strong> menghormati dan menjaga privasi setiap calon pelanggan dan pengunjung. Kebijakan Privasi ini menjelaskan bagaimana data informasi yang Anda berikan dikelola saat Anda berkonsultasi atau memesan layanan jasa sedot WC dan perbaikan saluran mampet.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">2. Data yang Dikumpulkan</h2>
          <p>
            Website ini beroperasi secara murni statis tanpa formulir pendaftaran akun (user registration), database internal, atau pelacakan cookie invasif.
          </p>
          <p>
            Data yang kami terima adalah data yang Anda kirimkan secara sukarela melalui percakapan WhatsApp resmi kami, meliputi:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nama Anda atau nama penanggung jawab pemesanan.</li>
            <li>Alamat lengkap atau lokasi kecamatan pengerjaan (misal: di Kabupaten Banjarnegara).</li>
            <li>Nomor telepon / WhatsApp untuk koordinasi kedatangan armada.</li>
            <li>Foto atau keterangan mengenai kendala septic tank / saluran air yang dihadapi.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">3. Penggunaan dan Penyaluran Data</h2>
          <p>
            Sesuai model bisnis kami, data lokasi dan kontak Anda semata-mata digunakan untuk:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Menghubungi dan memandu teknisi atau pengemudi armada tangki mitra terdekat menuju alamat Anda.</li>
            <li>Mengonfirmasi perkiraan waktu kedatangan dan kesiapan selang vakum di lokasi.</li>
            <li>Menindaklanjuti konfirmasi penyelesaian pekerjaan dan evaluasi kepuasan layanan.</li>
          </ul>
          <p>
            Kami <strong>tidak pernah menjual, menyewakan, atau membagikan data nomor telepon Anda</strong> kepada pihak ketiga di luar armada mitra yang bertugas melayani pesanan Anda.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">4. Keamanan Informasi</h2>
          <p>
            Komunikasi antara perangkat Anda dan kami terlindungi melalui enkripsi end-to-end standar platform WhatsApp. Seluruh data koordinasi ditangani dengan penuh kehati-hatian oleh tim admin kami.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">5. Perubahan Kebijakan Privasi</h2>
          <p>
            Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu seiring dengan perluasan jangkauan wilayah layanan atau penyesuaian regulasi hukum yang berlaku di Indonesia.
          </p>
        </section>

        <section className="space-y-2 pt-2 border-t border-neutral-100">
          <h2 className="text-base font-bold text-neutral-900">6. Kontak Pertanyaan</h2>
          <p>
            Apabila Anda memiliki pertanyaan terkait privasi data, Anda dapat menghubungi kami melalui pesan WhatsApp resmi: <strong>{siteConfig.whatsappNumberDisplay}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
