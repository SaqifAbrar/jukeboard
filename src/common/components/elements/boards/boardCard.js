import { useNavigate } from "react-router-dom";

const BoardCard = ({ name, colour }) => {
	let boardNavigate = useNavigate();
	return (
		<div
			className="card-container"
			onClick={() => boardNavigate(`/board/${name}`)}
			style={{ backgroundColor: `${colour}` }}
		>
			{name}
		</div>
	);
};

export default BoardCard;
