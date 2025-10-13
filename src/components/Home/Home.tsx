import React, { useContext } from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Illustration from "./Illustration";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-purple-950 to-black"
          : "bg-gradient-to-br from-gray-50 via-purple-100 to-blue-50"
      }`}
    >
      <Header />

      <section className="flex items-center justify-center min-h-screen px-4 md:px-8 pt-20 relative overflow-hidden">
        {/* Background Blobs */}
        <div
          className={`absolute top-32 right-20 w-80 h-80 rounded-full blur-3xl opacity-30 ${
            dark ? "bg-purple-800" : "bg-purple-300"
          }`}
        />
        <div
          className={`absolute bottom-32 left-20 w-80 h-80 rounded-full blur-3xl opacity-30 ${
            dark ? "bg-indigo-900" : "bg-cyan-200"
          }`}
        />

        <div className="max-w-7xl w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start justify-start"
            >
              <motion.div
                className="text-lg mb-6 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-3xl">👋</span>
                <span className={dark ? "text-gray-400" : "text-gray-600"}>
                  Hi, I'm
                </span>
              </motion.div>

              <motion.h1
                className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight ${
                  dark ? "text-purple-400" : "text-purple-700"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Elvan Ünal
              </motion.h1>

              {/* Title */}
              <motion.p
                className={`text-2xl md:text-3xl font-semibold mb-6 ${
                  dark ? "text-purple-300" : "text-purple-600"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Software Developer
              </motion.p>

              {/* Description */}
              <motion.p
                className={`text-lg leading-relaxed mb-8 ${
                  dark ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
               {t("home_description")}
              </motion.p>
            </motion.div>

            {/* Right Side Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Illustration />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
