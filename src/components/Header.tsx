import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../data/siteConfig';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', path: '/' },
    { label: 'Layanan', path: '/layanan/sedot-wc/' },
    { label: 'Area Layanan', path: '/area-layanan/' },
    { label: 'Banjarnegara', path: '/area-layanan/banjarnegara/' },
    { label: 'Artikel', path: '/artikel/' },
    { label: 'Kontak', path: '/kontak/' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWhatsAppUrl = buildWhatsAppUrl({
    serviceName: 'Layanan Sanitasi',
    areaName: 'Banjarnegara',
    channelType: 'sedot-wc'
  });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      {/* Top Bar Contract: Zone 1 Wordmark - Zone 2 Links - Zone 3 Single Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-left font-bold text-lg sm:text-xl tracking-tight text-emerald-950 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
        >
          Jasa Sedot WC
        </button>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-sm ${
                  isActive
                    ? 'border-emerald-600 text-emerald-900 font-semibold'
                    : 'border-transparent text-neutral-600 hover:text-emerald-700 hover:border-neutral-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Chat WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 rounded-lg"
          >
            <Phone className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-emerald-900 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-900 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-emerald-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2">
            <div className="text-xs text-neutral-500 px-3">
              Jam Operasional: {siteConfig.operationalHours}
            </div>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Pesan via WhatsApp ({siteConfig.whatsappNumberDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
