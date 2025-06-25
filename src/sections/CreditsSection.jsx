import { Link } from "react-router-dom";

// Developers Function
function developers(userid, username) {
  return (
    <a
      href={`https://discordapp.com/users/${userid}`}
      target="_blank"
      rel="noopener noreferrer"
      className="italic text-blue-400 transition-colors hover:underline hover:text-blue-700"
    >
      {username}
    </a>
  );
}

// Developers List
const user_void = developers("959988838070108191", "Void");
const user_mistic = developers("509469606013042688", "m1stic7");
const user_jhow = developers("1311160739070742591", "apenas_jhow");
const user_naosoufioti = developers("788455986461016104", "naosoufioti");

// Encurtando hyperlinks
function short_hyperlink(link, word) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="italic text-blue-400 transition-colors hover:underline hover:text-blue-700"
    >
      {word}
    </a>
  );
}
// Encurtando navegação SPA
function short_spa(page, word) {
  return (
    <Link
      to={page}
      className="italic text-blue-400 transition-colors hover:underline hover:text-blue-700"
    >
      {word}
    </Link>
  );
}

function CreditsSection() {
  return (
    <div className="w-full min-h-[30vh] mt-32 bg-black text-white dark:text-white">
      <footer className="flex flex-col items-center justify-center pt-2">
        {/* Developers */}
        <h1 className="font-oswald font-bold text-2xl">Desenvolvedores</h1>
        <div className="grid grid-cols font-sharetech font-semibold text-xl">
          <p>Site: {user_void}</p>
          <p>Bot: {user_mistic}</p>
          <p>Designer: {user_jhow}</p>
          <p>Designer: {user_naosoufioti}</p>
        </div>
        {/* Suporte */}
        <h1 className="font-oswald font-bold text-2xl pt-2">Suporte</h1>
        <div className="grid grid-cols font-sharetech font-semibold text-xl">
          <p>
            Servidor de Suporte:{" "}
            {short_hyperlink(
              "https://discord.gg/fzNXMJMygy",
              "Lobby do Yamine!"
            )}
          </p>
        </div>
        {/* Termos e Diretrizes */}
        <h1 className="font-oswald font-bold text-2xl pt-2">
          Termos de Uso
        </h1>
        <div className="grid grid-cols font-sharetech font-semibold text-xl">
          <p>{short_spa("/termService", "Termos de Serviço")}</p>
          <p>{short_spa("/privacyPolicy", "Política de Privacidade")}</p>
        </div>
        {/* Páginas */}
        <h1 className="font-oswald font-bold text-2xl pt-2">
          Páginas
        </h1>
        <div className="grid grid-cols font-sharetech font-semibold text-xl">
          <p>{short_spa("/commands", "Comandos")}</p>
        </div>
      </footer>
    </div>
  );
}

export default CreditsSection;
