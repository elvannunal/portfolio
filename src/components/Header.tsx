import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useContext(ThemeContext);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <header
      className={`${
        dark ? "bg-darkBg text-darkText border-gray-700" : "bg-lightBg text-lightText border-gray-200"
      } w-full flex justify-between items-center px-8 py-4 fixed top-0 shadow-md z-50 transition-colors duration-500 border-b`}
    >
      {/* Logo / Home */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold text-primary cursor-pointer"
      >
        {t("header_home")}
      </motion.div>

      <nav className="hidden md:flex items-center gap-8">
        <motion.a
          href="#about"
          whileHover={{ color: "#9b5de5" }}
          className={`transition-colors ${dark ? "text-darkText" : "text-lightText"}`}
        >
          {t("header_about")}
        </motion.a>
        <motion.a
          href="#projects"
          whileHover={{ color: "#9b5de5" }}
          className={`transition-colors ${dark ? "text-darkText" : "text-lightText"}`}
        >
          {t("header_projects")}
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ color: "#9b5de5" }}
          className={`transition-colors ${dark ? "text-darkText" : "text-lightText"}`}
        >
          {t("header_contact")}
        </motion.a>
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-purple-600 transition font-semibold"
          >
            {i18n.language.toUpperCase()} ▼
          </motion.button>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`${
                  dark ? "bg-darkBg border-gray-700" : "bg-lightBg border-gray-200"
                } absolute right-0 mt-2 w-36 rounded-lg shadow-lg overflow-hidden transition-colors duration-500 border`}
              >
                <li>
                  <motion.button
                    whileHover={{ backgroundColor: dark ? "#9b5de5" : "#f5e6ff" }}
                    onClick={() => changeLanguage("en")}
                    className={`w-full text-left px-4 py-3 transition-colors ${
                      i18n.language === "en"
                        ? "bg-primary text-white font-bold"
                        : dark
                        ? "text-darkText"
                        : "text-lightText"
                    }`}
                  >
                    English
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={{ backgroundColor: dark ? "#9b5de5" : "#f5e6ff" }}
                    onClick={() => changeLanguage("tr")}
                    className={`w-full text-left px-4 py-3 transition-colors ${
                      i18n.language === "tr"
                        ? "bg-primary text-white font-bold"
                        : dark
                        ? "text-darkText"
                        : "text-lightText"
                    }`}
                  >
                    Türkçe
                  </motion.button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggle}
          className={`relative w-14 h-8 flex items-center ${
            dark ? "bg-gray-700" : "bg-gray-300"
          } rounded-full p-1 cursor-pointer transition-colors duration-300`}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={`absolute w-6 h-6 ${dark ? "bg-gray-900" : "bg-white"} rounded-full shadow-md flex items-center justify-center`}
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{ left: dark ? "26px" : "2px" }}
          >
            {dark ? (
              <Moon className="w-4 h-4 text-purple-400" />
            ) : (
              <Sun className="w-4 h-4 text-yellow-400" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;