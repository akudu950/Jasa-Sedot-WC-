import React, { useState } from 'react';
import { BookOpen, ChevronRight, Clock, Calendar, ArrowRight } from 'lucide-react';
import { articlesData } from '../data/articles';

interface ArticlesPageProps {
  onNavigate: (path: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(articlesData.map((a) => a.category)))];

  const filteredArticles = selectedCategory === 'all'
    ? articlesData
    : articlesData.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
        <button onClick={() => onNavigate('/')} className="hover:text-emerald-700">
          Beranda
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-emerald-800 font-semibold">Artikel & Edukasi</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>Pusat Edukasi Sanitasi Rumah Tangga</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          Artikel & Panduan Perawatan Septic Tank Serta Saluran Air
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
          Kumpulan panduan praktis, tips pencegahan saluran buntu, dan informasi standar sanitasi untuk menjaga kebersihan hunian Anda.
        </p>
      </div>

      {/* Interactive Category Filter (Functional buttons following design guidelines) */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-100 rounded-xl max-w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === cat
                ? 'bg-white text-emerald-950 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {cat === 'all' ? 'Semua Artikel (7)' : cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-emerald-500/60 transition-all shadow-sm hover:shadow"
          >
            <div className="space-y-3">
              {/* Unboxed metadata with typographic separators */}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="font-medium text-emerald-700">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>{article.publishDate}</span>
              </div>

              <h2 className="text-lg font-bold text-neutral-900 leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400">
                Terkait: {article.relatedServiceTitle}
              </span>
              <button
                onClick={() => onNavigate(`/artikel/${article.slug}/`)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 group"
              >
                <span>Baca Panduan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
