import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const { t } = useTranslation();
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"
          : "bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50"
      }`}
    >
      <Header />

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4 md:px-8 pt-20 relative overflow-hidden">
        {/* Background Blobs */}
        <div
          className={`absolute top-32 right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            dark ? "bg-cyan-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute bottom-32 left-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            dark ? "bg-purple-500" : "bg-cyan-300"
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
              {/* Greeting */}
              <motion.div
                className="text-lg mb-6 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-3xl">👋</span>
                <span
                  className={dark ? "text-gray-300" : "text-slate-600"}
                >
                  Hi, I'm
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight ${
                  dark ? "text-cyan-400" : "text-purple-600"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Elvan
              </motion.h1>

              <motion.h2
                className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${
                  dark ? "text-purple-300" : "text-slate-900"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ünal
              </motion.h2>

              {/* Title */}
              <motion.p
                className={`text-2xl md:text-3xl font-bold mb-6 ${
                  dark ? "text-cyan-400" : "text-purple-500"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Software Developer
              </motion.p>

              {/* Description */}
              <motion.p
                className={`text-lg leading-relaxed max-w-xl mb-8 ${
                  dark ? "text-gray-300" : "text-slate-700"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                I craft modern, interactive web experiences with clean code and creative solutions. Specialized in frontend & backend development.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    dark
                      ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all border-2 ${
                    dark
                      ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                      : "border-purple-600 text-purple-600 hover:bg-purple-600/10"
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-all ${
                    dark
                      ? "bg-slate-800 text-cyan-400 hover:bg-slate-700"
                      : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                  }`}
                  title="GitHub"
                >
                  <Github size={24} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-all ${
                    dark
                      ? "bg-slate-800 text-cyan-400 hover:bg-slate-700"
                      : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                  }`}
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </motion.a>

                <motion.a
                  href="mailto:your@email.com"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-all ${
                    dark
                      ? "bg-slate-800 text-cyan-400 hover:bg-slate-700"
                      : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                  }`}
                  title="Email"
                >
                  <Mail size={24} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center h-full"
            >
              <motion.div
                className={`w-full max-w-sm p-8 rounded-2xl backdrop-blur-md border transition-all ${
                  dark
                    ? "bg-slate-800/30 border-slate-700/50 shadow-2xl shadow-purple-900/20"
                    : "bg-white/30 border-purple-300/30 shadow-2xl shadow-purple-300/10"
                }`}
                animate={{
                  boxShadow: dark
                    ? [
                        "0 0 20px rgba(34, 211, 238, 0.1)",
                        "0 0 40px rgba(34, 211, 238, 0.2)",
                        "0 0 20px rgba(34, 211, 238, 0.1)",
                      ]
                    : [
                        "0 0 20px rgba(168, 85, 247, 0.1)",
                        "0 0 40px rgba(168, 85, 247, 0.15)",
                        "0 0 20px rgba(168, 85, 247, 0.1)",
                      ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  className="text-center space-y-6"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div
                    className={`text-5xl font-bold ${
                      dark ? "text-cyan-400" : "text-purple-600"
                    }`}
                  >
                    {'</>'}
                  </div>
                  <div>
                    <p
                      className={`text-lg font-semibold mb-2 ${
                        dark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      React • TypeScript • Node.js
                    </p>
                    <p
                      className={`text-sm ${
                        dark ? "text-gray-400" : "text-slate-600"
                      }`}
                    >
                      Angular • ASP.NET • PostgreSQL
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;