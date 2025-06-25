import CommandCard from "../components/CommandCard";
import economySection from "../commands/economySection.json";
import utilitiesSection from "../commands/utilitiesSection.json";
import funSection from "../commands/funSection.json";
import rpgSection from "../commands/rpgSection.json";

function Commands() {
	{
		/* Seções de Economia - Ordem alfabética */
	}
	const defaultEconomyCommands = economySection
		.filter((cmd) => cmd.id <= 16)
		.sort((a, b) => a.name.localeCompare(b.mame));
	const criptoEconomyCommands = economySection
		.filter((cmd) => cmd.id >= 17)
		.sort((a, b) => a.name.localeCompare(b.mame));
	const betEconomyCommands = economySection
		.filter((cmd) => cmd.id >= 22)
		.sort((a, b) => a.name.localeCompare(b.name));

	{
		/* Seção de Utilitários - Ordem alfabética */
	}
	const defaultUtilitiesSection = utilitiesSection.sort((a, b) =>
		a.name.localeCompare(b.name),
	);
	{
		/* Seção de Diversão - Ordem alfabética */
	}
	const defaultFunSection = funSection.sort((a, b) =>
		a.name.localeCompare(b.name),
	);
	{
	/* Seção de RPG - Ordem alfabética */
	}
	const defaultRPGSection = rpgSection.sort((a, b) =>
		a.name.localeCompare(b.name),
	);

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
						bordColor="border-emerald-500"
					/>
				))}
			</article>

			<article className="grid grid-cols-1 p-2 pt-6 gap-6">
				{/* Utilitários */}
				{defaultUtilitiesSection.map((cmd) => (
					<CommandCard
						key={cmd.id}
						name={cmd.name}
						description={cmd.description}
						category="Utilitários"
						categoryColor="bg-blue-400"
						bordColor="border-blue-500"
					/>
				))}
			</article>

			<article className="grid grid-cols-1 p-2 pt-6 gap-6">
				{/* Diversão */}
				{defaultFunSection.map((cmd) => (
					<CommandCard
						key={cmd.id}
						name={cmd.name}
						description={cmd.description}
						category="Diversão"
						categoryColor="bg-yellow-400"
						bordColor="border-yellow-500"
					/>
				))}
			</article>

			<article className="grid grid-cols-1 p-2 pt-6 gap-6">
				{/* RPG */}
				{defaultRPGSection.map((cmd) => (
					<CommandCard
						key={cmd.id}
						name={cmd.name}
						description={cmd.description}
						category="RPG"
						categoryColor="bg-purple-400"
						bordColor="border-purple-500"
					/>
				))}
			</article>
			
		</section>
	);
}

export default Commands;
