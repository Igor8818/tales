import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Scale, GraduationCap } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';
import { InstagramIcon, LinkedInIcon, LattesIcon } from './Icons';

export const HeroSection = ({ photos }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D2EB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#0284c7]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Texto Editorial e CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#00D2EB]/30 text-xs text-[#00D2EB] font-medium tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D2EB] animate-pulse" />
              <span>Almeida &amp; Korontai Advogados • Mestre UESC • ALJUSBA Cadeira nº 20</span>
            </div>

            {/* Headline Principal */}
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Advocacia estratégica,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2EB] via-cyan-200 to-sky-400">
                docência superior
              </span>{' '}
              e rigor jurídico.
            </h1>

            {/* Subtítulo Claro e Objetivo */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atuação combativa e preventiva em <strong className="text-white font-medium">Direito do Trabalho</strong>, <strong className="text-white font-medium">Cível</strong>, <strong className="text-white font-medium">Previdenciário</strong> e <strong className="text-white font-medium">Digital</strong>, fundamentada no exercício da advocacia contenciosa e na formação acadêmica contínua.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={TALES_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00D2EB] to-[#0284c7] text-[#0B111E] font-bold text-sm sm:text-base shadow-lg shadow-[#00D2EB]/20 hover:shadow-[#00D2EB]/40 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                <span>Agendar Consulta Jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#artigos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-sm sm:text-base transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#00D2EB]" />
                <span>Ver Publicações Científicas</span>
              </a>
            </div>

            {/* Links Sociais e Acadêmicos Oficiais */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="text-slate-500">Canais oficiais:</span>
              <a
                href={TALES_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-[#00D2EB] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#00D2EB]" />
                <span>{TALES_INFO.instagramHandle}</span>
              </a>

              <a
                href={TALES_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-[#00D2EB] transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#00D2EB]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-[#00D2EB] transition-colors"
              >
                <LattesIcon className="w-3.5 h-3.5 text-[#00D2EB]" />
                <span>Lattes CNPq</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Retrato em Destaque com Selo e Cards Flutuantes */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] flex items-center justify-center">
              {/* Moldura circular com gradiente cyan sofisticado */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-b from-[#00D2EB]/20 via-slate-800/40 to-slate-950/80 border border-[#00D2EB]/30 backdrop-blur-sm -rotate-2" />
              <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-t from-[#0B111E] via-transparent to-transparent z-10 pointer-events-none" />

              {/* Foto Principal */}
              <div className="relative z-0 w-full h-full flex items-end justify-center overflow-hidden rounded-[2.5rem] pt-6">
                <img
                  src={photos?.hero || './images/principal.png'}
                  alt="Dr. Tales Almeida"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] transition-all duration-500 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/tales-office.jpg';
                  }}
                />
              </div>

              {/* Selo Circular Giratório Discreto */}
              <div className="absolute -top-3 -right-3 z-20 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-slate-950/90 border border-[#00D2EB]/40 backdrop-blur-md shadow-xl flex items-center justify-center">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="circlePathHero"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7.5px] uppercase tracking-[0.24em] fill-slate-300 font-semibold">
                        <textPath xlinkHref="#circlePathHero">
                          • ADVOCACIA • DOCÊNCIA • JURISTA •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D2EB] absolute" />
                </div>
              </div>

              {/* Floating Badge 1 - Escritório */}
              <div className="absolute -bottom-3 left-4 z-20 bg-slate-900/95 border border-slate-700/80 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#00D2EB]/15 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#00D2EB]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Escritório</p>
                  <p className="text-xs font-semibold text-white">Almeida &amp; Korontai</p>
                </div>
              </div>

              {/* Floating Badge 2 - Cadeira ALJUSBA */}
              <div className="absolute top-12 -left-4 z-20 bg-slate-900/95 border border-slate-700/80 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl hidden sm:flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#00D2EB]" />
                <span className="text-xs font-medium text-slate-200">Cadeira nº 20 • ALJUSBA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
