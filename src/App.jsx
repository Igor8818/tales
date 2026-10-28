import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AreasSection } from './components/AreasSection';
import { AboutSection } from './components/AboutSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhotoCustomizerModal } from './components/PhotoCustomizerModal';
import { WhatsAppIcon } from './components/Icons';
import { DEFAULT_LAWYER_PHOTOS, TALES_INFO } from './data/siteData';

export default function App() {
  const [photos, setPhotos] = useState(() => {
    try {
      const saved = localStorage.getItem('tales_photos_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return DEFAULT_LAWYER_PHOTOS;
  });

  const [isPhotoCustomizerOpen, setIsPhotoCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('tales_photos_v2', JSON.stringify(photos));
    } catch (e) {
      // ignore
    }
  }, [photos]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-[#0284C7] selection:text-white">
      {/* Navegação Fixa */}
      <Navbar
        onOpenPhotoCustomizer={() => setIsPhotoCustomizerOpen(true)}
      />

      {/* Conteúdo Principal Organizado e Fluido */}
      <main className="flex-1">
        <HeroSection photos={photos} />
        <AreasSection />
        <AboutSection photos={photos} />
        <ArticlesSection />
        <ContactSection photos={photos} />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Modal de Personalização de Fotografias */}
      <PhotoCustomizerModal
        isOpen={isPhotoCustomizerOpen}
        onClose={() => setIsPhotoCustomizerOpen(false)}
        photos={photos}
        setPhotos={setPhotos}
      />

      {/* Botão Flutuante de WhatsApp Direto */}
      <a
        href={TALES_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/25 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
        title="Falar com Dr. Tales no WhatsApp"
        aria-label="Falar com Dr. Tales no WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
