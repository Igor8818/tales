import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Scale, GraduationCap, Award, FileText } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';
import { InstagramIcon, LinkedInIcon, LattesIcon } from './Icons';

export const HeroSection = ({ photos }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0B1B33] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#B8924A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Texto Editorial e CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Tag Institucional Dourada */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#112340] border border-[#B8924A]/50 text-xs text-[#E6CA85] font-semibold tracking-wide shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#B8924A] animate-pulse" />
              <span>Almeida &amp; Korontai Advogados • Mestre UESC • ALJUSBA Cadeira nº 20</span>
            </div>

            {/* Headline Principal de Grande Impacto (64px - 72px) */}
            <h1 className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Advocacia estratégica,{' '}
              <span className="text-[#B8924A] italic font-semibold">
                docência superior
              </span>{' '}
              e rigor jurídico.
            </h1>

            {/* Subtítulo com excelente contraste */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atuação combativa e preventiva em <strong className="text-white font-semibold">Direito do Trabalho</strong>, <strong className="text-white font-semibold">Cível</strong>, <strong className="text-white font-semibold">Previdenciário</strong> e <strong className="text-white font-semibold">Digital</strong>, fundamentada no exercício da advocacia contenciosa e na formação acadêmica contínua.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href={TALES_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#B8924A] hover:bg-[#D4AF6A] text-[#0B1B33] font-bold text-base shadow-xl shadow-[#B8924A]/25 hover:shadow-[#B8924A]/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Agendar Consulta Jurídica</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#artigos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#0B1B33] hover:bg-[#112340] text-slate-200 hover:text-white border border-[#B8924A]/40 hover:border-[#B8924A] font-medium text-base shadow-sm transition-all"
              >
                <BookOpen className="w-5 h-5 text-[#B8924A]" />
                <span>Ver Publicações Científicas</span>
              </a>
            </div>

            {/* 3 Métricas em Destaque com Peso e Contraste */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 border-t border-slate-700/80">
              <div className="text-center lg:text-left">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#E6CA85] block leading-none">
                  Cadeira 20
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide mt-1 block">
                  Imortal da ALJUSBA
                </span>
              </div>
              <div className="text-center lg:text-left border-x border-slate-700/80 px-2 sm:px-4">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#E6CA85] block leading-none">
                  Mestre
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide mt-1 block">
                  Economia &amp; Políticas (UESC)
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#E6CA85] block leading-none">
                  6 Artigos
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide mt-1 block">
                  JusLaboris/TST &amp; Revistas
                </span>
              </div>
            </div>

            {/* Links Sociais e Acadêmicos Oficiais */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-xs text-slate-400">
              <span className="font-medium text-slate-300">Canais oficiais:</span>
              <a
                href={TALES_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#112340] border border-slate-700 text-slate-200 hover:border-[#B8924A] hover:text-[#E6CA85] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#B8924A]" />
                <span className="font-medium">{TALES_INFO.instagramHandle}</span>
              </a>

              <a
                href={TALES_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#112340] border border-slate-700 text-slate-200 hover:border-[#B8924A] hover:text-[#E6CA85] transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#B8924A]" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#112340] border border-slate-700 text-slate-200 hover:border-[#B8924A] hover:text-[#E6CA85] transition-colors"
              >
                <LattesIcon className="w-3.5 h-3.5 text-[#B8924A]" />
                <span className="font-medium">Lattes CNPq</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Retrato sem degradê que dissolve, com moldura deslocada dourada */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] flex items-center justify-center">
              {/* Moldura deslocada dourada fina elegante */}
              <div className="absolute inset-2 -right-2 -bottom-2 rounded-2xl border-2 border-[#B8924A]/40 pointer-events-none" />
              
              {/* Moldura de fundo sólida em Navy Escuro com borda refinada */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-b from-[#112340] to-[#0B1B33] border border-slate-700/80 shadow-2xl overflow-hidden" />

              {/* Foto Principal Nítida e Forte (sem degradê opaco) */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-2xl pt-4">
                <img
                  src={photos?.hero || './images/principal.png'}
                  alt="Dr. Tales Almeida"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] transition-all duration-500 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/tales-office.jpg';
                  }}
                />
              </div>

              {/* Selo Circular Giratório Dourado */}
              <div className="absolute -top-3 -right-3 z-20 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#0B1B33] border-2 border-[#B8924A] shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="circlePathHeroGold"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7.5px] uppercase tracking-[0.24em] fill-[#E6CA85] font-bold">
                        <textPath xlinkHref="#circlePathHeroGold">
                          • ADVOCACIA • DOCÊNCIA • JURISTA •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-[#B8924A] absolute" />
                </div>
              </div>

              {/* Floating Badge - Escritório */}
              <div className="absolute -bottom-3 left-4 z-20 bg-[#0B1B33]/95 border border-[#B8924A]/40 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#B8924A]/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#E6CA85]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#B8924A] font-semibold uppercase tracking-wider">Escritório</p>
                  <p className="text-xs font-bold text-white">Almeida &amp; Korontai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
