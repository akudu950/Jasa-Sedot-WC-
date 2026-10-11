/**
 * Konfigurasi Utama Website Jasa Sedot WC & Saluran Mampet
 * 
 * CATATAN PENTING:
 * Semua pengaturan nomor WhatsApp, kontak, domain, dan jam operasional
 * dikelola terpusat di file ini agar mudah diubah tanpa mengedit banyak halaman.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  domain: string;
  baseUrl: string;
  whatsappNumber: string; // Format internasional tanpa simbol '+' (contoh: 6281234567890)
  whatsappNumberDisplay: string;
  email: string;
  operationalHours: string;
  primaryArea: string;
  partnerModelInfo: string;
}

export const siteConfig: SiteConfig = {
  name: "Jasa Sedot WC & Saluran Mampet",
  shortName: "SedotWC Banjarnegara",
  tagline: "Pusat Layanan Kuras Septic Tank & Pelancaran Saluran Pipa Mampet",
  domain: "jasasedotwc.ct.ws",
  baseUrl: "https://jasasedotwc.ct.ws",
  // Nomor WhatsApp resmi
  whatsappNumber: "62895622777633",
  whatsappNumberDisplay: "0895-6227-77633",
  email: "kontak@jasasedotwc.ct.ws",
  operationalHours: "Setiap Hari (07.00 - 21.00 WIB)",
  primaryArea: "Banjarnegara & Sekitarnya",
  partnerModelInfo: "Layanan ini beroperasi melalui jaringan mitra vendor armada sedot dan teknisi lokal terverifikasi di wilayah Anda."
};

/**
 * Format pembuat tautan WhatsApp terstandar sesuai panduan
 */
export function buildWhatsAppUrl(options: {
  serviceName?: string;
  areaName?: string;
  channelType?: "sedot-wc" | "saluran-mampet" | "umum";
  customDetail?: string;
}): string {
  const {
    serviceName = "Jasa Sedot WC",
    areaName = "Banjarnegara",
    channelType = "sedot-wc",
    customDetail
  } = options;

  let message = "";

  if (channelType === "sedot-wc") {
    message = `Halo, saya ingin bertanya atau memesan jasa sedot WC. Lokasi saya di ${areaName}. Saya menemukan layanan ini melalui halaman ${serviceName}. Mohon informasi mengenai ketersediaan layanan dan biaya.`;
  } else if (channelType === "saluran-mampet") {
    const drainType = customDetail || "WC/kamar mandi/dapur";
    message = `Halo, saya ingin bertanya mengenai jasa perbaikan saluran mampet. Lokasi: ${areaName}. Jenis saluran: ${drainType}. Mohon informasi lebih lanjut.`;
  } else {
    message = `Halo, saya ingin berkonsultasi mengenai ${serviceName} untuk lokasi ${areaName}. Mohon info jadwal dan estimasi biaya pengerjaan.`;
  }

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
