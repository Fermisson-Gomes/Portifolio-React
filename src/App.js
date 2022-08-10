
import { Route } from 'react-router-dom';
import './App.css';
import './CSS/mobile.css';
import About from './pages/About';
import Contact from './pages/Contact';
import HardSkills from './pages/HardSkills';
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <section>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/hardskills" component={ HardSkills } />
      <Route path="/contact" component={ Contact } />
      <Route path="/projects" component={Projects} />
    </section>
  );
}

export default App;
