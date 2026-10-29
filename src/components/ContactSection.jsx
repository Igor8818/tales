import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { TALES_INFO, AREAS_ATUACAO } from '../data/siteData';
import { WhatsAppIcon } from './Icons';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    area: AREAS_ATUACAO[0].title,
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá, Dr. Tales Almeida!%0A%0A*Nome:* ${encodeURIComponent(
      formData.nome
    )}%0A*Área de Interesse:* ${encodeURIComponent(
      formData.area
    )}%0A*Mensagem:* ${encodeURIComponent(formData.mensagem)}`;
    window.open(`https://wa.me/${TALES_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-28 bg-[#0B1B33] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Canais Diretos */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#112340] border border-[#B8924A]/40 text-xs text-[#E6CA85] font-semibold uppercase tracking-wider">
                Contato Direto
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Inicie seu atendimento com discrição e agilidade.
              </h2>
              {/* Linha decorativa dourada */}
              <div className="w-16 h-1 bg-[#B8924A] rounded-full" />

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                Consultoria jurídica individualizada e soluções para empresas, trabalhadores e segurados. Atendimento presencial ou telepresencial em todo o Brasil.
              </p>
            </div>

            {/* Lista de Contatos */}
            <div className="space-y-3.5 pt-2">
              <a
                href={TALES_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#112340] border border-[#B8924A]/50 hover:border-[#B8924A] transition-colors group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B8924A] text-[#0B1B33] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <WhatsAppIcon className="w-6 h-6 fill-[#0B1B33]" />
                </div>
                <div>
                  <span className="text-xs text-[#E6CA85] font-bold block uppercase tracking-wider">
                    WhatsApp Direto (Dr. Tales Almeida)
                  </span>
                  <span className="text-base font-bold text-white">
                    {TALES_INFO.phoneDirect}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#112340] border border-slate-700/80">
                <div className="w-12 h-12 rounded-xl bg-[#0B1B33] border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#E6CA85]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    E-mails Oficiais
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {TALES_INFO.emailDirect}
                  </span>
                  <span className="text-xs text-slate-400 block">
                    {TALES_INFO.emailOffice}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#112340] border border-slate-700/80">
                <div className="w-12 h-12 rounded-xl bg-[#0B1B33] border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#E6CA85]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Presença Regional
                  </span>
                  <span className="text-sm font-bold text-white">
                    {TALES_INFO.city}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Direcionado para WhatsApp */}
          <div className="lg:col-span-7 bg-[#112340] border-2 border-[#B8924A]/30 rounded-2xl p-7 sm:p-9 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-slate-700/80">
              <div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white">
                  Formulário de Atendimento
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Envie sua mensagem para iniciar contato diretamente via WhatsApp.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8924A]/20 border border-[#B8924A]/40 text-[#E6CA85] text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento Ágil</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1B33] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B8924A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Área de Interesse
                </label>
                <select
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1B33] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#B8924A] transition-colors"
                >
                  {AREAS_ATUACAO.map((a) => (
                    <option key={a.id} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                  <option value="Consultoria Geral / Outra Área">
                    Outra Demanda / Consultoria
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Breve Resumo da Demanda
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Descreva brevemente a sua situação ou dúvida..."
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1B33] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B8924A] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#B8924A] hover:bg-[#D4AF6A] text-[#0B1B33] font-bold text-base shadow-xl shadow-[#B8924A]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Enviar Mensagem via WhatsApp</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B8924A]" />
                <span>Atendimento regido pelo sigilo profissional da OAB.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
