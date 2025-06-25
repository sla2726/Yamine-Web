import CommandCard from "../components/CommandCard";
import economySection from "../commands/economySection.json";

function Commands() {
	{
		/* Seções de Economia */
	}
	const defaultEconomyCommands = economySection.filter((cmd) => cmd.id <= 16);
	const criptoEconomyCommands = economySection.filter((cmd) => cmd.id >= 17);
	const betEconomyCommands = economySection.filter((cmd) => cmd.id >= 22);

	return (
		<section className="min-h-screen w-screen bg-snow text-black dark:bg-slate-900 dark:text-white">
			<h1 className="font-oswald font-bold text-2xl uppercase text-center">
				Comandos
			</h1>

			<article className="grid grid-cols-1 p-2 gap-6">
				{/* Economia - Padrão */}
				{defaultEconomyCommands.map((cmd) => (
					<CommandCard
						key={cmd.id}
						name={cmd.name}
						description={cmd.description}
						category="Economia"
						categoryColor="bg-emerald-700"
						bgColor="bg-gray-400 dark:bg-slate-500"
						bordColor="border-emerald-500"
					/>
				))}
				{/* Economia - Criptomoedas */}
				{criptoEconomyCommands.map((cmd) => (
					<CommandCard
						key={cmd.id}
						name={cmd.name}
						description={cmd.description}
						category="Economia - Criptomoedas"
						categoryColor="bg-emerald-900"
						bgColor="bg-slate-500"
						bordColor="border-emerald-500"
					/>
				))}
				{/* Economia - Apostas */}
				{betEconomyCommands.map((cmd) => (
					<CommandCard
						key={cmd.id}
						name={cmd.name}
						description={cmd.description}
						category="Economia - Apostas"
						categoryColor="bg-fuchsia-900"
						bgColor="bg-slate-500"
						bordColor="border-emerald-500"
					/>
				))}
			</article>
		</section>
	);
}

export default Commands;
