"use client";

import { useTheme } from "@/lib/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-zinc-800 dark:bg-zinc-700 border border-zinc-600 dark:border-zinc-500 flex items-center justify-between px-1 transition-colors duration-300 hover:border-purple-500/50"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sun icon */}
      <motion.div
        animate={{ 
          opacity: theme === "light" ? 1 : 0,
          scale: theme === "light" ? 1 : 0.5,
          x: theme === "light" ? 0 : 0
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-500"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </motion.div>

      {/* Moon icon */}
      <motion.div
        animate={{ 
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0.5
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-400"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </motion.div>

      {/* Toggle indicator */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
        animate={{
          x: theme === "dark" ? 24 : 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}

