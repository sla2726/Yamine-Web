import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-all bg-snow text-black dark:bg-slate-900 dark:text-white">
      <div className="p-2">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="py-2 px-4 bg-blue-300 text-white rounded-md"
        >
          Tema
        </button>
        <h1 className="mt-4 text-2xl">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
