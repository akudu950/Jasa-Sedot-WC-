import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Server, Smartphone, FileCode } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface InfinityFreeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfinityFreeGuideModal: React.FC<InfinityFreeGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedHtaccess, setCopiedHtaccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'infinityfree' | 'android' | 'astro'>('infinityfree');

  if (!isOpen) return null;

  const htaccessCode = `# Apache rewrite rules untuk InfinityFree htdocs
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>`;

  const copyHtaccess = () => {
    navigator.clipboard.writeText(htaccessCode);
    setCopiedHtaccess(true);
    setTimeout(() => setCopiedHtaccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-200">
        {/* Header Modal */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Panduan Hosting InfinityFree & Pengelolaan Website Statis
              </h3>
              <p className="text-xs text-neutral-500">
                Target domain: {siteConfig.domain} · Folder target: /htdocs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigasi */}
        <div className="flex border-b border-neutral-200 px-6 bg-white gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('infinityfree')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'infinityfree'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            1. Upload ke InfinityFree htdocs
          </button>
          <button
            onClick={() => setActiveTab('android')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'android'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            2. Panduan di Tablet Android
          </button>
          <button
            onClick={() => setActiveTab('astro')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'astro'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            3. Struktur Astro & Tanpa Backend
          </button>
        </div>

        {/* Isi Modal */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-700 leading-relaxed">
          {activeTab === 'infinityfree' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                <span className="font-bold">Karakteristik InfinityFree:</span>
                <p className="mt-1 text-[11px] leading-relaxed">
                  InfinityFree adalah web hosting berbasis Apache. Website ini 100% murni statis (HTML, CSS, JS, Gambar) tanpa memerlukan Node.js, database MySQL, atau PHP.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-2">Langkah Upload File ke InfinityFree:</h4>
                <ol className="list-decimal pl-4 space-y-2">
                  <li>
                    <strong>Jalankan build statis:</strong> Perintah <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">npm run build</code> akan menghasilkan folder <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">dist/</code>.
                  </li>
                  <li>
                    <strong>Buka InfinityFree Control Panel:</strong> Masuk ke akun Anda di app.infinityfree.net dan buka akun subdomain <span className="font-semibold text-emerald-800">jasasedotwc.ct.ws</span>.
                  </li>
                  <li>
                    <strong>Buka Online File Manager:</strong> Masuk ke direktori <strong>htdocs</strong>.
                  </li>
                  <li>
                    <strong>Unggah seluruh isi folder dist:</strong> Pastikan file <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">index.html</code>, folder <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">assets/</code>, <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">sitemap.xml</code>, dan <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">robots.txt</code> berada langsung di dalam folder <strong>htdocs</strong> (bukan di dalam subfolder dist).
                  </li>
                  <li>
                    <strong>Pastikan file .htaccess terpasang:</strong> File <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">.htaccess</code> diperlukan agar URL halaman seperti <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">/area-layanan/banjarnegara/</code> dapat dibuka langsung tanpa error 404 Apache.
                  </li>
                </ol>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-neutral-800">Isi File .htaccess untuk InfinityFree:</span>
                  <button
                    onClick={copyHtaccess}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    {copiedHtaccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedHtaccess ? 'Tersalin' : 'Salin Kode'}</span>
                  </button>
                </div>
                <pre className="bg-neutral-900 text-emerald-400 p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                  {htaccessCode}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'android' && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-sky-50 rounded-xl border border-sky-200 text-sky-950">
                <Smartphone className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs">Pengembangan Melalui Tablet Android:</h4>
                  <p className="mt-1 text-[11px] leading-relaxed">
                    Karena Anda menggunakan Tablet Android, Anda dapat mengelola website ini dengan sangat nyaman tanpa memerlukan PC/Laptop khusus!
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-neutral-900">Aplikasi yang Direkomendasikan di Tablet Android:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="font-bold text-neutral-900">1. Acode Code Editor</span>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Aplikasi editor kode Android terbaik dan ringan untuk mengedit file HTML, Markdown, dan konfigurasi WhatsApp di <code className="font-mono text-[10px]">siteConfig.ts</code>.
                    </p>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="font-bold text-neutral-900">2. Termux (Terminal Android)</span>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Dapat menjalankan Node.js & npm di Android untuk menjalankan perintah <code className="font-mono text-[10px]">npm run build</code> secara offline di tablet.
                    </p>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="font-bold text-neutral-900">3. AndFTP / Cx File Explorer</span>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Aplikasi gratis untuk upload langsung hasil build ke server FTP InfinityFree hanya dengan tap layar tablet.
                    </p>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="font-bold text-neutral-900">4. Browser Chrome / Edge Tablet</span>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Buka langsung File Manager InfinityFree dari browser untuk upload file ZIP lalu ekstrak di htdocs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'astro' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-1">
                  100% Statis: Nol Node.js di Server InfinityFree
                </h4>
                <p className="text-neutral-600 text-xs">
                  Sesuai instruksi Anda, website ini didesain sepenuhnya statis. Di server InfinityFree hanya disajikan file HTML, CSS, JavaScript, dan gambar tanpa ada backend Node.js atau WordPress yang memberatkan hosting gratis.
                </p>
              </div>

              <div className="p-3 bg-neutral-100 rounded-lg border border-neutral-200">
                <span className="font-bold text-neutral-800">Satu Titik Ubah Nomor WhatsApp:</span>
                <p className="text-[11px] text-neutral-600 mt-1">
                  Buka file <code className="bg-white px-1.5 py-0.5 rounded font-mono text-emerald-800">src/data/siteConfig.ts</code>. Ubah baris <code className="bg-white px-1.5 py-0.5 rounded font-mono">whatsappNumber: "6281234567890"</code> menjadi nomor WhatsApp mitra/resmi Anda. Seluruh tombol di semua halaman akan otomatis berubah!
                </p>
              </div>

              <div>
                <span className="font-bold text-neutral-800">Struktur File Proyek:</span>
                <pre className="bg-neutral-900 text-neutral-200 p-3 rounded-lg font-mono text-[10px] mt-1.5 overflow-x-auto">
{`jasasedotwc/
├── public/
│   ├── .htaccess      <- Menangani URL bersih Apache InfinityFree
│   ├── robots.txt     <- Indeks crawler search engine
│   └── sitemap.xml    <- Peta URL lengkap Google Search Console
├── src/
│   ├── data/
│   │   ├── siteConfig.ts   <- Pengaturan WhatsApp & Domain terpusat
│   │   ├── services.ts     <- Data 4 layanan Sedot WC & Saluran
│   │   ├── areas.ts        <- Data Banjarnegara & 14 area ekspansi
│   │   └── articles.ts     <- 7 Artikel SEO edukasi sanitasi
│   ├── components/         <- Komponen Header, Footer, Estimator, WhatsApp
│   └── pages/              <- Halaman Beranda, Layanan, Area, Artikel
└── package.json`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer Modal */}
        <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
          <span className="text-[11px] text-neutral-500">
            Kesiapan deploy: Siap di-upload ke InfinityFree htdocs kapan saja
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
