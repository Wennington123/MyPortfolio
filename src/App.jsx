import React, { useContext } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { LanguageContext } from './contexts/LanguageContext'; // Importando o contexto

function App() {
  // Puxando o estado do idioma e a função para alterá-lo
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <main>
      {/* Botão de Idioma fixo no topo direito */}
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 1000 
      }}>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          style={{ 
            padding: '8px 12px', 
            borderRadius: '8px', 
            backgroundColor: '#333', 
            color: '#fff', 
            border: '1px solid #555', 
            cursor: 'pointer',
            fontWeight: 'bold',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          <option value="pt">PT-BR</option>
          <option value="en">EN</option>
        </select>
      </div>

      {/* Por enquanto, vamos empilhar as seções uma embaixo da outra */}
      <Home />
      <About />
      <Projects />
    </main>
  );
}

export default App;