
import React from "react";
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio/index.js';

import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>

      </main>
    </div>
  )
}

export default App;
