import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';

export const Navbar = ({ onOpenPhotoCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Atuação & Escritório', href: '#atuacao' },
    { label: 'Perfil & Cátedra', href: '#sobre' },
    { label: 'Artigos', href: '#artigos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Nome */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 flex-shrink-0 group-hover:border-[#0284C7] shadow-sm transition-colors">
              <img
                src={TALES_INFO.officeLogo}
                alt="Logo Almeida & Korontai"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#0284C7] transition-colors block leading-tight">
                Tales Almeida
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wider uppercase block">
                Advocacia • Docência • Jurista
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0284C7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenPhotoCustomizer && (
              <button
                onClick={onOpenPhotoCustomizer}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 bg-white text-xs flex items-center gap-1.5 shadow-sm"
                title="Personalizar foto em exibição"
              >
                <Camera className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="hidden lg:inline text-[11px] font-medium">Foto</span>
              </button>
            )}
            <a
              href={TALES_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#0F294A] to-[#1E3A8A] text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-950/15 hover:shadow-blue-950/30 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
            >
              <span>Falar com Dr. Tales</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenPhotoCustomizer && (
              <button
                onClick={onOpenPhotoCustomizer}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-white border border-slate-200 shadow-sm"
                aria-label="Trocar Foto"
              >
                <Camera className="w-4 h-4 text-[#0284C7]" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-white border border-slate-200 shadow-sm"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-[#0284C7] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <a
              href={TALES_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#0F294A] to-[#1E3A8A] text-white font-semibold text-sm shadow-md"
            >
              <span>Falar pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
