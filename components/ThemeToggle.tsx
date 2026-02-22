"use client";

import { useTheme } from "@/lib/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-14 h-8 rounded-full border flex items-center transition-colors duration-300 hover:border-purple-500/50 ${
        isDark 
          ? "bg-zinc-800 border-zinc-600" 
          : "bg-blue-100 border-blue-200"
      }`}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sun icon */}
      <div className="absolute left-0 w-8 h-8 flex items-center justify-center pointer-events-none z-10">
        <motion.svg
          animate={{ 
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.3 : 1,
          }}
          transition={{ duration: 0.2 }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-500"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>
      </div>

      {/* Moon icon */}
      <div className="absolute right-0 w-8 h-8 flex items-center justify-center pointer-events-none z-10">
        <motion.svg
          animate={{ 
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.3,
          }}
          transition={{ duration: 0.2 }}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-400"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </div>

      {/* Toggle indicator*/}
      <motion.div
        className={`absolute w-6 h-6 rounded-full shadow-lg z-20 flex items-center justify-center ${
          isDark 
            ? "bg-gradient-to-r from-purple-500 to-blue-500" 
            : "bg-white"
        }`}
        initial={false}
        animate={{
       
          x: isDark ? 28 : 4,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {!isDark && (
          <div className="w-2 h-2 rounded-full border-2 border-blue-500" />
        )}
        {isDark && (
          <div className="w-2 h-2 rounded-full bg-white/20" />
        )}
      </motion.div>
    </motion.button>
  );
}