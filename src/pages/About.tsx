import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutImage from "../assets/about_page1.jpeg";

const About: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16 lg:px-24 transition-all duration-700 ${dark
          ? "bg-gradient-to-br from-gray-900 via-purple-900/90 to-black"
          : "bg-gradient-to-br from-purple-200 via-pink-200/70 to-blue-100"
        }`}
    >

      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="pl-4 md:pl-8">
          <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 text-center md:text-left tracking-tight ${dark? "text-gray-300": "text-gray-700"}`}>
            {t("about_title")}
          </h2>

          <p className={`text-lg leading-relaxed mb-8 ${dark ? "text-gray-300" : "text-gray-700"
            }`}>
            {t("about_text")}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/3 flex justify-center md:pl-8"
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={aboutImage}
          alt="About"
          className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
};

export default About;
