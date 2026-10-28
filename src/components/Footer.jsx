import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TALES_INFO } from '../data/siteData';
import { InstagramIcon, LinkedInIcon, LattesIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1322] border-t border-slate-800 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Identidade */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex-shrink-0">
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
                <p className="text-[11px] text-slate-400">
                  {TALES_INFO.officeName}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mestre pela UESC, Membro Imortal da ALJUSBA (Cadeira nº 20) e Professor Universitário de Direito. Atuação pautada pela combatividade técnica e excelência na docência e advocacia.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={TALES_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram Dr. Tales Almeida"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={TALES_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={TALES_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
                title="Currículo Lattes CNPq"
              >
                <LattesIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-white">
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
                  Atuação &amp; Escritório
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
            <h5 className="text-xs uppercase tracking-wider font-bold text-white">
              Atendimento Jurídico
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Itabuna, Ilhéus, Vitória da Conquista, Salvador — BA e atendimento eletrônico em todo o território nacional.
            </p>
            <div className="space-y-1 pt-1 font-mono text-[11px] text-slate-300">
              <p>WhatsApp: {TALES_INFO.phoneDirect}</p>
              <p>Escritório: {TALES_INFO.phoneOffice}</p>
              <p>E-mail: {TALES_INFO.emailDirect}</p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior com Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
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
                className="text-slate-300 hover:text-white transition-colors underline underline-offset-2"
              >
                Igor Hagge (@igor_hagge)
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-900 text-center text-[10px] text-slate-500">
          Este site possui caráter estritamente informativo, institucional e acadêmico, em total conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.
        </div>
      </div>
    </footer>
  );
};
