import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Coffee, Feather } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Resume/CV", path: "/resume" },
  { name: "Articles", path: "/articles" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );
  const location = useLocation();

  const [visibleCount, setVisibleCount] = useState(navLinks.length);
  const navContainerRef = useRef<HTMLElement>(null);
  const hiddenMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (!navContainerRef.current || !hiddenMenuRef.current) return;
      
      const containerWidth = navContainerRef.current.clientWidth;
      
      // Let's use robust assumptions.
      const padding = 64; // px-8 is 32px * 2
      const logoWidth = 140; // rough width of logo
      const themeToggleWidth = 100;
      const dropdownButtonWidth = 110;
      const gap = 32; // gap-8
      
      const availableWidth = containerWidth - padding - logoWidth - themeToggleWidth - gap * 2;
      
      const itemNodes = Array.from(hiddenMenuRef.current.children) as HTMLElement[];
      const itemWidths = itemNodes.map(n => n.getBoundingClientRect().width);
      
      let count = 0;
      let currentWidth = 0;
      
      for (let i = 0; i < itemWidths.length; i++) {
        currentWidth += itemWidths[i];
        if (i > 0) currentWidth += gap;
        
        let neededWidth = currentWidth;
        if (i < itemWidths.length - 1) {
          // If we can't fit all, we need space for the dropdown button
          neededWidth += gap + dropdownButtonWidth;
        }
        
        if (neededWidth <= availableWidth) {
          count = i + 1;
        } else {
          break;
        }
      }
      
      setVisibleCount(Math.min(count, navLinks.length));
    });

    if (navContainerRef.current) {
      observer.observe(navContainerRef.current);
    }
    
    return () => observer.disconnect();
  }, [theme]); // Add theme to re-measure if fonts change (rare but good to be safe)

  const visibleLinks = navLinks.slice(0, visibleCount);
  const hiddenLinks = navLinks.slice(visibleCount);

  // Close dropdown if all fit
  useEffect(() => {
    if (hiddenLinks.length === 0 && isOpen) {
      setIsOpen(false);
    }
  }, [hiddenLinks.length, isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-warm-bg/85 dark:bg-warm-dark-bg/85 backdrop-blur-md border-b border-warm-border dark:border-warm-dark-border">
      <nav ref={navContainerRef} className="max-w-[950px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center relative">
        <Link to="/" className="text-xl md:text-2xl font-heading italic tracking-wider shrink-0 mr-4">
          Manab<span className="text-warm-primary dark:text-warm-dark-primary">.</span>esu
        </Link>
        
        {/* Hidden Measuring Container (invisible but rendered block logic) */}
        <ul ref={hiddenMenuRef} className="absolute opacity-0 pointer-events-none flex gap-8 whitespace-nowrap -z-10 text-base">
          {navLinks.map((link) => (
            <li key={link.path}>{link.name}</li>
          ))}
        </ul>

        {/* Dynamic Navigation */}
        <div className="flex flex-1 justify-end items-center gap-4 md:gap-8">
          <ul className="flex gap-4 md:gap-8 list-none items-center m-0 p-0">
            {visibleLinks.map((link) => (
              <li key={link.path} className="shrink-0">
                <Link
                  to={link.path}
                  className={cn(
                    "transition-all duration-200 hover:text-warm-primary dark:hover:text-warm-dark-primary",
                    isActive(link.path) && "active-nav"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 md:p-2 rounded-full border border-warm-border dark:border-warm-dark-border text-warm-muted dark:text-warm-dark-muted hover:border-warm-primary transition-colors flex items-center gap-1.5 text-xs md:text-sm px-2 md:px-3"
            >
              {theme === "light" ? <Feather size={14} /> : <Coffee size={14} />} 
              <span className="hidden sm:inline">{theme === "light" ? "Light" : "Dark"}</span>
            </button>

            {hiddenLinks.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-2 md:px-3 py-1.5 rounded-md border border-warm-border dark:border-warm-dark-border text-warm-text dark:text-warm-dark-text flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium hover:bg-warm-border/50 transition-colors"
                >
                  Dropdown {isOpen ? "▲" : "▼"}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && hiddenLinks.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-full overflow-hidden bg-warm-bg dark:bg-warm-dark-bg border-b border-warm-border dark:border-warm-dark-border shadow-lg"
          >
            <ul className="flex flex-col p-6 gap-4 list-none m-0 shadow-inner">
              {hiddenLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-lg py-2 px-4 rounded-md transition-colors hover:bg-warm-border/30",
                      isActive(link.path) && "active-nav w-fit"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
