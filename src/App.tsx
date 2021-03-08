import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Skill/>
    </div>
  );
}

export default App;
