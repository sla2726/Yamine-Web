import { useState, useMemo, useCallback } from "react";
import { Search } from "lucide-react";
import CommandCard from "../components/CommandCard";
import economySection from "../commands/economySection.json";
import criptoSection from "../commands/criptoSection.json";
import betSection from "../commands/betSection.json";
import utilitiesSection from "../commands/utilitiesSection.json";
import funSection from "../commands/funSection.json";
import rpgSection from "../commands/rpgSection.json";

const CATEGORY_CONFIG = {
	Economia: {
		category: "Economia",
		categoryColor: "bg-emerald-500 dark:bg-emerald-700",
		bordColor: "border-emerald-400 dark:border-emerald-500",
	},
	Criptomoedas: {
		category: "Economia - Criptomoedas",
		categoryColor: "bg-emerald-600 dark:bg-emerald-900",
		bordColor: "border-emerald-400 dark:border-emerald-500",
	},
	Apostas: {
		category: "Economia - Apostas",
		categoryColor: "bg-fuchsia-600 dark:bg-fuchsia-900",
		bordColor: "border-emerald-400 dark:border-emerald-500",
	},
	Utilitários: {
		category: "Utilitários",
		categoryColor: "bg-blue-400",
		bordColor: "border-blue-500",
	},
	Diversão: {
		category: "Diversão",
		categoryColor: "bg-yellow-400",
		bordColor: "border-yellow-500",
	},
	RPG: {
		category: "RPG",
		categoryColor: "bg-purple-400",
		bordColor: "border-purple-500",
	},
};

const DEFAULT_STYLE = {
	category: "Outro",
	categoryColor: "bg-gray-400",
	bordColor: "border-gray-500",
};

const sortedCommands = (commands) =>
	[...commands].sort((a, b) => a.name.localeCompare(b.name));

function Commands() {
	// Barra de Pesquisa
	const [searchCommand, setSearchCommand] = useState("");

	// Seções - Ordem alfabética
	const sortedSections = useMemo(
		() => ({
			economy: sortedCommands(economySection),
			cripto: sortedCommands(criptoSection),
			bet: sortedCommands(betSection),
			utilities: sortedCommands(utilitiesSection),
			fun: sortedCommands(funSection),
			rpg: sortedCommands(rpgSection),
		}),
		[],
	);

	const allCommands = useMemo(
		() => [
			...sortedSections.economy,
			...sortedSections.cripto,
			...sortedSections.bet,
			...sortedSections.utilities,
			...sortedSections.fun,
			...sortedSections.rpg,
		],
		[sortedSections],
	);

	const filteredCommands = useMemo(
		() =>
			allCommands.filter((cmd) =>
				cmd.name.toLowerCase().startsWith(searchCommand.trim().toLowerCase()),
			),
		[allCommands, searchCommand],
	);

	const getCommandStyle = useCallback((cmd) => {
		const config = CATEGORY_CONFIG[cmd.category];
		if (!config) {
			console.warn("Categoria desconhecida:", cmd.category);
			return DEFAULT_STYLE;
		}
		return config;
	}, []);

	const commandGroups = useMemo(
		() => [
			{ data: sortedSections.economy, label: "Economia" },
			{ data: sortedSections.cripto, label: "Criptomoedas" },
			{ data: sortedSections.bet, label: "Apostas" },
			{ data: sortedSections.utilities, label: "Utilitários" },
			{ data: sortedSections.fun, label: "Diversão" },
			{ data: sortedSections.rpg, label: "RPG" },
		],
		[sortedSections],
	);

	return (
		<section className="min-h-screen w-screen bg-snow text-black dark:bg-slate-900 dark:text-white">
			<h1 className="font-oswald font-bold text-2xl uppercase text-center">
				Comandos
			</h1>

			<div className="flex flex-col items-center justify-center">
				<div className="relative w-3/4">
					<Search className="absolute left-1 top-1/2 text-gray-500 transform -translate-y-1/2" />
					<input
						type="text"
						placeholder="Pesquisar comandos..."
						className="justify-center w-full rounded-md bg-gray-300 text-black dark:bg-white py-2 pl-9"
						value={searchCommand}
						onChange={(e) => setSearchCommand(e.target.value)}
					/>
				</div>
			</div>

			{searchCommand && (
				<article className="grid grid-cols-1 p-2 gap-6">
					{filteredCommands.map((cmd) => {
						const { category, categoryColor, bordColor } = getCommandStyle(cmd);
						return (
							<CommandCard
								key={cmd.name}
								name={cmd.name}
								description={cmd.description}
								category={category}
								categoryColor={categoryColor}
								bordColor={bordColor}
							/>
						);
					})}
				</article>
			)}

			{!searchCommand && (
				<>
					{commandGroups.map((group) => (
						<article
							key={group.label}
							className="grid grid-cols-1 p-2 pt-6 gap-6"
						>
							{group.data.map((cmd) => {
								const { category, categoryColor, bordColor } =
									getCommandStyle(cmd);
								return (
									<CommandCard
										key={cmd.name}
										name={cmd.name}
										description={cmd.description}
										category={category}
										categoryColor={categoryColor}
										bordColor={bordColor}
									/>
								);
							})}
						</article>
					))}
				</>
			)}
		</section>
	);
}

export default Commands;
