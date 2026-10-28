import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { AREAS_ATUACAO, TALES_INFO } from '../data/siteData';

export const AreasSection = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section id="atuacao" className="py-16 md:py-28 bg-[#F7F4EE] border-t border-b border-[#B8924A]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção com Linha Dourada Decorativa */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B1B33] text-xs text-[#E6CA85] font-semibold tracking-wider uppercase shadow-xs">
            Especialidades Jurídicas
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1A2233] tracking-tight">
            Áreas de Atuação &amp; Escritório
          </h2>
          {/* Linha decorativa dourada */}
          <div className="w-16 h-1 bg-[#B8924A] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
            Atendimento estratégico e personalizado através do escritório <strong className="text-[#1A2233] font-semibold">Almeida &amp; Korontai Sociedade de Advogados</strong>, combinando precisão técnica, escuta ativa e firmeza processual.
          </p>
        </div>

        {/* Banner Institucional do Escritório Almeida & Korontai */}
        <div className="mb-14 rounded-2xl bg-white border border-[#B8924A]/30 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Logo do Escritório */}
            <div className="lg:col-span-3 flex sm:flex-row lg:flex-col items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#B8924A]/40 bg-[#0B1B33] flex-shrink-0 shadow-md">
                <img
                  src={TALES_INFO.officeLogo}
                  alt={TALES_INFO.officeName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:text-center">
                <span className="text-xs text-[#B8924A] font-bold uppercase tracking-wider block">
                  Fundado em {TALES_INFO.officeFounded}
                </span>
                <span className="text-[12px] text-[#4A5568] block font-medium">
                  Sócios: {TALES_INFO.officePartners}
                </span>
              </div>
            </div>

            {/* Informações Institucionais */}
            <div className="lg:col-span-9 space-y-4">
              <div>
                <h3 className="text-2xl font-serif-editorial font-bold text-[#1A2233]">
                  {TALES_INFO.officeName}
                </h3>
                <p className="text-sm sm:text-base text-[#4A5568] mt-1 leading-relaxed">
                  Sociedade de advogados com atuação integrada em todo o estado da Bahia e representação nacional em instâncias superiores e processos eletrônicos. Atuação nas áreas Trabalhista, Cível, Previdenciária, Digital, Securitária, bem como Penal, Tributária, Administrativa, Família e Consumidor.
                </p>
              </div>

              {/* Contatos Rápidos do Escritório */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#1A2233]">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F4EE] border border-[#B8924A]/20">
                  <MapPin className="w-4 h-4 text-[#B8924A] flex-shrink-0" />
                  <span className="truncate font-semibold">{TALES_INFO.city}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F4EE] border border-[#B8924A]/20">
                  <Phone className="w-4 h-4 text-[#B8924A] flex-shrink-0" />
                  <span className="font-semibold">{TALES_INFO.phoneOffice}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F4EE] border border-[#B8924A]/20">
                  <Mail className="w-4 h-4 text-[#B8924A] flex-shrink-0" />
                  <span className="truncate font-semibold">{TALES_INFO.emailOffice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade com os 4 Cards de Especialidade com Números Grandes e Bordas Douradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AREAS_ATUACAO.map((area, index) => {
            const Icon = area.icon;
            const numberLabel = `0${index + 1}`;
            return (
              <div
                key={area.id}
                className="group rounded-2xl bg-white border border-[#B8924A]/25 hover:border-[#B8924A] p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#B8924A]/10 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Número Grande no Canto Superior */}
                <div className="absolute top-6 right-6 font-serif-editorial text-4xl sm:text-5xl font-bold text-[#B8924A]/20 group-hover:text-[#B8924A]/50 transition-colors pointer-events-none select-none">
                  {numberLabel}
                </div>

                <div className="space-y-5">
                  {/* Ícone em Círculo Navy com Ícone Dourado */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1B33] border border-[#B8924A]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-[#E6CA85]" />
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#1A2233] group-hover:text-[#B8924A] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-[#4A5568] leading-relaxed font-normal">
                    {area.shortDesc}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {area.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1A2233] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#B8924A] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1B33] hover:text-[#B8924A] transition-colors"
                  >
                    <span>Conhecer detalhes da atuação</span>
                    <ArrowRight className="w-4 h-4 text-[#B8924A] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/${TALES_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dr.%20Tales!%20Gostaria%20de%20consultoria%20na%20%C3%A1rea%20de%20${encodeURIComponent(
                      area.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#B8924A] hover:text-[#D4AF6A] uppercase tracking-wider transition-colors"
                  >
                    Consultar →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Detalhado da Área de Atuação */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B33]/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-2 border-[#B8924A]/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-[#0B1B33] hover:bg-slate-200 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1B33] border border-[#B8924A]/40 flex items-center justify-center flex-shrink-0">
                {React.createElement(selectedArea.icon, {
                  className: 'w-7 h-7 text-[#E6CA85]',
                })}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B8924A] font-bold">
                  Almeida &amp; Korontai Sociedade de Advogados
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#1A2233]">
                  {selectedArea.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
              {selectedArea.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-[#1A2233] font-bold">
                Principais Frentes de Atendimento:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedArea.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F4EE] border border-[#B8924A]/20 text-xs sm:text-sm text-[#1A2233] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#B8924A] mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#0B1B33] bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Voltar
              </button>
              <a
                href={`https://wa.me/${TALES_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dr.%20Tales!%20Gostaria%20de%20atendimento%20especializado%20em%20${encodeURIComponent(
                  selectedArea.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B8924A] hover:bg-[#D4AF6A] text-[#0B1B33] font-bold text-sm shadow-md"
              >
                <span>Falar com Dr. Tales sobre essa área</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
