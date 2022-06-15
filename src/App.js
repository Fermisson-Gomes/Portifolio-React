
import { Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import HardSkills from './pages/HardSkills';
import Home from './pages/Home'

function App() {
  return (
    <section>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/hardskills" component={ HardSkills } />
    </section>
  );
}

export default App;
