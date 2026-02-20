import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import DotNavigation from "@/components/DotNavigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <DotNavigation />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

