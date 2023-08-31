import React from "react";
import { Header } from "./components/Header";
import { Greetings } from "./components/Greetings";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Greetings />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
