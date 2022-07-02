const JukeCard = ({ name, colour }) => {
	return (
		<div className="juke-card" style={{ backgroundColor: `${colour}` }}>
			<p>{name}</p>
		</div>
	);
};

export default JukeCard;
