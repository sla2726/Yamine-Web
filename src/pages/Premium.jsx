import PremiumCard from "../components/PremiumCard";
import premiumBenefits from "../premium/premiumBenefits.json";

function Premium() {
	return (
		<main className="min-h-screen w-screen flex flex-col items-center bg-snow text-black dark:bg-darkBlue dark:text-white">
			<h1 className="text-2xl font-oswald font-extrabold uppercase underline text-center mb-8">
				Premium
			</h1>
			<section className="flex flex-col gap-5 w-3/4">
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
