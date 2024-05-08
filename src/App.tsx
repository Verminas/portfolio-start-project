import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {skillsInfo, sliderInfo, worksInfo} from "./index";
import {Particle} from "./components/Particle/Particle";
import React from "react";

function App() {
  return (
    <div className="App">
      <Particle/>
      <Header/>
      <Main/>
      <Skills skillsInfo={skillsInfo}/>
      <Works worksInfo={worksInfo}/>
      <Testimony sliderInfo={sliderInfo}/>
      <Contact/>
      <Slogan/>
      <Footer/>
    </div>
  );
}

export default App;
