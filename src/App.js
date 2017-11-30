import React, { Component } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        Portfolio
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
      </div>
    );
  }
}

export default App;
