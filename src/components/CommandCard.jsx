function CommandCard({ name, description, category, categoryColor, bgColor, bordColor }) {
	return (
		<div className={`relative flex flex-col ${bgColor} rounded-lg shadow-md transition-transform hover:scale-[1.02] p-2 border-t-[26px] ${bordColor}`}>
			<div className={`absolute -top-[26px] left-0 h-[26px] px-2 rounded-t ${categoryColor}`}>
				<span className="text-xs font-oswald font-bold">{category}</span>
			</div>
			<h3 className="text-lg font-oswald font-bold">{name}</h3>
			<p className="text-sm font-sharetech font-semibold">{description}</p>
		</div>
	);
}

export default CommandCard;

