import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ARTIGOS_PUBLICADOS } from '../data/siteData';

export const ArticlesSection = () => {
  return (
    <section id="artigos" className="py-24 md:py-32 bg-[#F7F4EE] border-t border-b border-[#B8924A]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B1B33] text-xs text-[#E6CA85] font-semibold tracking-wider uppercase shadow-xs">
            Produção Intelectual
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#1A2233] tracking-tight">
            Artigos Científicos &amp; Publicações
          </h2>
          {/* Linha decorativa dourada */}
          <div className="w-16 h-1 bg-[#B8924A] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
            Pesquisas e estudos jurídicos publicados em periódicos científicos, anais acadêmicos e indexados na Biblioteca Digital do <strong className="text-[#1A2233] font-semibold">Tribunal Superior do Trabalho (JusLaboris/TST)</strong>.
          </p>
        </div>

        {/* Grade com os 6 Artigos com Tags Elegantes e Bordas Douradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTIGOS_PUBLICADOS.map((artigo) => (
            <div
              key={artigo.id}
              className="group rounded-2xl bg-white border border-[#B8924A]/25 hover:border-[#B8924A] p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#B8924A]/10 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Imagem / Capa do Periódico + Tag de Veículo */}
                <div className="flex items-center justify-between gap-3">
                  <div className="h-11 w-24 rounded-lg overflow-hidden bg-[#0B1B33] border border-[#B8924A]/30 flex items-center justify-center p-1.5 flex-shrink-0 shadow-xs">
                    <img
                      src={artigo.image}
                      alt={artigo.publisher}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Tag em caixa-alta pequena elegante sem ar de dev */}
                  <span className="text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 rounded bg-[#F7F4EE] text-[#B8924A] border border-[#B8924A]/30 truncate">
                    {artigo.publisher}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[11px] font-bold text-[#B8924A] uppercase tracking-widest">
                    {artigo.category}
                  </p>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#1A2233] group-hover:text-[#B8924A] transition-colors line-clamp-3 leading-snug">
                    {artigo.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] line-clamp-3 leading-relaxed font-normal">
                    {artigo.summary}
                  </p>
                </div>
              </div>

              {/* Botão de Acesso Externo */}
              <div className="pt-5 mt-6 border-t border-slate-100">
                <a
                  href={artigo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0B1B33] group-hover:text-[#B8924A] transition-colors"
                >
                  <span>Ler publicação na íntegra</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B8924A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
