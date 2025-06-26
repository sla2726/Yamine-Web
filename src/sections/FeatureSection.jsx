import Embed from "../components/Embed";

function formatWord(word) {
  return <span className="italic font-semibold">{word}</span>;
}

const economia = <span className="underline text-red-700">Economia</span>;
const addBotUrl =
  "https://discord.com/oauth2/authorize?client_id=943330773916876820&scope=bot&permissions=8";

const short_adicione = (
  <a
    href={addBotUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 transition-colors hover:underline hover:text-blue-700"
  >
    adicione
  </a>
);

function FeatureSection() {
  return (
    <div>
      {/* Textos de Explicação - Entrada */}
      <section className="mt-16 bg-blue-500 p-2 flex flex-col items-center">
        <h2 className="text-center text-xl font-sharetech font-bold">
          O que posso fazer por você?
        </h2>
        <div className="flex justify-between w-full">
          <small className="font-sharetech italic text-sm mt-2">
            São tantas coisas...
          </small>
          <small>
            <img
              src="favicon.ico"
              alt="yamine-icon"
              className="w-10 h-10 rounded-full"
            />
          </small>
          <small className="font-sharetech italic text-sm mt-2">
            Já pode ir pegando seu ☕️!
          </small>
        </div>
      </section>

      {/* Textos de Explicação - Começo */}
      <section className="font-oswald font-bold text-2xl ml-5 mt-12 italic text-blue-600 dark:text-blue-300 pt-4">
        <aside>Economia</aside>
      </section>

      {/* Falando sobre a economia do bot*/}
      <section className="font-sharetech font-semibold text-xl ml-5">
        <article>
          O Yamine tem um grande foco na {economia}. Por isso, elementos como{" "}
          {formatWord("criptomoedas")}, {formatWord("apostas")} e{" "}
          {formatWord("batalhas")} estão entre as várias opções que você
          encontrará por aqui!
        </article>
        {/* Embed discord */}
        <div className="pt-4">
          <Embed />
        </div>
      </section>

      {/* Falando sobre o "geral" do bot */}
      <section className="font-oswald font-bold text-2xl ml-5 mt-5 italic text-blue-600 dark:text-blue-300 pt-4">
        <aside>E muito mais!</aside>
      </section>

      <section className="font-sharetech font-semibold text-xl ml-5">
        <article>
          Tenho muitos outros comandos esperando por você! Me {short_adicione}{" "}
          no seu servidor e confira todos eles!
        </article>
      </section>

      <section className="flex flex-col pt-16 pl-3 justify-center items-center">
        <h1 className="font-oswald font-bold text-2xl">
          Alguns servidores que me usam!
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
          <img src="image/server1.png" alt="Paraíso do Betting Money" className="rounded-full w-64 h-48 object-cover shadow-md" />
          <img src="image/server2.png" alt="Chv" className="rounded-full w-64 h-48 object-cover shadow-md" />
          <img src="image/server3.png" alt="GamePark ® CZ/SK" className="rounded-full w-64 h-48 object-cover shadow-md" />
          <img src="image/server4.png" alt="Cassino NovaEra" className="rounded-full w-64 h-48 object-cover shadow-md" />
        </div>
      </section>
    </div>
  );
}

export default FeatureSection;
