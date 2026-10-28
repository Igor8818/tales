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
    <section id="atuacao" className="py-20 md:py-28 bg-[#F8FAFC] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-xs text-[#0F294A] font-bold tracking-wide uppercase">
            Especialidades Jurídicas
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Áreas de Atuação &amp; Escritório
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Atendimento estratégico e personalizado através do escritório <strong className="text-slate-900 font-semibold">Almeida &amp; Korontai Sociedade de Advogados</strong>, combinando precisão técnica, escuta ativa e firmeza processual.
          </p>
        </div>

        {/* Banner Institucional do Escritório Almeida & Korontai */}
        <div className="mb-14 rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Logo do Escritório */}
            <div className="lg:col-span-3 flex sm:flex-row lg:flex-col items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-300 bg-slate-950 flex-shrink-0 shadow-md">
                <img
                  src={TALES_INFO.officeLogo}
                  alt={TALES_INFO.officeName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:text-center">
                <span className="text-xs text-[#0F294A] font-bold uppercase tracking-wider block">
                  Fundado em {TALES_INFO.officeFounded}
                </span>
                <span className="text-[11px] text-slate-500 block font-medium">
                  Sócios: {TALES_INFO.officePartners}
                </span>
              </div>
            </div>

            {/* Informações Institucionais */}
            <div className="lg:col-span-9 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-editorial font-bold text-slate-900">
                  {TALES_INFO.officeName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Sociedade de advogados com atuação integrada em todo o estado da Bahia e representação nacional em instâncias superiores e processos eletrônicos. Atuação nas áreas Trabalhista, Cível, Previdenciária, Digital, Securitária, bem como Penal, Tributária, Administrativa, Família e Consumidor.
                </p>
              </div>

              {/* Contatos Rápidos do Escritório */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <MapPin className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                  <span className="truncate font-medium">{TALES_INFO.city}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <Phone className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                  <span className="font-medium">{TALES_INFO.phoneOffice}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <Mail className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                  <span className="truncate font-medium">{TALES_INFO.emailOffice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade com os 4 Cards de Especialidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {AREAS_ATUACAO.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#0284C7] p-7 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 group-hover:bg-[#0F294A] group-hover:border-[#0F294A] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#0F294A] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-[#0F294A] transition-colors">
                      Almeida &amp; Korontai
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {area.shortDesc}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {area.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#0284C7] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F294A] hover:text-[#0284C7] transition-colors"
                  >
                    <span>Conhecer detalhes da atuação</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/${TALES_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dr.%20Tales!%20Gostaria%20de%20consultoria%20na%20%C3%A1rea%20de%20${encodeURIComponent(
                      area.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-slate-900 font-medium transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0">
                {React.createElement(selectedArea.icon, {
                  className: 'w-6 h-6 text-[#0F294A]',
                })}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#0284C7] font-bold">
                  Almeida &amp; Korontai Sociedade de Advogados
                </span>
                <h3 className="text-2xl font-serif-editorial font-bold text-slate-900">
                  {selectedArea.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {selectedArea.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Principais Frentes de Atendimento:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedArea.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Voltar
              </button>
              <a
                href={`https://wa.me/${TALES_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dr.%20Tales!%20Gostaria%20de%20atendimento%20especializado%20em%20${encodeURIComponent(
                  selectedArea.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0F294A] to-[#1E3A8A] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Falar com Dr. Tales sobre essa área</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
