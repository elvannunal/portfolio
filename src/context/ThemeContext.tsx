import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  dark: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (dark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  const toggle = () => {
    setDark(!dark);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};