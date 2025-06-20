import Embed from "../components/Embed";

function formatWord(word) {
  return <span className="italic font-semibold">{word}</span>;
}

const economia = <span className="underline text-red-700">Economia</span>;

function FeatureSection() {
  return (
    <div>
      {/* Textos de Explicação - Entrada */}
      <section className="mt-16 dark:bg-blue-500 bg-blue-300 p-2 flex flex-col items-center">
        <h2 className="text-center text-xl font-nunito font-bold">
          O que posso fazer por você?
        </h2>
        <div className="flex justify-between w-full">
          <small className="italic text-sm mt-2">São tantas coisas...</small>
          <small>
            <img
              src="favicon.ico"
              alt="yamine-icon"
              className="w-10 h-10 rounded-full"
            />
          </small>
          <small className="italic text-sm mt-2">
            Já pode ir pegando seu ☕️!
          </small>
        </div>
      </section>

      {/* Textos de Explicação - Começo */}
      <section className="font-raleway text-2xl  ml-5 mt-12 font-bold italic text-blue-600 dark:text-blue-300">
        <aside>Economia</aside>
      </section>

      <section className="font-nunito text-xl font-semibold ml-5">
        <article>
          A Yamine tem um grande foco na {economia}. Por isso, elementos como{" "}
          {formatWord("criptomoedas")}, {formatWord("apostas")} e{" "}
          {formatWord("batalhas")} estão entre as várias opções que você
          encontrará por aqui!
        </article>

        <Embed />
      </section>
    </div>
  );
}

export default FeatureSection;
