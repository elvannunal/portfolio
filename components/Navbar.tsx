
"use client";

import { memo, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

// Memoized navigation links
const navLinks = [
  { href: "#about", labelKey: "about" as const },
  { href: "#skills", labelKey: "skills" as const },
  { href: "#contact", labelKey: "contact" as const },
];

// Memoized nav link button
const NavLink = memo(function NavLink({ 
  href, 
  label, 
  isActive,
  onClick,
  theme,
  isDark
}: { 
  href: string; 
  label: string; 
  isActive: boolean;
  onClick: () => void;
  theme: string;
  isDark: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm transition-all duration-200 relative group ${
        isActive
          ? isDark ? 'text-white' : 'text-zinc-900'
          : isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
      }`}
    >
      {label}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </button>
  );
});

NavLink.displayName = 'NavLink';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = (latest: number) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(latest > 50);
          
          // Track active section
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
          ticking = false;
        });
        ticking = true;
      }
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-bold tracking-tight group">
          <span className={`group-hover:text-purple-500 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>elvan</span>
          <span className="text-purple-500">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={t.nav[link.labelKey]}
              isActive={activeSection === link.href.slice(1)}
              onClick={() => scrollToSection(link.href)}
              theme={theme}
              isDark={isDark}
            />
          ))}
          <div className={`flex items-center gap-3 border-l pl-4 ${
            isDark ? 'border-zinc-700' : 'border-zinc-300'
          }`}>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className={`p-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} hover:text-purple-500 transition-colors`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
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
        <div className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-left px-5 py-3 transition-all text-base ${
                  activeSection === link.href.slice(1)
                    ? isDark ? 'text-white bg-zinc-800/50' : 'text-zinc-900 bg-zinc-100'
                    : isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/50' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {t.nav[link.labelKey]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

