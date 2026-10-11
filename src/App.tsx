import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InfinityFreeGuideModal } from './components/InfinityFreeGuideModal';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AreaBanjarnegaraPage } from './pages/AreaBanjarnegaraPage';
import { AreasOverviewPage } from './pages/AreasOverviewPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { siteConfig } from './data/siteConfig';
import { servicesData } from './data/services';
import { articlesData } from './data/articles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isInfinityGuideOpen, setIsInfinityGuideOpen] = useState(false);

  // Sync dengan tombol back/forward browser
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic document title & meta tags for SEO
  useEffect(() => {
    let title = 'Jasa Sedot WC Banjarnegara & Saluran Mampet | Layanan Septic Tank';
    let description = 'Layanan resmi Jasa Sedot WC dan Perbaikan Saluran Mampet di Banjarnegara & sekitarnya. Pengerjaan bersih, tangki vakum bertenaga, selang panjang, respons cepat via WhatsApp.';

    if (currentPath.startsWith('/layanan/')) {
      const slug = currentPath.replace('/layanan/', '').replace('/', '');
      const service = servicesData.find((s) => s.slug === slug);
      if (service) {
        title = `${service.metaTitle} | ${siteConfig.name}`;
        description = service.metaDescription;
      }
    } else if (currentPath === '/area-layanan/banjarnegara/' || currentPath === '/area-layanan/banjarnegara') {
      title = 'Jasa Sedot WC Banjarnegara | Layanan Septic Tank';
      description = 'Jasa Sedot WC Banjarnegara untuk rumah dan bangunan usaha. Armada mitra terverifikasi melayani Kota, Klampok, Bawang, Wanadadi, Madukara, dan sekitarnya.';
    } else if (currentPath === '/area-layanan/' || currentPath === '/area-layanan') {
      title = 'Area Layanan Jasa Sedot WC & Saluran Mampet | Wilayah Aktif & Perluasan';
      description = 'Daftar wilayah jangkauan armada sedot WC dan perbaikan saluran pipa mampet. Wilayah aktif: Banjarnegara. Status verifikasi 14 kota ekspansi.';
    } else if (currentPath.startsWith('/artikel/')) {
      const slug = currentPath.replace('/artikel/', '').replace('/', '');
      if (slug) {
        const article = articlesData.find((a) => a.slug === slug);
        if (article) {
          title = `${article.metaTitle} | Jasa Sedot WC`;
          description = article.metaDescription;
        }
      } else {
        title = 'Artikel & Panduan Perawatan Septic Tank Serta Saluran Air Mampet';
        description = 'Kumpulan tips praktis mengatasi WC mampet, tanda septic tank penuh, saluran dapur tersumbat, dan standar sanitasi rumah tangga.';
      }
    } else if (currentPath === '/kontak/' || currentPath === '/kontak') {
      title = 'Kontak Kami | Hubungi Admin Jasa Sedot WC & Saluran Mampet';
      description = 'Hubungi pusat pemesanan dan konsultasi sedot septic tank serta saluran mampet via WhatsApp. Respon cepat setiap hari.';
    } else if (currentPath === '/kebijakan-privasi/' || currentPath === '/kebijakan-privasi') {
      title = 'Kebijakan Privasi | Jasa Sedot WC & Saluran Mampet';
      description = 'Kebijakan privasi dan perlindungan data kontak calon pelanggan situs jasasedotwc.ct.ws.';
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const cleanUrl = `${siteConfig.baseUrl}${currentPath === '/' ? '' : currentPath}`;
    canonical.setAttribute('href', cleanUrl);

    // Injeksi Schema.org JSON-LD Structured Data
    let schemaScript = document.getElementById('schema-json-ld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-json-ld';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Jasa Sedot WC Banjarnegara & Pelancaran Saluran Mampet",
      "url": "https://jasasedotwc.ct.ws/",
      "telephone": siteConfig.whatsappNumberDisplay,
      "priceRange": "$$",
      "description": "Layanan profesional sedot septic tank dan pelancaran saluran pipa buntu dengan mitra vendor lokal Banjarnegara.",
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Kabupaten Banjarnegara"
        }
      ],
      "openingHours": "Mo-Su 07:00-21:00"
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Render Component berdasarkan Path
  const renderCurrentPage = () => {
    // Normalisasi trailing slash
    const path = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath : `${currentPath}/`;

    if (path === '//' || path === '/') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (path.startsWith('/layanan/')) {
      const slug = path.replace('/layanan/', '').replace('/', '');
      return <ServiceDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    if (path === '/area-layanan/banjarnegara/') {
      return <AreaBanjarnegaraPage onNavigate={handleNavigate} />;
    }

    if (path === '/area-layanan/') {
      return <AreasOverviewPage onNavigate={handleNavigate} />;
    }

    if (path.startsWith('/artikel/')) {
      const slug = path.replace('/artikel/', '').replace('/', '');
      if (slug) {
        return <ArticleDetailPage slug={slug} onNavigate={handleNavigate} />;
      }
      return <ArticlesPage onNavigate={handleNavigate} />;
    }

    if (path === '/kontak/') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    if (path === '/kebijakan-privasi/') {
      return <PrivacyPage onNavigate={handleNavigate} />;
    }

    // Default fallback
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-800 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenInfinityGuide={() => setIsInfinityGuideOpen(true)}
      />

      <FloatingWhatsApp currentPath={currentPath} />

      <InfinityFreeGuideModal
        isOpen={isInfinityGuideOpen}
        onClose={() => setIsInfinityGuideOpen(false)}
      />
    </div>
  );
}
