import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle2, ChevronRight, Phone, BookOpen, AlertCircle } from 'lucide-react';
import { articlesData } from '../data/articles';
import { siteConfig, buildWhatsAppUrl } from '../data/siteConfig';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onNavigate }) => {
  const article = articlesData.find((a) => a.slug === slug) || articlesData[0];

  const waArticleUrl = buildWhatsAppUrl({
    serviceName: article.relatedServiceTitle,
    areaName: 'Banjarnegara',
    channelType: article.relatedServiceSlug.includes('saluran') ? 'saluran-mampet' : 'sedot-wc'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
        <button onClick={() => onNavigate('/')} className="hover:text-emerald-700">
          Beranda
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <button onClick={() => onNavigate('/artikel/')} className="hover:text-emerald-700">
          Artikel
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-emerald-800 font-semibold truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4 border-b border-neutral-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
          <span className="font-semibold text-emerald-800">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>Dipublikasikan {article.publishDate}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed italic bg-neutral-100/70 p-4 rounded-xl border border-neutral-200/80">
          "{article.summary}"
        </p>
      </header>

      {/* Article Body Content */}
      <main className="space-y-8 text-neutral-800 text-sm sm:text-base leading-relaxed">
        {article.content.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            {sec.sectionTitle && (
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight pt-2">
                {sec.sectionTitle}
              </h2>
            )}

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-neutral-700 leading-relaxed">
                {p}
              </p>
            ))}

            {sec.listItems && sec.listItems.length > 0 && (
              <ul className="space-y-2.5 my-3 pl-2">
                {sec.listItems.map((item, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {sec.calloutText && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm my-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p>{sec.calloutText}</p>
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Internal Linking & Service Bridge Box */}
      <section className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl border border-emerald-200 p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Layanan Terkait Artikel Ini</span>
        </div>

        <h3 className="text-lg font-bold text-neutral-900">
          Butuh Solusi Nyata untuk Masalah di Atas?
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          Jangan tunggu septic tank atau pipa tersumbat semakin parah. Kami melayani pemesanan <strong className="text-neutral-900">{article.relatedServiceTitle}</strong> untuk area Banjarnegara dan sekitarnya dengan armada mitra terverifikasi.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={waArticleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Konsultasikan Masalah Ini via WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigate(`/layanan/${article.relatedServiceSlug}/`)}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700 transition-colors"
          >
            Pelajari {article.relatedServiceTitle}
          </button>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="pt-6 border-t border-neutral-200 flex items-center justify-between">
        <button
          onClick={() => onNavigate('/artikel/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-emerald-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Artikel</span>
        </button>

        <div className="text-xs text-neutral-400">
          Topik: {article.category}
        </div>
      </footer>
    </div>
  );
};
