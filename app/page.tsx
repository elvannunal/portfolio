
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports with proper loading states and SSR disabled for client components
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-24" />,
  ssr: true,
});

const DotNavigation = dynamic(() => import("@/components/DotNavigation"), {
  loading: () => null,
  ssr: false,
});

// Simple loading placeholder
function SectionLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Elvan Ünal | Ölçeklenebilir ve Performans Odaklı Yazılım Geliştirici",
  description: "C#, .NET teknolojileri ve modern JavaScript framework'leri konusunda güçlü bir altyapıya sahip Yazılım Geliştirici.",
  openGraph: {
    title: "Elvan Ünal | Ölçeklenebilir ve Performans Odaklı Yazılım Geliştirici",
    description: "Modern web uygulamaları ve ölçeklenebilir çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

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

