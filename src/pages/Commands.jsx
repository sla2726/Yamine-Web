import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import CommandCard from "../components/CommandCard";
import economySection from "../commands/economySection.json";
import criptoSection from "../commands/criptoSection.json";
import betSection from "../commands/betSection.json";
import utilitiesSection from "../commands/utilitiesSection.json";
import funSection from "../commands/funSection.json";
import rpgSection from "../commands/rpgSection.json";

function Commands() {
	// Seções de Economia - Ordem alfabética
	const defaultEconomyCommands = useMemo(
		() => [...economySection].sort((a, b) => a.name.localeCompare(b.name)),
		[economySection],
	);

	const criptoEconomyCommands = useMemo(
		() => [...criptoSection].sort((a, b) => a.name.localeCompare(b.name)),
		[criptoSection],
	);

	const betEconomyCommands = useMemo(
		() => [...betSection].sort((a, b) => a.name.localeCompare(b.name)),
		[betSection],
	);

	// Seção de Utilitários - Ordem alfabética
	const defaultUtilitiesSection = useMemo(
		() => [...utilitiesSection].sort((a, b) => a.name.localeCompare(b.name)),
		[utilitiesSection],
	);

	// Seção de Diversão - Ordem alfabética
	const defaultFunSection = useMemo(
		() => [...funSection].sort((a, b) => a.name.localeCompare(b.name)),
		[funSection],
	);

	// Seção de RPG - Ordem alfabética
	const defaultRPGSection = useMemo(
		() => [...rpgSection].sort((a, b) => a.name.localeCompare(b.name)),
		[rpgSection],
	);

	// Barra de Pesquisa
	const [searchCommand, setSearchCommand] = useState("");

	const allCommands = useMemo(() => {
		return [
			...defaultEconomyCommands,
			...criptoEconomyCommands,
			...betEconomyCommands,
			...defaultUtilitiesSection,
			...defaultRPGSection,
			...defaultFunSection,
		];
	}, [
		defaultEconomyCommands,
		criptoEconomyCommands,
		betEconomyCommands,
		defaultUtilitiesSection,
		defaultRPGSection,
		defaultFunSection,
	]);

	const filteredCommands = useMemo(
		() =>
			allCommands.filter((cmd) =>
				cmd.name.toLowerCase().startsWith(searchCommand.toLowerCase()),
			),
		[allCommands, searchCommand],
	);

	function getCommandStyle(cmd) {
		switch (cmd.category) {
			case "Economia":
				return {
					category: "Economia",
					categoryColor: "bg-emerald-500 dark:bg-emerald-700",
					bordColor: "border-emerald-400 dark:border-emerald-500",
				};
			case "Criptomoedas":
				return {
					category: "Economia - Criptomoedas",
					categoryColor: "bg-emerald-600 dark:bg-emerald-900",
					bordColor: "border-emerald-400 dark:border-emerald-500",
				};
			case "Apostas":
				return {
					category: "Economia - Apostas",
					categoryColor: "bg-fuchsia-600 dark:bg-fuchsia-900",
					bordColor: "border-emerald-400 dark:border-emerald-500",
				};
			case "Utilitários":
				return {
					category: "Utilitários",
					categoryColor: "bg-blue-400",
					bordColor: "border-blue-500",
				};
			case "Diversão":
				return {
					category: "Diversão",
					categoryColor: "bg-yellow-400",
					bordColor: "border-yellow-500",
				};
			case "RPG":
				return {
					category: "RPG",
					categoryColor: "bg-purple-400",
					bordColor: "border-purple-500",
				};
			default:
				console.warn("Categoria desconhecida:", cmd.category);
				return {
					category: cmd.category || "Outro",
					categoryColor: "bg-gray-400",
					bordColor: "border-gray-500",
				};
		}
	}

	const commandGroups = useMemo(
		() => [
			{ data: defaultEconomyCommands, label: "Economia" },
			{ data: criptoEconomyCommands, label: "Criptomoedas" },
			{ data: betEconomyCommands, label: "Apostas" },
			{ data: defaultUtilitiesSection, label: "Utilitários" },
			{ data: defaultFunSection, label: "Diversão" },
			{ data: defaultRPGSection, label: "RPG" },
		],
		[
			defaultEconomyCommands,
			criptoEconomyCommands,
			betEconomyCommands,
			defaultUtilitiesSection,
			defaultFunSection,
			defaultRPGSection,
		],
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
