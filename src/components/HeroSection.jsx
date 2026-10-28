import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Scale, GraduationCap } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';
import { InstagramIcon, LinkedInIcon, LattesIcon } from './Icons';

export const HeroSection = ({ photos }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Texto Editorial e CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs text-[#0F294A] font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              <span>Almeida &amp; Korontai Advogados • Mestre UESC • ALJUSBA Cadeira nº 20</span>
            </div>

            {/* Headline Principal */}
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Advocacia estratégica,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F294A] via-[#0284C7] to-[#1E3A8A]">
                docência superior
              </span>{' '}
              e rigor jurídico.
            </h1>

            {/* Subtítulo Claro e Objetivo */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atuação combativa e preventiva em <strong className="text-slate-900 font-semibold">Direito do Trabalho</strong>, <strong className="text-slate-900 font-semibold">Cível</strong>, <strong className="text-slate-900 font-semibold">Previdenciário</strong> e <strong className="text-slate-900 font-semibold">Digital</strong>, fundamentada no exercício da advocacia contenciosa e na formação acadêmica contínua.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={TALES_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0F294A] to-[#1E3A8A] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-950/20 hover:shadow-blue-950/35 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                <span>Agendar Consulta Jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#artigos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/90 font-medium text-sm sm:text-base shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#0284C7]" />
                <span>Ver Publicações Científicas</span>
              </a>
            </div>

            {/* Links Sociais e Acadêmicos Oficiais */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-xs text-slate-500">
              <span className="font-medium text-slate-600">Canais oficiais:</span>
              <a
                href={TALES_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-xs transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="font-medium">{TALES_INFO.instagramHandle}</span>
              </a>

              <a
                href={TALES_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-xs transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-xs transition-colors"
              >
                <LattesIcon className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="font-medium">Lattes CNPq</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Retrato em Destaque com Selo e Cards Flutuantes */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] flex items-center justify-center">
              {/* Moldura circular com gradiente elegante claro e sombras suaves */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-b from-sky-50 via-slate-100 to-slate-200 border border-slate-200/90 shadow-2xl -rotate-2" />
              <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-t from-white/90 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Foto Principal */}
              <div className="relative z-0 w-full h-full flex items-end justify-center overflow-hidden rounded-[2.5rem] pt-6">
                <img
                  src={photos?.hero || './images/principal.png'}
                  alt="Dr. Tales Almeida"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_25px_rgba(15,23,42,0.25)] transition-all duration-500"
                  onError={(e) => {
                    e.target.src = './images/tales-office.jpg';
                  }}
                />
              </div>

              {/* Selo Circular Giratório Discreto */}
              <div className="absolute -top-3 -right-3 z-20 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-white/95 border border-slate-200 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="circlePathHeroLight"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7.5px] uppercase tracking-[0.24em] fill-slate-700 font-bold">
                        <textPath xlinkHref="#circlePathHeroLight">
                          • ADVOCACIA • DOCÊNCIA • JURISTA •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-[#0F294A] absolute" />
                </div>
              </div>

              {/* Floating Badge 1 - Escritório */}
              <div className="absolute -bottom-3 left-4 z-20 bg-white/98 border border-slate-200/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#0F294A]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Escritório</p>
                  <p className="text-xs font-bold text-slate-900">Almeida &amp; Korontai</p>
                </div>
              </div>

              {/* Floating Badge 2 - Cadeira ALJUSBA */}
              <div className="absolute top-12 -left-4 z-20 bg-white/98 border border-slate-200/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl hidden sm:flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0284C7]" />
                <span className="text-xs font-semibold text-slate-800">Cadeira nº 20 • ALJUSBA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
