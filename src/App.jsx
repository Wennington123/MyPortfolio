import React from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

function App() {
  return (
    <main>
      {/* Por enquanto, vamos empilhar as seções uma embaixo da outra */}
      <Home />
      <About />
      <Projects />
    </main>
  );
}

export default App;