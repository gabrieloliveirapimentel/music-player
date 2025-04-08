import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function Button() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode);

    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  return (
    <button className="absolute top-6 right-6" onClick={handleToggleTheme}>
      {isDarkMode ? <LuSun /> : <LuMoon />}
    </button>
  );
}
