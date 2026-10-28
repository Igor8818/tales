import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AreasSection } from './components/AreasSection';
import { AboutSection } from './components/AboutSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppIcon } from './components/Icons';
import { DEFAULT_LAWYER_PHOTOS, TALES_INFO } from './data/siteData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1B33] text-[#1A2233] flex flex-col font-sans selection:bg-[#B8924A] selection:text-[#0B1B33]">
      {/* Navegação Fixa */}
      <Navbar />

      {/* Conteúdo com Ritmo e Alternância (Navy -> Off-white -> Navy -> Off-white -> Navy) */}
      <main className="flex-1">
        <HeroSection photos={DEFAULT_LAWYER_PHOTOS} />
        <AreasSection />
        <AboutSection photos={DEFAULT_LAWYER_PHOTOS} />
        <ArticlesSection />
        <ContactSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de WhatsApp Discreto com Sombra Suave */}
      <a
        href={TALES_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-black/25 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
        title="Falar com Dr. Tales no WhatsApp"
        aria-label="Falar com Dr. Tales no WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white fill-white" />
      </a>
    </div>
  );
}
