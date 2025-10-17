import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Calendar, CheckCircle, MapPin } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header/Header';

const Skills: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 p-12" />,
      title: t('frontend_category'),
      skills: t('frontend_skills').split(', ')
    },
    {
      icon: <Briefcase className="w-8 h-8 p-12" />,
      title: t('backend_category'),
      skills: t('backend_skills').split(', ')
    },
    {
      icon: <Code className="w-8 h-8 p-12" />,
      title: t('tools_category'),
      skills: t('tools_skills').split(', ')
    }
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16 lg:px-24 transition-all duration-700 ${dark
        ? "bg-gradient-to-bl from-gray-800 via-purple-800/90 to-black"
        : "bg-gradient-to-bl from-purple-200 via-pink-200/70 to-blue-100"
        }`}
    >
      <Header />

      {/* Background Blobs */}
      <div
        className={`absolute top-32 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${dark ? 'bg-purple-600' : 'bg-purple-400'
          }`}
      />
      <div
        className={`absolute bottom-32 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${dark ? 'bg-indigo-800' : 'bg-cyan-300'
          }`}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 w-full">
        {/* SKILLS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className={`flex flex-col items-center text-center mb-[120px]`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <Code className={`w-10 h-10 ${dark ? 'text-purple-400' : 'text-purple-600'}`} />
              <h2 className={`text-5xl font-bold ${dark ? 'text-purple-400' : 'text-purple-700'}`}>
                {t('skills_title')}
              </h2>
            </div>

            <p className={`text-lg mx-auto max-w-2xl ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('skills_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                className={`p-8 rounded-3xl backdrop-blur-sm border ${dark
                  ? 'bg-gray-900/40 border-purple-500/20'
                  : 'bg-white/70 border-purple-300/40'
                  } shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`inline-flex p-4 rounded-xl mb-7 ${dark ? 'bg-purple-600/30' : 'bg-purple-300/50'
                    }`}
                >
                  <div className={dark ? 'text-purple-300' : 'text-purple-700'}>
                    {category.icon}
                  </div>
                </div>

                <h3
                  className={`text-xl font-bold mb-6 ${dark ? 'text-purple-200' : 'text-purple-800'
                    }`}
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3.5">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${dark
                        ? 'bg-purple-600/40 text-purple-100 hover:bg-purple-600/60'
                        : 'bg-purple-300/60 text-purple-900 hover:bg-purple-400/60'
                        } hover:scale-110 transition-all duration-200 cursor-default shadow-sm`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Skills;