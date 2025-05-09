"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">      <button
        onClick={() => setTheme("light")}
        className={`rounded-md p-1.5 ${
          theme === "light" ? "bg-slate-200 dark:bg-slate-700" : "bg-transparent"
        }`}
        aria-label="Light mode"
      >
        <SunIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      </button>      <button
        onClick={() => setTheme("dark")}
        className={`rounded-md p-1.5 ${
          theme === "dark" ? "bg-slate-200 dark:bg-slate-700" : "bg-transparent"
        }`}
        aria-label="Dark mode"
      >
        <MoonIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      </button>      <button
        onClick={() => setTheme("system")}
        className={`rounded-md p-1.5 ${
          theme === "system" ? "bg-slate-200 dark:bg-slate-700" : "bg-transparent"
        }`}
        aria-label="System mode"
      >
        <ComputerDesktopIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      </button>
    </div>
  );
}