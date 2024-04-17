import React from 'react';
import Sidebar from './component/Sidebar';
import About from './component/Sobre-mim/About';
import Welcome from './component/Bem-vindo/Welcome';
import Habilidades from './component/Habilidades/Habilidades';
import Projetos from './component/Projetos/Projetos';
import Reviws from './component/Reviws/Avaliações';
import Footer from './component/Footer/RodaPe';
import './App.css';

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
        <main>
        <header>
          <Welcome></Welcome>
        </header>
          <About></About>
          <Habilidades></Habilidades>
          <Projetos></Projetos>
          <Reviws></Reviws>
          <Footer></Footer>
        </main>
    </div>
  );
}

export default App;
