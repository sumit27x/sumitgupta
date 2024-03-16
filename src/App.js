import React from "react";
import "./App.css";

import Home from "./pages/home/Home.jsx";
import Work from "./pages/work/Work.jsx";
import Skill from "./pages/skills/Skill.jsx";
import Project from "./pages/project/Project.jsx";
import BackgroundEffect from "./pages/backgroundEffect/BackgroundEffect.jsx";
import Contact from "./pages/contact/Contact.jsx";

function App() {
  return (
    <>
      <div className="page-conatiner">
        <Home />
        <Work />
        <Skill />
        <Project />
        <Contact />
        <BackgroundEffect />
      </div>
    </>
  );
}

export default App;
