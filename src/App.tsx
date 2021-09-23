import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* <Intro/> */}
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
