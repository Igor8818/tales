import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Building2,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { CREDENCIAIS_TABS, TALES_INFO } from '../data/siteData';
import { LattesIcon } from './Icons';

export const AboutSection = ({ photos }) => {
  const [activeTabKey, setActiveTabKey] = useState('docencia');
  const currentTab = CREDENCIAIS_TABS[activeTabKey];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0B1B33] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B8924A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Retrato no Escritório & Destaque ALJUSBA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#B8924A]/40 shadow-2xl bg-[#112340] group">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={photos?.about || './images/tales-office.jpg'}
                  alt="Dr. Tales Almeida em seu gabinete"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/secundaria.png';
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-transparent to-transparent" />

              {/* Legenda sobre a foto */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1B33]/95 backdrop-blur-md border border-[#B8924A]/40 shadow-xl">
                <p className="text-xs uppercase tracking-wider text-[#E6CA85] font-bold">
                  Tales Almeida Andrade
                </p>
                <p className="text-sm font-bold text-white">
                  Sócio Almeida &amp; Korontai • Mestre UESC
                </p>
                <p className="text-[11px] text-[#B8924A] mt-0.5 font-semibold">
                  Membro Imortal — Cadeira nº 20 da ALJUSBA
                </p>
              </div>
            </div>

            {/* Links Acadêmicos Diretos */}
            <div className="p-4 rounded-xl bg-[#112340] border border-[#B8924A]/30 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#B8924A]/20 flex items-center justify-center">
                  <LattesIcon className="w-5 h-5 text-[#E6CA85]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Currículo Lattes CNPq
                  </span>
                  <span className="text-[11px] text-slate-300 block font-mono">
                    ID: {TALES_INFO.lattesId}
                  </span>
                </div>
              </div>
              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0B1B33] border border-[#B8924A]/40 hover:bg-[#B8924A] hover:text-[#0B1B33] text-[#E6CA85] transition-colors"
                title="Acessar Currículo Lattes Oficial"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Biografia e Abas Interativas */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#112340] border border-[#B8924A]/40 text-xs text-[#E6CA85] font-semibold uppercase tracking-wider">
                Perfil &amp; Cátedra
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Docência de excelência e prática jurídica refinada.
              </h2>
              {/* Linha decorativa dourada */}
              <div className="w-16 h-1 bg-[#B8924A] rounded-full" />

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Advogado e sócio-fundador do <strong className="text-white font-semibold">Almeida &amp; Korontai Sociedade de Advogados</strong>, <strong className="text-white font-semibold">Mestre em Economia Regional e Políticas Públicas</strong> pela Universidade Estadual de Santa Cruz (UESC) e <strong className="text-white font-semibold">Professor de Direito</strong> no Centro Universitário de Excelência (UNEX) e na Faculdade Anhanguera de Itabuna.
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Como titular da <strong className="text-[#E6CA85] font-semibold">Cadeira nº 20 da Academia de Letras Jurídicas do Sul da Bahia (ALJUSBA)</strong>, concilia o exercício combativo da advocacia com a produção de artigos indexados em periódicos científicos e no Tribunal Superior do Trabalho (TST).
              </p>
            </div>

            {/* Seletor de Abas para Organização Limpa do Conteúdo */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#112340] border border-slate-700/80">
                {Object.entries(CREDENCIAIS_TABS).map(([key, tab]) => {
                  const Icon = tab.icon;
                  const isActive = activeTabKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTabKey(key)}
                      className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-[#B8924A] text-[#0B1B33] shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4 stroke-[2.5]" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lista dos Itens da Aba Selecionada */}
              <div className="mt-5 space-y-3.5">
                {currentTab.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#112340]/90 border border-[#B8924A]/25 hover:border-[#B8924A]/60 transition-colors shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E6CA85] bg-[#B8924A]/20 px-2.5 py-0.5 rounded">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#B8924A] font-semibold mb-1.5">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
