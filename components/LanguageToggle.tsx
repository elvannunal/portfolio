"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-zinc-800/50 border-zinc-700/50 hover:border-purple-500/50'
          : 'bg-zinc-100 border-zinc-200 hover:border-purple-300'
      }`}
      aria-label={`Switch to ${language === "tr" ? "English" : "Turkish"}`}
    >
      <span className={`text-xs font-medium ${language === "tr" ? "text-purple-500" : theme === 'dark' ? "text-zinc-400" : "text-zinc-500"}`}>
        TR
      </span>
      <span className={theme === 'dark' ? "text-zinc-600" : "text-zinc-400"}>/</span>
      <span className={`text-xs font-medium ${language === "en" ? "text-purple-500" : theme === 'dark' ? "text-zinc-400" : "text-zinc-500"}`}>
        EN
      </span>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10"
        initial={false}
        animate={{
          opacity: language === "tr" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}

