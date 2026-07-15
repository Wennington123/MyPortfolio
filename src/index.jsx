import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaGraduationCap, FaWhatsapp, FaEnvelope,
  FaHtml5, FaCss3Alt, FaGamepad, FaProjectDiagram, FaMarkdown,
  FaLaptopCode, FaRobot, FaCode, FaServer, FaTools, FaFlask,
  FaUsers, FaExternalLinkAlt, FaGithub as FaGithubIcon, FaGitlab
} from 'react-icons/fa';
import { SiR, SiJavascript, SiPython, SiReact, SiVite, SiNodedotjs, SiOpenai } from 'react-icons/si';
import { aboutData } from './data/about';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';
import './index.css';
import profilePic from './assets/1768608306043.jpeg';

const translations = {
  pt: {
    navProjects: "Projetos",
    navContact: "Contato",
    greeting: "Olá, eu sou",
    description: "Unindo a profundidade da pesquisa acadêmica com a agilidade do desenvolvimento web para construir aplicações incríveis.",
    btnProjects: "Ver Projetos",
    projectsTitle: "Projetos em Destaque",
    skillsTitle: "Minhas Habilidades",
    contactTitle: "Vamos conversar sobre projetos?",
    btnAccessFallback: "Acessar Projeto",
    filterAll: "Todos",
    filterWeb: "Web",
    filterDesktop: "Desktop",
    filterMobile: "Mobile",
    btnRepo: "Repositório",
    btnLive: "Ver Online"
  },
  en: {
    navProjects: "Projects",
    navContact: "Contact",
    greeting: "Hi, I am",
    description: "Bridging the depth of academic research with the agility of web development to build amazing applications.",
    btnProjects: "View Projects",
    projectsTitle: "Featured Projects",
    skillsTitle: "My Skills",
    contactTitle: "Let's talk about projects?",
    btnAccessFallback: "Access Project",
    filterAll: "All",
    filterWeb: "Web",
    filterDesktop: "Desktop",
    filterMobile: "Mobile",
    btnRepo: "Repository",
    btnLive: "Live Demo"
  }
};

const categoryIcons = {
  code: FaCode,
  server: FaServer,
  bot: FaRobot,
  tools: FaTools,
  flask: FaFlask,
  users: FaUsers
};

const techIcons = {
  JavaScript: SiJavascript,
  Python: SiPython,
  R: SiR,
  HTML: FaHtml5,
  HTML5: FaHtml5,
  CSS: FaCss3Alt,
  CSS3: FaCss3Alt,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Vite: SiVite,
  "Claude Code": SiOpenai,
  "OpenAI API": SiOpenai,
  "Whisper AI": SiOpenai,
  "Construct 3": FaGamepad,
  Iramuteq: FaProjectDiagram,
  RStudio: FaLaptopCode,
  Quarto: FaMarkdown,
  "Quarto MD": FaMarkdown
};

const techColors = {
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  R: "#276DC3",
  HTML: "#E34F26",
  HTML5: "#E34F26",
  CSS: "#1572B6",
  CSS3: "#1572B6",
  React: "#61DAFB",
  "Node.js": "#339933",
  Vite: "#646CFF",
  "Claude Code": "#D97757",
  "OpenAI API": "#10A37F",
  "Whisper AI": "#10A37F",
  "Construct 3": "#F08221",
  Iramuteq: "#9B59B6",
  RStudio: "#75AADB",
  Quarto: "#4CA5D0",
  "Quarto MD": "#4CA5D0"
};

export const Home = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];
  const currentAbout = aboutData[language] || aboutData;
  const currentProjects = projects[language];
  const currentSkills = skills[language];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? currentProjects
    : currentProjects.filter(p => p.category === activeFilter);

  const filters = [
    { key: 'all', label: t.filterAll },
    { key: 'web', label: t.filterWeb },
    { key: 'desktop', label: t.filterDesktop },
    { key: 'mobile', label: t.filterMobile }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">&lt;{currentAbout.name} /&gt;</div>
        <div className="nav-links">
          <a href="#projects">{t.navProjects}</a>
          <a href="#contact">{t.navContact}</a>
          <select
            className="lang-btn"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-image-container">
            <img src={profilePic} alt={currentAbout.name} className="profile-image" />
          </div>
          <h1>{t.greeting} <span className="highlight">{currentAbout.name}</span> 👋</h1>
          <h2>{currentAbout.title}</h2>
          <p>{t.description}</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">{t.btnProjects}</a>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION — REDESIGNED */}
      <section className="projects-section" id="projects">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.projectsTitle}
        </motion.h2>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-image-overlay">
                    <div className="project-actions">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-btn primary"
                        >
                          <FaExternalLinkAlt /> {t.btnLive}
                        </a>
                      )}
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-btn secondary"
                        >
                          <FaGithubIcon /> {t.btnRepo}
                        </a>
                      )}
                      {!project.liveLink && !project.repoLink && (
                        <span className="project-action-btn disabled">
                          {project.buttonLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.techStack.map((tech) => {
                      const Icon = techIcons[tech];
                      const color = techColors[tech] || "#94a3b8";
                      return (
                        <span
                          key={tech}
                          className="tech-tag"
                          style={{ borderColor: color + "40", color: color }}
                        >
                          {Icon && <Icon style={{ color }} />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SKILLS SECTION — REDESIGNED */}
      <section className="skills-section" id="skills">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.skillsTitle}
        </motion.h2>

        <div className="skills-grid">
          {currentSkills.map((skillGroup, groupIndex) => {
            const IconComponent = categoryIcons[skillGroup.icon] || FaCode;
            return (
              <motion.div
                key={skillGroup.category}
                className="skill-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(0,242,254,0.1)" }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <IconComponent />
                  </div>
                  <h3>{skillGroup.category}</h3>
                </div>
                <div className="skill-items">
                  {skillGroup.items.map((item) => {
                    const ItemIcon = techIcons[item];
                    const itemColor = techColors[item];
                    return (
                      <span
                        key={item}
                        className="skill-item-tag"
                        style={itemColor ? { borderColor: itemColor + "30", color: itemColor } : {}}
                      >
                        {ItemIcon && <ItemIcon />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT SECTION — preserved */}
      <section className="contact-section" id="contact">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.contactTitle}
        </motion.h2>
        <div className="contact-container">
          <a href="https://wa.me/5574988217793" target="_blank" rel="noopener noreferrer" className="contact-card">
            <FaWhatsapp className="contact-icon" />
            <span>(74) 98821-7793</span>
          </a>
          <a href="mailto:wenningtondiasx25@gmail.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <span>wenningtondiasx25@gmail.com</span>
          </a>
        </div>
        <div className="social-links">
          {(() => {
            const social = currentAbout.socialLinks || {};
            const icons = {
              linkedin: <FaLinkedin />,
              github: <FaGithubIcon />,
              gitlab: <FaGitlab />,
              lattes: "Lattes",
              portfolio: "Site"
            };
            return Object.entries(social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={key}
              >
                {icons[key] || key}
              </a>
            ));
          })()}
        </div>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <Home />
  </LanguageProvider>
);