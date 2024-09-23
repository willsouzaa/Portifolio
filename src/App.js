import './App.css';
import Header from './Componentes/Header';
import AboutMe from './Componentes/SobreMim';
import Skills from "./Componentes/Habilidades";
import Footer from './Componentes/Footer';
import Projetos from './Componentes/Projetos';

function App() {
  return (
    <div className="App">
     <Header />
     <AboutMe />
     <Skills />
     <Projetos />
     <Footer />
     
    </div>
  );
}

export default App;
