import React from 'react';
import './App.css';
import Header from './myComponents/header/Header';
import Home from './myComponents/home/Home';
import About from './myComponents/about/About';
import Skills from './myComponents/skills/Skills';
import Projects from './myComponents/projects/Projects';
import Qualification from './myComponents/qualification/Qualification';
import Contact from './myComponents/contact/Contact';
import Footer from './myComponents/footer/Footer';
import ScrollUp from './myComponents/scrollUp/ScrollUp'

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualification/>
      <Contact/>
    </main>

    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;

