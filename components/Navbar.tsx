"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", labelKey: "about" as const },
  { href: "#skills", labelKey: "skills" as const },
  { href: "#contact", labelKey: "contact" as const },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    // Disable entry animations after initial load
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsScrolled(latest > 50);
    
    // Track active section based on scroll position
    const sections = ["home", "about", "skills", "contact"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    }
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={shouldAnimate ? { y: -100 } : false}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, x: -20 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="text-xl font-bold tracking-tight group">
            <span className={`group-hover:text-purple-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>elvan</span>
            <span className="text-purple-500">.dev</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={shouldAnimate ? { opacity: 0, y: -10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(link.href)}
                className={`text-sm transition-all duration-200 relative group ${
                  activeSection === link.href.slice(1)
                    ? theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    : theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {t.nav[link.labelKey]}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            </motion.div>
          ))}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className={`flex items-center gap-3 border-l pl-4 ${
              theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300'
            }`}
          >
            <LanguageToggle />
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} hover:text-purple-500 transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-left px-6 py-3 transition-all ${
                  activeSection === link.href.slice(1)
                    ? theme === 'dark' ? 'text-white bg-zinc-800/50' : 'text-zinc-900 bg-zinc-100'
                    : theme === 'dark' ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/50' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {t.nav[link.labelKey]}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

