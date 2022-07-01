import { useNavigate } from "react-router-dom";

const BoardCard = ({ name }) => {
	let boardNavigate = useNavigate();
	return <div onClick={() => boardNavigate(`/board/${name}`)}>{name}</div>;
};

export default BoardCard;
