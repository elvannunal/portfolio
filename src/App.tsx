import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DotNavigation from "./components/DotNavigation";
import Skills from "./pages/Skills";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <main className="pt-16"> 
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <DotNavigation sections={["home", "about", "skills", "contact"]} />
    </ThemeProvider>

  );
};

export default App;
