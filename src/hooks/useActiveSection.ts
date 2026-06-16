import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const checkpoint = window.innerHeight * 0.35 + window.scrollY;

      let currentSection = "";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);

        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (checkpoint >= top && checkpoint <= bottom) {
          currentSection = id;
        }
      });

      if (window.scrollY < 80) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}