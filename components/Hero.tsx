
"use client";

import { memo, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { socialLinks } from "@/lib/data";

// Memoized scroll handler
const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Smooth Marquee Component - lightweight and performant
const MarqueeText = memo(function MarqueeText({ 
  texts, 
  isDark 
}: { 
  texts: string[]; 
  isDark: boolean;
}) {
  const combinedText = texts.join("  •  ");
  
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* First set */}
        <span className="gradient-text-vibrant text-lg md:text-xl lg:text-2xl font-semibold px-4">
          {combinedText}
        </span>
        {/* Duplicate for seamless loop */}
        <span className="gradient-text-vibrant text-lg md:text-xl lg:text-2xl font-semibold px-4">
          {combinedText}
        </span>
      </motion.div>
    </div>
  );
});

MarqueeText.displayName = 'MarqueeText';

// Particles - reduced for mobile
const Particle = memo(function Particle({ 
  x, y, size, delay 
}: { 
  x: number; 
  y: number; 
  size: number; 
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -40, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
});

// Memoized Particles component
const Particles = memo(function Particles({ isMobile = false }: { isMobile?: boolean }) {
  const count = isMobile ? 6 : 15;
  const particles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    })), [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} size={p.size} delay={p.delay} />
      ))}
    </div>
  );
});

Particles.displayName = 'Particles';

// Code card - desktop only
const CodeCard = memo(function CodeCard({ isDark }: { isDark: boolean }) {
  const codeLines = [
    { indent: 0, code: "const developer = {", color: "text-purple-400" },
    { indent: 1, code: "name: 'Elvan',", color: "text-blue-400" },
    { indent: 1, code: "skills: ['React', 'Angular'],", color: "text-green-400" },
    { indent: 1, code: "available: true", color: "text-cyan-400" },
    { indent: 0, code: "};", color: "text-purple-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`hidden lg:block relative rounded-xl overflow-hidden backdrop-blur-xl ${
        isDark 
          ? "bg-zinc-900/80 border border-zinc-700/50" 
          : "bg-white/80 border border-zinc-200"
      }`}
    >
      {/* Window controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700/30">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className={`ml-2 text-xs ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
          developer.ts
        </span>
      </div>
      
      {/* Code content */}
      <div className="p-4 font-mono text-sm">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className="flex"
            style={{ paddingLeft: line.indent * 16 }}
          >
            <span className="text-zinc-500 select-none w-6">{i + 1}</span>
            <span className={line.color}>{line.code}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

CodeCard.displayName = 'CodeCard';

// Main Hero Component - Memoized
const Hero = memo(function Hero() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const marqueeTexts = useMemo(() => language === "tr" 
    ? ["Ölçeklenebilir Yazılım", "Modern Web Deneyimleri", "Clean Code", "Performans Odaklı"]
    : ["Scalable Software", "Modern Web Experiences", "Clean Code", "Performance First"], 
  [language]);

  const handleCtaClick = () => {
    scrollToSection("#contact");
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-hero"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div 
          className={`absolute inset-0 opacity-[0.02]`}
          style={{
            backgroundImage: isDark 
              ? `linear-gradient(rgba(168, 85, 247, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 1) 1px, transparent 1px)`
              : `linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Gradient orbs */}
        <div className={`absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] ${
          isDark ? "bg-purple-600/15" : "bg-purple-300/15"
        }`} />
        
        <div className={`absolute bottom-0 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full blur-[80px] md:blur-[120px] ${
          isDark ? "bg-blue-600/10" : "bg-blue-300/10"
        }`} />
        
        {/* Particles */}
        <Particles isMobile={true} />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6"
            >
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium ${
                isDark 
                  ? "bg-purple-500/10 border border-purple-500/20 text-purple-400" 
                  : "bg-purple-100 border border-purple-200 text-purple-600"
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                {language === "tr" ? "Yeni projelere açık" : "Open to new projects"}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 tracking-tight"
            >
              <span className={isDark ? "text-white" : "text-zinc-900"}>
                {language === "tr" ? "Merhaba, ben " : "Hi, I'm "}
              </span>
              <span className="gradient-text-vibrant">Elvan</span>
            </motion.h1>

            {/* Marquee Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-4 md:mb-6"
            >
              <MarqueeText texts={marqueeTexts} isDark={isDark} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className={`text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {language === "tr" 
                ? "Modern, performans odaklı web uygulamaları geliştiriyorum. Angular, React ve .NET teknolojileriyle ölçeklenebilir çözümler üretiyorum."
                : "I build modern, performance-driven web applications. Creating scalable solutions with Angular, React, and .NET technologies."
              }
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-8 md:mb-10"
            >
              <button
                onClick={handleCtaClick}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                {t.hero.ctaContact}
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className={`text-sm ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                {language === "tr" ? "Takip et:" : "Follow:"}
              </span>
              
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isDark 
                      ? "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/50" 
                      : "bg-white/80 text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200"
                  }`}
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isDark 
                      ? "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/50" 
                      : "bg-white/80 text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200"
                  }`}
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={socialLinks.email}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isDark 
                      ? "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/50" 
                      : "bg-white/80 text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200"
                  }`}
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Code Card - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <CodeCard isDark={isDark} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? "border-zinc-600" : "border-zinc-400"
          }`}
        >
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

