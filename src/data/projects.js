import getmepImg from '../assets/getmep-study-preview.png';
import wikiendumImg from '../assets/wikiendum-preview.png';
import memoriaImg from '../assets/memoria-preview.png'; 
import flowstudioImg from '../assets/flowstudio-preview.png'; // <- Verifique o nome da imagem
import featherImg from '../assets/feathertranskript-preview.png'; // <- Verifique o nome da imagem

export const projects = {
  pt: [
    {
      id: 1,
      title: "GetMep Study",
      description: "Plataforma representante do Grupo de Estudos Teórico-Metodológicos em Pesquisa e Educação, desenvolvida com foco na experiência do usuário e componentização. O projeto encontra-se em produção utilizando deploy contínuo.",
      techStack: ["Python", "JavaScript", "CSS", "R", "HTML"],
      repoLink: "https://github.com/wdaquino/getmep-study",
      liveLink: "https://getmep-study.vercel.app/",
      image: getmepImg,
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
      featured: true,
      buttonLabel: "Acessar Projeto 🚀"
    },
    {
      id: 3,
      title: "FlowStudio",
      description: "Ferramenta desktop de alta precisão para automatizar a construção de fluxogramas de revisão sistemática em conformidade com a Diretriz PRISMA 2020. Permite exportação em alta resolução (PNG) e vetor editável (SVG).",
      techStack: ["Desktop App", "Windows"], 
      repoLink: "", 
      liveLink: "https://getmep-study.vercel.app/downloads", // Link sugerido baseado no seu código anterior
      image: flowstudioImg, 
      featured: true,
      buttonLabel: "Download (Windows) 💻"
    },
    {
      id: 4,
      title: "FeatherTranskript",
      description: "Transcritor de áudio gratuito e de alta precisão alimentado pela biblioteca Whisper (Python). Software otimizado para sistemas Windows 10 e 11 (64-bit), facilitando a transcrição de dados para pesquisas e estudos.",
      techStack: ["Python", "Whisper AI", "Windows"], 
      repoLink: "", 
      liveLink: "https://getmep-study.vercel.app/downloads", // Link sugerido baseado no seu código anterior
      image: featherImg, 
      featured: true,
      buttonLabel: "Download (Windows) 💻"
    },
    {
      id: 5,
      title: "Memória Silábica (Game)",
      description: "Ferramenta lúdica focada no desenvolvimento da consciência fonológica infantil. Fruto de pesquisas da Universidade de Pernambuco (UPE), o jogo estimula a alfabetização por meio de aliteração, exigindo que a criança combine imagens pela sílaba inicial utilizando estímulos visuais e auditivos.",
      techStack: ["Construct 3", "Lógica de Jogos", "Pesquisa Científica"], 
      repoLink: "", 
      liveLink: "https://play.google.com/store/apps/details?id=com.subsumeredu.game",
      image: memoriaImg, 
      featured: true,
      buttonLabel: "Ver na Play Store 🎮"
    }
  ],
  en: [
    {
      id: 1,
      title: "GetMep Study",
      description: "Representative platform of the Theoretical-Methodological Study Group in Research and Education, developed with a focus on user experience and componentization. The project is currently in production using continuous deployment.",
      techStack: ["Python", "JavaScript", "CSS", "R", "HTML"],
      repoLink: "https://github.com/wdaquino/getmep-study",
      liveLink: "https://getmep-study.vercel.app/",
      image: getmepImg,
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
      featured: true,
      buttonLabel: "Access Project 🚀"
    },
    {
      id: 3,
      title: "FlowStudio",
      description: "High-precision desktop tool to automate the construction of systematic review flowcharts in compliance with the PRISMA 2020 Guideline. Allows export in high resolution (PNG) and editable vector (SVG).",
      techStack: ["Desktop App", "Windows"], 
      repoLink: "", 
      liveLink: "https://getmep-study.vercel.app/downloads",
      image: flowstudioImg,
      featured: true,
      buttonLabel: "Download (Windows) 💻"
    },
    {
      id: 4,
      title: "FeatherTranskript",
      description: "Free and high-precision audio transcriber powered by the Whisper library (Python). Software optimized for Windows 10 and 11 (64-bit) systems, facilitating data transcription for research and studies.",
      techStack: ["Python", "Whisper AI", "Windows"], 
      repoLink: "", 
      liveLink: "https://getmep-study.vercel.app/downloads",
      image: featherImg,
      featured: true,
      buttonLabel: "Download (Windows) 💻"
    },
    {
      id: 5,
      title: "Syllabic Memory (Game)",
      description: "A playful tool focused on the development of children's phonological awareness. Born from research at the University of Pernambuco (UPE), the game stimulates literacy through alliteration, requiring children to match images by their initial syllable using visual and auditory stimuli.",
      techStack: ["Construct 3", "Game Logic", "Scientific Research"], 
      repoLink: "", 
      liveLink: "https://play.google.com/store/apps/details?id=com.subsumeredu.game",
      image: memoriaImg, 
      featured: true,
      buttonLabel: "View on Play Store 🎮"
    }
  ]
};