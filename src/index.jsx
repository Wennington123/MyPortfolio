import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGraduationCap, FaWhatsapp, FaEnvelope, FaHtml5, FaCss3Alt, FaGamepad, FaProjectDiagram, FaMarkdown, FaLaptopCode } from 'react-icons/fa';
import { SiR, SiJavascript, SiPython } from 'react-icons/si';
import { aboutData } from './data/about';
import './index.css';
import profilePic from './assets/1768608306043.jpeg';

export const Home = () => {
  return (
    <>
      <header className="navbar">
        <div className="nav-logo">&lt;{aboutData.name} /&gt;</div>
        <nav className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
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
          <h1>Olá, eu sou <span className="highlight">{aboutData.name}</span> 👋</h1>
          <h2>{aboutData.title}</h2>
          <p>
            Unindo a profundidade da pesquisa acadêmica com a agilidade do desenvolvimento web para construir aplicações incríveis.
          </p>
          
          <div className="cta-buttons">
            <a href="#projetos" className="btn-primary">Ver Projetos</a>
            <a href="https://www.linkedin.com/in/wennington-dias-23201b325/" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaLinkedin /> LinkedIn</a>
            <a href="http://lattes.cnpq.br/9679218930309453" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaGraduationCap /> Lattes</a>
            <a href="https://github.com/Wennington123" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaGithub /> GitHub</a>
          </div>
        </motion.div>
      </section>

      <section id="projetos" className="projects-section">
        <h2 className="section-title">Projetos em Destaque</h2>
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
              <p>
                Uma plataforma focada em otimizar e enriquecer os estudos. Este projeto reflete minha paixão por unir o desenvolvimento web com a educação, aplicando metodologias de aprendizagem.
              </p>
              <a href="https://getmep-study.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">Acessar Projeto 🚀</a>
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
              <h3>Softwares de Pesquisa Científica</h3>
              <p>
                Desenvolvi dois softwares específicos voltados para auxiliar pesquisas científicas, unindo análise de dados e minha vivência acadêmica para facilitar a investigação metodológica.
              </p>
              <a href="https://getmep-study.vercel.app/downloads" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Downloads 🔬</a>
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
              <h3>Memória Silábica (Game)</h3>
              <p>
                No meu tempo livre, exploro o desenvolvimento de games pela plataforma Construct 3. Este projeto é um jogo educacional publicado na Google Play Store.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.subsumeredu.game" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver na Play Store 🎮</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="habilidades" className="skills-section">
        <h2 className="section-title">Minhas Habilidades</h2>
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
        <h2 className="section-title">Vamos conversar sobre projetos?</h2>
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
    <Home />
  </React.StrictMode>
);