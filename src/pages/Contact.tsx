import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next';

function Contact() {
  const { dark } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16 lg:px-24 transition-all duration-700 ${dark
        ? "bg-gradient-to-br from-gray-900 via-purple-900/90 to-black"
        : "bg-gradient-to-br from-purple-200 via-pink-200/70 to-blue-100"
        }`}
    >

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className={`mt-20 p-12 rounded-2xl text-center backdrop-blur-sm border ${dark
            ? 'bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border-purple-500/30'
            : 'bg-gradient-to-r from-purple-100/60 to-indigo-100/60 border-purple-300/40'
          } shadow-2xl`}
      >
        <h3
          className={`text-3xl font-bold mb-4 ${dark ? 'text-purple-300' : 'text-purple-700'
            }`}
        >
          {t('cta_title')}
        </h3>
        <p className={`text-lg mb-6 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
          {t('cta_description')}
        </p>
        <button
          className={`px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 ${dark
              ? 'bg-purple-600 text-white hover:bg-purple-500'
              : 'bg-purple-600 text-white hover:bg-purple-700'
            } shadow-lg`}
        >
          {t('cta_button')}
        </button>
      </motion.div>
    </section>
  )
}

export default Contact