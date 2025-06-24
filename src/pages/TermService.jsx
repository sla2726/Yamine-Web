import termsOfService from "../yamine_termos/termsOfService.json";

function TermService() {
  return (
    <div>
      <section className="h-screen w-screen min-h-screen bg-snow text-black dark:bg-slate-900 dark:text-white">
        <h1 className="text-2xl font-oswald font-extrabold text-center">Termos de Serviço</h1>
        {termsOfService.map((term) => (
          <div key={term.id} className="text-xl mt-3 ml-2 mb-4">
            <strong className="font-oswald font-bold">{term.title}</strong>
            <p className="font-sharetech font-semibold">{term.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TermService;
