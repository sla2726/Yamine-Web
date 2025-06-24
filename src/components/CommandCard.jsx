function CommandCard({ name, description }) {
	return (
		<div className="relative flex flex-col bg-gray-400 rounded-lg shadow-md p-2 border-t-[26px] border-green-500">
			<div className="absolute -top-[26px] left-0 h-[26px] px-2 rounded-t bg-green-700">
				<span className="text-xs font-oswald font-bold">Economia</span>
			</div>
			<h3 className="text-lg font-oswald font-bold">{name}</h3>
			<p className="text-sm font-sharetech font-semibold">{description}</p>
		</div>
	);
}

export default CommandCard;

