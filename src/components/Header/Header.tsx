import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const { i18n, t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setLangOpen(false);
  };
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <header
      className={`w-full h-16 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 fixed top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${dark
        ? "bg-slate-900/80 border-slate-800/50"
        : "bg-white/80 border-slate-200/50"
        }`}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`text-2xl md:text-3xl font-extrabold tracking-tight cursor-pointer ${dark ? "text-purple-400" : "text-purple-600"
          }`}
      >
        {t("home")}
      </motion.div>

      {/* Navigation + Controls */}
      <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {["home", "about", "projects", "contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05, color: dark ? "#22d3ee" : "#9333ea" }}
            >
              <button
                onClick={() => scrollTo(item)}
                className={`font-medium transition-colors duration-200 ${dark
                  ? "text-gray-400 hover:text-cyan-400"
                  : "text-slate-700 hover:text-purple-600"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </motion.div>
          ))}
        </nav>



        {/* Language Selector */}

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setLangOpen(!langOpen)}
            className={`w-12 px-8 py-3 rounded-md font-semibold text-base border transition-all backdrop-blur-md flex items-center justify-around ${dark
              ? "bg-slate-800/80 text-cyan-400 border-slate-700 hover:bg-slate-700/80"
              : "bg-purple-100 text-purple-600 border-purple-300 hover:bg-purple-200"
              }`}
          >
            <span className="p-8">{lang.toUpperCase()}</span>
            <span className="py-8  px-8 ml-2">▼</span>
          </motion.button>


          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className={`absolute right-0 mt-2 w-[120px] rounded-xl shadow-2xl overflow-hidden border backdrop-blur-lg ${dark
                  ? "bg-slate-800/90 border-slate-700"
                  : "bg-white/90 border-slate-200"
                  }`}
              >
                {["en", "tr"].map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLanguage(l)}
                    className={`w-full text-left px-5 py-3 text-sm transition-all ${lang === l
                      ? dark
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-purple-500/10 text-purple-600"
                      : dark
                        ? "text-gray-300 hover:bg-slate-700/50"
                        : "text-gray-700 hover:bg-purple-50"
                      }`}
                  >
                    {l === "en" ? "English" : "Türkçe"}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggle}
          className={`relative w-12 h-6 rounded-full transition-all ${dark ? "bg-slate-700" : "bg-gray-300"
            }`}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={`absolute w-5 h-5 rounded-full transition-all flex items-center justify-center shadow-md ${dark ? "bg-slate-950" : "bg-white"
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