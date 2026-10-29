import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Scale, ChevronDown } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';
import { InstagramIcon, LinkedInIcon, LattesIcon } from './Icons';

export const HeroSection = ({ photos }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-1rem)] lg:min-h-screen flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0 overflow-hidden bg-[#0B1B33] text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#B8924A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna de Texto */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Tag Institucional Dourada */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#112340] border border-[#B8924A]/50 text-[11px] sm:text-xs text-[#E6CA85] font-semibold tracking-wide shadow-md max-w-full truncate">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#B8924A] animate-pulse flex-shrink-0" />
              <span className="truncate">Almeida &amp; Korontai • LEAD • UESC • ALJUSBA Cadeira n. 20</span>
            </div>

            {/* Headline Principal - Tamanho Fluido Perfeito para Mobile & Desktop */}
            <h1 className="font-serif-editorial text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Formando profissionais e{' '}
              <span className="text-[#B8924A] italic font-semibold">
                defendendo direitos
              </span>{' '}
              com estratégia e prática.
            </h1>

            {/* Subtítulo com excelente contraste */}
            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atuação combativa e preventiva em <strong className="text-white font-semibold">Direito do Trabalho</strong>, <strong className="text-white font-semibold">Cível</strong>, <strong className="text-white font-semibold">Previdenciário</strong> e <strong className="text-white font-semibold">Digital</strong>, fundamentada no exercício contencioso e na formação contínua.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={TALES_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#B8924A] hover:bg-[#D4AF6A] text-[#0B1B33] font-bold text-xs sm:text-sm shadow-lg shadow-[#B8924A]/25 hover:shadow-[#B8924A]/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Agendar Consulta Jurídica</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#artigos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#0B1B33] hover:bg-[#112340] text-slate-200 hover:text-white border border-[#B8924A]/40 hover:border-[#B8924A] font-medium text-xs sm:text-sm shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#B8924A]" />
                <span>Ver Publicações Científicas</span>
              </a>
            </div>

            {/* 3 Métricas em Destaque - Perfeitas no Mobile */}
            <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 max-w-lg mx-auto lg:mx-0 border-t border-slate-700/80">
              <div className="text-center lg:text-left">
                <span className="font-serif-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-[#E6CA85] block leading-none">
                  Cadeira 20
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-wide mt-1 block">
                  Imortal ALJUSBA
                </span>
              </div>
              <div className="text-center lg:text-left border-x border-slate-700/80 px-1 sm:px-3">
                <span className="font-serif-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-[#E6CA85] block leading-none">
                  Mestre
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-wide mt-1 block truncate">
                  Economia (UESC)
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="font-serif-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-[#E6CA85] block leading-none">
                  6 Artigos
                </span>
              </div>
            </div>

            {/* Links Sociais e Acadêmicos Oficiais */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-400">
              <span className="font-medium text-slate-400">Canais:</span>
              <a
                href={TALES_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#112340] border border-slate-700 text-slate-200 hover:border-[#B8924A] hover:text-[#E6CA85] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#B8924A]" />
                <span className="font-medium">{TALES_INFO.instagramHandle}</span>
              </a>

              <a
                href={TALES_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#112340] border border-slate-700 text-slate-200 hover:border-[#B8924A] hover:text-[#E6CA85] transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#B8924A]" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#112340] border border-slate-700 text-slate-200 hover:border-[#B8924A] hover:text-[#E6CA85] transition-colors"
              >
                <LattesIcon className="w-3.5 h-3.5 text-[#B8924A]" />
                <span className="font-medium">Lattes</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Retrato Calibrado para Mobile (Tamanho Proporcional: max-w-[260px] no mobile) */}
          <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Moldura deslocada dourada fina */}
              <div className="absolute inset-1.5 sm:inset-2 -right-1.5 -bottom-1.5 sm:-right-2 sm:-bottom-2 rounded-2xl border-2 border-[#B8924A]/40 pointer-events-none" />
              
              {/* Moldura de fundo sólida em Navy Escuro */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-2xl bg-gradient-to-b from-[#112340] to-[#0B1B33] border border-slate-700/80 shadow-2xl overflow-hidden" />

              {/* Foto Principal Nítida */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-2xl pt-3 sm:pt-4">
                <img
                  src={photos?.hero || './images/Inicio.png'}
                  alt="Dr. Tales Almeida"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-all duration-500 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/Inicio.png';
                  }}
                />
              </div>

              {/* Selo Circular Giratório Dourado Calibrado para Mobile */}
              <div className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 z-20 w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#0B1B33] border-2 border-[#B8924A] shadow-xl flex items-center justify-center">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="circlePathHeroGold"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7.5px] uppercase tracking-[0.24em] fill-[#E6CA85] font-bold">
                        <textPath xlinkHref="#circlePathHeroGold">
                          • ADVOGADO • DOCENTE • JURISTA •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-[#B8924A] absolute" />
                </div>
              </div>

              {/* Floating Badge - Dr. Tales Almeida */}
              <div className="absolute -bottom-2 left-2 sm:left-4 z-20 bg-[#0B1B33]/95 border border-[#B8924A]/40 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-xl flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-[#B8924A]/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6CA85]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Dr. Tales Almeida</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Indicador Suave de Rolagem Centralizado (Apenas telas maiores) */}
      <div className="relative z-10 hidden lg:flex justify-center pt-2">
        <a
          href="#atuacao"
          className="inline-flex flex-col items-center text-[10px] text-slate-400 hover:text-[#E6CA85] transition-colors"
          title="Rolar para Especialidades"
        >
          <span className="tracking-widest uppercase mb-1">Explorar</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#B8924A]" />
        </a>
      </div>
    </section>
  );
};
