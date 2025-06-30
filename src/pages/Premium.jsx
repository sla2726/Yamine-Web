import PremiumCard from "../components/PremiumCard";
import premiumBenefits from "../premium/premiumBenefits.json";

function Premium() {
	return (
		<main className="min-h-screen w-screen flex flex-col items-center bg-snow text-black dark:bg-darkBlue dark:text-white">
				<h1 className="text-2xl font-oswald font-extrabold uppercase underline text-center mb-2">
					Premium
				</h1>
				<p className="text-xl font-sharetech font-bold">
					Abaixo estão todos os benefícios do Premium do Yamine.
				</p>
				<small className="font-sharetech font-semibold mb-3">
					Sim, o Yamine tem modo premium!
				</small>

			<section className="flex flex-col gap-5 w-[90%]">
				{premiumBenefits.map((benef) => (
					<PremiumCard
						key={benef.name}
						name={benef.name}
						description={benef.description}
					/>
				))}
			</section>
		</main>
	);
}

export default Premium;
