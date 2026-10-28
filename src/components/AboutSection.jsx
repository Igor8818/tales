import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Building2,
  Calendar,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { CREDENCIAIS_TABS, TALES_INFO } from '../data/siteData';
import { LattesIcon, InstagramIcon, LinkedInIcon } from './Icons';

export const AboutSection = ({ photos }) => {
  const [activeTabKey, setActiveTabKey] = useState('docencia');
  const currentTab = CREDENCIAIS_TABS[activeTabKey];

  return (
    <section id="sobre" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00D2EB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Retrato no Escritório & Destaque ALJUSBA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
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

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-slate-950/20 to-transparent" />

              {/* Legenda sobre a foto */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <p className="text-xs uppercase tracking-wider text-[#00D2EB] font-bold">
                  Tales Almeida Andrade
                </p>
                <p className="text-sm font-semibold text-white">
                  Sócio Almeida &amp; Korontai • Mestre UESC
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Membro Imortal — Cadeira nº 20 da ALJUSBA
                </p>
              </div>
            </div>

            {/* Links Acadêmicos Diretos */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00D2EB]/15 flex items-center justify-center">
                  <LattesIcon className="w-5 h-5 text-[#00D2EB]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">
                    Currículo Lattes CNPq
                  </span>
                  <span className="text-[11px] text-slate-400 block font-mono">
                    ID: {TALES_INFO.lattesId}
                  </span>
                </div>
              </div>
              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-[#00D2EB] hover:text-[#0B111E] text-slate-300 transition-colors"
                title="Acessar Currículo Lattes Oficial"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Biografia e Abas Interativas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2EB]/10 border border-[#00D2EB]/20 text-xs text-[#00D2EB] font-semibold uppercase tracking-wider">
                Perfil &amp; Cátedra
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Docência de excelência e prática jurídica refinada.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Advogado e sócio-fundador do <strong className="text-white">Almeida &amp; Korontai Sociedade de Advogados</strong>, <strong className="text-white">Mestre em Economia Regional e Políticas Públicas</strong> pela Universidade Estadual de Santa Cruz (UESC) e <strong className="text-white">Professor de Direito</strong> no Centro Universitário de Excelência (UNEX) e na Faculdade Anhanguera de Itabuna.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Como titular da <strong className="text-white">Cadeira nº 20 da Academia de Letras Jurídicas do Sul da Bahia (ALJUSBA)</strong>, concilia o exercício combativo da advocacia com a produção de artigos indexados em periódicos científicos e no Tribunal Superior do Trabalho (TST).
              </p>
            </div>

            {/* Seletor de Abas para Organização Limpa do Conteúdo */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                {Object.entries(CREDENCIAIS_TABS).map(([key, tab]) => {
                  const Icon = tab.icon;
                  const isActive = activeTabKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTabKey(key)}
                      className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-[#00D2EB] text-[#0B111E] shadow-md shadow-[#00D2EB]/20'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lista dos Itens da Aba Selecionada */}
              <div className="mt-5 space-y-3">
                {currentTab.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-sm sm:text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#00D2EB] font-medium bg-[#00D2EB]/10 px-2 py-0.5 rounded">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-1.5">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
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
