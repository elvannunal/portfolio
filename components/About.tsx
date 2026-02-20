"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="about" className="py-32 px-6 relative section-about">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`blob-1 blob-purple ${theme === 'dark' ? 'top-0 left-0' : 'top-20 left-20'}`} />
        <div className={`blob-2 blob-cyan ${theme === 'dark' ? 'bottom-0 right-0' : 'bottom-20 right-20'}`} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {t.about.timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              yearEn={item.yearEn}
              title={item.title}
              titleEn={item.titleEn}
              company={item.company}
              location={item.location}
              locationEn={item.locationEn}
              description={item.description}
              descriptionEn={item.descriptionEn}
              achievements={item.achievements}
              achievementsEn={item.achievementsEn}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

