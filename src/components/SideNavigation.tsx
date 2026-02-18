import { useState, useEffect } from "react";

const navItems = [
  { id: "top", labelJa: "ページトップ", labelEn: "TOP" },
  { id: "features", labelJa: "イベントの特徴", labelEn: "FEATURES" },
  { id: "companies", labelJa: "出展企業", labelEn: "COMPANIES" },
  { id: "timetable", labelJa: "タイムテーブル", labelEn: "TIMETABLE" },
  { id: "participate", labelJa: "参加方法", labelEn: "HOW TO PARTICIPATE" },
  { id: "overview", labelJa: "開催概要", labelEn: "OVERVIEW" },
];

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      {/* Timeline vertical line */}
      <div className="absolute left-0 top-4 bottom-4 w-px">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent" />
        {/* Active progress line */}
        <div
          className="absolute top-0 w-full transition-all duration-500 ease-out"
          style={{
            height: `${((activeIndex + 1) / navItems.length) * 100}%`,
            background: "linear-gradient(180deg, hsl(48 90% 70%) 0%, hsl(43 80% 55%) 100%)",
            boxShadow: "0 0 12px hsl(45 80% 50% / 0.5)",
          }}
        />
      </div>

      <ul className="flex flex-col relative pl-6">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const isPast = index <= activeIndex;

          return (
            <li key={item.id} className="relative">
              {/* Timeline dot */}
              <div
                className={`absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                  isActive
                    ? "scale-125"
                    : isPast
                    ? "scale-100"
                    : "scale-75"
                }`}
                style={{
                  background: isPast
                    ? "linear-gradient(135deg, hsl(43 80% 55%) 0%, hsl(48 90% 70%) 100%)"
                    : "hsl(220 20% 25%)",
                  boxShadow: isActive
                    ? "0 0 20px hsl(45 80% 50% / 0.6), 0 0 40px hsl(45 80% 50% / 0.3)"
                    : isPast
                    ? "0 0 8px hsl(45 80% 50% / 0.3)"
                    : "none",
                  border: isActive ? "2px solid hsl(48 90% 80%)" : "none",
                }}
              />

              {/* Connecting horizontal line for active */}
              {isActive && (
                <div
                  className="absolute -left-3 top-1/2 -translate-y-1/2 h-px w-3"
                  style={{
                    background: "linear-gradient(90deg, hsl(48 90% 70%), transparent)",
                  }}
                />
              )}

              <button
                onClick={() => scrollToSection(item.id)}
                className={`group flex flex-col py-4 pr-4 transition-all duration-400 text-right ${
                  isActive ? "translate-x-0" : "translate-x-2 hover:translate-x-0"
                }`}
              >
                <span
                  className={`font-serif text-sm transition-all duration-400 ${
                    isActive
                      ? "gold-text font-bold"
                      : isPast
                      ? "text-foreground/70"
                      : "text-muted-foreground group-hover:text-foreground/70"
                  }`}
                  style={isActive ? {
                    background: "linear-gradient(135deg, hsl(43 80% 55%) 0%, hsl(48 90% 75%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  } : undefined}
                >
                  {item.labelJa}
                </span>
                <span
                  className={`text-[10px] tracking-widest transition-colors duration-400 ${
                    isActive
                      ? "text-gold-light/80"
                      : "text-muted-foreground/50 group-hover:text-muted-foreground"
                  }`}
                  style={isActive ? { color: "hsl(45 60% 65%)" } : undefined}
                >
                  {item.labelEn}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNavigation;
