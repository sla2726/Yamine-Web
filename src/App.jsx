import { useState, useEffect } from "react";
import { AlignJustify, Sun, Moon } from "lucide-react";
import ThemeAnimation from "./components/ThemeAnimation";

function App() {
  // Light/Dark mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Menu
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="h-screen w-screen transition-all bg-snow text-black dark:bg-slate-900 dark:text-white">
      <div className="p-2 bg-blue-300 relative">
        <button onClick={() => setDarkMode((prev) => !prev)}>
          <ThemeAnimation darkMode={darkMode} />
        </button>

        <button
          className="absolute top-2 right-4 py-2 px-2 z-20 rounded-md bg-darkBlue text-white dark:bg-snow dark:text-black"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <AlignJustify />
        </button>
        <div
          className={`fixed top-0 right-0 h-full w-48 z-10 p-4 bg-black bg-opacity-80 transition-transform duration-300 ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {openMenu && (
            <div className="bg-white dark:bg-slate-800 rounded-md w-3/4 mt-10 ml-5">
              <h2 className="text-xl font-extrabold mb-4 flex justify-center">
                Menu
              </h2>
              <ul className="space-y-2">
                <li>Olokomeo</li>
              </ul>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-extrabold absolute inset-0 flex justify-center items-center pointer-events-none">
          YAMINE
        </h1>
      </div>
    </div>
  );
}

export default App;
