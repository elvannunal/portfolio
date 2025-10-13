import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const { i18n } = useTranslation(); 
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language); 

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); 
    setLang(lng); 
    setLangOpen(false); 
  };

  return (
    <header
      className={`w-full flex justify-between items-center px-8 py-5 fixed top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        dark
          ? "bg-slate-900/90 border-slate-800/50"
          : "bg-slate-50/90 border-slate-200"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`text-2xl font-bold cursor-pointer ${
          dark ? "text-cyan-400" : "text-purple-600"
        }`}
      >
        Elvan
      </motion.div>

      <nav className="hidden md:flex items-center gap-8">
        {["About", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ color: dark ? "#22d3ee" : "#9333ea" }}
            className={`transition-colors ${
              dark ? "text-gray-400" : "text-slate-700"
            }`}
          >
            {item}
          </motion.a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLangOpen(!langOpen)}
            className={`px-3 py-2 rounded-lg font-semibold transition-all ${
              dark
                ? "bg-slate-800 text-cyan-400 hover:bg-slate-700"
                : "bg-purple-100 text-purple-600 hover:bg-purple-200"
            }`}
          >
            {lang.toUpperCase()} ▼
          </motion.button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className={`absolute right-0 mt-2 w-32 rounded-lg shadow-xl overflow-hidden backdrop-blur-md ${
                  dark ? "bg-slate-800/90" : "bg-white/90"
                }`}
              >
                {["en", "tr"].map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLanguage(l)}
                    className={`w-full text-left px-4 py-2 transition-all ${
                      lang === l
                        ? dark
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-purple-500/10 text-purple-600"
                        : ""
                    }`}
                  >
                    {l === "en" ? "English" : "Türkçe"}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggle}
          className={`relative w-12 h-6 rounded-full transition-all ${
            dark ? "bg-slate-700" : "bg-gray-300"
          }`}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={`absolute w-5 h-5 rounded-full transition-all flex items-center justify-center ${
              dark ? "bg-slate-950" : "bg-white"
            }`}
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{ left: dark ? "22px" : "2px", top: "2px" }}
          >
            {dark ? (
              <Moon size={12} className="text-cyan-400" />
            ) : (
              <Sun size={12} className="text-yellow-500" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
