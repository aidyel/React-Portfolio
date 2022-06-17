
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio/index.js';
import Container from './components/Container'
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div>
             <Container></Container>
      <main>

        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>

      </main>

      <Footer></Footer>
    </div>
  )
}

export default App;
