import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components for faster initial render
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-screen" />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-screen" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-screen" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32" />,
});

const DotNavigation = dynamic(() => import("@/components/DotNavigation"), {
  loading: () => null,
});

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

