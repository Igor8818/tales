import {
  Briefcase,
  Scale,
  ShieldCheck,
  Laptop,
  GraduationCap,
  Award,
  BookOpen,
  Building2,
  Landmark,
  FileText,
} from 'lucide-react';

// ============================================================================
// DADOS REAIS — TALES ALMEIDA ANDRADE
// Advogado, Professor Universitário e Jurista | Almeida & Korontai Advogados
// Mestre pela UESC | Membro Imortal da ALJUSBA (Cadeira nº 20)
// ============================================================================

export const TALES_INFO = {
  name: 'Tales Almeida',
  fullName: 'Tales Almeida Andrade',
  role: 'Advogado, Professor Universitário e Jurista',
  tagline: 'Mestre pela UESC • Cadeira nº 20 da ALJUSBA • Sócio do Almeida & Korontai Advogados',
  officeName: 'Almeida & Korontai Sociedade de Advogados',
  officeShort: 'Almeida & Korontai Advogados',
  officeFounded: '2020',
  officePartners: 'Tales Almeida Andrade e Yana Luiza dos Santos Korontai',
  officeLogo: './images/ak-logo.jpg',
  officeBookLogo: './images/Livro1.jpg',
  city: 'Itabuna, Ilhéus, Vitória da Conquista e Salvador — BA',
  phoneDirect: '+55 (73) 99145-4652',
  whatsappNumber: '557391454652',
  whatsappUrl: 'https://wa.me/557391454652?text=Ol%C3%A1%2C%20Dr.%20Tales%20Almeida!%20Gostaria%20de%20agendar%20um%20atendimento.',
  emailDirect: 'tales@almeidakorontai.com.br',
  emailOffice: 'contato@almeidakorontai.com.br',
  instagramHandle: '@prof.talesalmeida',
  instagramUrl: 'https://www.instagram.com/prof.talesalmeida',
  linkedinUrl: 'https://www.linkedin.com/in/tales-almeida-72446055/',
  lattesUrl: 'http://lattes.cnpq.br/4107853619347208',
  lattesId: '4107853619347208',
};

export const DEFAULT_LAWYER_PHOTOS = {
  hero: './images/Inicio.png',
  about: './images/tales-office.jpg',
  contact: './images/secundaria.png',
};

export const PHOTO_PRESETS = [
  {
    id: 'principal',
    label: 'Retrato Executivo (Terno)',
    url: './images/principal.png',
  },
  {
    id: 'office',
    label: 'Gabinete & Escritório (Azul)',
    url: './images/tales-office.jpg',
  },
  {
    id: 'secundaria',
    label: 'Mesa de Trabalho (Escritório)',
    url: './images/secundaria.png',
  },
  {
    id: 'inicio',
    label: 'Perfil Acadêmico (Camisa Branca)',
    url: './images/Inicio.png',
  },
];

export const AREAS_ATUACAO = [
  {
    id: 'direito-trabalho',
    title: 'Direito e Processo do Trabalho',
    shortDesc:
      'Consultoria preventiva, contencioso trabalhista estratégico para trabalhadores e empresas, negociação coletiva e compliance laboral.',
    image: './images/tales-office.jpg',
    icon: Briefcase,
    fullContent: [
      'A atuação em Direito e Processo do Trabalho é um dos pilares centrais do escritório Almeida & Korontai Sociedade de Advogados, unindo prática processual combativa e profundo rigor acadêmico e doutrinário.',
      'Oferecemos assessoria completa tanto na defesa estratégica dos direitos de trabalhadores quanto na consultoria preventiva e contenciosa para empresas, buscando segurança jurídica, redução de passivos e condução técnica em todas as instâncias da Justiça do Trabalho (TRT e TST).',
      'Com pós-graduação específica pela UCAN / ESA Nacional e pesquisas publicadas no acervo JusLaboris do Tribunal Superior do Trabalho (TST), nossa atuação abrange desde reclamações trabalhistas complexas até negociações coletivas e novas morfologias do trabalho.'
    ],
    highlights: [
      'Reclamações trabalhistas, rescisões, vínculo de emprego e verbas trabalhistas',
      'Consultoria preventiva, auditoria e defesa empresarial trabalhista',
      'Negociação Coletiva do Trabalho e atuação perante sindicatos',
      'Novas relações de trabalho: plataformas digitais, e-sports e contratos especiais'
    ]
  },
  {
    id: 'direito-civel-securitario',
    title: 'Direito Cível, Contratual e Securitário',
    shortDesc:
      'Elaboração e revisão de contratos, responsabilidade civil, ações indenizatórias, direito securitário e proteção patrimonial.',
    image: './images/secundaria.png',
    icon: Scale,
    fullContent: [
      'As relações civis e empresariais demandam instrumentos contratuais sólidos e estratégias processuais precisas para prevenir litígios e assegurar a reparação integral de danos patrimoniais e extrapatrimoniais.',
      'No âmbito do Direito Securitário e Cível, o escritório Almeida & Korontai atua na análise de apólices, negativas indevidas de cobertura por seguradoras, sinistros, responsabilidade civil médica, empresarial e consumerista, além da cobrança e execução de títulos.',
      'Cada demanda é conduzida de forma personalizada, priorizando soluções ágeis, seguras e alinhadas à jurisprudência atualizada dos Tribunais Superiores.'
    ],
    highlights: [
      'Elaboração, revisão e execução de contratos civis e empresariais',
      'Direito Securitário: negativas de cobertura, sinistros e indenizações de seguros',
      'Responsabilidade civil, danos morais, materiais e estéticos',
      'Tutelas de urgência, obrigações, posse, propriedade e cobranças judiciais'
    ]
  },
  {
    id: 'direito-previdenciario',
    title: 'Direito Previdenciário',
    shortDesc:
      'Planejamento previdenciário, concessão e revisão de aposentadorias, benefícios por incapacidade, pensões e demandas contra o INSS.',
    image: './images/tales-office.jpg',
    icon: ShieldCheck,
    fullContent: [
      'Garantir a proteção social e o melhor benefício previdenciário exige conhecimento técnico minucioso das regras de transição, cálculos contributivos e procedimentos administrativos e judiciais perante o INSS.',
      'Com especialização em Direito Previdenciário pela Faculdade 2 de Julho / CEJAS (2024), o Dr. Tales Almeida conduz processos administrativos e ações judiciais previdenciárias com foco na máxima eficiência financeira e protetiva para o segurado.',
      'Atendemos segurados do Regime Geral (RGPS) e Regimes Próprios (RPPS), realizando planejamento previdenciário detalhado e atuando no restabelecimento de benefícios indeferidos ou cessados indevidamente.'
    ],
    highlights: [
      'Planejamento Previdenciário e simulação estratégica de aposentadoria',
      'Aposentadorias por idade, tempo de contribuição, especial e da pessoa com deficiência',
      'Auxílio por incapacidade temporária, aposentadoria por incapacidade permanente e BPC/LOAS',
      'Pensão por morte, revisões de benefícios e recursos administrativos e judiciais'
    ]
  },
  {
    id: 'direito-digital-empresarial',
    title: 'Direito Digital e Novas Tecnologias',
    shortDesc:
      'Assessoria jurídica para o ambiente digital, proteção de dados, contratos de tecnologia, crimes virtuais e relações laborais digitais.',
    image: './images/secundaria.png',
    icon: Laptop,
    fullContent: [
      'A transformação digital trouxe novos desafios jurídicos para empresas, profissionais liberais, criadores de conteúdo e organizações que operam no ambiente virtual.',
      'O escritório Almeida & Korontai possui atuação destacada em Direito Digital, aliando prática jurídica moderna e produção científica reconhecida sobre trabalho em plataformas digitais, e-sports e responsabilidade civil na internet.',
      'Prestamos suporte em adequação contratual, remoção de conteúdos ilícitos, preservação de provas digitais, defesa da honra e imagem online e consultoria para negócios digitais.'
    ],
    highlights: [
      'Responsabilidade civil na internet, proteção à imagem e remoção de conteúdo',
      'Contratos digitais, termos de uso e assessoria para negócios de tecnologia e e-sports',
      'Preservação de provas digitais e medidas judiciais de urgência',
      'Atuação multidisciplinar integrada do escritório (Penal, Tributário, Administrativo, Família e Consumidor)'
    ]
  }
];

export const CREDENCIAIS_TABS = {
  docencia: {
    label: 'Docência & ALJUSBA',
    icon: GraduationCap,
    items: [
      {
        period: '2025 — Atual',
        title: 'Professor do Curso de Direito — UNEX',
        institution: 'Centro Universitário de Excelência (UNEX)',
        description:
          'Atuação no magistério superior, com docência nas áreas de Direito Processual do Trabalho, Direito Processual Civil, Seguridade Social e Práticas Jurídicas Civil e Trabalhista, integrando fundamentação teórica, formação crítica e experiência profissional, com ênfase no desenvolvimento de competências jurídicas e no compromisso com o ensino, a pesquisa e a extensão universitária.'
      },
      {
        period: '2024 — 2026',
        title: 'Professor do Curso de Direito — Anhanguera de Itabuna',
        institution: 'Faculdade Anhanguera de Itabuna',
        description:
          'Atuação no magistério superior, com docência nas áreas de Direito do Trabalho, Direito Processual do Trabalho, Direito Civil (Obrigações e Contratos), Direito Processual Civil e Prática Trabalhista, aliando sólida formação teórica à aplicação prática do conhecimento jurídico, com compromisso com o ensino, a pesquisa e a extensão universitária.'
      },
      {
        period: 'Imortal Titular',
        title: 'Membro Imortal — Cadeira nº 20 da ALJUSBA',
        institution: 'Academia de Letras Jurídicas do Sul da Bahia',
        description:
          'Titular da Cadeira nº 20 da Academia de Letras Jurídicas do Sul da Bahia, em reconhecimento à relevante contribuição intelectual, literária e jurídica na região.'
      },
      {
        period: 'Contínuo',
        title: 'Parecerista de Periódicos e Pesquisador',
        description:
          'Avaliador de periódicos científicos jurídicos e pesquisador com atuação interdisciplinar nas áreas de Direito do Trabalho, Direito Coletivo do Trabalho, Direito Processual do Trabalho, Economia do Trabalho e Direito Processual Civil, dedicando-se à produção científica e à análise crítica das transformações jurídicas, econômicas e sociais.'
      }
    ]
  },
  formacao: {
    label: 'Mestrado & Pós-Graduações',
    icon: Award,
    items: [
      {
        period: '2023',
        title: 'Mestre em Economia Regional e Políticas Públicas',
        institution: 'Universidade Estadual de Santa Cruz (UESC)',
        description:
          'Mestrado acadêmico em Economia Regional e Políticas Públicas, com pesquisa concentrada na área de Economia do Trabalho, abrangendo as dinâmicas do mercado de trabalho, as desigualdades socioeconômicas, o desenvolvimento regional e as interações entre políticas públicas, emprego e renda.'
      },
      {
        period: '2024',
        title: 'Pós-Graduado em Direito Previdenciário',
        institution: 'Faculdade 2 de Julho / CEJAS',
        description:
          'Especialização lato sensu com aprofundamento nos Regimes Geral e Próprios de Previdência Social, abrangendo a proteção previdenciária, os benefícios, seus requisitos de concessão e os aspectos jurídicos e processuais do Direito Previdenciário.'
      },
      {
        period: '2021',
        title: 'Pós-Graduado em Direito e Processo do Trabalho',
        institution: 'Universidade Cândido Mendes (UCAN) / ESA Nacional',
        description:
          'Especialização promovida em parceria com a Escola Superior de Advocacia Nacional (OAB), focada na prática processual trabalhista contemporânea.'
      },
      {
        period: '2019',
        title: 'Bacharel em Direito',
        institution: 'Faculdade do Sul — FacSul (Unime Itabuna)',
        description:
          'Formação jurídica marcada pelo protagonismo acadêmico, produção de artigos e atuação prática desde os primeiros semestres.'
      }
    ]
  },
  trajetoria: {
    label: 'Escritório & Trajetória',
    icon: Building2,
    items: [
      {
        period: '2020 — Atual',
        title: 'Sócio-Fundador — Almeida & Korontai Sociedade de Advogados',
        institution: 'Itabuna, Ilhéus, Vitória da Conquista e Salvador — BA',
        description:
          'Sociedade de advogados fundada com a Dra. Yana Luiza dos Santos Korontai, com atuação em todo o território nacional em Direito Trabalhista, Cível, Previdenciário, Digital, Securitário, Penal, Tributário, Família e Consumidor.'
      },
      {
        period: '2013 — 2019',
        title: 'Articulista e Colaborador Jurídico',
        institution: 'Jornal Direitos',
        description:
          'Seis anos de contribuição contínua na difusão do conhecimento jurídico, análise legislativa e debate sobre direitos fundamentais.'
      },
      {
        period: '2011 — 2013',
        title: 'Estagiário do Ministério Público do Estado da Bahia',
        institution: '13ª Promotoria Regional de Justiça — MP/BA',
        description:
          'Vivência prática institucional junto ao Ministério Público da Bahia, atuando no acompanhamento processual e na defesa da ordem jurídica.'
      }
    ]
  }
};

export const ARTIGOS_PUBLICADOS = [
  {
    id: 1,
    category: 'JusLaboris • Biblioteca Digital do TST',
    year: 'Direito do Trabalho & Gênero',
    title: 'Vínculo empregatício entre cônjuges e a teoria do capital invisível investido na maternidade',
    summary:
      'Estudo científico indexado na Biblioteca Digital JusLaboris do Tribunal Superior do Trabalho (TST) que analisa o reconhecimento de vínculo laboral entre cônjuges sob a ótica da divisão sexual do trabalho e do capital invisível materno.',
    image: './images/jusbrasil.jpg',
    publisher: 'JusLaboris / TST',
    url: 'https://juslaboris.tst.jus.br/handle/20.500.12178/217734'
  },
  {
    id: 2,
    category: 'JusLaboris • Biblioteca Digital do TST',
    year: 'Direito do Trabalho & Tecnologia',
    title: 'A configuração da relação de emprego no âmbito dos e-sports',
    summary:
      'Pesquisa integrante do acervo do Tribunal Superior do Trabalho (TST) sobre os elementos fático-jurídicos da relação de emprego dos ciberatletas profissionais nos esportes eletrônicos (e-sports).',
    image: './images/jusbrasil.png',
    publisher: 'JusLaboris / TST',
    url: 'https://juslaboris.tst.jus.br/handle/20.500.12178/211199?locale-attribute=es'
  },
  {
    id: 3,
    category: 'Revista UNIFACS (REDU)',
    year: 'Direito do Trabalho Contemporâneo',
    title: 'Nos Bastidores do Marketing Multinível e das Vendas de Cosméticos: O Trabalho das Revendedoras à Luz da Legislação Trabalhista',
    summary:
      'Análise crítica das condições de trabalho e da natureza jurídica do vínculo das revendedoras no setor de cosméticos e marketing multinível perante a CLT e a jurisprudência trabalhista.',
    image: './images/02.png',
    publisher: 'Revista UNIFACS',
    url: 'https://revistas.unifacs.br/index.php/redu/article/view/8758'
  },
  {
    id: 4,
    category: 'Revista UNIFACS (REDU)',
    year: 'Direito do Trabalho & Religião',
    title: 'A Difusão da Fé e o Direito do Trabalho: O Vínculo Existente Entre Líderes Religiosos e Entidades Religiosas',
    summary:
      'Investigação doutrinária e jurisprudencial acerca das fronteiras entre a vocação espiritual e a subordinação jurídica que caracteriza o contrato de trabalho em instituições religiosas.',
    image: './images/02.png',
    publisher: 'Revista UNIFACS',
    url: 'https://revistas.unifacs.br/index.php/redu/article/view/8640'
  },
  {
    id: 5,
    category: 'Revista Científica CJSIURJ',
    year: 'Processo e Princípios Trabalhistas',
    title: 'Análise Legal da Flexibilização do Controle de Jornada de Trabalho com Vistas ao Princípio Protetivo do Trabalhador',
    summary:
      'Artigo publicado na Revista Científica do Instituto Universitário do Rio de Janeiro avaliando os impactos das normas de flexibilização de jornada frente ao princípio da proteção.',
    image: './images/03.png',
    publisher: 'Instituto Universitário (CJSIURJ)',
    url: 'https://revista.institutouniversitario.com.br/index.php/cjsiurj/article/view/89'
  },
  {
    id: 6,
    category: 'Criminologia & Direito Penal',
    year: 'Academia.edu',
    title: "O Direito Penal do 'Amigo' e o discurso do Direito Penal de Classe",
    summary:
      'Reflexão crítica sobre a seletividade do sistema penal brasileiro, analisando a dualidade de tratamento punitivo a partir das teorias criminológicas contemporâneas.',
    image: './images/01.png',
    publisher: 'Academia.edu',
    url: 'https://www.academia.edu/85742069/O_Direito_Penal_do_Amigo_e_o_discurso_do_Direito_Penal_de_Classe'
  }
];
