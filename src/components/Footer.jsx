import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';
import { InstagramIcon, LinkedInIcon, LattesIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07101E] border-t-2 border-[#B8924A]/40 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Identidade */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg overflow-hidden border border-[#B8924A]/40 bg-[#0B1B33] flex-shrink-0 shadow-md">
                <img
                  src={TALES_INFO.officeLogo}
                  alt="Almeida & Korontai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif-editorial text-xl font-bold text-white">
                  Tales Almeida Andrade
                </h4>
                <p className="text-[11px] text-[#B8924A] font-semibold">
                  {TALES_INFO.officeName}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Especialista em Direito do Trabalho e Mestre em Economia Regional e Políticas Públicas pela UESC. Membro Imortal da Academia de Letras Jurídicas do Sul da Bahia (ALJUSBA), ocupante da Cadeira nº 20, e Professor Universitário de Direito. Sua trajetória acadêmica e profissional é marcada pelo rigor técnico, pela atuação jurídica combativa e pelo compromisso permanente com a excelência na advocacia e na docência.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={TALES_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B1B33] border border-slate-700 hover:border-[#B8924A] hover:text-[#E6CA85] flex items-center justify-center transition-colors"
                title="Instagram Dr. Tales Almeida"
              >
                <InstagramIcon className="w-4 h-4 text-[#B8924A]" />
              </a>
              <a
                href={TALES_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B1B33] border border-slate-700 hover:border-[#B8924A] hover:text-[#E6CA85] flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 text-[#B8924A]" />
              </a>
              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B1B33] border border-slate-700 hover:border-[#B8924A] hover:text-[#E6CA85] flex items-center justify-center transition-colors"
                title="Currículo Lattes CNPq"
              >
                <LattesIcon className="w-4 h-4 text-[#B8924A]" />
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#E6CA85]">
              Navegação
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-white transition-colors">
                  Áreas de Atuação &amp; Escritório
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Perfil &amp; Cátedra
                </a>
              </li>
              <li>
                <a href="#artigos" className="hover:text-white transition-colors">
                  Artigos &amp; Publicações
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato &amp; WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & Locais */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#E6CA85]">
              Atendimento Jurídico
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              Atendimento jurídico presencial em Itabuna, Ilhéus, Vitória da Conquista e Salvador (BA), com atendimento on-line em todo o território nacional.
            </p>
            <div className="space-y-1 pt-1 font-mono text-[11px] text-slate-300">
              <p>WhatsApp: {TALES_INFO.phoneDirect}</p>
              <p>E-mail: {TALES_INFO.emailDirect}</p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior com Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} Dr. Tales Almeida Andrade — Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <p>
              Desenvolvido por{' '}
              <a
                href="https://github.com/Igor8818"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#E6CA85] transition-colors underline underline-offset-2"
              >
                Igor Hagge (@igor_hagge)
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0B1B33] border border-slate-700 text-slate-300 hover:text-white hover:border-[#B8924A] transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 text-center text-[10px] text-slate-500">
          Este site possui caráter estritamente informativo, institucional e acadêmico, em total conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.
        </div>
      </div>
    </footer>
  );
};
