import './App.css';
import Header from './Componentes/Header';
import AboutMe from './Componentes/SobreMim';
import Skills from "./Componentes/Habilidades";
import Contact from './Componentes/Contato/indes';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <AboutMe />
     <Skills />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
