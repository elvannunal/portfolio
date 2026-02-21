
"use client";

import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider, useTheme } from "@/lib/ThemeContext";
import { LanguageProvider } from "@/lib/LanguageContext";

// Inner component that uses the context
function HydrationWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated after mount
    setIsHydrated(true);
    
    // Add hydrated class to html for CSS visibility control
    document.documentElement.classList.add("hydrated");
  }, []);

  // Prevent flash by rendering nothing until hydrated on server
  // This prevents content jump
  if (!isHydrated) {
    return (
      <div 
        style={{ 
          visibility: "hidden",
          minHeight: "100vh",
          backgroundColor: theme === "dark" ? "#0a0a0f" : "#fafafa"
        }} 
      />
    );
  }

  return <>{children}</>;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HydrationWrapper>
          {children}
        </HydrationWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}

