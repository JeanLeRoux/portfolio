import './App.css';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      {/* <Intro/> */}
      <About/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
