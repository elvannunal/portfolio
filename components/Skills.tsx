"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import { useLanguage } from "@/lib/LanguageContext";

// Skill type definition
interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools" | "ai";
}

// Skills data - organized by category
const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Styled Components", category: "frontend" },
  // Backend
  { name: "ASP.NET Core", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Microservices", category: "backend" },
  // DevOps & Tools
  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "Azure", category: "devops" },
  { name: "Agile/Scrum", category: "devops" },
  // Tools & Practices
  { name: "Responsive Design", category: "tools" },
  { name: "Clean Code", category: "tools" },
  { name: "Performance", category: "tools" },
  // AI Tools
  { name: "Cursor", category: "ai" },
  { name: "GitHub Copilot", category: "ai" },
];

// Category configuration with colors
const categoryConfig = {
  frontend: { 
    label: "Frontend", 
    labelTr: "Frontend",
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/30",
    bgGradient: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
  },
  backend: { 
    label: "Backend", 
    labelTr: "Backend",
    color: "from-purple-400 to-pink-500",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/30",
    bgGradient: "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
  },
  devops: { 
    label: "DevOps", 
    labelTr: "DevOps",
    color: "from-emerald-400 to-teal-500",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/30",
    bgGradient: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10"
  },
  tools: { 
    label: "Tools & Practices", 
    labelTr: "Araçlar & Pratikler",
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/30",
    bgGradient: "bg-gradient-to-r from-amber-500/10 to-orange-500/10"
  },
  ai: { 
    label: "AI Tools", 
    labelTr: "Yapay Zeka Araçları",
    color: "from-violet-400 to-indigo-500",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/30",
    bgGradient: "bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
  },
};

// Calculate orbit positions using proper trigonometry
function calculateOrbitPosition(
  index: number, 
  total: number, 
  radius: number, 
  startAngle: number = -Math.PI / 2
): { x: number; y: number } {
  const angle = startAngle + (index / total) * (2 * Math.PI);
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

// Skill Badge Component
function SkillBadge({ 
  skill, 
  index,
  isDark 
}: { 
  skill: Skill; 
  index: number;
  isDark: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const config = categoryConfig[skill.category];

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ 
        opacity: 1, 
        scale: isHovered ? 1.08 : 1 
      }}
      transition={{ 
        delay: index * 0.03, 
        duration: 0.3,
        scale: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 border backdrop-blur-sm z-10
        ${isDark 
          ? "bg-zinc-900/80 text-zinc-200 border-zinc-700/50 hover:border-zinc-500" 
          : "bg-white/90 text-zinc-700 border-zinc-200 hover:border-zinc-400"
        }
        ${config.borderColor}
      `}
      style={isHovered ? { 
        boxShadow: isDark 
          ? '0 0 25px rgba(168, 85, 247, 0.35)' 
          : '0 0 25px rgba(168, 85, 247, 0.25)',
        zIndex: 20
      } : {}}
    >
      <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 bg-gradient-to-r ${config.color} ${isHovered ? "opacity-15" : ""}`} />
      <div className="relative z-10 flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${config.color}`} />
        <span>{skill.name}</span>
      </div>
    </motion.button>
  );
}

// Desktop Radial Layout
function DesktopLayout({ isDark }: { isDark: boolean }) {
  const categories = useMemo(() => {
    return (Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map(category => ({
      category,
      skills: skills.filter(s => s.category === category),
      config: categoryConfig[category]
    }));
  }, []);

  const baseRadius = 160;

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center mx-auto">
      {/* Center glow */}
      <div className={`absolute inset-0 rounded-full ${
        isDark ? "bg-purple-500/5" : "bg-purple-300/10"
      } blur-3xl transform scale-75`} />
      
      {/* Center circle */}
      <div className={`absolute w-32 h-32 rounded-full flex items-center justify-center ${
        isDark 
          ? "bg-zinc-900/90 border border-zinc-700/50" 
          : "bg-white/90 border border-zinc-200"
      } shadow-2xl z-20`}>
        <div className="text-center">
          <span className={`block text-lg font-bold ${isDark ? "text-white" : "text-zinc-900"}`}>
            Skills
          </span>
          <span className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
            {skills.length}+
          </span>
        </div>
      </div>

      {/* Category rings and skills */}
      {categories.map((cat, catIndex) => {
        const ringRadius = baseRadius + (catIndex * 55);
        const categorySkills = cat.skills;
        
        return (
          <div 
            key={cat.category} 
            className="absolute inset-0"
          >
            {/* Ring */}
            <div 
              className={`absolute rounded-full border opacity-30 ${
                isDark ? "border-zinc-700/30" : "border-zinc-200/50"
              }`}
              style={{ 
                width: ringRadius * 2, 
                height: ringRadius * 2, 
                left: '50%', 
                top: '50%', 
                transform: 'translate(-50%, -50%)' 
              }}
            />

            {/* Skills positioned on ring */}
            {categorySkills.map((skill, skillIndex) => {
              const totalSkills = categorySkills.length;
              const position = calculateOrbitPosition(
                skillIndex, 
                totalSkills, 
                ringRadius,
                -Math.PI / 2 + (catIndex * 0.3) // Offset each ring
              );
              
              return (
                <div
                  key={skill.name}
                  className="absolute"
                  style={{ 
                    left: '50%', 
                    top: '50%', 
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                    zIndex: 10 + skillIndex
                  }}
                >
                  <SkillBadge 
                    skill={skill} 
                    index={catIndex * 10 + skillIndex}
                    isDark={isDark}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// Tablet Layout
function TabletLayout({ isDark }: { isDark: boolean }) {
  const categories = useMemo(() => {
    return (Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map(category => ({
      category,
      skills: skills.filter(s => s.category === category),
      config: categoryConfig[category]
    }));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 max-w-4xl mx-auto">
      {categories.map((cat, catIndex) => (
        <div key={cat.category} className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.config.color}`} />
            <span className={`text-xs font-semibold ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
              {cat.config.label}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-[320px]">
            {cat.skills.map((skill, idx) => (
              <SkillBadge 
                key={skill.name} 
                skill={skill} 
                index={catIndex * 10 + idx}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Mobile Layout
function MobileLayout({ isDark }: { isDark: boolean }) {
  const categories = useMemo(() => {
    return (Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map(category => ({
      category,
      skills: skills.filter(s => s.category === category),
      config: categoryConfig[category]
    }));
  }, []);

  return (
    <div className="space-y-6 px-4">
      {categories.map((cat, catIndex) => (
        <div key={cat.category} className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.config.color}`} />
            <span className={`text-sm font-semibold ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
              {cat.config.label}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {cat.skills.map((skill, idx) => (
              <SkillBadge 
                key={skill.name} 
                skill={skill} 
                index={catIndex * 10 + idx}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Skills Component
export default function Skills() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === "dark";
  
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Handle viewport detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewport("mobile");
      } else if (width < 1280) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`min-h-screen py-20 flex items-center justify-center relative overflow-hidden ${
        isDark ? "bg-zinc-950" : "bg-zinc-50"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] ${
          isDark ? "bg-purple-600/10" : "bg-purple-300/20"
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] ${
          isDark ? "bg-cyan-600/10" : "bg-cyan-300/20"
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isDark 
                ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                : "bg-purple-100 text-purple-600 border border-purple-200"
            }`}
          >
            {language === "tr" ? "Uzmanlık Alanlarım" : "Expertise"}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {language === "tr" ? "Yetenekler & Teknolojiler" : "Skills & Technologies"}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`text-base md:text-lg max-w-2xl mx-auto ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {language === "tr" 
              ? "Ustalıkla kullandığım teknolojiler ve inşa ettiğim prensipler" 
              : "Technologies I master and engineering principles I build with"
            }
          </motion.p>
        </motion.div>

        {/* Layout based on viewport */}
        <div className="mt-8">
          {viewport === "desktop" && <DesktopLayout isDark={isDark} />}
          {viewport === "tablet" && <TabletLayout isDark={isDark} />}
          {viewport === "mobile" && <MobileLayout isDark={isDark} />}
        </div>

        {/* Legend / Category indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {Object.entries(categoryConfig).map(([key, config]) => (
            <div 
              key={key} 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ${
                isDark 
                  ? "bg-zinc-800/50 text-zinc-400 border border-zinc-700/30" 
                  : "bg-zinc-100 text-zinc-600 border border-zinc-200"
              }`}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.color}`} />
              {language === "tr" ? config.labelTr : config.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

