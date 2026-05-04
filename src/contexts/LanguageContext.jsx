// src/contexts/LanguageContext.jsx
import { createContext, useState, useEffect } from 'react';

// Cria o contexto
export const LanguageContext = createContext();

// Cria o provedor que vai abraçar o seu site
export const LanguageProvider = ({ children }) => {
  // Lê o idioma do LocalStorage ou define 'pt' como padrão
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'pt';
  });

  // Toda vez que o idioma mudar, salva no navegador
  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};