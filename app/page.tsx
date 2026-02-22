
"use client";

import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Simple loading placeholder - MUST be defined before dynamic imports
function SectionLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Dynamic imports with SSR disabled for mobile performance
// These components are heavy and don't need SSR - they load client-side only
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionLoader />,
  ssr: false, // Disabled for faster mobile loading
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionLoader />,
  ssr: false, // Disabled for faster mobile loading
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionLoader />,
  ssr: false, // Disabled for faster mobile loading - complex radial layout
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionLoader />,
  ssr: false, // Disabled for faster mobile loading
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-24" />,
  ssr: false, // Disabled for faster mobile loading
});

const DotNavigation = dynamic(() => import("@/components/DotNavigation"), {
  loading: () => null,
  ssr: false, // Disabled - not needed on mobile
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <DotNavigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

