import React from 'react';
import { Phone, CheckCircle2, ChevronRight, AlertCircle, ArrowLeft, HelpCircle } from 'lucide-react';
import { ServiceItem, servicesData } from '../data/services';
import { siteConfig, buildWhatsAppUrl } from '../data/siteConfig';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  const channelType = service.category === 'sedot-wc' ? 'sedot-wc' : 'saluran-mampet';
  const customDetail = service.slug === 'saluran-wc-mampet' ? 'Kloset/WC duduk/jongkok' : 'Kamar Mandi / Dapur';

  const orderWhatsAppUrl = buildWhatsAppUrl({
    serviceName: service.title,
    areaName: 'Banjarnegara',
    channelType: channelType,
    customDetail: customDetail
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
        <button onClick={() => onNavigate('/')} className="hover:text-emerald-700">
          Beranda
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-neutral-400">Layanan</span>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-emerald-800 font-semibold">{service.title}</span>
      </nav>

      {/* Main Service Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
          <span>{service.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>Melayani Banjarnegara & Sekitarnya</span>
          <span aria-hidden="true">·</span>
          <span>Teknisi Terverifikasi</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          {service.h1}
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
          {service.shortDesc}
        </p>

        {/* Action Header */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={orderWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Pesan / Konsultasi via WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigate('/area-layanan/banjarnegara/')}
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-neutral-700 hover:text-emerald-800 hover:bg-neutral-100 border border-neutral-200 transition-colors"
          >
            Cek Cakupan Area Banjarnegara
          </button>
        </div>
      </div>

      {/* Media Image Showcase */}
      <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-sm relative bg-neutral-100">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
          <div className="font-semibold">{service.title}</div>
          <div className="text-neutral-300 text-xs">{service.imageAlt}</div>
        </div>
      </div>

      {/* Long Description Prose */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">
          Penjelasan & Cara Penanganan
        </h2>
        <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
          {service.longDesc.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Tanda-tanda Butuh Layanan Ini */}
      <section className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
          <h3>Kapan Anda Membutuhkan Layanan Ini?</h3>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
          {service.indicators.map((indicator, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{indicator}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Target Layanan / Sub-Layanan */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">
          Cakupan Penerapan Layanan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.serviceTypes.map((type, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-200 bg-white flex items-center gap-3 text-xs sm:text-sm font-medium text-neutral-800"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span>{type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Langkah Pengerjaan */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-neutral-900">
          Alur & Proses Pengerjaan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.process.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-xl border border-neutral-200 bg-white space-y-2"
            >
              <div className="text-xl font-bold font-mono text-emerald-700">
                {step.step}
              </div>
              <h4 className="text-sm font-bold text-neutral-900">{step.title}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Catatan Biaya & Transparansi */}
      <section className="p-5 rounded-xl bg-neutral-100 border border-neutral-200 space-y-1.5">
        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          Kebijakan Tarif & Biaya
        </h4>
        <p className="text-xs text-neutral-600 leading-relaxed">
          {service.priceNotes}
        </p>
      </section>

      {/* FAQ Layanan Spesifik */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">
          Pertanyaan Seputar {service.title}
        </h2>
        <div className="space-y-3">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-white space-y-1.5">
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <div className="rounded-2xl bg-emerald-900 text-white p-7 text-center space-y-4">
        <h3 className="text-lg sm:text-xl font-bold">
          Butuh Bantuan {service.title} Hari Ini?
        </h3>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto">
          Hubungi admin koordinasi via WhatsApp. Kami akan segera meneruskan rincian pesanan ke armada mitra di Banjarnegara.
        </p>
        <a
          href={orderWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-emerald-950 hover:bg-emerald-50 transition-colors shadow-md"
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>Hubungi WhatsApp ({siteConfig.whatsappNumberDisplay})</span>
        </a>
      </div>

      {/* Navigasi Layanan Lain */}
      <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-emerald-700"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </button>

        <div className="flex gap-2">
          {servicesData.filter((s) => s.slug !== service.slug).slice(0, 2).map((other) => (
            <button
              key={other.slug}
              onClick={() => onNavigate(`/layanan/${other.slug}/`)}
              className="text-xs text-neutral-500 hover:text-emerald-700 underline underline-offset-4"
            >
              {other.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
