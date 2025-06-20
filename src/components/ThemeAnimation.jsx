import { Sun, Moon } from "lucide-react";

const defaultConfig =
  "absolute inset-0 flex items-center justify-center transition-all duration-300 mt-2";

/*
 *opacity-0: invisível; opacity-100: visível;
 *translate-x-full: move para fora da tela;
 *translate-x-0: para dentro da tela;
 *rotate-90: roda 90 graus
 */

function AnimatedTheme({ isLightMode }) {
  return (
    <div className="relative w-8 h-8">
      <span
        className={`${defaultConfig} text-yellow-400 ${
          isLightMode
            ? "opacity-0 -rotate-90 -translate-x-full"
            : "opacity-100 rotate-0 translate-x-0"
        }`}
      >
        <Sun />
      </span>

      <span
        className={`${defaultConfig} text-blue-900
      ${
        isLightMode
          ? "opacity-100 rotate-0 translate-x-0"
          : "opacity-0 rotate-90 translate-x-full"
      }`}
      >
        <Moon />
      </span>
    </div>
  );
}

export default AnimatedTheme;
