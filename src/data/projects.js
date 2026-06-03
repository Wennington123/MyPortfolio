import getmepImg from '../assets/getmep-study-preview.png';
import wikiendumImg from '../assets/wikiendum-preview.png';
import memoriaImg from '../assets/memoria-preview.png';
import flowstudioImg from '../assets/flowstudio-preview.png';
import featherImg from '../assets/feathertranskript-preview.png';

// TODO: Adicionar imagens reais para os novos projetos em src/assets/ e importar aqui
// import vivaImg from '../assets/viva-preview.png';
// import misterAcaiImg from '../assets/mister-acai-preview.png';
// import painelIfrnImg from '../assets/painel-ifrn-preview.png';

export const projects = {
  pt: [
    {
      id: 1,
      title: "GetMep Study",
      description: "Plataforma representante do Grupo de Estudos Teórico-Metodológicos em Pesquisa e Educação. Inclui painel web interativo para análise de dados (PRISMA 2020). Desenvolvida com foco na experiência do usuário e deploy contínuo.",
      techStack: ["Python", "JavaScript", "CSS", "R", "HTML", "Shiny"],
      repoLink: "https://github.com/wdaquino/getmep-study",
      liveLink: "https://getmep.shinyapps.io/prisma2020-ptbr/",
      image: getmepImg,
      category: "web",
      featured: true,
      buttonLabel: "Acessar Projeto 🚀"
    },
    {
      id: 2,
      title: "Wikiendum",
      description: "Dicionário colaborativo focado em mapear a literatura acadêmica. O projeto centraliza múltiplas definições de termos complexos nas ciências humanas, evidenciando como diferentes autores e escolas de pensamento interpretam o mesmo fenômeno.",
      techStack: ["React", "JavaScript", "CSS", "Vite", "Node.js", "HTML"],
      repoLink: "https://github.com/wdaquino/wikiendum",
      liveLink: "https://wikiendum.vercel.app/",
      image: wikiendumImg,
      category: "web",
      featured: true,
      buttonLabel: "Acessar Projeto 🚀"
    },
    {
      id: 3,
      title: "FlowStudio",
      description: "Ferramenta desktop de alta precisão para automatizar a construção de fluxogramas de revisão sistemática em conformidade com a Diretriz PRISMA 2020. Permite exportação em alta resolução (PNG) e vetor editável (SVG).",
      techStack: ["Python", "Desktop App", "Windows"],
      repoLink: "",
      liveLink: "https://getmep-study.vercel.app/downloads",
      image: flowstudioImg,
      category: "desktop",
      featured: true,
      buttonLabel: "Download (Windows) 💻"
    },
    {
      id: 4,
      title: "FeatherTranskript",
      description: "Transcritor de áudio gratuito e de alta precisão alimentado pela biblioteca Whisper (Python). Disponível também como versão web otimizada via Streamlit, facilitando a transcrição de dados para pesquisas e estudos.",
      techStack: ["Python", "Whisper AI", "Streamlit", "Windows"],
      repoLink: "",
      liveLink: "https://feathertranskriptweb.streamlit.app/",
      image: featherImg,
      category: "web",
      featured: true,
      buttonLabel: "Acessar Versão Web 🌐"
    },
    {
      id: 5,
      title: "Memória Silábica (Game)",
      description: "Ferramenta lúdica focada no desenvolvimento da consciência fonológica infantil. Fruto de pesquisas da Universidade de Pernambuco (UPE), o jogo estimula a alfabetização por meio de aliteração.",
      techStack: ["Construct 3", "Lógica de Jogos", "Pesquisa Científica"],
      repoLink: "",
      liveLink: "https://play.google.com/store/apps/details?id=com.subsumeredu.game",
      image: memoriaImg,
      category: "mobile",
      featured: true,
      buttonLabel: "Ver na Play Store 🎮"
    },
    {
      id: 6,
      title: "Projeto VIVA",
      description: "Plataforma web para comunicação estruturada entre família e educação, desenvolvida para o Instituto Água Viva, conectando pessoas através da tecnologia.",
      techStack: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/Wennington123/projeto-viva-ong",
      liveLink: "https://github.com/Wennington123/projeto-viva-ong",
      image: getmepImg, // TODO: Substituir por imagem real (ex: vivaImg)
      category: "web",
      featured: true,
      buttonLabel: "Ver Repositório 💻"
    },
    {
      id: 7,
      title: "Mister Açaí - Cardápio Digital",
      description: "MVP (Produto Mínimo Viável) de cardápio digital focado em entregar valor imediato e uma experiência de usuário fluida para clientes de delivery.",
      techStack: ["JavaScript", "HTML", "CSS"],
      repoLink: "https://github.com/Wennington123/cardapiomisteracai",
      liveLink: "https://github.com/Wennington123/cardapiomisteracai",
      image: getmepImg, // TODO: Substituir por imagem real (ex: misterAcaiImg)
      category: "web",
      featured: true,
      buttonLabel: "Ver Repositório 💻"
    },
    {
      id: 8,
      title: "Painel Autobiográfico IFRN",
      description: "Painel autobiográfico interativo elaborado para a disciplina de Teorias, Metodologias e Planejamento Pedagógico em EaD da especialização em EaD na EPT.",
      techStack: ["HTML", "CSS", "Educação a Distância"],
      repoLink: "https://github.com/Wennington123/Painel-Autobiogr-fico_IFRN",
      liveLink: "https://github.com/Wennington123/Painel-Autobiogr-fico_IFRN",
      image: getmepImg, // TODO: Substituir por imagem real (ex: painelIfrnImg)
      category: "web",
      featured: true,
      buttonLabel: "Ver Repositório 💻"
    }
  ],
  en: [
    {
      id: 1,
      title: "GetMep Study",
      description: "Representative platform of the Theoretical-Methodological Study Group in Research and Education. Includes an interactive web panel for data analysis (PRISMA 2020). Developed with a focus on user experience and continuous deployment.",
      techStack: ["Python", "JavaScript", "CSS", "R", "HTML", "Shiny"],
      repoLink: "https://github.com/wdaquino/getmep-study",
      liveLink: "https://getmep.shinyapps.io/prisma2020-ptbr/",
      image: getmepImg,
      category: "web",
      featured: true,
      buttonLabel: "Access Project 🚀"
    },
    {
      id: 2,
      title: "Wikiendum",
      description: "A collaborative dictionary focused on mapping academic literature. The project centralizes multiple definitions of complex terms in the humanities, highlighting how different authors and schools of thought interpret the same phenomenon.",
      techStack: ["React", "JavaScript", "CSS", "Vite", "Node.js", "HTML"],
      repoLink: "https://github.com/wdaquino/wikiendum",
      liveLink: "https://wikiendum.vercel.app/",
      image: wikiendumImg,
      category: "web",
      featured: true,
      buttonLabel: "Access Project 🚀"
    },
    {
      id: 3,
      title: "FlowStudio",
      description: "High-precision desktop tool to automate the construction of systematic review flowcharts in compliance with the PRISMA 2020 Guideline. Allows export in high resolution (PNG) and editable vector (SVG).",
      techStack: ["Python", "Desktop App", "Windows"],
      repoLink: "",
      liveLink: "https://getmep-study.vercel.app/downloads",
      image: flowstudioImg,
      category: "desktop",
      featured: true,
      buttonLabel: "Download (Windows) 💻"
    },
    {
      id: 4,
      title: "FeatherTranskript",
      description: "Free and high-precision audio transcriber powered by the Whisper library (Python). Also available as an optimized web version via Streamlit, facilitating data transcription for research and studies.",
      techStack: ["Python", "Whisper AI", "Streamlit", "Windows"],
      repoLink: "",
      liveLink: "https://feathertranskriptweb.streamlit.app/",
      image: featherImg,
      category: "web",
      featured: true,
      buttonLabel: "Access Web Version 🌐"
    },
    {
      id: 5,
      title: "Syllabic Memory (Game)",
      description: "A playful tool focused on the development of children's phonological awareness. Born from research at the University of Pernambuco (UPE), the game stimulates literacy through alliteration.",
      techStack: ["Construct 3", "Game Logic", "Scientific Research"],
      repoLink: "",
      liveLink: "https://play.google.com/store/apps/details?id=com.subsumeredu.game",
      image: memoriaImg,
      category: "mobile",
      featured: true,
      buttonLabel: "View on Play Store 🎮"
    },
    {
      id: 6,
      title: "Projeto VIVA",
      description: "Web platform for structured communication between family and education, developed for the Água Viva Institute, connecting people through technology.",
      techStack: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/Wennington123/projeto-viva-ong",
      liveLink: "https://github.com/Wennington123/projeto-viva-ong",
      image: getmepImg, // TODO: Replace with real image (e.g., vivaImg)
      category: "web",
      featured: true,
      buttonLabel: "View Repository 💻"
    },
    {
      id: 7,
      title: "Mister Açaí - Digital Menu",
      description: "MVP (Minimum Viable Product) of a digital menu focused on delivering immediate value and a smooth user experience for delivery customers.",
      techStack: ["JavaScript", "HTML", "CSS"],
      repoLink: "https://github.com/Wennington123/cardapiomisteracai",
      liveLink: "https://github.com/Wennington123/cardapiomisteracai",
      image: getmepImg, // TODO: Replace with real image (e.g., misterAcaiImg)
      category: "web",
      featured: true,
      buttonLabel: "View Repository 💻"
    },
    {
      id: 8,
      title: "Autobiographical Panel IFRN",
      description: "Interactive autobiographical panel developed for the Theories, Methodologies, and Pedagogical Planning in Distance Education course of the specialization in Distance Education at EPT.",
      techStack: ["HTML", "CSS", "Distance Education"],
      repoLink: "https://github.com/Wennington123/Painel-Autobiogr-fico_IFRN",
      liveLink: "https://github.com/Wennington123/Painel-Autobiogr-fico_IFRN",
      image: getmepImg, // TODO: Replace with real image (e.g., painelIfrnImg)
      category: "web",
      featured: true,
      buttonLabel: "View Repository 💻"
    }
  ]
};