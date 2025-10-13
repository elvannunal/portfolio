import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggle}
      className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ left: dark ? "26px" : "2px" }}
      >
        {dark ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-yellow-400" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
