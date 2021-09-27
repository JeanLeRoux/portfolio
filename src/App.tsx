import './App.css';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import WorkHistory from './components/WorkHistory/WorkHistory';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <WorkHistory/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
