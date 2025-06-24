import CommandCard from "../components/CommandCard";
import economySection from "../commands/economySection.json";

function Commands() {
	return (
		<section className="min-h-screen w-screen bg-snow text-black dark:bg-slate-900 dark:text-white">
			<h1 className="font-oswald font-bold text-2xl uppercase text-center">
				Comandos
			</h1>

			{/* Economia */}
			<article className="grid grid-cols-1 p-2 gap-6">
				{economySection.map((cmd) => (
					<CommandCard
						key={cmd.name}
						name={cmd.name}
						description={cmd.description}
					/>
				))}
			</article>
		</section>
	);
}

export default Commands;
