import React from 'react';
import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ARTIGOS_PUBLICADOS } from '../data/siteData';

export const ArticlesSection = () => {
  return (
    <section id="artigos" className="py-20 md:py-28 bg-[#0E1626] border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2EB]/10 border border-[#00D2EB]/20 text-xs text-[#00D2EB] font-semibold tracking-wide uppercase">
            Produção Intelectual
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Artigos Científicos &amp; Publicações
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Pesquisas e estudos jurídicos publicados em periódicos científicos, anais acadêmicos e indexados na Biblioteca Digital do <strong className="text-white">Tribunal Superior do Trabalho (JusLaboris/TST)</strong>.
          </p>
        </div>

        {/* Grade com os 6 Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTIGOS_PUBLICADOS.map((artigo) => (
            <div
              key={artigo.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-[#00D2EB]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#00D2EB]/5"
            >
              <div className="space-y-4">
                {/* Imagem / Capa do Periódico + Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="h-10 w-20 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-1 flex-shrink-0">
                    <img
                      src={artigo.image}
                      alt={artigo.publisher}
                      className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-[10px] uppercase font-mono font-semibold px-2 py-1 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60 truncate">
                    {artigo.publisher}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-semibold text-[#00D2EB] uppercase tracking-wider">
                    {artigo.category}
                  </p>
                  <h3 className="font-serif-editorial text-xl font-bold text-white group-hover:text-[#00D2EB] transition-colors line-clamp-3 leading-snug">
                    {artigo.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {artigo.summary}
                  </p>
                </div>
              </div>

              {/* Botão de Acesso Externo */}
              <div className="pt-5 mt-5 border-t border-slate-800/80">
                <a
                  href={artigo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-300 group-hover:text-[#00D2EB] transition-colors"
                >
                  <span>Ler publicação na íntegra</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
