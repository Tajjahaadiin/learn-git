"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferredTheme = savedTheme || "light";
    setTheme(preferredTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(preferredTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };
  return (
    <button
      onClick={toggleTheme}
      className="group cursor-pointer text-black  dark:bg-black dark:text-white  rounded-full transition"
    >
      {theme == "dark" ? (
        <Sun className='"text-white size-5 rounded-full shadow-xl shadow-gray-300' />
      ) : (
        <Moon className="text-gray-900 size-5 rounded-full shadow-xl shadow-gray-900" />
      )}
    </button>
  );
}
