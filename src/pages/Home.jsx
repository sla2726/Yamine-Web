import { AlignJustify, CircleX, BotMessageSquare, House } from "lucide-react";
import FeatureSection from "../sections/FeatureSection";
import CreditsSection from "../sections/CreditsSection";

function Home() {
  // Encurtando
  const addBotUrl =
    "https://discord.com/oauth2/authorize?client_id=943330773916876820&scope=bot&permissions=8";

  return (
    <div className="w-screen min-h-screen transition-all bg-snow text-black dark:bg-slate-900 dark:text-white">
      {/* Textos de Apresentação */}
      <section className="p-6 mx-auto max-w-xl space-y-2 flex flex-col">
        <h2 className="text-2xl font-bold font-sharetech text-left w-fit self-start">
          Apenas um bot do discord pronto para te ajudar!
        </h2>
        <a
          href={addBotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-2xl font-sharetech bg-blue-400 p-2 rounded-md hover:underline hover:text-blue-700 transition-colors"
        >
          <span className="mr-2">
            <BotMessageSquare />
          </span>
          Me adicione!
        </a>
        <a
          href="https://discord.gg/fzNXMJMygy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-2xl font-sharetech bg-blue-400 p-2 rounded-md hover:underline hover:text-blue-700 transition-colors"
        >
          <span className="mr-2">
            <House />
          </span>
          Meu servidor!
        </a>
      </section>

      {/* Seção - Textos de explicação */}
      <div className="">
        <FeatureSection />
      </div>

      {/* Seção - Créditos */}
      <CreditsSection />
    </div>
  );
}

export default Home;
