"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

const SECTIONS = [
  { id: "home", labelKey: "homeLabel" as const },
  { id: "about", labelKey: "aboutLabel" as const },
  { id: "skills", labelKey: "skillsLabel" as const },
  { id: "projects", labelKey: "projectsLabel" as const },
  { id: "contact", labelKey: "contactLabel" as const },
];

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSectionLabel = (sectionId: string): string => {
    const section = SECTIONS.find((s) => s.id === sectionId);
    if (!section) return sectionId;
    
    // Use the translation function
    const label = t[section.labelKey as keyof typeof t];
    return typeof label === "string" ? label : sectionId;
  };

  return (
    <nav
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-4"
      aria-label="Section navigation"
    >
      <AnimatePresence mode="wait">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="relative flex items-center justify-end group"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute right-full mr-3 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-md ${
                      isDark
                        ? "bg-zinc-800/90 text-zinc-200 border border-zinc-700/50"
                        : "bg-white/90 text-zinc-700 border border-zinc-200 shadow-lg"
                    }`}
                  >
                    {getSectionLabel(section.id)}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Dot Button */}
              <motion.button
                onClick={() => scrollToSection(section.id)}
                className="relative flex items-center justify-center p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-full"
                aria-label={`Scroll to ${section.id}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Active Ring - Liquid Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className={`absolute w-10 h-10 rounded-full border-2 ${
                      isDark
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-purple-600 bg-purple-600/20"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Inner Dot */}
                <motion.div
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    isActive
                      ? isDark
                        ? "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                        : "bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.6)]"
                      : isDark
                      ? "bg-zinc-600 group-hover:bg-zinc-400"
                      : "bg-zinc-400 group-hover:bg-zinc-600"
                  }`}
                />
              </motion.button>
            </div>
          );
        })}
      </AnimatePresence>
    </nav>
  );
}

