import React, { useEffect, useState } from "react";

interface DotNavigationProps {
  sections: string[];
}

const DotNavigation: React.FC<DotNavigationProps> = ({ sections }) => {
  const [active, setActive] = useState<string>(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) {
            current = section;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section}
          className={`w-4 h-4 rounded-full transition-colors ${
            active === section
              ? "bg-indigo-300"
              : "bg-gray-200 hover:bg-indigo-300"
          }`}
          onClick={() => {
            const el = document.getElementById(section);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
