import { useState, useEffect } from "react";
import { AlignJustify, CircleX, BotMessageSquare } from "lucide-react";
import ThemeAnimation from "./components/ThemeAnimation";
import MenuItems from "./components/MenuItems";
import FeatureSection from "./sections/FeatureSection";

function App() {
  // Light/Dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  // Encurtando
  const addBotUrl =
    "https://discord.com/oauth2/authorize?client_id=943330773916876820&scope=bot&permissions=8";

  return (
    <div className="h-screen w-screen transition-all bg-snow text-black dark:bg-slate-900 dark:text-white">
      <div className="p-2 bg-blue-300 relative">
        {/* Título */}
        <h1 className="text-2xl font-raleway font-extrabold absolute inset-0 flex justify-center items-center pointer-events-none">
          YAMINE
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

          <div className="bg-white dark:bg-slate-800 rounded-md w-3/4 mt-10 ml-5 p-2">
            <MenuItems />
          </div>
        </div>
      </div>

      {/* Textos de Apresentação */}
      <section className="p-6 mt-6 mx-auto max-w-xl space-y-2 flex flex-col">
        <h2 className="text-2xl font-bold font-nunito text-left w-fit self-start">
          Apenas um bot do discord pronto para te ajudar!
        </h2>
        <a
          href={addBotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-2xl font-nunito bg-blue-400 p-2 rounded-md hover:underline hover:text-blue-700 transition-colors"
        >
          <span className="mr-2">
            <BotMessageSquare />
          </span>
          Me adicione!
        </a>
      </section>

      {/* Seção - Textos de explicação */}
      <FeatureSection />
    </div>
  );
}

export default App;
