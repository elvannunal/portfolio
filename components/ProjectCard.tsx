"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import { useLanguage } from "@/lib/LanguageContext";

interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden border backdrop-blur-sm ${
        isDark
          ? "bg-zinc-900/60 border-zinc-800 hover:border-purple-500/30"
          : "bg-white/80 border-zinc-200 hover:border-purple-300"
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t ${
        isDark ? "from-purple-500/10 to-transparent" : "from-purple-100/50 to-transparent"
      }`} />

      <div className="p-6">
        {/* Project Image Placeholder */}
        {project.image ? (
          <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${
              isDark ? "from-purple-600/20 to-cyan-600/20" : "from-purple-100 to-cyan-100"
            }`} />
            <img
              src={project.image}
              alt={language === "tr" ? project.title : project.titleEn}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden ${
            isDark ? "bg-zinc-800/50" : "bg-zinc-100"
          }`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className={`w-16 h-16 ${isDark ? "text-zinc-700" : "text-zinc-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-zinc-900"}`}>
            {language === "tr" ? project.title : project.titleEn}
          </h3>
          <p className={`text-sm mb-4 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            {language === "tr" ? project.description : project.descriptionEn}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 text-xs rounded-full ${
                  isDark
                    ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                    : "bg-zinc-100 text-zinc-600 border border-zinc-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {language === "tr" ? "GitHub" : "GitHub"}
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {language === "tr" ? "Canlı" : "Live"}
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

