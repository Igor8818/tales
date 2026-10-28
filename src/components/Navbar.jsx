import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';

export const Navbar = () => {
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
    { label: 'Especialidades', href: '#atuacao' },
    { label: 'Perfil & Cátedra', href: '#sobre' },
    { label: 'Artigos', href: '#artigos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1B33]/95 backdrop-blur-md border-b-2 border-[#B8924A] shadow-xl shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Nome */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#B8924A]/50 bg-[#0B1B33] flex-shrink-0 group-hover:border-[#D4AF6A] shadow-md transition-colors">
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
              <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#D4AF6A] transition-colors block leading-tight">
                Tales Almeida
              </span>
              <span className="text-[10px] sm:text-xs text-[#B8924A] font-semibold tracking-wider uppercase block">
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
                className="text-sm font-medium text-slate-200 hover:text-[#D4AF6A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={TALES_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B8924A] hover:bg-[#D4AF6A] text-[#0B1B33] font-bold text-xs sm:text-sm shadow-md shadow-[#B8924A]/20 hover:shadow-[#B8924A]/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Falar com Dr. Tales</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white bg-[#0B1B33] border border-slate-700"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1B33]/98 backdrop-blur-xl border-b-2 border-[#B8924A] px-6 py-5 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-[#D4AF6A] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-700/80">
            <a
              href={TALES_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#B8924A] hover:bg-[#D4AF6A] text-[#0B1B33] font-bold text-sm shadow-md"
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
