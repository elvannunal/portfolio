"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

interface TimelineItemProps {
  year: string;
  yearEn: string;
  title: string;
  titleEn: string;
  company: string;
  location: string;
  locationEn: string;
  description: string;
  descriptionEn: string;
  achievements: string[];
  achievementsEn: string[];
  index: number;
}

export default function TimelineItem({
  year,
  yearEn,
  title,
  titleEn,
  company,
  location,
  locationEn,
  description,
  descriptionEn,
  achievements,
  achievementsEn,
  index,
}: TimelineItemProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline line with gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 origin-top"
        />
      </div>

      {/* Timeline dot with glow */}
      <div className="absolute left-0 top-2 w-4 h-4 -translate-x-1/2">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ${theme === 'dark' ? 'animate-pulse' : ''}`} />
        <div className={`absolute inset-0.5 rounded-full ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`} />
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Year */}
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          theme === 'dark' 
            ? 'bg-purple-500/10 border border-purple-500/20 text-purple-400' 
            : 'bg-purple-100 border border-purple-200 text-purple-700'
        }`}>
          {language === "tr" ? year : yearEn}
        </span>

        {/* Title */}
        <h3 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
          {language === "tr" ? title : titleEn}
        </h3>

        {/* Company & Location */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {company}
          </p>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'}`}>
            {language === "tr" ? location : locationEn}
          </p>
        </div>

        {/* Description */}
        <p className={`leading-relaxed max-w-2xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {language === "tr" ? description : descriptionEn}
        </p>

        {/* Achievements */}
        <ul className="mt-4 space-y-3">
          {(language === "tr" ? achievements : achievementsEn).map((achievement, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
              <span className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

