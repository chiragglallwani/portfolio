import './css/App.scss';
import Header from "./components/Header";
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Menu from './components/Menu';
import { useState } from 'react';
import About from './components/About';


function App() {

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
      
        <Intro />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
