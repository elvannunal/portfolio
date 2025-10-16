import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DotNavigation from "./components/DotNavigation";

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
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <DotNavigation sections={["home", "about", "projects", "contact"]} />
    </ThemeProvider>

  );
};

export default App;
