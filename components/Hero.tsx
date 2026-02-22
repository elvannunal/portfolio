"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { socialLinks } from "@/lib/data";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Typing animation component
function Typewriter({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];

      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, isInView]);

  return (
    <span ref={ref} className="gradient-text-vibrant">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Floating particles background - lightweight version
function Particles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Code card component
function CodeCard({ isDark }: { isDark: boolean }) {
  const codeLines = [
    { indent: 0, code: "const developer = {", color: "text-purple-400" },
    { indent: 1, code: "name: 'Elvan',", color: "text-blue-400" },
    { indent: 1, code: "skills: ['React', 'Angular','C#','TypeScript'],", color: "text-green-400" },
    { indent: 1, code: "passion: 'Building great UX',", color: "text-yellow-400" },
    { indent: 1, code: "available: true", color: "text-cyan-400" },
    { indent: 0, code: "};", color: "text-purple-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`relative rounded-xl overflow-hidden backdrop-blur-xl ${
        isDark 
          ? "bg-zinc-900/80 border border-zinc-700/50 shadow-2xl shadow-purple-500/10" 
          : "bg-white/80 border border-zinc-200 shadow-xl shadow-purple-500/10"
      }`}
      style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}
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
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex"
            style={{ paddingLeft: line.indent * 16 }}
          >
            <span className="text-zinc-500 select-none w-6">{i + 1}</span>
            <span className={line.color}>{line.code}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Cursor blink */}
      <motion.div
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="absolute bottom-4 right-4 w-2 h-5 bg-purple-500 rounded"
      />
    </motion.div>
  );
}

// Main Hero Component
export default function Hero() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Simplified scroll animation for better mobile performance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const titleTexts = language === "tr" 
    ? ["Ölçeklenebilir Yazılım", "Modern Web Deneyimleri", "Clean Code"]
    : ["Scalable Software", "Modern Web Experiences", "Clean Code"];

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-hero"
    >
      {/* Background Effects - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static gradient background instead of animated grid */}
        <div className={`absolute inset-0 ${
          isDark 
            ? "bg-gradient-to-br from-zinc-950 via-purple-950/20 to-zinc-900" 
            : "bg-gradient-to-br from-zinc-50 via-purple-50 to-zinc-100"
        }`} />
        
        {/* Simplified gradient orbs - smaller and fewer */}
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-purple-600/15" : "bg-purple-300/15"
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl ${
          isDark ? "bg-blue-600/10" : "bg-blue-300/10"
        }`} />
        
        {/* Particles - lightweight */}
        <Particles />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight"
            >
              <span className={isDark ? "text-white" : "text-zinc-900"}>
                {language === "tr" ? "Merhaba, ben " : "Hi, I'm "}
              </span>
              <span className="gradient-text-vibrant">Elvan</span>
            </motion.h1>

            {/* Subtitle with typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 h-10 flex items-center justify-center lg:justify-start"
            >
              <Typewriter texts={titleTexts} />
            </motion.div>

            {/* Description - 2-3 lines */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {language === "tr" 
                ? "Modern, performans odaklı web uygulamaları geliştiriyorum. Angular, React ve .NET teknolojileriyle ölçeklenebilir çözümler üretiyorum."
                : "I build modern, performance-driven web applications. Creating scalable solutions with Angular, React, and .NET technologies."
              }
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25 relative overflow-hidden group"
              >
                <span className="relative z-10">{t.hero.ctaContact}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className={`text-sm ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                {language === "tr" ? "Takip et:" : "Follow:"}
              </span>
              
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-full transition-all duration-200 ${
                    isDark 
                      ? "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/50 hover:border-purple-500/50" 
                      : "bg-white/80 text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200 hover:border-purple-300"
                  }`}
                  style={{ boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 15px rgba(0,0,0,0.08)' }}
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-full transition-all duration-200 ${
                    isDark 
                      ? "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/50 hover:border-purple-500/50" 
                      : "bg-white/80 text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200 hover:border-purple-300"
                  }`}
                  style={{ boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 15px rgba(0,0,0,0.08)' }}
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>

                {/* Email */}
                <motion.a
                  href={socialLinks.email}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-full transition-all duration-200 ${
                    isDark 
                      ? "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/50 hover:border-purple-500/50" 
                      : "bg-white/80 text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200 hover:border-purple-300"
                  }`}
                  style={{ boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 15px rgba(0,0,0,0.08)' }}
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <CodeCard isDark={isDark} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
}
