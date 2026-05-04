import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGraduationCap, FaWhatsapp, FaEnvelope, FaHtml5, FaCss3Alt, FaGamepad, FaProjectDiagram, FaMarkdown, FaLaptopCode } from 'react-icons/fa';
import { SiR, SiJavascript, SiPython } from 'react-icons/si';
import { aboutData } from './data/about';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext'; // Importando o Contexto
import './index.css';
import profilePic from './assets/1768608306043.jpeg';

// Dicionário de traduções para os textos fixos desta página
const translations = {
  pt: {
    navProjects: "Projetos",
    navContact: "Contato",
    greeting: "Olá, eu sou",
    description: "Unindo a profundidade da pesquisa acadêmica com a agilidade do desenvolvimento web para construir aplicações incríveis.",
    btnProjects: "Ver Projetos",
    projectsTitle: "Projetos em Destaque",
    p1Desc: "Uma plataforma focada em otimizar e enriquecer os estudos. Este projeto reflete minha paixão por unir o desenvolvimento web com a educação, aplicando metodologias de aprendizagem.",
    p1Btn: "Acessar Projeto 🚀",
    p2Title: "Softwares de Pesquisa Científica",
    p2Desc: "Desenvolvi dois softwares específicos voltados para auxiliar pesquisas científicas, unindo análise de dados e minha vivência acadêmica para facilitar a investigação metodológica.",
    p2Btn: "Ver Downloads 🔬",
    p3Title: "Memória Silábica (Game)",
    p3Desc: "No meu tempo livre, exploro o desenvolvimento de games pela plataforma Construct 3. Este projeto é um jogo educacional publicado na Google Play Store.",
    p3Btn: "Ver na Play Store 🎮",
    skillsTitle: "Minhas Habilidades",
    contactTitle: "Vamos conversar sobre projetos?"
  },
  en: {
    navProjects: "Projects",
    navContact: "Contact",
    greeting: "Hi, I am",
    description: "Bridging the depth of academic research with the agility of web development to build amazing applications.",
    btnProjects: "View Projects",
    projectsTitle: "Featured Projects",
    p1Desc: "A platform focused on optimizing and enriching studies. This project reflects my passion for combining web development with education, applying learning methodologies.",
    p1Btn: "Access Project 🚀",
    p2Title: "Scientific Research Software",
    p2Desc: "I developed two specific software aimed at assisting scientific research, combining data analysis and my academic background to facilitate methodological investigation.",
    p2Btn: "View Downloads 🔬",
    p3Title: "Syllabic Memory (Game)",
    p3Desc: "In my free time, I explore game development using the Construct 3 platform. This project is an educational game published on the Google Play Store.",
    p3Btn: "View on Play Store 🎮",
    skillsTitle: "My Skills",
    contactTitle: "Let's talk about projects?"
  }
};

export const Home = () => {
  // Puxando o idioma atual e a função de trocar do contexto
  const { language, setLanguage } = useContext(LanguageContext);
  
  // Selecionando os textos corretos baseados no idioma
  const t = translations[language];
  
  // Proteção: caso aboutData ainda não tenha as chaves 'pt' e 'en', ele usa o fallback
  const currentAbout = aboutData[language] || aboutData;

  return (
    <>
      <header className="navbar">
        <div className="nav-logo">&lt;{currentAbout.name} /&gt;</div>
        <nav className="nav-links">
          {/* Links reduzidos para focar no scroll da página */}
          <a href="#projetos">{t.navProjects}</a>
          <a href="#contato">{t.navContact}</a>
          
          {/* Seletor de Idiomas com Bandeiras e Moldura */}
          <select 
            className="lang-btn"
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="pt">🇧🇷 PT-BR</option>
            <option value="en">🇺🇸 EN</option>
          </select>
        </nav>
      </header>

      <section id="inicio" className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="profile-image-container" whileHover={{ scale: 1.05 }}>
            <img src={profilePic} alt="Foto de perfil de Wennington" className="profile-image" />
          </motion.div>
          <h1>{t.greeting} <span className="highlight">{currentAbout.name}</span> 👋</h1>
          <h2>{currentAbout.title}</h2>
          <p>{t.description}</p>
          
          <div className="cta-buttons">
            <a href="#projetos" className="btn-primary">{t.btnProjects}</a>
            <a href="https://www.linkedin.com/in/wennington-dias-23201b325/" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaLinkedin /> LinkedIn</a>
            <a href="http://lattes.cnpq.br/9679218930309453" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaGraduationCap /> Lattes</a>
            <a href="https://github.com/Wennington123" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaGithub /> GitHub</a>
          </div>
        </motion.div>
      </section>

      <section id="projetos" className="projects-section">
        <h2 className="section-title">{t.projectsTitle}</h2>
        <div className="projects-grid">
          <motion.div 
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="project-info">
              <h3>GetMeP Study</h3>
              <p>{t.p1Desc}</p>
              <a href="https://getmep-study.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">{t.p1Btn}</a>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-info">
              <h3>{t.p2Title}</h3>
              <p>{t.p2Desc}</p>
              <a href="https://getmep-study.vercel.app/downloads" target="_blank" rel="noopener noreferrer" className="btn-primary">{t.p2Btn}</a>
            </div>
          </motion.div>

          <motion.div 
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="project-info">
              <h3>{t.p3Title}</h3>
              <p>{t.p3Desc}</p>
              <a href="https://play.google.com/store/apps/details?id=com.subsumeredu.game" target="_blank" rel="noopener noreferrer" className="btn-primary">{t.p3Btn}</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="habilidades" className="skills-section">
        <h2 className="section-title">{t.skillsTitle}</h2>
        <div className="skills-container">
          {[
            { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
            { icon: SiPython, name: "Python", color: "#3776AB" },
            { icon: SiR, name: "R", color: "#276DC3" },
            { icon: FaHtml5, name: "HTML", color: "#E34F26" },
            { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
            { icon: FaGamepad, name: "Construct 3", color: "#F08221" },
            { icon: FaProjectDiagram, name: "Iramuteq", color: "#9B59B6" },
            { icon: FaLaptopCode, name: "RStudio", color: "#75AADB" },
            { icon: FaMarkdown, name: "Quarto MD", color: "#4CA5D0" }
          ].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div key={index} className="skill-item" whileHover={{ scale: 1.1, y: -5 }}>
                <Icon className="skill-icon" style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="contato" className="contact-section">
        <h2 className="section-title">{t.contactTitle}</h2>
        <div className="contact-container">
          <motion.a 
            href="https://wa.me/5574988217793" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="contact-icon" />
            <span>(74) 98821-7793</span>
          </motion.a>
          <motion.a 
            href="mailto:wenningtondiasx25@gmail.com" 
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="contact-icon" />
            <span>wenningtondiasx25@gmail.com</span>
          </motion.a>
        </div>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* O LanguageProvider envolve todo o app para compartilhar o estado de idioma */}
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  </React.StrictMode>
);