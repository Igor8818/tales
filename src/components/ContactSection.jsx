import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { TALES_INFO, AREAS_ATUACAO } from '../data/siteData';
import { WhatsAppIcon } from './Icons';

export const ContactSection = ({ photos }) => {
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
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Canais Diretos & Foto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2EB]/10 border border-[#00D2EB]/20 text-xs text-[#00D2EB] font-semibold uppercase tracking-wider">
                Contato Direto
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Inicie seu atendimento com discrição e agilidade.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Consultoria jurídica individualizada e soluções para empresas, trabalhadores e segurados. Atendimento presencial ou telepresencial em todo o Brasil.
              </p>
            </div>

            {/* Lista de Contatos */}
            <div className="space-y-3 pt-2">
              <a
                href={TALES_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#00D2EB]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00D2EB]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D2EB] group-hover:text-[#0B111E] text-[#00D2EB] transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    WhatsApp Direto (Dr. Tales)
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {TALES_INFO.phoneDirect}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-[#00D2EB]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Telefone Escritório (Almeida &amp; Korontai)
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {TALES_INFO.phoneOffice}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-[#00D2EB]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    E-mails Oficiais
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white block">
                    {TALES_INFO.emailDirect}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {TALES_INFO.emailOffice}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-[#00D2EB]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Presença Regional
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {TALES_INFO.city}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Direcionado para WhatsApp */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-white">
                  Formulário de Atendimento
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Envie sua mensagem para iniciar contato diretamente via WhatsApp.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento Ágil</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D2EB] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Área de Interesse
                </label>
                <select
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#00D2EB] transition-colors"
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
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D2EB] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00D2EB] to-[#0284c7] text-[#0B111E] font-bold text-sm sm:text-base shadow-lg shadow-[#00D2EB]/20 hover:shadow-[#00D2EB]/40 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Enviar Mensagem via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 pt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D2EB]" />
                <span>Atendimento regido pelo sigilo profissional da OAB.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
