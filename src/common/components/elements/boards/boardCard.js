import { useNavigate } from "react-router-dom";

const BoardCard = ({ name }) => {
	let boardNavigate = useNavigate();
	return <div onClick={() => boardNavigate(`/boards/${name}`)}>{name}</div>;
};

export default BoardCard;
