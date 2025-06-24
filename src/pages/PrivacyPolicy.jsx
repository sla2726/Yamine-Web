import privacyPolicy from "../yamine_termos/privacyPolicy.json";

function PrivacyPolicy() {
  return (
    <div>
      <section className="h-screen w-screen min-h-screen bg-snow text-black dark:bg-slate-900 dark:text-white">
        <h1 className="text-2xl font-oswald font-extrabold text-center">Política de Privacidade</h1>
        {privacyPolicy.map((term) => (
          <div key={term.id} className="text-xl mt-3 ml-2 mb-4">
            <strong className="font-oswald font-bold">{term.title}</strong>
            <p className="font-sharetech font-semibold">{term.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PrivacyPolicy;
