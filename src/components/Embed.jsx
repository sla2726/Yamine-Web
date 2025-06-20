import { useState, useEffect } from "react";

function formatWord(word) {
  return <span className="italic font-semibold">{word}</span>;
}

// Formatando o tempo - "Última alteração:"
function formatTime(totalSeconds) {
  // Formatação
  if (totalSeconds < 60) {
    // Menos de 1 minuto
    return `${totalSeconds} segundos!`;
  } else if (totalSeconds < 3600) {
    // Menos de 1 hora
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    if (remainingSeconds === 0) {
      return `${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
    } else {
      return `${minutes}m ${remainingSeconds}s`;
    }
  } else {
    // 1 hora ou mais
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (minutes === 0) {
      return `${hours} ${hours === 1 ? "hora" : "horas"}`;
    } else {
      return `${hours}h ${minutes}m`;
    }
  }
}

function Embed() {
  // Fazendo a contagem - "Bitcoin(unidade):"
  const [bitcoinValue, setBitcoinValue] = useState(2000);
  useEffect(() => {
    const bitcoinInterval = setInterval(() => {
      setBitcoinValue((prevValue) => {
        const change = (Math.random() - 0.5) * 1000;
        return Math.max(0, prevValue + change);
      });
    }, 2000);
    return () => clearInterval(bitcoinInterval);
  }, []);

  // Contagem dos segundos
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="min-h-full p-3 flex flex-col items-center justify-center">
      <h1 className="font-raleway font-bold">Um dos comandos!</h1>

      {/* Título & Container principal */}
      <div className="max-w-lg w-full bg-gray-400 dark:bg-gray-600 border-l-4 border-blue-300 rounded-md p-4">
        <header>
          <h1 className="text-white dark:text-black text-lg font-raleway font-bold">
            Yamine Broker
          </h1>
        </header>

        {/* Embed */}
        <section className="text-base font-nunito font-semibold">
          <h2>Abaixo está o valor atual do {formatWord("Bitcoin")}:</h2>
          <div className="flex gap-2">
            <p className="underline">Bitcoin(unidade):</p>
            <span>{bitcoinValue.toFixed(2)}</span>
          </div>
          <div className="flex gap-1">
            <p className="underline">Última alteração:</p>
            <span className="italic">Há</span>
            <span className="text-red-700 italic">{formatTime(seconds)}</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Embed;
