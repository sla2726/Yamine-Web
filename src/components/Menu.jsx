import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlignJustify, CircleX } from "lucide-react";
import ThemeAnimation from "./ThemeAnimation";
import MenuItems from "./MenuItems";

function Menu() {
  // Light/Dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Menu
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="p-2 z-50 top-0 left-0 w-full bg-blue-300 fixed">
      {/* Título */}
      <h1 className="text-2xl font-oswald font-extrabold absolute inset-0 flex justify-center items-center pointer-events-none">
        <Link to="/" className="pointer-events-auto uppercase">Yamine</Link>
      </h1>
      
      {/* Button dark/light theme */}
      <button onClick={() => setIsDarkMode((prev) => !prev)}>
        <ThemeAnimation isDarkMode={isDarkMode} />
      </button>

      {/* Button Menu */}
      <button
        className="absolute top-2 right-4 py-2 px-2 z-40 rounded-md bg-darkBlue text-white dark:bg-snow dark:text-black"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <CircleX /> : <AlignJustify />}
      </button>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-56 z-30 p-4 bg-black bg-opacity-80 transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-xl font-extrabold mb-4 flex justify-center">
          Menu
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-md w-3/4 mt-10 ml-5 p-2 text-black dark:text-white">
          <MenuItems />
        </div>
      </div>
    </div>
  );
}

export default Menu;
