function PremiumCard({ name, description }) {
	return (
		<div className="relative flex flex-col bg-blue-600 bg-opacity-25 rounded-2xl shadow-md transition-transform hover:scale-[1.02] p-2">
			<h1 className="text-lg font-oswald font-extrabold">{name}</h1>
			<p className="font-sharetech font-semibold">{description}</p>
		</div>
	)
}

export default PremiumCard;